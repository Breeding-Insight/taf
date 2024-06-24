const { client } = require("nightwatch-api");
const { Then, When, AfterAll } = require("@cucumber/cucumber");
const path = require("path");
const helpers = require("./helpers.js");
const importPage = client.page.importPage();
const importStepsHelpers = require("./importStepsHelpers.js");
const ontologyFolder = path.join(__basedir, "src", "files", "OntologyImport");
const experimentsFolder = path.join(
  __basedir,
  "src",
  "files",
  "ExperimentsImport"
);

When(
  /^user sets "([^"]*)" in List Name field of import page$/,
  async function (args1) {
    await importStepsHelpers.setListName(args1);
  }
);

When(
  /^user sets "([^"]*)" in List Description field of import page$/,
  async function (args1) {
    await importStepsHelpers.setListDescription(args1);
  }
);

Then(
  /^user can see 'Import' button accepts "([^"]*)"$/,
  async function (args1) {
    await importPage.assert.domPropertyEquals(
      {
        selector: "//div[@class='file-select']//input",
        locateStrategy: "xpath",
      },
      "accept",
      args1
    );
  }
);

When(/^user clicks on "([^"]*)" of Germplasm table$/, async function (args1) {
  await importPage.click({
    selector: `//th//span[normalize-space()='${args1}']`,
    locateStrategy: "xpath",
  });
});

When(/^user clicks on GID sort descending$/, async function () {
  await importPage.click({
    selector: "//th[1]//span[@class='icon sort-icon is-small']",
    locateStrategy: "xpath",
  });
});

When(/^user clicks on GID sort ascending$/, async function () {
  await importPage.click({
    selector: "//th[1]//span[@class='icon sort-icon is-small is-desc']",
    locateStrategy: "xpath",
  });
});

Then(/^user can see "([^"]*)" GID in first line$/, async function (args1) {
  await importPage.assert.containsText(
    {
      selector: `//tr[1]//td[@data-label='GID']/a`,
      locateStrategy: "xpath",
    },
    args1
  );
});

When(/^user clicks on Germplasm Name sort descending$/, async function () {
  await importPage.click({
    selector: "//th[2]//span[@class='icon sort-icon is-small']",
    locateStrategy: "xpath",
  });
});

When(/^user clicks on Germplasm Name sort ascending$/, async function () {
  await importPage.click({
    selector: "//th[2]//span[@class='icon sort-icon is-small is-desc']",
    locateStrategy: "xpath",
  });
});

Then(/^user can see "([^"]*)" Name in first line$/, async function (args1) {
  await importPage.assert.containsText(
    {
      selector: `//tr[1]//td[@data-label='Germplasm Name']`,
      locateStrategy: "xpath",
    },
    args1
  );
});

When(/^user clicks on Breeding Method sort descending$/, async function () {
  await importPage.click({
    selector: "//th[3]//span[@class='icon sort-icon is-small']",
    locateStrategy: "xpath",
  });
});

When(/^user clicks on Breeding Method sort ascending$/, async function () {
  await importPage.click({
    selector: "//th[3]//span[@class='icon sort-icon is-small is-desc']",
    locateStrategy: "xpath",
  });
});

Then(
  /^user can see "([^"]*)" Breeding Method in first line$/,
  async function (args1) {
    await importPage.assert.containsText(
      {
        selector: `//tr[1]//td[@data-label='Breeding Method']`,
        locateStrategy: "xpath",
      },
      args1
    );
  }
);

When(/^user clicks on Source sort descending$/, async function () {
  await importPage.click({
    selector: "//th[4]//span[@class='icon sort-icon is-small']",
    locateStrategy: "xpath",
  });
});

When(/^user clicks on Source sort ascending$/, async function () {
  await importPage.click({
    selector: "//th[4]//span[@class='icon sort-icon is-small is-desc']",
    locateStrategy: "xpath",
  });
});

Then(/^user can see "([^"]*)" Source in first line$/, async function (args1) {
  await importPage.assert.containsText(
    {
      selector: `//tr[1]//td[@data-label='Source']`,
      locateStrategy: "xpath",
    },
    args1
  );
});

When(/^user clicks on Female Parent GID sort descending$/, async function () {
  await importPage.click({
    selector: "//th[6]//span[@class='icon sort-icon is-small']",
    locateStrategy: "xpath",
  });
});

When(/^user clicks on Female Parent GID sort ascending$/, async function () {
  await importPage.click({
    selector: "//th[6]//span[@class='icon sort-icon is-small is-desc']",
    locateStrategy: "xpath",
  });
});

Then(
  /^user can see "([^"]*)" Female Parent GID in first line$/,
  async function (args1) {
    await importPage.assert.containsText(
      {
        selector: `//tr[1]//td[@data-label='Female Parent GID']/div | //tr[1]//td[@data-label='Female Parent GID']/a`,
        locateStrategy: "xpath",
      },
      args1
    );
  }
);

When(/^user clicks on Male Parent GID sort descending$/, async function () {
  await importPage.click({
    selector: "//th[7]//span[@class='icon sort-icon is-small']",
    locateStrategy: "xpath",
  });
});

When(/^user clicks on Male Parent GID sort ascending$/, async function () {
  await importPage.click({
    selector: "//th[7]//span[@class='icon sort-icon is-small is-desc']",
    locateStrategy: "xpath",
  });
});

Then(
  /^user can see "([^"]*)" Male Parent GID in first line$/,
  async function (args1) {
    await importPage.assert.containsText(
      {
        selector: `//tr[1]//td[@data-label='Male Parent GID']`,
        locateStrategy: "xpath",
      },
      args1
    );
  }
);

When(/^user clicks on Created Date sort descending$/, async function () {
  await importPage.click({
    selector: "//th[8]//span[@class='icon sort-icon is-small']",
    locateStrategy: "xpath",
  });
});

When(/^user clicks on Created Date sort ascending$/, async function () {
  await importPage.click({
    selector: "//th[8]//span[@class='icon sort-icon is-small is-desc']",
    locateStrategy: "xpath",
  });
});

Then(
  /^user can see "([^"]*)" Created Date in first line$/,
  async function (args1) {
    await importPage.assert.containsText(
      {
        selector: `//tr[11]//td[@data-label='Created Date']`,
        locateStrategy: "xpath",
      },
      args1
    );
  }
);

When(/^user clicks on Created By sort descending$/, async function () {
  await importPage.click({
    selector: "//th[9]//span[@class='icon sort-icon is-small']",
    locateStrategy: "xpath",
  });
});

When(/^user clicks on Created By sort ascending$/, async function () {
  await importPage.click({
    selector: "//th[9]//span[@class='icon sort-icon is-small is-desc']",
    locateStrategy: "xpath",
  });
});

Then(
  /^user can see "([^"]*)" Created By in first line$/,
  async function (args1) {
    await importPage.assert.containsText(
      {
        selector: `//tr[1]//td[@data-label='Created By']`,
        locateStrategy: "xpath",
      },
      args1
    );
  }
);

When(/^user uploads Ontology "([^"]*)" file$/, async function (args1) {
  await importPage.setValue(
    'input[type="file"]',
    path.resolve(ontologyFolder, args1)
  );
});

When(
  /^user uploads Experiments & Observations "([^"]*)" file$/,
  async function (args1) {
    await importPage.setValue(
      'input[type="file"]',
      path.resolve(experimentsFolder, args1)
    );
  }
);

Then(/^user can see "([^"]*)" preview table$/, async function (args1) {
  await importPage.assert.visible("#import-experiment div.b-table");
});

Then(/^user can not see "([^"]*)" preview table$/, async function (args1) {
  await importPage.assert.not.elementPresent("#import-experiment div.b-table");
});

When(
  /^user selects 'Show details' button of "([^"]*)" on Ontology Import page$/,
  async function (args1) {
    await importPage.click({
      selector: `//td[@name='name' and normalize-space(.)='${args1}']/following-sibling::td/a[@data-testid='showDetails']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can not see trait editability status progress bar on Ontology Import page$/,
  async function () {
    await importPage.assert.not.elementPresent(
      ".is-full-length.trait-detail .progress-bar"
    );
  }
);

Then(
  /^user can see "([^"]*)" in row "([^"]*)" as "([^"]*)" column on Experiment and Observation Import page$/,
  async function (args1, args2, args3) {
    await importPage.assert.containsText(
      {
        selector: `//tbody/tr[${args2}]//td[@data-label='${args3}']`,
        locateStrategy: "xpath",
      },
      args1
    );
  }
);

Then(/^user can see "([^"]*)" in preview table$/, async function (args1) {
  args1 = args1.replace("@TODAY", helpers.getToday());
  await importPage.assert.visible(
    {
      selector: `//p[text()='${args1}']`,
      locateStrategy: "xpath",
    },
    args1
  );
});

Then(/^user can see "([^"]*)" tab in Import Data page$/, async function(args1) {
  switch (args1) {
    case "Genotypic Data":
      await importPage.assert.visible("@genotypicDataTab");
      break;
    default:
      console.log("Unable to find " + args1);
      break;
  }
	
});
