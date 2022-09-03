Feature: Logging with Breeder

	@BI-821
	Scenario: Logging in as a breeder of multiple programs
		Given user logs in as "Cucumber Breeder"
		Then user can see "Welcome, Cucumber Breeder!" on program-selection page
		And user can see 'Which program are you working with today'
		And user can see "Snacks" is in the list
		And user can see "Trail Mix" is in the list

	@BI-822
	@debug
	Scenario: User in multiple programs
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects User Status menu dropdown
		And user can see "Logged in as Cucumber Breeder" as logged in
		And user can see a Log out button
		Then user can see Welcome page of program
		Then user can see "Snacks" in the upper right corner
		And user can see Program Selection combo box
		And user can see "Home" in navigation
		And user can see "Ontology" in navigation
		And user can see "Program Management" in navigation
		When user navigates to Program Selection
		And user selects "Trail Mix" on program-selection page
		And user selects User Status menu dropdown
		And user can see "Logged in as Cucumber Breeder" as logged in
		And user can see a Log out button
		Then user can see Welcome page of program
		Then user can see "Trail Mix" in the upper right corner
		And user can see Program Selection combo box
		And user selects User Status menu dropdown
		And user can see "Home" in navigation
		And user can see "Ontology" in navigation
		And user can see "Program Management" in navigation

	
