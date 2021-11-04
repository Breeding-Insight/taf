const { client } = require("nightwatch-api");

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
    yesRemoveButton: {
      selector:
        ".//div[@class='modal-card']//button[normalize-space(.)='Yes, remove']",
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
      selector: "//*[@id='main']//*[contains(text(),'Welcome,')]",
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

    programsTable: {
      selector: "//*[@id='adminProgramTableLabel']//table",
      locateStrategy: "xpath",
    },

    systemAdministrationHeader:
      "#app > div.sidebarlayout > header > div > div.level-right.program-selection-level > h1",

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
      selector: "//*[@id='app']//button[normalize-space(.)='Next']",
      locateStrategy: "xpath",
    },

    previousButton: {
      selector: "//*[@id='app']//button[normalize-space(.)='Previous']",
      locateStrategy: "xpath",
    },

    paginationButton: ".pagination-list",

    paginationComboBox: "#paginationSelect",

    perPageLabel: {
      selector: "//*[@id='app']//span[normalize-space(.)='per page']",
      locateStrategy: "xpath",
    },
    showAllButton: {
      selector: "//nav//button[normalize-space(.)='Show All']",
      locateStrategy: "xpath",
    },

    //top alert
    topAlertDangerArticle: "#app article.notification.is-marginless.is-danger",
    //danger banner
    dangerBannerText: {
      selector:
        "//article[contains(@class, 'is-danger')]//div[contains(@class, 'banner-text')]",
      locateStrategy: "xpath",
    },

    //program list
    topProgramButton:
      "#app > div.sidebarlayout > div > div > main > section > div > div > div > div > a:nth-child(1)",

    programSelectorDropDownButton: {
      selector: "//button[@aria-controls='program-menu']",
      locateStrategy: "xpath",
    },

    // user status menu
    loggedInAsLabel: "#userstatusmenu-username",
    logoutButton: "#userstatusmenu-logout-button",
    userStatusMenuDropDownButton: "#userstatusmenu-dropdown-button",

    homeMenu: "#sideMenu > nav > ul > li:nth-child(1) > a",
    ontologyMenu: "#usersidebarlayout-ontology-menu",
    programManagementMenu: "#usersidebarlayout-program-management-menu",
    programManagementHeader: {
      selector: "//section/div/h1[normalize-space(.)='Program Management']",
      locateStrategy: "xpath",
    },

    //location
    newLocationButton: {
      selector:
        "//*[@id='locationTableLabel']//button[normalize-space(.)='New Location']",
      locateStrategy: "xpath",
    },

    //deactivate
    deactivateButton: {
      selector:
        "//*[@id='app']//main//section//button[normalize-space(.)='Yes, deactivate']",
      locateStrategy: "xpath",
    },
    archiveButton: {
      selector:
        "//*[@id='app']//main//section//button[normalize-space(.)='Yes, archive']",
      locateStrategy: "xpath",
    },

    //modal
    modalCard: {
      selector: "//div[@class='modal is-active']/div[@class='modal-card']",
      locateStrategy: "xpath",
    },
    modalHeader: {
      selector:
        "//div[@class='modal is-active']/div[@class='modal-card']//h3[contains(@class, 'modal-header')]",
      locateStrategy: "xpath",
    },

    //ontology
    beforeImportMessage: {
      selector: "//main//div[@class='import-template mb-5']/article//strong",
      locateStrategy: "xpath",
    },
    beforeImportMessageDetails: {
      selector: "//main//div[@class='import-template mb-5']/article//div",
      locateStrategy: "xpath",
    },
    downloadImportTemplateButton: "#importtemplatemessagebox-download-template",
    confirmOntologyHeader: {
      selector: "//main/section//h1",
      locateStrategy: "xpath",
    },
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
      selector: "#adminProgramTableLabel",
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
        brAPIURLField: "#BrAPI-URL",
        brAPIURLErrorMessage: "span[class='form-error has-text-danger']",
        saveButton: {
          selector: ".//span[normalize-space(.)='Save']/ancestor::button",
          locateStrategy: "xpath",
        },
        speciesErrorMessage: "svg",
        cancelButton: {
          selector: ".//button[normalize-space(.)='Cancel'][@data-testid]",
          locateStrategy: "xpath",
        },
        yesRemoveButton: {
          selector:
            ".//div[@class='modal-card']//button[normalize-space(.)='Yes, remove']",
          locateStrategy: "xpath",
        },
        cancelModalButton: {
          selector:
            ".//div[@class='modal-card']//button[normalize-space(.)='Cancel']",
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
          isItemInRow: async function (list) {
            for (var key in list) {
              if (key == "Name") {
                const selector = {
                  selector: `.//tr/td[@data-label='Name']`,
                  locateStrategy: "xpath",
                };
                await this.assert.containsText(selector, list[key]);
              }
              if (key == "Species") {
                const selector = {
                  selector: `.//tr/td[@data-label='Species']`,
                  locateStrategy: "xpath",
                };
                await this.assert.containsText(selector, list[key]);
              }
            }
          },
          editProgram: async function (name) {
            const selector = {
              selector: `//td[@name='name'][normalize-space(.)='${name}']/ancestor::tr//td/a[normalize-space(.)='Edit']`,
              locateStrategy: "xpath",
            };
            await this.click(selector);
          },
        },
      ],
    },
    programManagement: {
      selector: "div.program-management",
      elements: {
        locationsLink: {
          selector: ".//li/a[normalize-space(.)='Locations']",
          locateStrategy: "xpath",
        },
        usersLink: {
          selector: ".//li/a[normalize-space(.)='Users']",
          locateStrategy: "xpath",
        },
        nameIsRequiredText: {
          selector: ".//span[normalize-space(.)='Name is required']",
          locateStrategy: "xpath",
        },
      },
      sections: {
        form: {
          selector: "form",
          elements: {
            nameIsRequiredText: {
              selector: ".//span[normalize-space(.)='Name is required']",
              locateStrategy: "xpath",
            },
            saveButton: "button[data-testid='save']",
            cancelButton: "button[data-testid='cancel']",
          },
        },
      },
    },
    //Program Management
    locationForm: {
      selector: "#locationTableLabel",
      elements: {
        form: "form.new-form",
        nameField: "#Name",
        saveButton: {
          selector: ".//span[normalize-space(.)='Save']/ancestor::button",
          locateStrategy: "xpath",
        },
        cancelButton: {
          selector: ".//button[normalize-space(.)='Cancel'][@data-testid]",
          locateStrategy: "xpath",
        },
      },
      commands: [
        {
          isItemInNewRow: async function (list) {
            for (var key in list) {
              if (key == "Name") {
                const selector = {
                  selector: `.//tr[@class='is-new']/td[@data-label='Name']`,
                  locateStrategy: "xpath",
                };
                await this.assert.containsText(selector, list[key]);
              }
            }
          },
        },
      ],
    },
    modal: {
      selector: "//div[@class='modal is-active']",
      locateStrategy: "xpath",
      elements: {
        header: { selector: ".//div/h3", locateStrategy: "xpath" },
        message: { selector: ".//section//section", locateStrategy: "xpath" },
      },
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
