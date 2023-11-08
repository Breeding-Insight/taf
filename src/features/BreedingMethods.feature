Feature: Breeding Methods

  @BI-1805
  Scenario Outline: Breeding Methods Management
    Given user logs in as "sysad"
    And user selects "System Administration" on program-selection page
    When user is on the program-management page
    #Create a new program
    When user selects 'New Program' button in Programs page
    When user sets "P*" in Program Name field in Programs page
    When user selects "Potato" in Species dropdown in Programs page
    When user sets "A*" in Program Key field in Programs page
    When user selects 'Save' button in Programs page
    When user pause for "10" seconds
    When user navigates to Program Selection page
    When user selects "P*" on program-selection page
    When user selects "Program Administration" in navigation
    When user selects "Users" tab
    When user clicks 'New User' button
    When user sets "Christian" in Name field of User
    When user sets "christian@mailinator.com" in Email field of User
    When user sets "breeder" in Role dropdown of User
    When user click 'Save' button in User
    And user pause for "5" seconds
    And user selects "Breeding Methods" tab
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
    Then user can see banner contains "Imported germplasm records have been added to"
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
      | ZZZ Test | ZZZ          | Testing     |

  @BI-1786
  Scenario Outline: Scenario Outline name: Choose/create breeding methods
    Given user logs in as "sysad"
    And user selects "System Administration" on program-selection page
    When user is on the program-management page
    #Create a new program
    When user selects 'New Program' button in Programs page
    When user sets "<Program Name>" in Program Name field in Programs page
    When user selects "Potato" in Species dropdown in Programs page
    When user sets "A*" in Program Key field in Programs page
    When user selects 'Save' button in Programs page
    When user pause for "10" seconds
    When user navigates to Program Selection page
    When user selects "<Program Name>" on program-selection page
    When user selects "Program Administration" in navigation
    When user selects "Users" tab
    When user clicks 'New User' button
    When user sets "Breeder" in Name field of User
    When user sets "cucumberbreeder@mailinator.com" in Email field of User
    When user sets "breeder" in Role dropdown of User
    When user click 'Save' button in User
    And user pause for "5" seconds
    When user clicks 'New User' button
    When user sets "Breeder" in Name field of User
    When user sets "cucumbermember@mailinator.com" in Email field of User
    When user sets "member" in Role dropdown of User
    When user click 'Save' button in User
    And user pause for "5" seconds
    When user close the Notification
    When user selects "Program Administration" in navigation
    Then user logs out
    #Login as Breeder
    Given user logs in as "Cucumber Breeder"
    When user selects "<Program Name>" on program-selection page
    When user selects "Program Administration" in navigation
    When user selects "Breeding Methods" tab
    When user clicks 'Create Breeding Method' button in Breeding Method Management page
    When user sets "<name>" in 'Name' field in Breeding Method form
    And user sets "<description>" in 'Description' field in Breeding Method form
    And user sets "<abbreviation>" in 'Abbreviation' field in Breeding Method form
    When user selects "Ploidy" in 'Category' dropdown in Breeding Method form
    When user selects "Generative (+)" in 'Genetic Diversity' dropdown in Breeding Method form
    And user clicks 'Save' button in Breeding Method form
    And user pause for "2" seconds
    When user clicks Show All button
    When user close the Notification
    Then user can see "<name>" in Name column in Breeding Method page
    Then user logs out
    #Login as Member
    Given user logs in as "Cucumber Member"
    When user selects "<Program Name>" on program-selection page
    When user selects "Program Administration" in navigation
    When user selects "Breeding Methods" tab
    Then user can not see 'Create Breeding Method' button in Breeding Method Management page

    Examples:
      | Program Name | name | abbreviation | description |
      | P*           | M*   | Z*           | Testing     |
