Feature: scale class Nominal - values post save

     @BI-1329
    Scenario: scale class Nominal - values post save
    Given a new program is created
        Given user logs in as "Cucumber Breeder"
        When user selects "*" on program-selection page
        And user selects "Ontology" in navigation
        Given user selects 'New Term' button on ontology list page
        Given user sets "<ont_term_name>" in 'Name' field on ontology list page
        And user sets "<trait_description>" in 'Description' field on ontology list page
        And user sets "<trait_entity>" in 'Entity' field on ontology list page
        And user sets "<trait_attribute>" in 'Attribute' field on ontology list page
        And user sets "<method_description>" in 'Method Description' field on ontology list page
        And user selects "Observation" in 'Method Class' dropdown on ontology list page
        And user selects "Nominal" in 'Scale Class' dropdown on ontology list page
        And user selects "Add Item" button
        And user sets "<first scale category>" in Nominal first field on ontology list page
        And user sets "<second scale category>" in Nominal second field on ontology list page
        And user selects 'Save' button on ontology list page
        When user selects Show All button
        When user selects 'Show details' button of "<ont_term_name>" on ontology list page
        Then user can see "<first scale category>" in Nominal first field of Show Details on ontology list page
        And user can see "<second scale category>" in Nominal second field of Show Details on ontology list page

        Examples:
            | ont_term_name | trait_description | trait_entity | trait_attribute | method_description | ordinal_value | first scale category | second scale category |
            | term*         | description*      | trait*       | traitattribute* | methoddescription* | ordinalvalue* | first*               | second*               |