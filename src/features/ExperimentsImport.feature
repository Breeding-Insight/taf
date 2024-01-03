
Feature: Experiments & Observations

    Background: Required Setup
        Given user logs in as "sysad"
        And user selects "System Administration" on program-selection page
        When user is on the program-management page

    @BI-1598
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
        Then user can see "Import Experiments & Observations" preview table
        When user selects "Abort" button
        When user selects 'Yes, abort' button
        Then user can not see "Import Experiments & Observations" preview table
        And user uploads Experiments & Observations "InvalidImport.png" file
        When user selects 'Import' button

        Examples:
            | ProgramName | Key | Species |
            | A*          | T*  | Grape   |

    @BI-1603
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
        Then user can see "Import Experiments & Observations" preview table
        Then user can see "Exp Block #" column header
        Then user can see "2" in row "1" as "Exp Block #" column on Experiment and Observation Import page
        Then user can see "2" in row "2" as "Exp Block #" column on Experiment and Observation Import page
        Then user can see "2" in row "3" as "Exp Block #" column on Experiment and Observation Import page
        Then user can see "2" in row "4" as "Exp Block #" column on Experiment and Observation Import page

        Examples:
            | ProgramName | Key | Species |
            | A*          | T*  | Grape   |

    @BI-1960
    Scenario Outline: Error reporting Multiple Experiment Titles
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
        And user uploads Germplasm "GermplasmBad.xlsx" file
        And user selects 'Import' button
        When user pause for "10" seconds
        Then user can see "Breeding Method" in row "1" as "Field" column on Germplasm Lists
        Then user can see "Source" in row "2" as "Field" column on Germplasm Lists
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
        And user uploads Experiments & Observations "EXPBadTitle.csv" file
        When user selects 'Import' button
        When user pause for "10" seconds
        Then user can see banner appears with an error message "File contains more than one Experiment title"
        Examples:
            | ProgramName | Key | Species |
            | A*          | T*  | Grape   |

    @BI-1775
    Scenario Outline: Error reporting Text to Table
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
        And user uploads Germplasm "GermplasmBad.xlsx" file
        And user selects 'Import' button
        When user pause for "10" seconds
        Then user can see "Breeding Method" in row "1" as "Field" column on Germplasm Lists
        Then user can see "Source" in row "2" as "Field" column on Germplasm Lists
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
        And user uploads Experiments & Observations "EXPBad.csv" file
        When user selects 'Import' button
        When user pause for "10" seconds
        Then user can see "Germplasm GID" in row "1" as "Field" column on Experiment and Observation Import page
        Then user can see "Env Year" in row "2" as "Field" column on Experiment and Observation Import page
        Then user can see "Env" in row "3" as "Field" column on Experiment and Observation Import page

        Examples:
            | ProgramName | Key | Species |
            | A*          | T*  | Grape   |

    @BI-1776
    Scenario Outline: Preview Experiment & Observation import
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
        And user selects "Confirm" button
        When user pause for "10" seconds
        And user uploads Experiments & Observations "EXP.csv" file
        When user selects 'Import' button
        Then user can see "Import Experiments & Observations" preview table
        Then user can see "User: Cucumber Breeder" in preview table
        Then user can see "Creation Date: @TODAY" in preview table

        Examples:
            | ProgramName | Key | Species |
            | A*          | T*  | Grape   |