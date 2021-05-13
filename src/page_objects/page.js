const { client } = require("nightwatch-api");

module.exports = {
  url: "http://localhost/",
  elements: {
    iUnderstandButton:
      "#app article.notification.is-marginless.is-warning button.button.is-dark",
    loginButton:
      "#app > div.is-full-length > main > section > div > div:nth-child(5) > div.column.is-three-fifths > div:nth-child(1) > div:nth-child(2) > button",
    orcidSignInButton: "#connect-orcid-button",

    emailInput: "#username",
    passwordInput: "#password",

    signInButton: "#signin-button",

    snacksButton: "#app > div.sidebarlayout a:nth-child(3)",

    traitsButton: "#sideMenu ul:nth-child(5) > li:nth-child(4) > a",

    traitsTable: "#traitTableLabel",

    traitsHeaderTable: "#traitTableLabel thead",

    traitsPane:
      "#traitTableLabel div.column.is-one-third-desktop.is-half-tablet.is-half-mobile.is-gapless.pl-0",

    welcomeText: {
      selector:
        "//*[@id='app']//div/main/section/div/h1[contains(text(), 'Welcome,')]",
      locateStrategy: "xpath",
    },

    programWelcomeText: {
      selector: "//*[@id='app']//main//div//p[contains(text(),'Welcome')]",
      locateStrategy: "xpath",
    },

    whichProgramText: {
      selector:
        "//*[@id='app']//div/main/section/div/p[contains(text(), 'Which program are you working with today?')]",
      locateStrategy: "xpath",
    },

    //program page
    systemAdministrationLabel: {
      selector: "//*[@id='app']//a[contains(text(), 'System Administration')]",
      locateStrategy: "xpath",
    },

    programsTable: "table.is-striped.is-narrow.is-hoverable.is-fullwidth",

    systemAdministrationHeader:
      "#app > div.sidebarlayout > header > div > div.level-right.program-selection-level > h1",
    systemAdministrationDropDownIcon:
      "#app > div.sidebarlayout > header > div > div.level-right.program-selection-level > div > div.dropdown-trigger > button > span > svg.feather.feather-chevron-down",

    loggedInAsLabel:
      "#app > div.sidebarlayout > div > div:nth-child(2) > main > div > div.level-right > div:nth-child(1) > p",
    logoutButton:
      "#app > div.sidebarlayout > div > div:nth-child(2) > main > div > div.level-right > div:nth-child(2) > button",

    programsLabel: {
      selector: "//*[@id='app']//main//section//h1[text()=' Programs ']",
      locateStrategy: "xpath",
    },

    newProgramButton: "#adminProgramTableLabel > button",
    programNameField: "#Program-Name",
    speciesSelect: "#Species",
    saveButton:
      "#adminProgramTableLabel > form > div:nth-child(2) > div > button.button.is-primary",
    cancelButton:
      "#adminProgramTableLabel > form > div:nth-child(2) > div > button:nth-child(2)",

    systemAdministationDropDownIcon:
      "#app div.sidebarlayout header div.dropdown-trigger button",

    loggedInText: "#app div.sidebarlayout div.level-right div:nth-child(1) p",

    //left navigation
    usersLeftMenu: {
      selector: "//*[@id='sideMenu']//a[contains(text(), 'Users')]",
      locateStrategy: "xpath",
    },
    programsLeftMenu: {
      selector: "//*[@id='sideMenu']//a[contains(text(), 'Programs')]",
      locateStrategy: "xpath",
    },

    programManagementLeftMenu: {
      selector: "//*[@id='sideMenu']//nav//a[text()=' Program Management ']",
      locateStrategy: "xpath",
    },

    userLeftMenu: {
      selector: "//*[@id='sideMenu']//nav//a[text()=' Users ']",
      index: 1,
      locateStrategy: "xpath",
    },

    //users page
    usersHeader: {
      selector: "//*[@id='app']//h1[contains(text(), 'Users')]",
      locateStrategy: "xpath",
    },

    newUserButton: {
      selector: "//*[@id='app']//button/span[contains(text(),'New User')]",
      locateStrategy: "xpath",
    },

    usersTable: "#app section table",

    nextButton: {
      selector: "//*[@id='app']//a[contains(text(),'Next')]",
      locateStrategy: "xpath",
    },

    previousButton: {
      selector: "//*[@id='app']//a[contains(text(),'Previous')]",
      locateStrategy: "xpath",
    },

    paginationButton: ".pagination-list",

    paginationComboBox: "#paginationSelect",

    perPageLabel: {
      selector: "//*[@id='app']//span[contains(text(),'per page')]",
      locateStrategy: "xpath",
    },
    showAllButton: "a.pagination-link.show-all-button",

    //top alert
    topAlertDangerArticle: "#app article.notification.is-marginless.is-danger",
    fixInvalidFieldsText: {
      selector: "//*[@id='app']//div[contains(text(), 'Fix Invalid Fields')]",
      locateStrategy: "xpath",
    },

    //program list
    topProgramButton:
      "#app > div.sidebarlayout > div > div > main > section > div > div > div > div > a:nth-child(1)",

    programSelectorDropDownButton:
      "#app > div.sidebarlayout > header > div > div.level-right.program-selection-level > div > div.dropdown-trigger > button",

    homeMenu: "#sideMenu > nav > ul > li:nth-child(1) > a",
    traitsMenu: "#sideMenu > nav > ul > li:nth-child(2) > a",
    programManagementMenu: "#sideMenu > nav > ul > li:nth-child(3) > a",

    //banner
    bannerText:"#app article.notification:nth-child(1) div.level-item:nth-child(2)",
  },
  sections: {
    newUserForm: {
      selector: "#app div.sidebarlayout form",
      elements: {
        //new user fields
        nameField: "#Name",
        emailField: "#Email",
        roleSelect: "#Role",
        nameUnicodeText: "p:nth-child(3)",
        saveButton: "button.button.is-primary[data-testid='save']:nth-child(1)",
        cancelButton: "button.button[data-testid='cancel']:nth-child(2)",
        emailIsRequiredText: {
          selector: "//*[@id='Email']/../span[1]",
          locateStrategy: "xpath",
        },
        emailIsInvalidText: {
          selector: "//*[@id='Email']/../span[2]",
          locateStrategy: "xpath",
        },
        nameIsRequiredText: {
          selector: "//*[@id='Name']/../span[1]",
          locateStrategy: "xpath",
        },
        roleIsRequiredText: {
          selector: "//*[@id='Role']/../../span",
          locateStrategy: "xpath",
        },
      },
    },
  },
  commands: [
    {
      navigateToUsers: async function () {
        //get the current url
        let url;
        await client.url(({ value }) => {
          url = new URL(value).origin;
        });
        await client.url(url + "/admin/user-management");
      },
      navigateToPrograms: async function () {
        //get the current url
        debugger;
        let url;
        await client.url(({ value }) => {
          url = new URL(value).origin;
        });
        await client.url(url + "/admin/program-management");
        await this.waitForElementVisible("#adminProgramTableLabel");
      },
      navigateToProgram: async function (program) {
        await this.navigateToPrograms();
        await this.click("@showAllButton");
        await this.click({
          selector: `//*[@id='adminProgramTableLabel']//tr//a[text()=' ${program} ']`,
          locateStrategy: "xpath",
        });
      },
      navigateToProgramSelection: async function (program) {
        //get the current url
        debugger;
        let url;
        await client.url(({ value }) => {
          url = new URL(value).origin;
        });
        await client.url(url + "/program-selection");
        await this.waitForElementVisible("@welcomeText");
      },
      isOptionVisible: async function (optionName) {
        const selector = {
          selector: `//*[@id='program-menu']/div/a[text()=' ${optionName} ']`,
          locateStrategy: "xpath",
        };
        let visible = false;
        this.isVisible(selector, ({ value }) => {
          visible = value;
        });
        return visible;
      },
    },
  ],
};
