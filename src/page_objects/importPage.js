module.exports = {
  elements: {
    listNameField: { selector: "#List-Name" },
    listDescriptionField: { selector: "#List-Description" },
    previewArticle: { selector: "article[class='message is-success'] p" },
    genotypicDataTab: {
      selector: "//li//a[normalize-space()='Genotypic Data']",
      locateStrategy: "xpath",
    },
  },
};
