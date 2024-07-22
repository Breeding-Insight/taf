Feature: Display the full name in the table and details pane for ontology

  Background: 
        Given a new program is created

    @BI-2160
    @debug
    Scenario Outline: Display the full name in the table and details pane for ontology
        Given user logs in as "Cucumber Breeder"
        When user selects "*" on program-selection page
        And user selects "Import Data" in navigation
        And user uploads Germplasm "GermplasmSample.xlsx" file
        And user selects 'Import' button
        When user sets "GermplasmSort" in List Name field of import page
        When user sets "GermplasmSort" in List Description field of import page
        And user selects "Confirm" button
        When user selects "Ontology" in navigation
        When user selects "Manage Ontology" button
        When user selects "Import file" link
        And user uploads Ontology "test01-ontology.xls" file
        When user selects 'Import' button
        When user selects "Confirm" button
        Then user can see "Full Name" column header

