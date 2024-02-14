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
const run = {
  browserName: "",
  platform: "",
  version: "",
  BreedingInsight: "",
};

setDefaultTimeout(300000);
global.__basedir = __dirname;

Before(async function () {
  await createSession({ env: this.parameters.browser });
  await client.resizeWindow(1900, 1200);
  this.parameters.timeStamp = Date.now();
  if (process.env.npm_config_url != undefined) {
    this.parameters.launch_url = process.env.npm_config_url;
  }
});

BeforeAll(async () => {
  await startWebDriver();
});

AfterAll(async () => {
  run.browserName = client.capabilities.browserName;
  console.log("Browser Name=" + client.capabilities.browserName);
  switch (client.capabilities.browserName) {
    case "msedge": //same as chrome
    case "chrome":
      run.version = client.capabilities.version;
      run.platform = client.capabilities.platform;
      break;
    case "firefox":
      run.version = client.capabilities.browserVersion;
      run.platform = client.capabilities.platformName;
      break;
    default:
      throw new Error("Unrecognized browser.");
  }
  await stopWebDriver();

  // convert JSON object to string
  const data = JSON.stringify(run);

  // write JSON string to a file
  fs.writeFile("run.json", data, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data is saved.");
  });
});

After(function () {
  if (run.BreedingInsight == "") {
    run.BreedingInsight = client.globals.breedingInsightVersion;
  }
  
  getNewScreenshots().forEach((file) =>
    this.attach(fs.readFileSync(file), "image/png")
  );
  //Note: The following line can be commented out to keep browsers open for debugging purposes on local
  closeSession();
});
