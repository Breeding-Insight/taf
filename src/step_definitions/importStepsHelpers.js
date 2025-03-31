const helpers = require("./helpers.js");

module.exports = {
  setListName: async function (args1) {
    args1 = args1.replace("*", helpers.generateRandomAlphaString(10));
    await this.browser.page.importPage().setValue("@listNameField", args1);
  },

  setListDescription: async function (args1) {
    args1 = args1.replace("*", helpers.generateRandomAlphaString(5));
    await this.browser.page.importPage().setValue("@listDescriptionField", args1);
  },
};
