Feature: Smoke Tests (11)

	@BI-804
	@SmokeTests
	Scenario: New Program, Save
		Given user logs in as "sysad"
		And user selects "System Administration" on program-selection page
		When user creates a new program
			| Program Name | Species      |
			| Test *       | Sweet Potato |
		Then user can see a new program is created

	@BI-806
	Scenario Outline: New Program User
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		When user selects "Program Management" in navigation
		When user selects "Users" in navigation
		When user clicks 'New User' button
		When user sets "<Name>" in Name field of User
		When user sets "<Email>" in Email field of User
		When user sets "<Role>" in Role dropdown of User
		When user click 'Save' button in User
		Then user can see banner contains "Success!"
		Then user can see "Name" column in Users
		Then user can see "Email" column in Users
		Then user can see "Roles" column in Users
		Then user can see a new user is added in User

		Examples:
			| Name   | Email                | Role    |
			| Test * | test*@mailinator.com | breeder |

	@BI-806
	Scenario: Check Users page
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		When user selects "Program Management" in navigation
		When user selects "Users" in navigation
		Then user can see "Name" column in Users
		Then user can see "Email" column in Users
		Then user can see "Roles" column in Users
		Then user can see 'Previous' button
		Then user can see 'Next' button
		Then user can see 'Show All' button
		Then user can see 'per page' label
		Then user can see Results Per Page dropdown

	@BI-807
	@debug
	Scenario Outline: Program Location Management page
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		When user selects "Program Management" in navigation
		When user selects "Locations" in navigation
		When user selects 'New Location' button in Program Management page
		When user sets "<location name>" in Name field in Program Management page
		When user selects 'Save' button in Program Management page
		Then user can not see the New Location form in Program Management page
		Then user can see banner contains "Success! <location name> added."
		Then user can see "Name" column header
		Then user can see "# Experiments" column header
		Then user can see "<location name>" in Name column in Program Management page
		And user can see each row has an Edit link
		And user can see each row has a Deactivate link
		Examples:
			| location name | 
			| location1 | 

	@BI-808
	Scenario: Program Location Management page
		Given user logs in as "sysad"
		When user selects "Snacks" on program-selection page
		When user selects "Program Management" in navigation
		When user selects "Locations" in navigation
		# When user selects "New Location" in Locations


# #don't know how to add breeder
#         Scenario: Program User Managment page
#             Given Snacks exists as a program
#               And the user has been added to it as a breeder
#               And the user  logs into a BI environment with valid credentials
#               And selects Snacks on program-selection page
#               And selects "Program Management" in the left navigation pane
#              When user selects Users in the left navigation pane
#              Then user is on the Program User Management page
#               And sees '+ New User'

# #don't know how to add breeder
#         Scenario: New User, Save
#             Given Snacks exists as a program
#               And the user has been added to it as a breeder
#               And the user  logs into a BI environment with valid credentials
#               And selects Snacks on program-selection page
#               And selects "Program Management" in the left navigation pane
#              When user selects Users in the left navigation pane
#               And is on the Program User Management page
#               And selects 'New User'
#               And enters TestNewUser in the Name field
#               And enters testnewuser@mail.com in the Email field
#               And selects breeder from the role dropdown
#               And selects Save
#              Then a banner appears with a success message 'User successfully created'
#               And the form closes
#               And a table with row of headers labeled Name, Email, And Roles
#               And TestNewUser is in the Name column
#               And testnewuser@mail.com is in the Email column
#               And breeder is in the Roles column
#               And there is an Edit button
#               And there is a Deactivate button
#               And  a previous page button
#               And a current page
#               And a Next page button
#               And a results per page combo box
#               And a label 'per page'
#               And a  Show All button

#         #what is this test for? validating ui components?
#         Scenario: Program Location Management page
#             Given Snacks exists as a program
#               And I login to BI as a system administrator
#              When I select System Administration
#               And select Snacks under Programs in navigation page
#               And select Program Management under Snacks
#              Then the Program Location Management page is presented
#               And I see a tab labeled Locations
#               And I see a tab labeled Users
#               And there is a "+ New Location" button

#         Scenario: New Location, Save
#             Given a sysad is logs in
#               And selects System Administration on program-selection page
#               And selects Program "Snacks" in navigation
#               And selects "Program Management" in navigation
#               And select "+ New Location" button
#               And enter Target into "Name"
#               And select "Save"
#              Then the form closes
#               And there is a success banner which states "Success! Target added."
#               And the headers of the locations table are "Name" And "# Experiments"
#               And Target is in the list of Locations
#               And there is an edit link
#               And there is a deactivate link

#         Scenario: Trait Import page
#             Given Snacks exists as a program
#               And I login to BI as a system administrator
#               And I am also a breeder for Snacks
#              When I select System Administration
#               And select Snacks under Programs in the left navigation pane
#               And select Import Traits
#              Then the traits/import page is presented
#               And I see a header "Import Traits"
#               And a 'Choose a file' button

#         Scenario: Traits - choosing an xlsx file And Import
#             Given Snacks exists as a program
#               And I login to BI as a system administrator
#               And I am also a breeder for Snacks
#               And I select System Administration
#               And select Snacks under Programs in the left navigation pane
#               And select Traits
#               And select Import Traits
#               And select Choose File
#               And choose a file <filename.xlsx>
#               And select Open
#              When I select "Import"
#              Then I'm presented with a page with the header 'Curate And Confirm New Traits'
#               And a 'Confirm' button
#               And a list of traits in a table
#               And the headers are Name, Level, Methos, And Scale
#               And each row has a 'Show Details' link

#         Scenario: Traits - Confirm Import
#             Given Snacks exists as a program
#               And I login to BI as a system administrator
#               And I am also a breeder for Snacks
#               And I select System Administration
#               And select Snacks under Programs in the left navigation pane
#               And select Traits
#               And select Import Traits
#               And select Choose File
#               And choose a file <filename.xlsx>
#               And select Open
#              When I select "Import"
#              When I select 'Confirm' button
#              Then I see a success banner stating 'Imported traits have been added to Snack.'
#               And the newly imported traits are listed in the 'All Traits' table