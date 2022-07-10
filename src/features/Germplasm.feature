Feature: Germplasm Tests

	Background: Setup
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		And user selects "Germplasm" in navigation


	@BI-1501
	@debug
	Scenario: All of the information associated with a Germplasm Details page
		Then user can see a new program is created
		# And user can see All Germplasm records exist for the germplasm.

		# And user can see All Germplasm records have Show Details.

		# WHEN user clicks on Show Details

		# THEN user navigated to the Germplasm Details page.

		# And user can see Germplasm Details page has metadata about germplasm.

		# And user can see Germplasm Details page has a tab for Images

		# And user can see Germplasm Details page has a tab for Pedigrees.
