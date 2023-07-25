Feature: Germplasm Tests

	Background: Setup
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		And user selects "Import Data" in navigation
		And user uploads Germplasm "Germplasm77_2022-07-12.xlsx" file
		And user selects 'Import' button
		When user sets "ListName" in List Name field of import page
		When user sets "ListDescription" in List Description field of import page
		And user selects "Confirm" button
		And user pause for "10" seconds
		And user selects "Germplasm" in navigation
	
	@BI-1592
	Scenario: Able to see Created by information in germplasm lists table
		Then user can see "Germplasm" tab
		Then user can see "Germplasm Lists" tab
		When user selects "Germplasm Lists" tab on Gerplasm page
		Then user can see "Cucumber Breeder" in row "1" as "Created By" column on Germplasm Lists

	