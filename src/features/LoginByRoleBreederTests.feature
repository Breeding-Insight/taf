Feature: Logging with different roles - view (7)

        Background: Required Setup
            Given user is logs in as breedr
              And user selects System Administration on program-selection page
              And user can see "Snack Breeder" has been added to "Snacks" as a breeder
              And user can see "Snack Breeder" has been added to "Trail Mix" as a member
              And user can see "TrailMix Breeder" has been added to "Trail Mix" as a breeder
              And user can see "Snacks" as a program

      #   Scenario: User in multiple programs
      #       Given Snack Breeder logs in w/valid credentials
      #         And selects Snacks from the list of programs
      #        Then they are on the Welcome page
      #         And Snacks is in the upper right corner
      #         And an arrow for a combo box
      #         And 'Logged in as <Snack Breeder>'
      #         And a Log out button
      #         And the breeder sees 'Welcome, <Snack Breeder>'
      #         And a list of options in the lefthand navigation pane
      #         And sees Home
      #         And sees Traits
      #         And sees Program Management

#         Scenario: Logging in as a breeder/member of one program
#             Given TrailMix Breeder logs in w/valid credentials
#              Then they are on the Welcome page
#               And the Trail mix is in the upper right corner
#               And there is no combo box
#               And 'Logged in as TrailMix Breeder'
#               And a Log out button
#               And the breeder sees 'Welcome, TrailMix Breeder'
#               And a list of options in the lefthand navigation pane
#               And sees Home
#               And sees Traits
#               And sees Program Management0