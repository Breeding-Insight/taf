Feature: Create a new list referencing existing GIDs

    Background: Required Setup
        Given user logs in as "sysad"
        And user selects "System Administration" on program-selection page
        When user is on the program-management page
        #Create a new program
        When user selects 'New Program' button in Programs page
        When user sets "A*" in Program Name field in Programs page
        When user selects "Potato" in Species dropdown in Programs page
        When user sets "A*" in Program Key field in Programs page
        When user selects 'Save' button in Programs page
        When user pause for "10" seconds
        When user navigates to Program Selection page
        When user selects "A*" on program-selection page
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
    Scenario Outline: Create a new list referencing existing GIDs
        Given user logs in as "Cucumber Breeder"
        When user selects "*" on program-selection page
        And user selects "Import Data" in top-level navigation
        And user uploads Germplasm "Germplasm77_2022-07-12.xlsx" file
        And user selects 'Import' button
        When user sets "GermplasmSort1" in List Name field of import page
        When user sets "GermplasmSort1" in List Description field of import page
        And user selects "Confirm" button
        And user selects "Import Data" in top-level navigation
        And user selects "Genotype Samples" tab
        And user uploads Genotype Sample "bi_sample_submission_v01.xls" file
        And user selects 'Import' button
        And user sets "Genotype Sample" in Project Name field of import page
        And user selects "Confirm" button
        Then user can see banner contains "Imported sample submission records have been added to"
        # When user selects "A*" on program-selection page
        # And user selects "Germplasm" in navigation
        # Then user can see All Germplasm records exist on Germplasm page
        # When user can see All Germplasm records have Show Details link on Germplasm page
        # When user selects "Show Details" of row "3" of Germplasm page
        # Then user can see details on Germplasm details page
        #     | Preferred Name | GID | Breeding Method | Source | Pedigree                | Pedigree GID | Synonyms | External UID | User             | Creation Date |
        #     | Germplas124    | 3   | Backcross       | Cross  | Germplas123/Germplas123 | 2 / 2        | Germ2    |              | Cucumber Breeder |               |
        # Then user can see "Pedigrees" tab of Germplasm details page

    