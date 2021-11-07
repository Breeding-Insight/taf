var reporter = require("cucumber-html-reporter");
const fs = require("fs");

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
fs.readFile("report/cucumber_report.json", function (err, data) {
  if (err) throw err;
  if (data.includes(`"status": "failed"`)) {
    console.log("Test failed.");
    return 1;
  }
  return 0;
});
