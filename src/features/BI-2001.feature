Feature: Popup window for germplasm download

    @BI-2001 @BI-2002 @debug
    Scenario: Popup window for germplasm download
        Given a new program is created
        Given user logs in as "Cucumber Breeder"
        When user selects "*" on program-selection page
        And user selects "Import Data" in navigation
		And user uploads Germplasm "Germplasm77_2022-07-12.xlsx" file
		And user selects 'Import' button
        When user sets "ListName" in List Name field of import page
		When user sets "ListDescription" in List Description field of import page
		And user selects "Confirm" button
		And user pause for "10" seconds
		And user selects "Germplasm" in navigation
        And user selects "Lists" tab
        And user selects "Download" of row "1" of Experiments page
        Then user can see ".xls" on Download prompt
        Then user can see ".xlsx" on Download prompt
        Then user can see ".csv" on Download prompt
       