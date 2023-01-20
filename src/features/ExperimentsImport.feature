
Feature: Experiments & Observations

    Background: Required Setup
        Given user logs in as "sysad"
        And user selects "System Administration" on program-selection page
        When user is on the program-management page
       
    @BI-1598
    @debug
    Scenario Outline: Independent variables & phenotypes for new experiment
     #Create a new program
        When user selects 'New Program' button in Programs page
        When user sets "<ProgramName>" in Program Name field in Programs page
        When user selects "<Species>" in Species dropdown in Programs page
        When user sets "<Key>" in Program Key field in Programs page
        When user selects 'Save' button in Programs page
        When user pause for "10" seconds
        When user navigates to Program Selection page
        When user selects "<ProgramName>" on program-selection page
        When user selects "Program Management" in navigation
        When user selects "Users" tab
        When user clicks 'New User' button
        When user sets "Cucumber Breeder" in Name field of User
        When user sets "cucumberbreeder@mailinator.com" in Email field of User
        When user sets "breeder" in Role dropdown of User
        When user click 'Save' button in User
        When user pause for "10" seconds
        When user close notification pop-up
        When user logs out
        Given user logs in as "Cucumber Breeder"
        When user selects "<ProgramName>" on program-selection page
        # And user selects "Import Data" in navigation
        # And user uploads Germplasm "GermplasmSample.xlsx" file
        # And user selects 'Import' button
        # When user sets "GermplasmSort" in List Name field of import page
        # When user sets "GermplasmSort" in List Description field of import page
        # And user selects "Confirm" button
        #Login as Cucumber Breeder and go to Snacks
        # When user selects "Experiments & Observations" in navigation
        # When user selects "Import Experiments & Observations" button
        # And user uploads Experiments & Observations "EXP.csv" file

        # Then user can see 'Configuration' tab on Program Management page
        # When user selects "Configuration" tab on Program Management page
        # Then user can see Configuration on Program Management page
        # Then user can see "Shared Ontology" section on Configuration tab on Program Management page
        # Then user can see "Snacks is not currently sharing their ontology with other programs." message on Configuration tab on Program Management page
        # When user selects Share Ontology button of Shared Ontology on Program Management page
        # When user can see the 'Manage  Share Ontology' in Managed Shared Ontlogy page
        # Then user can see "<ProgramName>" checkbox in Managed Shared Ontlogy page
        # #Share Snacks to new Program
        # When user selects "<ProgramName>" checkbox in Managed Shared Ontlogy page
        # When user selects "Save" button in Managed Shared Ontlogy page
        # Then user can see "<ProgramName>" is currently shared but not accepted message
        #Go to new Program and check the shared ontology
        # When user navigates to Program Selection page
        # When user selects "<ProgramName>" on program-selection page
        # When user selects "Program Management" in navigation
        # Then user can see 'Configuration' tab on Program Management page
        # When user selects "Configuration" tab on Program Management page
        # Then user can see Configuration on Program Management page
        # Then user can see "Shared Ontology" section on Configuration tab on Program Management page
        # When user selects "Snacks" in Choose ontology to subscribe to dropdown on Program Management page
        # When user selects Save button of Subscribe to Shared Ontology on Program Management page
        # When user pause for "5" seconds
        # Then user can see "Unsubscribe from Snacks ontology" button on Program Management page
        # #Go to Snacks and remove the shared ontology
        # When user navigates to Program Selection page
        # When user selects "Snacks" on program-selection page
        # When user selects "Program Management" in navigation
        # Then user can see 'Configuration' tab on Program Management page
        # When user selects "Configuration" tab on Program Management page
        # Then user can see Configuration on Program Management page
        # Then user can see "Shared Ontology" section on Configuration tab on Program Management page
        # Then user can see "<ProgramName>" is currently shared and accepted message
        # When user selects Share Ontology button of Shared Ontology on Program Management page
        # When user selects "<ProgramName>" checkbox in Managed Shared Ontlogy page
        # When user selects "Save" button in Managed Shared Ontlogy page
        # Then user can see "Snacks is not currently sharing their ontology with other programs." message on Configuration tab on Program Management page

        Examples:
            | ProgramName | Key | Species |
            | A*          | T*  | Grape   |
