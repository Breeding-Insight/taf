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
  let version, browserName, platform; 
  await stopWebDriver();

  setTimeout(() => {
    reporter.generate({
      theme: "bootstrap",
      jsonFile: "report/cucumber_report.json",
      output: "report/cucumber_report.html",
      reportSuiteAsScenarios: true,
      launchReport: false,
      metadata: {
        OS: platform,
        Browser: browserName,
        Version: version,
        "BreedInsight Version": "1.0.0",
      },
    });
  }, 0);
});

After(function () {
  getNewScreenshots().forEach((file) =>
    this.attach(fs.readFileSync(file), "image/png")
  );
  //Note: The following line can be commented out to keep browsers open for debugging purposes on local
  closeSession();
});
