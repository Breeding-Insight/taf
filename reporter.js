// generate-report.js
const fs = require("fs").promises;
const reporter = require("cucumber-html-reporter");

(async () => {
  const maxRetries = 10;
  const delay = 500;
  const reportPath = "report/cucumber_report.json";

  // Wait until JSON is fully written
  for (let i = 0; i < maxRetries; i++) {
    try {
      const content = await fs.readFile(reportPath, "utf-8");
      if (content.trim().length > 10) {
        console.log("✅ Found cucumber_report.json");
        break;
      }
    } catch {}
    await new Promise((res) => setTimeout(res, delay));
  }

  let runInfo = {
    browserName: "Unknown",
    version: "Unknown",
    platform: process.platform,
  };

  try {
    const data = await fs.readFile("report/run.json", "utf-8");
    runInfo = JSON.parse(data);
  } catch {
    console.warn("⚠️ No run.json metadata found.");
  }

  try {
    reporter.generate({
      theme: "bootstrap",
      jsonFile: reportPath,
      output: "report/cucumber_report.html",
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        "Breeding Insight": runInfo.breedingInsightVersion || "N/A",
        Browser: runInfo.browserName,
        "Browser Version": runInfo.version,
        OS: runInfo.platform,
      },
    });

    const json = JSON.parse(await fs.readFile(reportPath, "utf-8"));
    const hasFailure = json.some((feature) =>
      feature.elements?.some((scenario) =>
        scenario.steps?.some((step) => step.result?.status === "failed")
      )
    );

    if (hasFailure) {
      console.error("🚨 Tests failed.");
      process.exit(1);
    }

    console.log("✅ Report generated.");
  } catch (err) {
    console.error("❌ Error generating report:", err.message);
    process.exit(1);
  }
})();
