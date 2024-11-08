module.exports = {
  elements: {
    listNameField: { selector: "#List-Name" },
    listDescriptionField: { selector: "#List-Description" },
    genotypicDataTab: {
      selector: "//li//a[normalize-space()='Genotypic Data']",
      locateStrategy: "xpath",
    },
    projectNameField:{selector:"#Project-Name"}
  },
};
