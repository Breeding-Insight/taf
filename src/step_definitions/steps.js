const { client } = require("nightwatch-api");
const { Given, Then, When, World } = require("@cucumber/cucumber");
const path = require("path");
const page = client.page.page();
const ontologyPage = client.page.ontologyPage();
const importFolder = path.join(__basedir, "src", "files", "TraitImport");
const germplasmFolder = path.join(__basedir, "src", "files", "GermplasmImport");
const genotypeSamplesFolder = path.join(
  __basedir,
  "src",
  "files",
  "GenotypeSamplesImport"
);
const fs = require("fs");
const user = {};
const helpers = require("./helpers.js");
const { timeStamp, time, assert } = require("console");
const experimentsObservationsPage = client.page.experimentsObservationsPage();

Given(/^user logs with valid credentials$/, async () => {
  await page.navigate();
  await page.waitForElementVisible(
    "@iUnderstandButton",
    10000,
    false,
    async (result) => {
      if (result.status == -1) await page.click("@iUnderstandButton");
    }
  );
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

Given(/^user logs in as "([^"]*)"$/, async function (args1) {
  if (this.parameters.launch_url != undefined) {
    await client.url(this.parameters.launch_url);
  } else {
    await page.navigate();
  }

  let status;
  //await waitReady();
  await page.waitForElementVisible(
    "@iUnderstandButton",
    10000,
    false,
    async (result) => {
      status = result.value;
    }
  );

  if (status) await page.click("@iUnderstandButton");

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

  await page.isVisible("@acceptAllCookies", ({ value }) => {
    if (value) page.click("@acceptAllCookies");
  });

  await page.setValue("@emailInput", email);
  await page.setValue("@passwordInput", password);
  await page.click("@signInButton");

  if (client.globals.breedingInsightVersion == undefined) {
    let version = 0;
    try {
      await page.getText(
        { selector: "footer span", timeout: 120000 },
        ({ value }) => {
          version = String(value).trim();
        }
      );
    } catch (error) {
      //try another control
      await page.getText(
        { selector: "#versionInfo span span", timeout: 120000 },
        ({ value }) => {
          version = String(value).trim();
        }
      );
    }
    client.globals.breedingInsightVersion = version;
  }
});

When(/^user navigates to Program Selection page$/, async function () {
  await navigateToProgramSelection();
});

When(/^user selects Users in navigation$/, async () => {
  await page.section.navigationMenu.click("@usersLink");
});

Given(/^user is on the user-management page$/, async () => {
  await page.assert.visible("@usersHeader");
});

Then(/^user can see page of Users$/, async () => {
  await page.assert.visible("@usersTable");
});

Then(/^user can see page of Programs$/, async () => {
  await page.assert.visible("#adminProgramTableLabel");
});

//For Buefy tables
Then(/^user can see table header contains$/, async (table) => {
  for (column of table.raw()[0]) {
    for (i = 0; i < table.hashes().length; i++) {
      switch (column) {
        case "Header":
          const select = {
            selector:
              "//th//span[contains(text(),'" +
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

Then(/^user can not see New User button$/, async () => {
  await page.assert.not.elementPresent("@newUserButton");
});

Then(/^user can not see "([^"]*)" link$/, async (args1) => {
  await page.assert.not.elementPresent({
    selector: `//a[contains(text(),'${args1}')]`,
    locateStrategy: "xpath",
  });
});

Then(/^user can see each row has an Edit link$/, async () => {
  const selector = {
    selector: "//td/a[normalize-space()='Edit']",
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

Then(
  /^user can see each row does not have an? "([^"]*)" link$/,
  async (args1) => {
    const selector = {
      selector: `//a[contains(text(),'${args1}')]`,
      locateStrategy: "xpath",
    };
    await page.expect.elements(selector).count.equal(0);
  }
);

Then(/^user can see Previous page button$/, async () => {
  await page.assert.visible("@previousButton");
});

Then(/^user can see Next page button$/, async () => {
  await page.assert.visible("@nextButton");
});

When(/^user selects Next page button$/, async function () {
  await page.click("@nextButton");
});

When(/^user selects Previous page button$/, async function () {
  await page.click("@previousButton");
});

Then(/^user can see Current page button$/, async () => {
  await page.assert.visible("@paginationButton");
});

Then(/^user can see Results per page combobox$/, async () => {
  await page.assert.visible("@paginationComboBox");
});

When(
  /^user selects "([^"]*)" in Results per page combobox$/,
  async function (args1) {
    await client.execute("window.scrollTo(500,500);");
    await page.click("@paginationComboBox");
    await setOption(args1);
  }
);

Then(/^user can see Label per page$/, async () => {
  await page.assert.visible("@perPageLabel");
});

Then(/^user can see Show All button$/, async () => {
  await page.assert.visible("@showAllButton");
});

When(/^user selects Show All button$/, async () => {
  await page.click("@showAllButton");
});

When(/^user selects New User button$/, async () => {
  await page.waitForElementVisible("@newUserButton");
  await page.click("@newUserButton");
});

Then(
  /^user can see banner appears with an error message "([^"]*)"$/,
  async (args1) => {
    await page.assert.visible("@topAlertDangerArticle");
    await page.assert.visible("@dangerBannerText");
    await page.assert.containsText("@dangerBannerText", args1);
  }
);

Then(
  /^user can see banner appears without an error message "([^"]*)"$/,
  async (args1) => {
    await page.assert.visible("@topAlertDangerArticle");
    await page.assert.visible("@dangerBannerText");
    await page.assert.not.containsText("@dangerBannerText", args1);
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

When(/^user sets "([^"]*)" in Name field$/, async function (args1) {
  await setUserName(args1.replace("*", this.parameters.timeStamp));
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

When(/^user selects Cancel button$/, async () => {
  await page.section.newUserForm.click("@cancelButton");
});

When(/^user sets "([^"]*)" in Role dropdown$/, async (args1) => {
  await setRole(args1);
});

When(/^user selects Program "([^"]*)" in navigation$/, async (args1) => {
  await page.click({
    selector: `//*[@id='sideMenu']//nav/ul/li/a[contains(text(), '${args1}')]`,
    locateStrategy: "xpath",
  });
});

//Deprecated:
//  Use 'user selects "([^"]*)" in top-level navigation'
//   OR
//  'user selects "([^"]*)" tab'
When(/^user selects "([^"]*)" in navigation$/, async function (args1) {
  await navigateOnLeftMenu(args1);
});

When(
  /^user selects "([^"]*)" in top-level navigation$/,
  async function (args1) {
    await topLevelNavigation(args1);
  }
);

//Deprecated due to removing submenus, replaced with When(/^user selects "([^"]*)" tab$/ which selects tabs
When(/^user selects "([^"]*)" in sub-level navigation$/, async (args1) => {
  await page.click({
    selector: `//*[@id="sideMenu"]//a[normalize-space()='${args1}']`,
    locateStrategy: "xpath",
  });
});

When(/^user selects "([^"]*)" tab$/, async function (args1) {
  await clickTab(args1);
});

Then(/^user does not see new user form$/, async () => {
  await page.expect.section("@newUserForm").not.present;
});

Then(/^user can see new user form$/, async () => {
  await page.expect.section("@newUserForm").present;
});

Then(/^user does not see a new user in Users list$/, async () => {
  let selector = `//td[normalize-space(.)='${user.name}']`;
  await page.assert.not.elementPresent({
    selector: selector,
    locateStrategy: "xpath",
  });
});

When(/^user creates a new user$/, async function (table) {
  await page.click("@newUserButton");
  for (column of table.raw()[0]) {
    for (hash of table.hashes()) {
      switch (column) {
        case "Name":
          await setUserName(
            hash["Name"].replace("*", this.parameters.timeStamp)
          );
          break;
        case "Email":
          await setEmail(hash["Email"].replace("*", this.parameters.timeStamp));
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

When(/^user clicks 'New User' button$/, async function () {
  await clickNewUserButton();
});

When(/^user edits a user$/, async function (table) {
  await closeNotification();
  await helpers.showAll();

  //go to the row with matching name
  const selector = {
    selector: `//*[@id='app']//table//tbody//td[contains(text(),'${user.userName}')]/..//a[normalize-space()='Edit']`,
    locateStrategy: "xpath",
  };
  await page.moveToElement(selector, 1, 1);
  await page.click(selector);
  for (column of table.raw()[0]) {
    for (hash of table.hashes()) {
      switch (column) {
        case "Name":
          await setUserName(
            hash["Name"].replace("*", this.parameters.timeStamp)
          );
          break;
        case "Email":
          await setEmail(hash["Email"].replace("*", this.parameters.timeStamp));
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
  let selector = `.//td[normalize-space(.)='${user.userName}']`;
  await page.assert.containsText(
    {
      selector: selector + "/ancestor::tr//td[@data-label='Name']",
      locateStrategy: "xpath",
    },
    user.userName
  );
  await page.assert.containsText(
    {
      selector: selector + "/ancestor::tr//td[@data-label='Email']",
      locateStrategy: "xpath",
    },
    user.email
  );

  await page.assert.containsText(
    {
      selector: selector + "/ancestor::tr//td[@data-label='Role']",
      locateStrategy: "xpath",
    },
    user.role
  );
});

Then(/^user can see user is in users list$/, async () => {
  await helpers.showAll();
  await page.assert.visible({
    selector: `//tr/td[normalize-space(.)='${user.userName}']`,
    locateStrategy: "xpath",
  });
  await page.assert.visible({
    selector: `//tr/td[normalize-space(.)='${user.email}']`,
    locateStrategy: "xpath",
  });
  await page.assert.visible({
    selector: `//td[contains(text(), '${user.email}')]/..//td[normalize-space(.)='${user.role}']`,
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
  await helpers.showAll();
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
  await helpers.showAll();
  await page.waitForElementVisible({
    selector: `//*[@id='adminProgramTableLabel']//tr//a[normalize-space(.)='${args1}']`,
    locateStrategy: "xpath",
  });
});

When(
  /^user can see "([^"]*)" has been added to "([^"]*)" as a Program Administrator$/,
  async (args1, args2) => {
    await page.navigateToProgram(args2);

    await page.section.navigationMenu.waitForElementVisible(
      "@programManagementLink"
    );
    await page.section.navigationMenu.click("@programManagementLink");
    await page.section.programManagement.waitForElementVisible("@usersLink");
    await page.section.programManagement.click("@usersLink");
    await page.waitForElementVisible("@showAllButton");
    await page.click("@showAllButton");
    await page.waitForElementVisible({
      selector: `//*[@id='programUserTableLabel']//tr//td[normalize-space(.)='${args1}']`,
      locateStrategy: "xpath",
    });
    await page.waitForElementVisible({
      selector: `//*[@id='programUserTableLabel']//tr//td[normalize-space(.)='${args1}']/following-sibling::td[normalize-space(.)='Program Administrator']`,
      locateStrategy: "xpath",
    });
  }
);

When(
  /^user can see "([^"]*)" has been added to "([^"]*)" as a Read Only$/,
  async (args1, args2) => {
    await page.navigateToProgram(args2);

    await page.section.navigationMenu.waitForElementVisible(
      "@programManagementLink"
    );
    await page.section.navigationMenu.click("@programManagementLink");
    await page.section.programManagement.waitForElementVisible("@usersLink");
    await page.section.programManagement.click("@usersLink");
    await page.waitForElementVisible("@showAllButton");
    await page.click("@showAllButton");
    await page.waitForElementVisible({
      selector: `//*[@id='programUserTableLabel']//tr//td[normalize-space(.)='${args1}']`,
      locateStrategy: "xpath",
    });
    await page.waitForElementVisible({
      selector: `//*[@id='programUserTableLabel']//tr//td[normalize-space(.)='${args1}']/following-sibling::td[normalize-space(.)='Read Only']`,
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

Then(/^user can see Program Selection combo box$/, async () => {
  await page.assert.visible("@programSelectorDropDownButton");
});

Then(/^user cannot see Program Selection combo box$/, async () => {
  await page.assert.not.elementPresent("@programSelectorDropDownButton");
});

Then(/^user can see 'Logged in as'$/, async () => {
  await page.assert.visible("@loggedInAsLabel");
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
    selector: `//*[@id='program-menu']//a[normalize-space(.)='${args1}']`,
    locateStrategy: "xpath",
  });
});

When(/^user selects "([^"]*)" the program selector$/, async (args1) => {
  await page.click("@programSelectorDropDownButton");
  await page.click({
    selector: `//*[@id='program-menu']//a[normalize-space(.)='${args1}']`,
    locateStrategy: "xpath",
  });
});

Then(
  /^user can see "([^"]*)" as label in the bottom of the navigation menu$/,
  async (args1) => {
    await page.assert.visible({
      selector: `//*[@id="sideMenu"]/nav/p[normalize-space(.)='${args1}']`,
      locateStrategy: "xpath",
    });
  }
);

Then(/^user can see Welcome page of program$/, async () => {
  await page.assert.visible("@programWelcomeText");
});

Then(/^user can see "([^"]*)" in navigation$/, async (args1) => {
  switch (args1) {
    case "Home":
      await page.assert.visible("@homeMenu");
      break;
    case "Germplasm":
      await page.assert.visible("@germplasmMenu");
      break;
    case "Ontology":
      await page.assert.visible("@ontologyMenu");
      break;
    case "Program Administration":
      await page.assert.visible("@programManagementMenu");
      break;
    case "BrAPI":
      await page.assert.visible("@brAPIMenu");
      break;
    case "Jobs":
      await page.assert.visible("@jobsMenu");
      break;
    case "Experiments & Observations":
      await page.assert.visible("@experimentsAndObservationsMenu");
      break;
    default:
      throw new Error(`Unexpected ${args1} name.`);
  }
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

Then(/^user can see 'Yes, deactivate' button$/, async () => {
  await page.assert.visible("@deactivateButton");
});

Then(/^user can see 'Yes, archive' button$/, async () => {
  await page.assert.visible("@archiveButton");
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
  await page.click("@archiveButton");
});

Then(/^user can see "([^"]*)" in the the Role dropdown$/, async (args1) => {
  await page.section.newUserForm.assert.containsText("@roleSelect", args1);
});

Then(/^user can see header "([^"]*)"$/, async (args1) => {
  await page.assert.containsText("#app main section h1", args1);
});

Then(/^user can see a message 'Before You Import...'$/, async () => {
  await ontologyPage.assert.containsText(
    "@beforeImportMessage",
    "Before You Import..."
  );
});

Then(/^user can see a button 'Choose a file...'$/, async () => {
  await page.assert.containsText(
    "#fileselector-choose-file > span:nth-child(2)",
    "Choose a file..."
  );
});

When(/^user uploads "([^"]*)" file$/, async (args1) => {
  await page.setValue('input[type="file"]', path.resolve(importFolder, args1));
});

When(/^user imports "([^"]*)" file to Germplasm$/, async function (args1) {
  await importGermplasmFile(args1);
});

When(
  /^user imports "([^"]*)" file "([^"]*)" times in Germplasm$/,
  async function (args1, args2) {
    var { setDefaultTimeout } = require("@cucumber/cucumber");
    setDefaultTimeout = setDefaultTimeout * 5;
    for (let index = 0; index < args2; index++) {
      await importGermplasmFile(args1);
    }
    setDefaultTimeout = setDefaultTimeout / 5;
  }
);

When(/^user uploads Germplasm "([^"]*)" file$/, async function (args1) {
  await page.pause(10 * 1000);
  await uploadGermplasmFile(args1);
});

Then(/^user can see "([^"]*)" displayed$/, async (args1) => {
  await page.assert.containsText(
    "#fileselectmessagebox-import-filename",
    args1
  );
});

Then(/^user cans see 'Choose a different file...' button$/, async () => {
  await page.assert.visible("#fileselector-choose-different-file");
});

Then(/^user can see 'Import' button$/, async () => {
  await page.assert.visible("#fileselectmessagebox-import-button");
});

When(/^user selects "([^"]*)" button$/, async function (args1) {
  await selectsButton(args1);
});

When(/^user selects "([^"]*)" link$/, async (args1) => {
  await page.pause(1000);
  const selector = {
    selector: `//a[starts-with(normalize-space(.),'${args1}')]`,
    locateStrategy: "xpath",
  };
  await page.waitForElementVisible(selector);
  await page.click(selector);
});

Then(/^user can see "([^"]*)" button$/, async (args1) => {
  await page.assert.visible({
    selector: `//button[contains(normalize-space(.),'${args1}')]`,
    timeout: 60000,
    locateStrategy: "xpath",
  });
});

Then(/^user can see "([^"]*)" column header$/, async (args1) => {
  await page.assert.visible({
    selector: `//table/thead/tr/th//span[contains(text(),'${args1}')] | //table/thead/tr/th[contains(text(),'${args1}')]`,
    locateStrategy: "xpath",
  });
});

Then(/^user can see each row has a "([^"]*)" link$/, async (args1) => {
  await helpers.showAll();
  let rows;

  await client.elements("css selector", "tbody tr", ({ value }) => {
    return (rows = value.length);
  });

  await page.expect
    .elements({
      selector: `//a[normalize-space(.)='${args1}']`,
      locateStrategy: "xpath",
    })
    .count.equal(rows);
});

Then(/^user can see a modal box$/, async () => {
  await page.assert.visible("@modalCard");
});

Then(/^user can not see a modal box$/, async () => {
  await page.assert.not.elementPresent("@modalCard");
});

Then(/^user can see "([^"]*)" in modal box header$/, async function (args1) {
  await page.assert.containsText(
    "@modalHeader",
    args1.replace("*", this.parameters.timeStamp)
  );
});

Then(/^user can see "([^"]*)" in modal box header1$/, async (args1) => {
  await page.section.modal.assert.containsText("@header", args1);
});

Then(/^user can see "([^"]*)" in modal box text$/, async (args1) => {
  //Multiple text lines can exist, so selector needs to be specific to text
  await page.section.modal.assert.visible("@message");
  await page.section.modal.assert.containsText("@message", args1);
});

Then(/^user can see 'Yes, abort' button$/, async () => {
  await page.assert.containsText("#traitsimport-yes-abort", "Yes, abort");
});

When(/^user selects 'Import' button$/, async function () {
  await selectsImportButton();
});

When(/^user selects 'Yes, abort' button$/, async () => {
  await page.click({
    selector: "//*[contains(text(), 'abort')]/ancestor::button",
    locateStrategy: "xpath",
  });
});

Then(/^user can see Ontology table$/, async () => {
  await page.assert.visible("#ontologyTableLabel");
});

Then(/^user can see an error message "([^"]*)"$/, async (args1) => {
  await page.assert.visible({
    selector: `//*[@id='import-ontology']//span[normalize-space()="${args1}"]`,
    locateStrategy: "xpath",
  });
});

Then(
  /^user can see "([^"]*)" row "([^"]*)" "([^"]*)" field "([^"]*)" message$/,
  async function (args1, args2, args3, args4) {
    await page.assert.containsText(
      {
        selector: `//tbody/tr[${args2}]/td[@data-label='Row']`,
        locateStrategy: "xpath",
      },
      args1
    );
    await page.assert.containsText(
      {
        selector: `//tbody/tr[${args2}]/td[@data-label='Field']`,
        locateStrategy: "xpath",
      },
      args3
    );
    await page.assert.containsText(
      {
        selector: `//tbody/tr[${args2}]/td[@data-label='Error']`,
        locateStrategy: "xpath",
      },
      args4
    );
  }
);

When(/^user sets "([^"]*)" in Name field of User$/, async function (args1) {
  await setUserName(args1.replace("*", this.parameters.timeStamp));
});

When(/^user sets "([^"]*)" in Email field of User$/, async (args1) => {
  await setEmail(args1);
});

When(/^user sets "([^"]*)" in Role dropdown of User$/, async (args1) => {
  await setRole(args1);
});

When(/^user click 'Save' button in User$/, async function () {
  await clickSaveUserButton();
});

Then(/^user can see banner contains "([^"]*)"$/, async function (args1) {
      await page.assert.visible(
        {
          selector: `//article//*[contains(text(), normalize-space("${args1}"))]`,
          locateStrategy: "xpath",
          timeout: 120000
        })
 }
);

Then(/^user cannot see banner contains "([^"]*)"$/, async (args1) => {
  await page.assert.not.visible({
    selector: `//article//*[contains(text(), normalize-space("${args1}"))]`,
    locateStrategy: "xpath",
  });
});

Then(/^user can see "([^"]*)" column in Users$/, async (args1) => {
  await page.assert.visible({
    selector: `//*[@id='programUserTableLabel']//th[normalize-space(.)='${args1}']`,
    locateStrategy: "xpath",
  });
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
  await helpers.showAll();
  let userEmail;
  if (args1.includes("*") && user.email != null) {
    userEmail = user.email;
  } else {
    userEmail = args1;
  }

  let elem = {
    selector: `//*[@id='app']//td[normalize-space()='${userEmail}']/..//td/a[normalize-space()='Edit']`,
    locateStrategy: "xpath",
  };

  // await page.waitForElementVisible(elem);
  await client.execute("window.scrollTo(0,0);");
  await page.click(elem);
});

When(/^user selects 'Save' button in Users$/, async () => {
  await page.clickButton("Save");
});

Then(/^user can see 'New Program' button on Program$/, async () => {
  await page.assert.visible("@newProgramButton");
});

When(/^user selects 'Yes, remove' button in modal box$/, async () => {
  await page.click("@yesRemoveButton");
});
Then(/^user can sees 'Yes, remove' button in modal box$/, async () => {
  await page.assert.visible("@yesRemoveButton");
});

Then(/^user can see "([^"]*)" button in modal box$/, async (args1) => {
  await page.section.modal.assert.visible({
    selector: `.//button[contains(@class,'button')][contains(normalize-space(),'${args1}')]`,
    locateStrategy: "xpath",
  });
});

When(/^user selects "([^"]*)" button in modal box$/, async (args1) => {
  await page.section.modal.click({
    selector: `.//button[contains(@class,'button')][contains(normalize-space(),'${args1}')]`,
    locateStrategy: "xpath",
  });
});

Then(/^user can not see a success banner$/, async () => {
  await page.assert.not.elementPresent({
    selector: "//div[@id='app']/div[1]",
    locateStrategy: "xpath",
  });
});

When(/^user pause for "([^"]*)" seconds$/, async function (args1) {
  await page.pause(args1 * 1000);
});

When(/^user logs out$/, async function () {
  await userLogsOut();
});

When(/^user close notification pop-up$/, async function () {
  await page.click({
    selector:
      "//article[not(@style='display: none;') and @class='notification is-marginless is-success']//button",
    locateStrategy: "xpath",
  });
});

When(/^user refresh the page$/, async function () {
  await client.refresh();
});

Then(/^user can see row "([^"]*)" rows in a table$/, async function (args1) {
  await page.expect.elements("tbody tr").count.to.equal(Number(args1));
});

When(/^user close the Notification$/, async function () {
  await page.click("button[aria-label='Close Notification']");
});

Given(/^a new program is created$/, async function () {
  await loginAs(this, "sysad");
  const programManagementSteps = require("./programManagementStepsHelpers.js");
  await programManagementSteps.selectProgram("System Administration");
  await programManagementSteps.clickNewProgram();
  await programManagementSteps.setProgramName("*");
  await programManagementSteps.setSpecies("Grape");
  await programManagementSteps.setProgramKey("*");
  await programManagementSteps.clickSaveProgram();
  await page.pause(1000);
  await navigateToProgramSelection();
  await programManagementSteps.selectProgram("*");
  await navigateOnLeftMenu("Program Administration");
  await clickTab("Users");
  await clickNewUserButton();
  await setUserName("ProgramAdmin");
  await setEmail("cucumberbreeder@mailinator.com");
  await setRole("Program Administrator");
  await clickSaveUserButton();
  await page.pause(1000);
  await clickNewUserButton();
  await setUserName("ReadOnly");
  await setEmail("cucumbermember@mailinator.com");
  await setRole("Read Only");
  await clickSaveUserButton();
  await page.pause(1000);

  //logs out
  await closeNotification();
  await userLogsOut();
});

When("user uploads Genotype Sample {string} file", async function (s) {
  await uploadGenotypeSamplesFile(s);
});

Then("user can see Date Created as descending sort", async function () {
  await experimentsObservationsPage.section.table.assert.attributeEquals(
    "@DateCreatedSort",
    "class",
    "icon sort-icon is-small is-desc"
  );
});

Then("user can see Created Date as descending sort", async function () {
  await page.assert.attributeEquals(
    {
      selector: "//div/span[normalize-space(.)='Created Date']/span",
      locateStrategy: "xpath",
    },
    "class",
    "icon sort-icon is-small is-desc"
  );
});

When("user selects {string} menu item", async function name(args1) {
  await page.click({
    selector: `//a[@role='menuitem'][normalize-space(.)='${args1}']`,
    locateStrategy: "xpath",
  });
});

//functions
async function setUserName(name) {
  user.userName = name;
  await page.section.newUserForm.clearValue("@nameField");
  await page.section.newUserForm.setValue("@nameField", user.userName);
}

async function setEmail(email) {
  user.email = email;
  await page.section.newUserForm.clearValue("@emailField");
  await page.section.newUserForm.setValue("@emailField", user.email);
}

async function setRole(role) {
  user.role = role;
  await page.section.newUserForm.setValue("@roleSelect", user.role);
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
  const StopWatch = require("@slime/stopwatch").StopWatch;
  let stopWatch = new StopWatch();
  stopWatch.startTimer();

  // let text;
  // const selector = "#versionInfo > span > span > a:nth-child(2)";
  let found = false;
  while (!found && stopWatch.getTimeElapsedInMs < 300000) {
    try {
      await page.waitForElementPresent(
        { selector: "//a[contains(text(), 'api v')]", locateStrategy: "xpath" },
        1000,
        1000
      );
      found = true;
    } catch (error) {
      await client.refresh();
      await page.pause(1000);
    }
  }
  await page.getText("#versionInfo > span", ({ value }) => {
    if (client.globals.breedingInsightVersion == undefined)
      client.globals.breedingInsightVersion = String(value).trim();
  });
  stopWatch.stopTimer();
  if (!found) {
    throw new Error("Application version failed to load. Unable to login.");
  }
}

async function setOption(option) {
  await page.click({
    selector: `//option[@value='${option}']`,
    locateStrategy: "xpath",
  });
}

async function loginAs(world, user) {
  if (world.parameters.launch_url != undefined) {
    await client.url(world.parameters.launch_url);
  } else {
    await page.navigate();
  }

  let status;
  //await waitReady();
  await page.waitForElementVisible(
    "@iUnderstandButton",
    10000,
    false,
    async (result) => {
      status = result.value;
    }
  );

  if (status) await page.click("@iUnderstandButton");

  await page.click("@loginButton");
  await page.click("@orcidSignInButton");

  let email;
  let password;

  switch (user) {
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

  await page.isVisible("@acceptAllCookies", ({ value }) => {
    if (value) page.click("@acceptAllCookies");
  });

  await page.setValue("@emailInput", email);
  await page.setValue("@passwordInput", password);
  await page.click("@signInButton");

  if (client.globals.breedingInsightVersion == undefined) {
    let version = 0;
    try {
      await page.getText(
        { selector: "footer span", timeout: 120000 },
        ({ value }) => {
          version = String(value).trim();
        }
      );
    } catch (error) {
      //try another control
      await page.getText(
        { selector: "#versionInfo span span", timeout: 120000 },
        ({ value }) => {
          version = String(value).trim();
        }
      );
    }
    client.globals.breedingInsightVersion = version;
  }
}

async function navigateToProgramSelection() {
  await page.navigateToProgramSelection();
}

async function navigateOnLeftMenu(option) {
  if (option === "Ontology") {
    await page.click("#usersidebarlayout-ontology-menu");
  } else {
    await page.click({
      selector: `//*[@id="sideMenu"]//nav//a[contains(text(), '${option}')]`,
      locateStrategy: "xpath",
    });
  }
}

async function clickTab(tab) {
  await page.click({
    selector: `.//nav[contains(@class, 'tabs is-boxed')]//li/a[normalize-space()='${tab}']`,
    locateStrategy: "xpath",
  });
}

async function clickNewUserButton() {
  await page.click("@newUserButton");
}

async function clickSaveUserButton() {
  await page.click("@saveUserButton");
}

async function closeNotification() {
  await page.click(
    "article:not([style='display: none;']) button[aria-label='Close Notification'][class='delete']"
  );
}

async function userLogsOut() {
  await page.click("@userStatusMenuDropDownButton");
  await page.click("@logoutButton");
  await client.url("https://sandbox.orcid.org/");
  await page.click("#cy-user-info");
  await page.click("#cy-signout");
  await page.pause(10000);
}

async function topLevelNavigation(args1) {
  if (args1 === "Ontology") {
    await page.click("#usersidebarlayout-ontology-menu");
  } else {
    await page.click({
      selector: `//*[@id="sideMenu"]//nav/ul/li/a[contains(text(), '${args1}')]`,
      locateStrategy: "xpath",
    });
  }
}

async function uploadGermplasmFile(args1) {
  await page.setValue(
    'input[type="file"]',
    path.resolve(germplasmFolder, args1)
  );
}

async function uploadGenotypeSamplesFile(args1) {
  await page.setValue(
    'input[type="file"]',
    path.resolve(genotypeSamplesFolder, args1)
  );
}

async function selectsImportButton() {
  await client.execute(
    'document.getElementById("fileselectmessagebox-import-button").click();'
  );
  await page.pause(3000);
}

async function selectsButton(args1) {
  await page.pause(1000);
  const selector = {
    selector: `//button[starts-with(normalize-space(.),'${args1}')] | //span[normalize-space(.)='${args1}']/ancestor::button`,
    locateStrategy: "xpath",
  };
  await page.waitForElementVisible(selector);
  await page.click(selector);
}

async function importGermplasmFile(args1) {
  await topLevelNavigation("Import Data");
  await uploadGermplasmFile(args1);
  await selectsImportButton();
  const importStepsHelpers = require("./importStepsHelpers.js");
  await importStepsHelpers.setListName("*");
  await importStepsHelpers.setListDescription("*");
  await selectsButton("Confirm");
  await page.pause(1000);
}
