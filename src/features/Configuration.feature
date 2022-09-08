
Feature: Configuration

    Background: Required Setup
        Given user logs in as "sysad"
        And user selects "System Administration" on program-selection page

    @BI-1502
    @debug
    Scenario Outline: Configuration as a sub-menu
        When user is on the program-management page
        #Create a new program
        When user selects 'New Program' button in Programs page
        When user sets "<ProgramName>" in Program Name field in Programs page
        When user selects "<Species>" in Species dropdown in Programs page
        When user sets "<Key>" in Program Key field in Programs page
        When user selects 'Save' button in Programs page
        When user pause for "10" seconds
        When user navigates to Program Selection page
        When user selects "<ProgramName>" on program-selection page
        When user selects "Program Management" in navigation
        When user selects "Users" tab
        When user clicks 'New User' button
        When user sets "Cucumber Breeder" in Name field of User
        When user sets "cucumberbreeder@mailinator.com" in Email field of User
        When user sets "breeder" in Role dropdown of User
        When user click 'Save' button in User
        When user pause for "10" seconds
        When user deletes the cache
        #Login as Cucumber Breeder and go to Snacks
        When user logs in as "Cucumber Breeder"
        When user selects "Snacks" on program-selection page
        When user selects "Program Management" in navigation
        Then user can see 'Configuration' tab on Program Management page
        When user selects "Configuration" tab on Program Management page
        Then user can see Configuration on Program Management page
        Then user can see "Shared Ontology" section on Program Management page
        Then user can see "Snacks is not currently sharing their ontology with other programs." message on Program Management page
        When user selects Share Ontology button of Shared Ontology on Program Management page
        When user can see the 'Manage  Share Ontology' in Managed Shared Ontlogy page
        Then user can see "<ProgramName>" checkbox in Managed Shared Ontlogy page
        #Share Snacks to new Program
        When user selects "<ProgramName>" checkbox in Managed Shared Ontlogy page
        When user selects "Save" button in Managed Shared Ontlogy page
        Then user can see "<ProgramName>" is currently shared but not accepted message
        #Go to new Program and check the shared ontology
        When user navigates to Program Selection page
        When user selects "<ProgramName>" on program-selection page
        When user selects "Program Management" in navigation
        Then user can see 'Configuration' tab on Program Management page
        When user selects "Configuration" tab on Program Management page
        Then user can see Configuration on Program Management page
        Then user can see "Shared Ontology" section on Program Management page
        When user selects "Snacks" in Choose ontology to subscribe to dropdown on Program Management page
        When user selects Save button of Subscribe to Shared Ontology on Program Management page
        When user pause for "5" seconds
        Then user can see "Unsubscribe from Snacks ontology" button on Program Management page
        #Go to Snacks and remove the shared ontology
        When user navigates to Program Selection page
        When user selects "Snacks" on program-selection page
        When user selects "Program Management" in navigation
        Then user can see 'Configuration' tab on Program Management page
        When user selects "Configuration" tab on Program Management page
        Then user can see Configuration on Program Management page
        Then user can see "Shared Ontology" section on Program Management page
        Then user can see "<ProgramName>" is currently shared and accepted message
        When user selects Share Ontology button of Shared Ontology on Program Management page
        When user selects "<ProgramName>" checkbox in Managed Shared Ontlogy page
        When user selects "Save" button in Managed Shared Ontlogy page
        Then user can see "Snacks is not currently sharing their ontology with other programs." message on Program Management page
        # Then user can see "Snacks is not currently sharing their ontology with other programs." message on Program Management page
        # When user selects 'Share Ontology' button on Program Management page
        # Then user can see the 'Manage  Share Ontology' modal window display
        # Then user can see "<ProgramName>" checkbox in modal window display
        # When user selects "<ProgramName>" checkbox in modal window display
        # When user selects "Save" button in modal window display


        Examples:
            | ProgramName | Key | Species |
            | P*          | T*  | Grape   |

# When user selects "Snacks" on program-selection page
# When user selects "Program Management" in navigation
#Then user can see 'Configuration' tab on Program Management page
#When user selects "Configuration" tab on Program Management page
#Then user can see Configuration on Program Management page
#Then user can see "Shared Ontology" section on Program Management page
#Then user can see "Snacks is not currently sharing their ontology with other programs." message on Program Management page
#When user selects 'Share Ontology' button on Program Management page
#Then user can see the 'Manage  Share Ontology' modal window display
# Then user can see all programs that are in the same species and point to the same BrAPI server as the given program
# Then user can see checkbox next to each name
# When user clicks on checkbox
# When user select Save
# Then user can see the loading indicator
# Then user navigated back to the Configuration page
# Then user can see shared programs
# When user selects Share Ontology
# Then user can see the modal window display
# Then user can see all programs that are in the same species and point to the same BrAPI server as the given program
# Then user can see checkbox next to each name
# When user unchecks the checkbox
# When user clicks on cancel
# Then user navigated back to the Configuration page