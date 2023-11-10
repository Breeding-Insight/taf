Feature: Germplasm table loading message

    Background: Required Setup
        Given user logs in as "sysad"
        And user selects "System Administration" on program-selection page
        When user is on the program-management page

    @BI-1600
    Scenario Outline: Germplasm table loading message
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
        When user selects "Germplasm" in navigation
        Then user can see "No germplasm are currently defined for this program." on Germplasm page
        When user selects "Ontology" in navigation
        Then user can see "No ontology terms are currently defined for this program." on Ontology page
        When user selects "Germplasm" in navigation
        Then user can see "No germplasm are currently defined for this program." on Germplasm page
        And user selects "Import Data" in navigation
        And user uploads Germplasm "GermplasmSample.xlsx" file
        And user selects 'Import' button
        When user sets "GermplasmSort" in List Name field of import page
        When user sets "GermplasmSort" in List Description field of import page
        And user selects "Confirm" button
        When user selects "Germplasm" in navigation
        Then user can see "View" tab
        Then user can see "Lists" tab
        When user selects "View" tab
        Then user can not see loading wheel message on Germplasm page
        And user selects "Import Data" in navigation
        When user selects "Ontology" in navigation
        When user selects "Manage Ontology" button
        When user selects "Import file" link
        And user uploads Ontology "test01-ontology.xls" file
        When user selects 'Import' button
        And user selects "Confirm" button
        When user pause for "10" seconds
        When user selects "Ontology" in navigation
        Then user can see "Active" tab
        Then user can see "Archived" tab
        When user selects "Active" tab
        Then user can not see loading wheel message on Ontology page

        Examples:
            | ProgramName | Key | Species |
            | A*          | T*  | Grape   |

    @BI-1601
    Scenario Outline: Categories section is in line with other sections
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
        When user selects "Germplasm" in navigation
        And user selects "Import Data" in navigation
        And user uploads Germplasm "GermplasmSample.xlsx" file
        And user selects 'Import' button
        When user sets "GermplasmSort" in List Name field of import page
        When user sets "GermplasmSort" in List Description field of import page
        And user selects "Confirm" button
        And user selects "Import Data" in navigation
        When user selects "Ontology" in navigation
        When user selects "Manage Ontology" button
        When user selects "Import file" link
        And user uploads Ontology "test01-ontology.xls" file
        When user selects 'Import' button
        And user selects "Confirm" button
        When user pause for "10" seconds
        When user selects "Ontology" in navigation
        Then user can see "Active" tab
        Then user can see "Archived" tab
        When user selects "Active" tab
        When user selects "Show details" of row "1" of Ontology page
        Then user can see header "Blackberry" on trait details
        Then user can see Term Type "Germplasm Attribute" on trait details
        Then user can see Trait "Root Color Liightness" on trait details
        Then user can see Method "0 Measurement" on trait details
        Then user can see Scale Class "Nominal" on trait details

        Examples:
            | ProgramName | Key | Species |
            | A*          | T*  | Grape   |