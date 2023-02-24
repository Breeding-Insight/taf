Feature: Smoke Tests (11)

	@BI-804
	@SmokeTests
	Scenario: New Program, Save
		Given user logs in as "sysad"
		And user selects "System Administration" on program-selection page
		When user creates a new program
			| Program Name | Species      | Program Key |
			| Test *       | Sweet Potato | T*          |
		Then user can see a new program is created

	@BI-806
	Scenario Outline: New Program User
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		When user selects "Program Administration" in navigation
		When user selects "Users" tab
		When user clicks 'New User' button
		When user sets "<Name>" in Name field of User
		When user sets "<Email>" in Email field of User
		When user sets "<Role>" in Role dropdown of User
		When user click 'Save' button in User
		Then user can see banner contains "Success!"
		Then user can see "Name" column in Users
		Then user can see "Email" column in Users
		Then user can see "Role" column in Users
		Then user can see a new user is added in User

		Examples:
			| Name   | Email                | Role    |
			| Test * | test*@mailinator.com | breeder |

	@BI-806
	Scenario: Check Users page
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		When user selects "Program Administration" in navigation
		When user selects "Users" tab
		Then user can see "Name" column in Users
		Then user can see "Email" column in Users
		Then user can see "Role" column in Users
		Then user can see 'Previous' button
		Then user can see 'Next' button
		Then user can see 'Show All' button
		Then user can see 'per page' label
		Then user can see Results Per Page dropdown

	@BI-807
	Scenario Outline: Program Location Management page
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		When user selects "Program Administration" in navigation
		When user selects "Locations" tab
		When user selects 'New Location' button in Program Management page
		When user sets "<location name>" in Name field in Program Management page
		When user selects 'Save' button in Program Management page
		Then user can not see the New Location form in Program Management page
		Then user can see banner contains "Success!"
		Then user can see table header contains
			| Header        |
			| Name          |
			| # Experiments |
		Then user can see "<location name>" in Name column in Program Management page
		And user can see each row has an Edit link
		And user can see each row has a Deactivate link
		Examples:
			| location name |
			| Location*     |

	@BI-808
	Scenario: Program Location Management page
		Given user logs in as "sysad"
		When user selects "Snacks" on program-selection page
		When user selects "Program Administration" in navigation
		When user selects "Locations" tab
		When user selects 'New Location' button in Program Management page
		When user sets "<location name>" in Name field in Program Management page
		When user selects 'Save' button in Program Management page
		Then user can not see the New Location form in Program Management page
		Then user can see banner contains "Success!"
		Then user can see table header contains
			| Header        |
			| Name          |
			| # Experiments |
		Then user can see "<location name>" in Name column in Program Management page
		And user can see each row has an Edit link
		And user can see each row has a Deactivate link
		Examples:
			| location name |
			| Location*     |