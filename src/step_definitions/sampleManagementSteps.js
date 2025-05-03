const { Given, Then, When } = require("@cucumber/cucumber");

Then("user can see Sample Management page", async function () {
  await this.browser.page.sampleManagementPage().assert.visible("@header");
});
