Feature: Trait Import (10 Scenarios)

      Background: Setup
            Given user logs in as breeder
            When user selects "Snacks" on program-selection page
            And user selects "Traits" in navigation
            And user selects "Import Traits" in navigation

      @BI-916
      Scenario: Import Traits page
            Then user can header "Import Traits"
            And user can see a message 'Before You Import...'
            And user can see a message 'Prepare trait information for import using the provided template.'
            And user can see a button 'Download the Trait Import Template'
            And user can see a button 'Choose a file...'

      @BI-917
      Scenario: Traits - choosing a file
            When user uploads "test_import-xls.xls" file
            Then user can see "test_import-xls.xls" displayed
            And user cans see 'Choose a different file...' button
            And user can see 'Import' button

      @BI-918
      Scenario: Traits - choosing an xls file And selecting Import
            When user uploads "test_import-xls.xls" file
            And user selects 'Import' button
            Then user can see 'Curate And Confirm New Traits' header
            And user can see "Confirm" button
            And user can see "Abort" button
            And user see a list of traits in a table
            And user can see "Name" column header in "Traits Import Table"
            And user can see "Level" column header in "Traits Import Table"
            And user can see "Method" column header in "Traits Import Table"
            And user can see "Scale" column header in "Traits Import Table"
            And user can see each row has a "Show Details" link

      @BI-919
      Scenario: Traits - Abort Import, Modal
            When user uploads "test_import-xls.xls" file
            And user selects 'Import' button
            And user selects "Abort" button
            Then user can see a modal box
            And user can sees 'Abort This Import' in modal box
            And user can see 'No traits will be added, and the import in progress will be completely removed.' in modal box
            And user can see 'Yes, abort' button
            And user can see "Cancel" button
            And user selects "Cancel" button

      @BI-920
      Scenario: Traits - Abort Import, Cancel
            When user uploads "test_import-xls.xls" file
            And user selects 'Import' button
            And user selects "Abort" button
            And user selects "Cancel" button
            Then user can not see a modal box
            Then user can see 'Curate And Confirm New Traits' header

      @BI-921
      Scenario: Traits - Abort Import, Yes, Abort
            And user uploads "test_import-xls.xls" file
            And user selects 'Import' button
            And user selects "Abort" button
            When user selects 'Yes, abort' button
            Then user can see 'Imported cancelled' in banner

      @BI-922
      Scenario: Traits - Confirm Import for xls file
            And user uploads "test_import-xls.xls" file
            And user selects 'Import' button
            When user selects "Confirm" button
            Then user can see 'Imported traits have been added to Snacks.' in banner
            And user can see Traits table
            And user can see "Name" column header in "Traits Table"
            And user can see "Level" column header in "Traits Table"
            And user can see "Method" column header in "Traits Table"
            And user can see "Scale" column header in "Traits Table"
            And user can see each row has a "Show Details" link

      @BI-923
      Scenario: Traits - choosing a different file - xls, Then a csv file
            And user uploads "test_import-xls.xls" file
            And user uploads "test_import-csv.csv" file
            Then user can see "test_import-csv.csv" displayed
            And user can see 'Import' button

      @BI-924
      Scenario: Traits - Confirm Import for csv file
            And user uploads "test_import-csv.csv" file
            And user selects 'Import' button
            When user selects "Confirm" button
            Then user can see 'Imported traits have been added to Snacks.' in banner
            And user can see Traits table
            And user can see "Name" column header in "Traits Table"
            And user can see "Level" column header in "Traits Table"
            And user can see "Method" column header in "Traits Table"
            And user can see "Scale" column header in "Traits Table"
            And user can see each row has a "Show Details" link

      @BI-926
      Scenario: Traits - Duplicate Trait Name
            And user uploads "test_traits_dupTraitNames.xlsx" file
            And user selects 'Import' button
            Then user can see an error message "Trait name: Trait name duplicated in file. Duplicate set of traits are rows [2, 3] in row 2"
            And user can see an error message "Trait name: Trait name duplicated in file. Duplicate set of traits are rows [2, 3] in row 3"

      @BI-927
      @bug
      Scenario: Traits - missing column
            And user uploads "test_traits_missingCol.xlsx" file
            And user selects 'Import' button
            Then user can see an error message "Error parsing excel: Missing expected columns [Trait status]"

      @BI-928
      @bug
      Scenario: Traits - duplicate column
            And user uploads "test_traits_dupCol.xlsx" file
            And user selects 'Import' button
            Then user can see an error message "Error parsing excel: Found duplicate column names"

      @BI-929
      Scenario: Traits - missing formula
            And user uploads "test_traits_missingFormula.xlsx" file
            And user selects 'Import' button
            Then user can see an error message "Method formula: Missing method formula for Computation method in row 2"

      @BI-930
      Scenario: Traits - missing scale categories
            And user uploads "test_traits_missingScaleCat.xlsx" file
            And user selects 'Import' button
            Then user can see an error message "Scale categories: Missing scale categories for Ordinal scale in row 3"
            And user can see an error message "Scale categories: Missing scale categories for Ordinal scale in row 5"

      @BI-931
      @bug
      Scenario: Traits - missing method And scale names
            And user uploads "test_traits_MissingNames.xlsx" file
            And user selects 'Import' button
            And user can see an error message "Scale name: Missing scale name in row 3"
            Then user can see an error message "Method name: Missing method name in row 3"

      @BI-932
      Scenario: Traits - case sensitivity
            And user uploads "test_traits_case_insensitivity.xlsx" file
            And user selects 'Import' button
            Then user can see 'Curate And Confirm New Traits' header

      @BI-933
      Scenario: Traits - extra columns
            And user uploads "test_traits_extraCols.xlsx" file
            And user selects 'Import' button
            Then user can see 'Curate And Confirm New Traits' header