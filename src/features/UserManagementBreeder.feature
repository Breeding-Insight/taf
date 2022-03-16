Feature: Breeder User Management

	Scenario: User Program Welcome Page
		Given user logs in as "Cucumber Breeder"
		Then user can see "Welcome, Cucumber Breeder!" on program-selection page
		And user can see 'Which program are you working with today'
		When user selects "Snacks" on program-selection page
		Then user can see "Home" in navigation
		And user can see "Ontology" in navigation
		And user can see "Program Management" in navigation

	@BI-864
	@BI-888
	Scenario: Program Users Table
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" tab
		Then user can see Program User Management page
		And user can see Users page
		And user can see table header contains
			| Header |
			| Name   |
			| Email  |
			| Role   |
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
		And user selects "Users" tab
		Then user can see Program User Management page

	##May need to be modified as currently no user who is admin and program member
	Scenario: System Admin and Program Member - Program User Management
		Given user logs in as "sysad"
		And user selects "Trail Mix" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" tab
		Then user can see page of Users
		And user can see table header contains
			| Header |
			| Name   |
			| Email  |
			| Role   |

	Scenario: ???
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" tab
		Then user can see Program User Management page

	@BI-889
	Scenario: New User form - enter nothing and select Save
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" tab
		When user selects New User button
		And user selects Save button
		And user can see 'Name is required' below the Name field
		And user can see 'Email is required' below the Email field
		And user can see 'Role is required' below the Role field
		Then user can see banner appears with an error message "Fix Invalid Fields"

	@BI-890
	Scenario: New User form - enter name only - Save
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" tab
		When user selects New User button
		And user sets "Tester Breeder" in Name field
		And user selects Save button
		And user can see 'Email is required' below the Email field
		And user can see 'Role is required' below the Role field

	@BI-891
	Scenario: New Program User form - enter name and email only - Save
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" tab
		And user selects New User button
		And user sets "Tester Breeder" in Name field
		And user sets "testnewuser@mail.com" in Email field
		And user selects Save button
		Then user can see banner appears with an error message "Fix Invalid Fields"
		And user can see 'Role is required' below the Role field

	@BI-892
	Scenario: New User form - enter all required, valid fields - Cancel
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" tab
		And user selects New User button
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
		And user selects "Users" tab
		When user creates a new user
			| Name   | Email                | Role    |
			| Test * | test*@mailinator.com | breeder |
		Then user can see a new user is added in User

	@BI-894
	Scenario: NEW Program User form - enter invalid email address - Save
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" tab
		And user selects New User button
		And user sets "Tester Breeder" in Name field
		And user sets "testnewuser" in Email field
		And user sets "breeder" in Role dropdown
		And user selects Save button
		Then user can see banner appears with an error message "Fix Invalid Fields"
		Then user can see 'Email must be in email format' below the Email field

	@BI-896
	Scenario: NEW User form - enter existing email address - Save
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" tab
		When user selects New User button
		And user sets "TestNewUser" in Name field
		And user sets "cucumberbreeder@mailinator.com" in Email field
		And user sets "breeder" in Role dropdown
		And user selects Save button
		Then user can see banner appears with an error message "Error creating user, a user with this email already exists"
		Then user can see new user form

	@BI-897
	Scenario: Edit Form elements
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" tab
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
		And user selects "Users" tab
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
		And user selects "Users" tab
		When user creates a new user
			| Name   | Email                | Role    |
			| Test * | test*@mailinator.com | breeder |
		And user edits a user
			| Role   |
			| member |
		Then user can see user is in users list

	@BI-900
	Scenario Outline: Deactivate link - modal
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" tab
		And user creates a new user
			| Name  | Email                | Role    |
			| User* | test*@mailinator.com | breeder |
		When user selects Deactivate of user
		Then user can see "Deactivate" in modal box header
		Then user can see "<NameToDeactivate>" in modal box header
		Then user can see "from program Snacks?" in modal box header
		Then user can see "This will only remove the user's access to your program and will not affect their account." in modal box text
		Then user can see "Program-related data collected by this user will not be affected by this change." in modal box text
		Then user can see 'Yes, archive' button
		And user can see 'Cancel' button

		Examples:
			| NameToDeactivate |
			| User*            |

	@BI-901
	Scenario: Deactivate link - Cancel
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" tab
		And user creates a new user
			| Name   | Email                | Role    |
			| Test * | test*@mailinator.com | breeder |
		When user selects Deactivate of user
		And user can see 'Cancel' button
		And user selects "Cancel" button
		Then user can see user is in users list

	@BI-902
	Scenario: Deactivate link - Yes, deactivate
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" tab
		And user creates a new user
			| Name   | Email                | Role    |
			| Test * | test*@mailinator.com | breeder |
		When user selects Deactivate of user
		And user selects modal Yes, archive button
		Then user can not see user is in users list

	@BI-903
	@debug
	Scenario: admin editing self - Program User management
		Given user logs in as "sysad"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" tab
		When user selects "Edit" of Name "Christian"
		Then user can not edit Role dropdown
		When user selects "Save" button

	@BI-904
	Scenario: breeder with no admin role editing self - Program User management
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		And user selects "Users" tab
		When user selects "Edit" of Name "Cucumber Breeder"
		When user selects "member" in Role dropdown
		When user selects "Save" button
		Then user can see banner contains "You do not have permissions to edit this user"
