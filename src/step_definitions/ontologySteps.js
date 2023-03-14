const { client } = require("nightwatch-api");
const { Then, When } = require("@cucumber/cucumber");
const ontologyPage = client.page.ontologyPage();
const page = client.page.page();
const traitObject = {};

When(/^user selects 'New Term' button on ontology list page$/, async () => {
  await client.execute("window.scrollTo(0,0);");
  await ontologyPage.waitForElementPresent("@newTermButton");
  await ontologyPage.click("@newTermButton");
});

When(
  /^user selects "([^"]*)" in scale dropdown on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.setValue("@byScaleSelect", args1);
    await ontologyPage.pause(2000);
  }
);

Then(
  /^user can see "([^"]*)" placeholder in Ordinal first field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.attributeEquals(
      "@firstScaleField",
      "placeholder",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" placeholder in Ordinal second field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.attributeEquals(
      "@secondScaleField",
      "placeholder",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" placeholder in Ordinal third field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.attributeEquals(
      "@thirdScaleField",
      "placeholder",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" placeholder in Ordinal fourth field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.attributeEquals(
      "@fourthScaleField",
      "placeholder",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" placeholder in Ordinal fifth field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.attributeEquals(
      "@fifthScaleField",
      "placeholder",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" placeholder in Ordinal sixth field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.attributeEquals(
      "@sixthScaleField",
      "placeholder",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in Ordinal first field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.value(
      "@firstScaleField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in Ordinal second field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.value(
      "@secondScaleField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in Ordinal third field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.value(
      "@thirdScaleField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in fifth Scale field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.value(
      "@fifthScaleField",
      args1
    );
  }
);

Then(
  /^user can see 'Ontology Term Name' field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible("@nameField");
  }
);

Then(/^user can see 'Full Name' field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible("@fullNameField");
});

Then(/^user can see 'Description' field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible("@descriptionField");
});

Then(/^user can see 'Tags' field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible("@tagsField");
});

Then(/^user can see 'Entity' field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible("@entityField");
});

Then(/^user can see 'Attribute' field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible("@entityField");
});

Then(
  /^user can see 'Method Class' dropdown on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible("@methodClass");
  }
);

Then(
  /^user can see 'Scale Class' dropdown on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible("@methodClass");
  }
);

Then(/^user can see 'Term Type' dropdown on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible("@termType");
});

Then(/^user can see 'Save' button on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible("@saveButton");
});

Then(/^user can see 'Cancel' button on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible("@cancelButton");
});

When(
  /^user sets "([^"]*)" in 'Entity' field on ontology list page$/,
  async function (args1) {
    await ontologyPage.section.allTraitsForm.setValue(
      "@entityField",
      args1.replace("*", this.parameters.timeStamp)
    );
  }
);

Then(
  /^user can see "([^"]*)" as suggested text in 'Entity' field on ontology list page$/,
  async function (args1) {
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@entitySelectField",
      args1.replace("*", this.parameters.timeStamp)
    );
  }
);

//Use this to limit entry up to 10 characters and replaces * with a time stamp to make it unique
When(
  /^user sets "([^"]*)" in 'Name' field on ontology list page$/,
  async function (args1) {
    traitObject.nameField = args1
      .replace("*", this.parameters.timeStamp)
      .slice(-11);
    await ontologyPage.section.allTraitsForm.setValue(
      "@nameField",
      traitObject.nameField
    );
  }
);

//Use this to enter the value as is (no trimming)
When(
  /^user sets as is "([^"]*)" in 'Name' field on ontology list page$/,
  async function (args1) {
    await ontologyPage.section.allTraitsForm.sendKeys("@nameField", args1);
  }
);

When(
  /^user sets "([^"]*)" in 'Full Name' field on ontology list page$/,
  async function (args1) {
    await ontologyPage.section.allTraitsForm.sendKeys(
      "@fullNameField",
      args1.replace("*", this.parameters.timeStamp)
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Description' field on ontology list page$/,
  async function (args1) {
    await ontologyPage.section.allTraitsForm.setValue(
      "@descriptionField",
      args1.replace("*", this.parameters.timeStamp)
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Attribute' field on ontology list page$/,
  async function (args1) {
    await ontologyPage.section.allTraitsForm.setValue(
      "@attributeField",
      args1.replace("*", this.parameters.timeStamp)
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Method Description' field on ontology list page$/,
  async function (args1) {
    await ontologyPage.section.allTraitsForm.setValue(
      "@methodDescription",
      args1.replace("*", this.parameters.timeStamp)
    );
  }
);

When(
  /^user selects "([^"]*)" in 'Method Class' dropdown on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.setValue("@methodClass", args1);
  }
);

When(
  /^user sets "([^"]*)" in Ordinal first field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.setValue(
      "@firstScaleField",
      args1
    );
  }
);

When(
  /^user sets "([^"]*)" in Ordinal second field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.setValue(
      "@secondScaleField",
      args1
    );
  }
);

When(
  /^user sets "([^"]*)" in Ordinal third field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.setValue(
      "@thirdScaleField",
      args1
    );
  }
);

When(
  /^user selects "([^"]*)" in 'Scale Class' dropdown on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.moveToElement("@scaleClass", 1, 1);
    await ontologyPage.pause(10000);
    await ontologyPage.section.allTraitsForm.setValue("@scaleClass", args1);
  }
);

Then(
  /^user can not select "([^"]*)" in 'Scale Class' dropdown on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.not.elementPresent({
      selector: `//option[@value='${args1}']`,
      locateStrategy: "xpath",
    });
  }
);

When(
  /^user selects "([^"]*)" in 'Term Type' dropdown on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.moveToElement("@termType", 1, 1);
    await ontologyPage.pause(10000);
    await ontologyPage.section.allTraitsForm.setValue("@termType", args1);
  }
);

Then(
  /^user can see "([^"]*)" below the 'Name' field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible({
      selector: `//span[@class='form-error has-text-danger'][normalize-space()='${args1}']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "([^"]*)" below the 'Description' field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible({
      selector: `//span[@class='form-error has-text-danger'][normalize-space()='${args1}']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "([^"]*)" below the 'Entity' field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible({
      selector: `//span[@class='form-error has-text-danger'][normalize-space()='${args1}']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "([^"]*)" below the 'Attribute' field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible({
      selector: `//span[@class='form-error has-text-danger'][normalize-space()='${args1}']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "([^"]*)" below the 'Method Description' field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible({
      selector: `//span[@class='form-error has-text-danger'][normalize-space()='${args1}']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can not see "([^"]*)" below the 'Method Description' field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.not.elementPresent({
      selector: `//span[@class='form-error has-text-danger'][normalize-space()='${args1}']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "([^"]*)" below the 'Method Class' dropdown on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible({
      selector: `//span[@class='form-error has-text-danger'][normalize-space()='${args1}']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "([^"]*)" below the 'Scale Class' dropdown on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible({
      selector: `//span[@class='form-error has-text-danger'][normalize-space()='${args1}']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can not see "([^"]*)" in 'Name' column on ontology list page$/,
  async function (args1) {
    traitObject.nameField = args1
      .replace("*", this.parameters.timeStamp)
      .slice(-11);
    await ontologyPage.assert.not.elementPresent({
      selector: `//td[@name='name'][normalize-space(.)='${traitObject.nameField}']`,
      locateStrategy: "xpath",
    });
  }
);

When(/^user selects 'Save' button on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.click("@saveButton");
});

When(/^user selects 'Cancel' button on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.click("@cancelButton");
});

Then(
  /^user can see "([^"]*)" in 'Name' column on ontology list page$/,
  async function (args1) {
    traitObject.nameField = args1
      .replace("*", this.parameters.timeStamp)
      .slice(-11);
    await ontologyPage.assert.visible({
      selector: `//td[@name='name'][normalize-space(.)='${traitObject.nameField}']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "([^"]*)" in 'Trait' column on ontology list page$/,
  async function (args1) {
    await ontologyPage.assert.visible({
      selector:
        "//td[@name='trait'][normalize-space(.)='" +
        args1.replace(/\*/g, this.parameters.timeStamp) +
        "']",
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "([^"]*)" in 'Method' column on ontology list page$/,
  async function (args1) {
    await ontologyPage.assert.visible({
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
    await ontologyPage.assert.visible({
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
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.elementPresent({
      selector: `//option[@value='${args1}']`,
      locateStrategy: "xpath",
    });
  }
);

Then(/^user can see 'Formula' field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible("@formulaField");
});

Then(/^user can see 'Unit' field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible("@unitField");
});

Then(
  /^user can see 'Decimal Places' field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@decimalPlacesField"
    );
  }
);

Then(
  /^user can see 'Minimum Valid Value' field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@minValidValueField"
    );
  }
);

Then(
  /^user can see 'Maximum Valid Value' field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@maxValidValueField"
    );
  }
);

Then(
  /^user can see "([^"]*)" below the 'Formula' field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@formulaErrorText"
    );
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@formulaErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below the 'Unit' field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible("@unitErrorText");
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@unitErrorText",
      args1
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Formula' field on ontology list page$/,
  async function (args1) {
    await ontologyPage.section.allTraitsForm.setValue(
      "@formulaField",
      args1.replace("*", this.parameters.random)
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Unit' field on ontology list page$/,
  async function (args1) {
    await ontologyPage.section.allTraitsForm.setValue(
      "@unitField",
      args1.replace("*", this.parameters.random)
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Minimum Valid Value' field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.setValue(
      "@minValidValueField",
      args1
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Maximum Valid Value' field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.setValue(
      "@maxValidValueField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below the 'Max' field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@maxValidValueErrorText"
    );
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@maxValidValueErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below the 'Min' field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@minValidValueErrorText"
    );
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@minValidValueErrorText",
      args1
    );
  }
);

Then(/^user can see 'Unit of time' field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible("@unitofTimeField");
});

When(
  /^user set "([^"]*)" in 'Unit' field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.setValue(
      "@unitofTimeField",
      args1
    );
  }
);

Then(
  /^user can see 'No options are available for configuring this field.' below the 'Scale Class' dropdown on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@scaleClassNoOptionsText"
    );
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@scaleClassNoOptionsText",
      "No options are available for configuring this field."
    );
  }
);

Then(
  /^user can see "([^"]*)" placeholder in Nominal first field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible("@firstScaleField");
    await ontologyPage.section.allTraitsForm.assert.attributeEquals(
      "@firstScaleField",
      "placeholder",
      args1
    );
  }
);

Then(
  /^user can see 'X' button in Nominal first field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@firstScaleDeleteButton"
    );
  }
);

Then(
  /^user can see "([^"]*)" placeholder in Nominal second field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@secondScaleField"
    );
    await ontologyPage.section.allTraitsForm.assert.attributeEquals(
      "@secondScaleField",
      "placeholder",
      args1
    );
  }
);

Then(
  /^user can see 'X' button in Nominal second field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@secondScaleDeleteButton"
    );
  }
);

Then(
  /^user can see "([^"]*)" placeholder in Nominal third field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible("@thirdScaleField");
    await ontologyPage.section.allTraitsForm.assert.attributeEquals(
      "@thirdScaleField",
      "placeholder",
      args1
    );
  }
);

Then(
  /^user can see 'X' button in Nominal third field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@thirdScaleDeleteButton"
    );
  }
);

Then(
  /^user can see "([^"]*)" placeholder in Nominal fourth field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@fourthScaleField"
    );
    await ontologyPage.section.allTraitsForm.assert.attributeEquals(
      "@fourthScaleField",
      "placeholder",
      args1
    );
  }
);

Then(
  /^user can see 'X' button in Nominal fourth field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@fourthScaleDeleteButton"
    );
  }
);

Then(
  /^user can see "([^"]*)" placeholder in Nominal fifth field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible("@fifthScaleField");
    await ontologyPage.section.allTraitsForm.assert.attributeEquals(
      "@fifthScaleField",
      "placeholder",
      args1
    );
  }
);

Then(
  /^user can see 'X' button in Nominal fifth field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@fifthScaleDeleteButton"
    );
  }
);

Then(/^user can see 'Add Item' button on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible("@addItemButton");
});

Then(
  /^user can see "([^"]*)" below Nominal first field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@firstScaleErrorText"
    );
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@firstScaleErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below Nominal second field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@secondScaleErrorText"
    );
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@secondScaleErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below Nominal third field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@thirdScaleErrorText"
    );
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@thirdScaleErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below Nominal fourth field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@fourthScaleErrorText"
    );
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@fourthScaleErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below Nominal fifth field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@fifthScaleErrorText"
    );
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@fifthScaleErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" placeholder in Nominal sixth field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible("@sixthScaleField");
    await ontologyPage.section.allTraitsForm.assert.attributeEquals(
      "@sixthScaleField",
      "placeholder",
      args1
    );
  }
);

Then(
  /^user can see 'X' button in Nominal sixth field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@sixthScaleDeleteButton"
    );
  }
);

When(/^user selects 'Add Item' button on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.click("@addItemButton");
});

Then(
  /^user can see "([^"]*)" in Category first field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.value(
      "@firstOrdinalField",
      args1
    );
  }
);

Then(
  /^user can not see "([^"]*)" in Category first field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.not.value(
      "@firstOrdinalField",
      args1
    );
  }
);

Then(
  /^user can not see Category first field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.waitForElementNotPresent(
      "@firstOrdinalField"
    );
  }
);

Then(
  /^user can not see Category second field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.not.elementPresent(
      "@ordinalFields"
    );
  }
);

Then(
  /^user can not see Category third field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.not.elementPresent(
      "@ordinalFields"
    );
  }
);

Then(
  /^user can see "([^"]*)" in Category second field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.value(
      "@secondOrdinalField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in Category third field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.value(
      "@thirdOrdinalField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in Category fourth field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.value(
      "@fourthOrdinalField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in Category fifth field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.value(
      "@fifthOrdinalField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" placeholder in Category sixth field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.attributeEquals(
      "@sixthOrdinalField",
      "placeholder",
      args1
    );
  }
);

Then(
  /^user can see 'X' button in Ordinal first field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@firstScaleDeleteButton"
    );
  }
);

Then(
  /^user can see 'X' button in Ordinal second field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@secondScaleDeleteButton"
    );
  }
);

Then(
  /^user can see 'X' button in Ordinal third field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@thirdScaleDeleteButton"
    );
  }
);

Then(
  /^user can see 'X' button in Ordinal fourth field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@fourthScaleDeleteButton"
    );
  }
);

Then(
  /^user can see 'X' button in Ordinal fifth field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@fifthScaleDeleteButton"
    );
  }
);

Then(
  /^user can see 'X' button in Ordinal sixth field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@sixthScaleDeleteButton"
    );
  }
);

Then(
  /^user can see "([^"]*)" below Ordinal first field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@firstScaleErrorText"
    );
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@firstScaleErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below Ordinal second field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@secondScaleErrorText"
    );
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@secondScaleErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below Ordinal third field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@thirdScaleErrorText"
    );
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@thirdScaleErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below Ordinal fourth field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@fourthScaleErrorText"
    );
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@fourthScaleErrorText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below Ordinal fifth field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@fifthScaleErrorText"
    );
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@fifthScaleErrorText",
      args1
    );
  }
);

When(
  /^user selects 'X' button of Nominal first field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.click("@firstScaleDeleteButton");
  }
);

Then(/^user can see not see Nominal fifth field on ontology list page$/, () => {
  async () => {
    await ontologyPage.section.allTraitsForm.assert.not.elementPresent(
      "@fifthScaleField"
    );
  };
});

When(
  /^user sets "([^"]*)" in Nominal first field on ontology list page$/,
  async function (args1) {
    traitObject.categoryFirstField = args1.replace(
      "*",
      this.parameters.timeStamp
    );
    await ontologyPage.section.allTraitsForm.setValue(
      "@firstScaleField",
      traitObject.categoryFirstField
    );
  }
);

When(
  /^user sets "([^"]*)" in Nominal second field on ontology list page$/,
  async function (args1) {
    traitObject.categorySecondField = args1.replace(
      "*",
      this.parameters.timeStamp
    );
    await ontologyPage.section.allTraitsForm.setValue(
      "@secondScaleField",
      traitObject.categorySecondField
    );
  }
);

When(
  /^user sets "([^"]*)" in Nominal third field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.setValue(
      "@thirdScaleField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in Nominal first field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.value(
      "@firstScaleField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in Nominal second field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.value(
      "@secondScaleField",
      args1
    );
  }
);

Then(
  /^user can not see "([^"]*)" in Nominal second field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.not.elementPresent(
      "@secondScaleField"
    );
  }
);

Then(
  /^user can not see Ordinal third category field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.not.elementPresent(
      "@thirdOrdinalField"
    );
  }
);

Then(
  /^user selects 'X' button in Ordinal third value on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.click("@thirdScaleDeleteButton");
  }
);

When(
  /^user sets "([^"]*)" in Ordinal first value field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.setValue(
      "@firstValueField",
      args1
    );
  }
);

When(
  /^user sets "([^"]*)" in Ordinal third value field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.setValue(
      "@thirdValueField",
      args1
    );
  }
);

Then(
  /^user can not see "([^"]*)" in Scale third field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.not.elementPresent(
      "@thirdScaleField"
    );
  }
);

Then(
  /^user can see "([^"]*)" in Nominal third field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.value(
      "@thirdScaleField",
      args1
    );
  }
);
Then(
  /^user can not see "([^"]*)" in Nominal first field on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.not.value(
      "@firstScaleField",
      args1
    );
  }
);

Then(
  /^user selects 'X' button in Ordinal first field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.click("@firstScaleDeleteButton");
  }
);

When(
  /^user selects 'X' button in Ordinal third field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.click("@thirdScaleDeleteButton");
  }
);

When(/^user selects 'Add Item'$/, async () => {
  await ontologyPage.click({
    selector:
      "//*[@id='ontologyTableLabel']//span[normalize-space()='Add Item']",
    locateStrategy: "xpath",
  });
});

Then(
  /^user can see "([^"]*)" below Category first field on ontology list page$/,
  async (args1) => {
    await ontologyPage.assert.visible({
      selector: `//p[normalize-space(.)='${args1}']`,
      locateStrategy: "xpath",
    });
  }
);

Then(/^user can see Category first field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible(
    "@firstCategoryField"
  );
});

Then(/^user can see Category second field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible(
    "@secondCategoryField"
  );
});

Then(/^user can see Category third field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible(
    "@thirdCategoryField"
  );
});

Then(/^user can see Category fourth field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible(
    "@fourthCategoryField"
  );
});

Then(/^user can see Value first field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible("@firstValueField");
});

Then(/^user can see Value second field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible("@secondValueField");
});

Then(/^user can see Value third field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible("@thirdValueField");
});

Then(/^user can see Value fourth field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.assert.visible("@fourthValueField");
});

Then(
  /^user can see 'X' button of Category second field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@deleteButtonSecondCategoryField"
    );
  }
);

Then(
  /^user can see 'X' button of Category third field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.assert.visible(
      "@deleteButtonThirdCategoryField"
    );
  }
);

Then(
  /^user can see "([^"]*)" below Value first field on ontology list page$/,
  async (args1) => {
    await ontologyPage.assert.containsText(
      {
        selector: "//input[@placeholder='Value']/../span",
        locateStrategy: "xpath",
        index: 0,
      },
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below Value second field on ontology list page$/,
  async (args1) => {
    await ontologyPage.assert.containsText(
      {
        selector: "//input[@placeholder='Value']/../span",
        locateStrategy: "xpath",
        index: 1,
      },
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" error message below Category first field on ontology list page$/,
  async (args1) => {
    await ontologyPage.assert.containsText(
      {
        selector: "//input[@placeholder='Category']/../span",
        locateStrategy: "xpath",
        index: 0,
      },
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" below Category second field on ontology list page$/,
  async (args1) => {
    await ontologyPage.assert.containsText(
      {
        selector: "//input[@placeholder='Category']/../span",
        locateStrategy: "xpath",
        index: 1,
      },
      args1
    );
  }
);

When(
  /^user selects 'X' button of Nominal second field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.click(
      "@deleteButtonSecondCategoryField"
    );
  }
);

Then(
  /^user can not see Nominal second field text box on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.waitForElementNotPresent(
      "@secondCategoryField"
    );
  }
);

Then(
  /^user can see "([^"]*)" in Ordinal third value on ontology list page$/,
  async (args1) => {
    let val;
    await client.execute(
      function () {
        return document.querySelector(
          "div[class='p-0'] div:nth-of-type(4) input[placeholder='Value']"
        )._value;
      },
      [],
      async function (result) {
        val = result.value;
      }
    );
    await ontologyPage.assert.equal(val, args1);
  }
);

When(/^user clears Value first field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.clearValue("@firstValueField");
});

When(/^user clears Value second field on ontology list page$/, async () => {
  await ontologyPage.section.allTraitsForm.clearValue("@secondValueField");
});

Then(
  /^user can not see Ordinal third value on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.waitForElementNotPresent(
      "@thirdValueField",
      60000
    );
  }
);

Then(
  /^user can not see Nominal second field on ontology list page$/,
  async () => {
    await ontologyPage.section.allTraitsForm.waitForElementNotPresent(
      "@secondCategoryField",
      60000
    );
  }
);

Then(
  /^user can see "([^"]*)" in Trait text on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@traitText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in Synonyms text on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@synonymsText",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in 'Method' text on ontology list page$/,
  async (args1) => {
    await ontologyPage.section.allTraitsForm.assert.containsText(
      "@methodText",
      args1
    );
  }
);

When(
  /^user sets "([^"]*)" in Value first field on ontology list page$/,
  async function (args1) {
    traitObject.valueFirstField = args1.replace("*", this.parameters.timeStamp);
    await ontologyPage.section.allTraitsForm.setValue(
      "@firstValueField",
      traitObject.valueFirstField
    );
  }
);

When(
  /^user sets "([^"]*)" in Value second field on ontology list page$/,
  async function (args1) {
    traitObject.valueSecondField = args1.replace(
      "*",
      this.parameters.timeStamp
    );
    await ontologyPage.section.allTraitsForm.setValue(
      "@secondValueField",
      traitObject.valueSecondField
    );
  }
);

When(
  /^user selects 'Show details' button of "([^"]*)" on ontology list page$/,
  async function (args1) {
    traitObject.nameField = args1
      .replace("*", this.parameters.timeStamp)
      .slice(-11);
    await ontologyPage.section.allTraitsForm.click({
      selector: `//td[normalize-space()='${traitObject.nameField}']/following-sibling::td[@class='has-text-right is-narrow']/a`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "([^"]*)" in Value first field of Show Details on ontology list page$/,
  async function (args1) {
    traitObject.valueFirstField = args1.replace("*", this.parameters.timeStamp);
    await ontologyPage.assert.containsText(
      {
        selector:
          "//div[@class='is-full-length trait-detail']//div[@class='column is-one-third-desktop is-one-quarter-mobile']",
        index: 0,
        locateStrategy: "xpath",
      },
      traitObject.valueFirstField
    );
  }
);

Then(
  /^user can see "([^"]*)" in Ordinal first field of Show Details on ontology list page$/,
  async function (args1) {
    traitObject.categoryFirstField = args1.replace(
      "*",
      this.parameters.timeStamp
    );
    await ontologyPage.assert.containsText(
      {
        selector:
          "//div[@class='is-full-length trait-detail']//div[@class='column']",
        index: 0,
        locateStrategy: "xpath",
      },
      traitObject.categoryFirstField
    );
  }
);

Then(
  /^user can see "([^"]*)" in Value second field of Show Details on ontology list page$/,
  async function (args1) {
    traitObject.valueSecondField = args1.replace(
      "*",
      this.parameters.timeStamp
    );
    await ontologyPage.assert.containsText(
      {
        selector:
          "//div[@class='is-full-length trait-detail']//div[@class='column is-one-third-desktop is-one-quarter-mobile']",
        index: 1,
        locateStrategy: "xpath",
      },
      traitObject.valueSecondField
    );
  }
);

Then(
  /^user can see "([^"]*)" in Ordinal second field of Show Details on ontology list page$/,
  async function (args1) {
    traitObject.categorySecondField = args1.replace(
      "*",
      this.parameters.timeStamp
    );
    await ontologyPage.assert.containsText(
      {
        selector:
          "//div[@class='is-full-length trait-detail']//div[@class='column']",
        index: 1,
        locateStrategy: "xpath",
      },
      traitObject.categorySecondField
    );
  }
);

Then(
  /^user can see "([^"]*)" in Nominal first field of Show Details on ontology list page$/,
  async function (args1) {
    traitObject.categoryFirstField = args1.replace(
      "*",
      this.parameters.timeStamp
    );
    await ontologyPage.assert.containsText(
      {
        selector:
          "//div[@class='is-full-length trait-detail']//div[@class='column']",
        index: 0,
        locateStrategy: "xpath",
      },
      traitObject.categoryFirstField
    );
  }
);

Then(
  /^user can see "([^"]*)" in Nominal second field of Show Details on ontology list page$/,
  async function (args1) {
    traitObject.categorySecondField = args1.replace(
      "*",
      this.parameters.timeStamp
    );
    await ontologyPage.assert.containsText(
      {
        selector:
          "//div[@class='is-full-length trait-detail']//div[@class='column']",
        index: 1,
        locateStrategy: "xpath",
      },
      traitObject.categorySecondField
    );
  }
);

Then(/^user can see 'Confirm New Ontology Term' header$/, async () => {
  await ontologyPage.assert.containsText(
    "@confirmOntologyHeader",
    "Confirm New Ontology Term"
  );
});

Then(/^user see a list of ontology terms in a table$/, async () => {
  await page.assert.visible("#traitsImportTableLabel");
});

Then(
  /^user can see a button 'Download the Ontology Import Template'$/,
  async () => {
    await ontologyPage.assert.containsText(
      "@downloadImportTemplateButton",
      "Download the Ontology Import Template"
    );
  }
);

Then(
  /^user can see a message 'Prepare ontology information for import using the provided template.'$/,
  async () => {
    await ontologyPage.assert.containsText(
      "@beforeImportMessageDetails",
      "Prepare ontology information for import using the provided template."
    );
  }
);

Then(/^user can see Active table on Ontology page$/, async function () {
  await ontologyPage.expect.section("@allTraitsForm").to.be.visible;
});
