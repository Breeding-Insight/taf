Feature: Program Admin/Breeder permissions

@debug
@BI-2387
Scenario: Program Admin/Breeder permissions
    Given a new program is created
    Given user logs in as "Cucumber Breeder"
    When user selects "*" on program-selection page
    When user selects "Program Administration" in top-level navigation
    Then user can see "Program Administration" title
    When user selects "Home" in top-level navigation
    Then user can see "Welcome" title
    When user selects "Germplasm" in top-level navigation
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