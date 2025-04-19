const path = require("path");
const program = {};
const helpers = require("../step_definitions/helpers");

module.exports = {
  elements: {
    newProgramControl: {
      selector: "//span[contains((.), 'New Program')]",
      locateStrategy: "xpath",
    },
    programNameControl: {
      selector: "#Program-Name",
    },
    speciesControl: {
      selector: "#Species",
    },
    programKeyControl: {
      selector: "#Program-Key",
    },
    saveControl: {
      selector: "//button[contains((.), 'Save')]",
      locateStrategy: "xpath",
    },
    cancelControl: {
      selector: "//button[contains((.), 'Cancel')]",
      locateStrategy: "xpath",
    },
  },
  commands: [
    {
      selectProgram: async function (name) {
        if (name.includes("*")) {
          name = browser.globals.program.Name;
        }
        const selector = {
          selector: `//*[@id='app']//main//a[normalize-space(.)='${name}']`,
          locateStrategy: "xpath",
        };
        await this.api.waitForElementPresent(selector, 60000);
        await this.api.click(selector);
      },
      createProgram: async function (programNamne, species, programKey) {
        // await this.api.debug();
        // await this.api.waitForElementVisible("@newProgramControl", 60000);
        // await this.api.waitForElementVisible({selector:"#adminProgramTableLabel > button"}, 60000);

        await this.click("@newProgramControl");
        await this.setValue("@programNameControl", programNamne.replace("*", helpers.generateRandomAlphaString(5)));
        await this.setValue("@speciesControl", species);
        await this.setValue("@programKeyControl", programKey.replace("*", helpers.generateRandomAlphaString(5)));
        await this.getProgramValues();
        await this.click("@saveControl");
      },

      clickNewProgram: async function () {
        await this.click("@newProgramControl");
      },

      setProgramName: async function (programName) {
        await this.clearValue("@programNameControl");
        await this.setValue(
          "@programNameControl",
          programName.replace("*", helpers.generateRandomAlphaString(5))
        );
      },

      setSpecies: async function (species) {
        await this.setValue("@speciesControl", species);
      },

      setProgramKey: async function (programKey) {
        await this.clearValue("@programKeyControl");
        program.Key = programKey.replace(
          "*",
          helpers.generateRandomAlphaString(5)
        );
        await this.setValue("@programKeyControl", program.Key);
      },

      clickSaveProgram: async function () {
        await this.getProgramValues();
        await this.browser.page.page().section.programForm.click("@saveButton");
        await this.browser.page.page().pause(5000);
      },

      getProgramValues: async function () {
        if (typeof browser.globals.program === "undefined") {
          browser.globals.program = {};
        }
      
        // Get program name
        const programName = await new Promise((resolve) => {
          this.getValue("@programNameControl", ({ value }) => {
            resolve(value);
          });
        });
        browser.globals.program.Name = programName;
        console.log("Program name: " + programName);
      
        // Get species value
        const speciesValue = await new Promise((resolve) => {
          this.getValue("@speciesControl", ({ value }) => {
            resolve(value);
          });
        });
      
        // Use speciesValue safely now
        const speciesLabel = await new Promise((resolve) => {
          this.getText(
            {
              selector: `.//option[@value='${speciesValue}']`,
              locateStrategy: "xpath",
            },
            ({ value }) => {
              resolve(String(value).trim());
            }
          );
        });
        browser.globals.program.Species = speciesLabel;
      
        // Check if programKeyControl exists
        const keyPresent = await new Promise((resolve) => {
          this.isVisible("@programKeyControl", function (result) {
            resolve(result.status !== -1); // Check if element exists
          });
        });
      
        if (keyPresent) {
          const programKey = await new Promise((resolve) => {
            this.getValue("@programKeyControl", ({ value }) => {
              resolve(value);
            });
          });
          browser.globals.program.Key = programKey;
        }
      },
    }
  ],
};
