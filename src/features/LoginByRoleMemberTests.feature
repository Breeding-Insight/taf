@hTest
Feature: Logging with Member

	Scenario: Logging in as a member of one program
		Given user logs in as "Cucumber Member"
		Then user can see Welcome page of program
		Then user can see "Snacks" in the upper right corner
		And user cannot see Program Selection combo box
		And user can see "Logged in as Cucumber Member" as logged in
		And user can see a Log out button
		And user can see "Home" in navigation
		And user can see "Traits" in navigation
		And user can see "Program Management" in navigation

	@BI-823
	Scenario: Logging in as a breeder of one program
		Given user logs in as "Cucumber Member"
		Then user can see Welcome page of program
		Then user can see "Snacks" in the upper right corner
		And user can see "Logged in as Cucumber Member" as logged in
		And user can see a Log out button
		And user can see "Home" in navigation
		And user can see "Traits" in navigation
		And user can see "Program Management" in navigation

	@BI-845
	Scenario: Logging in as a breeder of one program
		Given user logs in as "Cucumber Member"
		When user selects "Traits" in navigation
		Then user can not see "Import Traits" in navigation

