Feature: Ontology Import (10 Scenarios)

	Background: Setup
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		And user selects "Import Data" in navigation
		And user selects "Ontology" tab

	@BI-916
	@BI-809
	@SmokeTests
	Scenario: Import Ontology page
		Then user can header "Import File"
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
	@debug
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
		And user can see each row has a "Show details" link

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
		And user can see each row has a "Show details" link

	@BI-923
	Scenario: Ontology - Confirm Import for xlsx file
		And user uploads "test_import-xlsx.xlsx" file
		And user selects 'Import' button
		When user selects "Confirm" button
		Then user can see banner contains "Imported ontology terms have been added to Snacks."
		And user can see Ontology table
		And user can see "Name" column header
		And user can see "Trait" column header
		And user can see "Method" column header
		And user can see "Scale Class" column header
		And user can see "Unit" column header
		And user can see each row has a "Show details" link

	@BI-924
	Scenario: Ontology - choosing a different file - xls, Then a csv file
		And user uploads "test_import-xls.xls" file
		And user uploads "test_import-csv.csv" file
		Then user can see "test_import-csv.csv" displayed
		And user can see 'Import' button


	@taf-bug
	@BI-925
	Scenario: Ontology - Confirm Import for csv file
		And user uploads "test_import-csv.csv" file
		And user selects 'Import' button
		When user selects "Confirm" button
		Then user can see banner contains "Imported ontology terms have been added to Snacks."
		And user can see Ontology table
		And user can see "Name" column header
		And user can see "Trait" column header
		And user can see "Method" column header
		And user can see "Scale Class" column header
		And user can see "Unit" column header
		And user can see each row has a "Show details" link

	@BI-1452
	Scenario: Ontology - Duplicate Trait Name
		And user uploads "test_traits_dupTraitNames.xlsx" file
		And user selects 'Import' button
		Then user can see "2" row "1" "Trait Name" field "Trait name duplicated in file. Duplicate set of traits are rows [2, 3]" message
		Then user can see "3" row "2" "Trait Name" field "Trait name duplicated in file. Duplicate set of traits are rows [2, 3]" message

	@BI-927
	Scenario: Ontology - missing column
		And user uploads "test_traits_missingCol.xlsx" file
		And user selects 'Import' button
		Then user can see an error message "Error parsing excel: Missing expected columns [Status, Trait entity, Name]"

	@BI-928
	@bug
	Scenario: Ontology - duplicate column
		And user uploads "test_traits_dupCol.xlsx" file
		And user selects 'Import' button
		Then user can see an error message "Error parsing excel: Found duplicate column names"

	@BI-1453
	Scenario: Ontology - missing formula
		And user uploads "test_traits_missingFormula.xlsx" file
		And user selects 'Import' button
		Then user can see "2" row "1" "Method Formula" field "Missing method formula for Computation method" message

	@BI-1454
	Scenario: Ontology - missing scale categories
		And user uploads "test_traits_missingScaleCat.xlsx" file
		And user selects 'Import' button
		Then user can see "3" row "1" "Scale Categories" field "Missing scale categories for Ordinal scale" message
		Then user can see "5" row "2" "Scale Categories" field "Missing scale categories for Ordinal scale" message

	@BI-931
	@bug
	Scenario: Ontology - missing unit
		And user uploads "test_traits_missingUnit.xlsx" file
		And user selects 'Import' button
		Then user can see "3" row "1" "Unit" field "Missing unit" message

	@BI-932
	Scenario: Ontology - case sensitivity
		And user uploads "test_traits_case_insensitivity.xlsx" file
		And user selects 'Import' button
		Then user can see 'Confirm New Ontology Term' header

	@BI-933
	Scenario: Ontology - extra columns
		And user uploads "test_traits_extraCols.xlsx" file
		And user selects 'Import' button
		Then user can see 'Confirm New Ontology Term' header

	@BI-1267
	Scenario: Import Traits - missing scale categories
		And user uploads "test_traits_missingReqFields.xlsx" file
		And user selects 'Import' button
		Then user can see "2" row "1" "Method Class" field "Missing method class" message
		Then user can see "2" row "2" "Name" field "Missing name" message
		Then user can see "3" row "3" "Trait Attribute" field "Missing trait attribute" message
		Then user can see "4" row "4" "Scale Class" field "Missing scale class" message
		Then user can see "4" row "5" "Trait Entity" field "Missing trait entity" message
		Then user can see "6" row "6" "Unit" field "Missing unit" message
		Then user can see "6" row "7" "Trait Description" field "Missing trait description" message
		
	@BI-1268
	Scenario: Import Traits - exceeds character length max
		And user uploads "test_traits_exceedsCharLen.xlsx" file
		And user selects 'Import' button
		Then user can see "3" row "1" "Name" field "Name exceeds 12 character limit" message
		Then user can see "4" row "2" "Method Description" field "Method description exceeds 30 character limit" message

	@BI-1273
	Scenario: Import Traits - invalid method and scale classes
		And user uploads "test_traits_invalidFields.xlsx" file
		And user selects 'Import' button
		Then user can see "2" row "1" "Method class" field "Invalid method class value" message
		Then user can see "3" row "2" "Scale class" field "Invalid scale class value" message
