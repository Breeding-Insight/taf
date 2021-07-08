var reporter = require("cucumber-html-reporter");

var options = {
  theme: "bootstrap",
  jsonFile: "report/cucumber_report.json",
  output: "report/cucumber_report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    OS: "Window",
    Browser: "Chrome",
    "Breeding Insight": "1.0",
  },
};

reporter.generate(options);
