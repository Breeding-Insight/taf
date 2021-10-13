var reporter = require("cucumber-html-reporter");
const run = require('./run.json')

var options = {
  theme: "bootstrap",
  jsonFile: "report/cucumber_report.json",
  output: "report/cucumber_report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "Breeding Insight": run.BreedingInsight,
    Browser: run.browserName,
    "Browser Version": run.version,
    OS: run.platform,
  },
};

reporter.generate(options);
