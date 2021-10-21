Feature: Ontology Term Create - Method & Scale Class Behavior

    Background: Required Setup
        Given user logs in as "Cucumber Breeder"
        When user selects "Snacks" on program-selection page
        And user selects "Ontology" in navigation

    @BI-1108
    Scenario: Computation Method Class / Numerical Scale Class form elements
        Given user selects 'New Term' button in ontology list page
        When user selects "Computation" in 'Method Class' dropdown in ontology list page
        Then user can see "Numerical" in 'Scale Class' dropdown in ontology list page
        Then user can see 'Formula' field in ontology list page
        Then user can see 'Unit' field in ontology list page
        Then user can see 'Decimal Places' field in ontology list page
        Then user can see 'Minimum Valid Value' field in ontology list page
        Then user can see 'Maximum Valid Value' field in ontology list page

    @BI-1109
    Scenario: Computation Method Class / Numerical Scale Class required fields
        Given user selects 'New Term' button in ontology list page
        And user sets "<ont_term_name>" in 'Name' field in ontology list page
        And user sets "<trait_description>" in 'Full Name' field in ontology list page
        And user sets "<trait_entity>" in 'Entity' field in ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field in ontology list page
        And user sets "<method_description>" in 'Method Description' field in ontology list page
        When user selects "Computation" in 'Method Class' dropdown in ontology list page
        And user selects 'Save' button in ontology list page
        Then user can see "Missing method formula for Computation method" below the 'Formula' field in ontology list page
        And user can see "Missing unit" below the 'Unit' field in ontology list page
        Then user can see banner appears with an error message "Error creating trait. Missing unit; Missing method formula for Computation method;"

        Examples:
            | ont_term_name     | trait_description | trait_entity | trait_attribute | method_description |
            | TestOntTermName * | TestTraitDesc *   | TestEntity * | TestAttribute * | TestMethDesc *     |

    @BI-1110
    Scenario: Computation Method Class / Numerical Scale Class Min/Max
        Given user selects 'New Term' button in ontology list page
        Given user sets "<ont_term_name>" in 'Name' field in ontology list page
        And user sets "<trait_description>" in 'Full Name' field in ontology list page
        And user sets "<trait_entity>" in 'Entity' field in ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field in ontology list page
        And user sets "<method_description>" in 'Method Description' field in ontology list page
        And user selects "Computation" in 'Method Class' dropdown in ontology list page
        And user sets "<formula>" in 'Formula' field in ontology list page
        And user sets "<unit>" in 'Unit' field in ontology list page
        And user sets "5" in 'Minimum Valid Value' field in ontology list page
        And user sets "3" in 'Maximum Valid Value' field in ontology list page
        When user selects 'Save' button in ontology list page
        Then user can see "Scale valid value max must be greater than valid value min." below the 'Max' field in ontology list page
        Then user can see banner appears with an error message "Error creating trait. Scale valid value max must be greater than valid value min;"

        Examples:
            | ont_term_name     | trait_description | trait_entity | trait_attribute | method_description | formula       | unit     |
            | TestOntTermName * | TestTraitDesc *   | TestEntity * | TestAttribute * | TestMethDesc *     | testFormula * | testUnit |

    @BI-1111
    Scenario: Date Scale Class
        Given user selects 'New Term' button in ontology list page
        When user selects "Date" in 'Scale Class' dropdown in ontology list page
        Then user can see "No options are available for configuring this field." below the 'Attribute' field in ontology list page

    @BI-1112
    Scenario: Duration Scale class form elements
        Given user selects 'New Term' button in ontology list page
        When user selects "Duration" in 'Scale Class' dropdown in ontology list page
        Then user can see 'Unit of time' field in ontology list page
        And user can see 'Minimum Valid Value' field in ontology list page
        And user can see 'Maximum Valid Value' field in ontology list page

    @BI-1113
    Scenario: Duration Scale class Min/Max
        Given user selects 'New Term' button in ontology list page
        Given user sets "<ont_term_name>" in 'Name' field in ontology list page
        And user sets "<trait_description>" in 'Full Name' field in ontology list page
        And user sets "<trait_entity>" in 'Entity' field in ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field in ontology list page
        And user sets "<method_description>" in 'Method Description' field in ontology list page
        And user selects "Observation" in 'Method Class' dropdown in ontology list page
        And user selects "Duration" in 'Scale Class' dropdown in ontology list page
        And user set "<unit>" in 'Unit' field in ontology list page
        When user sets "5" in 'Minimum Valid Value' field in ontology list page
        And user sets "3" in 'Maximum Valid Value' field in ontology list page
        And user selects "Save" button
        Then user can see "Scale valid value max must be greater than valid value min." below the 'Attribute' field in ontology list page
        Then user can see banner appears with an error message "Error creating trait. Scale valid value max must be greater than valid value min;"

        Examples:
            | ont_term_name     | trait_description | trait_entity | trait_attribute | method_description | unit     |
            | TestOntTermName * | TestTraitDesc *   | TestEntity * | TestAttribute * | TestMethDesc *     | testUnit |
    @BI-1114
    Scenario: Text Scale Class
        Given user selects 'New Term' button in ontology list page
        When  user sets "Text" in 'Scale' field in ontology list page
        Then user can see "No options are available for configuring this field." below the 'Attribute' field in ontology list page

    @BI-1116
    Scenario: Nominal form elements
        When user sets "Nominal" in Scale text box
        Then user can see "Type A" in first "label' field in ontology list page
        And user can see 'X' button
        And user can see "Type B" in second "label' field in ontology list page
        And user can see 'X' button
        And user can see "Type C" in third "label' field in ontology list page
        And user can see 'X' button
        And user can see "Type D" in fourth "label' field in ontology list page
        And user can see 'X' button
        And user can see "Type E" in fifth "label' field in ontology list page
        And user can see 'X' button
        And user can see "Add Item" button

    @BI-1117
    Scenario: Nominal Required Fields
        Given user sets a "<ont_term_name>" in 'Name' field in ontology list page
        And user sets "<trait_description>" in 'Full Name' text box
        And user sets "<trait_entity>" in 'Entity' field in ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field in ontology list page
        And user sets "<method_description>" in 'Method Description' field in ontology list page
        And user sets "Observation" in 'Method Class' dropdown in ontology list page
        And user sets "Nominal" in 'Scale Class' dropdown
        And user selects "Save" button
        Then user can see "Value missing." under "value" field
        And user can see "Error creating trait. Scale categories contain errors;" in banner

        Examples:
            | ont_term_name     | trait_description | trait_entity | trait_attribute | method_description |
            | TestOntTermName * | TestTraitDesc *   | TestEntity * | TestAttribute * | TestMethDesc *     |

    @BI-1118
    Scenario: Nominal Add Scale Category
        When  user sets "Nominal" in 'Scale' field in ontology list page
        And user selects "Add Item" button
        Then user can see a sixth "value" field
        And user can see an 'X' button

    @BI-1119
    Scenario: Ordinal form elements
        When user sets "Ordinal" in 'Scale' field in ontology list page
        Then user can see "1" in the first "value' field in ontology list page
        And use can see first label text box
        And an 'X' button
        And user can see "2" in the second "value' field in ontology list page
        And use can see second label text box
        And an 'X' button
        And user can see "3" in the third "value' field in ontology list page
        And use can see third label text box
        And an 'X' button
        And user can see "4" in the fourth "value' field in ontology list page
        And use can see fourth label text box
        And an 'X' button
        And user can see "5" in the fifth "value' field in ontology list page
        And use can see fifth label text box
        And user can see an 'X' button
        And user can see "Add Item" button

    @BI-1120
    Scenario: Ordinal Required Fields
        Given user sets "<ont_term_name>" in 'Name' field in ontology list page
        And user sets "<trait_description>" in 'Full Name' text box
        And user sets "<trait_entity>" in 'Entity' field in ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field in ontology list page
        And user sets "<method_description>" in 'Method Description' field in ontology list page
        And user sets "Observation" in 'Method Class' dropdown in ontology list page
        When user sets "Ordinal" in 'Scale Class' dropdown
        And user selects "Save" button
        Then user can see "Label missing." under "label" field
        And user can see "Error creating trait. Scale categories contain errors;" in banner

        Examples:
            | ont_term_name     | trait_description | trait_entity | trait_attribute | method_description |
            | TestOntTermName * | TestTraitDesc *   | TestEntity * | TestAttribute * | TestMethDesc *     |

    @BI-1121
    Scenario: Ordinal Add Scale Category
        When  user sets "Ordinal" in 'Scale' field in ontology list page
        And user selects "Add Item" button
        Then user can see sixth "value' field in ontology list page
        And user can see a sixth "label' field in ontology list page
        And user can see an 'X' button

    @BI-1122
    Scenario: Nominal Delete Scale Category, w/o text
        When user sets "Nominal" in 'Scale' field in ontology list page
        And user selects 'X' button
        Then user can see four "label' field in ontology list pagees

    @BI-1123
    Scenario: Nominal Delete Scale Category, w/text, cancel
        When  user sets "Nominal" in 'Scale' field in ontology list page
        And user sets "<text>" in first "label' field in ontology list page
        And user selects 'X' button for first "label"
        Then user can see "Remove category?"
        And user can see "Please confirm that you would like to remove this category."
        And user can see "Yes, remove" button
        And user selects "Cancel" button
        And user can see "<text>" in first "label' field in ontology list page

        Examples:
            | text        |
            | TestLabel * |

    @BI-1124
    Scenario: Nominal Delete Scale Category, w/text - Yes, Delete
        When  user sets "Nominal" in 'Scale' field in ontology list page
        And user sets "<text>" in first "label' field in ontology list page
        And user selects 'X' button for first "label"
        And user selects "Remove category?"
        Then user can not see "<text>" in first "label' field in ontology list page

        Examples:
            | text        |
            | TestLabel * |

    @BI-1125
    Scenario: Ordinal Delete Scale Category, cancel
        When  user sets "Ordinal" in 'Scale' field in ontology list page
        And user selects 'X' button for first "label"
        Then user can see "Remove category?"
        And user can see "Please confirm that you would like to remove this category."
        And user can see "Yes, remove" button
        And user selects "Cancel" button
        And user sees "1" in first "value' field in ontology list page

    @BI-1126
    Scenario: Ordinal Delete Scale Category - Yes, Delete
        When  user sets "Ordinal" in 'Scale' field in ontology list page
        And user selects 'X' button for first "label"
        And user selects "Remove category?"
        Then user can not see "1" in first "value' field in ontology list page



