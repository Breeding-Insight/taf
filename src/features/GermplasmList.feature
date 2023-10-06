Feature: Germplasm List View

    Background: Setup
        Given a new program is created

    @BI-1788
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
        Then user can see "*" as "Description" of Germplasm Lists Details page
        Then user can see "Cucumber Breeder" as "User" of Germplasm Lists Details page
        Then user can see "10" as "Total Entries" of Germplasm Lists Details page
        Then user can see "@TODAY" as "Import Date" of Germplasm Lists Details page

    @debug
    @BI-1787
    Scenario: Genotype data store and fetch
        Given user logs in as "Cucumber Breeder"
        When user selects "*" on program-selection page
        When user selects "Import Data" in top-level navigation
        
        Then user can see "Genotypic Data" tab in Import Data page



