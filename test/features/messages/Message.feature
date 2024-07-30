Feature: Messages


  Background:Check the environment
    Given check for the new features
    Then login as super admin "superadmin" into Android Halo App
    And change the environment

  @TCID:711549 @SmokeTest @CriticalPath @mobilewebapi @messagingservicelayer @database
  Scenario: User successfully Send/Receive the message
    Given login as "messagesender" into Android Halo App
    And click on PLUS Icon button for message
    And the user sends the following "" to "Android message receive"
    And logout
    Then login as "messagereceiver" into Android Halo App
    Then verify user received the message
    And logout

  @TCID:713916 @SmokeTest @CriticalPath @mobilewebapi @messagingservicelayer @database
  Scenario: successfully send a message to a distribution list
    Given login as "distlistadmin" into Android Halo App
    And click on PLUS Icon button for message
    And the user sends the following "" to "Android DIST List"
    And logout
    Then login as "distreceiver" into Android Halo App
    And  verify user received the message
    And logout

  @TCID:625229 @SmokeTest @CriticalPath @mobilewebapi @messagingservicelayer @database
  Scenario: User successfully sends message to the Critical Teams
    Given login as "CriticalTeamAdmin" into Android Halo App
    And click on PLUS Icon button for message
    And the user sends the following "" to "Android Critical Team"
    Then clicking on (i)
    And displays members of the team correctly
      | Android CriticalTeamAdmin |
      | Android CriticalTeamUser1 |
      | Android CriticalTeamUser2 |
    Then navigate back to previous page
    And logout
    Then login as "CriticalTeamuser" into Android Halo App
    And  verify user received the message
    And logout

  @TCID:711490 @SmokeTest @CriticalPath @mobilewebapi @messagingservicelayer @database
  Scenario: successfully send a message with an urgent flag
    Given login as "androidQuickUser" into Android Halo App
    And click on PLUS Icon button for message
    Then add "Android urgent receiver" as a Recepient
    And select message type "Mark as Urgent" from the paperclip menu
    Then compose a text message "Urgent"
    And "URGENT!" text displayed above the message
    And logout
    Then login as "androidUrgentReceiver" into Android Halo App
    And  verify user received the message
    And "URGENT!" text displayed above the message
    And logout


  @TCID:819663 @SmokeTest @CriticalPath @mobilewebapi @messagingservicelayer @database @filemanagementapi
  Scenario: successfully send a message to a critical team and verify if the messages are marked as urgent
    Given login as "CriticalMsg" into Android Halo App
    And click on PLUS Icon button for message
    And the user sends the following "" to "Android critical team urgent meg"
    And logout
    Then login as "Urgentmsgreceiver" into Android Halo App
    And  verify user received the message
    And "URGENT!" text displayed above the message
    And logout

  @TCID:711648 @SmokeTest @CriticalPath @mobilewebapi @messagingservicelayer @database @filemanagementapi
  Scenario: successfully forward a message with attachment
    Given login as "SenderUser" into Android Halo App
    And composing a new message for "Androidattach image"
    And select message type "Choose Existing" from the paperclip menu
    And attach the image
    Then compose a text message "ImageAttached"
    And logout
    When login as "Imagereceiver" into Android Halo App
    And verify user received the message
    And verify the message receive with attachment
    Then forward message thread to "forwarduser"
    Then add "Androidforward image" as a Recepient
    When successfully send message
    And logout
    And login as "Forwarduser" into Android Halo App
    And verify user received the message with "Originally from:"
    And verify the message receive with attachment
    And logout


  @TCID:711602 @SmokeTest @mobilewebapi @servicelayer @database @usersapi  @kafka @entitiesuserseventsprocessor @entitiesrequestsagaprocessor
  Scenario: successfully send a message to a OffDutyUser
    Given login as "offsender" into Android Halo App
    And composing a new message for "Android offduty"
    And  verify the "Off Duty" status of "Android offduty"
    Then compose a text message ""
    And click on Send button in pop-up
    And logout
    Then login as "offdutyreceiver" into Android Halo App
    And verify user received the message with "Off Duty Overridden:"
    And logout

  @TCID:713892 @SmokeTest @CriticalPath @mobilewebapi @servicelayer @database @usersapi  @kafka @entitiesuserseventsprocessor @entitiesrequestsagaprocessor
  Scenario: successfully send a message to a Autoforward User
    Given login as "AutoFwdSender" into Android Halo App
    And composing a new message for "Android autoforward"
    And  verify the "Forwarding" status of "Android autoforward"
    Then compose a text message ""
    And able to see the forwarding message for "Android autoforward"
    And click on Send button in pop-up
    And logout
    Then login as "ForwaardingTo" into Android Halo App
    And verify user received the message with "Originally To:"
    And logout


  @TCID:827350 @CriticalPath @mobilewebapi @servicelayer @database @messagingservicelayer
  Scenario: User Successfully sends a message to a personal group
    Given login as "GroupAdmin" into Android Halo App
    And click on PLUS Icon button for message
    And the user sends the following "" to "Personal Group"
    And logout
    Then login as "GroupMember1" into Android Halo App
    And  verify user received the message
    And logout


  @TCID:828169 @CriticalPath @mobilewebapi  @servicelayer @messagingservicelayer @database
  Scenario: User Successfully uses a quick note to populate the message text
    Given login as "QuickNotesender" into Android Halo App
    And click on PLUS Icon button for message
    Then add "quicknote receiver" as a Recepient
    And select message type "Quick Note" from the paperclip menu
    Then select the quick note
    When successfully send message
    And logout
    Then login as "QuickNotereceiver" into Android Halo App
    And  verify user received the message
    And logout

  @TCID:829104 @CriticalPath @mobilewebapi @messagingservicelayer @database
  Scenario: User Successfully sends a message to multiple recipients
    Given login as "Multiusermessagesender" into Android Halo App
    And click on PLUS Icon button for message
    Then add "Multimsg user1" as a Recepient
    Then add "Multimsg user2" as a Recepient
    And compose a text message ""
    And logout
    Then login as "Multiusermessageuser1" into Android Halo App
    And  verify user received the message
    And logout
    Then login as "Multiusermessageuser2" into Android Halo App
    And  verify user received the message
    And logout


  @TCID:829078 @CriticalPath @mobilewebapi @messagingservicelayer @database
  Scenario: User successfully sends message to the Roles/Teams
    Given login as "ClinicalTeamAdmin" into Android Halo App
    And click on PLUS Icon button for message
    And the user sends the following "" to "Android Clinical Team"
    Then clicking on (i)
    And displays members of the team correctly
      | Android ClinicalTeamAdmin |
      | Android ClinicalTeamUser2 |
      | Android clinicalTeamUser1 |
    Then navigate back to previous page
    And logout
    Then login as "ClinicalTeamuser1" into Android Halo App
    And  verify user received the message
    And logout

  @TCID:5ccd9f29-6ef2-4504-81fb-c8d7de57af8d @skip
  Scenario: Halo mobile's messaging functionality check
    Given login as "androidAdmin" into Android Halo App
    And the admin 'adminSnehal' logs into app
    When the admin 'adminSnehal' sends the following message from app
      | Recepient  | Message                |
      | Prasanth R | This is a test message |
    And the admin 'webPortalAdmin' logs into webportal
    And the admin 'webPortalAdmin' ensures the following message is received
      | Sender | Message                |
      | S P    | This is a test message |



  @TCID:833320 @CriticalPath @mobilewebapi @messagingservicelayer @database
  Scenario: User Successfully replies to an existing thread with an individual
    Given login as "messagereceiver" into Android Halo App
    Then Open the message
    And compose a text message ""
    And logout
    Then login as "messagesender" into Android Halo App
    Then verify user received the message in existing thread
    And logout

  @TCID:833322 @CriticalPath @mobilewebapi @servicelayer @database @messagingservicelayer
  Scenario: User Successfully replies to an existing thread with personal group
    Given login as "GroupMember1" into Android Halo App
    Then Open the message
    And compose a text message ""
    And logout
    Then login as "GroupMember2" into Android Halo App
    Then verify user received the message in existing thread
    And logout

  @TCID:833323 @CriticalPath @mobilewebapi @messagingservicelayer @database
  Scenario: User Successfully replies to an existing thread with a team/role
    Given login as "ClinicalTeamuser1" into Android Halo App
    Then Open the message
    And compose a text message ""
    And logout
    Then login as "ClinicalTeamAdmin" into Android Halo App
    Then verify user received the message in existing thread
    And logout

  @TCID:833327 @SmokeTest @CriticalPath
  Scenario: User Successfully replies to an existing thread with a distribution list
    Given login as "distreceiver" into Android Halo App
    Then Open the message
    And compose a text message ""
    And logout
    Then login as "distlistadmin" into Android Halo App
    Then verify user received the message in existing thread
    And logout

  @TCID:833321 @CriticalPath @mobilewebapi @messagingservicelayer @database
  Scenario: User Successfully replies to an existing thread with multiple recipients
    Given login as "Multiusermessageuser1" into Android Halo App
    Then Open the message
    And compose a text message ""
    And logout
    Then login as "Multiusermessagesender" into Android Halo App
    Then verify user received the message in existing thread
    And logout

  @TCID:833335 @CriticalPath @mobilewebapi @messagingservicelayer @database
  Scenario: User Successfully sends a message with Notify Me enabled
    Given login as "notifyMesender" into Android Halo App
    And click on PLUS Icon button for message
    Then add "notifyMe Receiver" as a Recepient
    And select message type "Notify Me" from the paperclip menu
    And "You will be notified in 10 minutes if this message remains unread." Notify Me message shows up
    Then compose a text message ""
    And logout


  @TCID:717010 @CriticalPath @mobilewebapi @messagingservicelayer @database
  Scenario: User Successfully forwards a thread with at least one attachment
    Given login as "Forwarduser" into Android Halo App
    Then forward message thread from message list view to "ForwardThread receiver"
    And compose a text message ""
    And logout
    And login as "frwdamgreceiver" into Android Halo App
    And verify the message receive with attachment
    And logout

  @TCID:852240 @CriticalPath @mobilewebapi @messagingservicelayer @database
  Scenario:User Successfully sends a message to a recipient with off duty conflict
    Given login as "offdutyconflict" into Android Halo App
    And click on PLUS Icon button for message
    Then add "android offdutyconflictreceiver" as a Recepient
    Then add "Android Clinical Team" as a Recepient
    Then compose a text message ""
    Then Verify the message for "android offdutyconflictreceiver" off duty when it selected with multiple receipient
    And click on Send button in pop-up
    And logout
    Then login as "offdutyconflictreceiver" into Android Halo App
    Then verify user received the message
    And logout


  @TCID:856144 @CriticalPath @mobilewebapi @messagingservicelayer @database
  Scenario:User Successfully sends a message to a recipient with auto forward  conflict
    Given login as "autoforwardconflict" into Android Halo App
    And click on PLUS Icon button for message
    Then add "android autoforwardconflictreceiver" as a Recepient
    Then add "Android Clinical Team" as a Recepient
    Then compose a text message ""
    Then Verify the message for "android autoforwardconflictreceiver" autoforward when it selected with multiple receipient
    And click on Send button in pop-up
    And logout
    Then login as "offdutyconflict" into Android Halo App
    Then verify user received the message
    And logout

    @TCID:857466 @CriticalPath @mobilewebapi @messagingservicelayer @database
    Scenario:User Successfully sends a message to a recipient with Gatekeeper conflict
    Given login as "gatekeeperconflict" into Android Halo App
    And click on PLUS Icon button for message
    Then add "gatekeeper receiverconflict" as a Recepient
    Then add "Android Clinical Team" as a Recepient
    Then compose a text message ""
    Then Verify the message for "gatekeeper receiverconflict" gatekeeper when it selected with multiple receipient
    And click on Send button in pop-up
    And logout
    Then login as "gatekeeperrecipient" into Android Halo App
    Then verify user received the message
    And logout
   
