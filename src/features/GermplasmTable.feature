Feature: Germplasm table loading message

	Background: Required Setup
        Given user logs in as "sysad"
        And user selects "System Administration" on program-selection page
        When user is on the program-management page
       
    @BI-1600
	@debug
    Scenario Outline: Germplasm table loading message
     #Create a new program
        When user selects 'New Program' button in Programs page
        When user sets "<ProgramName>" in Program Name field in Programs page
        When user selects "<Species>" in Species dropdown in Programs page
        When user sets "<Key>" in Program Key field in Programs page
        When user selects 'Save' button in Programs page
        When user pause for "10" seconds
        When user navigates to Program Selection page
        When user selects "<ProgramName>" on program-selection page
        When user selects "Program Administration" in navigation
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
        And user selects "Import Data" in navigation
        And user uploads Germplasm "GermplasmSample.xlsx" file
        And user selects 'Import' button
        When user sets "GermplasmSort" in List Name field of import page
        When user sets "GermplasmSort" in List Description field of import page
        And user selects "Confirm" button
        When user selects "Ontology" in navigation
        When user selects "Import Batch File" button
        And user uploads Ontology "test01-ontology.xls" file
        When user selects 'Import' button
        And user selects "Confirm" button
        When user pause for "10" seconds
		When user selects "Ontology" in navigation
		Then user can see "Active" tab
		Then user can see "Archived" tab
		When user selects "Active" tab
		Then user can see Active table on Ontology page
		When user selects "Germplasm" in navigation
		Then user can see "View" tab
		Then user can see "Lists" tab
		When user selects "View" tab
		Then user can see Germplasm table on Germplasm page
		When user selects "Lists" tab
		Then user can see Germplasm Lists table on Germplasm page

        Examples:
            | ProgramName | Key | Species |
            | A*          | T*  | Grape   |