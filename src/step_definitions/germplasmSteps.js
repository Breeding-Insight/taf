const { client } = require("nightwatch-api");
const { Then, When, AfterAll } = require("@cucumber/cucumber");
const { getToday } = require("./helpers");
const helpers = require("./helpers");
const germplasmPage = client.page.germplasmPage();

Then(
  /^user can see All Germplasm records exist on Germplasm page$/,
  async function () {
    await germplasmPage.section.germplasmTable.assert.visible("@header");
  }
);

When(
  /^user can see All Germplasm records have Show Details link on Germplasm page$/,
  async function () {
    let count;
    await germplasmPage.pause(10000);
    await germplasmPage.findElements("tbody tr", (result) => {
      count = result.value.length;
    });
    await germplasmPage.section.germplasmTable.expect
      .elements("@showDetailsLinks")
      .count.equal(count);
  }
);

When(
  /^user selects "([^"]*)" of row "([^"]*)" of Germplasm page$/,
  async function (link, rowIndex) {
    await germplasmPage.section.germplasmTable.click({
      selector: `.//tr[${rowIndex}]//a[normalize-space()='${link}']`,
      locateStrategy: "xpath",
    });
  }
);

Then(
  /^user can see details on Germplasm details page$/,
  async function (table) {
    for (column of table.raw()[0]) {
      for (i = 0; i < table.hashes().length; i++) {
        switch (column) {
          case "Preferred Name":
            await germplasmPage.section.germplasmDetails.assert.containsText(
              "@preferredNameText",
              table.hashes()[i][column]
            );
            break;
          case "GID":
            await germplasmPage.section.germplasmDetails.assert.containsText(
              "@GIDText",
              table.hashes()[i][column]
            );
            break;
          case "Breeding Method":
            await germplasmPage.section.germplasmDetails.assert.containsText(
              "@breedingMethodText",
              table.hashes()[i][column]
            );
            break;
          case "Source":
            await germplasmPage.section.germplasmDetails.assert.containsText(
              "@sourceText",
              table.hashes()[i][column]
            );
            break;
          case "Pedigree":
            await germplasmPage.section.germplasmDetails.assert.containsText(
              "@pedigreeText",
              table.hashes()[i][column]
            );
            break;
          case "Pedigree GID":
            await germplasmPage.section.germplasmDetails.assert.containsText(
              "@pedigreeGIDText",
              table.hashes()[i][column]
            );
            break;
          case "Synonyms":
            await germplasmPage.section.germplasmDetails.assert.containsText(
              "@synonymsText",
              table.hashes()[i][column]
            );
            break;
          case "External UID":
            await germplasmPage.section.germplasmDetails.assert.containsText(
              "@externalUIDText",
              table.hashes()[i][column]
            );
            break;
          case "User":
            await germplasmPage.section.germplasmDetails.assert.containsText(
              "@userText",
              table.hashes()[i][column]
            );
            break;
          case "Creation Date":
            await germplasmPage.section.germplasmDetails.assert.containsText(
              "@creationDateText",
              table.hashes()[i][column]
            );
            break;
          default:
            throw new Error(`Unexpected ${column} name.`);
        }
      }
    }
  }
);

Then(
  /^user can see "([^"]*)" tab of Germplasm details page$/,
  async function (args1) {
    switch (args1) {
      case "Images":
        await germplasmPage.section.germplasmDetails.assert.visible(
          "@imagesLink"
        );
        break;
      case "Pedigrees":
        await germplasmPage.section.germplasmDetails.assert.visible(
          "@pedigreesLink"
        );
        break;
      case "Attributes":
        await germplasmPage.section.germplasmDetails.assert.visible(
          "@attributesLink"
        );
        break;
      default:
        throw new Error(`Unexpected ${column} name.`);
    }
  }
);

Then(/^user can see Female Parent GID value is a link$/, async function () {
  let countOfTD;
  await germplasmPage.findElements(
    {
      selector: "//td[@data-label='Female Parent GID'][string-length() > 2]",
      locateStrategy: "xpath",
    },
    async function ({ value }) {
      countOfTD = value.length;
    }
  );

  let countOfTDLinks;
  await germplasmPage.findElements(
    {
      selector: "//td[@data-label='Female Parent GID'][string-length() > 2]//a",
      locateStrategy: "xpath",
    },
    async function ({ value }) {
      countOfTDLinks = value.length;
    }
  );

  await germplasmPage.assert.strictEqual(countOfTD, countOfTDLinks);
});

Then(/^user can see Male Parent GID value is a link$/, async function () {
  let countOfTD;
  await germplasmPage.findElements(
    {
      selector: "//td[@data-label='Male Parent GID'][string-length() > 2]",
      locateStrategy: "xpath",
    },
    async function ({ value }) {
      countOfTD = value.length;
    }
  );

  let countOfTDLinks;
  await germplasmPage.findElements(
    {
      selector: "//td[@data-label='Male Parent GID'][string-length() > 2]//a",
      locateStrategy: "xpath",
    },
    async function ({ value }) {
      countOfTDLinks = value.length;
    }
  );

  await germplasmPage.assert.strictEqual(countOfTD, countOfTDLinks);
});

When(/^user selects "([^"]*)" row Female Parent GID$/, async function (args1) {
  let control = {
    selector: `//tbody//tr[${args1}]//td[@data-label='Female Parent GID']//a`,
    locateStrategy: "xpath",
  };
  await client.execute("window.scrollTo(0,0);");
  await germplasmPage.moveToElement(control, 1, 1);
  await germplasmPage.click(control);
});

Then(/^user can see "([^"]*)" tab$/, async function (args1) {
  switch (args1) {
    case "All Germplasm":
      await germplasmPage.assert.visible("@allGermplasmTab");
      break;
    case "Germplasm Lists":
      await germplasmPage.assert.visible("@germplasmListsTab");
    default:
      break;
  }
});

When(/^user selects "([^"]*)" tab on Gerplasm page$/, async function (args1) {
  switch (args1) {
    case "All Germplasm":
      await germplasmPage.click("@allGermplasmTab");
      break;
    case "Germplasm Lists":
      await germplasmPage.click("@germplasmListsTab");
    default:
      break;
  }
});

Then(
  /^user can see "([^"]*)" in row "([^"]*)" as "([^"]*)" column on Germplasm Lists$/,
  async function (args1, args2, args3) {
    await germplasmPage.assert.containsText(
      {
        selector: `//tbody/tr[${args2}]/td[@data-label='${args3}']`,
        locateStrategy: "xpath",
      },
      args1
    );
  }
);

When(
  /^user sets "([^"]*)" in "([^"]*)" search fields$/,
  async function (args1, args2) {
    args1 = args1.replace("@TODAY", helpers.getToday());
    switch (args2) {
      case "GID":
        await germplasmPage.setValue(
          { selector: "//th[1]//div/input", locateStrategy: "xpath" },
          args1
        );
        break;
      case "Name":
        await germplasmPage.setValue(
          { selector: "//th[2]//div/input", locateStrategy: "xpath" },
          args1
        );
        break;
      case "Breeding Method":
        await germplasmPage.setValue(
          { selector: "//th[3]//div/input", locateStrategy: "xpath" },
          args1
        );
        break;
      case "Source":
        await germplasmPage.setValue(
          { selector: "//th[4]//div/input", locateStrategy: "xpath" },
          args1
        );
        break;
      case "Female Parent GID":
        await germplasmPage.setValue(
          { selector: "//th[6]//div/input", locateStrategy: "xpath" },
          args1
        );
        break;
      case "Male Parent GID":
        await germplasmPage.setValue(
          { selector: "//th[7]//div/input", locateStrategy: "xpath" },
          args1
        );
        break;
      case "Created Date":
        await germplasmPage.setValue(
          { selector: "//th[8]//div/input", locateStrategy: "xpath" },
          args1
        );
        break;
      case "Created By":
        await germplasmPage.setValue(
          { selector: "//th[9]//div/input", locateStrategy: "xpath" },
          args1
        );
        break;
      default:
        break;
    }
  }
);

Then(
  /^user can see "([^"]*)" in row "([^"]*)" as "([^"]*)" column on All Germplasm$/,
  async function (args1, args2, args3) {
    args1 = args1.replace("@TODAY", helpers.getToday());
    await germplasmPage.assert.containsText(
      {
        selector: `//tbody/tr[${args2}]//td[@data-label='${args3}']`,
        locateStrategy: "xpath",
      },
      args1
    );
  }
);

Then(/^user can see "([^"]*)" in All Germplasm$/, async function (args1) {
  await germplasmPage.assert.containsText(
    { selector: "//tr[@class='is-empty']/td/p", locateStrategy: "xpath" },
    args1
  );
});
