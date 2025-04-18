module.exports = {
  // Test source folder(s)
  src_folders: ["src/step_definitions"],

  // Page object path
  page_objects_path: "src/page_objects",

  // Custom commands path
  custom_commands_path: [],

  // Custom assertions path
  custom_assertions_path: [],

  // Plugins
  plugins: [],

  // Globals path
  globals_path: "",

  webdriver: {},

  // Report folder
  output_folder: "report",

  test_workers: {
    enabled: false,
  },

  // Cucumber Test Runner Configuration
  test_runner: {
    type: "cucumber", // Cucumber as test runner
    options: {
      feature_path: "src/features/*.feature",  // Path to feature files
      require: ["./cucumber.conf.js"],         // Path to cucumber.conf.js
      auto_start_session: false,               // Do not start session automatically
    },
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: "http://localhost",          // URL for the app under test

      screenshots: {
        enabled: true,                         // Enable screenshot capture
        path: "screenshots",                   // Fix typo here to "screenshots" instead of "screenshots"
        on_failure: true,                      // Capture screenshot on failure
      },

      desiredCapabilities: {
        browserName: "chrome",                 // Chrome as the browser for tests
      },

      webdriver: {
        start_process: true,                   // Start WebDriver automatically
        server_path: require("chromedriver").path,  // Path to Chromedriver (ensure chromedriver is installed)
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
          w3c: true,
          args: [
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
            "--window-size=1920,1080"
          ]
        }
      }
    },
  },
};
