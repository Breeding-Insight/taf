Feature: The ontology can be case insensitive

  Background: 
        Given a new program is created

    @BI-2156
    @debug
    Scenario Outline: The ontology can be case insensitive
        Given user logs in as "Cucumber Breeder"
        When user selects "*" on program-selection page
        # And user selects "Germplasm" in navigation
        # And user selects "Manage Germplasm" button
        # And user selects "Import file" menu item 
        # And user uploads Germplasm "GermplasmSample.xlsx" file
        # And user selects 'Import' button
        # When user sets "GermplasmSort" in List Name field of import page
        # When user sets "GermplasmSort" in List Description field of import page
        # And user selects "Confirm" button
        # When user selects "Ontology" in navigation
        # When user selects "Manage Ontology" button
        # When user selects "Import file" link
        # And user uploads Ontology "test01-ontology.xls" file
        # When user selects 'Import' button
        # When user selects "Confirm" button
        # Then user can see "Full Name" column header
        # Then user pause for "5" seconds
        # When user selects "Full Name" column header
        # Then user can see "Full Name" sort on column header
        # When user selects 'Show details' button of "Blackberry1" on ontology list page
        # Then user can see "Test" in Full Name field of Show Details on ontology list page