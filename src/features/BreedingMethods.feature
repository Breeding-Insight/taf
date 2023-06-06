Feature: Breeding Methods

  Background: Required Setup
    Given user logs in as "Cucumber Breeder"
    When user selects "Snacks" on program-selection page
    And user selects "Program Administration" in navigation
    And user selects "Breeding Methods" tab

  @BI-1805
  Scenario Outline: Breeding Methods Management
    When user can see Program Management header in Program Management page
    Then user can see 'Breeding Methods' tab in Program Management page
    Then user can see 'Create Breeding Method' button in Breeding Method Management page
    When user clicks 'Create Breeding Method' button in Breeding Method Management page
    Then user can see new Breeding Method form
    When user sets "<name>" in 'Name' field in Breeding Method form
    And user sets "<description>" in 'Description' field in Breeding Method form
    And user sets "<abbreviation>" in 'Abbreviation' field in Breeding Method form
    When user selects "Ploidy" in 'Category' dropdown in Breeding Method form
    When user selects "Generative (+)" in 'Genetic Diversity' dropdown in Breeding Method form
    And user clicks 'Save' button in Breeding Method form
    And user pause for "2" seconds
    Then user can see banner contains "Breeding method created successfully"
    When user clicks 'Show All' button in Breeding Method Management page
    And user pause for "2" seconds
    Then user can see 'Delete' action on "<name>" Breeding Method
    Then user can see 'Edit' action on "<name>" Breeding Method
    When user clicks 'Edit' action on "<name>" Breeding Method
    Then user cannot see "Breeding method is in use. Deletion disabled." message
    And user selects "Import Data" in navigation
    And user uploads Germplasm "BreedingMethodGermplasm.csv" file
    And user selects 'Import' button
    When user sets "BreedingMethodGermplasm" in List Name field of import page
    When user sets "BreedingMethodGermplasm" in List Description field of import page
    And user selects "Confirm" button
    And user pause for "10" seconds
    Then user can see banner contains "Imported germplasm records have been added to Snacks."
    When user selects "Program Administration" in navigation
    And user selects "Breeding Methods" tab
    And user clicks 'Show All' button in Breeding Method Management page
    And user pause for "2" seconds
    Then user cannot see 'Delete' action on "<name>" Breeding Method
    Then user can see 'Edit' action on "<name>" Breeding Method
    When user clicks 'Edit' action on "<name>" Breeding Method
    Then user can see "Breeding method is in use. Deletion disabled." message

    Examples: 
      | name     | abbreviation | description |
      | AAA Test | AAA          | Testing     |
