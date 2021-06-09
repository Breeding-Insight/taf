const { client } = require("nightwatch-api");
const { Given, Then, When } = require("cucumber");
const path = require("path");
const { default: cli } = require("cucumber/lib/cli");
const page = client.page.page();

Then(/^user can see 'Program Name' label in Programs page$/, async () => {
  await programForm.assert.visible("@programNameLabel");
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

When(
  /^user sets "([^"]*)" in Program Name field in Programs Page$/,
  async (args1) => {
    await page.section.programForm.setValue("@programNameField", args1);
  }
);

When(/^user selects 'Save' button in Programs Page$/, async () => {
  await page.section.programForm.click("@saveButton");
});

Then(/^user can see 'Program Form' in Programs Page$/, async () => {
  await page.expect.section("@programForm").visible;
});

When(
  /^user selects "([^"]*)" in Species dropdown in Programs Page$/,
  async (args1) => {
    await page.section.programForm.setValue("@speciesSelect", args1);
  }
);

Then(
  /^user can see 'Program Name is required' text in Programs Page$/,
  async () => {
    await page.section.programForm.assert.visible("@programNameRequired");
  }
);

When(/^user selects 'Cancel' button in Programs Page$/, async() => {
	await page.section.programForm.click("@cancelButton");
});

Then(/^user can not see 'Program Form' in Programs Page$/, async() => {
	await page.expect.section("@programForm").not.elementPresent;
});

Then(/^user can not see "([^"]*)" Program in Programs Page$/, async(args1) => {
	await page.section.programForm.isProgramNotExists(args1);
});

Then(/^user can see "([^"]*)" Program in Programs Page$/, async(args1) => {
	await page.section.programForm.isProgramExists(args1);
});

Then(/^user can see new program in Programs Page$/, () => {
	return true;
});

