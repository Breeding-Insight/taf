var reporter = require("cucumber-html-reporter");
const fs = require("fs");

try {
  let runInfo;
  fs.readFile("run.json", (err, data) => {
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
        "Breeding Insight": runInfo.BreedingInsight,
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
