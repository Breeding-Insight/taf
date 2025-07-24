const Nightwatch = require("nightwatch");
const {
  After,
  AfterAll,
  Before,
  setDefaultTimeout,
  BeforeAll,
} = require("@cucumber/cucumber");
const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const os = require("os");
const reporter = require("cucumber-html-reporter");
const globalTimings = {
  startTime: null
};

require("events").EventEmitter.defaultMaxListeners = 20;
setDefaultTimeout(300000); // Increase timeout to 10 minutes

BeforeAll(async function () {
  fs.mkdirSync("report", { recursive: true });
  fs.mkdirSync("screenshots", { recursive: true });
  // Store start time in global object
  globalTimings.startTime = Date.now();
  console.log("Test run started at:", new Date(globalTimings.startTime).toISOString());
});

Before(async function ({ pickle }) {
  
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
  });

  if (this.client.settings.sync_test_names) {
    this.client.updateCapabilities({ name: pickle.name });
  }

  console.log("Launching Chrome with args: ", chromeArgs);
  console.log("Executing test : " + pickle.name);

  try {
    this.browser = await this.client.launchBrowser();
    this.browser.globals.timestamp = Date.now();
  } catch (err) {
    console.error("Failed to launch browser:", err.message);
    if (this.attach) {
      this.attach(`Browser launch failed: ${err.message}`);
    }
    // Optionally set a flag to skip further steps in this scenario
    this.skipScenario = true;
    return;
  }
});

After(async function (testCase) {
  try {
    // Take screenshot if test failed and browser is available
    if (testCase.result.status === "FAILED" && this.browser) {
      try {
        const filename = `screenshots/${testCase.pickle.name}-${Date.now()}.png`;
        await this.browser.saveScreenshot(filename);
        this.attach(fs.readFileSync(filename), "image/png");
      } catch (screenshotError) {
        console.error("Failed to save screenshot:", screenshotError.message);
      }
    }

    // Only quit browser if not running with @debug tag
    const isDebug = testCase.pickle && testCase.pickle.tags && testCase.pickle.tags.some(tag => tag.name === '@debug');
    if (this.browser && !isDebug) {
      try {
        await this.browser.quit();
      } catch (quitError) {
        console.error("Failed to quit browser:", quitError.message);
      }
    }

    // Clean up temp directory
    if (this.tmpUserDataDir) {
      try {
        fs.rmSync(this.tmpUserDataDir, { recursive: true, force: true });
      } catch (cleanupError) {
        console.error("Failed to clean up temp directory:", cleanupError.message);
      }
    }
  } catch (error) {
    console.error("Error in After hook:", error.message);
  }

  const runJsonPath = "report/run.json";
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
      // Only write run.json if it doesn't exist
      if (!fs.existsSync(runJsonPath)) {
        await fsPromises.writeFile(runJsonPath, JSON.stringify(globalsRun));
        console.log("Saved run metadata.");
      }
    } catch (err) {
      console.error("Error saving run metadata:", err);
    }
  }
});

AfterAll(async function () {
  const endTime = Date.now();
  console.log("Test run ended at:", new Date(endTime).toISOString());
  
  // Calculate duration using global start time
  const duration = (endTime - globalTimings.startTime) / 1000;
  
  if (!isNaN(duration)) {
    console.log(`Test run duration: ${duration.toFixed(2)} seconds`);
    console.log(`Test run duration: ${(duration / 60).toFixed(2)} minutes`);
  } else {
    console.error("Could not calculate duration - start time was not properly recorded");
  }
});