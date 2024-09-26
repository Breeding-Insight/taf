Feature: Popup window for germplasm download

    @BI-2001 @BI-2002 @debug
    Scenario: Popup window for germplasm download
        Given user logs in as "Cucumber Breeder"
        When user selects "Snacks" on program-selection page
        When user selects "Import Data" in navigation
        When user selects "Germplasm" tab
        Then user can see Import file extension supported are ".csv, .xls, .xlsx"
        When user selects "Ontology" tab
        Then user can see Import file extension supported are ".csv, .xls, .xlsx"
        When user selects "Experiments & Observations" tab
        Then user can see Import file extension supported are ".csv, .xls, .xlsx"
        When user selects "Genotypic Data" tab
        Then user can see Import file extension supported are ".vcf"
        When user selects "Genotype Samples" tab
        Then user can see Import file extension supported are ".csv, .xls, .xlsx"

        