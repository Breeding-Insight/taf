const { client } = require("nightwatch-api");
const fs = require("fs");
const reporter = require("cucumber-html-reporter");

module.exports = {
  url: function () {
    return this.api.launchUrl;
  },
  elements: {
    iUnderstandButton: {
      selector:
        "//button[starts-with(normalize-space(.),'I understand, close this message')]",
      locateStrategy: "xpath",
    },
    loginButton: {
      selector: "//button[starts-with(normalize-space(.),'LOG IN')]",
      locateStrategy: "xpath",
    },
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
      selector: "//*[@id='app']//a[normalize-space(.)='System Administration']",
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

    systemAdministationDropDownIcon:
      "#app div.sidebarlayout header div.dropdown-trigger button",

    loggedInText: "#app div.sidebarlayout div.level-right div:nth-child(1) p",

    saveUserButton: {
      selector:
        "//*[@id='programUserTableLabel']//span[normalize-space(.)='Save']/ancestor::button",
      locateStrategy: "xpath",
    },

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
      selector: "//button[starts-with(normalize-space(.),'New User')]",
      locateStrategy: "xpath",
    },

    usersTable: "#app section table",

    nextButton: {
      selector: "//*[@id='app']//a[normalize-space(.)='Next']",
      locateStrategy: "xpath",
    },

    previousButton: {
      selector: "//*[@id='app']//a[normalize-space(.)='Previous']",
      locateStrategy: "xpath",
    },

    paginationButton: ".pagination-list",

    paginationComboBox: "#paginationSelect",

    perPageLabel: {
      selector: "//*[@id='app']//span[normalize-space(.)='per page']",
      locateStrategy: "xpath",
    },
    showAllButton: {
      selector: "//nav//a[normalize-space(.)='Show All']",
      locateStrategy: "xpath",
    },

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
    bannerText:
      "#app > div:nth-child(1) > article:nth-child(1) > div > div > div > div > div:nth-child(2)",

    //location
    newLocationButton: {
      selector:
        "//*[@id='emptyTableMessage']//button[normalize-space(.)='New Location']",
      locateStrategy: "xpath",
    },

    //deactivate
    deactivateButton: {
      selector:
        "//*[@id='app']//main//section//button[normalize-space(.)='Yes, deactivate']",
      locateStrategy: "xpath",
    },

    //modal card
    modalCard:
      "#app > div.sidebarlayout > div > div:nth-child(2) > main > section > div > div > div.modal.is-active > div.modal-card",
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
    programForm: {
      selector: "#adminProgramTableLabel > form",
      elements: {
        programNameField: "#Program-Name",
        programNameLabel: "label[for='Program Name']",
        programNameMessageText: {
          selector: ".//input[@id='Program-Name']/../p",
          locateStrategy: "xpath",
        },
        programNameRequired: "span[class='form-error has-text-danger']",
        speciesSelect: "#Species",
        speciesLabel: "label[for='Species']",
        specifyCustomDataCheckbox: "#checkbox",
        saveButton: {
          selector: ".//span[normalize-space(.)='Save']/ancestor::button",
          locateStrategy: "xpath",
        },
        speciesErrorMessage: "svg",
        cancelButton: {
          selector: ".//button[normalize-space(.)='Cancel']",
          locateStrategy: "xpath",
        },
      },
      commands: [
        {
          isSpeciesListed: async function (option) {
            const selector = {
              selector: `.//select[@id='Species']/option[normalize-space(.)='${option}']`,
              locateStrategy: "xpath",
            };
            await this.assert.elementPresent(selector);
          },
          isProgramNotExists: async function (programName) {
            const selector = {
              selector: `.//td[name='name']/a[normalize-space(.)='${programName}']`,
              locateStrategy: "xpath",
            };
            await this.assert.not.elementPresent(selector);
          },
          isProgramExists: async function (programName) {
            const selector = {
              selector: `.//td[name='name']/a[normalize-space(.)='${programName}']`,
              locateStrategy: "xpath",
            };
            await this.assert.visible(selector);
          },
          
        },
      ],
    },
  },
  commands: [
    {
      clickButton: async function (name) {
        const selector = {
          selector: `//button[contains(normalize-space(.),'${name}')]`,
          locateStrategy: "xpath",
        };
        await this.waitForElementVisible(selector);
        await this.click(selector);
      },
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
        await this.click("@showAllButton").saveScreenshot(`./screenshots/usercheck.png`);
        this.attach(fs.readFileSync(`./screenshots/usercheck.png`), 'image/png');;
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
