const { client } = require("nightwatch-api");
const { Then, When, AfterAll } = require("@cucumber/cucumber");
const importPage = client.page.importPage();

When(
  /^user sets "([^"]*)" in List Name field of import page$/,
  async function (args1) {
    await importPage.setValue("@listNameField", args1);
  }
);

When(
  /^user sets "([^"]*)" in List Description field of import page$/,
  async function (args1) {
    await importPage.setValue("@listDescriptionField", args1);
  }
);

Then(
  /^user can see 'Import' button accepts "([^"]*)"$/,
  async function (args1) {
    await importPage.assert.domPropertyEquals(
      {
        selector: "//div[@class='file-select']//input",
        locateStrategy: "xpath",
      },
      "accept",
      args1
    );
  }
);
