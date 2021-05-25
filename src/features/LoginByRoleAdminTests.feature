Feature: Logging with Sys Administration

      Background: Required Setup
            Given user logs in as sysad
            And user selects "System Administration" on program-selection page
            And user can see "Cucumber Breeder" has been added to "Snacks" as a breeder
            #   And user can see "Cucumber Breeder" has been added to "Trail Mix" as a member
            And user can see "Cucumber Breeder" has been added to "Trail Mix" as a breeder
            And user can see "Snacks" as a program
            And new step here

      @BI-817
      Scenario: Logging in as an admin - program selection
            And user navigates to Program Selection
            And user can see "Welcome, Christian" on program-selection page
            And user can see 'Which program are you working with today'
            And user can see "System Administration" is top of the list
            And user can see "Snacks" is in the list
            And user can see "Trail Mix" is in the list

@BI-803
@SmokeTests
      Scenario: Logging in as an admin - program-management page
            And user selects "System Administration" on program-selection page
            Then user can see "System Administration" in the upper right corner
            And user can see System Administration combo box
            And user can see 'Logged in as'
            And user can see a Log out button
            And user can see a header 'Programs'
            And user can see list of all programs - active and inactive
            And user can see a New Program button
            And user can see table header contains
                  | Header  |
                  | Name    |
                  | Species |
                  | # Users |
            When user clicks Show All button
            Then user can see each row has an Edit link
            And user can see each row has a Deactivate link
            And user can see Previous page button
            And user can see Current page button
            And user can see Next page button
            And user can see Results per page combobox
            And user can see Label per page
            And user can see Show All button

      @BI-819
      Scenario: program combo box options
            And user selects "System Administration" on program-selection page
            And user clicks the combo box of Program Selector
            Then user can see "Trail Mix" as an option
            And user can see "Snacks" as an option

      @BI-820
      Scenario: Switching programs using the combo box
            And user selects "System Administration" on program-selection page
            When user selects "Trail Mix" the program selector
            Then user can see "Trail Mix" in the upper right corner
            And user can see "Trail Mix" as label in the bottom of the navigation menu
            And user can see "Home" as link in the bottom of the navigation menu
            And user can see "Traits" as link in the bottom of the navigation menu
            And user can see "Program Management" as link in the bottom of the navigation menu

