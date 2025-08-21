Feature: Verify correct entry numbers on all germplasm export list

  Background:
    Given a new program is created

  @BI-2389
  Scenario Outline: The ontology can be case insensitive
    Given user logs in as "Cucumber Breeder"
    When user selects "*" on program-selection page
    And user selects "Germplasm" in top-level navigation
    And user selects "Manage Germplasm" button
    And user selects "Import file" menu item
    And user uploads Germplasm "GermplasmSample.xlsx" file
    And user selects 'Import' button
    When user sets "GermplasmSort" in List Name field of import page
    When user sets "GermplasmSort" in List Description field of import page
    And user selects "Confirm" button
    And user pause for "5" seconds
    And user selects "Germplasm" in top-level navigation
    And user selects "Manage Germplasm" button
    And user selects "Download file" button
    Then the value of column "GID" and column "Entry No" at row 1 in the downloaded file should be equal
    Then the value of column "GID" and column "Entry No" at row 2 in the downloaded file should be equal
    Then the value of column "GID" and column "Entry No" at row 3 in the downloaded file should be equal
    Then the value of column "GID" and column "Entry No" at row 4 in the downloaded file should be equal
    