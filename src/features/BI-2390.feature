Feature: Program Administrator can see a delete button next to each collaborator

  Background:
    Given a new program is created

@debug
  @BI-2390
  Scenario Outline: Program Administrator can see a delete button next to each collaborator
    Given user logs in as "Cucumber Breeder"
    When user selects "*" on program-selection page
    And user selects "Program Administration" in top-level navigation
    And user selects New User button
    And user sets "Experimental Collaborator1" in Name field of User 
    And user sets "experimentcollaborator1@mailinator.com" in Email field of User
    And user selects "Experimental Collaborator" in Role dropdown
    And user selects Save button
    And user pause for "5" seconds
     And user selects New User button
    And user sets "Experimental Collaborator2" in Name field of User 
    And user sets "experimentcollaborator2@mailinator.com" in Email field of User
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
    And user pause for "2" seconds
    And user selects "Manage Experiment" button
    And user selects "Add Collaborator" link
    And user selects "Save" button
    And user pause for "2" seconds
    And user can see "Experimental Collaborator1(experimentcollaborator1@mailinator.com)" as Collaborator
    And user can see "Experimental Collaborator2(experimentcollaborator2@mailinator.com)" as Collaborator
    And user can see "Experimental Collaborator1(experimentcollaborator1@mailinator.com)" delete button of Collaborator
    And user can see "Experimental Collaborator2(experimentcollaborator2@mailinator.com)" delete button of Collaborator