const { client } = require("nightwatch-api");
const helpers = require("./helpers.js");
const importPage = client.page.importPage();

module.exports = {
  setListName: async function (args1) {
    args1 = args1.replace("*", helpers.generateRandomAlphaString(10));
    await importPage.setValue("@listNameField", args1);
  },

  setListDescription: async function (args1) {
    args1 = args1.replace("*", helpers.generateRandomAlphaString(5));
    await importPage.setValue("@listDescriptionField", args1);
  },
};
