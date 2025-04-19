const { Given, Then, When } = require("@cucumber/cucumber");
const path = require("path");
const importFolder = path.join(__dirname, "../", "files", "TraitImport");
const fs = require("fs");
const location = {};
const helpers = require("./helpers");
const { Sign } = require("crypto");

module.exports = {
  getProgram: function () {
    return program;
  },
  selectProgram: async function (name) {
    if (name.includes("*")) {
      name =  browser.globals.program.Name;
    }
    selector = {
      selector: `//*[@id='app']//main//a[normalize-space(.)='${name}']`,
      locateStrategy: "xpath",
    };
    const page = this.browser.page.page();
    await page.waitForElementVisible(selector);
    await page.click(selector);
  },

  clickNewProgram: async function () {
    await this.browser.page.page().click("@newProgramButton");
  },

  setProgramName: async function (programName) {
    await this.browser.page.page().section.programForm.clearValue("@programNameField");
    await this.browser.page.page().section.programForm.setValue(
      "@programNameField",
      programName.replace("*", helpers.generateRandomAlphaString(5))
    );
  },

  setSpecies: async function (species) {
    await this.browser.page.page().section.programForm.setValue("@speciesSelect", species);
  },

  setProgramKey: async function (programKey) {
    await this.browser.page.page().section.programForm.clearValue("@programKeyField");
    program.Key = programKey.replace("*", helpers.generateRandomAlphaString(5));
    await this.browser.page.page().section.programForm.setValue("@programKeyField", program.Key);
  },

  clickSaveProgram: async function () {
    await this.getProgramValues();
    await this.browser.page.page().section.programForm.click("@saveButton");
    await this.browser.page.page().pause(5000);
  },

  getProgramValues: async function () {
    await this.browser.page.page().section.programForm.getValue(
      "@programNameField",
      ({ value }) => {
        browser.globals.program.Name = value;
      }
    );
    console.log("Program name: " +  browser.globals.program.Name);
    let option;
    await this.browser.page.page().section.programForm.getValue("@speciesSelect", ({ value }) => {
      option = value;
    });

    await this.browser.page.page().section.programForm.getText(
      { selector: `.//option[@value='${option}']`, locateStrategy: "xpath" },
      ({ value }) => {
        program.Species = String(value).trim();
      }
    );
    //Key only present for create, not edit
    let keyPresent;
    await this.browser.page.page().section.programForm.api.element(
      "css selector",
      "@programKeyField",
      function (result) {
        keyPresent = result.value;
      }
    );

    if (keyPresent) {
      await this.browser.page.page().section.programForm.getValue(
        "@programKeyField",
        ({ value }) => {
          program.Key = value;
        }
      );
    }
  },
};
