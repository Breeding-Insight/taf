var reporter = require("cucumber-html-reporter");
const fs = require("fs");

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

try {
  reporter.generate(options);
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
