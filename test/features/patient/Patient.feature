Feature: Patient

  Background:Check the environment
    Given check for the new features
    Then login as super admin "superadmin" into Android Halo App
    And change the environment

  @TCID:713198 @SmokeTest @CriticalPath @mobilewebapi @patientapi @elasticsearch
  Scenario: successfully add patient to my patient list
    Given login as "patientUser" into Android Halo App
    And clean up : remove patient "android, patient user"
    And login as "patientUser" into Android Halo App
    And  navigate to Patients by clicking on HamburgerMenu
    And  click on search icon
    When search for "android, patient user" in search field
    And  select "android, patient user" to add to My List from right side menu
    Then click back button
    Then check "patient android (Male) 4/7/1971" is added into your list
    And clean up : remove patient "android, patient user"

  @TCID:711498 @SmokeTest @CriticalPath @mobilewebapi @servicelayer @patientapi @elasticsearch @messagingservicelayer @database
  Scenario: successfully send a message along with the patient attached to the thread
    Given login as "patientUserAttached" into Android Halo App
    And  click on PLUS Icon button for message
    And  perform action Attach Patient from right side menu
    When search for "android, patient user" in search field
    And  select the "android, patient user" to attach to the message
    And the user sends the following "" to "patientreceiver attached"
    And logout
    Then login as "patientReceiverAttached" into Android Halo App
    And receives the message with patient "android, patient user" attached

  @TCID:713904 @SmokeTest @CriticalPath @database
  Scenario: User successfully Hand Off Patient (provider login) from Handoff screen
    Given login as "askUser" into Android Halo App
    And  navigate to Handoff by clicking on HamburgerMenu from main dropdown menu
    When select the patients "_Android, _Test" for Hand Off from the list
    And click on Hand Off from header tab
    Then the patients are handed off
    And select the patients "_Android, _Test" for take back from the list
    And click on Take Back from header tab
    And the patients are handed back
    And  logout

  @TCID:842854 @CriticalPath @mobilewebapi @servicelayer @patientapi @elasticsearch @messagingservicelayer @database
  Scenario:User Successfully attaches a patient to an existing thread
    Given login as "senderthreadpatient" into Android Halo App
    And click on PLUS Icon button for message
    And the user sends the following "" to "receiver existingthreadpatient"
    And logout
    Then login as "receiverthreadpatient" into Android Halo App
    And  Open the message
    And  perform action Attach Patient from right side menu
    When search for "android, patient user" in search field
    And  select the "android, patient user" to attach to the message
    And compose a text message ""
    And logout
    Then login as "senderthreadpatient" into Android Halo App
    And receives the message with patient "android, patient user" attached in existing thread

