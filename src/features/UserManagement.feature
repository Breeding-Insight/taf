Feature: System User Management (15)

        Background: Sysad logs in
            Given user is logs in as sysad
              And user selects System Administration on program-selection page
              And user selects Users in left navigation

        @debug
        Scenario: User Management page
             When user is on the user-management page
             Then user can see page of Users
              And user can see New User button
              And user can see table header contains
                  | Header   |
                  | Name     |
                  | Email    |
                  | Role     |
                  | Programs |
              And user can see each row has an Edit link
        #   And each row has a Deactivate link
              And user can see Previous page button
              And user can see Current page button
              And user can see Next page button
              And user can see Results per page combobox
              And user can see Label per page
              And user can see Show All button

        Scenario: New User form entities
            Given user is on the user-management page
             When user selects New User button
             Then user can see name field
              And user can see email field
              And user can see role dropdown
              And user can see "Name of user. All Unicode special characters accepted." under Name field
              And user can see Save button
              And user can see Cancel button

        Scenario: Entering Name only and selecting Save - error message
            Given user is on the user-management page
             When user selects New User button
              And user sets "TestNewUser" in Name field
              And user selects Save button
             Then user can see banner appears with an error message 'Fix Invalid Fields'
              And user can see 'Email is required' below the Email field

        Scenario: Entering Email only and selecting Save - error message
            Given user is on the user-management page
             When user selects New User button
              And user sets "newuser@mail.com" in Email field
              And user selects Save button
             Then user can see banner appears with an error message 'Fix Invalid Fields'
              And user can see 'Name is required' below the Name field

        Scenario: Entering invalid Email and selecting Save - error message
            Given user is on the user-management page
             When user selects New User button
              And user sets "TestNewUser" in Name field
              And user sets "invalidemail" in Email field
              And user selects Save button
             Then user can see 'Email must be in email format' below the Email field

        Scenario: Adding new user with no system role
            Given user is on the user-management page
             When user creates a new user
                  | Name   | Email                | Role |
                  | Test * | test*@mailinator.com |      |
             Then user can see a new user is added in users list

        Scenario:  Adding new user with admin role
            Given user is on the user-management page
             When user creates a new user
                  | Name   | Email                | Role  |
                  | Test * | test*@mailinator.com | admin |
             Then user can see a new user is added in users list

        @debug
        Scenario: Filling out new user form and selecting Cancel
            Given user is on the user-management page
             When user selects New User button
              And user sets "TestNewUser" in Name field
              And user sets "testemail*@gmail.com" in Email field
              And user sets "admin" in Role dropdown
              And user selects Cancel button
            #  Then user the form closes
            #   And user no new user is in the Users list

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
