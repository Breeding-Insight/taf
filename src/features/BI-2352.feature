Feature: Read Only permissions

    @debug
    @BI-2352
    Scenario: Read Only permissions
        Given a new program is created
        And user logs in as "Cucumber Member"
        When user selects "*" on program-selection page
        And user selects "Experiments & Observations" in top-level navigation
        Then user can not see "Import Experiments & Observations" button