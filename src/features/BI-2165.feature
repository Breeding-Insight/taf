Feature: Sorting by most recent first, hereafter referred to as geologic sort for germplasm, experiments, and sample submission

Background: Setup
        Given a new program is created

    @BI-2165
        Scenario: Sorting by most recent first, hereafter referred to as geologic sort for germplasm, experiments, and sample submission
        When user logs in as "Cucumber Breeder"
        When user selects "*" on program-selection page
      	And user selects "Import Data" in navigation
		And user uploads Germplasm "Germplasm77_2022-07-12.xlsx" file
		And user selects 'Import' button
		When user sets "Germplasm*" in List Name field of import page
		When user sets "Germplasm* Description" in List Description field of import page
		And user selects "Confirm" button
		And user pause for "10" seconds
		And user selects "Germplasm" in navigation
        Then user can see GID as descending sort
        When user selects "Experiments & Observations" in navigation
        When user selects "Import Experiments & Observations" button
        And user uploads Experiments & Observations "EXP.csv" file
        When user selects 'Import' button
        And user selects "Confirm" button
        When user pause for "10" seconds
        When user selects "Experiments & Observations" in navigation
        Then user can see Date Created as descending sort
        When user selects "Sample Management" in navigation
        When user selects "Import Sample Submission" button
        And user uploads Genotype Sample "bi_sample_submission_v01.xls" file
        When user selects 'Import' button
        And user sets "Genotype Sample" in Project Name field of import page
        And user selects "Confirm" button
        When user pause for "10" seconds
        When user selects "Sample Management" in navigation
        Then user can see Created Date as descending sort