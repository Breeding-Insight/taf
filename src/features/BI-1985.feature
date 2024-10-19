Feature: Experiments can be uploaded without trait name capitalization

    @BI-1985
    @debug
    Scenario: Experiments can be uploaded without trait name capitalization
        Given a new program is created
        Given user logs in as "Cucumber Breeder"
        When user selects "*" on program-selection page
      	And user selects "Import Data" in top-level navigation
		And user uploads Germplasm "Germplasm77_2022-07-12.xlsx" file
		And user selects 'Import' button
		When user sets "Germplasm*" in List Name field of import page
		When user sets "Germplasm* Description" in List Description field of import page
		And user selects "Confirm" button
		And user pause for "10" seconds
		And user selects "Germplasm" in top-level navigation
        Then user can see GID as descending sort
        When user selects "Experiments & Observations" in top-level navigation
        When user selects "Import Experiments & Observations" button
        And user uploads Experiments & Observations "EXP.csv" file
        When user selects 'Import' button
        And user selects "Confirm" button
        When user pause for "10" seconds

        Examples:
            | term_type           | ont_term_name | trait_description | trait_entity | trait_attribute | method_description | ordinal_value | first scale category | second scale category |
            | germplasm attribute | term*         | description*      | trait*       | traitattribute* | methoddescription* | ordinalvalue* | first*               | second*               |
