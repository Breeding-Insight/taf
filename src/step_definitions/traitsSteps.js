const { client } = require("nightwatch-api");
const { Given, Then, When } = require("@cucumber/cucumber");
const traitsPage = client.page.traitsPage();

When(/^user selects 'New Term' button on ontology list page$/, async () => {
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

// Generic field fillers
//TODO: Need to fix all of these after my changes

// TODO: Try to make even more generic (no hard coded page) in the future
When(/^user sets "([^"]*)" in ([^\s]+) field$/, async (valueArg, fieldSelector) => {
  // Set the element
  await traitsPage.setValue(`@${fieldSelector}`, valueArg);
});

When(/^user selects "([^"]*)" in ([^\s]+) dropdown field$/, async (valueArg, fieldSelector) => {
  // Set the element
  await traitsPage.setValue(`@${fieldSelector}`, valueArg);
});

Then(/^user can see "([^"]*)" error below the ([^\s]+) field$/, async(errorMsg, fieldSelector) => {
  var field = traitsPage.elements[fieldSelector];
  // All our error selector css paths are the same
  // Not ideal placement, would rather it be in the traitsPage.js file
  const errorSelector = {
    selector: `.//input[@id='${field.selector.replace('#', '')}']/following-sibling::span[contains(text() ,'${errorMsg}')]`,
    locateStrategy: "xpath",
  };
  await traitsPage.assert.visible(errorSelector);
});
