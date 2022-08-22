Feature: Program Management (15)

	Background: Sysad logs in
		Given user logs in as "sysad"
		And user selects "System Administration" on program-selection page
		And user selects "Programs" in navigation

	@BI-847
	Scenario: Admin Program Management
		When user is on the program-management page
		Then user can see page of Programs
		Then user can see 'New Program' button on Program
		And user can see table header contains
			| Header    |
			| Name      |
			| Key       |
			| Species   |
			| # Users   |
			| BrAPI URL |
		And user can see each row has an Edit link
		And user can see each row has a Deactivate link
		And user can see Previous page button
		And user can see Current page button
		And user can see Next page button
		And user can see Results per page combobox
		And user can see Label per page
		And user can see Show All button

	@BI-848
	Scenario: New Program form elements
		When user is on the program-management page
		When user selects 'New Program' button in Programs page
		Then user can see 'Program Name' label in Programs page
		Then user can see 'Program Name' field in Programs page
		Then user can see 'Name of program. All Unicode special characters accepted.' text in Programs page
		Then user can see 'Species' label in Programs page
		Then user can see 'Species' dropdown in Programs page
		Then user can see "Sweet Potato" in 'Species' dropdown in Programs page
		Then user can see "Blueberry" in 'Species' dropdown in Programs page
		Then user can see "Trout" in 'Species' dropdown in Programs page
		Then user can see "Salmon" in 'Species' dropdown in Programs page
		Then user can see "Grape" in 'Species' dropdown in Programs page
		Then user can see "Alfalfa" in 'Species' dropdown in Programs page
		Then user can see 'Program Key' label in Programs page
		Then user can see 'Program Key' field in Programs page
		Then user can see 'Unique 2-6 character key representing the program. Alphabetic characters only.' text in Programs page
		Then user can see 'Specify custom program data storage location' checkbox in Programs page
		Then user can see 'Save' button in Programs page
		Then user can see 'Cancel' button in Programs page

	@BI-849
	Scenario: New Program form, entering program name only
		When user is on the program-management page
		When user selects 'New Program' button in Programs page
		When user sets "Tests" in Program Name field in Programs page
		When user selects 'Save' button in Programs page
		Then user can see banner contains "Fix Invalid Fields"
		Then user can see 'Program Form' in Programs page

	@BI-850
	Scenario: New Program form, selecting species only
		When user is on the program-management page
		When user selects 'New Program' button in Programs page
		When user selects "Sweet Potato" in Species dropdown in Programs page
		When user selects 'Save' button in Programs page
		Then user can see banner contains "Fix Invalid Fields"
		Then user can see 'Program Form' in Programs page
		Then user can see 'Program Name is required' text in Programs page
		Then user can see 'Program Key is required' text in Programs page

	@BI-851
	Scenario: New Program form, Cancel
		When user is on the program-management page
		When user selects 'New Program' button in Programs page
		When user sets "Test" in Program Name field in Programs page
		When user selects "Sweet Potato" in Species dropdown in Programs page
		When user sets "TEST" in Program Key field in Programs page
		When user selects 'Cancel' button in Programs page
		Then user can not see 'Program Form' in Programs page
		Then user can not see "Test" Program in Programs page

	@BI-852
	Scenario Outline: New Program form, Save
		When user is on the program-management page
		When user selects 'New Program' button in Programs page
		When user sets "<Name>" in Program Name field in Programs page
		When user selects "<Species>" in Species dropdown in Programs page
		When user sets "<Key>" in Program Key field in Programs page
		When user selects 'Save' button in Programs page
		Then user can not see 'Program Form' in Programs page
		Then user can see banner contains "Success!"
		Then user can see new program in Programs page
			| Name     | Species      | # Users | BrAPI URL      | Key |
			| Program* | Sweet Potato | 0       | System Default | *   |

		Examples:
			| Name     | Species      | Key |
			| Program* | Sweet Potato | T*  |

	@BI-853
	Scenario Outline: New Program, invalid url in custom storage location
		When user is on the program-management page
		When user selects 'New Program' button in Programs page
		When user sets "<Name>" in Program Name field in Programs page
		When user selects "<Species>" in Species dropdown in Programs page
		When user sets "<Key>" in Program Key field in Programs page
		When user checks 'Specify custom program data storage location' checkbox in Programs page
		When user sets "<BrAPI URL>" in BrAPI URL field in Programs page
		When user selects 'Save' button in Programs page
		Then user can see 'Program Form' in Programs page
		Then user can see "BrAPI URL must be in url format, ex: https://test-server.brapi.org" text under BrAPI URL field in Programs page
		Then user can see banner contains "Fix Invalid Fields"

		Examples:
			| Name     | Species      | BrAPI URL | Key |
			| Program* | Sweet Potato | test      | T*  |

	@BI-854
	Scenario Outline: New Program, invalid BrAPI storage location
		When user is on the program-management page
		When user selects 'New Program' button in Programs page
		When user sets "<Name>" in Program Name field in Programs page
		When user selects "<Species>" in Species dropdown in Programs page
		When user sets "<Key>" in Program Key field in Programs page
		When user checks 'Specify custom program data storage location' checkbox in Programs page
		When user sets "<BrAPI URL>" in BrAPI URL field in Programs page
		When user selects 'Save' button in Programs page
		Then user can see 'Program Form' in Programs page
		Then user can see "BrAPI URL specified is not supported" text under BrAPI URL field in Programs page

		Examples:
			| Name     | Species      | BrAPI URL                 | Key |
			| Program* | Sweet Potato | https://invalid.brapi.org | T*  |

	@BI-855
	Scenario Outline: New Program, valid custom storage location
		When user is on the program-management page
		When user selects 'New Program' button in Programs page
		When user sets "<Name>" in Program Name field in Programs page
		When user selects "<Species>" in Species dropdown in Programs page
		When user sets "<Key>" in Program Key field in Programs page
		When user checks 'Specify custom program data storage location' checkbox in Programs page
		When user sets "<BrAPI URL>" in BrAPI URL field in Programs page
		When user selects 'Save' button in Programs page
		Then user can not see 'Program Form' in Programs page
		Then user can see banner contains "Success!"
		Then user can see new program in Programs page
			| Name   | Species   | # Users | BrAPI URL   | Key   |
			| <Name> | <Species> | 0       | <BrAPI URL> | <Key> |

		Examples:
			| Name | Species      | BrAPI URL                               | Key |
			| *    | Sweet Potato | https://qa-testbase.breedinginsight.net | *   |

	@BI-856
	Scenario Outline: Edit Program form
		When user is on the program-management page
		When user selects 'New Program' button in Programs page
		When user sets "<Name>" in Program Name field in Programs page
		When user selects "<Species>" in Species dropdown in Programs page
		When user sets "<Key>" in Program Key field in Programs page
		When user selects 'Save' button in Programs page
		When user selects 'Edit' of "<Name>" in Programs page
		Then user can see 'Program Form' in Programs page
		Then user can see "<Name>" in Program Name field in Programs page
		Then user can see "Sweet Potato" in Species dropdown in Programs page
		Then user can not see 'Program Key' field in Programs page
		Then user can see 'Save' button in Programs page
		Then user can see 'Cancel' button in Programs page

		Examples:
			| Name     | Species      | Key |
			| Program* | Sweet Potato | T*  |

	@BI-857
	Scenario Outline: Edit Program form
		When user is on the program-management page
		When user selects 'New Program' button in Programs page
		When user sets "<Name>" in Program Name field in Programs page
		When user selects "<Species>" in Species dropdown in Programs page
		When user sets "<Key>" in Program Key field in Programs page
		When user selects 'Save' button in Programs page
		When user selects 'Edit' of "<Name>" in Programs page
		When user sets "NewName" in Program Name field in Programs page
		When user selects 'Cancel' button in Programs page
		Then user can see "<Name>" in Name column in Program page
		Then user can see "<Species>" in Species column in Program page

		Examples:
			| Name     | Species      | Key |
			| Program* | Sweet Potato | T*  |

	@BI-858
	Scenario Outline: Edit Program form, change Program Name, Save
		When user is on the program-management page
		When user selects 'New Program' button in Programs page
		When user sets "<Name>" in Program Name field in Programs page
		When user selects "<Species>" in Species dropdown in Programs page
		When user sets "<Key>" in Program Key field in Programs page
		When user selects 'Save' button in Programs page
		When user selects 'Edit' of "<Name>" in Programs page
		When user sets "<New Name>" in Program Name field in Programs page
		When user selects 'Save' button in Programs page
		Then user can see "<New Name>" in Name column in Program page
		Then user can see "<Species>" in Species column in Program page

		Examples:
			| Name     | Species      | New Name    | Key |
			| Program* | Sweet Potato | NewProgram* | T*  |

	@BI-859
	Scenario Outline: Edit Program form, change Species, Save
		When user is on the program-management page
		When user selects 'New Program' button in Programs page
		When user sets "<Name>" in Program Name field in Programs page
		When user selects "<Species>" in Species dropdown in Programs page
		When user sets "<Key>" in Program Key field in Programs page
		When user selects 'Save' button in Programs page
		When user selects 'Edit' of "<Name>" in Programs page
		When user selects "<New Species>" in Species dropdown in Programs page
		When user selects 'Save' button in Programs page
		Then user can see "<Name>" in Name column in Program page
		Then user can see "<Species>" in Species column in Program page

		Examples:
			| Name     | Species      | New Species | Key |
			| Program* | Sweet Potato | Grape       | T*  |

	@BI-860
	Scenario Outline: Deactivate modal
		When user is on the program-management page
		When user selects 'New Program' button in Programs page
		When user sets "<Name>" in Program Name field in Programs page
		When user selects "Sweet Potato" in Species dropdown in Programs page
		When user sets "<Key>" in Program Key field in Programs page
		When user selects 'Save' button in Programs page
		When user selects 'Deactivate' of "<Name>" in Programs page
		Then user can see "Remove <Name> from the system?" in modal box header in Programs page
		Then user can see "Program-related data will not be affected by this change." in modal box text in Programs page
		Then user can see 'Yes, remove' button in modal in Programs page
		Then user can see 'Cancel' button in modal in Programs page

		Examples:
			| Name | Key |
			| *    | *   |

	@BI-861
	Scenario Outline: Deactivate, Cancel
		When user is on the program-management page
		When user selects 'New Program' button in Programs page
		When user sets "<Name>" in Program Name field in Programs page
		When user selects "Sweet Potato" in Species dropdown in Programs page
		When user sets "<Key>" in Program Key field in Programs page
		When user selects 'Save' button in Programs page
		When user selects 'Deactivate' of "<Name>" in Programs page
		When user selects 'Cancel' button in modal in Programs page
		Then user can not see a modal box
		Then user can see "<Name>" in Name column in Program page

		Examples:
			| Name     | Key |
			| Program* | D*  |

	@BI-862
	Scenario Outline: Deactivate, Remove
		When user is on the program-management page
		When user selects 'New Program' button in Programs page
		When user sets "<Name>" in Program Name field in Programs page
		When user selects "Sweet Potato" in Species dropdown in Programs page
		When user sets "<Key>" in Program Key field in Programs page
		When user selects 'Save' button in Programs page
		When user selects 'Deactivate' of "<Name>" in Programs page
		When user selects 'Yes, remove' button in modal in Programs page
		Then user can not see a modal box
		Then user can see "<Name>" archived in system in banner
		Then user can not see "<Name>" in Name column in Program page

		Examples:
			| Name     | Key |
			| Program* | D*  |


