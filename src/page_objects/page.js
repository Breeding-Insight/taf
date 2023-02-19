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

    homeMenu: "#usersidebarlayout-home-menu",
    germplasmMenu: "#usersidebarlayout-germplasm-menu",
    ontologyMenu: "#usersidebarlayout-ontology-menu",
    programManagementMenu: "#usersidebarlayout-program-management-menu",
    brAPIMenu: "#usersidebarlayout-brapi-menu",
    jobsMenu: "#usersidebarlayout-job-management-menu",
    experimentsAndObservationsMenu: {
      selector:
        "//*[@id='sideMenu']//a[normalize-space()='Experiments & Observations']",
      locateStrategy: "xpath",
    },
    programManagementHeader: {
      selector: "//section/div/h1[normalize-space(.)='Program Administration']",
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
  },
  sections: {
    //left navigation
    navigationMenu: {
      selector: "//*[@id='sideMenu']",
      locateStrategy: "xpath",
      elements: {
        usersLink: {
          selector: ".//a[normalize-space()='Users']",
          locateStrategy: "xpath",
        },

        programsLink: {
          selector: ".//a[normlize-space()='Programs']",
          locateStrategy: "xpath",
        },

        programManagementLink: {
          selector: ".//a[normalize-space()='Program Management']",
          locateStrategy: "xpath",
        },
      },
    },

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
        programNameRequired: {
          selector:
            ".//form/div[1]/div[1]//span[@class='form-error has-text-danger']",
          locateStrategy: "xpath",
        },
        speciesSelect: "#Species",
        speciesLabel: "label[for='Species']",
        programKeyField: "#Program-Key",
        programKeyLabel: "label[for='Program Key']",
        programKeyMessageText: {
          selector: ".//input[@id='Program-Key']/../p",
          locateStrategy: "xpath",
        },
        programKeyRequired: {
          selector:
            ".//form/div[1]/div[3]//span[@class='form-error has-text-danger']",
          locateStrategy: "xpath",
        },
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
        modalHeader: {
          selector:
            ".//div[@class='modal-card']//h3[@class='is-5 title has-text-danger modal-header']",
          locateStrategy: "xpath",
        },
        modalText: {
          selector:
            ".//div[@class='modal-card']//p[@class='has-text-dark modal-text']",
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
            let elem = `.//td[normalize-space(.)='${list["Name"]}']/..`;
            for (var key in list) {
              if (key == "Name") {
                const selector = {
                  selector: elem + `//td[@data-label='Name']/a`,
                  locateStrategy: "xpath",
                };
                await this.assert.containsText(selector, list[key]);
              }
              if (key == "Species") {
                const selector = {
                  selector: elem + `//td[@data-label='Species']`,
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
        configurationLink: {
          selector: ".//li/a[normalize-space(.)='Configuration']",
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
    //Program Management Location
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
            let keySelector = `.//td[@data-label='Name'][normalize-space(.)='${list["Name"]}']`;
            for (var key in list) {
              if (key == "Name") {
                const selector = {
                  selector: keySelector,
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
    //Program Management Configuration
    configurationForm: {
      selector: "#program-configuration",
      elements: {
        sharedOntologySection:"#shared-ontology-section",
        header: "#shared-ontology-section > h2",
        notSharedMessage: "#shared-ontology-section > p",
        shareOntologyButton :"#showShareModalBtn",
      },
    },
    manageSharedOntologyModal: {
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
      navigateToProgramSelection: async function () {
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
