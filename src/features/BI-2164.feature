Feature: Create a new list referencing existing GIDs

Background: Create a new list referencing existing GIDs
        Given a new program is created
        Given user logs in as "Cucumber Breeder"
        When user selects "*" on program-selection page
        And user selects "Import Data" in top-level navigation
        And user uploads Germplasm "Germplasm77_2022-07-12.xlsx" file
        And user selects 'Import' button
        When user sets "GermplasmSort" in List Name field of import page
        When user sets "GermplasmSort" in List Description field of import page
        And user selects "Confirm" button
        When user logs out

    @BI-2164
    @debug
    Scenario Outline: All of the information associated with a Germplasm Details page
        Given user logs in as "Cucumber Breeder"
        When user selects "*" on program-selection page
        And user selects "Import Data" in top-level navigation
        And user uploads Germplasm "Germplasm77_2022-07-12.xlsx" file
        And user selects 'Import' button
        When user sets "GermplasmSort2" in List Name field of import page
        When user sets "GermplasmSort2" in List Description field of import page
        And user selects "Confirm" button