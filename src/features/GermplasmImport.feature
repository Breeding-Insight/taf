Feature: Germplasm Import Tests

	Background: Setup
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		And user selects "Import Data" in navigation

	@BI-1587
	@debug
	Scenario: File format options for germplasm export
		Then user can see 'Import' button accepts ".csv, .xls, .xlsx"
