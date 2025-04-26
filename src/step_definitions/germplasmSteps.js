const { Then, When, AfterAll } = require("@cucumber/cucumber");
const { getToday } = require("./helpers");
const helpers = require("./helpers");
const germplasmList = [];
const assert = require("assert");

Then(
  /^user can see All Germplasm records exist on Germplasm page$/,
  async function () {
    await this.browser.page.germplasmPage().assert.visible("@header");
  }
);

When(
  /^user can see All Germplasm records have Show Details link on Germplasm page$/,
  async function () {
    let count;
    await this.browser.page.germplasmPage().pause(10000);
    await this.browser.page
      .germplasmPage()
      .findElements("tbody tr", (result) => {
        count = result.value.length;
      });
    await this.browser.page
      .germplasmPage()
      .section.germplasmTable.expect.elements("@showDetailsLinks")
      .count.equal(count);
  }
);

When(
  /^user selects "([^"]*)" of row "([^"]*)" of Germplasm page$/,
  async function (link, rowIndex) {
    await this.browser.page.germplasmPage().section.germplasmTable.click({
      selector: `.//tr[${rowIndex}]//a[normalize-space()='${link}']`,
      locateStrategy: "xpath",
    });
  }
);

When(
  /^user selects "([^"]*)" of row "([^"]*)" of Germplasm Lists page$/,
  async function (link, rowIndex) {
    await this.browser.page.germplasmPage().section.listsTable.click({
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
            await this.browser.page
              .germplasmPage()
              .section.germplasmDetails.assert.textContains(
                "@preferredNameText",
                table.hashes()[i][column]
              );
            break;
          case "GID":
            await this.browser.page
              .germplasmPage()
              .section.germplasmDetails.assert.textContains(
                "@GIDText",
                table.hashes()[i][column]
              );
            break;
          case "Breeding Method":
            await this.browser.page
              .germplasmPage()
              .section.germplasmDetails.assert.textContains(
                "@breedingMethodText",
                table.hashes()[i][column]
              );
            break;
          case "Source":
            await this.browser.page
              .germplasmPage()
              .section.germplasmDetails.assert.textContains(
                "@sourceText",
                table.hashes()[i][column]
              );
            break;
          case "Pedigree":
            await this.browser.page
              .germplasmPage()
              .section.germplasmDetails.assert.textContains(
                "@pedigreeText",
                table.hashes()[i][column]
              );
            break;
          case "Pedigree GID":
            await this.browser.page
              .germplasmPage()
              .section.germplasmDetails.assert.textContains(
                "@pedigreeGIDText",
                table.hashes()[i][column]
              );
            break;
          case "Synonyms":
            await this.browser.page
              .germplasmPage()
              .section.germplasmDetails.assert.textContains(
                "@synonymsText",
                table.hashes()[i][column]
              );
            break;
          case "External UID":
            await this.browser.page
              .germplasmPage()
              .section.germplasmDetails.assert.textContains(
                "@externalUIDText",
                table.hashes()[i][column]
              );
            break;
          case "User":
            await this.browser.page
              .germplasmPage()
              .section.germplasmDetails.assert.textContains(
                "@userText",
                table.hashes()[i][column]
              );
            break;
          case "Creation Date":
            await this.browser.page
              .germplasmPage()
              .section.germplasmDetails.assert.textContains(
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
        await this.browser.page
          .germplasmPage()
          .section.germplasmDetails.assert.visible("@imagesLink");
        break;
      case "Pedigrees":
        await this.browser.page
          .germplasmPage()
          .section.germplasmDetails.assert.visible("@pedigreesLink");
        break;
      case "Attributes":
        await this.browser.page
          .germplasmPage()
          .section.germplasmDetails.assert.visible("@attributesLink");
        break;
      default:
        throw new Error(`Unexpected ${column} name.`);
    }
  }
);

Then(
  /^user can see details on Germplasm Lists details page$/,
  async function (table) {
    for (column of table.raw()[0]) {
      for (i = 0; i < table.hashes().length; i++) {
        switch (column) {
          case "Description":
            await this.browser.page
              .germplasmPage()
              .section.germplasmListsDetails.assert.textContains(
                "@descriptionText",
                table.hashes()[i][column]
              );
            break;
          case "User":
            await this.browser.page
              .germplasmPage()
              .section.germplasmListsDetails.assert.textContains(
                "@userText",
                table.hashes()[i][column]
              );
            break;
          case "Import Date":
            await this.browser.page
              .germplasmPage()
              .section.germplasmListsDetails.assert.textContains(
                "@importDateText",
                table.hashes()[i][column].replace("@TODAY", helpers.getToday())
              );
            break;
          case "Total Entries":
            await this.browser.page
              .germplasmPage()
              .section.germplasmListsDetails.assert.textContains(
                "@totalEntriesText",
                table.hashes()[i][column]
              );
            break;
          default:
            throw new Error(`Unexpected ${label} name.`);
        }
      }
    }
  }
);

Then(/^user can see Female Parent GID value is a link$/, async function () {
  let countOfTD;
  await this.browser.page.germplasmPage().findElements(
    {
      selector: "//td[@data-label='Female Parent GID'][string-length() > 2]",
      locateStrategy: "xpath",
    },
    async function ({ value }) {
      countOfTD = value.length;
    }
  );

  let countOfTDLinks;
  await this.browser.page.germplasmPage().findElements(
    {
      selector: "//td[@data-label='Female Parent GID'][string-length() > 2]//a",
      locateStrategy: "xpath",
    },
    async function ({ value }) {
      countOfTDLinks = value.length;
    }
  );

  assert.strictEqual(countOfTD, countOfTDLinks);
});

Then(/^user can see Male Parent GID value is a link$/, async function () {
  let countOfTD;
  await this.browser.page.germplasmPage().findElements(
    {
      selector: "//td[@data-label='Male Parent GID'][string-length() > 2]",
      locateStrategy: "xpath",
    },
    async function ({ value }) {
      countOfTD = value.length;
    }
  );

  let countOfTDLinks;
  await this.browser.page.germplasmPage().findElements(
    {
      selector: "//td[@data-label='Male Parent GID'][string-length() > 2]//a",
      locateStrategy: "xpath",
    },
    async function ({ value }) {
      countOfTDLinks = value.length;
    }
  );

  assert.strictEqual(countOfTD, countOfTDLinks);
  
});

When(/^user selects "([^"]*)" row Female Parent GID$/, async function (args1) {
  let control = {
    selector: `//tr/td[@data-label='Female Parent GID'][normalize-space()='${args1}']/a`,
    index: 0,
    locateStrategy: "xpath",
  };
  await this.browser.execute("window.scrollTo(0,0);");
  await this.browser.page.germplasmPage().moveToElement(control, 1, 1);
  await this.browser.page.germplasmPage().click(control);
});

Then(/^user can see "([^"]*)" tab$/, async function (args1) {
  switch (args1) {
    case "Germplasm":
      await this.browser.page
        .germplasmPage()
        .assert.visible("@allGermplasmTab");
      break;
    case "Germplasm Lists":
      await this.browser.page
        .germplasmPage()
        .assert.visible("@germplasmListsTab");
    default:
      break;
  }
});

When(/^user selects "([^"]*)" tab on Gerplasm page$/, async function (args1) {
  switch (args1) {
    case "All Germplasm":
      await this.browser.page.germplasmPage().click("@allGermplasmTab");
      break;
    case "Lists":
      await this.browser.page.germplasmPage().click("@germplasmListsTab");
    default:
      break;
  }
});

Then(
  /^user can see "([^"]*)" in row "([^"]*)" as "([^"]*)" column on Germplasm Lists$/,
  async function (args1, args2, args3) {
    await this.browser.page.germplasmPage().assert.textContains(
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
        await this.browser.page
          .germplasmPage()
          .setValue(
            { selector: "//th[1]//div/input", locateStrategy: "xpath" },
            args1
          );
        break;
      case "Germplasm Name":
        await this.browser.page
          .germplasmPage()
          .setValue(
            { selector: "//th[2]//div/input", locateStrategy: "xpath" },
            args1
          );
        break;
      case "Breeding Method":
        await this.browser.page
          .germplasmPage()
          .setValue(
            { selector: "//th[3]//div/input", locateStrategy: "xpath" },
            args1
          );
        break;
      case "Source":
        await this.browser.page
          .germplasmPage()
          .setValue(
            { selector: "//th[4]//div/input", locateStrategy: "xpath" },
            args1
          );
        break;
      case "Female Parent GID":
        await this.browser.page
          .germplasmPage()
          .setValue(
            { selector: "//th[6]//div/input", locateStrategy: "xpath" },
            args1
          );
        break;
      case "Male Parent GID":
        await this.browser.page
          .germplasmPage()
          .setValue(
            { selector: "//th[7]//div/input", locateStrategy: "xpath" },
            args1
          );
        break;
      case "Created Date":
        await this.browser.page
          .germplasmPage()
          .setValue(
            { selector: "//th[8]//div/input", locateStrategy: "xpath" },
            args1
          );
        break;
      case "Created By":
        await this.browser.page
          .germplasmPage()
          .setValue(
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
    await this.browser.page.germplasmPage().assert.textContains(
      {
        selector: `//tbody/tr[${args2}]//td[@data-label='${args3}']`,
        locateStrategy: "xpath",
      },
      args1
    );
  }
);

Then(/^user can see "([^"]*)" in All Germplasm$/, async function (args1) {
  await this.browser.page
    .germplasmPage()
    .assert.textContains(
      { selector: "//tr[@class='is-empty']/td/p", locateStrategy: "xpath" },
      args1
    );
});

Then(/^user can see Germplasm table on Germplasm page$/, async function () {
  await this.browser.page
    .germplasmPage()
    .expect.section("@germplasmTable").to.be.visible;
});

Then(
  /^user can see Germplasm Lists table on Germplasm page$/,
  async function () {
    await this.browser.page.germplasmPage().expect.section("@listsTable").to.be
      .visible;
  }
);

Then(
  /^user can not see loading wheel message on Germplasm page$/,
  async function () {
    await this.browser.page
      .germplasmPage()
      .assert.not.elementPresent(
        "div.loading-overlay.is-active div.loading-icon"
      );
  }
);

Then(/^user can see "([^"]*)" on Germplasm page$/, async function (args1) {
  await this.browser.page
    .germplasmPage()
    .assert.textContains("#germplasmTable p", args1);
});

When(
  /^user gets row "([^"]*)" from column "([^"]*)" on Germplasm lists page$/,
  async function (args1, args2) {
    // let val;
    // await this.browser.page
    //   .germplasmPage()
    //   .section.germplasmListsDetails.getText(
    //     {
    //       selector: `//tr[${args1}]/td[@data-label='${args2}']`,
    //       locateStrategy: "xpath",
    //     },
    //     ({ value }) => {
    //       val = String(value).trim();
    //     }
    //   );
    germplasmList[args2] = await helpers.getText(browser.page
      .germplasmPage()
      .section.germplasmListsDetails, {
        selector: `//tr[${args1}]/td[@data-label='${args2}']`,
        locateStrategy: "xpath",
      });
  }
);

Then(
  /^user can see "([^"]*)" as "([^"]*)" of Germplasm Lists Details page$/,
  async function (args1, args2) {
    let val;

    await this.browser.page.germplasmPage().pause(5000);

    switch (args2) {
      case "Description":
        if (args1.includes("*")) {
          args1 = germplasmList["Description"];
        }
        val = await helpers.getText(
          browser.page.germplasmPage().section.germplasmListsDetails,
          "@descriptionText"
        );
        await this.browser.assert.equal(val, args1);
        break;
      case "User":
        val = await helpers.getText(
          browser.page.germplasmPage().section.germplasmListsDetails,
          "@userText"
        );
        await browser.assert.equal(val, args1);
        break;
      case "Import Date":
        if (args1.includes("@TODAY")) args1 = helpers.getToday();
        val = await helpers.getText(
          browser.page.germplasmPage().section.germplasmListsDetails,
          "@importDateText"
        );
        await this.browser.assert.equal(val, args1);
        break;
      case "Total Entries":
        val = await helpers.getText(
          browser.page.germplasmPage().section.germplasmListsDetails,
          "@totalEntriesText"
        );
        await this.browser.assert.equal(val, args1);
        break;
      default:
        throw new Error(`Unexpected ${args2} name.`);
    }
  }
);

When(
  "user selects Show Details of GID {string} of Germplasm page",
  async function (gid) {
    await this.browser.page.germplasmPage().section.germplasmTable.click({
      selector: `.//tr//td[1]/a[normalize-space()='${gid}']/../..//a[normalize-space()='Show Details']`,
      locateStrategy: "xpath",
    });
  }
);

Then("user can see GID as descending sort", async function () {
  await this.browser.page
    .germplasmPage()
    .section.germplasmTable.assert.attributeEquals(
      "@GIDSort",
      "class",
      "icon sort-icon is-small is-desc"
    );
});

Then("user can see {string} on Download prompt", async function (s) {
  await this.browser.page
    .germplasmPage()
    .assert.visible({
      selector: `//label/span[contains(text(),'${s}')]`,
      locateStrategy: "xpath",
    });
});
