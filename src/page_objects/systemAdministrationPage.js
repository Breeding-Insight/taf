const path = require("path");
// const importFolder = path.join(__basedir, "src", "files", "TraitImport");
// const fs = require("fs");
const program = {};
// const location = {};
// const helpers = require("./helpers");
// const { Sign } = require("crypto");

module.exports = {
  elements: {
    newProgramControl:{
      selector:"//span[contains((.), 'New Program')]",
      locateStrategy: "xpath",
    },
    programNameControl:{
      selector:"#Program-Name",
    },
    speciesControl:{
      selector:"#Species",
    },
    programKeyControl:{
      selector:"#Program-Key",
    },
    saveControl:{
      selector:"//button[contains((.), 'Save')]",
      locateStrategy: "xpath",
    },
    cancelControl:{
      selector:"//button[contains((.), 'Cancel')]",
      locateStrategy: "xpath",
    },
  },
  commands: [
    {
    selectProgram: async function (name) {
      if (name.includes("*")) {
        name = program.Name;
      }
      const selector = {
        selector: `//*[@id='app']//main//a[normalize-space(.)='${name}']`,
        locateStrategy: "xpath",
      };
      await this.api.waitForElementVisible(selector);
      await this.api.click(selector);
      },
    createProgram: async function(programNamne, species, programKey){
      // await this.api.debug();
      // await this.api.waitForElementVisible("@newProgramControl", 60000);
      // await this.api.waitForElementVisible({selector:"#adminProgramTableLabel > button"}, 60000);
      
      await this.click("@newProgramControl");
      await this.setValue("@programNameControl", programNamne);
      await this.setValue("@speciesControl", species)
      await this.setValue("@programKeyControl", programKey).click("@saveControl");
    }
  }
  ]
};

  // clickNewProgram: async function () {
  //   await this.browser.page.page().click("@newProgramButton");
  // },

  // setProgramName: async function (programName) {
  //   await this.browser.page.page().section.programForm.clearValue("@programNameField");
  //   await this.browser.page.page().section.programForm.setValue(
  //     "@programNameField",
  //     programName.replace("*", helpers.generateRandomAlphaString(5))
  //   );
  // },

  // setSpecies: async function (species) {
  //   await this.browser.page.page().section.programForm.setValue("@speciesSelect", species);
  // },

  // setProgramKey: async function (programKey) {
  //   await this.browser.page.page().section.programForm.clearValue("@programKeyField");
  //   program.Key = programKey.replace("*", helpers.generateRandomAlphaString(5));
  //   await this.browser.page.page().section.programForm.setValue("@programKeyField", program.Key);
  // },

  // clickSaveProgram: async function () {
  //   await this.getProgramValues();
  //   await this.browser.page.page().section.programForm.click("@saveButton");
  //   await this.browser.page.page().pause(5000);
  // },

  // getProgramValues: async function () {
  //   await this.browser.page.page().section.programForm.getValue(
  //     "@programNameField",
  //     ({ value }) => {
  //       program.Name = value;
  //     }
  //   );
  //   console.log("Program name: " + program.Name);
  //   let option;
  //   await this.browser.page.page().section.programForm.getValue("@speciesSelect", ({ value }) => {
  //     option = value;
  //   });

  //   await this.browser.page.page().section.programForm.getText(
  //     { selector: `.//option[@value='${option}']`, locateStrategy: "xpath" },
  //     ({ value }) => {
  //       program.Species = String(value).trim();
  //     }
  //   );
  //   //Key only present for create, not edit
  //   let keyPresent;
  //   await this.browser.page.page().section.programForm.api.element(
  //     "css selector",
  //     "@programKeyField",
  //     function (result) {
  //       keyPresent = result.value;
  //     }
  //   );

  //   if (keyPresent) {
  //     await this.browser.page.page().section.programForm.getValue(
  //       "@programKeyField",
  //       ({ value }) => {
  //         program.Key = value;
  //       }
  //     );
  //   }
  // },
