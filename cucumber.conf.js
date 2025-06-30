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

  // Create a custom download folder for this scenario
  this.tmpDownloadDir = fs.mkdtempSync(
    path.join(os.tmpdir(), "nw-chrome-downloads-")
  );
  console.log("tmpDownloadDir:", this.tmpDownloadDir);

  // Initialize browser.globals.downloadedFilePath
  if (!this.browser) {
    // browser not initialized yet, will set after launch
    this._initDownloadedFilePath = true;
  } else {
    this.browser.globals.downloadedFilePath = null;
  }

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
    // "--headless=new",
  ];

  const chromePrefs = {
    "download.default_directory": this.tmpDownloadDir,
    "download.prompt_for_download": false,
    "download.directory_upgrade": true,
    "safebrowsing.enabled": true,
  };

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
        prefs: chromePrefs, // <-- add prefs for downloads
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

  // Set downloadedFilePath on browser.globals after browser is available
  if (this._initDownloadedFilePath) {
    this.browser.globals.downloadedFilePath = null;
    delete this._initDownloadedFilePath;
  }
});

After(async function (testCase) {
  if (testCase.result.status === "FAILED" && this.browser) {
    const filename = `screenshots/${testCase.pickle.name}-${Date.now()}.png`;
    await this.browser.saveScreenshot(filename);
    this.attach(fs.readFileSync(filename), "image/png");
  }

  if (this.browser) {
    // await this.browser.quit();
  }

  if (this.tmpUserDataDir) {
    fs.rmSync(this.tmpUserDataDir, { recursive: true, force: true });
  }
  if (this.tmpDownloadDir) {
    fs.rmSync(this.tmpDownloadDir, { recursive: true, force: true });
  }

  // Clear browser.globals.downloadedFilePath after scenario
  if (this.browser && this.browser.globals) {
    this.browser.globals.downloadedFilePath = null;
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

/**
 * Wait for a file to appear in the default download directory and return its path.
 * Usage: await getLatestDownloadedFile(10000);
 */
async function getLatestDownloadedFile(timeoutMs = 10000) {
  // Resolve the default download directory from Chrome options
  let downloadDir = null;
  // Try to get from the first browser instance if available
  if (global.browser?.options?.desiredCapabilities?.["goog:chromeOptions"]?.prefs?.["download.default_directory"]) {
    downloadDir = global.browser.options.desiredCapabilities["goog:chromeOptions"].prefs["download.default_directory"];
  }
  // Fallback: try to get from process.env or hardcoded path if needed
  if (!downloadDir) {
    downloadDir = require("os").tmpdir();
  }

  const fs = require("fs");
  const path = require("path");
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const files = fs.readdirSync(downloadDir).filter((f) => !f.endsWith(".crdownload"));
    if (files.length > 0) {
      // Optionally, sort by mtime to get the latest file
      const filePaths = files.map((f) => path.join(downloadDir, f));
      filePaths.sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);
      return filePaths[0];
    }
    await new Promise((res) => setTimeout(res, 500));
  }
  throw new Error("No downloaded file found in time");
}

// Export for use in step definitions
module.exports.getLatestDownloadedFile = getLatestDownloadedFile;