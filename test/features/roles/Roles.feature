Feature: Roles

 Background:Check the environment
       Given check for the new features
        Then login as super admin "superadmin" into Android Halo App
        And change the environment
        
@TCID:833126 @CriticalPath @mobileapi @servicelayer @database
  Scenario: User Successfully open Teams/Roles screen and can view the contents of all three tabs
  Given login as "roleAndroid" into Android Halo App
  When navigate to Role by clicking on HamburgerMenu
  Then Verify "ROLES/TEAMS", "CRITICAL TEAMS" and "MY ROLES"  tabs

  @TCID:833893 @CriticalPath @mobileapi @servicelayer @database
  Scenario:User able to Toggle on/off Role/Services and according receive the mesage
    Given login as "sendertoggle" into Android Halo App
    And click on PLUS Icon button for message
    Then add "toggleAndroid" as a Recepient
    And compose a text message ""
    And logout
    Then login as "receivertoggle" into Android Halo App
    And  verify user received the message
    And navigate to Role by clicking on HamburgerMenu
    And Click on "MY ROLES" tabs
    Then Click on toggle for Role
    And logout
    Then login as "sendertoggle" into Android Halo App
    And click on PLUS Icon button for message
    Then add "toggleAndroid" as a Recepient
    And compose a text message ""
    And logout
    Then login as "receivertoggle" into Android Halo App
    And  verify user doesnot received the message
    And navigate to Role by clicking on HamburgerMenu
    And Click on "MY ROLES" tabs
    Then Click on toggle for Role
    And logout