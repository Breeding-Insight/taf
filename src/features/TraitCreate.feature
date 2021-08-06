Feature: Trait Create

    Background: Trait Create
        Given user logs in as "Cucumber Breeder"
        When user selects "Snacks" on program-selection page
        When user selects "Traits" in navigation
        When user selects "Trait List" in navigation

    @BI-988
    @BI-987
    Scenario: Switching scale class from nominal to ordinal - form behavior
        When user selects 'New Trait' button on traits list page
        When user selects "Nominal" in scale dropdown on traits list page
        When user sets "<first scale category>" in first scale field on traits list page
        When user sets "<second scale category>" in second scale field on traits list page
        When user sets "<third scale category>" in third scale field on traits list page
        When user selects "Ordinal" in scale dropdown on traits list page
        Then user can see "1" in the first Ordinal field on traits list page
        Then user can see "<first scale category>" in first Scale field on traits list page
        Then user can see "2" in the second Ordinal field on traits list page
        Then user can see "<second scale category>" in second Scale field on traits list page
        Then user can see "3" in the third Ordinal field on traits list page
        Then user can see "<third scale category>" in third Scale field on traits list page

    @BI-991
    @BI-987
    Scenario: Switching scale class from ordinal to nominal - form behavior
        When user selects 'New Trait' button on traits list page
        When user selects "Ordinal" in scale dropdown on traits list page
        When user sets "<first scale category>" in first scale field on traits list page
        When user sets "<second scale category>" in second scale field on traits list page
        When user sets "<third scale category>" in third scale field on traits list page
        When user selects "Nominal" in scale dropdown on traits list page
        Then user can see "<first scale category>" in first Scale field on traits list page
        Then user can see "<second scale category>" in second Scale field on traits list page
        Then user can see "<third scale category>" in third Scale field on traits list page

    @BI-992
    @BI-987
    Scenario: Switching scale class from ordinal to nominal and back to ordinal - form behavior
        When user selects 'New Trait' button on traits list page
        When user selects "Ordinal" in scale dropdown on traits list page
        When user sets "<first scale category>" in first scale field on traits list page
        When user selects 'x' button for second scale category
        When user selects 'Yes, remove' button in modal box
        When user sets "<third scale category>" in third scale field on traits list page
        When user sets "<fifth scale category>" in fifth scale field on traits list page
        When user selects "Nominal" in scale dropdown on traits list page
        When user selects "Ordinal" in scale dropdown on traits list page
        Then user can see "1" in the first Ordinal field on traits list page
        Then user can see "<first scale category>" in first Scale field on traits list page
        Then user can see "3" in the third Ordinal field on traits list page
        Then user can see "<third scale category>" in third Scale field on traits list page
        Then user can see "5" in the fifth Ordinal field on traits list page
        Then user can see "<fifth scale category>" in fifth Scale field on traits list page


