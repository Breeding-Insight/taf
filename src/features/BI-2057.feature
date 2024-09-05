Feature: Sample Tracking

  @BI-2057
  Scenario: Sample Tracking
    Given a new program is created
    Given user logs in as "Cucumber Breeder"
    When user selects "*" on program-selection page
    And user selects "Import Data" in top-level navigation
    And user uploads Germplasm "GermplasmSample.xlsx" file
    And user selects 'Import' button
    When user sets "GermplasmSort" in List Name field of import page
    When user sets "GermplasmSort" in List Description field of import page
    And user selects "Confirm" button
    When user selects "Experiments & Observations" in navigation
    When user selects "Import Experiments & Observations" button
    And user uploads Experiments & Observations "EXP.csv" file
    When user selects 'Import' button
    And user selects "Confirm" button
    When user selects "Sample Management" in navigation
    When user selects "Import Sample Submission" button
    And user uploads Genotype Sample "bi_sample_submission.xls" file
    When user selects 'Import' button
    When user sets "Sample" in Project Name field of import page
    And user selects "Confirm" button
    When user selects "Sample Management" in navigation
    Then user can see row "1" rows in a table
    Then user can see "Project Name" column header
    Then user can see "Created Date" column header
    Then user can see "Created By" column header
    Then user can see "Submission Status" column header
    Then user can see "Submitted Date" column header
    Then user can see "Vendor Order ID" column header
    Then user can see "Vendor Status" column header
