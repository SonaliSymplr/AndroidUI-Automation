Feature: Contact

 Background:Check the environment
        Given check for the new features
        Then login as super admin "superadmin" into Android Halo App
        And change the environment
        
        
  @TCID:711497 @SmokeTest @CriticalPath @mobileapi @database @mobilewebapi @messagingservicelayer
  Scenario: successfully searches for contact and sends a message
    Given login as "searchContact" into Android Halo App
    And navigate to Contacts by clicking on HamburgerMenu
    When click on search icon
    And search for "user 1" in search field
    And select the contact "user 1" from the search result
    And click on message icon
    And compose a time stamped message to contact and sent it
    And logout
    Then login as "user1" into Android Halo App
    And verify user received the time stamped message
    And logout

  @TCID:713909 @SmokeTest @CriticalPath @mobileapi @kafka @entitiespersonalgroupseventsprocessor @entitiesrequestsagaprocessor @entitiesuserdeviceupdatesprocessor
  Scenario: successfully rename a group
    Given login as "groupRename" into Android Halo App
    And navigate to Contacts by clicking on HamburgerMenu
    When click on search icon
    And search for "Group For Rename" in search field
    And select the partial contact "Group For Rename" from the search result
    And edit the group by click on edit button
    Then enter new name "Group For Rename" and save it
    And verify the renamed group is not displayed in the contact list
    Then navigate back
    And logout

  @TCID:536609 @SmokeTest @kafka @entitiespersonalgroupseventsprocessor @entitiesrequestsagaprocessor @entitiesuserdeviceupdatesprocessor @mobilewebapi @servicelayer @database @messagingservicelayer
  Scenario: User successfully creates the group and sends a message
    Given login as "personalGroup" into Android Halo App
    And navigate to Contacts by clicking on HamburgerMenu
    And click on add New Icon
    When create a new "personal group" with the following group members:
      | group member1 |
      | group member2 |
      | group member3 |
    And click on message icon
    And compose a time stamped message to contact and sent it
    And logout
    Then login as "groupMember1" into Android Halo App
    And verify user received the time stamped message
    And logout

  @TCID:711487 @CriticalPath @mobileapi @kafka @entitiespersonalgroupseventsprocessor @entitiesrequestsagaprocessor @entitiesuserdeviceupdatesprocessor
  Scenario: User Successfully creates a personal group
    Given login as "createGroup" into Android Halo App
    And navigate to Contacts by clicking on HamburgerMenu
    And click on add New Icon
    When create a group "Android Automation personal group" with the following group members:
      | Member1 ForGroup |
      | Member2 ForGroup |
      | Member3 ForGroup |
    And navigate to Contacts by clicking on HamburgerMenu
    When click on search icon
    And search for "Android Automation personal group" in search field
    And verify the "Android Automation personal group" present in the list
    Then For Next Run : delete "Android Automation personal group"
    Then navigate back
    And logout

