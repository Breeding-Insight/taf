Feature: Program Location Management

	@BI-905
	Scenario: Program Location Management page - admin
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		When user can see Program Management header in Program Management page
		Then user can see 'Locations' tab in Program Management page
		Then user can see 'Users' tab in Program Management page
		Then user can see 'New Location' button in Program Management page

	@BI-906
	Scenario: New Location form - enter nothing and select Save
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		When user selects 'New Location' button in Program Management page
		When user selects 'Save' button in Program Management page
		Then user can see banner appears with an error message 'Fix Invalid Fields'
		And user can see 'Name is required' below the Name field in Program Management page

	@BI-907
	Scenario: New Location form - enter location - Cancel
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation
		When user selects 'New Location' button in Program Management page
		When user sets "TestCancel" in Name field in Program Management page
		When user selects 'Cancel' button in Program Management page
		When user user can not see Location form in Program Management page

	@BI-908
	Scenario Outline: New Location form - enter location - Save
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		When user selects "Program Management" in navigation
		When user selects "Locations" in navigation
		When user selects 'New Location' button in Program Management page
		When user sets "<location name>" in Name field in Program Management page
		When user selects 'Save' button in Program Management page
		Then user can not see the New Location form in Program Management page
		Then user can see banner contains "Success! <location name> added."
		Then user can see "Name" column header
		Then user can see "# Experiments" column header
		Then user can see "<location name>" in Name column in Program Management page
		And user can see each row has an Edit link
		And user can see each row has a Deactivate link

		Examples:
			| location name |
			| location1     |

	@BI-909
	Scenario Outline: Edit Location form - Cancel
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		When user selects "Program Management" in navigation
		When user selects "Locations" in navigation
		When user selects 'New Location' button in Program Management page
		When user sets "<Location Name>" in Name field in Program Management page
		When user selects 'Save' button in Program Management page
		When user selects 'Edit' of "<Location Name>" in Location table
		When user sets "<New Name>" in Name field in Program Management page
		When user selects 'Cancel' button in Program Management page
		Then user can not see the New Location form in Program Management page
		Then user can see "<Location Name>" in Name column in Program Management page
		Then user can not see "<New Name>" in Name column in Program Management page
		Examples:
			| Location Name | New Name    |
			| location100   | location200 |

	@BI-910
	@BI-808
	Scenario Outline: Edit Location form - Save
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		When user selects "Program Management" in navigation
		When user selects "Locations" in navigation
		When user selects 'New Location' button in Program Management page
		When user sets "<Location Name>" in Name field in Program Management page
		When user selects 'Save' button in Program Management page
		When user selects 'Edit' of "<Location Name>" in Location table
		When user sets "<New Name>" in Name field in Program Management page
		When user selects 'Save' button in Program Management page
		Then user can not see the New Location form in Program Management page
		Then user can not see "<Location Name>" in Name column in Program Management page
		Then user can see "<New Name>" in Name column in Program Management page
		Examples:
			| Location Name | New Name    |
			| location100   | location200 |

	@BI-911
	Scenario Outline: Location Deactivate link - modal
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		When user selects "Program Management" in navigation
		When user selects "Locations" in navigation
		When user selects 'New Location' button in Program Management page
		When user sets "<Location Name>" in Name field in Program Management page
		When user selects 'Save' button in Program Management page
		When user selects 'Deactivate' of "<Location Name>" in Location table
		Then user can see "Remove <Location Name> from Snacks" alert message in modal box
		Then user can see "Program-related data referencing this location will not be affected by this change." message in modal box
		Then user can sees 'Yes, remove' button in modal box
		Then user can sees 'Cancel' button in modal box

		Examples:
			| Location Name |
			| location100   |

	@BI-912
	Scenario Outline: Location Deactivate link - Cancel
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		When user selects "Program Management" in navigation
		When user selects "Locations" in navigation
		When user selects 'New Location' button in Program Management page
		When user sets "<Location Name>" in Name field in Program Management page
		When user selects 'Save' button in Program Management page
		When user selects 'Deactivate' of "<Location Name>" in Location table
		Then user can see "Remove <Location Name> from Snacks" alert message in modal box
		Then user can see "Program-related data referencing this location will not be affected by this change." message in modal box
		Then user selects 'Cancel' button in modal box
		Then user can not see a modal box
		Then user can see "<Location Name>" in Name column in Program Management page

		Examples:
			| Location Name |
			| location101   |

	@BI-913
	Scenario Outline: Location Deactivate link - Yes, remove
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		When user selects "Program Management" in navigation
		When user selects "Locations" in navigation
		When user selects 'New Location' button in Program Management page
		When user sets "<Location Name>" in Name field in Program Management page
		When user selects 'Save' button in Program Management page
		When user selects 'Deactivate' of "<Location Name>" in Location table
		Then user can see "Remove <Location Name> from Snacks" alert message in modal box
		Then user can see "Program-related data referencing this location will not be affected by this change." message in modal box
		Then user selects 'Yes, remove' button in modal box
		Then user can not see a modal box
		Then user can see "<Location Name> removed from program" in banner
		Then user can not see "<Location Name>" in Name column in Program Management page

		Examples:
			| Location Name |
			| BI913         |

	@BI-915
	Scenario:  Program Location Management page - member
		Given user logs in as "Cucumber Member"
		When user selects "Snacks" on program-selection page
		When user selects "Program Management" in navigation
		When user selects "Locations" in navigation
		Then user can see each row doesn't have an Edit link
		Then user can see each row doesn't have a Deactivate link



