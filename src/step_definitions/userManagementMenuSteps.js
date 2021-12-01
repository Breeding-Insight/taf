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

When(/^user selects "([^"]*)" of Name "([^"]*)"$/, async (args1, args2) => {
  await page.click({
    selector: `//table//td[@data-label='Name'][normalize-space(.)="${args2}"]/parent::tr//a[normalize-space(.)='${args1}']`,
    locateStrategy: "xpath",
  });
});

When(/^user selects "([^"]*)" in Role dropdown$/, async (args1) => {
  await page.setValue(
    { selector: "//*[@id='Role']", locateStrategy: "xpath" },
    args1
  );
});

Then(
  /^user can see Name "([^"]*)" with Role as "([^"]*)"$/,
  async (args1, args2) => {
    await page.assert.containsText(
      {
        selector: `//table//td[@data-label='Name'][normalize-space(.)='${args1}']/parent::tr//td[@data-label='Role']`,
        locateStrategy: "xpath",
      },
      args2
    );
  }
);
