module.exports = {
  url: "http://sandbox.breedinginsight.net/",
  // commands: [commands.commands],
  elements: {
    iUnderstandButton:
      "#app article.notification.is-marginless.is-warning button.button.is-dark",
    loginButton:
      "#app > div.sidebarlayout > div.sidebarlayout > header > div > div.level-right.program-selection-level > div > button",
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

    //program page
    systemAdministrationLabel: {
      selector: "//*[@id='app']//a[contains(text(), 'System Administration')]",
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
    showAllButton: {
      selector: "//*[@id='app']//a[contains(text(),'Show All')]",
      locateStrategy: "xpath",
    },

    //new user fields
    newUserNameField: "#Name",
    newUserEmailField: "#Email",
    newUserRoleSelect: "#Role",
    newUserNameUnicodeText: "#app div.sidebarlayout p:nth-child(3)",
    newUserSaveButton:
      "#app div.sidebarlayout button.button.is-primary[data-testid='save']:nth-child(1)",
    newUserCancelButton:
      "#app div.sidebarlayout button.button[data-testid='cancel']:nth-child(2)",
  },
};
