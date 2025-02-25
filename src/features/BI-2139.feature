Feature: Experiments data to be displayed within a few seconds

  @BI-2139
  Scenario Outline: Experiments data to be displayed within a few seconds
    Given a new program is created
    Given user logs in as "Cucumber Breeder"
    When user selects "*" on program-selection page
    And user selects "Import Data" in top-level navigation
    And user uploads Germplasm "Germplasm77_2022-07-12.xlsx" file
    And user selects 'Import' button
    When user sets "GermplasmSort" in List Name field of import page
    When user sets "GermplasmSort" in List Description field of import page
    And user selects "Confirm" button
    And user pause for "5" seconds
    And user close notification pop-up
    When user selects "Experiments & Observations" in top-level navigation
    When user selects "Import Experiments & Observations" button
    And user uploads Experiments & Observations "BI-2139.csv" file
    Then user pause for "30" seconds
    When user selects 'Import' button
    Then user pause for "30" seconds
    Then user selects "Confirm" button
    Then user can see banner contains "Imported experiments & observations records have been added to"
    When user selects "Experiments & Observations" in top-level navigation
    Then user can see row "1" rows in a table
