Feature: Ontology Term Create - General Behavior

    Background: Required Setup
        Given user logs in as "Cucumber Breeder"
        When user selects "Snacks" on program-selection page
        And user selects "Ontology" in navigation

    @BI-938
    Scenario: Ontology Term Create - New Ontology form elements
        Given user selects "New Term" button
        Then user can see 'Ontology Term Name' field on ontology list page
        Then user can see 'Full Name' field on ontology list page
        Then user can see 'Description' field on ontology list page
        Then user can see 'Entity' field on ontology list page
        Then user can see 'Attribute' field on ontology list page
        Then user can see 'Description' field on ontology list page
        Then user can see 'Method Class' dropdown on ontology list page
        Then user can see 'Scale Class' dropdown on ontology list page
        Then user can see 'Tags' field on ontology list page
        Then user can see 'Save' button on ontology list page
        Then user can see 'Cancel' button on ontology list page

    @BI-939
    # a record needs to be previously inserted into bidb program_observation_level, for program Snacks where program_observation_level[name] = "testEntity"
    Scenario: Ontology Term Create - Trait entity auto-complete behavior, already in db
        Given user selects "New Term" button
        When user sets "p" in 'Entity' field on ontology list page
        Then user can see "Package" as suggested text in 'Entity' field on ontology list page

    @BI-944
    Scenario: Ontology Term Create - Trait entity auto-complete behavior, not already in db
        Given user selects "New Term" button
        When user sets "<ont_term_name>" in 'Name' field on ontology list page
        When user sets "<trait_description>" in 'Full Name' field on ontology list page
        When user sets "<trait_description>" in 'Description' field on ontology list page
        When user sets "<new_entity>" in 'Entity' field on ontology list page
        When user sets "<trait_attribute>" in 'Attribute' field on ontology list page
        When user sets "<method_description>" in 'Method Description' field on ontology list page
        When user selects "Observation" in 'Method Class' dropdown on ontology list page
        When user selects "Date" in 'Scale Class' dropdown on ontology list page
        When user selects 'Save' button on ontology list page
        When user selects 'New Term' button on ontology list page
        When user sets "*" in 'Entity' field on ontology list page
        Then user can see "*" as suggested text in 'Entity' field on ontology list page

        Examples:
            | ont_term_name | trait_description | new_entity  | trait_attribute | method_description |
            | *             | TestTraitDesc *   | NewEntity * | TestAttribute * | TestMethDesc *     |

    # @BI-945
    # Scenario: Trait Create - Multiple Abbreviations and Multiple Synonyms
    # this one's going to take some time to figure out how it's supposed to work for v0.4...

    @BI-946
    Scenario: Ontology Term Create - Required Fields
        When user selects 'New Term' button on ontology list page
        When user selects 'Save' button on ontology list page
        Then user can see "Missing observation variable name" below the 'Name' field on ontology list page
        Then user can see "Missing trait description" below the 'Description' field on ontology list page
        Then user can see "Missing trait entity" below the 'Entity' field on ontology list page
        Then user can see "Missing trait attribute" below the 'Attribute' field on ontology list page
        Then user can see "Missing method class" below the 'Method Class' dropdown on ontology list page
        Then user can see "Missing scale data type" below the 'Scale Class' dropdown on ontology list page
        Then user can not see "Missing method description" below the 'Method Description' field on ontology list page
        Then user can see banner appears with an error message "Error creating trait. Missing method class; Missing scale data type; Missing observation variable name; Missing trait entity; Missing trait attribute; Missing trait description;"
        Then user can see banner appears without an error message "Missing program observation level;"

    @BI-947
    Scenario: Ontology Term Create - Enter Values, Cancel
        Given user selects 'New Term' button on ontology list page
        Given user sets "<ont_term_name>" in 'Name' field on ontology list page
        And user sets "<trait_description>" in 'Full Name' field on ontology list page
        And user sets "<trait_entity>" in 'Entity' field on ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field on ontology list page
        And user sets "<method_description>" in 'Method Description' field on ontology list page
        And user selects "Observation" in 'Method Class' dropdown on ontology list page
        And user selects "Date" in 'Scale Class' dropdown on ontology list page
        When user selects 'Cancel' button on ontology list page
        When user clicks Show All button
        Then user can not see "<ont_term_name>" in 'Name' column on ontology list page

        Examples:
            | ont_term_name | trait_description | trait_entity      | trait_attribute | method_description |
            | *             | TestTraitDesc *   | TestTraitEntity * | TestAttribute * | TestMethDesc *     |

    @BI-948
    Scenario: Ontology Term Create - Enter Values, Save
        Given user selects 'New Term' button on ontology list page
        Given user sets "<ont_term_name>" in 'Name' field on ontology list page
        And user sets "<trait_description>" in 'Description' field on ontology list page
        And user sets "<trait_entity>" in 'Entity' field on ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field on ontology list page
        And user sets "<method_description>" in 'Method Description' field on ontology list page
        And user selects "Observation" in 'Method Class' dropdown on ontology list page
        And user selects "Date" in 'Scale Class' dropdown on ontology list page
        And user selects 'Save' button on ontology list page
        When user clicks Show All button
        Then user can see "<ont_term_name>" in 'Name' column on ontology list page
        Then user can see "<trait_description>" in 'Trait' column on ontology list page
        Then user can see "<method_description> Observation" in 'Method' column on ontology list page
        Then user can see "Date" in 'Scale Class' column on ontology list page

        Examples:
            | ont_term_name | trait_description | trait_entity      | trait_attribute | method_description |
            | *             | Testtraitdesc *   | TestTraitEntity * | TestAttribute * | TestMethDesc *     |

    @BI-1312
    Scenario: Ontology Term Create - Name & Method Description - Character Limits
        Given user selects 'New Term' button on ontology list page
        When user sets as is "ThisNameWithMoreThanTwelveCharacters" in 'Name' field on ontology list page
        When user sets "ThisDescriptionContainsMoreThanThirtyCharacters" in 'Method Description' field on ontology list page
        When user selects 'Save' button on ontology list page
        Then user can see "Name must be less than 12 characters." below the 'Name' field on ontology list page
        Then user can see "Description must be less than 30 characters." below the 'Method Description' field on ontology list page
        Then user can see banner appears with an error message "Fix Invalid Fields"