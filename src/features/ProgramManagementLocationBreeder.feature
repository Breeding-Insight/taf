Feature: Program Location Management

	Background: Required Setup
		Given user logs in as "Cucumber Breeder"
		And user selects "Snacks" on program-selection page
		And user selects "Program Management" in navigation

	@hest
	@BI-905
	Scenario: Program Location Management page - admin
		When user can see Program Management header in Program Management page
		Then user can see 'Locations' tab in Program Management page
		Then user can see 'Users' tab in Program Management page
		Then user can see 'New Location' button in Program Management page

	@htest
	@BI-906
	Scenario: New Location form - enter nothing and select Save
		When user selects 'New Location' button in Program Management page
		When user selects 'Save' button in Program Management page
		Then user can see banner appears with an error message "Fix Invalid Fields"
		And user can see 'Name is required' below the Name field in Program Management page

	@htest
	@BI-907
	Scenario: New Location form - enter location - Cancel
		When user selects 'New Location' button in Program Management page
		When user sets "TestCancel" in Name field in Program Management page
		When user selects 'Cancel' button in Program Management page
		When user user can not see Location form in Program Management page

	@htest
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
		#And user can see "<location name>" in Name column in Program Management page
		#And user can see each row has an Edit link
		#And user can see each row has a Deactivate link
		Examples:
			| location name |
			| Location*     |

	@htest
	@BI-909
	Scenario: Edit Location form - Cancel
		Given user selects 'New Location' button in Program Management page
		And user sets "<location name>" in Name field in Program Management page
		And user selects 'Save' button in Program Management page
		And user selects 'Edit' of "<location name>" in Program Management page
		And user sets "<edit location name>" in Name field in Program Management page
		And user selects 'Cancel' button
		Then user can not see the New Location form in Program Management page
		#And user can see "<location name>" in Name column in Program Management page
		#And user can see "<edit location name>" in Name column in Program Management page
		Examples:
			| location name | edit location name |
			| Location*     | EditLocation*      |

	@htest
	@BI-910
	Scenario: Edit Location form - Save
		Given user selects 'New Location' button in Program Management page
		And user sets "<location name>" in Name field in Program Management page
		And user selects 'Save' button in Program Management page
		And user selects 'Edit' of "<location name>" in Program Management page
		And user sets "<edit location name>" in Name field in Program Management page
		And user selects 'Save' button
		Then user can not see the New Location form in Program Management page
		#And user can not see "<location name>" in Name column in Program Management page
		#And user can see "<edit location name>" in Name column in Program Management page
		Examples:
			| location name | edit location name |
			| Location*     | EditLocation*      |

	@htest
	@BI-911
	Scenario: Location Deactivate link - modal
		Given user selects 'New Location' button in Program Management page
		And user sets "<location name>" in Name field in Program Management page
		And user selects 'Save' button in Program Management page
		And user selects "Deactivate" of "<location name>" in Program Management page
		Then user can see a modal "Remove <location name> from Snacks? Program-related data referencing this location will not be affected by this change."
		Then user can see "Remove" in modal box header
		Then user can see "<location name>" in modal box header
		Then user can see "from Snacks?" in modal box header
		Then user can see "Program-related data referencing this location will not be affected by this change." in modal box text
		And user can see "Yes, remove" button in modal
		And user can see a "Cancel" button in modal
		And user clicks "Cancel" in modal
		Examples:
			| location name |
			| Location*     |

	@htest
	@BI-912
	Scenario: Location Deactivate  link - Cancel
		Given user selects 'New Location' button in Program Management page
		And user sets "<location name>" in Name field in Program Management page
		And user selects 'Save' button in Program Management page
		And user selects "Deactivate" of "<location name>" in Program Management page
		And user selects "Cancel" button
		Then user can not see a modal box
		And user can not see a success banner 
		#And user can see "<location name>" in Name column in Program Management page
		Examples:
			| location name |
			| Location*     |

	@htest
	@BI-913
	Scenario: Location Deactivate  link - Yes, remove
		Given user selects 'New Location' button in Program Management page
		And user sets "<location name>" in Name field in Program Management page
		And user selects 'Save' button in Program Management page
		And user selects "Deactivate" of "<location name>" in Program Management page
		And user selects "Yes, remove" button
		Then user can not see a modal box
		And user can see "<location name> removed from program" in banner
		#And user can not see "<location name>" in Name column in Program Management page
		Examples:
			| location name |
			| Location*     |

