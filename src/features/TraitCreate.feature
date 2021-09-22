Feature: Trait Create
#  BI-987 Trait Create - Scale Class Nominal & Ordinal

    Background: Trait Create
        Given user logs in as "Cucumber Breeder"
        And user selects "Snacks" on program-selection page
        And user selects "Ontology" in top-level navigation
        And user selects "Ontology List" in sub-level navigation

    @BI-988
    Scenario: Switching scale class from nominal to ordinal - form behavior
        When user selects 'New Term' button on ontology list page
        And user selects "Nominal" in scale dropdown on ontology list page
        And user sets "<first scale category>" in first scale field on ontology list page
        And user sets "<second scale category>" in second scale field on ontology list page
        And user sets "<third scale category>" in third scale field on ontology list page
        And user selects "Ordinal" in scale dropdown on ontology list page
        Then user can see "1" in the first Ordinal field on ontology list page
        And user can see "<first scale category>" in first Scale field on ontology list page
        And user can see "2" in the second Ordinal field on ontology list page
        And user can see "<second scale category>" in second Scale field on ontology list page
        And user can see "3" in the third Ordinal field on ontology list page
        And user can see "<third scale category>" in third Scale field on ontology list page

    @BI-991
    Scenario: Select scale class ordinal
        When user selects 'New Term' button on ontology list page
        And user selects "Ordinal" in scale dropdown on ontology list page
        Then user can see "1" in the first Ordinal field on ontology list page
        And user can see "2" in the second Ordinal field on ontology list page
        And user can see "3" in the third Ordinal field on ontology list page

    @BI-991
    Scenario: Switching scale class from ordinal to nominal - form behavior
        When user selects 'New Term' button on ontology list page
        And user selects "Ordinal" in scale dropdown on ontology list page
        And user sets "<first scale category>" in first scale field on ontology list page
        And user sets "<second scale category>" in second scale field on ontology list page
        And user sets "<third scale category>" in third scale field on ontology list page
        And user selects "Nominal" in scale dropdown on ontology list page
        Then user can not see the first "ordinal label" on ontology list page
        And user can see "<first scale category>" in first Scale field on ontology list page
        And user can not see the second "ordinal label" on ontology list page
        And user can see "<second scale category>" in second Scale field on ontology list page
        And user can not see the third "ordinal label" on ontology list page
        And user can see "<third scale category>" in third Scale field on ontology list page

    @BI-992
    Scenario: Switching scale class from ordinal to nominal and back to ordinal - form behavior
        When user selects 'New Term' button on ontology list page
        And user selects "Ordinal" in scale dropdown on ontology list page
        And user sets "<first scale category>" in first scale field on ontology list page
        And user selects 'x' button for second scale category
        And user selects 'Yes, remove' button in modal box
        And user sets "<third scale category>" in second scale field on ontology list page
        And user selects 'x' button for third scale category
        And user selects 'Yes, remove' button in modal box
        And user sets "<fifth scale category>" in third scale field on ontology list page
        And user selects "Nominal" in scale dropdown on ontology list page
        And user selects "Ordinal" in scale dropdown on ontology list page
        Then user can see "1" in the first Ordinal field on ontology list page
        And user can see "<first scale category>" in first Scale field on ontology list page
        And user can see "3" in the second Ordinal field on ontology list page
        And user can see "<third scale category>" in second Scale field on ontology list page
        And user can see "5" in the third Ordinal field on ontology list page
        And user can see "<fifth scale category>" in third Scale field on ontology list page

    @BI-993
    Scenario: Switching scale class from nominal to ordinal and back to nominal - form behavior
        When user selects 'New Term' button on ontology list page
        And user selects "Nominal" in scale dropdown on ontology list page
        And user sets "<first scale category>" in first scale field on ontology list page
        And user sets "<second scale category>" in second scale field on ontology list page
        And user sets "<third scale category>" in third scale field on ontology list page
        And user selects "Ordinal" in scale dropdown on ontology list page
        And user selects "Nominal" in scale dropdown on ontology list page
        Then user can not see the first "ordinal label" on ontology list page
        And user can see "<first scale category>" in first Scale field on ontology list page
        And user can not see the second "ordinal label" on ontology list page
        And user can see "<second scale category>" in second Scale field on ontology list page
        And user can not see the third "ordinal label" on ontology list page
        And user can see "<third scale category>" in third Scale field on ontology list page

