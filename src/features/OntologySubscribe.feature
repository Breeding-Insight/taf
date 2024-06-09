Feature: Ontology Subscribe
    Background: Setup
        Given a new program is created

    @BI-1789
    Scenario: Add program name to subscribe ontology success message
        #Login as Cucumber Breeder and go to Snacks and share ontlogy with new program
        When user logs in as "Cucumber Breeder"
        When user selects "Snacks" on program-selection page
        When user selects "Program Administration" in navigation
        When user selects "Configuration" tab on Program Management page
        When user selects Share Ontology button of Shared Ontology on Program Management page
        When user selects "*" checkbox in Managed Shared Ontlogy page
        When user selects "Save" button in Managed Shared Ontlogy page
        When user selects "Program Administration" in navigation
        When user selects "Configuration" tab on Program Management page
        When user selects Share Ontology button of Shared Ontology on Program Management page
        When user selects "Save" button in Managed Shared Ontlogy page
        #Switch to new program and subscribe to Snacks
        When user navigates to Program Selection page
        When user selects "*" on program-selection page
        When user selects "Program Administration" in navigation
        When user selects "Configuration" tab on Program Management page
        When user selects "Snacks" in Choose ontology to subscribe to dropdown on Program Management page
        When user selects Save button of Subscribe to Shared Ontology on Program Management page
        Then user can see banner contains "Successfully subscribed to Snacks"

