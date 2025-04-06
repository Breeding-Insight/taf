// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ["src/step_definitions"],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: "src/page_objects",

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: [],

  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: "",

  webdriver: {},

  output_folder: "report",

  test_workers: {
    enabled: false,
  },

  test_runner: {
    // set cucumber as the runner
    // For more info on using CucumberJS with Nightwatch, visit:
    // https://nightwatchjs.org/guide/writing-tests/using-cucumberjs.html
    type: "cucumber",

    // define cucumber specific options
    options: {
      //set the feature path
      feature_path: "src/features/*.feature",
      // tags: '@debug'

      // start the webdriver session automatically (enabled by default)
      auto_start_session: true,
      require: ["./cucumber.conf.js"],

      // use parallel execution in Cucumber
      // parallel: 2 // set number of workers to use (can also be defined in the cli as --parallel 2
    },
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: "http://localhost",

      screenshots: {
        enabled: true,
        path: "screensshots",
        on_failure: true,
      },

      desiredCapabilities: {
        browserName: "chrome",
      },

      webdriver: {
        start_process: true,
        // server_path: require("chromedriver").path,
        // port: 4444,
        // cli_args: ["--port=4444"],
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          args: [
            "--no-sandbox",
            "--ignore-certificate-errors",
            "--allow-insecure-localhost",
            "--edge-skip-compat-layer-relaunch",
            "--disable-gpu",
          ],
        },
      },
    },
  },
};
