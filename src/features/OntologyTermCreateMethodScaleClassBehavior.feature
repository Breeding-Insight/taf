Feature: Ontology Term Create - Method & Scale Class Behavior

    Background: Required Setup
        Given user logs in as "Cucumber Breeder"
        When user selects "Snacks" on program-selection page
        And user selects "Ontology" in navigation

    @BI-1108
    Scenario: Computation Method Class / Numerical Scale Class form elements
        Given user selects 'New Term' button on ontology list page
        When user selects "Computation" in 'Method Class' dropdown on ontology list page
        Then user can see "Numerical" in 'Scale Class' dropdown on ontology list page
        Then user can see 'Formula' field on ontology list page
        Then user can see 'Unit' field on ontology list page
        Then user can see 'Decimal Places' field on ontology list page
        Then user can see 'Minimum Valid Value' field on ontology list page
        Then user can see 'Maximum Valid Value' field on ontology list page

    @BI-1109
    Scenario: Computation Method Class / Numerical Scale Class required fields
        Given user selects 'New Term' button on ontology list page
        And user sets "<ont_term_name>" in 'Name' field on ontology list page
        And user sets "<trait_description>" in 'Description' field on ontology list page
        And user sets "<trait_entity>" in 'Entity' field on ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field on ontology list page
        And user sets "<method_description>" in 'Method Description' field on ontology list page
        When user selects "Computation" in 'Method Class' dropdown on ontology list page
        And user selects 'Save' button on ontology list page
        Then user can see "Missing method formula for Computation method" below the 'Formula' field on ontology list page
        And user can see "Missing unit" below the 'Unit' field on ontology list page
        Then user can see banner appears with an error message "Error creating trait. Missing unit; Missing method formula for Computation method;"

        Examples:
            | ont_term_name | trait_description | trait_entity | trait_attribute | method_description |
            | *             | TestTraitDesc *   | TestEntity * | TestAttribute * | TestMethDesc *     |

    @BI-1110
    Scenario: Computation Method Class / Numerical Scale Class Min/Max
        Given user selects 'New Term' button on ontology list page
        Given user sets "<ont_term_name>" in 'Name' field on ontology list page
        And user sets "<trait_description>" in 'Description' field on ontology list page
        And user sets "<trait_entity>" in 'Entity' field on ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field on ontology list page
        And user sets "<method_description>" in 'Method Description' field on ontology list page
        And user selects "Computation" in 'Method Class' dropdown on ontology list page
        And user sets "<formula>" in 'Formula' field on ontology list page
        And user sets "<unit>" in 'Unit' field on ontology list page
        And user sets "5" in 'Minimum Valid Value' field on ontology list page
        And user sets "3" in 'Maximum Valid Value' field on ontology list page
        When user selects 'Save' button on ontology list page
        Then user can see "Scale valid value max must be greater than valid value min." below the 'Max' field on ontology list page
        Then user can see banner appears with an error message "Error creating trait. Scale valid value max must be greater than valid value min.;"

        Examples:
            | ont_term_name | trait_description | trait_entity | trait_attribute | method_description | formula       | unit     |
            | *             | TestTraitDesc *   | TestEntity * | TestAttribute * | TestMethDesc *     | testFormula * | testUnit |

    @BI-1111
    Scenario: Date Scale Class
        Given user selects 'New Term' button on ontology list page
        When user selects "Date" in 'Scale Class' dropdown on ontology list page
        Then user can see 'No options are available for configuring this field.' below the 'Scale Class' dropdown on ontology list page

    @BI-1334
    Scenario: Duration not visible in Scale class
        Given user selects 'New Term' button on ontology list page
        Then user can not select "Duration" in 'Scale Class' dropdown on ontology list page

    @BI-1114
    Scenario: Text Scale Class
        Given user selects 'New Term' button on ontology list page
        When  user selects "Text" in 'Scale Class' dropdown on ontology list page
        Then user can see 'No options are available for configuring this field.' below the 'Scale Class' dropdown on ontology list page

    @BI-1328
    Scenario: Selecting scale class Nominal
        Given user selects 'New Term' button on ontology list page
        When user selects "Nominal" in 'Scale Class' dropdown on ontology list page
        When user selects 'Add Item' button on ontology list page
        Then user can see first Category field on ontology list page
        Then user can see "Nominal scales require at least one category" below first Category field on ontology list page
        When user selects 'Add Item' button on ontology list page
        Then user can see second Category field on ontology list page
        Then user can see 'X' button of second Category field on ontology list page
        When user selects 'Add Item' button on ontology list page
        Then user can see third Category field on ontology list page
        Then user can see 'X' button of third Category field on ontology list page

    @BI-1343
    Scenario: scale class Nominal - required fields
        Given user selects 'New Term' button on ontology list page
        Given user sets "<ont_term_name>" in 'Name' field on ontology list page
        And user sets "<trait_description>" in 'Description' field on ontology list page
        And user sets "<trait_entity>" in 'Entity' field on ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field on ontology list page
        And user sets "<method_description>" in 'Method Description' field on ontology list page
        And user selects "Observation" in 'Method Class' dropdown on ontology list page
        And user selects "Nominal" in 'Scale Class' dropdown on ontology list page
        And user selects 'Add Item'
        When user selects 'Save' button on ontology list page
        Then user can see "Value missing." below the 'Category' field on ontology list page
        Then user can see banner appears with an error message "Error creating trait. Scale categories contain errors;"

        Examples:
            | ont_term_name | trait_description | trait_entity | trait_attribute | method_description |
            | *             | TestTraitDesc *   | TestEntity * | TestAttribute * | TestMethDesc *     |

    @BI-1326
    Scenario: Selecting scale class ordinal
        Given user selects 'New Term' button on ontology list page
        When user selects "Ordinal" in 'Scale Class' dropdown on ontology list page
        And user selects 'Add Item'
        And user can see first Value field on ontology list page
        Then user can see first Category field on ontology list page
        And user selects 'Add Item'
        And user can see second Value field on ontology list page
        Then user can see second Category field on ontology list page
        And user selects 'Add Item'
        And user can see third Value field on ontology list page
        Then user can see third Category field on ontology list page
        And user selects 'Add Item'
        And user can see fourth Value field on ontology list page
        Then user can see fourth Category field on ontology list page

    @BI-1344
    @debug
    Scenario: scale class Ordinal - required fields
        Given user selects 'New Term' button on ontology list page
        Given user sets "<ont_term_name>" in 'Name' field on ontology list page
        And user sets "<trait_description>" in 'Description' field on ontology list page
        And user sets "<trait_entity>" in 'Entity' field on ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field on ontology list page
        And user sets "<method_description>" in 'Method Description' field on ontology list page
        And user selects "Observation" in 'Method Class' dropdown on ontology list page
        And user selects "Ordinal" in 'Scale Class' dropdown on ontology list page
        And user selects 'Add Item'
        And user selects 'Save' button on ontology list page
        Then user can see "Value missing." under first Value field on ontology list page
        Then user can see "Label missing." under first Category field on ontology list page
        And user selects 'Add Item'
        Then user can see "Value missing." under second Value field on ontology list page
        Then user can see "Label missing." under second Category field on ontology list page
        Then user can see banner appears with an error message "Error creating trait. Scale categories contain errors; Ordinal scales must have at least two categories.;F"