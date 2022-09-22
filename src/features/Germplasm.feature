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
		When user selects "Show Details" of row "2" of Germplasm page
		Then user can see details on Germplasm details page
			| Preferred Name | GID | Breeding Method | Source | Pedigree            | Pedigree GID | Synonyms | External UID | User             | Creation Date |
			| Germplas123    | 2   | Complex cross   | Cross  | Germplasm/Germplasm | 1 / 1        | Germ1    |              | Cucumber Breeder |               |
		Then user can see "Images" tab of Germplasm details page
		Then user can see "Pedigrees" tab of Germplasm details page
		Then user can see "Attributes" tab of Germplasm details page

	@BI-1514
	@debug
	Scenario: GIDs clickable Link
		When user clicks Show All button
		Then user can see Female Parent GID value is a link
		Then user can see Male Parent GID value is a link
		When user selects "2" row Female Parent GID
		Then user can see details on Germplasm details page
			| Preferred Name | GID | Breeding Method | Source | Pedigree | Pedigree GID | Synonyms | External UID | User             |
			| Germplasm      | 1   | Polycross       | Cross  |          |              | Germ     |              | Cucumber Breeder |

