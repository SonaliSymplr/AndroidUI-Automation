# Getting Started with Halo Webdriver IO Andriod Automation
This ReadMe contains details on how to navigate through the framework, setup your environment to use the framework. Though this is not a comprehensive guide a seasoned automation engineer should be able to get a overview of the whole project and structure.

## Pre Requisite
***
Install the below if they are not already installed on your local environment
- NodeJS (latest version)
- Visual Studio code (latest version)

## Installation
***
Use the following command after every pull request to install missing packages  
`npm install`  
To force installation  
`npm install -force`

## Debugging a test 
***
Open JavaScript Debugging terminal and run the commands to initiate debugging.
Use breakpoints to get the insights and details

## Adding a new test
***
Add the feature file in the test/features/<folder>/<featureFileName>.feature  
Add the test definition files in test/step-definitions/web-portal/<featurefileName>.steps.ts  
Use the below section in config file to manage test the files to include or exclude  

```json
  specs: ["./test/features/**/*.feature"],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
```
## Configs usage
***
- wdio.master.conf  
  This is base config which is derive by other configs
- wdio.local.chrome.conf  
  Choose this config to run tests locally using chrome browser.
- wdio.chrome.conf  
  Choose this config to run tests on browserstack using chrome browser.
- appConfig.json  
  This file is generated at run time and used by the framework to run tests 
- appConfig.default.json  
  If no environment is set the following config will be used and generates appConfig.json
- appConfig.staging.json  
  If environment is set to staging the following config will be used to overwrite default config and generates appConfig.json
- appConfig.prod.json  
  If environment is set to prod the following config will be used to overwrite default config and generates appConfig.json

## Run a tests
***
  Choose an environment described in the below section  
- Running on Samsung chrome  
  npx wdio ./config/browserStack/wdio.samsung.conf.ts
- Running a single test   
  npx wdio ./config/browserStack/wdio.samsung.conf.ts --cucumberOpts.tagExpression '@TCID:473205'

## Running tests in browserstack
Create a .env file in the root of the project ANDROIDUI-AUTOMATION and add your browserstack credentials

```
BS_USERNAME=<your_browserstack_username>
BS_PASSWORD=<your_browserstack_AccessKey>
```

## Disabling a test
***
- Due to Bug
  Add @skip tag with bug number
  ```
  @skip('Bug 145270')
  ```
- Automation needs to be updated
  Add @skip tag with reason
  ```
  @skip('Faling while using safari needs an update on calendar click')
  ```

## Choosing an environment
***
For choosing Staging use the following command in the  
`$env:ENV='STAGING'`
`$env:ENV='PRODUCTION'`
`$env:ENV='QA'`
`$env:ENV='PERF'`
Check the env set 
`$env:Env`

## Reporting
***
- Allure is used for reporting.
- Dot Reporter
- Json Reporter (used for rerunning tests)
- Spec Reporter
You can turn on or off the reports by commenting and uncommenting the following in the config
  ```json
  reporters: [
    "dot",
    "spec",
    [
      "cucumberjs-json",
      {
        jsonFolder: "./reports/json",
        language: "en",
      },
    ],
    // [video, {
    //   saveAllVideos: true,
    //   videoSlowdownMultiplier: 50
    // }],
    [
      "allure",
      {
        outputDir: "./reports/allure-results",
        addConsolelogs: true,
        useCucumberStepReporter: true,
      },
    ],
  ]
  ```

## Formatting
***
Install VS Code extension for working with the feature file
**Cucumber (Gherkin) Full Support**  
add the below json in to .vscode/settings.json to support navigation
```
{
  "files.autoSave": "afterDelay",
  "cucumberautocomplete.steps": ["test/step-definitions/*/*.ts"],
  "cucumberautocomplete.syncfeatures": "test/features/*/*.feature",
  "cucumberautocomplete.strictGherkinCompletion": true,
  "cucumberautocomplete.smartSnippets": true,
  "cucumberautocomplete.stepsInvariants": true
}
```

## ReRun Failures
***

The **ReRunFailedTests.ps1** script collects failures from the JSON results file and generates a script that can be used to re-run the failed tests.

Optional paramenter that can be used to overwide the defaults:

- **-folderPath** location where your **/reports/json folder is located, default value is "C:\wfm-scc-halo-qa-automation\AndroidUI-Automation\reports\json", this changes depending on your source code mapping on your local

- **-browser** the traget browser you want to use, default value is "win10.chrome"

ReRunFailedTests.ps1 **-folderPath** "C:\my\custom\folder" **-browser** "win10-edge"

A new file named **"retryTest_mmddyyyy_hhmmss.ps1"** has been generated, which includes all the failed tests. This file follows a naming convention based on the current date and time.

To rerun all the failures, you can execute the "retryTest_mmddyyyy_hhmmss.ps1" script from the PowerShell command in Visual Studio Code. Ensure that you navigate to the directory where the script is located using the **-folderPath** parameter.

Here is the code to run the test.
```
# cd to -folderpath
.\retryTest_mmddyyyy_hhmmss.ps1
```

**Prettier** package is used for formatting the code  
Run the following command  
`npx prettier --write .`

## Folder Structure
***
--WEBAUTOMATION  
>|--allure-report (all reports related to allure - no part of source control)  
&nbsp;&nbsp;|--config (wdio config, environment config which has user credentials )  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--browserStack (contains all predefined configs to run in browserstack)  
&nbsp;&nbsp;|--configDataProvider (to process the environment and user credentials)  
&nbsp;&nbsp;|--Dtos (contains data transfer objects for easy interpretation and type safety)  
&nbsp;&nbsp;|--node_modules (installed module for the framework, can be deleted and added back by running **npm install**)  
&nbsp;&nbsp;|--page-objects  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--base (contains core controls and acts are a layer between application framework and automation tool)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--constants (application constants they will be static till development changes the code)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--mobile-app (contains page objects for mobile app)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--web-portal (contains page objects for all web pages)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--PageManager.ts (composition or all pages, need to initialize it by passing the driver to start interacting with the web pages)  
&nbsp;&nbsp;|--reports (location for all the generated reports not part of source control)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--json (file contains results and script to rerun tests)
&nbsp;&nbsp;|--test (contains all test both feature files and step definition)  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--Constants (file contains constants to use in tests)  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--Data (data & content needed for the tests)  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--features (contains feature files and scenarios)  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--step-definitions (contains feature file definitions)  
&nbsp;&nbsp;|--types (type definition files, currently it is placeholder)  
&nbsp;&nbsp;|--utils  (contains all utility files which can be part of other projects too)  
&nbsp;&nbsp;|--\_results_ (contains all results files, not part of source control)  
&nbsp;&nbsp;|--.gitignore (list of file and folders that should not be part of source control)  
&nbsp;&nbsp;|--.prettierignore (list of file and folders that should not be part of auto formatting)  
&nbsp;&nbsp;|--package-lock.json (paths for package download location)  
&nbsp;&nbsp;|--package.json (list for packages that are needed for framework)    
&nbsp;&nbsp;|--ReadMe.MD (this file)
&nbsp;&nbsp;|--ReRunFailedTests.ps1  
&nbsp;&nbsp;|--tsconfig.json (contains compilation options for type script)