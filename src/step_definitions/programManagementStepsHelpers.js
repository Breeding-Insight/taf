const { client } = require("nightwatch-api");
const { Given, Then, When } = require("@cucumber/cucumber");
const path = require("path");
const importFolder = path.join(__basedir, "src", "files", "TraitImport");
const fs = require("fs");
const page = client.page.page();
const program = {};
const location = {};
const helpers = require("./helpers");
const { Sign } = require("crypto");

module.exports = {
  getProgram: function () {
    return program;
  },
  selectProgram: async function (name) {
    if (name.includes("*")) {
      name = program.Name;
    }
    selector = {
      selector: `//*[@id='app']//main//a[normalize-space(.)='${name}']`,
      locateStrategy: "xpath",
    };
    await page.waitForElementVisible(selector);
    await page.click(selector);
  },

  clickNewProgram: async function () {
    await page.click("@newProgramButton");
  },

  setProgramName: async function (programName) {
    await page.section.programForm.clearValue("@programNameField");
    await page.section.programForm.setValue(
      "@programNameField",
      programName.replace("*", helpers.generateRandomAlphaString(5))
    );
  },

  setSpecies: async function (species) {
    await page.section.programForm.setValue("@speciesSelect", species);
  },

  setProgramKey: async function (programKey) {
    await page.section.programForm.clearValue("@programKeyField");
    program.Key = programKey.replace("*", helpers.generateRandomAlphaString(5));
    await page.section.programForm.setValue("@programKeyField", program.Key);
  },

  clickSaveProgram: async function () {
    await this.getProgramValues();
    await page.section.programForm.click("@saveButton");
    await page.pause(5000);
  },

  getProgramValues: async function () {
    await page.section.programForm.getValue(
      "@programNameField",
      ({ value }) => {
        program.Name = value;
      }
    );
    console.log("Program name: " + program.Name);
    let option;
    await page.section.programForm.getValue("@speciesSelect", ({ value }) => {
      option = value;
    });

    await page.section.programForm.getText(
      { selector: `.//option[@value='${option}']`, locateStrategy: "xpath" },
      ({ value }) => {
        program.Species = String(value).trim();
      }
    );
    //Key only present for create, not edit
    let keyPresent;
    await page.section.programForm.api.element(
      "css selector",
      "@programKeyField",
      function (result) {
        keyPresent = result.value;
      }
    );

    if (keyPresent) {
      await page.section.programForm.getValue(
        "@programKeyField",
        ({ value }) => {
          program.Key = value;
        }
      );
    }
  },
};
