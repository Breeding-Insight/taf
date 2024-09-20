const { client } = require("nightwatch-api");
const { Given, Then, When } = require("@cucumber/cucumber");
const sampleManagementPage = client.page.sampleManagementPage();
const page = client.page.page();

Then("user can see Sample Management page", async function () {
  await sampleManagementPage.assert.visible("@header");
});
