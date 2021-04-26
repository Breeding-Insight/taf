Feature: Logging with Member

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
