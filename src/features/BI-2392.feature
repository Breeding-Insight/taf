Feature: Read Only with non System Admin roles cannot see a delete button next to each collaborator   

  Background:
    Given a new program is created

  @BI-2392
  @debug
  Scenario Outline: Read Only with non System Admin roles cannot see a delete button next to each collaborator   
    Given user logs in as "Cucumber Breeder"
    When user selects "*" on program-selection page
    And user selects "Program Administration" in top-level navigation
    And user selects New User button
    And user sets "test user" in Name field of User 
    And user sets "test@mailinator.com" in Email field of User
    And user selects "Experimental Collaborator" in Role dropdown
    And user selects Save button
    And user pause for "5" seconds
    And user selects "Germplasm" in top-level navigation
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
    When user selects "Confirm" button
    And user pause for "5" seconds
    And user selects "Experiments & Observations" in top-level navigation
    And user selects "New Trial DRP1" of row "1" of Experiments page
    And user selects "Manage Experiment" button
    And user selects "Add Collaborator" link
    And user selects "Save" button
    And user logs out
    Given user logs in as "Cucumber Member"
    When user selects "*" on program-selection page
    And user selects "Experiments & Observations" in top-level navigation
    And user selects "New Trial DRP1" of row "1" of Experiments page
    And user can see "test user(test@mailinator.com)" as Collaborator
    And user can not see "test user(test@mailinator.com)" delete button of Collaborator