Feature: Germplasm Import Table

    Background: Required Setup
        Given user logs in as "sysad"
        And user selects "System Administration" on program-selection page
        When user is on the program-management page
        #Create a new program
        When user selects 'New Program' button in Programs page
        When user sets "P*" in Program Name field in Programs page
        When user selects "Potato" in Species dropdown in Programs page
        When user sets "A*" in Program Key field in Programs page
        When user selects 'Save' button in Programs page
        When user pause for "10" seconds
        When user navigates to Program Selection page
        When user selects "P*" on program-selection page
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
        And user selects "Import Data" in navigation
        And user uploads Germplasm "Germplasm77_2022-07-12.xlsx" file
        And user selects 'Import' button
        When user sets "GermplasmSort" in List Name field of import page
        When user sets "GermplasmSort" in List Description field of import page
        And user selects "Confirm" button
        When user logs out

    @BI-1501
    Scenario Outline: All of the information associated with a Germplasm Details page
        Given user logs in as "Cucumber Breeder"
        When user selects "P*" on program-selection page
        And user selects "Germplasm" in navigation
        Then user can see All Germplasm records exist on Germplasm page
        When user can see All Germplasm records have Show Details link on Germplasm page
        When user selects "Show Details" of row "3" of Germplasm page
        Then user can see details on Germplasm details page
            | Preferred Name | GID | Breeding Method | Source | Pedigree                | Pedigree GID | Synonyms | External UID | User             | Creation Date |
            | Germplas124    | 3   | Backcross       | Cross  | Germplas123/Germplas123 | 2 / 2        | Germ2    |              | Cucumber Breeder |               |
        Then user can see "Images" tab of Germplasm details page
        Then user can see "Pedigrees" tab of Germplasm details page
        Then user can see "Attributes" tab of Germplasm details page

    @BI-1514
    Scenario: GIDs clickable Link
        Given user logs in as "Cucumber Breeder"
        When user selects "P*" on program-selection page
        And user selects "Germplasm" in navigation
        Then user can see Female Parent GID value is a link
        Then user can see Male Parent GID value is a link
        When user selects "3" row Female Parent GID
        Then user can see details on Germplasm details page
            | Preferred Name | GID | Breeding Method | Source | Pedigree            | Pedigree GID | Synonyms | External UID | User             |
            | Germplas123    | 2   | Complex cross   | Cross  | Germplasm/Germplasm | 1 / 1        | Germ1    |              | Cucumber Breeder |

    @BI-1593
    Scenario: able to filter the records in the all germplasm table
        Given user logs in as "Cucumber Breeder"
        When user selects "P*" on program-selection page
        And user selects "Germplasm" in navigation
        When user selects "Germplasm" tab on Gerplasm page
        When user sets "10" in "GID" search fields
        Then user can see "10" in row "1" as "GID" column on All Germplasm
        When user refresh the page
        When user sets "90" in "GID" search fields
        Then user can see "No germplasm are currently defined for this program." in All Germplasm
        When user refresh the page
        When user sets "Germplas123" in "Name" search fields
        Then user can see "Germplas123" in row "1" as "Name" column on All Germplasm
        When user refresh the page
        When user sets "AAA" in "Name" search fields
        Then user can see "No germplasm are currently defined for this program." in All Germplasm
        When user refresh the page
        When user sets "Test cross" in "Breeding Method" search fields
        Then user can see "Test cross" in row "1" as "Breeding Method" column on All Germplasm
        When user refresh the page
        When user sets "AAA" in "Breeding Method" search fields
        Then user can see "No germplasm are currently defined for this program." in All Germplasm
        When user refresh the page
        When user sets "Cross" in "Source" search fields
        Then user can see "Cross" in row "1" as "Source" column on All Germplasm
        When user refresh the page
        When user sets "AAA" in "Source" search fields
        Then user can see "No germplasm are currently defined for this program." in All Germplasm
        When user refresh the page
        When user sets "5" in "Female Parent GID" search fields
        Then user can see "5" in row "1" as "Female Parent GID" column on All Germplasm
        When user refresh the page
        When user sets "AAA" in "Female Parent GID" search fields
        Then user can see "No germplasm are currently defined for this program." in All Germplasm
        When user refresh the page
        When user sets "2" in "Male Parent GID" search fields
        Then user can see "2" in row "1" as "Male Parent GID" column on All Germplasm
        When user refresh the page
        When user sets "AAA" in "Male Parent GID" search fields
        Then user can see "No germplasm are currently defined for this program." in All Germplasm
        When user refresh the page
        When user sets "@TODAY" in "Created Date" search fields
        Then user can see "@TODAY" in row "1" as "Created Date" column on All Germplasm
        When user refresh the page
        When user sets "AAA" in "Created Date" search fields
        Then user can see "No germplasm are currently defined for this program." in All Germplasm
        When user refresh the page
        When user sets "Cucumber Breeder" in "Created By" search fields
        Then user can see "Cucumber Breeder" in row "1" as "Created By" column on All Germplasm
        When user refresh the page
        When user sets "AAA" in "Created By" search fields
        Then user can see "No germplasm are currently defined for this program." in All Germplasm