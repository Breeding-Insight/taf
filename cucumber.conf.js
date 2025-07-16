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
const chromedriverPath = require("chromedriver").path;

require("events").EventEmitter.defaultMaxListeners = 20;
setDefaultTimeout(1000 * 60 * 120); 

process.on('SIGTERM', () => {
  console.warn('Received SIGTERM - shutting down');
});
process.on('SIGINT', () => {
  console.warn('Received SIGINT - interrupted');
});
process.on('uncaughtException', err => {
  console.error('Uncaught exception:', err);
});
process.on('unhandledRejection', reason => {
  console.error('Unhandled promise rejection:', reason);
});


Before(async function ({ pickle }) {
  fs.mkdirSync("report", { recursive: true });
  fs.mkdirSync("screenshots", { recursive: true });

  this.tmpUserDataDir = fs.mkdtempSync(
    path.join(os.tmpdir(), "nw-chrome-profile-")
  );
  console.log("tmpUserDataDir:", this.tmpUserDataDir);

  // Set Chrome to headed mode if @debug tag is present
  let chromeArgs = [
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
  const isDebug = pickle.tags && pickle.tags.some(tag => tag.name === '@debug');
  if (!isDebug) {
    chromeArgs.push("--headless=new");
  }

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
    webdriver: {
      start_process: this.parameters["start-process"] !== false,
      server_path: chromedriverPath,
      port: this.parameters["webdriver-port"] ||  9515,
      cli_args: [
        "--verbose",
        "--log-path=chromedriver.log",
      ],
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

  // Only quit browser if not running with @debug tag
  const isDebug = testCase.pickle && testCase.pickle.tags && testCase.pickle.tags.some(tag => tag.name === '@debug');
  if (this.browser && !isDebug) {
    await this.browser.quit();
  }

  try {
    if (this.browser && !isDebug) {
      await this.browser.quit();
    }
  } catch (e) {
    console.error("Error during After hook:", e);
  }

  if (this.tmpUserDataDir) {
    fs.rmSync(this.tmpUserDataDir, { recursive: true, force: true });
  }

  if (
    this.browser &&
    this.browser.capabilities &&
    !this.browser?.globals?.run?.browserName
  ) {
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