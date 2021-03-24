Feature: Logging with different roles - view (7)

    # Background:
    #     Given a System Administrator exists in the system
    #       And Snacks exists as a program
    #       And Trail Mix exists as a program
    #       And Snack Breeder has been added to Snacks as a breeder
    #       And Snack Breeder has been added to Trail Mix as a member
    #       And TrailMix Breeder has been added to Trail Mix as a breeder


        Background: Required Setup
            Given user is logs in as sysad
            #   And user selects System Administration on program-selection page
            #   And user can see "Snack Breeder" has been added to "Snacks" as a breeder
            #   And user can see "Snack Breeder" has been added to "Trail Mix" as a member
            #   And user can see "TrailMix Breeder" has been added to "Trail Mix" as a breeder
            #   And user can see "Snacks" as a program


        @debug
        Scenario: Logging in as an admin - program selection
              And user1 can see "Snacks" as a program
#               And see 'Welcome <sysad>'
#               And see 'Which program are you working with today?'
#               And see System Administration at the top of the program list as a selectable option
#               And Snacks is in the list as a selectable option
#               And Trail Mix is in the list as a selectable option

#         Scenario: Logging in as an admin - program-management page
#             Given a sysad logs into a BI environment
#               And selects System Administration
#              Then they are on the admin/program-management page
#               And System Administration in the upper right corner
#               And an arrow for a combo box
#               And 'Logged in as <sysad>'
#               And a Log out button
#               And a header 'Programs'
#               And a list of all programs - active and inactive
#               And a New Program button
#               And the headers of the program table are "Name", "Species", and "# Users"
#               And each row for a program has an Edit link and a Deactivate link
#               And a previous page button
#               And a current page
#               And a Next page button
#               And a results per page combo box
#               And a label 'per page'
#               And a  Show All button
#               And a list of options in the lefthand navigation pane
#               And sees ADMIN
#               And sees Users
#               And sees Programs
#               And Snacks is in the list as a selectable option
#               And Trail Mix is in the list as a selectable option

#         Scenario: program combo box options
#             Given a sysad logs in w/valid credentials
#               And select Systems Administration
#              When they click on the combo box in the upper right corner
#              Then the sysad sees TrailMix as a selectable option
#               And sees Snacks as a selectable option

#         Scenario: Switching programs using the combo box
#             Given a sysad logs in w/valid credentials
#               And select Systems Administration
#               And they click on the combo box in the upper right corner
#               And the sysad selects TrailMix
#              Then the sysad sees Trail Mix in the upper right corner
#               And is on the Welcom/Home page for TrailMix
#               And sees TRAILMIX below the ADMIN navigation options
#               And sees Home
#               And sees Traits
#               And sees Program Management

#         Scenario: Logging in as a breeder/member of multiple programs
#             Given Snack Breeder logs in w/valid credentials
#              Then they are on the program-selection page
#               And sees 'Welcome <Snack Breeder>"
#               And sees 'Which program are you working with today?'
#               And Snacks is in the list as a selectable option
#               And Trail Mix is in the list as a selectable option

#         Scenario: User in multiple programs
#             Given Snack Breeder logs in w/valid credentials
#               And selects Snacks from the list of programs
#              Then they are on the Welcome page
#               And Snacks is in the upper right corner
#               And an arrow for a combo box
#               And 'Logged in as <Snack Breeder>'
#               And a Log out button
#               And the breeder sees 'Welcome, <Snack Breeder>'
#               And a list of options in the lefthand navigation pane
#               And sees Home
#               And sees Traits
#               And sees Program Management

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