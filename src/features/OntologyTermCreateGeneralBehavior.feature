Feature: Ontology Term Create - General Behavior

    Background: Required Setup
        Given user logs in as "Cucumber Breeder"
        When user selects "Snacks" on program-selection page
        And user selects "Ontology" in navigation
   
    @BI-938
    # @debug
    Scenario: Ontology Term Create - New Ontology form elements
        Given user selects "New Term" button
        Then user can see 'Ontology Term Name' field in ontology list page
        #And user can see "All unicode characters are accepted."
        Then user can see 'Full Name' field in ontology list page
        Then user can see 'Description' field in ontology list page
        Then user can see 'Synonyms' label in ontology list page
        # Then user can see 'Trait = Entity \+ Attribute' field in ontology list page
        Then user can see 'Entity' field in ontology list page
        Then user can see 'Attribute' field in ontology list page
        Then user can see 'Trait' field in ontology list page
        # Then user can see 'Method = Description + Class' field in ontology list page
        Then user can see 'Description' field in ontology list page
        Then user can see 'Method Class' dropdown in ontology list page
        Then user can see 'Scale' field in ontology list page
        Then user can see 'Scale Class' dropdown in ontology list page
        Then user can see 'Tags' field in ontology list page
        Then user can see 'Save' button in ontology list page
        Then user can see 'Cancel' button in ontology list page

    @BI-939
    # a record needs to be previously inserted into bidb program_observation_level, for program Snacks where program_observation_level[name] = "testEntity"
    Scenario: Ontology Term Create - Trait entity auto-complete behavior, already in db
        Given user selects 'New Term' button in ontology list page
        When user sets "t" in the 'Entity' field in ontology list page
        Then user can see "testEntity" as suggested text in 'Entity' field in ontology list page
        
    @BI-944
    Scenario: Ontology Term Create - Trait entity auto-complete behavior, not already in db
        Given user selects 'New Term' button in ontology list page
        Given user sets "<ont_term_name>" in 'Name' field in ontology list page
        Given user sets "<trait_description>" in 'Full Name' field in ontology list page
        Given user sets "<new_entity>" in 'Entity' field in ontology list page
        Given user sets "<trait_attribute>" in 'Attribute' field in ontology list page
        Given user sets "<method_description>" in 'Method Description' field in ontology list page
        Given user selects "Observation" in 'Method Class' dropdown in ontology list page
        Given user selects "Date" in 'Scale Class' dropdown in ontology list page
        Given user selects "Save" button in ontology list page
        Given user selects 'New Term' button in ontology list page
        When user sets "New" in the 'Entity' field in ontology list page
        Then user can see "newentity" as suggested text in 'Entity' field in ontology list page

		 Examples: 
            | ont_term_name     | trait_description | new_entity  | trait_attribute | method_description |
            | TestOntTermName * | TestTraitDesc *   | NewEntity * | TestAttribute * | TestMethDesc *     |

    # @BI-945 
    # Scenario: Trait Create - Multiple Abbreviations and Multiple Synonyms
    # this one's going to take some time to figure out how it's supposed to work for v0.4...

    @BI-946
    Scenario: Ontology Term Create - Required Fields
        Given user selects 'New Term' button in ontology list page
        When user selects "Save" button
        Then user can see "Missing observation variable name" below the 'Name' field in ontology list page
        Then user can see "Missing trait description" below the 'Ontology Term Description' field in ontology list page
        Then user can see "Missing trait entity" below the 'Entity' field in ontology list page
        Then user can see "Missing trait attribute" below the 'Attribute' field in ontology list page
        Then user can see "Missing method description" below the 'Method Description' field in ontology list page
        Then user can see "Missing method class" below the 'Method Class' dropdown in ontology list page
        Then user can see "Missing scale data type" below the 'Scale Class' dropdown in ontology list page
        Then user can see banner appears with an error message "Error creating trait. Missing method description; Missing method class; Missing scale data type; Missing observation variable name; Missing trait entity; Missing trait attribute; Missing trait description;"

    @BI-947
    Scenario: Ontology Term Create - Enter Values, Cancel
        Given user selects 'New Term' button in ontology list page
        Given user sets "<ont_term_name>" in 'Name' field in ontology list page
        And user sets "<trait_description>" in 'Full Name' field in ontology list page
        And user sets "<trait_entity>" in 'Entity' field in ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field in ontology list page
        And user sets "<method_description>" in 'Method Description' field in ontology list page
        And user selects "Observation" in 'Method Class' dropdown in ontology list page
        And user selects "Date" in 'Scale Class' dropdown in ontology list page
        And user selects "Cancel" button in ontology list page
        Then user can not see "<ont_term_name>" in 'Name' column in ontology list page

		Examples: 
            | ont_term_name     | trait_description | trait_entity      | trait_attribute | method_description |
            | TestOntTermName * | TestTraitDesc *   | TestTraitEntity * | TestAttribute * | TestMethDesc *     |

    @BI-948
    Scenario: Ontology Term Create - Enter Values, Save
        Given user selects 'New Term' button in ontology list page
        Given user sets "<ont_term_name>" in 'Name' field in ontology list page
        And user sets "<trait_description>" in 'Full Name' field in ontology list page
        And user sets "<trait_entity>" in 'Entity' field in ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field in ontology list page
        And user sets "<method_description>" in 'Method Description' field in ontology list page
        And user selects "Observation" in 'Method Class' dropdown in ontology list page
        And user selects "Date" in 'Scale Class' dropdown in ontology list page
        And user selects 'Save' button in ontology list page
        Then user can see "<ont_term_name>" in 'Name' column in ontology list page
        Then user can see "<trait_description>" in 'Trait' column in ontology list page
        Then user can see "<method_description> + 'Observation'" in 'Method' column in ontology list page
        Then user can see "Date" in 'Scale Class' column in ontology list page

		Examples: 
            | ont_term_name     | trait_description | trait_entity      | trait_attribute | method_description |
            | TestOntTermName * | TestTraitDesc *   | TestTraitEntity * | TestAttribute * | TestMethDesc *     |
