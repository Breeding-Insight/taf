const { client } = require("nightwatch-api");
const { Given, Then, When } = require("cucumber");
const traitsPage = client.page.traitsPage();

When(/^user selects 'New Trait' button on traits list page$/, async () => {
  await traitsPage.waitForElementPresent("@newTraitButton");
  await traitsPage.click("@newTraitButton");
});

When(
  /^user selects "([^"]*)" in scale dropdown on traits list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue("@byScaleSelect", args1);
  }
);

When(
  /^user sets "([^"]*)" in first scale field on traits list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue("@firstScaleField", args1);
  }
);

When(
  /^user sets "([^"]*)" in second scale field on traits list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue("@secondScaleField", args1);
  }
);

When(
  /^user sets "([^"]*)" in third scale field on traits list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue("@thirdScaleField", args1);
  }
);

When(
  /^user sets "([^"]*)" in fifth scale field on traits list page$/,
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
  /^user can see "([^"]*)" in the first Ordinal field on traits list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@firstOrdinalField",
      args1
    );
  }
);

Then(
  /^user can not see an Ordinal field on traits list page$/,
  async () => {
    await traitsPage.section.allTraitsForm.assert.not.elementPresent(
      "@ordinalFields"
    );
  }
);
Then(
  /^user can see "([^"]*)" in the second Ordinal field on traits list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@secondOrdinalField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in the third Ordinal field on traits list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@thirdOrdinalField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in the fifth Ordinal field on traits list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@fifthOrdinalField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in first Scale field on traits list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@firstScaleField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in second Scale field on traits list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@secondScaleField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in third Scale field on traits list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@thirdScaleField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in fifth Scale field on traits list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@fifthScaleField",
      args1
    );
  }
);
