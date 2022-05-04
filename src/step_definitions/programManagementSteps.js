const { client } = require("nightwatch-api");
const { Given, Then, When } = require("@cucumber/cucumber");
const path = require("path");
const importFolder = path.join(__basedir, "src", "files", "TraitImport");
const fs = require("fs");
const page = client.page.page();
const program = {};
const location = {};

When(/^user is on the program-management page$/, async () => {
  await page.assert.visible("#adminProgramTableLabel");
});

When(/^user selects 'New Program' button in Programs page$/, async () => {
  await page.click("@newProgramButton");
});

When(
  /^user sets "([^"]*)" in Program Name field in Programs page$/,
  async (args1) => {
    await page.section.programForm.clearValue("@programNameField");
    program.Name = args1.replace("*", generateRandomAlphaString(8));
    await page.section.programForm.setValue("@programNameField", program.Name);
  }
);

When(
  /^user selects "([^"]*)" in Species dropdown in Programs page$/,
  async (args1) => {
    await page.section.programForm.setValue("@speciesSelect", args1);
  }
);

When(
  /^user sets "([^"]*)" in Program Key field in Programs page$/,
  async (args1) => {
    await page.section.programForm.clearValue("@programKeyField");
    program.Key = args1.replace("*", generateRandomAlphaString(4));
    await page.section.programForm.setValue("@programKeyField", program.Key);
  }
);

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
    selector: `.//td[@data-label='Name'][normalize-space(.)='${programName}']/ancestor::tr//td/a[normalize-space(.)='Edit']`,
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
      await page.section.programForm.isItemInRow({ Name: args1 });
    } else await page.section.programForm.isItemInRow({ Name: program.Name });
  }
);
Then(
  /^user can see 'Program Key is required' text in Programs page$/,
  async () => {
    await page.section.programForm.assert.visible("@programKeyRequired");
    await page.section.programForm.assert.containsText(
      "@programKeyRequired",
      "Program Key is required"
    );
  }
);

When(/^user selects 'Cancel' button in Programs page$/, async () => {
  await page.section.programForm.click("@cancelButton");
});

Then(/^user can not see 'Program Form' in Programs page$/, async () => {
  await page.assert.not.elementPresent("#adminProgramTableLabel form.new-form");
});

Then(/^user can not see "([^"]*)" Program in Programs page$/, async (args1) => {
  await page.section.programForm.isProgramNotExists(args1);
});

Then(/^user can see "([^"]*)" Program in Programs page$/, async (args1) => {
  await page.section.programForm.isProgramExists(args1);
});

Then(/^user can see new program in Programs page$/, async (table) => {
  let selector = `.//td[normalize-space(.)='${program.Name}']`;
  for (column of table.raw()[0]) {
    for (i = 0; i < table.hashes().length; i++) {
      switch (column) {
        case "Name":
          await page.section.programForm.assert.containsText(
            {
              selector: selector,
              locateStrategy: "xpath",
            },
            program.Name
          );
          break;
        case "Key":
          await page.section.programForm.assert.containsText(
            {
              selector:
                selector + "/ancestor::tr//td[@data-label='Program Key']",
              locateStrategy: "xpath",
            },
            program.Key
          );
          break;
        case "Species":
          await page.section.programForm.assert.containsText(
            {
              selector: selector + "/ancestor::tr//td[@data-label='Species']",
              locateStrategy: "xpath",
            },
            table.hashes()[i][column]
          );
          break;
        case "# Users":
          await page.section.programForm.assert.containsText(
            {
              selector: selector + "/ancestor::tr//td[@data-label='# Users']",
              locateStrategy: "xpath",
            },
            table.hashes()[i][column]
          );
          break;
        case "BrAPI URL":
          await page.section.programForm.assert.containsText(
            {
              selector: selector + "/ancestor::tr//td[@data-label='BrAPI URL']",
              locateStrategy: "xpath",
            },
            table.hashes()[i][column]
          );
          break;
        default:
          throw new Error(`Unexpected ${column} name.`);
      }
      await page.section.programForm.assert.visible({
        selector: selector + "/ancestor::tr//td/a[normalize-space(.)='Edit']",
        locateStrategy: "xpath",
      });
      await page.section.programForm.assert.visible({
        selector:
          selector + "/ancestor::tr//td/a[normalize-space(.)='Deactivate']",
        locateStrategy: "xpath",
      });
    }
  }
});

Then(
  /^user can see "([^"]*)" in Species column in Program page$/,
  async (args1) => {
    //will find match on new row only
    await page.section.programForm.isItemInRow({
      Species: args1,
      Name: program.Name,
    });
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
      selector: `.//td[@data-label='Name'][normalize-space(.)='${programName}']/ancestor::tr//td/a[normalize-space(.)='Deactivate']`,
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
      selector: `.//tr/td[@data-label='Name'][normalize-space(.)='${programName}']`,
      locateStrategy: "xpath",
    };
    await page.section.programForm.assert.not.elementPresent(selector);
  }
);
Then(/^user can see 'Program Name' label in Programs page$/, async () => {
  await page.section.programForm.assert.visible("@programNameLabel");
});

Then(/^user can see 'Program Name' field in Programs page$/, async () => {
  await page.section.programForm.assert.visible("@programNameField");
});

Then(/^user can see 'Program Key' label in Programs page$/, async () => {
  await page.section.programForm.assert.visible("@programKeyLabel");
});

Then(/^user can see 'Program Key' field in Programs page$/, async () => {
  await page.section.programForm.assert.visible("@programKeyField");
});

Then(/^user can not see 'Program Key' field in Programs page$/, async () => {
  await page.section.programForm.assert.not.elementPresent("@programKeyField");
});

Then(
  /^user can see 'Name of program. All Unicode special characters accepted.' text in Programs page$/,
  async () => {
    await page.section.programForm.assert.visible("@programNameMessageText");
  }
);

Then(
  /^user can see 'Unique 2-6 character key representing the program. Alphabetic characters only.' text in Programs page$/,
  async () => {
    await page.section.programForm.assert.visible("@programKeyMessageText");
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
  //Key only present for create, not edit
  let keyPresent;
  await page.section.programForm.api.element(
    "css selector",
    "@programKeyField",
    function (result) {
      keyPresent = result.value;
    }
  );

  if (keyPresent) {
    await page.section.programForm.getValue("@programKeyField", ({ value }) => {
      program.Key = value;
    });
  }
  await page.section.programForm.click("@saveButton");
});

Then(/^user can see 'Program Form' in Programs page$/, async () => {
  await page.expect.section("@programForm").visible;
});

Then(
  /^user can see 'Program Name is required' text in Programs page$/,
  async () => {
    await page.section.programForm.assert.visible("@programNameRequired");
    await page.section.programForm.assert.containsText(
      "@programNameRequired",
      "Program Name is required"
    );
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
    await page.click("@newLocationButton");
  }
);

When(/^user selects 'Save' button in Program Management page$/, async () => {
  await page.section.locationForm.click("@saveButton");
});

When(
  /^user sets "([^"]*)" in Name field in Program Management page$/,
  async (args1) => {
    if (args1.includes("*")) {
      location.Name = args1.replace("*", Date.now().toString());
    }

    //add clear value when used to replace existing text value
    await page.section.locationForm.clearValue("@nameField");
    await page.section.locationForm.setValue("@nameField", location.Name);
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
    if (typeof location !== "undefined" && args1.includes("*")) {
      locationName = location.Name;
    } else {
      locationName = args1;
    }
    await page.section.locationForm.isItemInNewRow({ Name: locationName });
  }
);

Then(
  /^user can not see "([^"]*)" in Name column in Program Management page$/,
  async (args1) => {
    let locationName;
    if (typeof location !== "undefined" && args1.includes("*")) {
      locationName = location.Name;
    } else {
      locationName = args1;
    }
    const selector = {
      selector: `//td[@data-label='Name'][normalize-space(.)='${locationName}']`,
      locateStrategy: "xpath",
    };
    await page.pause(5000);
    await page.assert.not.elementPresent(selector);
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
    await page.assert.visible("@newLocationButton");
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

When(
  /^user user can not see Location form in Program Management page$/,
  async () => {
    await page.section.programManagement.expect.section("@form").not.present;
  }
);

Then(/^user is her$/, () => {
  return true;
});

Then(
  /^user can not see 'New Location' button in Program Management page$/,
  async () => {
    await page.assert.not.elementPresent("@newLocationButton");
  }
);

When(
  /^user selects 'Edit' of "([^"]*)" in Program Management page$/,
  async (args1) => {
    await showAll();
    let selector;
    if (location != null) {
      selector = {
        selector: `.//td[@data-label='Name'][normalize-space(.)='${location.Name}']/ancestor::tr//td/a[normalize-space(.)='Edit']`,
        locateStrategy: "xpath",
      };
    } else {
      selector = {
        selector: `.//td[@data-label='Name'][normalize-space(.)='${args1}']/ancestor::tr//td/a[normalize-space(.)='Edit']`,
        locateStrategy: "xpath",
      };
    }
    await page.click(selector);
  }
);

When(
  /^user selects 'Deactivate' of "([^"]*)" in Program Management page$/,
  async (args1) => {
    await showAll();
    let selector;
    if (location != null) {
      selector = {
        selector: `.//td[@data-label='Name'][normalize-space(.)='${location.Name}']/ancestor::tr//td/a[normalize-space(.)='Deactivate']`,
        locateStrategy: "xpath",
      };
    } else {
      selector = {
        selector: `.//td[@data-label='Name'][normalize-space(.)='${args1}']/ancestor::tr//td/a[normalize-space(.)='Deactivate']`,
        locateStrategy: "xpath",
      };
    }
    await page.click(selector);
  }
);

Then(
  /^user can see "([^"]*)" in modal box header in Program Management page$/,
  async (args1) => {
    let headerText;
    if (args1.includes("Location*")) {
      headerText = location.Name;
    } else {
      headerText = args1;
    }
    await page.assert.containsText("@modalHeader", headerText);
  }
);

//functions
async function showAll() {
  await page.moveToElement("@showAllButton", 1, 1);
  await page.pause(1000);
  await page.click("@showAllButton");
}
