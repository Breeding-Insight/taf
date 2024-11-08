Feature: The ontology can be case insensitive

  Background:
    Given a new program is created

  @BI-2156
  Scenario Outline: The ontology can be case insensitive
    Given user logs in as "Cucumber Breeder"
    When user selects "*" on program-selection page
    And user selects "Germplasm" in navigation
    And user selects "Manage Germplasm" button
    And user selects "Import file" menu item
    And user uploads Germplasm "GermplasmSample.xlsx" file
    And user selects 'Import' button
    When user sets "GermplasmSort" in List Name field of import page
    When user sets "GermplasmSort" in List Description field of import page
    And user selects "Confirm" button
    When user selects "Ontology" in navigation
    When user selects "Manage Ontology" button
    When user selects "Import file" link
    And user uploads Ontology "test01-ontology.xls" file
    When user selects 'Import' button
    When user selects "Confirm" button
    And user pause for "5" seconds
    When user selects "Experiments & Observations" in navigation
    When user selects "Import Experiments & Observations" button
    And user uploads Experiments & Observations "BI-2056.csv" file
    When user selects 'Import' button
    When user pause for "10" seconds
    And user can see "BLACKBERRY" column header
    And user can see "BlackBERRY1" column header
    And user can see "blackberry01" column header
    And user selects "Confirm" button
    When user pause for "10" seconds
    When user selects "Experiments & Observations" in navigation
    When user selects "New Trial DRP1" of row "1" of Experiments page
    And user can see "Blackberry" column header
    And user can see "Blackberry1" column header
    And user can see "Blackberry01" column header