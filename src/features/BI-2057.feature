	Feature: Sample Tracking

@debug
@BI-2057
    Scenario: Sample Tracking
    Given user logs in as "Cucumber Breeder"
	When user selects "Snacks" on program-selection page
    When user selects "Sample Management" in navigation
    Then user can see Sample Management page
    Then user can see "Project Name" column header
    Then user can see "Created Date" column header
    Then user can see "Created By" column header
    Then user can see "Submission Status" column header
    Then user can see "Submitted Date" column header
    Then user can see "Vendor Order ID" column header
    Then user can see "Vendor Status" column header