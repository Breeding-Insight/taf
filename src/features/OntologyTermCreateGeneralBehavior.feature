Feature: Ontology Term Create - General Behavior

    Background: Required Setup
        Given user logs in as "Cucumber Breeder"
        When user selects "Snacks" on program-selection page
        And user selects "Ontology" in navigation

    @BI-938
    Scenario: Ontology Term Create - New Ontology form elements
        Given user selects "New Term" button
        Then user can see 'Ontology Term Name' field on ontology list page
        Then user can see 'Term Type' dropdown on ontology list page
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
        When user selects "<term_type>" in 'Term Type' dropdown on ontology list page
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
            | term_type          | ont_term_name | trait_description | new_entity  | trait_attribute | method_description |
            | germplasm passport | *             | TestTraitDesc *   | NewEntity * | TestAttribute * | TestMethDesc *     |

    @BI-945
    Scenario: Ontology Term Create - Synonyms
        Given user selects "New Term" button
        When user sets "Test1" in 'Name' field on ontology list page
        When user sets "FullName1" in 'Full Name' field on ontology list page
        Then user can see "Test1, FullName1" in Synonyms text on ontology list page

    @BI-1518
    @BUG-BI-2417
    Scenario: Ontology Term Create - Required Fields
        When user selects 'New Term' button on ontology list page
        When user selects 'Save' button on ontology list page
        Then user can see "Missing Name" below the 'Name' field on ontology list page
        Then user can see "Missing trait description" below the 'Description' field on ontology list page
        Then user can see "Missing trait entity" below the 'Entity' field on ontology list page
        Then user can see "Missing trait attribute" below the 'Attribute' field on ontology list page
        Then user can see "Missing method class" below the 'Method Class' dropdown on ontology list page
        Then user can see "Missing scale class" below the 'Scale Class' dropdown on ontology list page
        Then user can not see "Missing method description" below the 'Method Description' field on ontology list page
        Then user can see banner appears with an error message "Error creating trait. Missing method class; Missing scale class; Missing Name; Missing trait entity; Missing trait attribute; Missing trait description;"
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
        When user selects Show All button
        Then user can not see "<ont_term_name>" in 'Name' column on ontology list page

        Examples:
            | ont_term_name | trait_description | trait_entity      | trait_attribute | method_description |
            | *             | TestTraitDesc *   | TestTraitEntity * | TestAttribute * | TestMethDesc *     |

    @BI-1444
    Scenario: Ontology Term Create - Enter Values, Save
        Given user selects 'New Term' button on ontology list page
        Given user sets "<ont_term_name>" in 'Name' field on ontology list page
        And user selects "<term_type>" in 'Term Type' dropdown on ontology list page
        And user sets "<trait_description>" in 'Description' field on ontology list page
        And user sets "<trait_entity>" in 'Entity' field on ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field on ontology list page
        And user sets "<method_description>" in 'Method Description' field on ontology list page
        And user selects "Observation" in 'Method Class' dropdown on ontology list page
        And user selects "Date" in 'Scale Class' dropdown on ontology list page
        And user selects 'Save' button on ontology list page
        When user pause for "10" seconds
        When user selects Show All button
        Then user can see "<ont_term_name>" in 'Name' column on ontology list page
        Then user can see "<trait_entity> <trait_attribute>" in 'Trait' column on ontology list page
        Then user can see "<method_description> Observation" in 'Method' column on ontology list page
        Then user can see "Date" in 'Scale Class' column on ontology list page

        Examples:
            | term_type          | ont_term_name | trait_description | trait_entity      | trait_attribute | method_description |
            | germplasm passport | *             | Testtraitdesc *   | TestTraitEntity * | TestAttribute * | TestMethDesc *     |

    @BI-1310
    Scenario: Ontology Term Create - Trait = Entity + Attribute
        Given user selects "New Term" button
        When user sets "Entity1" in 'Entity' field on ontology list page
        When user sets "Attribute1" in 'Attribute' field on ontology list page
        Then user can see "Entity1 Attribute1" in Trait text on ontology list page

    @BI-1311
    Scenario: Ontology Term Create - Method = Description + Class
        Given user selects "New Term" button
        When user sets "Method1" in 'Method Description' field on ontology list page
        When user selects "Observation" in 'Method Class' dropdown on ontology list page
        Then user can see "Method1 Observation" in 'Method' text on ontology list page

    @BI-1312
    Scenario: Ontology Term Create - Name & Method Description - Character Limits
        Given user selects 'New Term' button on ontology list page
        When user sets as is "ThisNameWithMoreThanSixteenCharacters" in 'Name' field on ontology list page
        When user sets "ThisDescription" in 'Method Description' field on ontology list page
        When user selects 'Save' button on ontology list page
        Then user can see "Name must be less than 16 characters." below the 'Name' field on ontology list page
        When user sets as is "ThisNameWith" in 'Name' field on ontology list page
        When user sets "ThisDescriptionIsMoreThanThirtyCharacters" in 'Method Description' field on ontology list page
        When user selects 'Save' button on ontology list page
        Then user can see "Description must be less than 30 characters." below the 'Method Description' field on ontology list page
        Then user can see banner appears with an error message "Fix Invalid Fields"

    @BI-1698
    Scenario: Ontology term types
        Given user selects 'New Term' button on ontology list page
        Then user can see 'Term Type' dropdown on ontology list page
        Then user can see "Phenotype" as option of Term Type dropdown on ontology list page
        Then user can see "Germplasm Attribute" as option of Term Type dropdown on ontology list page
        Then user can see "Germplasm Passport" as option of Term Type dropdown on ontology list page
        When user selects "Import Data" in navigation
        And user selects "Ontology" tab
        Then user can see header "Import File"
		And user can see a message 'Before You Import...'
		And user can see a message 'Prepare ontology information for import using the provided template.'
		And user can see a button 'Download the Ontology Import Template'
		And user can see a button 'Choose a file...'
        When user uploads "test_import-xls.xls" file
		And user selects 'Import' button
		Then user can see 'Confirm New Ontology Term' header
		And user can see "Confirm" button
		And user can see "Abort" button