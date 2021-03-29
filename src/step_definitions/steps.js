const { client } = require("nightwatch-api");
const { Given, Then, When } = require("cucumber");
const page = client.page.page();

Given(/^user logs with valid credentials$/, async () => {
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

When(/^user selects Traits$/, async () => {
  await page.click("@traitsButton");
});

Then(/^user sees a page of All Traits$/, async () => {
  await page.assert.visible("@traitsTable");
});

Then(/^user sees a row of headers under All Traits$/, async () => {
  await page.assert.visible("@traitsHeaderTable");
});

Then(/^headers are Name, Level, Method, and Scale$/, async () => {
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

When(/^user clicks Show details$/, async () => {
  await page.click("#traitTableLabel tr:nth-child(1) a");
});

When(/^user selects a row under the headers$/, async () => {
  await page.click("#traitTableLabel tr:nth-child(1) td:nth-child(1)");
});

Then(/^user sees a a detail pane appear$/, async () => {
  await page.assert.visible("@traitsPane");
});

Then(/^user not sees a a detail pane appear$/, async () => {
  await page.assert.not.visible("@traitsPane");
});

Then(/^user selects the user$/, () => {
  return true;
});

Given(/^user is logs in as sysad$/, async () => {
  await page.navigate();
  await page.click("@iUnderstandButton");
  await page.click("@loginButton");
  await page.click("@orcidSignInButton");

  await page.setValue("@emailInput", "christian@mailinator.com");
  await page.setValue("@passwordInput", "cucumber1");
  await page.click("@signInButton");
});

Given(/^user is logs in as breeder$/, async () => {
  await page.navigate();
  await page.click("@iUnderstandButton");
  await page.click("@loginButton");
  await page.click("@orcidSignInButton");

  await page.setValue("@emailInput", "christian@mailinator.com");
  await page.setValue("@passwordInput", "cucumber1");
  await page.click("@signInButton");
});

When(
  /user selects System Administration on program-selection page$/,
  async () => {
    await page.click("@systemAdministrationLabel");
  }
);

When(/^user selects Users in left navigation$/, async () => {
  await page.click("@usersLeftMenu");
});

Given(/^user is on the user-management page$/, async () => {
  await page.assert.visible("@usersHeader");
});

Then(/^user can see page of Users$/, async () => {
  await page.assert.visible("@usersTable");
});

Then(/^user can see table header contains$/, async (table) => {
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

Then(/^user can see New User button$/, async () => {
  await page.assert.visible("@newUserButton");
});

Then(/^user can see each row has an Edit link$/, async () => {
  const selector = {
    selector: "//a[contains(text(),'Edit')]",
    locateStrategy: "xpath",
  };

  let rows;
  await client.elements(
    "css selector",
    "#app div.sidebarlayout main table tbody tr",
    ({ value }) => {
      rows = value.length;
    }
  );
  await page.expect.elements(selector).count.equal(rows);
});

Then(/^user can see each row has a Deactivate link$/, async () => {
  const selector = {
    selector: "//a[contains(text(),'Deactivate')]",
    locateStrategy: "xpath",
  };
  await page.expect.elements(selector).count.equal(19);
});

Then(/^user can see Previous page button$/, async () => {
  await page.assert.visible("@previousButton");
});

Then(/^user can see Next page button$/, async () => {
  await page.assert.visible("@nextButton");
});

Then(/^user can see Current page button$/, async () => {
  await page.assert.visible("@paginationButton");
});

Then(/^user can see Results per page combobox$/, async () => {
  await page.assert.visible("@paginationComboBox");
});

Then(/^user can see Label per page$/, async () => {
  await page.assert.visible("@perPageLabel");
});

Then(/^user can see Show All button$/, async () => {
  await page.assert.visible("@showAllButton");
});

When(/^user clicks Show All button$/, async () => {
  await page.assert.visible("@showAllButton");
});

When(/^user selects New User button$/, async () => {
  await page.click("@newUserButton");
});

Then(
  /^user can see banner appears with an error message 'Fix Invalid Fields'$/,
  async () => {
    await page.assert.visible("@topAlertDangerArticle");
    await page.assert.visible("@fixInvalidFieldsText");
  }
);

Then(/^user can see 'Email is required' below the Email field$/, async () => {
  await page.section.newUserForm.assert.visible("@emailIsRequiredText");
});

Then(/^user can see 'Name is required' below the Name field$/, async () => {
  await page.section.newUserForm.assert.visible("@nameIsRequiredText");
});

When(/^user sets "([^"]*)" in Email field$/, async (args1) => {});

Then(/^user can see name field$/, async () => {
  await page.section.newUserForm.assert.visible("@nameField");
});

Then(/^user can see email field$/, async () => {
  await page.section.newUserForm.assert.visible("@emailField");
});

Then(/^user can see role dropdown$/, async () => {
  await page.section.newUserForm.assert.visible("@roleSelect");
});

Then(/^user can see "([^"]*)" under Name field$/, async (args1) => {
  await page.section.newUserForm.assert.containsText("@nameUnicodeText", args1);
});

Then(/^user can see Save button$/, async () => {
  await page.section.newUserForm.assert.visible("@saveButton");
});

Then(/^user can see Cancel button$/, async () => {
  await page.section.newUserForm.assert.visible("@cancelButton");
});

When(/^user sets "([^"]*)" in Name field$/, async (args1) => {
  setUserName(args1);
});

Then(/^user can see "([^"]*)" is in the list of users$/, async (args1) => {
  console.log(args1);
  return true;
});

Then(/^user can see "([^"]*)" in the Email field$/, async (args1) => {
  console.log(args1);
  return true;
});

When(/^user selects Save button$/, async () => {
  await page.section.newUserForm.click("@saveButton");
});

Then(
  /^user can see 'Email must be in email format' below the Email field$/,
  async () => {
    await page.section.newUserForm.assert.visible("@emailIsInvalidText");
  }
);

When(/^user creates a new program$/, async (table) => {
  this.program = {};
  await page.waitForElementVisible("@newProgramButton");
  await page.click("@newProgramButton");
  for (column of table.raw()[0]) {
    for (hash of table.hashes()) {
      switch (column) {
        case "Program Name":
          this.program.name = hash["Program Name"].replace(
            "*",
            Date.now().toString()
          );
          await page.setValue("@programNameField", this.program.name);
          break;
        case "Species":
          this.program.species = hash["Species"];
          await page.setValue("@speciesSelect", this.program.species);
          break;
        default:
          throw new Error(`Unexpected ${column} name.`);
      }
    }
  }
  await page.click("@saveButton");
});

Then(/^user can see a new program is created$/, async () => {
  await page.assert.containsText(
    "#adminProgramTableLabel table tr.is-new td:nth-child(1)",
    this.program.name
  );
  await page.assert.containsText(
    "#adminProgramTableLabel table tr.is-new td:nth-child(2)",
    this.program.species
  );
  console.log("and this" + this.program.name);
});

When(/^user selects Cancel button$/, async () => {
  await page.section.newUserForm.click("@cancelButton");
});

When(/^user sets "([^"]*)" in Role dropdown$/, async (args1) => {
  setRole(args1);
});

When(/^user selects Program "([^"]*)" in left navigation$/, async (args1) => {
  await page.click({
    selector: `//*[@id='sideMenu']//nav//ul//a[contains(text(), '${args1}')]`,
    locateStrategy: "xpath",
  });
});

When(/^user selects "([^"]*)" in left navigation$/, async (args1) => {
  await page.click({
    selector: `//*[@id="sideMenu"]//nav//ul[2]//a[contains(text(), '${args1}')]`,
    locateStrategy: "xpath",
  });
});

Then(/^user does not see new user form$/, async () => {
  await page.assert.not.section("@newUserForm").not.present;
});

Then(/^user does not see a new user in Users list$/, async () => {
  await page.assert.not.elementPresent("tr.is-new");
});

Then(/^user can see a label 'per page'$/, () => {
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
  async () => {
    return true;
  }
);

When(/^user creates a new user$/, async (table) => {
  await page.click("@newUserButton");
  for (column of table.raw()[0]) {
    for (hash of table.hashes()) {
      switch (column) {
        case "Name":
          await setUserName(hash["Name"]);
          break;
        case "Email":
          await setEmail(hash["Email"]);
          break;
        case "Role":
          await setRole(hash["Role"]);
          break;
        default:
          throw new Error(`Unexpected ${column} name.`);
      }
    }
  }
  await page.section.newUserForm.click("@saveButton");
});

When(/^user edits a user$/, async (table) => {
  await showAll();
  //go to the row with matching name
  await page.click({
    selector: `//*[@id='app']//table//tbody//td[contains(text(),'${user.userName}')]/..//a[contains(text(),'Edit')]`,
    locateStrategy: "xpath",
  });
  for (column of table.raw()[0]) {
    for (hash of table.hashes()) {
      switch (column) {
        case "Name":
          await setUserName(hash["Name"]);
          break;
        case "Email":
          await setEmail(hash["Email"]);
          break;
        case "Role":
          await setRole(hash["Role"]);
          break;
        default:
          throw new Error(`Unexpected ${column} name.`);
      }
    }
  }
  await page.section.newUserForm.click("@saveButton");
});

Then(/^user can see a new user is added in users list$/, async () => {
  await page.assert.containsText("tr.is-new td[name='name']", user.userName);
  await page.assert.containsText("tr.is-new td[name='email']", user.email);
  await page.assert.containsText("tr.is-new td[name='roles']", user.role);
});

Then(/^user can see user is in users list$/, async () => {
  await page.assert.visible({
    selector: `*//tr/td[contains(text(), '${user.userName}')]`,
    locateStrategy: "xpath",
  });
  await page.assert.visible({
    selector: `*//tr/td[contains(text(), '${user.email}')]`,
    locateStrategy: "xpath",
  });
});

Then(/^user can see edited user in users list$/, async () => {
  await page.assert.visible({
    selector: `//td[contains(text(),'${user.userName}')]`,
    locateStrategy: "xpath",
  });
  await page.assert.visible({
    selector: `//td[contains(text(),'${user.email}')]`,
    locateStrategy: "xpath",
  });
});

Then(/^user can see "([^"]*)" in the upper right corner$/, async (args1) => {
  await page.assert.visible({
    selector: `//header//h1[text()='${args1}']`,
    locateStrategy: "xpath",
  });
});

Then(
  /^user can see an arrow dropdown on right of System Administation$/,
  async () => {
    await page.assert.visible("@systemAdministationDropDownIcon");
  }
);

When(/^user clicks Edit of a user$/, async () => {
  await showAll();
  await page.pause(1000);
  await page.click({
    selector: `//td[contains(text(),'${user.userName}')]/following-sibling::td//a[@data-testid='edit']`,
    locateStrategy: "xpath",
  });
});

When(/^user can see "([^"]*)" as a program$/, async (args1) => {
  await page.navigateToPrograms();
  await page.waitForElementVisible("@showAllButton");
  await page.click("@showAllButton");
  await page.waitForElementVisible({
    selector: `//*[@id='adminProgramTableLabel']//tr//a[text()=' ${args1} ']`,
    locateStrategy: "xpath",
  });
});

When(
  /^user can see "([^"]*)" has been added to "([^"]*)" as a breeder$/,
  async (args1, args2) => {
    await page.navigateToProgram(args2);

    await page.waitForElementVisible("@programManagementLeftMenu");
    await page.click("@programManagementLeftMenu");
    await page.waitForElementVisible("@userLeftMenu");
    await page.click("@userLeftMenu");
    await page.waitForElementVisible("@showAllButton");
    await page.click("@showAllButton");
    await page.waitForElementVisible({
      selector: `//*[@id='programUserTableLabel']//tr//td[text()=' ${args1} ']`,
      locateStrategy: "xpath",
    });
    await page.waitForElementVisible({
      selector: `//*[@id='programUserTableLabel']//tr//td[text()=' ${args1} ']/following-sibling::td[text()=' breeder ']`,
      locateStrategy: "xpath",
    });
  }
);

When(
  /^user can see "([^"]*)" has been added to "([^"]*)" as a member$/,
  async (args1, args2) => {
    await page.navigateToProgram(args2);

    await page.waitForElementVisible("@programManagementLeftMenu");
    await page.click("@programManagementLeftMenu");
    await page.waitForElementVisible("@userLeftMenu");
    await page.click("@userLeftMenu");
    await page.waitForElementVisible("@showAllButton");
    await page.click("@showAllButton");
    await page.waitForElementVisible({
      selector: `//*[@id='programUserTableLabel']//tr//td[text()=' ${args1} ']`,
      locateStrategy: "xpath",
    });
    await page.waitForElementVisible({
      selector: `//*[@id='programUserTableLabel']//tr//td[text()=' ${args1} ']/following-sibling::td[text()=' member ']`,
      locateStrategy: "xpath",
    });
  }
);

Then(/^user can see 'Welcome, Christian'$/, async () => {
  await page.assert.visible("@welcomeText");
});

When(/^user can see 'Which program are you working with today'$/, async () => {
  await page.assert.visible("@whichProgramText");
});

Then(/^user can see "([^"]*)" is top of the list$/, async (args1) => {
  await page.assert.containsText("@topProgramButton", args1);
});

Then(/^user can see "([^"]*)" is in the list$/, async (args1) => {
  await page.assert.visible({
    selector: `//*[@id='app']//section//a[text()=' ${args1} ']`,
    locateStrategy: "xpath",
  });
});

When(/^user navigates to Program Selection$/, async () => {
  await page.navigateToProgramSelection();
});

Then(/^user can see System Administration combo box$/, async () => {
  await page.assert.visible("@systemAdministrationDropDownIcon");
});

Then(/^user can see 'Logged in as'$/, async () => {
  await page.assert.visible("@loggedInAsLabel");
});

Then(/^user can see a Log out button$/, async () => {
  await page.assert.visible("@logoutButton");
});

Then(/^user can see a header 'Programs'$/, async () => {
  await page.assert.visible("@programsLabel");
});

Then(/^user can see list of all programs - active and inactive$/, async () => {
  await page.assert.visible("@programsTable");
});

Then(/^user can see a New Program button$/, async () => {
  await page.assert.visible("@newProgramButton");
});

When(/^user clicks the combo box of Program Selector$/, async () => {
  await page.click("@programSelectorDropDownButton");
});

Then(/^user can see "([^"]*)" as an option$/, async (args1) => {
  await page.assert.visible({
    selector: `//*[@id='program-menu']/div/a[text()=' ${args1} ']`,
    locateStrategy: "xpath",
  });
});

When(/^user selects "([^"]*)" the program selector$/, async (args1) => {
  await page.click("@programSelectorDropDownButton");
  await page.click({
    selector: `//*[@id='program-menu']/div/a[text()=' ${args1} ']`,
    locateStrategy: "xpath",
  });
});

Then(
  /^user can see "([^"]*)" as label in the bottom of the navigation menu$/,
  async (args1) => {
    await page.assert.visible({
      selector: `//aside/nav/p[text()=' ${args1} ']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "([^"]*)" as link in the bottom of the navigation menu$/,
  async (args1) => {
    await page.assert.visible({
      selector: `//aside//ul[2]//a[text()=' ${args1} ']`,
      locateStrategy: "xpath",
    });
  }
);

//functions
async function setUserName(name) {
  this.user = {};
  user.userName = name.replace("*", Date.now().toString());
  await page.section.newUserForm.clearValue("@nameField");
  await page.section.newUserForm.setValue("@nameField", user.userName);
}

async function setEmail(email) {
  user.email = email.replace("*", Date.now().toString());
  await page.section.newUserForm.clearValue("@emailField");
  return await page.section.newUserForm.setValue("@emailField", user.email);
}

async function setRole(role) {
  user.role = role;
  return await page.section.newUserForm.setValue("@roleSelect", user.role);
}

async function showAll() {
  await page.moveToElement("@showAllButton", 1, 1);
  await page.click("@showAllButton");
}
