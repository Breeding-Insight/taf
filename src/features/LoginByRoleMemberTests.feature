Feature: Logging with Member

	Scenario: Logging in as a member of one program
		Given user logs in as "Cucumber Member"
		Then user can see Welcome page of program
		Then user can see "Snacks" in the upper right corner
		And user cannot see Program Selection combo box
		And user selects User Status menu dropdown
		And user can see "Logged in as Cucumber Member" as logged in
		And user can see a Log out button
		And user can see "Home" in navigation
		And user can see "Ontology" in navigation
		And user can see "Program Management" in navigation

	@BI-823
	Scenario: Logging in as a breeder of one program
		Given user logs in as "Cucumber Member"
		Then user can see Welcome page of program
		Then user can see "Snacks" in the upper right corner
		And user selects User Status menu dropdown
		And user can see "Logged in as Cucumber Member" as logged in
		And user can see a Log out button
		And user can see "Home" in navigation
		And user can see "Ontology" in navigation
		And user can see "Program Management" in navigation

	@BI-845
	Scenario: Logging in as a breeder of one program
		Given user logs in as "Cucumber Member"
		When user selects "Ontology" in navigation
		Then user can not see "Import Ontology" in navigation

	@BI-887
	Scenario: No Admin role, Program Member - Program User Management
		Given user logs in as "Cucumber Member"
		And user selects "Program Management" in navigation
		And user selects "Users" tab
		Then user can not see New User button
		And user can see each row does not have an "Edit" link
		And user can see each row does not have a "Deactivate" link

	#To ensure there is at least one location in list of locations in Snacks
	#Scenario will still pass with no locations, but won't test the lack of Edit and Deactivate links
	@BI-915
	Scenario: Program Location Management page - member - SETUP
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		When user selects "Program Management" in navigation
		When user selects "Locations" tab
		When user selects 'New Location' button in Program Management page
		When user sets "<location name>" in Name field in Program Management page
		When user selects 'Save' button in Program Management page
		Examples:
			| location name |
			| Location*     |

	@BI-915
	Scenario: Program Location Management page - member
		Given user logs in as "Cucumber Member"
		And user selects "Program Management" in navigation
		And user selects "Locations" tab
		Then user can not see "Edit" link 
		And user can not see "Deactivate" link
		Then user can not see 'New Location' button in Program Management page

