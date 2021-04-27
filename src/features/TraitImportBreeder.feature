Feature: Trait Import (10 Scenarios)

        Background: Setup
            Given user logs in as breeder
             When user selects "Snacks" on program-selection page
              # And user selects "Traits" in navigation

        @debug
        Scenario: Import Traits page
              And user selects "Traits" in navigation
              And user selects "Import Traits" in navigation
             Then user can header "Import Traits"
              And user can see a message 'Before You Import...'
              And user can see a message 'Prepare trait information for import using the provided template.'
              And user can see a button 'Download the Trait Import Template'
              And user can see a button 'Choose a file...'


