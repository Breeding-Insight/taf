Feature: Experimental Collaborator UX

@BI-2351
Scenario: Experimental Collaborator UX
    Given a new program is created
    Given user logs in as "Cucumber Breeder"
    When user selects "*" on program-selection page
    When user selects "Program Administration" in top-level navigation
    When user selects 'Edit' of "cucumbermember@mailinator.com" of Users
    When user selects "Experimental Collaborator" in Role dropdown
    When user selects Save button
    When user logs out
    When user logs in as "Cucumber Member"
    When user selects "*" on program-selection page
    Then user can see "Home, Experiments & Observations, BrAPI" in top-level navigation