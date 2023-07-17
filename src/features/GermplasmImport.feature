Feature: Germplasm Import Tests

	Background: Setup
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		And user selects "Import Data" in navigation

	@BI-1587
	Scenario: File format options for germplasm export
		Then user can see 'Import' button accepts ".csv, .xls, .xlsx"

	@BI-1775
	Scenario: Error reporting Text to Table
		And user uploads Germplasm "GermplasmBad.xlsx" file
		And user selects 'Import' button
		When user pause for "10" seconds
        Then user can see "Breeding Method" in row "1" as "Field" column on Germplasm Lists
        Then user can see "Source" in row "2" as "Field" column on Germplasm Lists
        