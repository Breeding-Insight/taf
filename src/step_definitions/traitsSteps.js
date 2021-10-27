const { client } = require("nightwatch-api");
const { Then, When } = require("@cucumber/cucumber");
const traitsPage = client.page.traitsPage();

When(/^user selects 'New Term' button on ontology list page$/, async () => {
  await client.execute("window.scrollTo(0,0);");
  await traitsPage.waitForElementPresent("@newTermButton");
  await traitsPage.click("@newTermButton");
});

When(
  /^user selects "([^"]*)" in scale dropdown on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue("@byScaleSelect", args1);
  }
);

When(
  /^user sets "([^"]*)" in first scale field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue("@firstScaleField", args1);
  }
);

When(
  /^user sets "([^"]*)" in second scale field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue("@secondScaleField", args1);
  }
);

When(
  /^user sets "([^"]*)" in third scale field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue("@thirdScaleField", args1);
  }
);

When(
  /^user sets "([^"]*)" in fifth scale field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue("@fifthScaleField", args1);
  }
);

When(/^user selects 'x' button for second scale category$/, async () => {
  await traitsPage.section.allTraitsForm.click("@secondScaleDeleteButton");
});

When(/^user selects 'x' button for third scale category$/, async () => {
  await traitsPage.section.allTraitsForm.click("@thirdScaleDeleteButton");
});

Then(
  /^user can not see the .* "ordinal label" on ontology list page$/,
  async () => {
    await traitsPage.section.allTraitsForm.assert.not.elementPresent(
      "@ordinalFields"
    );
  }
);

Then(
  /^user can see "([^"]*)" in the first Ordinal field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@firstOrdinalField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in the second Ordinal field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@secondOrdinalField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in the third Ordinal field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@thirdOrdinalField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in the fifth Ordinal field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@fifthOrdinalField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in first Scale field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@firstScaleField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in second Scale field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@secondScaleField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in third Scale field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@thirdScaleField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in fifth Scale field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@fifthScaleField",
      args1
    );
  }
);

Then(
  /^user can see 'Ontology Term Name' field on ontology list page$/,
  async () => {
    await traitsPage.section.allTraitsForm.assert.visible("@nameField");
  }
);

Then(/^user can see 'Full Name' field on ontology list page$/, async () => {
  await traitsPage.section.allTraitsForm.assert.visible("@fullNameField");
});

Then(/^user can see 'Description' field on ontology list page$/, async () => {
  await traitsPage.section.allTraitsForm.assert.visible("@descriptionField");
});

Then(/^user can see 'Tags' field on ontology list page$/, async () => {
  await traitsPage.section.allTraitsForm.assert.visible("@tagsField");
});

Then(/^user can see 'Entity' field on ontology list page$/, async () => {
  await traitsPage.section.allTraitsForm.assert.visible("@entityField");
});

Then(/^user can see 'Attribute' field on ontology list page$/, async () => {
  await traitsPage.section.allTraitsForm.assert.visible("@entityField");
});

Then(
  /^user can see 'Method Class' dropdown on ontology list page$/,
  async () => {
    await traitsPage.section.allTraitsForm.assert.visible("@methodClass");
  }
);

Then(
  /^user can see 'Scale Class' dropdown on ontology list page$/,
  async () => {
    await traitsPage.section.allTraitsForm.assert.visible("@methodClass");
  }
);

Then(/^user can see 'Save' button on ontology list page$/, async () => {
  await traitsPage.section.allTraitsForm.assert.visible("@saveButton");
});

Then(/^user can see 'Cancel' button on ontology list page$/, async () => {
  await traitsPage.section.allTraitsForm.assert.visible("@cancelButton");
});

When(
  /^user sets "([^"]*)" in 'Entity' field on ontology list page$/,
  async function (args1) {
    await traitsPage.section.allTraitsForm.setValue(
      "@entityField",
      args1.replace("*", this.parameters.timeStamp)
    );
  }
);

Then(
  /^user can see "([^"]*)" as suggested text in 'Entity' field on ontology list page$/,
  async function (args1) {
    await traitsPage.assert.containsText(
      "#traitTableLabel > form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(17) > div > div.field-body > div > div > div > div.dropdown-menu > div > a > span",
      args1.replace("*", this.parameters.timeStamp)
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Name' field on ontology list page$/,
  async function (args1) {
    await traitsPage.section.allTraitsForm.setValue(
      "@nameField",
      args1.replace("*", this.parameters.timeStamp).slice(-10)
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Full Name' field on ontology list page$/,
  async function (args1) {
    await traitsPage.section.allTraitsForm.setValue(
      "@fullNameField",
      args1.replace("*", this.parameters.timeStamp)
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Description' field on ontology list page$/,
  async function (args1) {
    await traitsPage.section.allTraitsForm.setValue(
      "@descriptionField",
      args1.replace("*", this.parameters.timeStamp)
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Attribute' field on ontology list page$/,
  async function (args1) {
    await traitsPage.section.allTraitsForm.setValue(
      "@attributeField",
      args1.replace("*", this.parameters.timeStamp)
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Method Description' field on ontology list page$/,
  async function (args1) {
    await traitsPage.section.allTraitsForm.setValue(
      "@methodDescription",
      args1.replace("*", this.parameters.timeStamp)
    );
  }
);

When(
  /^user selects "([^"]*)" in 'Method Class' dropdown on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue("@methodClass", args1);
  }
);

When(
  /^user selects "([^"]*)" in 'Scale Class' dropdown on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue("@scaleClass", args1);
  }
);

Then(
  /^user can see "([^"]*)" below the 'Name' field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.visible("@nameErrorText");
    await traitsPage.section.allTraitsForm.assert.containsText(
      "@nameErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below the 'Description' field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.visible(
      "@desriptionErrorText"
    );
    await traitsPage.section.allTraitsForm.assert.containsText(
      "@desriptionErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below the 'Entity' field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.visible("@entityErrorText");
    await traitsPage.section.allTraitsForm.assert.containsText(
      "@entityErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below the 'Attribute' field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.visible(
      "@attributeErrorText"
    );
    await traitsPage.section.allTraitsForm.assert.containsText(
      "@attributeErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below the 'Method Description' field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.visible(
      "@methodDescriptionErrorText"
    );
    await traitsPage.section.allTraitsForm.assert.containsText(
      "@methodDescriptionErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below the 'Method Class' dropdown on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.visible(
      "@methodClassErrorText"
    );
    await traitsPage.section.allTraitsForm.assert.containsText(
      "@methodClassErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below the 'Scale Class' dropdown on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.visible(
      "@scaleClassErrorText"
    );
    await traitsPage.section.allTraitsForm.assert.containsText(
      "@scaleClassErrorText",
      args1
    );
  }
);

Then(
  /^user can not see "([^"]*)" in 'Name' column on ontology list page$/,
  async function (args1) {
    await traitsPage.assert.not.elementPresent({
      selector:
        "//td[@name='name'][normalize-space(.)='" +
        args1.replace("*", this.parameters.timeStamp).slice(-10) +
        "']",
      locateStrategy: "xpath",
    });
  }
);

When(/^user selects 'Save' button on ontology list page$/, async () => {
  await traitsPage.section.allTraitsForm.click("@saveButton");
});

When(/^user selects 'Cancel' button on ontology list page$/, async () => {
  await traitsPage.section.allTraitsForm.click("@cancelButton");
});

Then(
  /^user can see "([^"]*)" in 'Name' column on ontology list page$/,
  async function (args1) {
    await traitsPage.assert.visible({
      selector:
        "//td[@name='name'][normalize-space(.)='" +
        args1.replace("*", this.parameters.timeStamp).slice(-10) +
        "']",
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "([^"]*)" in 'Trait' column on ontology list page$/,
  async function (args1) {
    await traitsPage.assert.visible({
      selector:
        "//td[@name='trait'][normalize-space(.)='" +
        args1.replace("*", this.parameters.timeStamp) +
        "']",
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "([^"]*)" in 'Method' column on ontology list page$/,
  async function (args1) {
    await traitsPage.assert.visible({
      selector:
        "//td[@name='method'][normalize-space(.)='" +
        args1.replace("*", this.parameters.timeStamp) +
        "']",
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "([^"]*)" in 'Scale Class' column on ontology list page$/,
  async function (args1) {
    await traitsPage.assert.visible({
      selector:
        "//td[@name='scaleClass'][normalize-space(.)='" +
        args1.replace("*", this.parameters.timeStamp) +
        "']",
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "([^"]*)" in 'Scale Class' dropdown on ontology list page$/,
  (args1) => {
    console.log(args1);
    return true;
  }
);

Then(/^user can see 'Formula' field on ontology list page$/, async () => {
  await traitsPage.section.allTraitsForm.assert.visible("@formulaField");
});

Then(/^user can see 'Unit' field on ontology list page$/, async () => {
  await traitsPage.section.allTraitsForm.assert.visible("@unitField");
});

Then(
  /^user can see 'Decimal Places' field on ontology list page$/,
  async () => {
    await traitsPage.section.allTraitsForm.assert.visible(
      "@decimalPlacesField"
    );
  }
);

Then(
  /^user can see 'Minimum Valid Value' field on ontology list page$/,
  async () => {
    await traitsPage.section.allTraitsForm.assert.visible(
      "@minValidValueField"
    );
  }
);

Then(
  /^user can see 'Maximum Valid Value' field on ontology list page$/,
  async () => {
    await traitsPage.section.allTraitsForm.assert.visible(
      "@maxValidValueField"
    );
  }
);

Then(
  /^user can see "([^"]*)" below the 'Formula' field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.visible("@formulaErrorText");
    await traitsPage.section.allTraitsForm.assert.containsText(
      "@formulaErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below the 'Unit' field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.visible("@unitErrorText");
    await traitsPage.section.allTraitsForm.assert.containsText(
      "@unitErrorText",
      args1
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Formula' field on ontology list page$/,
  async function (args1) {
    await traitsPage.section.allTraitsForm.setValue(
      "@formulaField",
      args1.replace("*", this.parameters.random)
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Unit' field on ontology list page$/,
  async function (args1) {
    await traitsPage.section.allTraitsForm.setValue(
      "@unitField",
      args1.replace("*", this.parameters.random)
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Minimum Valid Value' field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue(
      "@minValidValueField",
      args1
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Maximum Valid Value' field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue(
      "@maxValidValueField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below the 'Max' field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.visible(
      "@maxValidValueErrorText"
    );
    await traitsPage.section.allTraitsForm.assert.containsText(
      "@maxValidValueErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below the 'Min' field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.visible(
      "@minValidValueErrorText"
    );
    await traitsPage.section.allTraitsForm.assert.containsText(
      "@minValidValueErrorText",
      args1
    );
  }
);

Then(/^user can see 'Unit of time' field on ontology list page$/, async () => {
  await traitsPage.section.allTraitsForm.assert.visible("@unitofTimeField");
});

When(
  /^user set "([^"]*)" in 'Unit' field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue("@unitofTimeField", args1);
  }
);

When(
  /^user sets "([^"]*)" in 'Scale' field on ontology list page$/,
  (args1) => {
    console.log(args1);
    return true;
  }
);

Then(
  /^user can see 'No options are available for configuring this field.' below the 'Scale Class' dropdown on ontology list page$/,
  async () => {
    await traitsPage.section.allTraitsForm.assert.visible(
      "@scaleClassNoOptionsText"
    );
    await traitsPage.section.allTraitsForm.assert.containsText(
      "@scaleClassNoOptionsText",
      "No options are available for configuring this field."
    );
  }
);
