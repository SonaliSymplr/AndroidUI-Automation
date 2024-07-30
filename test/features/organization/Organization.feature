Feature: Organization

  Background:Check the environment
    Given check for the new features
    Then login as super admin "superadmin" into Android Halo App
    And change the environment

  @TCID:531891 @SmokeTest @CriticalPath @mobilewebapi @servicelayer @database
  Scenario: successully view MySchedules from the organization tab
    Given login as "myscheduleUser" into Android Halo App
    And   navigate to Organization by clicking on HamburgerMenu
    When  click on "My Schedule"
    And  My schedule display the current day, date and time zone
    Then click Prev Month it will display the services for last month
    And  click Next Month it will display services for next "3" month
    And  able to see the schedule role "Test"
    And  click on schedule role "Test"
    And  navigate back to previous page
    And  navigate back to previous page
    And  logout

  @TCID:826597 @SmokeTest @CriticalPath @mobilewebapi @servicelayer @database
  Scenario: successully view MySchedules from the organization tab
    Given login as "MySchedule" into Android Halo App
    And   navigate to Organization by clicking on HamburgerMenu
    When  click on "My Schedule"
    And  My schedule display the current day, date and time zone
    And  able to see the schedule role "Test1"
    And  click on schedule role "Test1"
    And  compose a message for "Test1"
    Then compose a text message ""
    And logout
    When login as "Serviceattendee" into Android Halo App
    And verify user received the message
    And  logout

  @TCID:779315 @CriticalPath @mobileapi @database
  Scenario: User Successfully opens the Organization screen
    Given login as "organizationView" into Android Halo App
    And  navigate to Organization by clicking on HamburgerMenu
    Then verify all the following tab displyed correctly
      | iOS Mobile Automation |
      | Directory             |
      | My Schedule           |
      | All Schedules         |
    And logout

  @TCID:833907 @CriticalPath @mobilewebapi @organizationapi @servicelayer @database
  Scenario:User Successfully opens the Schedules screen from All schedule
    Given login as "allscheduleview" into Android Halo App
    When  navigate to Organization by clicking on HamburgerMenu
    Then click on "All Schedules"
    And Search the schedule "AllScheduleView"
    Then Click on current date
    Then Verify the "AllScheduleView" schedule details

  @TCID:833900 @CriticalPath @mobilewebapi @servicelayer @database
  Scenario: User Successfully opens the My Schedule view and opens the detail view for a service (role)
    Given login as "myscheduledetailview" into Android Halo App
    And   navigate to Organization by clicking on HamburgerMenu
    When  click on "My Schedule"
    And  My schedule display the current day, date and time zone
    And  able to see the schedule role "Detailview"
    Then  click on schedule role "Detailview"
    And  able to see the schedule role "Notes"
    And  able to see the schedule role "Scheduled"
    And  check the service user as "user, schedule"
    And  able to see the schedule role "Used By"
    And  check the service user as "Schedule Admins"
    And  check the service user as "automationuser, android"
    Then  navigate back to previous page
    And  navigate back to previous page
    And logout

  @TCID:833918 @CriticalPath @mobilewebapi @messagingrecipientapi @database
  Scenario: User Successfully conducts Community User Search
    Given login as "communityuserforhalohaspital" into Android Halo App
    And   navigate to Organization by clicking on HamburgerMenu
    When  click on "Community User Search"
    Then enter the last name "user" and first name as "automation"
    And add user into the contact list
    And navigate to Contacts by clicking on HamburgerMenu
    When click on search icon
    And search for "automation user" in search field
    Then For Next Run : delete "automation user"

  @TCID:856411 @CriticalPath @mobileapi @database
  Scenario:User Successfully opens the Organization and can drill down to user via AOS
    Given login as "searchAOS" into Android Halo App
    And   navigate to Organization by clicking on HamburgerMenu
    Then click on "All Schedules"
    When click on search icon
    Then click on "AREAS OF SERVICE"
    And Search the schedule "Development"
    When  click on "Android My schedule"
    And  My schedule display the current day, date and time zone
    Then  navigate back to previous page
    And logout
