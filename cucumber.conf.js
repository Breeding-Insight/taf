const fs = require("fs");
const { setDefaultTimeout, After, AfterAll, BeforeAll, Before } = require("cucumber");
const {
  createSession,
  closeSession,
  startWebDriver,
  stopWebDriver,
  getNewScreenshots
} = require("nightwatch-api");
const reporter = require("cucumber-html-reporter");
const { client } = require("nightwatch-api");

setDefaultTimeout(300000);

Before(async()=>{
  await createSession();
  await client.maximizeWindow();
})

BeforeAll(async () => {
  await startWebDriver({
    env: process.argv[process.argv.indexOf("--env") + 1]
  });
});

AfterAll(async () => {
  let version, browserName, platform;

  await client.sessions((result) => {
    browserName = result.value[0]["capabilities"]["browserName"];
    switch (browserName) {
      case "chrome":
        version = result.value[0]["capabilities"]["version"];
        platform = result.value[0]["capabilities"]["platform"];
        break;
      case "firefox":
        version = result.value[0]["capabilities"]["browserVersion"];
        platform = result.value[0]["capabilities"]["platformName"];
        break;
      case "internet explorer":
        platform = result.value[0]["capabilities"]["platformName"];
        version = result.value[0]["capabilities"]["browserVersion"];
        break;
    }
  });

  await stopWebDriver();

  setTimeout(() => {
    reporter.generate({
      theme: "bootstrap",
      jsonFile: "report/cucumber_report.json",
      output: "report/cucumber_report.html",
      reportSuiteAsScenarios: true,
      launchReport: true,
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
  getNewScreenshots().forEach(file => this.attach(fs.readFileSync(file), 'image/png'));
  // closeSession();
});
