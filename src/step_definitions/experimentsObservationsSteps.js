const { client } = require("nightwatch-api");
const { Then, When } = require("@cucumber/cucumber");
const experimentsObservationPage = client.page.experimentsObservationsPage();
const helpers = require("./helpers");

When(
    /^user selects "([^"]*)" of row "([^"]*)" of Experiments page$/,
    async function (link, rowIndex) {
      await experimentsObservationPage.section.table.click({
        selector: `.//tr[${rowIndex}]//a[normalize-space()='${link}']`,
        locateStrategy: "xpath",
      });
    }
  );