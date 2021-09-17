Feature: Ontology Import (10 Scenarios)

	Background: Setup
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		And user selects "Ontology" in navigation
		And user selects "Import Ontology" in navigation

	@BI-916
	@BI-809
	@SmokeTests
	Scenario: Import Ontology page
		Then user can header "Import Ontology"
		And user can see a message 'Before You Import...'
		And user can see a message 'Prepare ontology information for import using the provided template.'
		And user can see a button 'Download the Ontology Import Template'
		And user can see a button 'Choose a file...'

	@BI-917
	Scenario: Ontology - choosing a file
		When user uploads "test_import-xls.xls" file
		Then user can see "test_import-xls.xls" displayed
		And user cans see 'Choose a different file...' button
		And user can see 'Import' button

	@BI-918
	@BI-810
	@SmokeTests
	Scenario: Ontology - choosing an xls file And selecting Import
		When user uploads "test_import-xls.xls" file
		And user selects 'Import' button
		Then user can see 'Confirm New Ontology Term' header
		And user can see "Confirm" button
		And user can see "Abort" button
		And user see a list of ontology terms in a table
		And user can see "Name" column header
		And user can see "Trait" column header
		And user can see "Method" column header
		And user can see "Scale Class" column header
		And user can see "Unit" column header
		And user can see each row has a "Show Details" link

	@BI-919
	Scenario: Ontology - Abort Import, Modal
		When user uploads "test_import-xls.xls" file
		And user selects 'Import' button
		And user selects "Abort" button
		Then user can see a modal box
		And user can see "Abort This Import" in modal box header
		And user can see "No ontology terms will be added, and the import in progress will be completely removed." in modal box text
		And user can see 'Yes, abort' button
		And user can see "Cancel" button
		And user selects "Cancel" button

	@BI-920
	Scenario: Ontology - Abort Import, Cancel
		When user uploads "test_import-xls.xls" file
		And user selects 'Import' button
		And user selects "Abort" button
		And user selects "Cancel" button
		Then user can not see a modal box
		Then user can see 'Confirm New Ontology Term' header

	@BI-921
	Scenario: Ontology - Abort Import, Yes, Abort
		And user uploads "test_import-xls.xls" file
		And user selects 'Import' button
		And user selects "Abort" button
		When user selects 'Yes, abort' button
		Then user can see banner contains "Import cancelled"

	@taf-bug
	@BI-922
	@BI-811
	Scenario: Ontology - Confirm Import for xls file
		And user uploads "test_import-xls.xls" file
		And user selects 'Import' button
		When user selects "Confirm" button
		Then user can see banner contains "Imported ontology terms have been added to Snacks."
		And user can see Ontology table
		And user can see "Name" column header
		And user can see "Trait" column header
		And user can see "Method" column header
		And user can see "Scale Class" column header
		And user can see "Unit" column header
		And user can see each row has a "Show Details" link

	@BI-923
	Scenario: Ontology - choosing a different file - xls, Then a csv file
		And user uploads "test_import-xls.xls" file
		And user uploads "test_import-csv.csv" file
		Then user can see "test_import-csv.csv" displayed
		And user can see 'Import' button

	@taf-bug
	@BI-924
	Scenario: Ontology - Confirm Import for csv file
		And user uploads "test_import-csv.csv" file
		And user selects 'Import' button
		When user selects "Confirm" button
		Then user can see banner contains "Imported ontology terms have been added to Snacks."
		And user can see Ontology table
		And user can see "Name" column header
		And user can see "Level" column header
		And user can see "Method" column header
		And user can see "Scale" column header
		And user can see each row has a "Show Details" link

	@BI-926
	Scenario: Ontology - Duplicate Trait Name
		And user uploads "test_traits_dupTraitNames.xlsx" file
		And user selects 'Import' button
		Then user can see an error message "Trait name: Trait name duplicated in file. Duplicate set of traits are rows [2, 3] in row 2"
		And user can see an error message "Trait name: Trait name duplicated in file. Duplicate set of traits are rows [2, 3] in row 3"

	@BI-927
	@bug
	Scenario: Ontology - missing column
		And user uploads "test_traits_missingCol.xlsx" file
		And user selects 'Import' button
		Then user can see an error message "Error parsing excel: Missing expected columns [Trait status]"

	@BI-928
	@bug
	Scenario: Ontology - duplicate column
		And user uploads "test_traits_dupCol.xlsx" file
		And user selects 'Import' button
		Then user can see an error message "Error parsing excel: Found duplicate column names"

	@BI-929
	Scenario: Ontology - missing formula
		And user uploads "test_traits_missingFormula.xlsx" file
		And user selects 'Import' button
		Then user can see an error message "Method formula: Missing method formula for Computation method in row 2"

	@BI-930
	Scenario: Ontology - missing scale categories
		And user uploads "test_traits_missingScaleCat.xlsx" file
		And user selects 'Import' button
		Then user can see an error message "Scale categories: Missing scale categories for Ordinal scale in row 3"
		And user can see an error message "Scale categories: Missing scale categories for Ordinal scale in row 5"

	@BI-931
	@bug
	Scenario: Ontology - missing method And scale names
		And user uploads "test_traits_MissingNames.xlsx" file
		And user selects 'Import' button
		And user can see an error message "Scale name: Missing scale name in row 3"
		Then user can see an error message "Method name: Missing method name in row 3"

	@BI-932
	Scenario: Ontology - case sensitivity
		And user uploads "test_traits_case_insensitivity.xlsx" file
		And user selects 'Import' button
		Then user can see 'Confirm New Ontology Term' header

	@BI-933l
	Scenario: Ontology - extra columns
		And user uploads "test_traits_extraCols.xlsx" file
		And user selects 'Import' button
		Then user can see 'Confirm New Ontology Term' header