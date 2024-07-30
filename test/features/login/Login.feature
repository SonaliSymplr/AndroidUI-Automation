Feature: Login

 Background:Check the environment
        Given check for the new features
        Then login as super admin "superadmin" into Android Halo App
        And change the environment
        
  @TCID:472631 @SmokeTest @CriticalPath @mobileapi @database
  Scenario: Enters correct username and password must be taken to messages page
    Given login as "androidAdmin" into Android Halo App
    Then  message page will open

  @TCID:472576 @CriticalPath @mobilewebapi @servicelayer @database
  Scenario: Successufully log out of the passcode screen
    Given login as "passcodeLogoutuser" into Android Halo App
    And navigate to Settings by clicking on HamburgerMenu
    And click on security
    When click on passcode
    Then toggle on the passcode
    And enter the passcode
    And enter the passcode
    And set required passcode as "Immediately"
    And put the app in Background
    And put the app in Foreground
    And hit the logout button

  @TCID:790479 @CriticalPath @mobilewebapi @servicelayer @database
  Scenario: successfully log out from login screen
    Given login as "androidAdmin" into Android Halo App
    And logout

  @TCID:790631 @CriticalPath @mobilewebapi @servicelayer @database
  Scenario: Successufully log out of the passcode screen
    Given login as "passcodeUser" into Android Halo App
    And navigate to Settings by clicking on HamburgerMenu
    And click on security
    When click on passcode
    Then toggle on the passcode
    And enter the passcode
    And enter the passcode
    And set required passcode as "Immediately"
    And put the app in Background
    And put the app in Foreground
    And enter the passcode
    And logout

  @TCID:844945 @CriticalPath @mobilewebapi @servicelayer @database
  Scenario: User Successfully configures the passcode screen
    Given login as "passcodeete" into Android Halo App
    And navigate to Settings by clicking on HamburgerMenu
    And click on security
    When click on passcode
    And Check change passcode is disable
    Then toggle on the passcode
    And enter the passcode
    And enter the passcode
    And set required passcode as "Immediately"
    And put the app in Background
    And put the app in Foreground
    And enter the passcode
    And logout
    Then login as "passcodeete" into Android Halo App
    And navigate to Settings by clicking on HamburgerMenu
    And click on security
    When click on passcode
    And check passcode is toggle off
    And Check change passcode is enable
    And logout

  @TCID:856417 @CriticalPath @mobileapi @servicelayer @database
  Scenario: Successfully log in with saml credentials
    Given enter the username "SAMLuser"
    And click on continue button
    When login to Microsoft authentication window for "SAMLuser"
    Then message page will open
