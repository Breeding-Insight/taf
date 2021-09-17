const { client } = require("nightwatch-api");
const { Given, Then, When } = require("@cucumber/cucumber");
const page = client.page.page();

Then(/^user selects User Status menu dropdown$/, async () => {
  await page.click("@userStatusMenuDropDownButton");
});

Then(/^user can see "([^"]*)" as logged in$/, async (args1) => {
  await page.assert.visible("@loggedInAsLabel");
  await page.getText("@loggedInAsLabel", ({ value }) => {
    console.log("text value is " + value);
  });
  await page.assert.containsText("@loggedInAsLabel", args1);
});

Then(/^user can see a Log out button$/, async () => {
  await page.assert.visible("@logoutButton");
});
