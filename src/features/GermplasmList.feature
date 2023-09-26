Feature: Germplasm List View

    Background: Setup
        Given a new program is created

    @debug
    Scenario: Germplasm List View
        Given user logs in as "Cucumber Breeder"
        When user selects "*" on program-selection page
        When user imports "Germplasm77_2022-07-12.xlsx" file "15" times in Germplasm
        When user selects "Germplasm" in navigation
        And user selects "Lists" tab on Gerplasm page
        And user pause for "5" seconds
        When user selects "10" in Results per page combobox
        Then user can see row "10" rows in a table
        And user can see Next page button
        When user selects Next page button
        Then user can see row "5" rows in a table
        When user selects Previous page button
        Then user can see row "10" rows in a table
        When user selects Show All button
        Then user can see row "15" rows in a table
        Then user can see Germplasm Lists table on Germplasm page
        When user gets row "1" from column "Name" on Germplasm lists page
        When user gets row "1" from column "Description" on Germplasm lists page
        When user selects "Details" of row "1" of Germplasm Lists page
        Then user can see "Cucumber Breeder" as "User" of Germplasm Lists Details page



