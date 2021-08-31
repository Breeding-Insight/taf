const { client } = require("nightwatch-api");
const { Given, Then, When } = require("@cucumber/cucumber");
const path = require("path");
const page = client.page.page();
const program = {};

Then(/^user can see 'Program Name' label in Programs page$/, async () => {
  await page.section.programForm.assert.visible("@programNameLabel");
});

Then(/^user can see 'Program Name' field in Programs page$/, async () => {
  await page.section.programForm.assert.visible("@programNameField");
});

Then(
  /^user can see 'Name of program. All Unicode special characters accepted.' text in Programs page$/,
  async () => {
    await page.section.programForm.assert.visible("@programNameMessageText");
  }
);

Then(/^user can see 'Species' label in Programs page$/, async () => {
  await page.section.programForm.assert.visible("@speciesLabel");
});

Then(/^user can see 'Species' dropdown in Programs page$/, async () => {
  await page.section.programForm.assert.visible("@speciesSelect");
});

Then(
  /^user can see "([^"]*)" in 'Species' dropdown in Programs page$/,
  async (args1) => {
    await page.section.programForm.isSpeciesListed(args1);
  }
);

Then(
  /^user can see 'Specify custom program data storage location' checkbox in Programs page$/,
  async () => {
    await page.section.programForm.assert.visible("@specifyCustomDataCheckbox");
  }
);

Then(/^user can see 'Save' button in Programs page$/, async () => {
  await page.section.programForm.assert.visible("@saveButton");
});

Then(/^user can see 'Cancel' button in Programs page$/, async () => {
  await page.section.programForm.assert.visible("@cancelButton");
});

When(/^user selects 'Save' button in Programs page$/, async () => {
  //read the final values of the fields and save it
  await page.section.programForm.getValue("@programNameField", ({ value }) => {
    program.Name = value;
  });
  let option;
  await page.section.programForm.getValue("@speciesSelect", ({ value }) => {
    option = value;
  });

  await page.section.programForm.getText(
    { selector: `.//option[@value='${option}']`, locateStrategy: "xpath" },
    ({ value }) => {
      program.Species = String(value).trim();
    }
  );
  await page.section.programForm.click("@saveButton");
});

Then(/^user can see 'Program Form' in Programs page$/, async () => {
  await page.expect.section("@programForm").visible;
});

When(
  /^user selects "([^"]*)" in Species dropdown in Programs page$/,
  async (args1) => {
    await page.section.programForm.setValue("@speciesSelect", args1);
  }
);

Then(
  /^user can see 'Program Name is required' text in Programs page$/,
  async () => {
    await page.section.programForm.assert.visible("@programNameRequired");
  }
);

When(/^user selects 'Cancel' button in Programs page$/, async () => {
  await page.section.programForm.click("@cancelButton");
});

Then(/^user can not see 'Program Form' in Programs page$/, async () => {
  await page.expect.section("@programForm").not.elementPresent;
});

Then(/^user can not see "([^"]*)" Program in Programs page$/, async (args1) => {
  await page.section.programForm.isProgramNotExists(args1);
});

Then(/^user can see "([^"]*)" Program in Programs page$/, async (args1) => {
  await page.section.programForm.isProgramExists(args1);
});

Then(/^user can see new program in Programs page$/, async (table) => {
  for (column of table.raw()[0]) {
    for (i = 0; i < table.hashes().length; i++) {
      switch (column) {
        case "Name":
          await page.section.programForm.assert.containsText(
            {
              selector: `.//tr[@class='is-new']/td[@name='name']`,
              locateStrategy: "xpath",
            },
            program.Name
          );
          break;
        case "Species":
          await page.section.programForm.assert.containsText(
            {
              selector: `.//tr[@class='is-new']/td[@name='species']`,
              locateStrategy: "xpath",
            },
            table.hashes()[i][column]
          );
          break;
        case "# Users":
          await page.section.programForm.assert.containsText(
            {
              selector: `.//tr[@class='is-new']/td[@name='numUsers']`,
              locateStrategy: "xpath",
            },
            table.hashes()[i][column]
          );
          break;
        case "BrAPI URL":
          await page.section.programForm.assert.containsText(
            {
              selector: `.//tr[@class='is-new']/td[@name='brapiUrl']`,
              locateStrategy: "xpath",
            },
            table.hashes()[i][column]
          );
          break;
        default:
          throw new Error(`Unexpected ${column} name.`);
      }
      await page.section.programForm.assert.visible({
        selector: ".//tr[@class='is-new']/td/a[normalize-space(.)='Edit']",
        locateStrategy: "xpath",
      });
      await page.section.programForm.assert.visible({
        selector:
          ".//tr[@class='is-new']/td/a[normalize-space(.)='Deactivate']",
        locateStrategy: "xpath",
      });
    }
  }
});

When(
  /^user checks 'Specify custom program data storage location' checkbox in Programs page$/,
  async () => {
    await page.section.programForm.click("@specifyCustomDataCheckbox");
  }
);

When(
  /^user sets "([^"]*)" in BrAPI URL field in Programs page$/,
  async (args1) => {
    await page.section.programForm.setValue("@brAPIURLField", args1);
  }
);

Then(
  /^user can see "([^"]*)" text under BrAPI URL field in Programs page$/,
  async (args1) => {
    await page.section.programForm.assert.containsText(
      "@brAPIURLErrorMessage",
      args1
    );
  }
);

When(/^user selects 'Edit' of "([^"]*)" in Programs page$/, async (args1) => {
  let programName;
  if (program.Name != null) {
    programName = program.Name;
  } else {
    programName = args1;
  }
  const selector = {
    selector: `.//td[@name='name'][normalize-space(.)='${programName}']/ancestor::tr//td/a[normalize-space(.)='Edit']`,
    locateStrategy: "xpath",
  };
  await page.click(selector);
});

Then(
  /^user can see "([^"]*)" in Program Name field in Programs page$/,
  async (args1) => {
    if (program.Name != null) {
      await page.section.programForm.assert.value(
        "@programNameField",
        program.Name
      );
    } else {
      await page.section.programForm.assert.value("@programNameField", args1);
    }
  }
);

Then(
  /^user can see "([^"]*)" in Species dropdown in Programs page$/,
  async (args1) => {
    await page.section.programForm.assert.containsText("@speciesSelect", args1);
  }
);

Then(
  /^user can see "([^"]*)" in Name column in Program page$/,
  async (args1) => {
    //will find match on 1st row only
    if (program.Name == null) {
      await page.section.programForm.isItemInNewRow({ Name: args1 });
    } else
      await page.section.programForm.isItemInNewRow({ Name: program.Name });
  }
);

Then(
  /^user can see "([^"]*)" in Species column in Program page$/,
  async (args1) => {
    //will find match on new row only
    await page.section.programForm.isItemInNewRow({ Species: args1 });
  }
);

When(
  /^user selects 'Deactivate' of "([^"]*)" in Programs page$/,
  async (args1) => {
    let programName;
    if (program.Name != null) {
      programName = program.Name;
    } else {
      programName = args1;
    }
    const selector = {
      selector: `.//td[@name='name'][normalize-space(.)='${programName}']/ancestor::tr//td/a[normalize-space(.)='Deactivate']`,
      locateStrategy: "xpath",
    };
    await page.section.programForm.click(selector);
  }
);

Then(
  /^user can see 'Yes, remove' button in modal in Programs page$/,
  async () => {
    await page.section.programForm.assert.visible("@yesRemoveButton");
  }
);

Then(/^user can see 'Cancel' button in modal in Programs page$/, async () => {
  await page.section.programForm.assert.visible("@cancelModalButton");
});

When(/^user selects 'Cancel' button in modal in Programs page$/, async () => {
  await page.section.programForm.click("@cancelModalButton");
});

When(
  /^user selects 'Yes, remove' button in modal in Programs page$/,
  async () => {
    await page.section.programForm.click("@yesRemoveButton");
  }
);

Then(
  /^user can not see "([^"]*)" in Name column in Program page$/,
  async (args1) => {
    let programName;
    if (program.Name == null) programName = args1;
    else programName = program.Name;
    const selector = {
      selector: `.//tr/td[@name='name'][normalize-space(.)='${programName}']`,
      locateStrategy: "xpath",
    };
    await page.section.programForm.assert.not.elementPresent(selector);
  }
);

Then(/^user can see "([^"]*)" archived in system in banner$/, async (args1) => {
  let programName;
  if (program.Name == null) programName = args1;
  else programName = program.Name;

  await page.assert.visible({
    selector: `//article//div[normalize-space(.)='${programName} archived in system' and contains(@class, 'banner-text')]`,
    locateStrategy: "xpath",
  });
});

When(
  /^user selects 'New Location' button in Program Management page$/,
  async () => {
    await page.click("@newLocationButtonNoLocsPresent");
  }
);

When(/^user selects 'Save' button in Program Management page$/, async () => {
  await page.section.locationForm.click("@saveButton");
});

When(
  /^user sets "([^"]*)" in Name field in Program Management page$/,
  async (args1) => {
    this.location = {};
    this.location.Name = args1.replace("*", Date.now().toString());
    await page.section.locationForm.setValue(
      "@nameField", 
      this.location.Name)
  }
);

Then(
  /^user can not see the New Location form in Program Management page$/,
  async () => {
    await page.section.locationForm.assert.not.elementPresent("@form");
  }
);

Then(
  /^user can see "([^"]*)" in Name column in Program Management page$/,
  async (args1) => {
    let locationName;
    if (typeof this.location !== 'undefined') {
      locationName = this.location.Name;
    }
    else {
      locationName=args1;
    }
    await page.section.locationForm.isItemInNewRow({ Name: locationName });
  }
);

When(
  /^user can see Program Management header in Program Management page$/,
  async () => {
    await page.assert.visible("@programManagementHeader");
  }
);

Then(/^user can see 'Locations' tab in Program Management page$/, async () => {
  await page.section.programManagement.assert.visible("@locationsLink");
});

Then(/^user can see 'Users' tab in Program Management page$/, async () => {
  await page.section.programManagement.assert.visible("@usersLink");
});

Then(
  /^user can see 'New Location' button in Program Management page$/,
  async () => {
    await page.assert.visible("@newLocationButtonNoLocsPresent");
  }
);

Then(
  /^user can see 'Name is required' below the Name field in Program Management page$/,
  async () => {
    await page.section.programManagement.section.form.assert.visible(
      "@nameIsRequiredText"
    );
  }
);

When(/^user selects 'Cancel' button in Program Management page$/, async () => {
  await page.section.programManagement.section.form.click("@cancelButton");
});

When(/^user user can not see Location form in Program Management page$/, async() => {
	await page.section.programManagement.expect.section("@form").not.present;
});


Then(/^user is her$/, () => {
	return true;
});
