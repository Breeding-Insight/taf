module.exports = {
  url: function () {
    return this.api.launchUrl;
  },
  elements: {
    header: {
      selector: "//h3[text()='Sample Management']",
      locateStrategy: "xpath",
    },
  },
};
