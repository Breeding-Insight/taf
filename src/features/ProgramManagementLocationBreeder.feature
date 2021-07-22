Feature: Program Location Management

	@BI-905
	Scenario: Program Location Management page - admin
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		When user can see Program Management header in Program Management page
		Then user can see 'Locations' tab in Program Management page
		Then user can see 'Users' tab in Program Management page
		Then user can see 'New Location' button in Program Management page

	@BI-906
	Scenario: New Location form - enter nothing and select Save
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		When user selects 'New Location' button in Program Management page
		When user selects 'Save' button in Program Management page
		Then user can see banner appears with an error message 'Fix Invalid Fields'
		And user can see 'Name is required' below the Name field in Program Management page

	@BI-907
	@debug
	Scenario: New Location form - enter location - Cancel
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		When user selects 'New Location' button in Program Management page
		When user sets "TestCancel" in Name field in Program Management page
		When user selects 'Cancel' button in Program Management page
		When user user can not see Location form in Program Management page












	@BI-864
	@BI-888
	Scenario: Program Users Table
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" in navigation
		Then user can see Program User Management page
		And user can see Users page
		And user can see table header contains
			| Header |
			| Name   |
			| Email  |
			| Roles  |
		And user can see each row has an Edit link
		And user can see each row has a Deactivate link
		And user can see Previous page button
		And user can see Current page button
		And user can see Next page button
		And user can see Results per page combobox
		And user can see Label per page
		And user can see Show All button

	@BI-805
	@SmokeTests
	Scenario: User Management page
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" in navigation
		Then user can see Program User Management page

	Scenario: System Admin and Program Member - Program User Management
		Given user logs in as "sysad"
		And user selects "System Administration" on program-selection page
		And user selects "Users" in navigation
		Then user can see page of Users
		And user can see table header contains
			| Header |
			| Name   |
			| Email  |
			| Role   |

	# 	Scenario: No System Role and Program Member - Program User Management
	# 		Given user logs in as "Cucumber Breeder"
	# 		And user selects "Snacks" on program-selection page
	# 		And user selects "Program Management" in navigation
	# 		And user selects "Users" in navigation
	# 		Then user can see page of Users
	# 		And user can see table header contains
	# 			| Header |
	# 			| Name   |
	# 			| Email  |
	# 			| Role   |
	# 		And user can see each row doesn't have an Edit link
	# 		And user can see each row doesn't have a Deactivate link

	Scenario: ???
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" in navigation
		Then user can see Program User Management page

	@BI-889
	Scenario: New User form - enter nothing and select Save
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" in navigation
		When user selects New User button
		And user selects Save button
		And user can see 'Name is required' below the Name field
		And user can see 'Email is required' below the Email field
		And user can see 'Role is required' below the Role field
		Then user can see banner appears with an error message 'Fix Invalid Fields'

	@BI-890
	Scenario: New User form - enter name only - Save
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" in navigation
		When user selects New User button
		And user sets "Tester Breeder" in Name field
		And user selects Save button
		And user can see 'Email is required' below the Email field
		And user can see 'Role is required' below the Role field

	@BI-891
	Scenario: ew Program User form - enter name and email only - Save
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" in navigation
		And user selects New User button
		And user sets "Tester Breeder" in Name field
		And user sets "testnewuser@mail.com" in Email field
		And user selects Save button
		Then user can see banner appears with an error message 'Fix Invalid Fields'
		And user can see 'Role is required' below the Role field

	@BI-892
	Scenario: New User form - enter all required, valid fields - Cancel
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" in navigation
		And user sets "Tester Breeder" in Name field
		And user sets "testnewuser@mail.com" in Email field
		And user sets "breeder" in Role dropdown
		And user selects Cancel button
		Then user does not see new user form
		And user does not see a new user in Users list

	@BI-893
	Scenario: New User form - enter all required, valid fields - Save
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" in navigation
		When user creates a new user
			| Name   | Email                | Role    |
			| Test * | test*@mailinator.com | breeder |
		Then user can see a new user is added in User

	@BI-894
	Scenario: NEW Program User form - enter invalid email address - Save
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" in navigation
		And user selects New User button
		And user sets "Tester Breeder" in Name field
		And user sets "testnewuser" in Email field
		And user sets "breeder" in Role dropdown
		And user selects Save button
		Then user can see banner appears with an error message 'Fix Invalid Fields'
		Then user can see 'Email must be in email format' below the Email field

	@BI-896
	Scenario: NEW User form - enter existing email address - Save
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" in navigation
		When user selects New User button
		And user sets "TestNewUser" in Name field
		And user sets "cucumberbreeder@mailinator.com" in Email field
		And user sets "breeder" in Role dropdown
		And user selects Save button
		Then user can see banner appears with an error message 'Error creating user, a user with this email already exists'
		Then user can see new user form

	@BI-897
	Scenario: Edit Form elements
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" in navigation
		When user creates a new user
			| Name   | Email                | Role    |
			| Test * | test*@mailinator.com | breeder |
		And user clicks Edit of a user
		Then user can see "breeder" in the the Role dropdown
		Then user can see Save button
		Then user can see Cancel button

	@BI-898
	Scenario: Edit Form - change role - Cancel
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" in navigation
		When user creates a new user
			| Name   | Email                | Role    |
			| Test * | test*@mailinator.com | breeder |
		And user clicks Edit of a user
		And user selects Cancel button
		Then user can see user is in users list

	@BI-899
	Scenario: Edit Form - change role - Save
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" in navigation
		When user creates a new user
			| Name   | Email                | Role    |
			| Test * | test*@mailinator.com | breeder |
		And user edits a user
			| Role   |
			| member |
		Then user can see user is in users list

	@BI-900
	#TODO
	Scenario: Deactivate link - modal
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" in navigation
		And user creates a new user
			| Name   | Email                | Role    |
			| Test * | test*@mailinator.com | breeder |
		When user selects Deactivate of user
		Then user can see a modal with Deactivate message
		Then user can see 'Yes, deactivate' button
		And user can see 'Cancel' button
		And user can see Save button

	@BI-901
	Scenario: Deactivate link - Cancel
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" in navigation
		And user creates a new user
			| Name   | Email                | Role    |
			| Test * | test*@mailinator.com | breeder |
		When user selects Deactivate of user
		And user can see 'Cancel' button
		Then user can see user is in users list

	Scenario: Deactivate link - Yes, deactivate
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" in navigation
		And user creates a new user
			| Name   | Email                | Role    |
			| Test * | test*@mailinator.com | breeder |
		When user selects Deactivate of user
		And user selects modal Yes, archive button
		Then user can not see user is in users list