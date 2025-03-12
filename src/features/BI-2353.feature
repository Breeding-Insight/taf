Feature: Experiment and Observations File to accept without sub units Apps

@BI-2353
Scenario: Experiment and Observations File to accept without sub units Apps
    Given a new program is created
    Given user logs in as "Cucumber Breeder"
    When user selects "*" on program-selection page
    When user selects "Experiments & Observations" in navigation
    When user selects "Import Experiments & Observations" button
    And user uploads Experiments & Observations "EXP-with-sub-obs-sub-unit-id.csv" file
    When user selects 'Import' button
    When user pause for "30" seconds
    Then user can see banner appears with an error message "Error(s) detected in file, EXP-with-sub-obs-sub-unit-id.csv. Ontology term(s) not found: SubObsUnit,SubObsUnitID,sadfasdfsdf. Import cannot proceed."