Feature: Trait Create - Trait Create Method & Scale Class Behavior

    Background: Required Setup
        Given user logs in as "Cucumber Breeder"
        When user selects "Snacks" on program-selection page
        And user selects "Ontology" link
        And user selects "New Term" button
   
    @BI-1108
    Scenario: Computation Method Class / Numerical Scale Class form elements
        When user sets "Computation" in "Method Class" text box
        Then user can see "Numerical" in "Scale Class"
        And user can see "Formula" text box
        And user can see "Unit" text box
        And user can see "Decimal Places" text box
        And user can see "Minimum Valid Value" text box
        And user can see "Maximum Valid Value" text box

    @BI-1109
    Scenario: Computation Method Class / Numerical Scale Class required fields
        Given user sets a "<trait_name>" in "Trait Name" text box
        And user sets "<full_name>" in 'Full Name' text box
        And user sets "<trait_entity>" in "Entity" text box
        And user sets "<trait_attribute>" in "Attribute" text box
        When user sets "Computation" in "Method Class" text box
        And user sets "<method_description>" in "Method Description" text box
        And user selects "Save" button
        Then user can see "Missing method formula for Computation method" below the Formula field
        And user can see "Missing unit" below the Unit field
        And user can see "Error creating trait. Missing unit; Missing method formula for Computation method;" in banner

		 Examples: 
            | Name   | trait_entity | formula       | method_description | unit       |
            | Test * | TestEntity * | TestFormula * | TestMethDesc *     | TestUnit * |

    @BI-1110
    Scenario: Computation Method Class / Numerical Scale Class Min/Max
        Given user sets a "<trait_name>" in "Trait Name" text box
        And user sets "<full_name>" in 'Full Name' text box
        And user sets "<trait_entity>" in "Entity" text box
        And user sets "<trait_attribute>" in "Attribute" text box
        And user sets "<method_description>" in "Method Description" text box
        And user sets "Computation" in "Method Class" text box
        And user sets "<formula>"in "Formula" text box
        And user set "<unit>" in Unit text box
        And user sets "5" in "Minimum Valid Value" text box
        And user sets "3" in "Maximum Valid Value" text box
        When user selects "Save" button
        Then user can see "Scale valid value max must be greater than valid value min."
        And user can see "Error creating trait. Scale valid value max must be greater than valid value min;" in banner
        
        Examples: 
            | Name   | trait_entity | formula       | method_description | unit       |
            | Test * | TestEntity * | TestFormula * | TestMethDesc *     | TestUnit * |

    @BI-1111
    Scenario: Date Scale Class
        When user sets "Date" in Scale text box
        Then user can see "No options are available for configuring this field."

    @BI-1112
    Scenario: Duration Scale class form elements
        When user sets "Duration" in Scale text box
        Then user can see "Unit of time" text box
        And user can see "Minimum Valid Value" text box
        And user can see "Maximum Valid Value" text box

    @BI-1113
    Scenario: Duration Scale class Min/Max
        Given user sets a "<trait_name>" in "Trait Name" text box
        And user sets "<full_name>" in 'Full Name' text box
        And user sets "<trait_entity>" in "Entity" text box
        And user sets "<trait_attribute>" in "Attribute" text box
        And user sets "<method_description>" in "Method Description" text box
        And user sets "Observation" in "Method Class" text box
        And user sets "Duration" in "Scale Class"
        And user set "<unit>" in Unit text box
        When user sets "5" in "Minimum Valid Value" text box
        And user sets "3" in "Maximum Valid Value" text box
        And user selects "Save" button
        Then user can see "Scale valid value max must be greater than valid value min."
        And user can see "Error creating trait. Scale valid value max must be greater than valid value min;" in banner

        Examples: 
            | Name   | trait_entity | method_description | unit       |
            | Test * | TestEntity * | TestMethDesc *     | TestUnit * |
    @BI-1114
    Scenario: Text Scale Class
        When  user sets "Text" in Scale text box
        Then user can see "No options are available for configuring this field."

    @BI-1116
    Scenario: Nominal form elements
        When user sets "Nominal" in Scale text box
        Then user can see "Type A" in first scale category text box
        And user can see 'X' button
        And user can see "Type B" in second scale category text box
        And user can see 'X' button
        And user can see "Type C" in third scale category text box
        And user can see 'X' button
        And user can see "Type D" in fourth scale category text box
        And user can see 'X' button
        And user can see "Type E" in fifth scale category text box
        And user can see 'X' button
        And user can see "Add Item" button

    @BI-1117
    Scenario: Nominal Required Fields
        Given user sets a "<trait_name>" in "Trait Name" text box
        And user sets "<full_name>" in 'Full Name' text box
        And user sets "<trait_entity>" in "Entity" text box
        And user sets "<trait_attribute>" in "Attribute" text box
        And user sets "<method_description>" in "Method Description" text box
        And user sets "Observation" in "Method Class" text box
        And user sets "Nominal" in "Scale Class"
        And user selects "Save" button
        Then user can see "Value missing." under value field
        And user can see "Error creating trait. Scale categories contain errors;" in banner

        Examples: 
            | Name   | trait_entity | method_description |
            | Test * | TestEntity * | TestMethDesc *     |

    @BI-1118
    Scenario: Nominal Add Scale Category
        When  user sets "Nominal" in Scale text box
        And user selects "Add Item" button
        Then user can see a sixth scale category text box
        And user can see an 'X' button

    @BI-1119
    Scenario: Ordinal form elements
        When user sets "Ordinal" in Scale text box 
        

        
    
    
    
