Feature: Germplasm Sort Test

	@BI-1588
	@BI-2165
	@debug
	Scenario: Easily able to sort the germplasm in the germplasm table
		#Create a new program
		Given user logs in as "sysad"
		And user selects "System Administration" on program-selection page
		When user is on the program-management page
		When user selects 'New Program' button in Programs page
		When user sets "<Program Name>" in Program Name field in Programs page
		When user selects "<Species>" in Species dropdown in Programs page
		When user sets "<Program Key>" in Program Key field in Programs page
		When user selects 'Save' button in Programs page
		When user pause for "10" seconds
		When user navigates to Program Selection page
		When user selects "<Program Name>" on program-selection page
		When user selects "Program Administration" in navigation
		When user selects "Users" tab
		When user clicks 'New User' button
		When user sets "Cucumber Breeder" in Name field of User
		When user sets "cucumberbreeder@mailinator.com" in Email field of User
		When user sets "breeder" in Role dropdown of User
		When user click 'Save' button in User
		When user pause for "10" seconds
		When user close notification pop-up
		When user logs out
		#Login as Cucumber Breeder and go to Snacks
		Given user logs in as "Cucumber Breeder"
		When user selects "<Program Name>" on program-selection page
		And user selects "Import Data" in navigation
		And user uploads Germplasm "Germ-syno.xls" file
		And user selects 'Import' button
		When user sets "GermplasmSort" in List Name field of import page
		When user sets "GermplasmSort" in List Description field of import page
		And user selects "Confirm" button
		And user pause for "10" seconds
		And user selects "Germplasm" in navigation
		Then user can see All Germplasm records exist on Germplasm page
		When user clicks on GID sort ascending
		Then user can see "1" GID in first line
		When user clicks on GID sort descending
		Then user can see "11" GID in first line
		When user clicks on "Germplasm Name" of Germplasm table
		When user clicks on Germplasm Name sort descending
		Then user can see "unknown" Name in first line
		When user clicks on Germplasm Name sort ascending
		Then user can see "Germplas123" Name in first line
		When user clicks on "Breeding Method" of Germplasm table
		When user clicks on Breeding Method sort descending
		Then user can see "Three-way cross" Breeding Method in first line
		When user clicks on Breeding Method sort ascending
		Then user can see "Backcross" Breeding Method in first line
		When user clicks on "Source" of Germplasm table
		When user clicks on Source sort descending
		Then user can see "Cross" Source in first line
		When user clicks on Source sort ascending
		Then user can see "Cross" Source in first line
		When user clicks on "Female Parent GID" of Germplasm table
		When user clicks on Female Parent GID sort descending
		Then user can see "6" Female Parent GID in first line
		When user clicks on Female Parent GID sort ascending
		Then user can see "" Female Parent GID in first line
		When user clicks on "Male Parent GID" of Germplasm table
		When user clicks on Male Parent GID sort descending
		Then user can see "6" Male Parent GID in first line
		When user clicks on Male Parent GID sort ascending
		Then user can see "" Male Parent GID in first line
		When user clicks on "Created By" of Germplasm table
		When user clicks on Created By sort descending
		Then user can see "Cucumber Breeder" Created By in first line
		When user clicks on Created By sort ascending
		Then user can see "Cucumber Breeder" Created By in first line

		Examples:
			| Program Name | Program Key | Species |
			| A*           | A*          | Potato  |

