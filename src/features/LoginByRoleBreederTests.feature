Feature: Logging with Breeder

        Scenario: Logging in as a breeder/member of multiple programs
            Given user logs in as breeder
             Then user can see "Welcome, Cucumber Breeder!" on program-selection page
              And user can see 'Which program are you working with today'
              And user can see "Snacks" is in the list
              And user can see "Trail Mix" is in the list

        Scenario: User in multiple programs
            Given user logs in as breeder
              And user selects "Snacks" on program-selection page
             Then user can see Welcome page of program
             Then user can see "Snacks" in the upper right corner
              And user can see Program Selection combo box
              And user can see "Logged in as Cucumber Breeder" as logged in
              And user can see a Log out button
              And user can see "Home" on the left side navigation
              And user can see "Traits" on the left side navigation
              And user can see "Program Management" on the left side navigation

        Scenario: Logging in as a member of one program
            Given user logs in as member
             Then user can see Welcome page of program
             Then user can see "Cucumber" in the upper right corner
              And user cannot see Program Selection combo box
              And user can see "Logged in as Cucumber Breeder" as logged in
              And user can see a Log out button
              And user can see "Home" on the left side navigation
              And user can see "Traits" on the left side navigation
              And user can see "Program Management" on the left side navigation
