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

    @BI-1112
    Scenario: Duration Scale class form elements
        Given user selects 'New Term' button on ontology list page
        When user selects "Duration" in 'Scale Class' dropdown on ontology list page
        Then user can see 'Unit of time' field on ontology list page
        And user can see 'Minimum Valid Value' field on ontology list page
        And user can see 'Maximum Valid Value' field on ontology list page

    @BI-1113
    Scenario: Duration Scale class Min/Max
        Given user selects 'New Term' button on ontology list page
        Given user sets "<ont_term_name>" in 'Name' field on ontology list page
        And user sets "<trait_description>" in 'Description' field on ontology list page
        And user sets "<trait_entity>" in 'Entity' field on ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field on ontology list page
        And user sets "<method_description>" in 'Method Description' field on ontology list page
        And user selects "Observation" in 'Method Class' dropdown on ontology list page
        And user selects "Duration" in 'Scale Class' dropdown on ontology list page
        And user set "<unit>" in 'Unit' field on ontology list page
        When user sets "5" in 'Minimum Valid Value' field on ontology list page
        And user sets "3" in 'Maximum Valid Value' field on ontology list page
        When user selects 'Save' button on ontology list page
        Then user can see "Scale valid value max must be greater than valid value min." below the 'Max' field on ontology list page
        Then user can see "Scale valid value max must be greater than valid value min." below the 'Min' field on ontology list page
        Then user can see banner appears with an error message "Error creating trait. Scale valid value max must be greater than valid value min.;"

        Examples:
            | ont_term_name     | trait_description | trait_entity | trait_attribute | method_description | unit    |
            | TestOntTermName * | TestTraitDesc *   | TestEntity * | TestAttribute * | TestMethDesc *     | seconds |

    @BI-1114
    Scenario: Text Scale Class
        Given user selects 'New Term' button on ontology list page
        When  user selects "Text" in 'Scale Class' dropdown on ontology list page
        Then user can see 'No options are available for configuring this field.' below the 'Scale Class' dropdown on ontology list page

    @BI-1116
    Scenario: Nominal form elements
        Given user selects 'New Term' button on ontology list page
        When user selects "Nominal" in 'Scale Class' dropdown on ontology list page
        Then user can see "Type A" placeholder in Nominal first field on ontology list page
        Then user can see 'X' button in Nominal first field on ontology list page
        Then user can see "Type B" placeholder in Nominal second field on ontology list page
        Then user can see 'X' button in Nominal second field on ontology list page
        Then user can see "Type C" placeholder in Nominal third field on ontology list page
        Then user can see 'X' button in Nominal third field on ontology list page
        Then user can see "Type D" placeholder in Nominal fourth field on ontology list page
        Then user can see 'X' button in Nominal fourth field on ontology list page
        Then user can see "Type E" placeholder in Nominal fifth field on ontology list page
        Then user can see 'X' button in Nominal fifth field on ontology list page
        Then user can see 'Add Item' button on ontology list page

    @BI-1117
    Scenario: Nominal Required Fields
        Given user selects 'New Term' button on ontology list page
        When user sets "<ont_term_name>" in 'Name' field on ontology list page
        When user sets "<trait_description>" in 'Description' field on ontology list page
        When user sets "<trait_entity>" in 'Entity' field on ontology list page
        When user sets "<trait_attribute>" in 'Attribute' field on ontology list page
        When user sets "<method_description>" in 'Method Description' field on ontology list page
        When user selects "Observation" in 'Method Class' dropdown on ontology list page
        When user selects "Nominal" in 'Scale Class' dropdown on ontology list page
        When user selects 'Save' button on ontology list page
        Then user can see "Value missing." below Nominal first field on ontology list page
        Then user can see "Value missing." below Nominal second field on ontology list page
        Then user can see "Value missing." below Nominal third field on ontology list page
        Then user can see "Value missing." below Nominal fourth field on ontology list page
        Then user can see "Value missing." below Nominal fifth field on ontology list page
        Then user can see banner appears with an error message "Error creating trait. Scale categories contain errors;"

        Examples:
            | ont_term_name | trait_description | trait_entity | trait_attribute | method_description |
            | *             | TestTraitDesc *   | TestEntity * | TestAttribute * | TestMethDesc *     |

    @BI-1118
    Scenario: Nominal Add Scale Category
        Given user selects 'New Term' button on ontology list page
        When  user selects "Nominal" in 'Scale Class' dropdown on ontology list page
        When user selects 'Add Item' button on ontology list page
        Then user can see "Value" placeholder in Nominal sixth field on ontology list page
        Then user can see 'X' button in Nominal sixth field on ontology list page

    @BI-1119
    Scenario: Ordinal form elements
        Given user selects 'New Term' button on ontology list page
        When user selects "Ordinal" in 'Scale Class' dropdown on ontology list page
        Then user can see "1" in Category first field on ontology list page
        And user can see "ex. Very thin (< 4mm)" placeholder in Ordinal first field on ontology list page
        Then user can see 'X' button in Ordinal first field on ontology list page
        And user can see "2" in Category second field on ontology list page
        And user can see "ex. Thin (4 - 6mm)" placeholder in Ordinal second field on ontology list page
        Then user can see 'X' button in Ordinal second field on ontology list page
        And user can see "3" in Category third field on ontology list page
        And user can see "ex. Intermediate (7 - 9mm)" placeholder in Ordinal third field on ontology list page
        Then user can see 'X' button in Ordinal third field on ontology list page
        And user can see "4" in Category fourth field on ontology list page
        And user can see "ex. Thick (10 - 12mm)" placeholder in Ordinal fourth field on ontology list page
        Then user can see 'X' button in Ordinal fourth field on ontology list page
        Then user can see "5" in Category fifth field on ontology list page
        Then user can see "ex. Very Thick (> 12mm)" placeholder in Ordinal fifth field on ontology list page
        Then user can see 'X' button in Ordinal fifth field on ontology list page
        Then user can see 'Add Item' button on ontology list page

    @BI-1120
    Scenario: Ordinal Required Fields
        Given user selects 'New Term' button on ontology list page
        When user sets "<ont_term_name>" in 'Name' field on ontology list page
        And user sets "<trait_description>" in 'Description' field on ontology list page
        And user sets "<trait_entity>" in 'Entity' field on ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field on ontology list page
        And user sets "<method_description>" in 'Method Description' field on ontology list page
        And user selects "Observation" in 'Method Class' dropdown on ontology list page
        When user selects "Ordinal" in 'Scale Class' dropdown on ontology list page
        When user selects 'Save' button on ontology list page
        Then user can see "Label missing." below Ordinal first field on ontology list page
        Then user can see "Label missing." below Ordinal second field on ontology list page
        Then user can see "Label missing." below Ordinal third field on ontology list page
        Then user can see "Label missing." below Ordinal fourth field on ontology list page
        Then user can see "Label missing." below Ordinal fifth field on ontology list page
        Then user can see banner appears with an error message "Error creating trait. Scale categories contain errors;"

        Examples:
            | ont_term_name     | trait_description | trait_entity | trait_attribute | method_description |
            | TestOntTermName * | TestTraitDesc *   | TestEntity * | TestAttribute * | TestMethDesc *     |

    @BI-1121
    Scenario: Ordinal Add Scale Category
        Given user selects 'New Term' button on ontology list page
        When  user selects "Ordinal" in 'Scale Class' dropdown on ontology list page
        When user selects 'Add Item' button on ontology list page
        Then user can see "Value" placeholder in Category sixth field on ontology list page
        Then user can see "Label" placeholder in Ordinal sixth field on ontology list page
        Then user can see 'X' button in Ordinal sixth field on ontology list page

    @BI-1122
    Scenario: Nominal Delete Scale Category, w/o text
        Given user selects 'New Term' button on ontology list page
        When user selects "Nominal" in 'Scale Class' dropdown on ontology list page
        When user selects 'X' button of Nominal first field on ontology list page
        Then user can see not see Nominal fifth field on ontology list page

    @BI-1123
    Scenario: Nominal Delete Scale Category, w/text, cancel
        Given user selects 'New Term' button on ontology list page
        When user selects "Nominal" in 'Scale Class' dropdown on ontology list page
        When user sets "<text>" in Nominal first field on ontology list page
        When user selects 'X' button of Nominal first field on ontology list page
        Then user can see "Remove category?" in modal box header1
        And user can see "Please confirm that you would like to remove this category." in modal box text1
        Then user can see "Yes, remove" button in modal box
        When user selects "Cancel" button in modal box
        Then user can see "<text>" in Nominal first field on ontology list page

        Examples:
            | text        |
            | TestLabel * |

    @BI-1124
    Scenario: Nominal Delete Scale Category, w/text - Yes, Delete
        Given user selects 'New Term' button on ontology list page
        When  user selects "Nominal" in 'Scale Class' dropdown on ontology list page
        And user sets "<text>" in Nominal first field on ontology list page
        And user selects 'X' button of Nominal first field on ontology list page
        When user selects "Yes, remove" button in modal box
        Then user can not see "<text>" in Nominal first field on ontology list page

        Examples:
            | text        |
            | TestLabel * |

    @BI-1125
    Scenario: Ordinal Delete Scale Category, cancel
        Given user selects 'New Term' button on ontology list page
        When user selects "Ordinal" in 'Scale Class' dropdown on ontology list page
        Then user selects 'X' button in Ordinal first field on ontology list page
        Then user can see "Remove category?" in modal box header1
        And user can see "Please confirm that you would like to remove this category." in modal box text1
        And user can see "Yes, remove" button in modal box
        And user selects "Cancel" button in modal box
        Then user can see "1" in Category first field on ontology list page

    @BI-1126
    Scenario: Ordinal Delete Scale Category - Yes, Delete
        Given user selects 'New Term' button on ontology list page
        When  user selects "Ordinal" in 'Scale Class' dropdown on ontology list page
        When user selects 'X' button in Ordinal first field on ontology list page
        When user selects "Yes, remove" button in modal box
        Then user can not see "1" in Category first field on ontology list page