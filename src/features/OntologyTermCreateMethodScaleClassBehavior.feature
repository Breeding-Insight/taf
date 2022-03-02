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
    @debug
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
        Then user can see first Value in Category first field on ontology list page
        Then user can see Category first field on ontology list page
        Then user can see "Ordinal scales require at least two categories"
        And user selects 'Add Item'
        Then user can see second Value in Category second field on ontology list page
        Then user can see Category second field on ontology list page
        And user selects 'Add Item'
        Then user can see third Value in Category third field on ontology list page
        Then user can see Category third field on ontology list page
        And user selects 'Add Item'
        Then user can see fourth Value in Category fourth field on ontology list page
        Then user can see Category fourth field on ontology list page

#     Then user can see "asdf" in Category first field on ontology list page

#     And user can see a Category first field
#     And user can see a Value second field
#     And user can see a Category second field
#     And user can see "Ordinal scales require at least two categories"
#     When user selects "Add Item" button
#     And user selects "Add Item" button
#     Then user can see a Value third field
#     Then user can see a Category third field
#     Then user can see a Value fourth field
#     Then user can see a Category fourth field


# Then user can see "1" in Category first field on ontology list page
#     And user can see "ex. Very thin (< 4mm)" placeholder in Ordinal first field on ontology list page
#     Then user can see 'X' button in Ordinal first field on ontology list page
#     And user can see "2" in Category second field on ontology list page
#     And user can see "ex. Thin (4 - 6mm)" placeholder in Ordinal second field on ontology list page
#     Then user can see 'X' button in Ordinal second field on ontology list page
#     And user can see "3" in Category third field on ontology list page
#     And user can see "ex. Intermediate (7 - 9mm)" placeholder in Ordinal third field on ontology list page
#     Then user can see 'X' button in Ordinal third field on ontology list page
#     And user can see "4" in Category fourth field on ontology list page
#     And user can see "ex. Thick (10 - 12mm)" placeholder in Ordinal fourth field on ontology list page
#     Then user can see 'X' button in Ordinal fourth field on ontology list page
#     Then user can see "5" in Category fifth field on ontology list page
#     Then user can see "ex. Very Thick (> 12mm)" placeholder in Ordinal fifth field on ontology list page
#     Then user can see 'X' button in Ordinal fifth field on ontology list page
#     Then user can see 'Add Item' button on ontology list page
