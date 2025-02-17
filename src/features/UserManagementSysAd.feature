Feature: System User Management (15)

	Background: Sysad logs in
		Given user logs in as "sysad"
		And user selects "System Administration" on program-selection page
		And user selects Users in navigation

	@BI-825
	@BI-801
	@SmokeTests
	Scenario: User Management page
		When user is on the user-management page
		Then user can see page of Users
		And user can see New User button
		And user can see table header contains
			| Header   |
			| Name     |
			| Email    |
			| Role     |
			| Programs |
		And user can see each row has an Edit link
		And user can see each row has a Deactivate link
		And user can see Previous page button
		And user can see Current page button
		And user can see Next page button
		And user can see Results per page combobox
		And user can see Label per page
		And user can see Show All button

	@BI-826
	Scenario: New User form entities
		Given user is on the user-management page
		When user selects New User button
		Then user can see name field
		And user can see email field
		And user can see role dropdown
		And user can see "Name of user. All Unicode special characters accepted." under Name field
		And user can see Save button
		And user can see Cancel button

	@BI-827
	Scenario: Entering Name only and selecting Save - error message
		Given user is on the user-management page
		When user selects New User button
		And user sets "TestNewUser" in Name field
		And user selects Save button
		Then user can see banner appears with an error message "Fix Invalid Fields"
		And user can see 'Email is required' below the Email field

	@BI-828
	Scenario: Entering Email only and selecting Save - error message
		Given user is on the user-management page
		When user selects New User button
		And user sets "newuser@mail.com" in Email field
		And user selects Save button
		Then user can see banner appears with an error message "Fix Invalid Fields"
		And user can see 'Name is required' below the Name field

	@BI-829
	Scenario: Entering invalid Email and selecting Save - error message
		Given user is on the user-management page
		When user selects New User button
		And user sets "TestNewUser" in Name field
		And user sets "invalidemail" in Email field
		And user selects Save button
		Then user can see 'Email must be in email format' below the Email field

	@BUG-BI-2416
	@BI-830
	@BI-802
	@SmokeTests
	Scenario: Adding new user with no system role
		Given user is on the user-management page
		When user creates a new user
			| Name   | Email                | Role |
			| Test * | test*@mailinator.com |      |
		Then user can see a new user is added in User

	@BI-831
	@BUG-BI-2416
	Scenario:  Adding new user with admin role
		Given user is on the user-management page
		When user creates a new user
			| Name   | Email                | Role  |
			| Test * | test*@mailinator.com | System Administrator |
		Then user can see a new user is added in User

	@BI-832
	Scenario: Filling out new user form and selecting Cancel
		Given user is on the user-management page
		When user selects New User button
		And user sets "TestNewUser" in Name field
		And user sets "testemail*@gmail.com" in Email field
		And user sets "admin" in Role dropdown
		And user selects Cancel button
		Then user does not see new user form
		And user does not see a new user in Users list

	@BI-833
	@BI-835
	@BUG-BI-2416
	Scenario: Edit form entities
		Given user is on the user-management page
		When user creates a new user
			| Name   | Email                | Role  |
			| Test * | test*@mailinator.com | System Administrator |
		And user edits a user
			| Name   | Email                | Role |
			| Test * | test*@mailinator.com |      |
		Then user can see edited user in users list

	@BI-834
	@BUG-BI-2416
	Scenario: Editing form and selecting Cancel
		Given user is on the user-management page
		When user creates a new user
			| Name   | Email                | Role  |
			| Test * | test*@mailinator.com | System Administrator |
		And user clicks Edit of a user
		And user selects Cancel button
		Then user can see user is in users list

	@BI-838
	@BUG-BI-2416
	Scenario Outline: Deactivate link - modal
		Given user is on the user-management page
		And user creates a new user
			| Name   | Email                | Role    |
			| <NameToDeactivate> | test*@mailinator.com | System Administrator |
		When user selects Deactivate of user
		Then user can see "Deactivate" in modal box header
		And user can see "<NameToDeactivate>" in modal box header
		And user can see "from the system?" in modal box header
		And user can see "Access for this user will be removed system wide." in modal box text
		And user can see "Program-related data collected by this user will not be affected by this change." in modal box text
		And user can see 'Yes, deactivate' button
		And user can see 'Cancel' button
		And user selects 'Cancel' button

		Examples: 
    		| NameToDeactivate |
			| Test *       |

	@BI-839
	@BUG-BI-2416
	Scenario: User Deactivate link and Cancel
		Given user is on the user-management page
		And user creates a new user
			| Name       | Email                | Role    |
			| User* | test*@mailinator.com | System Administrator |
		When user selects Deactivate of user
		Then user can see a modal box
		When user selects 'Cancel' button
		Then user can not see a modal box
		Then user can see edited user in users list

	@BI-840
	@BUG-BI-2416
	Scenario: Deactivate link - Yes, deactivate
		Given user is on the user-management page
		And user creates a new user
			| Name   | Email                | Role    |
			| Test * | test*@mailinator.com | System Administrator |
		When user selects Deactivate of user
		When user selects 'Yes, deactivate' button
		Then user can not see user is in users list

	@BI-836
	Scenario Outline: Editing self
		Given user is on the user-management page
		When user selects 'Edit' of "<Original Email>" of Users
		And user sets "<New Name>" in Name field
		And user sets "<New Email>" in Email field
		Then user can not edit Role dropdown
		And user selects 'Save' button in Users
		Then user can see banner contains "User info (name/email/program) successfully updated"
		When user selects 'Edit' of "<New Email>" of Users
		And user sets "<Original Name>" in Name field
		And user sets "<Original Email>" in Email field
		And user selects 'Save' button in Users 

		Examples:
			| Original Email           | Original Name | New Name   | New Email               |
			| christian@mailinator.com | Christian     | TestNew *  | testnew*@mailinator.com |
	