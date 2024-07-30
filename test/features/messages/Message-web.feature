Feature: messages


@TCID:5ccd9f29-6ef2-4504-81fb-c8d7de57af8d @skip
Scenario: Halo mobile's messaging functionality check    
    Given the admin 'adminSnehal' logs into app
    When the admin 'adminSnehal' sends the following message from app
        | Recepient        | Message                |
        | Prasanth R       | This is a test message |
    And the admin 'webPortalAdmin' logs into webportal
    And the admin 'webPortalAdmin' ensures the following message is received
        | Sender | Message|
        | S P    | This is a test message |