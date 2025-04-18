const { Then, When } = require("@cucumber/cucumber");
const helpers = require("./helpers");
const breedingMethod = {};

Then(
  /^user can see 'Create Breeding Method' button in Breeding Method Management page$/,
  async function() {
    await this.browser.page.programAdministrationPage().section.breedingMethods.assert.visible(
      "@createBreedingMethodButton"
    );
  }
);

Then(
  /^user can not see 'Create Breeding Method' button in Breeding Method Management page$/,
  async function() {
    await this.browser.page.programAdministrationPage().section.breedingMethods.assert.not.elementPresent(
      "@createBreedingMethodButton"
    );
  }
);

Then(
  /^user can see 'Breeding Methods' tab in Program Management page$/,
  async function() {
    await this.browser.page.programAdministrationPage().assert.visible("@breedingMethodsTab");
  }
);

When(
  /^user clicks 'Create Breeding Method' button in Breeding Method Management page$/,
  async function() {
    await this.browser.page.programAdministrationPage().section.breedingMethods.click("@createBreedingMethodButton");
  }
);

Then(/^user can see new Breeding Method form$/, async function() {
  await this.browser.page.programAdministrationPage().section.newBreedingMethodForm.assert.visible("@nameField");
});

When(
  /^user sets "([^"]*)" in 'Name' field in Breeding Method form$/,
  async function (args1) {
    await this.browser.page.programAdministrationPage().section.newBreedingMethodForm.setValue(
      "@nameField",
      args1.replace("*", helpers.generateRandomAlphaString(10))
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Abbreviation' field in Breeding Method form$/,
  async function (args1) {
    await this.browser.page.programAdministrationPage().section.newBreedingMethodForm.setValue(
      "@abbreviationField",
      args1.replace("*", helpers.generateRandomAlphaString(2))
    );
  }
);

When(
  /^user sets "([^"]*)" in 'Description' field in Breeding Method form$/,
  async function (args1) {
    await this.browser.page.programAdministrationPage().section.newBreedingMethodForm.setValue(
      "@descriptionField",
      args1
    );
  }
);

When(
  /^user selects "([^"]*)" in 'Category' dropdown in Breeding Method form$/,
  async function(args1)  {
    await this.browser.page.programAdministrationPage().section.newBreedingMethodForm.setValue("@categorySelect", args1);
  }
);

When(
  /^user selects "([^"]*)" in 'Genetic Diversity' dropdown in Breeding Method form$/,
  async function(args1)  {
    await this.browser.page.programAdministrationPage().section.newBreedingMethodForm.setValue(
      "@geneticDiversitySelect",
      args1
    );
  }
);

When(/^user clicks 'Save' button in Breeding Method form$/, async function() {
  //save the values
  await getBreedingMethodValues();
  await this.browser.page.programAdministrationPage().section.newBreedingMethodForm.click("@saveButton");
});

When(
  /^user clicks 'Show All' button in Breeding Method Management page$/,
  async function() {
    await this.browser.page.programAdministrationPage().section.breedingMethods.click("@showAllButton");
  }
);

Then(
  /^user can see 'Delete' action on "([^"]*)" Breeding Method$/,
  async function(args1)  {
    await this.browser.page.programAdministrationPage().section.breedingMethods.assert.visible({
      selector: `.//td[normalize-space(.)='${args1}']/following-sibling::td/a[normalize-space(.)='Delete']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user cannot see 'Delete' action on "([^"]*)" Breeding Method$/,
  async function(args1)  {
    await this.browser.page.programAdministrationPage().section.breedingMethods.assert.not.elementPresent({
      selector: `.//td[normalize-space(.)='${args1}']/following-sibling::td/a[normalize-space(.)='Delete']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see 'Edit' action on "([^"]*)" Breeding Method$/,
  async function(args1)  {
    await this.browser.page.programAdministrationPage().section.breedingMethods.assert.visible({
      selector: `.//td[normalize-space(.)='${args1}']/following-sibling::td/a/span[normalize-space(.)='Edit']`,
      locateStrategy: "xpath",
    });
  }
);

When(
  /^user clicks 'Edit' action on "([^"]*)" Breeding Method$/,
  async function(args1)  {
    await this.browser.page.programAdministrationPage().section.breedingMethods.click({
      selector: `.//td[normalize-space(.)='${args1}']/following-sibling::td/a/span[normalize-space(.)='Edit']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "Breeding method is in use. Deletion disabled." message$/,
  async function() {
    await this.browser.page.programAdministrationPage().section.breedingMethods.assert.visible("@inUseMessage");
  }
);

Then(
  /^user cannot see "Breeding method is in use. Deletion disabled." message$/,
  async function() {
    await this.browser.page.programAdministrationPage().section.breedingMethods.assert.not.elementPresent(
      "@inUseMessage"
    );
  }
);

Then(
  /^user can see "([^"]*)" in Name column in Breeding Method page$/,
  async function(args1)  {
    if (args1.includes("*")) {
      args1 = breedingMethod.Name;
    } else {
      breedingMethod.Name = args1;
    }
    let keySelector = `//td[@data-label='Name'][normalize-space(.)='${breedingMethod.Name}']`;
    await this.browser.page.programAdministrationPage().assert.textContains(
      { selector: keySelector, locateStrategy: "xpath" },
      breedingMethod.Name
    );
  }
);

//methods
async function getBreedingMethodValues() {
  await this.browser.page.programAdministrationPage().section.newBreedingMethodForm.getValue(
    "@nameField",
    ({ value }) => {
      breedingMethod.Name = value;
    }
  );
  await this.browser.page.programAdministrationPage().section.newBreedingMethodForm.getValue(
    "@abbreviationField",
    ({ value }) => {
      breedingMethod.abbreviation = value;
    }
  );
}
