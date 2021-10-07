Feature: Ontology Term Create - General Behavior

    Background: Required Setup
        Given user logs in as "Cucumber Breeder"
        When user selects "Snacks" on program-selection page
        And user selects "Ontology" link
        And user selects "New Term" button
   
    @BI-938
    Scenario: Ontology Term Create - New Ontology form elements
        Given user clicks “+New Term”
        Then user can see "Ontology Term Name" field
        And user can see "All unicode characters are accepted."
        And user can see "Full Name" field
        And user can see "Description" field
        And user can see "Synonyms" 
        And user can see "Trait = Entity + Attribute" 
        And user can see "Entity" field
        And user can see "Attribute" field
        And user can see "Trait"
        And user can see "Method = Description + Class"
        And user can see "Description" field
        And user can see "Method Class" dropdown
        And user can see "Scale"
        And user can see "Scale Class" dropdown
        And user can see “Tags”
        And user can see "Save" button
        And user can see "Cancel" button

    @BI-939
    # a record needs to be previously inserted into bidb program_observation_level, for program Snacks where program_observation_level[name] = "testEntity"
    Scenario: Ontology Term Create - Trait entity auto-complete behavior, already in db
        When user sets "t" in the "Entity" text box
        Then user can select "testEntity" 
        
    @BI-944
    Scenario: Ontology Term Create - Trait entity auto-complete behavior, not already in db
        Given user sets a "<ont_term_name>" in "Ontology Term Name" text box
        And user sets "<trait_description>" in 'Full Name' text box
        And user sets "<new_entity>" in "Entity" text box
        And user sets "<trait_attribute>" in "Attribute" text box
        And user sets "<method_description>" in "Method Description" text box
        And user sets "Observation" in "Method Class" dropdown
        And user sets "Date" in "Scale Class" dropdown
        And user selects "Save" button
        And user selects "New Term" button
        When user sets "New" in the "Entity" text box
        Then user can select "<new_entity>"

		 Examples: 
            | ont_term_name     | trait_description | new_entity  | trait_attribute | method_description |
            | TestOntTermName * | TestTraitDesc *   | NewEntity * | TestAttribute * | TestMethDesc *     |

    # @BI-945 
    # Scenario: Trait Create - Multiple Abbreviations and Multiple Synonyms
    # this one's going to take some time to figure out how it's supposed to work for v0.4...

    @BI-946
    Scenario: Ontology Term Create - Required Fields
        Given user selects "Save" button
        Then user can see "Missing observation variable name" below the "Ontology Term Name" field
        And user can see "Missing trait description" below the "Ontology Term Description" field
        And user can see "Missing trait entity" below the "Entity" field
        And user can see "Missing trait attribute" below the "Attribute" field
        And user can see "Missing method description" below the "Method Description" field
        And user can see "Missing method class" below the "Method Class" field
        And user can see "Missing scale data type" below the "Scale Class" field
        And user can see "Error creating trait. Missing method description; Missing method class; Missing scale data type; Missing observation variable name; Missing trait entity; Missing trait attribute; Missing trait description;" in banner

    @BI-947
    Scenario: Ontology Term Create - Enter Values, Cancel
        Given user sets a "<ont_term_name>" in "Ontology Term Name" text box
        And user sets "<trait_description>" in 'Full Name' text box
        And user sets "<trait_entity>" in "Entity" text box
        And user sets "<trait_attribute>" in "Attribute" text box
        And user sets "<method_description>" in "Method Description" text box
        And user sets "Observation" in "Method Class" dropdown
        And user sets "Date" in "Scale Class" dropdown
        And user selects "Cancel" button
        Then user can not see "<ont_term_name>" in "Name" column

		Examples: 
            | ont_term_name     | trait_description | trait_entity      | trait_attribute | method_description |
            | TestOntTermName * | TestTraitDesc *   | TestTraitEntity * | TestAttribute * | TestMethDesc *     |

    @BI-948
    Scenario: Ontology Term Create - Enter Values, Save
        Given user sets a "<ont_term_name>" in "Ontology Term Name" text box
        And user sets "<trait_description>" in 'Full Name' text box
        And user sets "<trait_entity>" in "Entity" text box
        And user sets "<trait_attribute>" in "Attribute" text box
        And user sets "<method_description>" in "Method Description" text box
        And user sets "Observation" in "Method Class" dropdown
        And user sets "Date" in "Scale Class" dropdown
        And user selects "Save" button
        Then user can see "<ont_term_name>" in "Name" column
        And user can see "<trait_description>" in 'Trait' column
        And user can see "<method_description> + 'Observation'" in "Method" columnn
        And user can see "Date" in "Scale Class" column

		Examples: 
            | ont_term_name     | trait_description | trait_entity      | trait_attribute | method_description |
            | TestOntTermName * | TestTraitDesc *   | TestTraitEntity * | TestAttribute * | TestMethDesc *     |
