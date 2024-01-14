Feature: Experiments & Observations Import Check
    Background: Setup
        Given a new program is created

    @debug
    @BI-1789
    Scenario: Test (T) or Check (C )” has been renamed to “Test (T) or Check (C)
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
        And user selects "Confirm" button
        When user pause for "10" seconds
        When user selects "Experiments & Observations" in navigation
        When user selects "Import Experiments & Observations" button
        And user uploads Experiments & Observations "EXP.csv" file
        When user selects 'Import' button
        When user pause for "10" seconds
        # When user selects "Experiments & Observations" in navigation
        # When user selects "Import Experiments & Observations" button
        # And user uploads Experiments & Observations "EXP.csv" file
        # When user selects 'Import' button
        # When user pause for "10" seconds

