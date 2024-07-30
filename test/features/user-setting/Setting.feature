Feature: Setting

 Background:Check the environment
        Given check for the new features
        Then login as super admin "superadmin" into Android Halo App
        And change the environment

  @TCID:713922 @SmokeTest @CriticalPath @mobilewebapi @messagingservicelayer @database
  Scenario:successully change the account information
    Given login as "updateAccount" into Android Halo App
    And navigate to Settings by clicking on HamburgerMenu
    And click on Account
    And verify the address is "1900 Polaris Parkway" data setup
    When change the office address to "1234 Symplr"
    And  logout
    Given login as "updateAccount" into Android Halo App
    And navigate to Settings by clicking on HamburgerMenu
    And click on Account
    Then verify the address is "1234 Symplr"
    And change the office address to "1900 Polaris Parkway"
    And logout

  @TCID:711499 @SmokeTest  @CriticalPath @mobileapi @servicelayer @database
  Scenario: successully change the password and login with new password
    Given login as <username> and <password> <newPassword>
    And   navigate to Settings by clicking on HamburgerMenu
    And   click on Account
    When  change the password as <newPassword>
    And  logout
    Then enter <username> and <password> login to the application
    And verify login error message prompt is displayed
    Then use <username> and changed <newPassword> to login
    And  verify the user is logged in
    And  logout
    
    Examples:
      | username                    | password | newPassword |
      | AndroidPSWchange@dhauto.com | welcome1 | welcome2     |

  @TCID:473271 @CriticalPath @mobileapi @servicelayer @database
  Scenario: User Successfully configures off duty/autoforward.
  Given login as "messagehandlingsender" into Android Halo App
    When navigate to Settings by clicking on HamburgerMenu
    Then Click on "Off Duty/Auto Forward" option from menu
    Then Click on Message Handling
    Then Select "Off Duty" from Message Handling pop-up
    Then navigate to message by clicking on HamburgerMenu
    Then Verify "Off Duty: On" message in displaying
    When navigate to Settings by clicking on HamburgerMenu
    Then Click on "Off Duty/Auto Forward" option from menu
    Then Click on Message Handling
    Then Select "Auto Forwarding" from Message Handling pop-up and add recipient as "messagehandling receiver"
    Then navigate to message by clicking on HamburgerMenu
    Then Verify "Message Forwarding: On" message in displaying
    When navigate to Settings by clicking on HamburgerMenu
    Then Click on "Off Duty/Auto Forward" option from menu
    Then Click on Message Handling
    Then Select "Regular" from Message Handling pop-up
    And  Click on "Off Duty/Auto Forward" option from menu
    Then Verify "Regular" status of user

    @TCID:848570 @CriticalPath @mobilewebapi @servicelayer @database
    Scenario: User Successfully adds and enables themselves as a Gatekeeper.
    Given login as "gatekeeperadd" into Android Halo App
    When navigate to Settings by clicking on HamburgerMenu
    Then Click on "Gatekeeper" option from menu
    And Select the user "receiver, gatekeeper" from list
    And Click on toggle for user
    Then navigate to message by clicking on HamburgerMenu
    Then Verify "Screening Messages" status is displaying for message
    When navigate to Settings by clicking on HamburgerMenu
    Then Click on "Gatekeeper" option from menu
    And Click on toggle for user
    Then Click on "Gatekeeper" option from menu
    Then For Next Run : delete user
