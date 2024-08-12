Feature: scale class Ordinal - values post save BI-1258

    @BI-1327
    Scenario: scale class Ordinal - values post save BI-1258
        Given a new program is created
        Given user logs in as "Cucumber Breeder"
        When user selects "*" on program-selection page
        And user selects "Ontology" in navigation
        Given user selects 'New Term' button on ontology list page
        Given user sets "<ont_term_name>" in 'Name' field on ontology list page
        And user selects "<term_type>" in 'Term Type' dropdown on ontology list page
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
        When user selects Show All button
        When user selects 'Show details' button of "<ont_term_name>" on ontology list page
        Then user can see "<ordinal_value>" in Value first field of Show Details on ontology list page
        And user can see "<first scale category>" in Ordinal first field of Show Details on ontology list page
        And user can see "<ordinal_value>" in Value second field of Show Details on ontology list page
        And user can see "<second scale category>" in Ordinal second field of Show Details on ontology list page

        Examples:
            | term_type           | ont_term_name | trait_description | trait_entity | trait_attribute | method_description | ordinal_value | first scale category | second scale category |
            | germplasm attribute | term*         | description*      | trait*       | traitattribute* | methoddescription* | ordinalvalue* | first*               | second*               |
