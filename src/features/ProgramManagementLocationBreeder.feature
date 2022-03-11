Feature: Program Location Management

	Background: Required Setup
		Given user logs in as "Cucumber Breeder"
		When user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation

	@BI-905
	Scenario: Program Location Management page - admin
		When user can see Program Management header in Program Management page
		Then user can see 'Locations' tab in Program Management page
		Then user can see 'Users' tab in Program Management page
		Then user can see 'New Location' button in Program Management page

	@BI-906
	Scenario: New Location form - enter nothing and select Save
		When user selects 'New Location' button in Program Management page
		When user selects 'Save' button in Program Management page
		Then user can see banner appears with an error message "Fix Invalid Fields"
		And user can see 'Name is required' below the Name field in Program Management page

	@BI-907
	Scenario: New Location form - enter location - Cancel
		When user selects 'New Location' button in Program Management page
		When user sets "TestCancel" in Name field in Program Management page
		When user selects 'Cancel' button in Program Management page
		When user user can not see Location form in Program Management page

	@BI-908
	Scenario: New Location form - enter location - Save
		Given user selects 'New Location' button in Program Management page
		When user sets "<location name>" in Name field in Program Management page
		When user selects 'Save' button in Program Management page
		Then user can not see the New Location form in Program Management page
		And user can see banner contains "Success!"
		And user can see table header contains
			| Header        |
			| Name          |
			| # Experiments |
		And user can see "<location name>" in Name column in Program Management page
		And user can see each row has an Edit link
		And user can see each row has a Deactivate link
		Examples:
			| location name |
			| Location*     |

	@BI-909
	Scenario: Edit Location form - Cancel
		Given user selects 'New Location' button in Program Management page
		And user sets "<location name>" in Name field in Program Management page
		And user selects 'Save' button in Program Management page
		And user selects 'Edit' of "<location name>" in Program Management page
		And user sets "EditCancelLocation" in Name field in Program Management page
		And user selects 'Cancel' button in Program Management page
		Then user can not see the New Location form in Program Management page
		And user can see "<location name>" in Name column in Program Management page
		And user can not see "EditCancelLocation" in Name column in Program Management page
		Examples:
			| location name |
			| Location*     |

	@BI-910
	Scenario: Edit Location form - Save
		Given user selects 'New Location' button in Program Management page
		And user sets "EditLocation" in Name field in Program Management page
		And user selects 'Save' button in Program Management page
		And user selects 'Edit' of "EditLocation" in Program Management page
		And user sets "<edit location name>" in Name field in Program Management page
		And user selects 'Save' button in Program Management page
		Then user can not see the New Location form in Program Management page
		And user can not see "EditLocation" in Name column in Program Management page
		And user can see "<edit location name>" in Name column in Program Management page
		Examples:
			| edit location name |
			| EditLocation*      |

	@BI-911
	Scenario: Location Deactivate link - modal
		Given user selects 'New Location' button in Program Management page
		And user sets "<location name>" in Name field in Program Management page
		And user selects 'Save' button in Program Management page
		And user selects 'Deactivate' of "<location name>" in Program Management page
		Then user can see a modal box
		Then user can see "Remove" in modal box header in Program Management page
		Then user can see "<location name>" in modal box header in Program Management page
		Then user can see "from Snacks?" in modal box header in Program Management page
		Then user can see "Program-related data referencing this location will not be affected by this change." in modal box text
		Then user can see "Yes, remove" button in modal box
		Then user can see "Cancel" button in modal box
		And user selects "Cancel" button in modal box
		Examples:
			| location name |
			| Location*     |

	@BI-912
	Scenario: Location Deactivate  link - Cancel
		Given user selects 'New Location' button in Program Management page
		And user sets "<location name>" in Name field in Program Management page
		And user selects 'Save' button in Program Management page
		And user selects 'Deactivate' of "<location name>" in Program Management page
		And user selects "Cancel" button
		Then user can not see a modal box  
		And user can see "<location name>" in Name column in Program Management page
		Examples:
			| location name |
			| Location*     |

	@BI-913
	Scenario: Location Deactivate  link - Yes, remove
		Given user selects 'New Location' button in Program Management page
		And user sets "<location name>" in Name field in Program Management page
		And user selects 'Save' button in Program Management page
		And user selects 'Deactivate' of "<location name>" in Program Management page
		And user selects "Yes, remove" button in modal box
		Then user can not see a modal box
		And user can see banner contains "removed from program"
		And user can not see "<location name>" in Name column in Program Management page
		Examples:
			| location name |
			| Location*     |
