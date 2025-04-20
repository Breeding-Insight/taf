const Nightwatch = require("nightwatch");
const {
  After,
  AfterAll,
  Before,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const os = require("os");
const reporter = require("cucumber-html-reporter");

require("events").EventEmitter.defaultMaxListeners = 20;
setDefaultTimeout(300000);

Before(async function ({ pickle }) {
  fs.mkdirSync("report", { recursive: true });
  fs.mkdirSync("screenshots", { recursive: true });

  this.tmpUserDataDir = fs.mkdtempSync(
    path.join(os.tmpdir(), "nw-chrome-profile-")
  );
  console.log("tmpUserDataDir:", this.tmpUserDataDir);

  const chromeArgs = [
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
    "--headless=new",
  ];

  const webdriver = {};
  if (this.parameters["webdriver-host"])
    webdriver.host = this.parameters["webdriver-host"];
  if (this.parameters["webdriver-port"])
    webdriver.port = this.parameters["webdriver-port"];
  if (typeof this.parameters["start-process"] !== "undefined")
    webdriver.start_process = this.parameters["start-process"];

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
    persist_globals: this.parameters["persist-globals"],
    config: this.parameters.config,
    globals: {
      run: {},
    },
    desiredCapabilities: {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: chromeArgs,
      },
    },
  });

  if (this.client.settings.sync_test_names) {
    this.client.updateCapabilities({ name: pickle.name });
  }

  console.log("Launching Chrome with args: ", chromeArgs);
  console.log("Executing test : " + pickle.name);

  this.browser = await this.client.launchBrowser();
  this.browser.globals.timestamp = Date.now();
});

After(async function (testCase) {
  if (testCase.result.status === "FAILED" && this.browser) {
    const filename = `screenshots/${testCase.pickle.name}-${Date.now()}.png`;
    await this.browser.saveScreenshot(filename);
    this.attach(fs.readFileSync(filename), "image/png");
  }

  if (this.browser) {
    await this.browser.quit();
  }

  if (this.tmpUserDataDir) {
    fs.rmSync(this.tmpUserDataDir, { recursive: true, force: true });
  }

  if (!this.browser?.globals?.run?.browserName) {
    const caps = this.browser.capabilities;
    const globalsRun = this.browser.globals.run;

    globalsRun.browserName = caps.browserName;
    globalsRun.version = caps.browserVersion;
    globalsRun.platform = caps.platformName;

    try {
      await fsPromises.writeFile("report/run.json", JSON.stringify(globalsRun));
      console.log("Saved run metadata.");
    } catch (err) {
      console.error("Error saving run metadata:", err);
    }
  }
});