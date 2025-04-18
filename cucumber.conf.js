const Nightwatch = require("nightwatch");
const {
  After,
  AfterAll,
  Before,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const fs = require("fs");
const path = require("path");
const os = require("os");

setDefaultTimeout(-1);

Before(async function ({ pickle }) {
  const fs = require("fs");
  fs.mkdirSync("report", { recursive: true });
  fs.mkdirSync("screenshots", { recursive: true });

  // Create a unique and guaranteed-empty temp dir
  const tmpUserDataDir = fs.mkdtempSync(
    path.join(os.tmpdir(), "nw-chrome-profile-")
  );
  console.log("tmpUserDataDir:", tmpUserDataDir);

  const chromeArgs = [
    // `--user-data-dir=${tmpUserDataDir}`,
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--disable-extensions",
    "--disable-gpu",
    "--disable-background-networking",
    "--disable-sync",
    "--metrics-recording-only",
    "--disable-default-apps",
    "--mute-audio",
    "--no-first-run",
    "--ignore-certificate-errors",
    "--allow-insecure-localhost",
    "--window-size=1920,1080",
  ];

  const webdriver = {};
  if (this.parameters["webdriver-host"]) {
    webdriver.host = this.parameters["webdriver-host"];
  }
  if (this.parameters["webdriver-port"]) {
    webdriver.port = this.parameters["webdriver-port"];
  }
  if (typeof this.parameters["start-process"] !== "undefined") {
    webdriver.start_process = this.parameters["start-process"];
  }

  const globals = {};
  if (this.parameters["retry-interval"]) {
    globals.waitForConditionPollInterval = this.parameters["retry-interval"];
  }

  // Build client
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
    persist_globals: this.parameters["persist-globals"],
    config: this.parameters.config,
    globals:{
      run: {}
    },
    desiredCapabilities: {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: chromeArgs,
      },
    },
  });

  // Optional: sync name to cloud runs
  if (this.client.settings.sync_test_names) {
    this.client.updateCapabilities({ name: pickle.name });
  }

  console.log("Launching Chrome with args:", chromeArgs);

  this.browser = await this.client.launchBrowser();
  this.browser.globals.timestamp = Date.now();
});

After(async function (testCase) {
  if (testCase.result.status === "FAILED" && browser) {
    let filename = `screenshots/${testCase.pickle.name}-${Date.now()}.png`;
    await this.browser.saveScreenshot(filename);
    const fs = require("fs");
    this.attach(fs.readFileSync(filename), "image/png");
  }
  if (browser) {
    await this.browser.quit();
  }

  if (this.tmpUserDataDir) {
    fs.rmSync(this.tmpUserDataDir, { recursive: true, force: true });
  }

});

After(async function () {
  if (!this.browser?.globals?.run?.browserName) {
    const caps = this.browser.capabilities;
    const globalsRun = this.browser.globals.run;

    globalsRun.browserName = caps.browserName;

    switch (caps.browserName) {
      case "msedge":
      case "chrome-headless-shell":
      case "chrome":
        globalsRun.version = caps.browserVersion;
        globalsRun.platform = caps.platformName;
        break;
      case "firefox":
        globalsRun.version = caps.browserVersion;
        globalsRun.platform = caps.platformName;
        break;
    }
      // convert JSON object to string
      const data = JSON.stringify(globalsRun);

      // write JSON string to a file
      fs.writeFile("report/run.json", data, (err) => {
        if (err) {
          throw err;
        }
        console.log("JSON data is saved.");
      });
  }
});



AfterAll(async function () {
  var reporter = require("cucumber-html-reporter");
  const fs = require("fs");

  try {
    let runInfo;
    fs.readFile("report/run.json", (err, data) => {
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
          "Breeding Insight": runInfo.breedingInsightVersion,
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

  fs.readFile("report/cucumber_report.json", function (err, data) {
    if (err) throw err;
    if (data.includes(`"status": "failed"`)) {
      console.log("Test failed.");
      process.exit(1);
    }
  });
});
