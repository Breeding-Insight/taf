
Feature: Germplasm Preview Tests

	@BI-1515
	@debug
	Scenario Outline: Configuration as a sub-menu
		Given user logs in as "sysad"
		And user selects "System Administration" on program-selection page
		When user is on the program-management page
		#Create a new program
		When user selects 'New Program' button in Programs page
		When user sets "<ProgramName>" in Program Name field in Programs page
		When user selects "<Species>" in Species dropdown in Programs page
		When user sets "<Key>" in Program Key field in Programs page
		When user selects 'Save' button in Programs page
		When user pause for "10" seconds
		When user navigates to Program Selection page
		When user selects "<ProgramName>" on program-selection page
		When user selects "Program Management" in navigation
		When user selects "Users" tab
		When user clicks 'New User' button
		When user sets "Cucumber Breeder" in Name field of User
		When user sets "cucumberbreeder@mailinator.com" in Email field of User
		When user sets "breeder" in Role dropdown of User
		When user click 'Save' button in User
		When user pause for "10" seconds
		When user close notification pop-up
		When user logs out
		#Login as Cucumber Breeder and go to new Program
		When user logs in as "Cucumber Breeder"
		When user selects "<ProgramName>" on program-selection page
		And user selects "Import Data" in navigation
		And user uploads Germplasm "Germplasm77_2022-07-12.xlsx" file
		And user selects 'Import' button
		Then user can see "Germ" on "1" of Preview Table
		Then user can see "Germ1" on "2" of Preview Table
		Then user can see "Germ2" on "3" of Preview Table
		Then user can see "Germ3" on "4" of Preview Table
		Then user can see "Germ" on "5" of Preview Table
		Then user can see "Germ" on "6" of Preview Table
		Then user can see "Germ" on "7" of Preview Table
		Then user can see "Germ" on "8" of Preview Table
		Then user can see "Germ" on "9" of Preview Table
		Then user can see "" on "10" of Preview Table
		When user sets "ListName" in List Name field of import page
		When user sets "ListDescription" in List Description field of import page
		And user selects "Confirm" button
		And user pause for "10" seconds
		And user selects "Germplasm" in navigation

		Examples:
			| ProgramName | Key | Species |
			| P*          | T*  | Grape   |
