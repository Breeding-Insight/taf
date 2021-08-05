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
	Scenario:  Adding new user with admin role
		Given user is on the user-management page
		When user creates a new user
			| Name   | Email                | Role  |
			| Test * | test*@mailinator.com | admin |
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
	Scenario: Edit form entities
		Given user is on the user-management page
		When user creates a new user
			| Name   | Email                | Role  |
			| Test * | test*@mailinator.com | admin |
		And user edits a user
			| Name   | Email                | Role |
			| Test * | test*@mailinator.com |      |
		Then user can see edited user in users list

	@BI-834
	Scenario: Editing form and selecting Cancel
		Given user is on the user-management page
		When user creates a new user
			| Name   | Email                | Role  |
			| Test * | test*@mailinator.com | admin |
		And user clicks Edit of a user
		And user selects Cancel button
		Then user can see user is in users list

	@BI-838
	Scenario: Deactivate link - modal
		Given user is on the user-management page
		And user creates a new user
			| Name   | Email                | Role    |
			| Test * | test*@mailinator.com | breeder |
		When user selects Deactivate of user
		Then user can see a modal with Deactivate message
		And user can see 'Yes, deactivate' button
		And user can see 'Cancel' button
		And user selects 'Cancel' button

	@BI-839
	Scenario Outline: User Deactivate link and Cancel
		Given user is on the user-management page
		And user creates a new user
			| Name       | Email                | Role    |
			| User* | test*@mailinator.com | breeder |
		When user selects Deactivate of user
		Then user can see "Deactivate" in modal box header
		Then user can see "<NameToDeactivate>" in modal box header
		Then user can see "from the system?" in modal box header
		Then user can see "Access for this user will be removed system wide." in modal box text
		Then user can see "Program-related data collected by this user will not be affected by this change." in modal box text
		And user can see 'Yes, deactivate' button
		And user can see 'Cancel' button
		When user selects 'Cancel' button
		Then user can not see a modal box
		Then user can see edited user in users list

		Examples: 
    		| NameToDeactivate |
			| User*       |


	@BI-840
	Scenario: Deactivate link - Yes, deactivate
		Given user is on the user-management page
		And user creates a new user
			| Name   | Email                | Role    |
			| Test * | test*@mailinator.com | breeder |
		When user selects Deactivate of user
		When user selects 'Yes, deactivate' button
		Then user can not see user is in users list

	@BI-836
	Scenario Outline: Editing self
		Given user is on the user-management page
		When user selects 'Edit' of "<Original Email>" of Users
		And user sets "<New Name>" in Name field
		And user sets "<New Email>" in Email field
		And user sets "<New Role>" in Role dropdown
		And user selects 'Save' button in Users
		Then user can see banner contains "User info (name/email/program) successfully updated"
		Then user can see banner contains "You don't have permissions to edit the roles of this user."
		#CLEANUP
		#When user selects 'Edit' of "<New Email>" of Users
		#And user sets "<Original Name>" in Name field
		#And user sets "<Original Email>" in Email field
		#And user sets "<Original Role>" in Role dropdown
		#And user selects 'Save' button in Users 

		Examples:
			| Original Email           | Original Name | Original Role | New Name   | New Email               | New Role |
			| christian@mailinator.com | Christian     | admin         | TestNew *  | testnew*@mailinator.com | No Role  |
	

	#@dummyTest
	#Scenario: Final Test: should pass to get cucumber json working
	#	Given user logs in as "Cucumber Breeder"
	#	Then user can see "Welcome, Cucumber Breeder!" on program-selection page

	#     Scenario: Editing form and selecting Save
	#         Given a system administrator is on the user-management page
	#          When the sysad selects 'Edit' for TestNewUser
	#           And changes TestNewUser to TestEditUser in the Name field
	#           And changes  newuser@mail.com to edituser@mail.com in the Email field
	#           And selects admin for role
	#           And selects Save button
	#          Then a banner appears with a success message 'User successfully updated'.
	#           And the form closes
	#           And TestNewUser is not in the list of users
	#           And EditNewUser is in the list of users
	#           And edituser@mail.com in the Email field
	#           And admin in the Role field

	#Scenario: SysAd can't edit own account
	#	Given user is on the user-management page

#      When the sysad selects 'Edit' for TestNewUser
#       And changes own name
#       And changes own email
#       And selects no role
#       And selects Save button
#      Then a banner appears with a success message 'User info (name/email/program) successfully updated'
#       And a banner appears with a fail message 'You don't have permissions to edit the roles of this user'
#       And the form closes
#       And TestNewUser is not in the list of users
#       And EditNewUser is in the list of users
#       And edituser@mail.com in the Email field
#       And admin in the Role field

#     Scenario: User Deactivate modal
#         Given a system administrator is on the user-management page
#           And selects 'Deactivate' for TestNewUser
#          Then a modal opens with message "Deactivate testDelete from the system?
#           Access for this user will be removed system wide. Program-related data collected by this user will not be affected by this change."
#           And there is a buttom for "Yes, deactivate"
#           And there is a button for "Cancel"
# click "Cancel"

#     Scenario: User Deactivate link and Cancel
#         Given a system administrator logs into http://sandbox.breedinginsight.net/ with valid credentials
#          When sysad selects Users in the left navigation pane
#           And selects 'Deactivate' for TestNewUser
#           And selects "Cancel"
#          Then the modal closes
#           And TestNewUser is still in the list of users

#     Scenario: User Deactivate link and 'Yes, deactivate'
#         Given a system administrator logs into http://sandbox.breedinginsight.net/ with valid credentials
#          When sysad selects Users in the left navigation pane
#           And selects 'Deactivate' for TestNewUser
#           And selects "Yes, deactivate"
#          Then the modal closes
#           And TestNewUser is not in the list of users
