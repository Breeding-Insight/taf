//const chromedriver = require("chromedriver");

module.exports = {
  globals_path: "globals.js",
  page_objects_path: "./src/page_objects", //page_objects folder where selectors are saved
  selenium: {
    start_process: true,
    port: 4444,
    start_session: true,
    server_path: require("selenium-server").path,

    cli_args: {
      "webdriver.gecko.driver": require("geckodriver").path,
      "webdriver.chrome.driver": require("chromedriver").path,
      //don't use the 64bit driver. it is really slow
      "webdriver.edge.driver": "./src/driver/msedgedriver.exe",
      "webdriver.ie.driver":
        "./node_modules/iedriver/lib/iedriver/IEDriverServer.exe",
    },
  },

  test_settings: {
    default: {
      launch_url: "http://biproxy",
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
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: ["headless", "no-sandbox", "disable-gpu"],
          w3c: false,
        },
      },
    },
    edge: {
      extends: "docker",
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
    "docker.edge": {
      extends: "docker",
      desiredCapabilities: {
        browserName: "MicrosoftEdge",
      },
    },
  },
};
