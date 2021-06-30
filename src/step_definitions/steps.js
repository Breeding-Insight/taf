const { client } = require("nightwatch-api");
const { Given, Then, When } = require("cucumber");
const path = require("path");
const page = client.page.page();
const importFolder = path.join(__basedir + "\\src\\files\\TraitImport_v03");
const fs = require("fs");
const reporter = require("cucumber-html-reporter");

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

Given(/^user logs in as "([^"]*)"$/, async (args1) => {
  await page.navigate();
  await waitReady();
  await page.click("@iUnderstandButton");
  await page.click("@loginButton");
  await page.click("@orcidSignInButton");

  let email;
  let password;

  switch (args1) {
    case "sysad":
      email = "christian@mailinator.com";
      password = "cucumber1";
      break;
    case "Cucumber Breeder":
      email = "cucumberbreeder@mailinator.com";
      password = "cucumber1";
      break;
    case "Cucumber Member":
      email = "cucumbermember@mailinator.com";
      password = "cucumber2";
      break;
    case "TrailMix Breeder":
      email = "trailmix@mailinator.com";
      password = "trailmix1";
      break;
    default:
      throw new Error("Unknown user name");
  }
  await page.setValue("@emailInput", email);
  await page.setValue("@passwordInput", password);
  await page.click("@signInButton").saveScreenshot(`./screenshots/login.png`);
  //this.attach(fs.readFileSync(`./screenshots/program-selecton.png`), 'image/png');
  //await client.takeScreenshot().then(function (buffer) {
	  //return this.attach(buffer, 'image/png')});
	//need driver/browser defined
	//browser and client in theory interchangeable but client doesn't have takeScreenshot()?
	//also asynchronous, need to wait for it, await?
	//but client can ALSO equal nightwatch?
  //.saveScreenshot(`./screenshots/program-selecton.png`);
	
	//fs.readFileSync(file)
});

When(/user selects "([^"]*)" on program-selection page$/, async (args1) => {
  await page.click({
    selector: `//*[@id='app']//main//a[normalize-space(.)='${args1}']`,
    locateStrategy: "xpath",
  }).saveScreenshot(`./screenshots/program-selecton.png`);
});

When(/^user selects Users in navigation$/, async () => {
  await page.click("@usersLeftMenu");
});

Given(/^user is on the user-management page$/, async () => {
  await page.assert.visible("@usersHeader");
});

When(/^user is on the program-management page$/, async () => {
  await page.assert.visible("#adminProgramTableLabel");
});

Then(/^user can see page of Users$/, async () => {
  await page.assert.visible("@usersTable");
});

Then(/^user can see page of Programs$/, async () => {
  await page.assert.visible("#adminProgramTableLabel");
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

Then(/^user can see each row doesn't have an Edit link$/, async () => {
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

Then(/^user can see each row doesn't have a Deactivate link$/, async () => {
  const selector = {
    selector: "//a[contains(text(),'Deactivate')]",
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
  await page.waitForElementVisible("@newUserButton");
  await page.click("@newUserButton");
});

Then(
  /^user can see banner appears with an error message 'Error creating user, a user with this email already exists'$/,
  async () => {
    await page.assert.visible("@topAlertDangerArticle");
    const selector =
      "#app > div:nth-child(1) > article.notification.is-marginless.is-danger > div > div > div > div:nth-child(2)";
    await page.assert.visible(selector);
    await page.assert.containsText(
      selector,
      "Error creating user, a user with this email already exists"
    );
  }
);

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

Then(/^user can see 'Role is required' below the Role field$/, async () => {
  await page.section.newUserForm.assert.visible("@roleIsRequiredText");
});

When(/^user sets "([^"]*)" in Email field$/, async (args1) => {
  await setEmail(args1);
});

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

When(/^user selects Program "([^"]*)" in navigation$/, async (args1) => {
  await page.click({
    selector: `//*[@id='sideMenu']//nav//ul//a[contains(text(), '${args1}')]`,
    locateStrategy: "xpath",
  });
});

When(/^user selects "([^"]*)" in navigation$/, async (args1) => {
  await page.click({
    selector: `//*[@id="sideMenu"]//nav//a[contains(text(), '${args1}')]`,
    locateStrategy: "xpath",
  });
});

Then(/^user does not see new user form$/, async () => {
  await page.expect.section("@newUserForm").not.present;
});

Then(/^user can see new user form$/, async () => {
  await page.expect.section("@newUserForm").present;
});

Then(/^user does not see a new user in Users list$/, async () => {
  await page.assert.not.elementPresent("tr.is-new");
});

Then(/^user can see a label 'per page'$/, () => {
  return true;
});

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

When(/^user clicks 'New User' button$/, async () => {
  await page.click("@newUserButton");
});

When(/^user edits a user$/, async (table) => {
  await closeNotification();
  await showAll();

  //go to the row with matching name
  const selector = {
    selector: `//*[@id='app']//table//tbody//td[contains(text(),'${user.userName}')]/..//a[contains(text(),'Edit')]`,
    locateStrategy: "xpath",
  };
  await page.moveToElement(selector, 1, 1);
  await page.click(selector);
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

Then(/^user can see a new user is added in User$/, async () => {
  await showAll();
  await page.assert.containsText("tr.is-new td[name='name']", user.userName);
  await page.assert.containsText("tr.is-new td[name='email']", user.email);
  await page.assert.containsText("tr.is-new td[name='roles']", user.role);
});

Then(/^user can see user is in users list$/, async () => {
  await showAll();
  await page.assert.visible({
    selector: `//tr/td[normalize-space(.)='${user.userName}')]`,
    locateStrategy: "xpath",
  });
  await page.assert.visible({
    selector: `//tr/td[normalize-space(.)='${user.email}')]`,
    locateStrategy: "xpath",
  });
  await page.assert.visible({
    selector: `//td[contains(text(), '${user.email}')]/..//td[normalize-space(.)='${user.role}')]`,
    locateStrategy: "xpath",
  });
});

Then(/^user can not see user is in users list$/, async () => {
  await page.assert.not.elementPresent({
    selector: `//tr/td[contains(text(), '${user.email}')]`,
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

  const button = "#app > div > article:nth-of-type(1) > button";

  await closeNotification();

  const selector = {
    selector: `//td[contains(text(),'${user.userName}')]/following-sibling::td//a[@data-testid='edit']`,
    locateStrategy: "xpath",
  };
  await page.moveToElement(selector, 1, 1);
  await page.click(selector);
});

When(/^user can see "([^"]*)" as a program$/, async (args1) => {
  await page.navigateToPrograms();
  await showAll();
  await page.waitForElementVisible({
    selector: `//*[@id='adminProgramTableLabel']//tr//a[normalize-space(.)='${args1}']`,
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
      selector: `//*[@id='programUserTableLabel']//tr//td[normalize-space(.)='${args1}']`,
      locateStrategy: "xpath",
    });
    await page.waitForElementVisible({
      selector: `//*[@id='programUserTableLabel']//tr//td[normalize-space(.)='${args1}']/following-sibling::td[normalize-space(.)='breeder']`,
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
      selector: `//*[@id='programUserTableLabel']//tr//td[normalize-space(.)='${args1}']`,
      locateStrategy: "xpath",
    });
    await page.waitForElementVisible({
      selector: `//*[@id='programUserTableLabel']//tr//td[normalize-space(.)='${args1}']/following-sibling::td[normalize-space(.)='member']`,
      locateStrategy: "xpath",
    });
  }
);

Then(/^user can see "([^"]*)" on program-selection page$/, async (name) => {
  await page.assert.containsText("@welcomeText", name);
});

Then(/^user can see 'Which program are you working with today'$/, async () => {
  await page.assert.visible("@whichProgramText");
});

Then(/^user can see "([^"]*)" is top of the list$/, async (args1) => {
  await page.assert.containsText("@topProgramButton", args1);
});

Then(/^user can see "([^"]*)" is in the list$/, async (args1) => {
  await page.assert.visible({
    selector: `//*[@id='app']//section//a[normalize-space(.)='${args1}']`,
    locateStrategy: "xpath",
  });
});

When(/^user navigates to Program Selection$/, async () => {
  await page.navigateToProgramSelection();
});

Then(/^user can see System Administration combo box$/, async () => {
  await page.assert.visible("@systemAdministrationDropDownIcon");
});

Then(/^user can see Program Selection combo box$/, async () => {
  await page.assert.visible("@systemAdministrationDropDownIcon");
});

Then(/^user cannot see Program Selection combo box$/, async () => {
  await page.assert.not.elementPresent("@systemAdministrationDropDownIcon");
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
    selector: `//*[@id='program-menu']/div/a[normalize-space(.)='${args1}']`,
    locateStrategy: "xpath",
  });
});

When(/^user selects "([^"]*)" the program selector$/, async (args1) => {
  await page.click("@programSelectorDropDownButton");
  await page.click({
    selector: `//*[@id='program-menu']/div/a[normalize-space(.)='${args1}']`,
    locateStrategy: "xpath",
  });
});

Then(
  /^user can see "([^"]*)" as label in the bottom of the navigation menu$/,
  async (args1) => {
    await page.assert.visible({
      selector: `//aside/nav/p[normalize-space(.)='${args1}']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see "([^"]*)" as link in the bottom of the navigation menu$/,
  async (args1) => {
    await page.assert.visible({
      selector: `//aside//ul[2]//a[normalize-space(.)='${args1}']`,
      locateStrategy: "xpath",
    });
  }
);

Then(/^user can see Welcome page of program$/, async () => {
  await page.assert.visible("@programWelcomeText");
});

Then(/^user can see "([^"]*)" as logged in$/, async (args1) => {
  await page.assert.visible("@loggedInAsLabel");
  await page.getText("@loggedInAsLabel", ({ value }) => {
    console.log("text value is " + value);
  });
  await page.assert.containsText("@loggedInAsLabel", args1);
});

Then(/^user can see "([^"]*)" in navigation$/, async (args1) => {
  switch (args1) {
    case "Home":
      await page.assert.visible("@homeMenu");
      break;
    case "Traits":
      await page.assert.visible("@traitsMenu");
      break;
    case "Program Management":
      await page.assert.visible("@programManagementMenu");
      break;
    default:
      throw new Error(`Unexpected ${args1} name.`);
  }
});

Then(/^user can see Program User Management page$/, async () => {
  await page.assert.containsText(
    "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > h1",
    "Program Management"
  );
});

Then(/^user can see Users page$/, async () => {
  await page.assert.visible("#programUserTableLabel");
});

When(/^user selects Deactivate of user$/, async () => {
  await page.click({
    selector: `//td[normalize-space(.)='${user.userName}']/..//a[2]`,
    locateStrategy: "xpath",
  });
});

Then(/^user can see a modal with Deactivate message$/, async () => {
  const selector =
    "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.modal.is-active > div.modal-card > section > div > div > article > div > div > h3";
  await page.assert.visible(selector);
  await page.assert.containsText(
    selector,
    `Deactivate ${user.userName} from the system?`
  );

  const messageText1 =
    "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.modal.is-active > div.modal-card > section > div > div > section > p:nth-child(1)";
  await page.assert.containsText(
    messageText1,
    "Access for this user will be removed system wide."
  );

  const messageText2 =
    "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.modal.is-active > div.modal-card > section > div > div > section > p:nth-child(2)";
  await page.assert.containsText(
    messageText2,
    "Program-related data collected by this user will not be affected by this change."
  );
});

Then(/^user can see 'Yes, deactivate' button$/, async () => {
  await page.assert.visible("@deactivateButton");
});

Then(/^user can see 'Cancel' button$/, async () => {
  await page.assert.visible({
    selector: "//button[normalize-space(.)='Cancel']",
    locateStrategy: "xpath",
  });
});

When(/^user selects 'Cancel' button$/, async () => {
  await page.click({
    selector: "//button[normalize-space(.)='Cancel']",
    locateStrategy: "xpath",
  });
});

When(/^user selects modal Yes, archive button$/, async () => {
  await page.click({
    selector: "//strong[normalize-space(.)='Yes, archive']/..",
    locateStrategy: "xpath",
  });
});

Then(/^user can see "([^"]*)" in the the Role dropdown$/, async (args1) => {
  await page.section.newUserForm.assert.containsText("@roleSelect", args1);
});

Then(/^user can header "([^"]*)"$/, async (args1) => {
  await page.assert.containsText("#app main section h1", args1);
});

Then(/^user can see a message 'Before You Import...'$/, async () => {
  await page.assert.containsText(
    "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.trait-import-template.mb-5 > article > div > nav > div.level-left > div > div > strong",
    "Before You Import..."
  );
});

Then(
  /^user can see a message 'Prepare trait information for import using the provided template.'$/,
  async () => {
    await page.assert.containsText(
      "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.trait-import-template.mb-5 > article > div > nav > div.level-left > div > div",
      "Prepare trait information for import using the provided template."
    );
  }
);

Then(
  /^user can see a button 'Download the Trait Import Template'$/,
  async () => {
    await page.assert.containsText(
      "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.trait-import-template.mb-5 > article > div > nav > div.level-right > div > div > a",
      "Download the Trait Import Template"
    );
  }
);

Then(/^user can see a button 'Choose a file...'$/, async () => {
  await page.assert.containsText(
    "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.file-select > div > article > nav > div.level-left > div > div > label > div > span:nth-child(2)",
    "Choose a file..."
  );
});

When(/^user uploads "([^"]*)" file$/, async (args1) => {
  await page.setValue(
    "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.file-select > div > article > nav > div.level-left > div > div > label > input[type=file]",
    path.resolve(importFolder, args1)
  );
});

Then(/^user can see "([^"]*)" displayed$/, async (args1) => {
  await page.assert.containsText(
    "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.file-select > div > article > nav > div.level-left > div:nth-child(1) > div",
    args1
  );
});

Then(/^user cans see 'Choose a different file...' button$/, async () => {
  await page.assert.visible(
    "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.file-select > div > article > nav > div.level-left > div:nth-child(2) > div > label > div > span:nth-child(2)"
  );
});

Then(/^user can see 'Import' button$/, async () => {
  await page.assert.visible(
    "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.file-select > div > article > nav > div.level-right > div > div > a"
  );
});

When(/^user selects "([^"]*)" button$/, async (args1) => {
  await page.pause(1000);
  const selector = {
    selector: `//button[starts-with(normalize-space(.),'${args1}')]`,
    locateStrategy: "xpath",
  };
  await page.waitForElementVisible(selector);
  await page.click(selector);
});

Then(/^user can see 'Curate And Confirm New Traits' header$/, async () => {
  await page.assert.containsText(
    "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > h1",
    "Curate and Confirm New Traits"
  );
});

Then(/^user can see "([^"]*)" button$/, async (args1) => {
  await page.assert.visible({
    selector: `//*[contains(@class,'button')][contains(text(),'${args1}')]`,
    locateStrategy: "xpath",
  });
});

Then(/^user see a list of traits in a table$/, async () => {
  await page.assert.visible("#traitsImportTableLabel");
});

Then(
  /^user can see "([^"]*)" column header in "([^"]*)"$/,
  async (args1, args2) => {
    let id;
    if (args2.includes("Traits Import Table")) id = "traitsImportTableLabel";
    else id = "traitTableLabel";

    await page.assert.visible({
      selector: `//*[@id='${id}']//table/thead/tr/th[contains(text(),'${args1}')]`,
      locateStrategy: "xpath",
    });
  }
);

Then(/^user can see each row has a "([^"]*)" link$/, async (args1) => {
  await showAll();
  let rows;

  await client.elements("css selector", "tbody tr", ({ value }) => {
    return (rows = value.length);
  });

  await page.expect
    .elements({
      selector: "//a[normalize-space(.)='Show details']",
      locateStrategy: "xpath",
    })
    .count.equal(rows);
});

Then(/^user can see a modal box$/, async () => {
  await page.assert.visible(
    "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.modal.is-active > div.modal-card"
  );
});

Then(/^user can not see a modal box$/, async () => {
  await page.assert.not.elementPresent("@modalCard");
});

Then(/^user can sees 'Abort This Import' in modal box$/, async () => {
  await page.assert.containsText(
    "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.modal.is-active > div.modal-card > section > div > div > article > div > div > h3",
    "Abort This Import"
  );
});

Then(
  /^user can see 'No traits will be added, and the import in progress will be completely removed.' in modal box$/,
  async () => {
    await page.assert.containsText(
      "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.modal.is-active > div.modal-card > section > div > div > section > p",
      "No traits will be added, and the import in progress will be completely removed."
    );
  }
);

Then(/^user can see 'Yes, abort' button$/, async () => {
  await page.assert.containsText(
    "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.modal.is-active > div.modal-card > section > div > div > div > div > button.button.is-danger > strong",
    "Yes, abort"
  );
});

When(/^user selects 'Import' button$/, async () => {
  await page.click(
    "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.file-select > div > article > nav > div.level-right > div > div > a"
  );
  await page.pause(3000);
});

Then(/^user can see 'Imported cancelled' in banner$/, async () => {
  await page.assert.containsText("@bannerText", "Import cancelled");
});

Then(
  /^user can see 'Imported traits have been added to Snacks.' in banner$/,
  async () => {
    await page.assert.containsText(
      "@bannerText",
      "Imported traits have been added to Snacks."
    );
  }
);

When(/^user selects 'Yes, abort' button$/, async () => {
  await page.click(
    "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.modal.is-active > div.modal-card > section > div > div > div > div > button.button.is-danger > strong"
  );
});

Then(/^user can see Traits table$/, async () => {
  await page.assert.visible("#traitTableLabel");
});

Then(/^user can see an error message "([^"]*)"$/, async (args1) => {
  await page.assert.visible({
    selector: `//*[@id="app"]//li[contains(text(), "${args1}")]`,
    locateStrategy: "xpath",
  });
});

When(/^user sets "([^"]*)" in Name field of User$/, async (args1) => {
  await setUserName(args1);
});

When(/^user sets "([^"]*)" in Email field of User$/, async (args1) => {
  await setEmail(args1);
});

When(/^user sets "([^"]*)" in Role dropdown of User$/, async (args1) => {
  await setRole(args1);
});

When(/^user click 'Save' button in User$/, async () => {
  await page.click("@saveUserButton");
});

Then(/^user can see banner contains "([^"]*)"$/, async (args1) => {
  await page.assert.visible({
    selector: `//article//div[normalize-space(.)='${args1}' and @class='column']`,
    locateStrategy: "xpath",
  });
});

Then(/^user can see "([^"]*)" in banner$/, async (args1) => {
  await page.assert.visible({
    selector: `//article//div[normalize-space(.)='${args1}' and @class='column']`,
    locateStrategy: "xpath",
  });
});

Then(/^user can see "([^"]*)" column in Users$/, async (args1) => {
  await page.assert.visible({
    selector: `//*[@id='programUserTableLabel']//th[normalize-space(.)='${args1}']`,
    locateStrategy: "xpath",
  });
});

Then(/^user can see new user added in User$/, async () => {
  await showAll();
  await page.assert.visible("");
});

Then(/^user can see 'Previous' button$/, async () => {
  await page.assert.visible("@previousButton");
});

Then(/^user can see 'Next' button$/, async () => {
  await page.assert.visible("@nextButton");
});

Then(/^user can see 'Show All' button$/, async () => {
  await page.assert.visible("@showAllButton");
});
Then(/^user can see 'per page' label$/, async () => {
  await page.assert.visible("@perPageLabel");
});

Then(/^user can see Results Per Page dropdown$/, async () => {
  await page.assert.visible("@paginationComboBox");
});

Then(/^user can see 'New Location' in Locations$/, async () => {
  await page.assert.visible("@newLocationButton");
});

Then(/^user can see 'System Administration' title on Programs$/, async () => {
  await page.assert.visible("@systemAdministrationLabel");
});

Then(/^user can not see "([^"]*)" in navigation$/, async (args1) => {
  await page.assert.not.elementPresent({
    selector: `//*[@id="sideMenu"]//nav//a[normalize-space(.)='${args1}']`,
    locateStrategy: "xpath",
  });
});

When(/^user selects 'Yes, deactivate' button$/, async () => {
  await page.click("@deactivateButton");
});

When(/^user selects 'Edit' of "([^"]*)" of Users$/, async (args1) => {
  await showAll();
  await page.click({
    selector: `//*[@id='app']//table/tbody/tr[contains(normalize-space(.),'${args1}')]//a[normalize-space(.)='Edit']`,
    locateStrategy: "xpath",
  });
});

When(/^user selects 'Save' button in Users$/, async () => {
  await page.clickButton("Save");
});

Then(/^user can see 'New Program' button on Program$/, async() => {
	await page.assert.visible("@newProgramButton");
});

When(/^user selects 'New Program' button in Programs page$/, async() => {
  await page.click("@newProgramButton");
});


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
  await page.section.newUserForm.setValue("@emailField", user.email);
}

async function setRole(role) {
  user.role = role;
  return await page.section.newUserForm.setValue("@roleSelect", user.role);
}

async function showAll() {
  await page.moveToElement("@showAllButton", 1, 1);
  await page.pause(1000);
  await page.click("@showAllButton");
}

async function closeNotification() {
  await page.pause(1000);
  const button = "#app > div > article:nth-of-type(1) > button";
  let visible;
  await page.isVisible(button, ({ value }) => {
    return (visible = value);
  });
  if (visible) await page.click(button);
}

async function waitReady() {
  const StopWatch = require("@slime/stopwatch");
  let stopWatch = new StopWatch();
  stopWatch.startTimer();

  let text;
  const selector = "#versionInfo > span > span > a:nth-child(2)";
  while (stopWatch.getTimeElapsedInMs < 100000) {
    await page.getText(selector, ({ value }) => {
      if (value.error) {
        throw Error(value.error);
      }
      text = value;
    });
    if (!(text.includes("api loading") || text.includes("api unknown"))) return;
    await client.refresh();
    await client.pause(10000);
  }
  stopWatch.stopTimer();
  throw new Error("Application version failed to load. Unable to login.");
}
