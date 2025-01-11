Feature: System Admin permissions

@BI-2388
Scenario: System Admin permissions
    Given a new program is created
    Given user logs in as "sysad"
    When user selects "*" on program-selection page
    When user selects "Program Administration" in top-level navigation
    When user clicks 'New User' button
    When user sets "Christian" in Name field of User
    When user sets "christian@mailinator.com" in Email field of User
    When user sets "Program Administrator" in Role dropdown of User
    When user click 'Save' button in User
    And user pause for "5" seconds
    Then user can see "Program Administration" title
    When user selects "Home" in top-level navigation
    Then user can see "Welcome" title
    When user selects "Germplas" in top-level navigation
    Then user can see "Germplasm" title
    When user selects "Experiments & Observations" in top-level navigation
    Then user can see "Experiments & Observations" title
    When user selects "Ontology" in top-level navigation
    Then user can see "Ontology" title
    When user selects "Import Data" in top-level navigation
    Then user can see "Import File" title
    When user selects "Sample Management" in top-level navigation
    Then user can see "Sample Management" title
    When user selects "Program Administration" in top-level navigation
    Then user can see "Program Administration" title
    When user selects "BrAPI" in top-level navigation
    Then user can see "BrAPI Information" title
    When user selects "Jobs" in top-level navigation
    Then user can see "Jobs" title
    When user selects "Users" in top-level navigation
    Then user can see "Users" title
    When user selects "Programs" in top-level navigation
    Then user can see "Programs" title