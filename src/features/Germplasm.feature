Feature: Germplasm Tests

	Background: Setup
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		And user selects "Import Data" in navigation
		And user uploads Germplasm "Germplasm77_2022-07-12.xlsx" file
		And user selects 'Import' button
		When user sets "ListName" in List Name field of import page
		When user sets "ListDescription" in List Description field of import page
		And user selects "Confirm" button
		And user pause for "10" seconds
		And user selects "Germplasm" in navigation

	@BI-1501
	Scenario: All of the information associated with a Germplasm Details page
		Then user can see All Germplasm records exist on Germplasm page
		When user can see All Germplasm records have Show Details link on Germplasm page
		When user selects "Show Details" of row "3" of Germplasm page
		Then user can see details on Germplasm details page
			| Preferred Name | GID | Breeding Method | Source | Pedigree                | Pedigree GID | Synonyms | External UID | User             | Creation Date |
			| Germplas124    | 3   | Backcross       | Cross  | Germplas123/Germplas123 | 2 / 2        | Germ2    |              | Cucumber Breeder |               |
		Then user can see "Images" tab of Germplasm details page
		Then user can see "Pedigrees" tab of Germplasm details page
		Then user can see "Attributes" tab of Germplasm details page

	@BI-1514
	Scenario: GIDs clickable Link
		When user clicks Show All button
		Then user can see Female Parent GID value is a link
		Then user can see Male Parent GID value is a link
		When user selects "3" row Female Parent GID
		Then user can see details on Germplasm details page
			| Preferred Name | GID | Breeding Method | Source | Pedigree            | Pedigree GID | Synonyms | External UID | User             |
			| Germplas123    | 2   | Complex cross   | Cross  | Germplasm/Germplasm | 1 / 1        | Germ1    |              | Cucumber Breeder |

	@BI-1592
	Scenario: Able to see Created by information in germplasm lists table
		Then user can see "Germplasm" tab
		Then user can see "Germplasm Lists" tab
		When user selects "Germplasm Lists" tab on Gerplasm page
		Then user can see "Cucumber Breeder" in row "1" as "Created By" column on Germplasm Lists

	@BI-1593
	Scenario: able to filter the records in the all germplasm table
		When user selects "Germplasm" tab on Gerplasm page
		When user sets "11" in "GID" search fields
		Then user can see "11" in row "1" as "GID" column on All Germplasm
		When user refresh the page
		When user sets "90" in "GID" search fields
		Then user can see "No germplasm are currently defined for this program." in All Germplasm
		When user refresh the page
		When user sets "Germplas123" in "Name" search fields
		Then user can see "Germplas123" in row "1" as "Name" column on All Germplasm
		When user refresh the page
		When user sets "AAA" in "Name" search fields
		Then user can see "No germplasm are currently defined for this program." in All Germplasm
		When user refresh the page
		When user sets "Test cross" in "Breeding Method" search fields
		Then user can see "Test cross" in row "1" as "Breeding Method" column on All Germplasm
		When user refresh the page
		When user sets "AAA" in "Breeding Method" search fields
		Then user can see "No germplasm are currently defined for this program." in All Germplasm
		When user refresh the page
		When user sets "Cross" in "Source" search fields
		Then user can see "Cross" in row "1" as "Source" column on All Germplasm
		When user refresh the page
		When user sets "AAA" in "Source" search fields
		Then user can see "No germplasm are currently defined for this program." in All Germplasm
		When user refresh the page
		When user sets "5" in "Female Parent GID" search fields
		Then user can see "5" in row "1" as "Female Parent GID" column on All Germplasm
		When user refresh the page
		When user sets "AAA" in "Female Parent GID" search fields
		Then user can see "No germplasm are currently defined for this program." in All Germplasm
		When user refresh the page
		When user sets "2" in "Male Parent GID" search fields
		Then user can see "2" in row "1" as "Male Parent GID" column on All Germplasm
		When user refresh the page
		When user sets "AAA" in "Male Parent GID" search fields
		Then user can see "No germplasm are currently defined for this program." in All Germplasm
		When user refresh the page
		When user sets "@TODAY" in "Created Date" search fields
		Then user can see "@TODAY" in row "1" as "Created Date" column on All Germplasm
		When user refresh the page
		When user sets "AAA" in "Created Date" search fields
		Then user can see "No germplasm are currently defined for this program." in All Germplasm
		When user refresh the page
		When user sets "Cucumber Breeder" in "Created By" search fields
		Then user can see "Cucumber Breeder" in row "1" as "Created By" column on All Germplasm
		When user refresh the page
		When user sets "AAA" in "Created By" search fields
		Then user can see "No germplasm are currently defined for this program." in All Germplasm