module.exports = {
    elements: {
      header: {
        selector: "//h1[normalize-space()='Experiments & Observations']",
        locateStrategy: "xpath",
      },
      listNameField: { selector: "#List-Name" },
      listDescriptionField: { selector: "#List-Description" },
      allGermplasmTab: {
        selector: "//li/a[normalize-space()='View']",
        locateStrategy: "xpath",
      },
      germplasmListsTab: {
        selector: "//li/a[normalize-space()='Lists']",
        locateStrategy: "xpath",
      },
    },
    sections: {
      table: {
        selector: ".table.is-striped.is-narrow",
        elements: {
          DateCreatedSort:{
            selector: "//span[normalize-space()='Date Created']/span",
            locateStrategy: "xpath"
          }
        },
      },
    }
}