Feature: Breeder User Management

        Scenario: User Program Welcome Page
            Given user logs in as breeder
             Then user can see "Welcome, Cucumber Breeder!" on program-selection page
              And user can see 'Which program are you working with today'
             When user selects "Snacks" on program-selection page
             Then user can see "Home" in navigation
              And user can see "Traits" in navigation
              And user can see "Program Management" in navigation

        Scenario: Users Table
            Given user logs in as breeder
              And user selects "Snacks" on program-selection page
              And user selects "Program Management" in navigation
              And user selects "Users" in navigation
             Then user can see Program User Management page
              And user can see Users page
              And user can see table header contains
                  | Header |
                  | Name   |
                  | Email  |
                  | Roles  |
              And user can see each row has an Edit link
              And user can see each row has a Deactivate link
              And user can see Previous page button
              And user can see Current page button
              And user can see Next page button
              And user can see Results per page combobox
              And user can see Label per page
              And user can see Show All button

        Scenario: User Management page
            Given user logs in as breeder
              And user selects "Snacks" on program-selection page
              And user selects "Program Management" in navigation
              And user selects "Users" in navigation
             Then user can see Program User Management page

        Scenario: System Admin and Program Member - Program User Management
            Given user logs in as sysad
              And user selects "System Administration" on program-selection page
              And user selects "Users" in navigation
             Then user can see page of Users
              And user can see table header contains
                  | Header |
                  | Name   |
                  | Email  |
                  | Role   |

        Scenario: No System Role and Program Member - Program User Management
            Given user logs in as breeder
              And user selects "Snacks" on program-selection page
              And user selects "Program Management" in navigation
              And user selects "Users" in navigation
             Then user can see page of Users
              And user can see table header contains
                  | Header |
                  | Name   |
                  | Email  |
                  | Role   |
              And user can see each row doesn't have an Edit link
              And user can see each row doesn't have a Deactivate link

        Scenario: ???
            Given user logs in as breeder
              And user selects "Snacks" on program-selection page
              And user selects "Program Management" in navigation
              And user selects "Users" in navigation
             Then user can see Program User Management page

        Scenario: New User form - enter nothing and select Save
            Given user logs in as breeder
              And user selects "Snacks" on program-selection page
              And user selects "Program Management" in navigation
              And user selects "Users" in navigation
             When user selects New User button
              And user selects Save button
              And user can see 'Name is required' below the Name field
              And user can see 'Email is required' below the Email field
              And user can see 'Role is required' below the Role field
             Then user can see banner appears with an error message 'Fix Invalid Fields'

        Scenario: New User form - enter name only - Save
            Given user logs in as breeder
              And user selects "Snacks" on program-selection page
              And user selects "Program Management" in navigation
              And user selects "Users" in navigation
             When user selects New User button
              And user sets "Tester Breeder" in Name field
              And user selects Save button
              And user can see 'Email is required' below the Email field
              And user can see 'Role is required' below the Role field

        Scenario: New User form - enter all required, valid fields - Cancel
            Given user logs in as breeder
              And user selects "Snacks" on program-selection page
              And user selects "Program Management" in navigation
              And user selects "Users" in navigation
              And user sets "Tester Breeder" in Name field
              And user sets "testnewuser@mail.com" in Email field
              And user sets "breeder" in Role dropdown
              And user selects Cancel button
             Then user does not see new user form
              And user does not see a new user in Users list

        Scenario: New User form - enter all required, valid fields - Save
            Given user logs in as breeder
              And user selects "Snacks" on program-selection page
              And user selects "Program Management" in navigation
              And user selects "Users" in navigation
             When user creates a new user
                  | Name   | Email                | Role    |
                  | Test * | test*@mailinator.com | breeder |
             Then user can see a new user is added in users list

        Scenario: NEW User form - enter existing email address - Save
            Given user logs in as breeder
              And user selects "Snacks" on program-selection page
              And user selects "Program Management" in navigation
              And user selects "Users" in navigation
             When user selects New User button
              And user sets "TestNewUser" in Name field
              And user sets "cucumberbreeder@mailinator.com" in Email field
              And user sets "breeder" in Role dropdown
              And user selects Save button
             Then user can see banner appears with an error message 'Error creating user, a user with this email already exists'
             Then user can see new user form

        Scenario: Edit Form elements
            Given user logs in as breeder
              And user selects "Snacks" on program-selection page
              And user selects "Program Management" in navigation
              And user selects "Users" in navigation
             When user creates a new user
                  | Name   | Email                | Role    |
                  | Test * | test*@mailinator.com | breeder |
              And user clicks Edit of a user
             Then user can see "breeder" in the the Role dropdown

        Scenario: Edit Form - change role - Cancel
            Given user logs in as breeder
              And user selects "Snacks" on program-selection page
              And user selects "Program Management" in navigation
              And user selects "Users" in navigation
             When user creates a new user
                  | Name   | Email                | Role    |
                  | Test * | test*@mailinator.com | breeder |
              And user clicks Edit of a user
              And user selects Cancel button
             Then user can see user is in users list

        Scenario: Edit Form - change role - Save
            Given user logs in as breeder
              And user selects "Snacks" on program-selection page
              And user selects "Program Management" in navigation
              And user selects "Users" in navigation
             When user creates a new user
                  | Name   | Email                | Role    |
                  | Test * | test*@mailinator.com | breeder |
              And user edits a user
                  | Role   |
                  | member |
             Then user can see user is in users list

        Scenario: Deactivate link - modal
            Given user logs in as breeder
              And user selects "Snacks" on program-selection page
              And user selects "Program Management" in navigation
              And user selects "Users" in navigation
              And user creates a new user
                  | Name   | Email                | Role    |
                  | Test * | test*@mailinator.com | breeder |
             When user selects Deactivate of user
             Then user can see a modal with Deactivate message
              And user can see Yes, archive button
              And user can see modal Cancel button
              And user selects modal Cancel button

        Scenario: Deactivate link - Cancel
            Given user logs in as breeder
              And user selects "Snacks" on program-selection page
              And user selects "Program Management" in navigation
              And user selects "Users" in navigation
              And user creates a new user
                  | Name   | Email                | Role    |
                  | Test * | test*@mailinator.com | breeder |
             When user selects Deactivate of user
              And user selects modal Cancel button
             Then user can see user is in users list

        Scenario: Deactivate link - Yes, deactivate
            Given user logs in as breeder
              And user selects "Snacks" on program-selection page
              And user selects "Program Management" in navigation
              And user selects "Users" in navigation
              And user creates a new user
                  | Name   | Email                | Role    |
                  | Test * | test*@mailinator.com | breeder |
             When user selects Deactivate of user
              And user selects modal Yes, archive button
             Then user can not see user is in users list