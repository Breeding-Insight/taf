Feature: Ontology error message disappears when a valid file is uploaded

    @BI-2000
    Scenario: Ontology error message disappears when a valid file is uploaded
        Given a new program is created
        Given user logs in as "Cucumber Breeder"
        When user selects "*" on program-selection page
        And user selects "Ontology" in navigation
        And user selects "Manage Ontology" button
        And user selects "Import file" menu item
        And user uploads Ontology "Bad.xls" file
		And user selects 'Import' button
        Then user can see banner contains "Error(s) detected in file, Bad.xls . (See details below.) Import cannot proceed."
        And user uploads Ontology "test01-ontology.xls" file
        And user selects 'Import' button
		When user selects "Confirm" button
        Then user cannot see banner contains "Error(s) detected in file, Bad.xls . (See details below.) Import cannot proceed."