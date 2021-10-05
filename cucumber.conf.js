const fs = require("fs");
const {
  setDefaultTimeout,
  After,
  AfterAll,
  BeforeAll,
  Before,
} = require("@cucumber/cucumber");
const {
  createSession,
  closeSession,
  startWebDriver,
  stopWebDriver,
  getNewScreenshots,
  saveScreenshot,
} = require("nightwatch-api");
const reporter = require("cucumber-html-reporter");
const { client } = require("nightwatch-api");

setDefaultTimeout(300000);
global.__basedir = __dirname;

Before(async function () {
  await createSession({ env: this.parameters.browser });
  await client.resizeWindow(1900, 1200);
});

BeforeAll(async () => {
  await startWebDriver();
});

AfterAll(async () => {
  await stopWebDriver();
});

After(function () {
  getNewScreenshots().forEach((file) =>
    this.attach(fs.readFileSync(file), "image/png")
  );
  //Note: The following line can be commented out to keep browsers open for debugging purposes on local
  closeSession();
});
