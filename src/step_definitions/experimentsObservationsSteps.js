const { When } = require("@cucumber/cucumber");

When(
    /^user selects "([^"]*)" of row "([^"]*)" of Experiments page$/,
    async function (link, rowIndex) {
      await this.browser.page.experimentsObservationsPage().section.table.click({
        selector: `.//tr[${rowIndex}]//a[normalize-space()='${link}']`,
        locateStrategy: "xpath",
      });
    }
  );