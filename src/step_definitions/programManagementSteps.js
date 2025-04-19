const { Given, Then, When } = require("@cucumber/cucumber");
const path = require("path");
const importFolder = path.join(__dirname, "../", "files", "TraitImport");
const fs = require("fs");
const location = {};
const helpers = require("./helpers");
const { Sign } = require("crypto");

Then(/^user can see Program User Management page$/, async function() {
  await browser.page.page().assert.visible({
    selector: "//*[@id='main']//h1[contains(text(),'Program Administration')]",
    locateStrategy: "xpath",
  });
});

When(/^user is on the program-management page$/, async function() {
  await browser.page.page().assert.visible("#adminProgramTableLabel");
});

When(/^user selects 'New Program' button in Programs page$/, async function () {
  await browser.page.page().click("@newProgramButton");
});

When(
  /^user sets "([^"]*)" in Program Name field in Programs page$/,
  async function (args1) {
    await setProgramName(args1);
  }
);

When(
  /^user selects "([^"]*)" in Species dropdown in Programs page$/,
  async function (args1) {
    await setSpecies(args1);
  }
);

When(
  /^user sets "([^"]*)" in Program Key field in Programs page$/,
  async function (args1) {
    await setProgramKey(args1);
  }
);

When(
  /^user checks 'Specify custom program data storage location' checkbox in Programs page$/,
  async function() {
    await browser.page
      .page()
      .section.programForm.click("@specifyCustomDataCheckbox");
  }
);
When(
  /^user sets "([^"]*)" in BrAPI URL field in Programs page$/,
  async function(args1) {
    await browser.page
      .page()
      .section.programForm.setValue("@brAPIURLField", args1);
  }
);

Then(
  /^user can see "([^"]*)" text under BrAPI URL field in Programs page$/,
  async function(args1) {
    await browser.page
      .page()
      .section.programForm.assert.textContains("@brAPIURLErrorMessage", args1);
  }
);

When(
  /^user selects 'Edit' of "([^"]*)" in Programs page$/,
  async function (args1) {
    await showAll();
    let programName;
    if (args1.includes("*")) {
      programName = getProgram().Name;
    } else {
      programName = args1;
    }
    const selector = {
      selector: `.//td[@data-label='Name'][normalize-space(.)='${programName}']/ancestor::tr//td/a[normalize-space(.)='Edit']`,
      locateStrategy: "xpath",
    };
    await browser.page.page().click(selector);
  }
);

Then(
  /^user can see "([^"]*)" in Program Name field in Programs page$/,
  async function(args1) {
    if ( browser.globals.program.Name != null) {
      await browser.page
        .page()
        .section.programForm.assert.value("@programNameField",  browser.globals.program.Name);
    } else {
      await browser.page
        .page()
        .section.programForm.assert.value("@programNameField", args1);
    }
  }
);

Then(
  /^user can see "([^"]*)" in Species dropdown in Programs page$/,
  async function(args1) {
    await browser.page
      .page()
      .section.programForm.assert.textContains("@speciesSelect", args1);
  }
);

Then(
  /^user can see "([^"]*)" in Name column in Program page$/,
  async function(args1) {
    //will find match on 1st row only
    if (args1.includes("*")) {
      programName = getProgram().Name;
    } else {
      programName = args1;
    }
    await browser.page
      .page()
      .section.programForm.isItemInRow({ Name: programName });
  }
);
Then(
  /^user can see 'Program Key is required' text in Programs page$/,
  async function() {
    await browser.page
      .page()
      .section.programForm.assert.visible("@programKeyRequired");
    await browser.page
      .page()
      .section.programForm.assert.textContains(
        "@programKeyRequired",
        "Program Key is required"
      );
  }
);

When(/^user selects 'Cancel' button in Programs page$/, async function() {
  await browser.page.page().section.programForm.click("@cancelButton");
});

Then(/^user can not see 'Program Form' in Programs page$/, async function() {
  await browser.page
    .page()
    .assert.not.elementPresent("#adminProgramTableLabel form.new-form");
});

Then(/^user can not see "([^"]*)" Program in Programs page$/, async function(args1) {
  await browser.page.page().section.programForm.isProgramNotExists(args1);
});

Then(/^user can see "([^"]*)" Program in Programs page$/, async function(args1) {
  await browser.page.page().section.programForm.isProgramExists(args1);
});

Then(/^user can see new program in Programs page$/, async function(table) {
  await showAll();
  let selector = `.//td[normalize-space(.)='${
    getProgram().Name
  }']`;
  for (column of table.raw()[0]) {
    for (i = 0; i < table.hashes().length; i++) {
      switch (column) {
        case "Name":
          await browser.page
            .page()
            .section.programForm.assert.textContains(
              {
                selector: selector,
                locateStrategy: "xpath",
              },
              getProgram().Name
            );
          break;
        case "Key":
          await browser.page
            .page()
            .section.programForm.assert.textContains(
              {
                selector:
                  selector + "/ancestor::tr//td[@data-label='Program Key']",
                locateStrategy: "xpath",
              },
              getProgram().Key
            );
          break;
        case "Species":
          await browser.page
            .page()
            .section.programForm.assert.textContains(
              {
                selector: selector + "/ancestor::tr//td[@data-label='Species']",
                locateStrategy: "xpath",
              },
              table.hashes()[i][column]
            );
          break;
        case "# Users":
          await browser.page
            .page()
            .section.programForm.assert.textContains(
              {
                selector: selector + "/ancestor::tr//td[@data-label='# Users']",
                locateStrategy: "xpath",
              },
              table.hashes()[i][column]
            );
          break;
        case "BrAPI URL":
          await browser.page
            .page()
            .section.programForm.assert.textContains(
              {
                selector:
                  selector + "/ancestor::tr//td[@data-label='BrAPI URL']",
                locateStrategy: "xpath",
              },
              table.hashes()[i][column]
            );
          break;
        default:
          throw new Error(`Unexpected ${column} name.`);
      }
      await browser.page.page().section.programForm.assert.visible({
        selector: selector + "/ancestor::tr//td/a[normalize-space(.)='Edit']",
        locateStrategy: "xpath",
      });
      await browser.page.page().section.programForm.assert.visible({
        selector:
          selector + "/ancestor::tr//td/a[normalize-space(.)='Deactivate']",
        locateStrategy: "xpath",
      });
    }
  }
});

Then(
  /^user can see "([^"]*)" in Species column in Program page$/,
  async function(args1) {
    //will find match on new row only
    await browser.page.page().section.programForm.isItemInRow({
      Species: args1,
      Name: getProgram().Name,
    });
  }
);

When(
  /^user selects 'Deactivate' of "([^"]*)" in Programs page$/,
  async function(args1) {
    await showAll();
    if (args1.includes("*")) {
      programName = getProgram().Name;
    } else {
      programName = args1;
    }
    const selector = {
      selector: `.//td[@data-label='Name'][normalize-space(.)='${programName}']/ancestor::tr//td/a[normalize-space(.)='Deactivate']`,
      locateStrategy: "xpath",
    };
    await browser.page.page().section.programForm.click(selector);
  }
);

Then(
  /^user can see 'Yes, remove' button in modal in Programs page$/,
  async function() {
    await browser.page
      .page()
      .section.programForm.assert.visible("@yesRemoveButton");
  }
);

Then(/^user can see 'Cancel' button in modal in Programs page$/, async function() {
  await browser.page
    .page()
    .section.programForm.assert.visible("@cancelModalButton");
});

When(/^user selects 'Cancel' button in modal in Programs page$/, async function() {
  await browser.page
    .page()
    .section.programForm.click("@cancelModalButton");
});

When(
  /^user selects 'Yes, remove' button in modal in Programs page$/,
  async function() {
    await browser.page
      .page()
      .section.programForm.click("@yesRemoveButton");
  }
);

Then(
  /^user can not see "([^"]*)" in Name column in Program page$/,
  async function(args1) {
    if (browser.globals.program.Name == null) programName = args1;
    else programName = browser.globals.program.Name;
    const selector = {
      selector: `.//tr/td[@data-label='Name'][normalize-space(.)='${programName}']`,
      locateStrategy: "xpath",
    };
    await browser.page
      .page()
      .section.programForm.assert.not.elementPresent(selector);
  }
);
Then(/^user can see 'Program Name' label in Programs page$/, async function() {
  await browser.page
    .page()
    .section.programForm.assert.visible("@programNameLabel");
});

Then(/^user can see 'Program Name' field in Programs page$/, async function() {
  await browser.page
    .page()
    .section.programForm.assert.visible("@programNameField");
});

Then(/^user can see 'Program Key' label in Programs page$/, async function() {
  await browser.page
    .page()
    .section.programForm.assert.visible("@programKeyLabel");
});

Then(/^user can see 'Program Key' field in Programs page$/, async function() {
  await browser.page
    .page()
    .section.programForm.assert.visible("@programKeyField");
});

Then(/^user can not see 'Program Key' field in Programs page$/, async function() {
  await browser.page
    .page()
    .section.programForm.assert.not.elementPresent("@programKeyField");
});

Then(
  /^user can see 'Name of program. All Unicode special characters accepted.' text in Programs page$/,
  async function() {
    await browser.page
      .page()
      .section.programForm.assert.visible("@programNameMessageText");
  }
);

Then(
  /^user can see 'Unique 2-6 character key representing the program. Alphabetic characters only.' text in Programs page$/,
  async function() {
    await browser.page
      .page()
      .section.programForm.assert.visible("@programKeyMessageText");
  }
);

Then(/^user can see 'Species' label in Programs page$/, async function() {
  await browser.page
    .page()
    .section.programForm.assert.visible("@speciesLabel");
});

Then(/^user can see 'Species' dropdown in Programs page$/, async function() {
  await browser.page
    .page()
    .section.programForm.assert.visible("@speciesSelect");
});

Then(
  /^user can see "([^"]*)" in 'Species' dropdown in Programs page$/,
  async function(args1) {
    await browser.page.page().section.programForm.isSpeciesListed(args1);
  }
);

Then(
  /^user can see 'Specify custom program data storage location' checkbox in Programs page$/,
  async function() {
    await browser.page
      .page()
      .section.programForm.assert.visible("@specifyCustomDataCheckbox");
  }
);

Then(/^user can see 'Save' button in Programs page$/, async function() {
  await browser.page
    .page()
    .section.programForm.assert.visible("@saveButton");
});

Then(/^user can see 'Cancel' button in Programs page$/, async function() {
  await browser.page
    .page()
    .section.programForm.assert.visible("@cancelButton");
});

When(/^user selects 'Save' button in Programs page$/, async function () {
  await clickSaveProgram();
});

Then(/^user can see 'Program Form' in Programs page$/, async function() {
  await browser.page.page().expect.section("@programForm").visible;
});

Then(
  /^user can see 'Program Name is required' text in Programs page$/,
  async function() {
    await browser.page
      .page()
      .section.programForm.assert.visible("@programNameRequired");
    await browser.page
      .page()
      .section.programForm.assert.textContains(
        "@programNameRequired",
        "Program Name is required"
      );
  }
);

Then(/^user can see "([^"]*)" archived in system in banner$/, async function(args1) {
  if (args1.includes("*"))
    args1 = getProgram().Name;
  await browser.page.page().assert.visible({
    selector: `//article//div[normalize-space(.)='${args1} archived in system' and contains(@class, 'banner-text')]`,
    locateStrategy: "xpath",
  });
});

When(
  /^user selects 'New Location' button in Program Management page$/,
  async function() {
    await browser.page.page().click("@newLocationButton");
  }
);

When(/^user selects 'Save' button in Program Management page$/, async function() {
  await browser.page.page().section.locationForm.click("@saveButton");
});

When(
  /^user sets "([^"]*)" in Name field in Program Management page$/,
  async function (args1) {
    if (args1.includes("*")) {
      location.Name = args1.replace("*", browser.globals.timestamp);
    }

    //add clear value when used to replace existing text value
    await browser.page
      .page()
      .section.locationForm.clearValue("@nameField");
    await browser.page
      .page()
      .section.locationForm.setValue("@nameField", location.Name);
  }
);

Then(
  /^user can not see the New Location form in Program Management page$/,
  async function() {
    await browser.page
      .page()
      .section.locationForm.assert.not.elementPresent("@form");
  }
);

Then(
  /^user can see "([^"]*)" in Name column in Program Management page$/,
  async function(args1) {
    let locationName;
    if (typeof location !== "undefined" && args1.includes("*")) {
      locationName = location.Name;
    } else {
      locationName = args1;
    }
    await browser.page
      .page()
      .section.locationForm.isItemInNewRow({ Name: locationName });
  }
);

Then(
  /^user can not see "([^"]*)" in Name column in Program Management page$/,
  async function(args1) {
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
    await browser.page.page().pause(5000);
    await browser.page.page().assert.not.elementPresent(selector);
  }
);

When(
  /^user can see Program Management header in Program Management page$/,
  async function() {
    await browser.page.page().assert.visible("@programManagementHeader");
  }
);

Then(/^user can see 'Locations' tab in Program Management page$/, async function() {
  await browser.page
    .page()
    .section.programManagement.assert.visible("@locationsLink");
});

Then(/^user can see 'Users' tab in Program Management page$/, async function() {
  await browser.page
    .page()
    .section.programManagement.assert.visible("@usersLink");
});

Then(
  /^user can see 'Configuration' tab on Program Management page$/,
  async function() {
    await browser.page
      .page()
      .section.programManagement.assert.visible("@programConfigurationLink");
  }
);

Then(
  /^user can see 'New Location' button in Program Management page$/,
  async function() {
    await browser.page.page().assert.visible("@newLocationButton");
  }
);

Then(
  /^user can see 'Name is required' below the Name field in Program Management page$/,
  async function() {
    await browser.page
      .page()
      .section.programManagement.section.form.assert.visible(
        "@nameIsRequiredText"
      );
  }
);

When(/^user selects 'Cancel' button in Program Management page$/, async function() {
  await browser.page
    .page()
    .section.programManagement.section.form.click("@cancelButton");
});

When(
  /^user user can not see Location form in Program Management page$/,
  async function() {
    await browser.page
      .page()
      .section.programManagement.expect.section("@form").not.present;
  }
);

Then(/^user is her$/, async function() {
  return true;
});

Then(
  /^user can not see 'New Location' button in Program Management page$/,
  async function() {
    await browser.page
      .page()
      .assert.not.elementPresent("@newLocationButton");
  }
);

When(
  /^user selects 'Edit' of "([^"]*)" in Program Management page$/,
  async function(args1) {
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
    await browser.page.page().click(selector);
  }
);

When(
  /^user selects 'Deactivate' of "([^"]*)" in Program Management page$/,
  async function(args1) {
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
    await browser.page.page().click(selector);
  }
);

Then(
  /^user can see "([^"]*)" in modal box header in Program Management page$/,
  async function(args1) {
    let headerText;
    if (args1.includes("Location*")) {
      headerText = location.Name;
    } else {
      headerText = args1;
    }
    await browser.page
      .page()
      .assert.textContains("@modalHeader", headerText);
  }
);

When(/^user creates a new program$/, async function (table) {
  browser.page.page().waitForElementVisible("@newProgramButton");
  browser.page.page().click("@newProgramButton");
  let programForm = browser.page.page().section.programForm;
  let program;
  for (column of table.raw()[0]) {
    for (hash of table.hashes()) {
      switch (column) {
        case "Program Name":
          programForm.setValue(
            "@programNameField",
            hash["Program Name"].replace("*", browser.globals.timestamp)
          );
          break;
        case "Species":
          programForm.setValue("@speciesSelect", hash["Species"]);
          break;
        case "Program Key":
          programForm.setValue(
            "@programKeyField",
            hash["Program Key"].replace(
              "*",
              helpers.generateRandomAlphaString(5)
            )
          );
          break;
        default:
          throw new Error(`Unexpected ${column} name.`);
      }
    }
  }
  await clickSaveProgram();
});

Then(/^user can see a new program is created$/, async function() {
  await showAll();
  let selector = `.//td[normalize-space(.)='${browser.globals.program.Name}']`;
  await browser.page
    .page()
    .assert.textContains(
      { selector: selector, locateStrategy: "xpath" },
      browser.globals.program.Name
    );
  await browser.page.page().assert.textContains(
    {
      selector: selector + "/ancestor::tr//td[@data-label='Species']",
      locateStrategy: "xpath",
    },
    browser.globals.program.Species
  );
  await browser.page.page().assert.textContains(
    {
      selector: selector + "/ancestor::tr//td[@data-label='Program Key']",
      locateStrategy: "xpath",
    },
    browser.globals.program.Key
  );
  console.log("and this" + browser.globals.program.Name);
});

Then(
  /^user can see "([^"]*)" in modal box header in Programs page$/,
  async function (args1) {
    await browser.page.page().section.programForm.assert.textContains(
      "@modalHeader",
      args1.replace("*", () => {
        if (args1.includes("*"))
          return getProgram().Name;
        return args1;
      })
    );
  }
);

Then(
  /^user can see "([^"]*)" in modal box text in Programs page$/,
  async function(args1) {
    await browser.page
      .page()
      .section.programForm.assert.textContains("@modalText", args1);
  }
);

When(
  /^user selects "([^"]*)" tab on Program Management page$/,
  async function (args1) {
    switch (args1) {
      case "Locations":
        await browser.page
          .page()
          .section.programManagement.click("@locationsLink");
        break;
      case "Users":
        await browser.page
          .page()
          .section.programManagement.click("@usersLink");
        break;
      case "Configuration":
        await browser.page
          .page()
          .section.programManagement.click("@programConfigurationLink");
        break;
      default:
        throw new Error(`Unexpected ${args1} tab name.`);
    }
  }
);

Then(
  /^user can see Configuration on Program Management page$/,
  async function () {
    await browser.page.page().expect.section("@programConfigurationForm")
      .visible;
  }
);

Then(
  /^user can see "([^"]*)" section on Configuration tab on Program Management page$/,
  async function (args1) {
    switch (args1) {
      case "Shared Ontology":
        await browser.page
          .page()
          .section.programConfigurationForm.assert.visible(
            "@sharedOntologySection"
          );
        break;
      default:
        throw new Error(`Unexpected ${args1} section name.`);
    }
  }
);

Then(
  /^user can see "([^"]*)" message on Configuration tab on Program Management page$/,
  async function (args1) {
    if (args1.includes("*")) {
      args1 = browser.globals.program.Name;
    }
    await browser.page
      .page()
      .section.programConfigurationForm.assert.textContains(
        "@notSharedMessage",
        args1
      );
  }
);

When(
  /^user selects 'Share Ontology' button on Program Management page$/,
  async function () {
    await browser.page
      .page()
      .section.programConfigurationForm.click("@shareOntologyButton");
  }
);

Then(
  /^user can see the 'Manage  Share Ontology' in Managed Shared Ontlogy page$/,
  async function () {
    await browser.page.page().expect.section("@manageSharedOntologyModal")
      .visible;
  }
);

Then(
  /^user can see "([^"]*)" is currently shared but not accepted message$/,
  async function (args1) {
    if (args1.includes("*")) {
      args1 =  browser.globals.program.Name;
    }
    await browser.page.page().assert.visible({
      selector: `//li[normalize-space()='${args1} (Not Accepted)']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "([^"]*)" is currently shared and accepted message$/,
  async function (args1) {
    if (args1.includes("*")) {
      args1 =  browser.globals.program.Name;
    }
    await browser.page.page().assert.visible({
      selector: `//li[normalize-space()='${args1} (Accepted)']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "([^"]*)" checkbox in Managed Shared Ontlogy page$/,
  async function (args1) {
    if (args1.includes("*")) {
      args1 =  browser.globals.program.Name;
    }
    await browser.page.page().assert.visible({
      selector: `//label[normalize-space()='${args1}']//input`,
      locateStrategy: "xpath",
    });
  }
);

When(
  /^user selects "([^"]*)" checkbox in Managed Shared Ontlogy page$/,
  async function (args1) {
    if (args1.includes("*")) {
      args1 = browser.globals.program.Name;
    }
    console.log("args1 here " + args1);
    browser.page.page().click({
      selector: `//label[normalize-space()='${args1}']//input`,
      locateStrategy: "xpath",
    });
  }
);

When(
  /^user selects "([^"]*)" button in Managed Shared Ontlogy page$/,
  async function (args1) {
    await browser.page.page().click("#confirmSharedOntology");
  }
);

When(
  /^user selects "([^"]*)" in Choose ontology to subscribe to dropdown on Program Management page$/,
  async function (args1) {
    await browser.page.page().click({
      selector: "//select[contains(@id,'Choose-ontology')]",
      locateStrategy: "xpath",
    });
    await browser.page.page().click({
      selector: `//option[normalize-space()='${args1}']`,
      locateStrategy: "xpath",
    });
  }
);

When(
  /^user selects "([^"]*)" on program-selection page$/,
  async function (args1) {
    selectProgram(args1);
  }
);

When(
  /^user selects Save button of Subscribe to Shared Ontology on Program Management page$/,
  async function () {
    await browser.page.page().click("#subscribeOntologyBtn");
  }
);

Then(
  /^user can see "([^"]*)" button on Program Management page$/,
  async function (args1) {
    await browser.page.page().assert.visible("#unSubscribeOntologyBtn");
    await browser.page
      .page()
      .assert.textContains(
        "#unSubscribeOntologyBtn",
        args1.replace("*", parameters.timeStamp)
      );
  }
);

When(
  /^user selects Share Ontology button of Shared Ontology on Program Management page$/,
  async function () {
    await browser.page.page().click("#showShareModalBtn");
  }
);

async function getProgram() {
  return program;
}

async function selectProgram(name) {
  if (name.includes("*")) {
    name = browser.globals.program.Name;
  }
  selector = {
    selector: `//*[@id='app']//main//a[normalize-space(.)='${name}']`,
    locateStrategy: "xpath",
  };
  const page = browser.page.page();
  page.waitForElementVisible(selector, 30000);
  page.click(selector);
}

async function clickNewProgram() {
  await browser.page.page().click("@newProgramButton");
}

async function setProgramName(programName) {
  await browser.page
    .page()
    .section.programForm.clearValue("@programNameField");
  await browser.page
    .page()
    .section.programForm.setValue(
      "@programNameField",
      programName.replace("*", helpers.generateRandomAlphaString(5))
    );
}

async function setSpecies(species) {
  await browser.page
    .page()
    .section.programForm.setValue("@speciesSelect", species);
}

async function setProgramKey(programKey) {
  await browser.page
    .page()
    .section.programForm.clearValue("@programKeyField");
    if (browser.globals.program === undefined){
      browser.globals.program = {};
    }
  browser.globals.program.Key = programKey.replace("*", helpers.generateRandomAlphaString(5));
  await browser.page
    .page()
    .section.programForm.setValue("@programKeyField", browser.globals.program.Key);
}

async function clickSaveProgram() {
  await getProgramValues();
  await browser.page.page().section.programForm.click("@saveButton");
  await browser.page.page().pause(5000);
}

async function getProgramValues() {
  if (browser.globals.program === undefined){
    browser.globals.program = {};
  }
  let keyPresent = await helpers.getValue(browser.page.page().section.programForm, "@programKeyField");

  if (keyPresent) {
      browser.globals.program.Key = await helpers.getValue(browser.page.page().section.programForm, "@programKeyField");
  }
  browser.globals.program.Name = await helpers.getValue(browser.page.page().section.programForm, "@programNameField");
  let option = await helpers.getValue(browser.page.page().section.programForm, "@speciesSelect");
  browser.globals.program.Species = await helpers.getText(browser.page.page().section.programForm, { selector: `.//option[@value='${option}']`, locateStrategy: "xpath" });
}

async function showAll() {
  await browser.page.page().moveToElement("@showAllButton", 1, 1);
  await browser.page.page().pause(1000);
  await browser.page.page().click("@showAllButton");
  await browser.page.page().pause(5000);
}