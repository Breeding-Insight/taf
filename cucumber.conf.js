const Nightwatch = require("nightwatch");
const {
  After,
  AfterAll,
  Before,
  setDefaultTimeout,
} = require("@cucumber/cucumber");

setDefaultTimeout(-1);
global.__basedir = __dirname;

Before(function ({ pickle }) {
  const webdriver = {};

  if (this.parameters["webdriver-host"]) {
    webdriver.host = this.parameters["webdriver-host"];
  }

  if (this.parameters["webdriver-port"]) {
    webdriver.port = this.parameters["webdriver-port"];
  }

  if (typeof this.parameters["start-process"] != "undefined") {
    webdriver.start_process = this.parameters["start-process"];
  }

  let persist_globals;
  if (this.parameters["persist-globals"]) {
    persist_globals = this.parameters["persist-globals"];
  }

  const globals = {};
  if (this.parameters["retry-interval"]) {
    globals.waitForConditionPollInterval = this.parameters["retry-interval"];
  }

  this.client = Nightwatch.createClient({
    headless: this.parameters.headless,
    env: this.parameters.env,
    timeout: this.parameters.timeout,
    parallel: !!this.parameters.parallel,
    output: !this.parameters["disable-output"],
    enable_global_apis: true,
    silent: !this.parameters.verbose,
    always_async_commands: true,
    webdriver,
    persist_globals,
    config: this.parameters.config,
    globals,
  });

  if (this.client.settings.sync_test_names) {
    const { name } = pickle;
    const os = require('os');
    const path = require('path');
    const uniqueProfile = path.join(os.tmpdir(), `nightwatch-profile-${process.pid}`);
    this.client.updateCapabilities({
      name,
      args: [
        '--no-sandbox',
        '--ignore-certificate-errors',
        '--allow-insecure-localhost',
        '--disable-gpu',
        `--user-data-dir=${uniqueProfile}`
      ]
    });
  }

  const { options = {} } = this.client.settings.test_runner;

  // auto_start_session is true by default
  if (
    options.auto_start_session ||
    typeof options.auto_start_session == "undefined"
  ) {
    return this.client.launchBrowser().then((browser) => {
      this.browser = browser;
    });
  }
});

After(async function (testCase) {
  if (testCase.result.status === "FAILED" && this.browser) {
    let filename = `screenshots/${testCase.pickle.name}-${Date.now()}.png`;
    await this.browser.saveScreenshot(filename);
    const fs = require("fs");
    this.attach(fs.readFileSync(filename), "image/png");
  }
  if (this.browser) {
    await this.browser.quit();
  }
});

AfterAll(async function () {
  var reporter = require("cucumber-html-reporter");
  const fs = require("fs");

  try {
    let runInfo;
    fs.readFile("run.json", (err, data) => {
      if (err) {
        console.log("File read failed:", err);
        throw "Error opening file.";
      }
      runInfo = JSON.parse(data);
    reporter.generate({
      theme: "bootstrap",
      jsonFile: "report/cucumber_report.json",
      output: "report/cucumber_report.html",
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
          "Breeding Insight": runInfo.BreedingInsight,
          Browser: runInfo.browserName,
          "Browser Version": runInfo.version,
          OS: runInfo.platform,
      },
    });
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  // fs.readFile("report/cucumber_report.json", function (err, data) {
  //   if (err) throw err;
  //   if (data.includes(`"status": "failed"`)) {
  //     console.log("Test failed.");
  //     process.exit(1);
  //   }
  // });
});
