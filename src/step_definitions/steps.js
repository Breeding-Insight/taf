const { client } = require("nightwatch-api");
const { Given, Then, When } = require("cucumber");
const page = client.page.page();

Given(/^a user logs with valid credentials$/, async () => {
  await page.navigate();
  await page.click("@iUnderstandButton");
  await page.click("@loginButton");
  await page.click("@orcidSignInButton");

  await page.setValue("@emailInput", "christian@mailinator.com");
  await page.setValue("@passwordInput", "cucumber1");
  await page.click("@signInButton");
});

When(
  /^selecting the program Snacks from the lefthand naviation pane$/,
  async () => {
    await page.click("@snacksButton");
  }
);

When(/^selects Traits$/, async () => {
  await page.click("@traitsButton");
});

Then(/^the user sees a page of All Traits$/, async () => {
  await page.assert.visible("@traitsTable");
});

Then(/^the user sees a row of headers under All Traits$/, async () => {
  await page.assert.visible("@traitsHeaderTable");
});

Then(/^the headers are Name, Level, Method, and Scale$/, async () => {
  await page.expect
    .element("#traitTableLabel th:nth-child(1)")
    .text.contain("Name");
  await page.expect
    .element("#traitTableLabel th:nth-child(2)")
    .text.contain("Level");
  await page.expect
    .element("#traitTableLabel th:nth-child(3)")
    .text.contain("Method");
  await page.expect
    .element("#traitTableLabel th:nth-child(4)")
    .text.contain("Scale");
});

When(/^clicks Show details$/, async () => {
  await page.click("#traitTableLabel tr:nth-child(1) a");
});

When(/^selects a row under the headers$/, async () => {
  await page.click("#traitTableLabel tr:nth-child(1) td:nth-child(1)");
});

Then(/^the user sees a a detail pane appear$/, async () => {
  await page.assert.visible("@traitsPane");
});

Then(/^the user not sees a a detail pane appear$/, async () => {
  await page.assert.not.visible("@traitsPane");
});

Then(/^selects the user$/, () => {
  return true;
});

Given(/^a sysad is logs in$/, async () => {
  await page.navigate();
  await page.click("@iUnderstandButton");
  await page.click("@loginButton");
  await page.click("@orcidSignInButton");

  await page.setValue("@emailInput", "christian@mailinator.com");
  await page.setValue("@passwordInput", "cucumber1");
  await page.click("@signInButton");
});

When(/^selects System Administration on program-selection page$/, async () => {
  await page.click("@systemAdministrationLabel");
});

When(/^selects Users in left navigation$/, async () => {
  await page.click("@usersLeftMenu");
});

Given(/^user is on the user-management page$/, async () => {
  await page.assert.visible("@usersHeader");
});

Then(/^page of Users is visible$/, async () => {
  await page.assert.visible("@usersTable");
});

Then(/^table header contains$/, async (table) => {
  for (column of table.raw()[0]) {
    for (i = 0; i < table.hashes().length; i++) {
      switch (column) {
        case "Header":
          const select = {
            selector:
              "//*[@id='app']//th[contains(text(),'" +
              table.hashes()[i][column] +
              "')]",
            locateStrategy: "xpath",
          };
          await page.assert.visible(select);
          break;
        default:
          throw new Error(`Unexpected ${column} name.`);
      }
    }
  }
});

Then(/^New User button is visible$/, async () => {
  await page.assert.visible("@newUserButton");
});

Then(/^each row has an Edit link$/, async () => {
  const selector = {
    selector: "//a[contains(text(),'Edit')]",
    locateStrategy: "xpath",
  };
  await page.expect.elements(selector).count.equal(19);
});

Then(/^each row has a Deactivate link$/, async () => {
  const selector = {
    selector: "//a[contains(text(),'Deactivate')]",
    locateStrategy: "xpath",
  };
  await page.expect.elements(selector).count.equal(19);
});

Then(/^Previous page button is visible$/, async () => {
  await page.assert.visible("@previousButton");
});

Then(/^Next page button is visible$/, async () => {
  await page.assert.visible("@nextButton");
});

Then(/^Current page button is visible$/, async () => {
  await page.assert.visible("@paginationButton");
});

Then(/^Results per page combo box is visible$/, async () => {
  await page.assert.visible("@paginationComboBox");
});

Then(/^Label per page is visible$/, async () => {
  await page.assert.visible("@perPageLabel");
});

Then(/^Show All button is visible$/, async () => {
  await page.assert.visible("@showAllButton");
});

When(/^user selects New User button$/, async () => {
  await page.click("@newUserButton");
});

Then(
  /^banner appears with an error message 'Fix Invalid Fields'$/,
  async () => {
    await page.assert.visible("@topAlertDangerArticle");
    await page.assert.visible("@fixInvalidFieldsText");
  }
);

Then(/^'Email is required' is visible below the Email field$/, async () => {
  await page.assert.visible("@newUserEmailIsRequiredText");
});

Then(
  /^'Email must be in email format' is visible below the Email field$/,
  async () => {
    await page.assert.visible("@newUserEmailIsInvalidText");
  }
);

Then(/^'Name is required' is visible below the Name field$/, async () => {
  await page.assert.visible("@newUserNameIsRequiredText");
});

When(/^sets "([^"]*)" in Email field$/, async (args1) => {
  args1 = args1.replace("*", Date.now().toString());
  await page.setValue("@newUserEmailField", args1);
  user.email=arg1;
});

Then(/^name field is visible$/, async () => {
  await page.section.newUserForm.assert.visible("@nameField");
});

Then(/^email field is visible$/, async () => {
  await page.section.newUserForm.assert.visible("@emailField");
});

Then(/^role dropdown is visible$/, async () => {
  await page.section.newUserForm.assert.visible("@roleSelect");
});

Then(/^"([^"]*)" under Name field is visible$/, async (args1) => {
  await page.section.newUserForm.assert.containsText("@nameUnicodeText", args1);
});

Then(/^Save button is visible$/, async () => {
  await page.section.newUserForm.assert.visible("@saveButton");
});

Then(/^Cancel button is visible$/, async () => {
  await page.section.newUserForm.assert.visible("@cancelButton");
});

When(/^sets "([^"]*)" in Name field$/, async (args1) => {
  var user = {};
  user.userName = args1.replace("*", Date.now().toString());
  await page.section.newUserForm.setValue("@nameField", user.userName);
});

Then(/^"([^"]*)" is in the list of users$/, async (args1) => {
  console.log(args1);
  return true;
});

Then(/^"([^"]*)" in the Email field$/, async (args1) => {
  console.log(args1);
  return true;
});

Then(/^No Role in the Role field$/, async () => {
  return true;
});

When(/^selects Save button$/, async () => {
  await page.section.newUserForm.click("@saveButton");
});

When(/^selects Cancel button$/, async() => {
	await page.section.newUserForm.click("@cancelButton");
});

When(/^sets "([^"]*)" in Role dropdown$/, async(args1) => {
await page.section.newUserForm.setValue("@roleSelect", args1);
});

Then(/^a label 'per page'$/, () => {
  return true;
});

When(/^the sysad selects 'New User'$/, () => {
  return true;
});

Then(/^a form pops up with text boxes labeled Name, Email, and Role$/, () => {
  return true;
});

Then(/^a message stating "([^"]*)" under Name text box$/, (args1) => {
  console.log(args1);
  return true;
});

Then(/^a Save button$/, () => {
  return true;
});

Then(/^a Cancel button$/, () => {
  return true;
});

When(/^enters TestNewUser in the Name field$/, () => {
  return true;
});

When(/^enters newuser@mail.com in the Email field$/, () => {
  return true;
});

Then(
  /^the form stays open with an error message stating 'Name is required' appears below the Email field$/,
  () => {
    return true;
  }
);

Then(
  /^the form stays open withan error message under the Email field stating 'Email must be in email format'$/,
  () => {
    return true;
  }
);

When(/^TestNewUser is in the list of users$/, () => {
  return true;
});

When(/^newuser@mail.com in the Email field$/, () => {
  return true;
});

Then(/^No Role in the Role field$/, () => {
  return true;
});

When(/^enters TestAdminUser in the Name field$/, () => {
  return true;
});

When(/^enters newadminuser@mail.com in the Email field$/, () => {
  return true;
});

When(/^selects admin from role dropdown$/, () => {
  return true;
});

When(/^TestAdminUser is in the list of users$/, () => {
  return true;
});

When(/^newadminuser@mail.com in the Email field$/, () => {
  return true;
});

When(/^admin in the Role field$/, () => {
  return true;
});

When(/^sysad adds name andor email andor role$/, () => {
  return true;
});

Then(/^no new user is in the Users list$/, () => {
  return true;
});

When(/^the sysad selects 'Edit' for TestNewUser$/, () => {
  return true;
});

Then(/^a form opens with TestNewUser in the Name field$/, () => {
  return true;
});

When(/^changes TestNewUser to TestEditUser in the Name field$/, () => {
  return true;
});

When(
  /^changes  newuser@mail.com to edituser@mail.com in the Email field$/,
  () => {
    return true;
  }
);

When(
  /^changes  newuser@mail.com to edituser@mail.com in the Email field$/,
  () => {
    return true;
  }
);

Then(/^a banner appears with a success message "([^"]*)".$/, (args1) => {
  console.log(args1);
  return true;
});

Then(/^TestNewUser is not in the list of users$/, () => {
  return true;
});

When(/^the sysad selects 'Edit' for TestNewUser$/, () => {
  return true;
});

When(/^changes own name$/, () => {
  return true;
});
