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

    @htest
    @BI-1328
    Scenario: Selecting scale class Nominal
        Given user selects 'New Term' button on ontology list page
        When user selects "Nominal" in 'Scale Class' dropdown on ontology list page
        Then user can see Category first field on ontology list page
        Then user can see "Nominal scales require at least one category" below Category first field on ontology list page
        When user selects 'Add Item' button on ontology list page
        Then user can see Category second field on ontology list page
        Then user can see 'X' button of Category second field on ontology list page
        When user selects 'Add Item' button on ontology list page
        Then user can see Category third field on ontology list page
        Then user can see 'X' button of Category third field on ontology list page

    @htest
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
        When user selects 'Save' button on ontology list page
        Then user can see "Value missing." error message below Category first field on ontology list page
        Then user can see banner appears with an error message "Error creating trait. Scale categories contain errors;"

        Examples:
            | ont_term_name | trait_description | trait_entity | trait_attribute | method_description |
            | *             | TestTraitDesc *   | TestEntity * | TestAttribute * | TestMethDesc *     |

    @BI-1326
    Scenario: Selecting scale class ordinal
        Given user selects 'New Term' button on ontology list page
        When user selects "Ordinal" in 'Scale Class' dropdown on ontology list page
        And user can see Value first field on ontology list page
        Then user can see Category first field on ontology list page
        And user can see Value second field on ontology list page
        Then user can see Category second field on ontology list page
        When user selects 'Add Item' button on ontology list page
        When user selects 'Add Item' button on ontology list page
        And user can see Value third field on ontology list page
        Then user can see Category third field on ontology list page
        And user can see Value fourth field on ontology list page
        Then user can see Category fourth field on ontology list page

    @htest
    @BI-1344
    Scenario: scale class Ordinal - required fields
        Given user selects 'New Term' button on ontology list page
        Given user sets "<ont_term_name>" in 'Name' field on ontology list page
        And user sets "<trait_description>" in 'Description' field on ontology list page
        And user sets "<trait_entity>" in 'Entity' field on ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field on ontology list page
        And user sets "<method_description>" in 'Method Description' field on ontology list page
        And user selects "Observation" in 'Method Class' dropdown on ontology list page
        And user selects "Ordinal" in 'Scale Class' dropdown on ontology list page
        And user clears Value first field on ontology list page
        And user clears Value second field on ontology list page
        And user selects 'Save' button on ontology list page
        Then user can see "Value missing." below Value first field on ontology list page
        Then user can see "Label missing." error message below Category first field on ontology list page
        Then user can see "Value missing." below Value second field on ontology list page
        Then user can see "Label missing." below Category second field on ontology list page
        Then user can see banner appears with an error message "Error creating trait. Scale categories contain errors; Ordinal scales must have at least two categories.;"

        Examples:
            | ont_term_name | trait_description | trait_entity | trait_attribute | method_description |
            | *             | TestTraitDesc *   | TestEntity * | TestAttribute * | TestMethDesc *     |


    @BI-1348
    Scenario: Nominal Delete Scale Category, w/o text
        Given user selects 'New Term' button on ontology list page
        When user selects "Nominal" in 'Scale Class' dropdown on ontology list page
        And user selects 'Add Item' button on ontology list page
        When user selects 'X' button of Nominal second field on ontology list page
        Then user can not see Nominal second field text box on ontology list page

    @BI-1349
    Scenario: Nominal Delete Scale Category, w/text, cancel
        Given user selects 'New Term' button on ontology list page
        And user selects "Nominal" in 'Scale Class' dropdown on ontology list page
        When user selects 'Add Item' button on ontology list page
        When user sets "TEXT" in Nominal second field on ontology list page
        And user selects 'X' button of Nominal second field on ontology list page
        Then user can see "Remove category?" in modal box header1
        And user can see "Please confirm that you would like to remove this category." in modal box text
        And user can see "Yes, remove" button in modal box
        When user selects "Cancel" button in modal box
        Then user can see "TEXT" in Nominal second field on ontology list page

    @BI-1350
    Scenario: Nominal Delete Scale Category, w/text - Yes, Delete
        Given user selects 'New Term' button on ontology list page
        When  user selects "Nominal" in 'Scale Class' dropdown on ontology list page
        When user selects 'Add Item' button on ontology list page
        And user sets "TEST" in Nominal second field on ontology list page
        And user selects 'X' button of Nominal second field on ontology list page
        When user selects "Yes, remove" button in modal box
        Then user can not see Nominal second field on ontology list page

    @BI-1351
    Scenario: Ordinal Delete Scale Category, w/o text
        Given user selects 'New Term' button on ontology list page
        When user selects "Ordinal" in 'Scale Class' dropdown on ontology list page
        When user selects 'Add Item' button on ontology list page
        Then user selects 'X' button in Ordinal third field on ontology list page
        Then user can not see Ordinal third category field on ontology list page

    @BI-1352
    Scenario: Ordinal Delete Scale Category, w/text, cancel
        Given user selects 'New Term' button on ontology list page
        When user selects "Ordinal" in 'Scale Class' dropdown on ontology list page
        And user selects 'Add Item' button on ontology list page
        And user selects 'Add Item' button on ontology list page
        And user selects 'Add Item' button on ontology list page
        And user sets "TEXT" in Ordinal third value field on ontology list page
        Then user selects 'X' button in Ordinal third value on ontology list page
        Then user can see "Remove category?" in modal box header
        Then user can see "Please confirm that you would like to remove this category." in modal box text
        And user can see "Yes, remove" button in modal box
        And user selects "Cancel" button in modal box
        Then user can see "TEXT" in Ordinal third value on ontology list page

    @BI-1353
    Scenario: Ordinal Delete Scale Category, w/text, Yes, delete
        Given user selects 'New Term' button on ontology list page
        When user selects "Ordinal" in 'Scale Class' dropdown on ontology list page
        And user selects 'Add Item' button on ontology list page
        And user sets "TEXT" in Ordinal third value field on ontology list page
        Then user selects 'X' button in Ordinal third field on ontology list page
        When user selects "Yes, remove" button in modal box
        Then user can not see Ordinal third value on ontology list page

    @BI-1354
    Scenario: Switching between Ordinal and Nominal
        Given user selects 'New Term' button on ontology list page
        When user selects "Nominal" in 'Scale Class' dropdown on ontology list page
        Then user can not see Category first field on ontology list page
        When user selects "Ordinal" in 'Scale Class' dropdown on ontology list page
        Then user can see Value first field on ontology list page
        Then user can see Category first field on ontology list page
        Then user can see Value first field on ontology list page
        Then user can see Category second field on ontology list page
        When user selects "Nominal" in 'Scale Class' dropdown on ontology list page
        Then user can see Category first field on ontology list page

    @BI-1327
    @debug
    Scenario: scale class Ordinal - values post save BI-1258
        Given user selects 'New Term' button on ontology list page
        Given user sets "<ont_term_name>" in 'Name' field on ontology list page
        And user sets "<trait_description>" in 'Description' field on ontology list page
        And user sets "<trait_entity>" in 'Entity' field on ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field on ontology list page
        And user sets "<method_description>" in 'Method Description' field on ontology list page
        And user selects "Observation" in 'Method Class' dropdown on ontology list page
        And user selects "Ordinal" in 'Scale Class' dropdown on ontology list page
        When user clears Value first field on ontology list page
        When user clears Value second field on ontology list page
        And user sets "<ordinal_value>" in Value first field on ontology list page
        And user sets "<first scale category>" in Nominal first field on ontology list page
        And user sets "<ordinal_value>" in Value second field on ontology list page
        And user sets "<second scale category>" in Nominal second field on ontology list page
        And user selects 'Save' button on ontology list page
        When user clicks Show All button
        When user selects 'Show details' button of "<ont_term_name>" on ontology list page
        Then user can see "<ordinal_value>" in Value first field of Show Details on ontology list page
        And user can see "<first scale category>" in Ordinal first field of Show Details on ontology list page
        And user can see "<ordinal_value>" in Value second field of Show Details on ontology list page
        And user can see "<second scale category>" in Ordinal second field of Show Details on ontology list page

        Examples:
            | ont_term_name | trait_description | trait_entity | trait_attribute | method_description | ordinal_value | first scale category | second scale category |
            | term*         | description*      | trait*       | traitattribute* | methoddescription* | ordinalvalue* | first*               | second*               |