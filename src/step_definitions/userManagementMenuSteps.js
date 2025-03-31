const { Given, Then, When } = require("@cucumber/cucumber");

Then(/^user selects User Status menu dropdown$/, async () => {
  await this.browser.page.page().pause(5000);
  await this.browser.page.page().click("@userStatusMenuDropDownButton");
});

Then(/^user can see "([^"]*)" as logged in$/, async (args1) => {
  await this.browser.page.page().assert.visible("@loggedInAsLabel");
  await this.browser.page.page().getText("@loggedInAsLabel", ({ value }) => {
    console.log("text value is " + value);
  });
  await this.browser.page.page().assert.containsText("@loggedInAsLabel", args1);
});

Then(/^user can see a Log out button$/, async () => {
  await this.browser.page.page().assert.visible("@logoutButton");
});

When(/^user selects "([^"]*)" of Name "([^"]*)"$/, async (args1, args2) => {
  await this.browser.page.page().click({
    selector: `//table//td[@data-label='Name'][normalize-space(.)="${args2}"]/parent::tr//a[normalize-space(.)='${args1}']`,
    locateStrategy: "xpath",
  });
});

When(/^user selects "([^"]*)" in Role dropdown$/, async (args1) => {
  await this.browser.page.page().setValue(
    { selector: "//*[@id='Role']", locateStrategy: "xpath" },
    args1
  );
});

Then(/^user can not edit Role dropdown$/, async () => {
  let status;
  await this.browser.page.page().getAttribute(
    { selector: "//select[@id='Role']", locateStrategy: "xpath" },
    "disabled",
    (result) => {
      state = result.value;
    }
  );
  await client.assert.equal(state, "true");
});

Then(
  /^user can see Name "([^"]*)" with Role as "([^"]*)"$/,
  async (args1, args2) => {
    await this.browser.page.page().assert.containsText(
      {
        selector: `//table//td[@data-label='Name'][normalize-space(.)='${args1}']/parent::tr//td[@data-label='Role']`,
        locateStrategy: "xpath",
      },
      args2
    );
  }
);
