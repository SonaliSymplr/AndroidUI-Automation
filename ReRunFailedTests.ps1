<#
.SYNOPSIS
Processes all the results file, finds the failed scripts, creates WDIO commands to rerun them, and saves them to a script file.

.DESCRIPTION
This script processes all JSON files in a specified folder.
It filters out tests that fail and have non-empty tags, extracts unique tags,
generates an npx command based on the tags, and saves the command to a script file.
Additionally, it deletes the JSON files from the folder.

.PARAMETER folderPath
Specifies the path of the folder containing the JSON files.

.EXAMPLE
.\ReRunFailedTests.ps1 -folderPath C:\wfm-scc-halo-qa-automation\AndroidUI-Automation\reports\json
This example runs the script, specifying the folder path where the JSON files are located.
#>

param (
    [Parameter(Mandatory = $false)]
    [string]$folderPath = "C:\wfm-scc-halo-qa-automation\AndroidUI-Automation\reports\json",
    [Parameter(Mandatory = $false)]
    [string]$browser = "samsung"
)

Write-Output "Processing results from $folderPath"

# Step 1: Combine elements from JSON files
$filePaths = Get-ChildItem -Path $folderPath -Filter "*.json" | Select-Object -ExpandProperty FullName
$combinedElements = @()

foreach ($filePath in $filePaths) {
    $content = Get-Content -Path $filePath -Raw | ConvertFrom-Json
    $elements = $content | Select-Object -ExpandProperty elements
    $combinedElements += $elements
}

$combinedOutput = @{
    "elements" = $combinedElements
} | ConvertTo-Json -Depth 100

# Step 2: Process elements and generate results
$testData = ConvertFrom-Json $combinedOutput
$results = @()

foreach ($element in $testData.elements) {
    $allPassed = $true

    foreach ($step in $element.steps) {
        if ($step.result.status -eq "failed") {
            $allPassed = $false
            break
        }
    }

    $resultObject = [PSCustomObject]@{
        allPassed = $allPassed
        tags = $element.tags.name | Where-Object { $_ -like "@TCID*" } | Select-Object -Unique
    }

    $results += $resultObject
}

$resultsJson = $results | ConvertTo-Json

# Step 3: Filter and clean up results
$cleanedUpResults = $resultsJson | ConvertFrom-Json
$filteredObjects = $cleanedUpResults | Where-Object { $_.tags.PSObject.Properties.Count -gt 0 } | Where-Object { $_.allPassed -eq $false }
$filteredJson = $filteredObjects | ConvertTo-Json
$tcs = $filteredJson | ConvertFrom-Json

$tags = @()
foreach ($tc in $tcs) {
    $tags += $tc.tags
}

$tagsString = ($tags | Get-Unique) -join ' or '

# Step 4: Generate the npx command
if ($filteredObjects) {
    $command = "Write-Host 'Executing the following tests ${tagsString}';" +
    "npx wdio ./config/browserStack/wdio.${browser}.conf.ts --cucumberOpts.tagExpression '${tagsString}';"

    # Step 5: Save the command to a script file
    $timestamp = Get-Date -Format "MMddyyyy_HHmmss"
    $scriptFileName = "retryTest_$timestamp.ps1"
    $command | Out-File -FilePath "$folderPath\$scriptFileName"

    Write-Output "ReRun script is located at:`n$folderPath\$scriptFileName"
}
else {
    Write-Output "No failed tests found"
    return
}

# Step 6: Delete JSON files
$jsonFiles = Get-ChildItem -Path $folderPath -Filter "*.json" -File
$jsonFiles | Remove-Item -Force
