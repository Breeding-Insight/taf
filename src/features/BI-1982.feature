    Feature: Display an error when creating a duplicate breeding method

    @BI-1982
	Scenario: Display an error when creating a duplicate breeding method
    	Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		And user selects "Program Administration" in navigation
		And user selects "Breeding Methods" tab
		When user selects "Create Breeding Method" button
        Then user can see 'Breeding Methods' tab in Program Management page
        Then user can see 'Create Breeding Method' button in Breeding Method Management page
        When user clicks 'Create Breeding Method' button in Breeding Method Management page
        Then user can see new Breeding Method form
        When user sets "Allopolyploid" in 'Name' field in Breeding Method form
        And user sets "Duplicate Allopolyploid" in 'Description' field in Breeding Method form
        And user sets "ALP" in 'Abbreviation' field in Breeding Method form
        When user selects "Ploidy" in 'Category' dropdown in Breeding Method form
        When user selects "Generative (+)" in 'Genetic Diversity' dropdown in Breeding Method form
        And user clicks 'Save' button in Breeding Method form
        And user pause for "5" seconds
        Then user can see banner appears with an error message "A breeding method with the name 'Allopolyploid' is already defined in the system."

