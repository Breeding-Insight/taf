//const chromedriver = require("chromedriver");

module.exports = {
  globals_path: "globals.js",
  page_objects_path: "./src/page_objects", //page_objects folder where selectors are saved
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: require("chromedriver").path,
        port: 4444,
        cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['headless', 'no-sandbox', 'disable-gpu']
        }
      },
      launch_url: "http://localhost",
      screenshots: {
        enabled: true,
        path: "./screenshots",
      },
    },
    sandbox: {
      launch_url: "http://sandbox.breedinginsight.net/",
    },
    docker: {
      launch_url: "http://biproxy",
    },
    ie: {
      desiredCapabilities: {
        browserName: "internet explorer",
        requireWindowFocus: true,
        nativeEvents: true,
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: "firefox",
      },
    },
    chrome: {
    },
    edge: {
      selenium: {
        start_process: false,
        port: 9515,
      },
      desiredCapabilities: {
        browserName: "MicrosoftEdge",
      },
    },
    "sandbox.chrome": {
      extends: "sandbox",
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          w3c: false,
        },
      },
    },
    "docker.chrome": {
      extends: "docker",
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: ["headless", "no-sandbox", "disable-gpu"],
          w3c: false,
        },
      },
    },
    "docker.firefox": {
      extends: "docker",
      desiredCapabilities: {
        browserName: "firefox"
      },
    },
  },
};
