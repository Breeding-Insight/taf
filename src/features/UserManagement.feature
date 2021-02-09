Feature: System User Management (15)

        Background: Sysad logs in
            Given a sysad is logs in
              And selects System Administration on program-selection page
              And selects Users in left navigation

        Scenario: User Management page
            Given user is on the user-management page
             Then page of Users is visible
              And New User button is visible
              And table header contains
                  | Header |
                  | Name   |
                  | Email  |
            #   | OCRID    |
                  | Role     |
                  | Programs |
              And each row has an Edit link
        #   And each row has a Deactivate link
              And Previous page button is visible
              And Current page button is visible
              And Next page button is visible
              And Results per page combo box is visible
              And Label per page is visible
              And Show All button is visible

        @debug
        Scenario: New User form entities
            Given user is on the user-management page
             When user selects New User button
             Then name field is visible
              And email field is visible
              And role dropdown is visible
              And "Name of user. All Unicode special characters accepted." under Name field is visible
              And Save button is visible
              And Cancel button is visible

        # Scenario: Entering Name only and selecting Save - error message
        #     Given user is on the user-management page
        #      When user selects New User button
        #       And sets "TestNewUser" in Name field
        #       And selects Save button
        #      Then banner appears with an error message 'Fix Invalid Fields'
        #       And 'Email is required' is visible below the Email field

        # Scenario: Entering Email only and selecting Save - error message
        #     Given user is on the user-management page
        #      When user selects New User button
        #       And sets "newuser@mail.com" in Email field
        #       And selects Save button
        #      Then banner appears with an error message 'Fix Invalid Fields'
        #       And 'Name is required' is visible below the Name field

        # Scenario: Entering invalid Email and selecting Save - error message
        #     Given user is on the user-management page
        #      When user selects New User button
        #       And sets "TestNewUser" in Name field
        #       And sets "invalidemail" in Email field
        #       And selects Save button
        #      Then 'Email must be in email format' is visible below the Email field

        # Scenario: Adding new user with no system role
        #     Given user is on the user-management page
        #      When user selects New User button
        #       And sets "TestNewUser" in Name field
        #       And sets "testemail*@gmail.com" in Email field
        #       And selects Save button
        #      Then "TestNewUser" is in the list of users
        #       And "testemail@gmail.com" in the Email field
        #       And No Role in the Role field

        # Scenario: Adding new user with admin role
        #     Given user is on the user-management page
        #      When user selects New User button
        #       And sets "TestNewUser" in Name field
        #       And sets "testemail*@gmail.com" in Email field
        #       And sets "admin" in Role dropdown
        #       And selects Save button
        #      Then "TestNewUser" is in the list of users
        #       And "testemail@gmail.com" in the Email field
        #       And "admin" in the Role field

        # Scenario: Filling out new user form and selecting Cancel
        #     Given user is on the user-management page
        #      When user selects New User button
        #       And sets "TestNewUser" in Name field
        #       And sets "testemail*@gmail.com" in Email field
        #       And sets "admin" in Role dropdown
        #       And selects Cancel button
        #      Then the form closes
        #       And no new user is in the Users list

#     Scenario: Edit form entities
#         Given a system administrator is on the user-management page
#          When the sysad selects 'Edit' for TestNewUser
#          Then a form opens with TestNewUser in the Name field
#           And newuser@mail.com in the Email field
#           And No Role in the Role field
#           And a Save button
#           And a Cancel button

#     Scenario: Editing form and selecting Cancel
#         Given a system administrator is on the user-management page
#          When the sysad selects 'Edit' for TestNewUser
#           And sysad adds name and/or email and/or role
#           And selects Cancel
#          Then the form closes
#           And TestNewUser is in the list of users
#           And newuser@mail.com in the Email field
#           And No Role in the Role field

#     Scenario: Editing form and selecting Save
#         Given a system administrator is on the user-management page
#          When the sysad selects 'Edit' for TestNewUser
#           And changes TestNewUser to TestEditUser in the Name field
#           And changes  newuser@mail.com to edituser@mail.com in the Email field
#           And selects admin for role
#           And selects Save button
#          Then a banner appears with a success message "User successfully updated".
#           And the form closes
#           And TestNewUser is not in the list of users
#           And EditNewUser is in the list of users
#           And edituser@mail.com in the Email field
#           And admin in the Role field

#     Scenario: Editing self
#         Given a system administrator is on the user-management page
#          When the sysad selects 'Edit' for TestNewUser
#           And changes own name
#           And changes own email
#           And selects no role
#           And selects Save button
#          Then a banner appears with a success message "User info (name/email/program) successfully updated"
#           And a banner appears with a fail message "You don't have permissions to edit the roles of this user"
#           And the form closes
#           And TestNewUser is not in the list of users
#           And EditNewUser is in the list of users
#           And edituser@mail.com in the Email field
#           And admin in the Role field

#     Scenario: User Deactivate modal
#         Given a system administrator is on the user-management page
#           And selects 'Deactivate' for TestNewUser
#          Then a modal opens with message "Deactivate testDelete from the system?
#           Access for this user will be removed system wide. Program-related data collected by this user will not be affected by this change."
#           And there is a buttom for "Yes, deactivate"
#           And there is a button for "Cancel"
# click "Cancel"

#     Scenario: User Deactivate link and Cancel
#         Given a system administrator logs into http://sandbox.breedinginsight.net/ with valid credentials
#          When sysad selects Users in the left navigation pane
#           And selects 'Deactivate' for TestNewUser
#           And selects "Cancel"
#          Then the modal closes
#           And TestNewUser is still in the list of users

#     Scenario: User Deactivate link and 'Yes, deactivate'
#         Given a system administrator logs into http://sandbox.breedinginsight.net/ with valid credentials
#          When sysad selects Users in the left navigation pane
#           And selects 'Deactivate' for TestNewUser
#           And selects "Yes, deactivate"
#          Then the modal closes
#           And TestNewUser is not in the list of users
