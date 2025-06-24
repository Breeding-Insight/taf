const { When } = require("@cucumber/cucumber");
const { assert } = require("nightwatch");

When(
    /^user selects "([^"]*)" of row "([^"]*)" of Experiments page$/,
    async function (link, rowIndex) {
      await this.browser.page.experimentsObservationsPage().section.table.click({
        selector: `.//tr[${rowIndex}]//a[normalize-space(.)='${link}']`,
        locateStrategy: "xpath",
      });
    }
  );
When('user can see {string} as Collaborator', async function (s) {
  await this.browser.page.experimentsObservationsPage().isCollaboratorVisible(s);
})

When('user can not see {string} delete button of Collaborator', async function(s) {
  await this.browser.page.experimentsObservationsPage().isDeleteNotVisible(s);
})

When('user selects {string} delete button of Collaborator', async function (s) {
  await this.browser.page.experimentsObservationsPage().deleteCollaborator(s);
})

When('user can see {string} message', async function (s) {
  await this.browser.page.experimentsObservationsPage().assert.textContains({selector:"//*[@class='is-empty']//p", locateStrategy:"xpath"}, s);
})
