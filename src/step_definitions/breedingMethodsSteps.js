const { client } = require("nightwatch-api");
const { Then, When } = require("@cucumber/cucumber");
const page = client.page.programAdministrationPage();

Then(
  /^user can see 'Create Breeding Method' button in Breeding Method Management page$/,
  async () => {
    await page.section.breedingMethods.assert.visible(
      "@createBreedingMethodButton"
    );
  }
);

Then(
  /^user can see 'Breeding Methods' tab in Program Management page$/,
  async () => {
    await page.assert.visible("@breedingMethodsTab");
  }
);

When(
  /^user clicks 'Create Breeding Method' button in Breeding Method Management page$/,
  async () => {
    await page.section.breedingMethods.click("@createBreedingMethodButton");
  }
);

Then(/^user can see new Breeding Method form$/, async () => {
  await page.section.newBreedingMethodForm.assert.visible("@nameField");
});

When(
  /^user sets "([^"]*)" in 'Name' field in Breeding Method form$/,
  async function (args1) {
    await page.section.newBreedingMethodForm.setValue("@nameField", args1);
  }
);

When(
  /^user sets "([^"]*)" in 'Abbreviation' field in Breeding Method form$/,
  async function (args1) {
    await page.section.newBreedingMethodForm.setValue(
      "@abbreviationField",
      args1
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Description' field in Breeding Method form$/,
  async function (args1) {
    await page.section.newBreedingMethodForm.setValue(
      "@descriptionField",
      args1
    );
  }
);

When(
  /^user selects "([^"]*)" in 'Category' dropdown in Breeding Method form$/,
  async (args1) => {
    await page.section.newBreedingMethodForm.setValue("@categorySelect", args1);
  }
);

When(
  /^user selects "([^"]*)" in 'Genetic Diversity' dropdown in Breeding Method form$/,
  async (args1) => {
    await page.section.newBreedingMethodForm.setValue(
      "@geneticDiversitySelect",
      args1
    );
  }
);

When(/^user clicks 'Save' button in Breeding Method form$/, async () => {
  await page.section.newBreedingMethodForm.click("@saveButton");
});

When(
  /^user clicks 'Show All' button in Breeding Method Management page$/,
  async () => {
    await page.section.breedingMethods.click("@showAllButton");
  }
);

Then(
  /^user can see 'Delete' action on "([^"]*)" Breeding Method$/,
  async (args1) => {
    await page.section.breedingMethods.assert.visible({
      selector: `.//td[normalize-space(.)='${args1}']/following-sibling::td/a[normalize-space(.)='Delete']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user cannot see 'Delete' action on "([^"]*)" Breeding Method$/,
  async (args1) => {
    await page.section.breedingMethods.assert.not.elementPresent({
      selector: `.//td[normalize-space(.)='${args1}']/following-sibling::td/a[normalize-space(.)='Delete']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see 'Edit' action on "([^"]*)" Breeding Method$/,
  async (args1) => {
    await page.section.breedingMethods.assert.visible({
      selector: `.//td[normalize-space(.)='${args1}']/following-sibling::td/a/span[normalize-space(.)='Edit']`,
      locateStrategy: "xpath",
    });
  }
);

When(
  /^user clicks 'Edit' action on "([^"]*)" Breeding Method$/,
  async (args1) => {
    await page.section.breedingMethods.click({
      selector: `.//td[normalize-space(.)='${args1}']/following-sibling::td/a/span[normalize-space(.)='Edit']`,
      locateStrategy: "xpath",
    });
    await page.pause(10000);
  }
);

Then(
  /^user can see "Breeding method is in use. Deletion disabled." message$/,
  async () => {
    await page.section.breedingMethods.assert.visible("@inUseMessage");
  }
);

Then(
  /^user cannot see "Breeding method is in use. Deletion disabled." message$/,
  async () => {
    await page.section.breedingMethods.assert.not.elementPresent(
      "@inUseMessage"
    );
  }
);
