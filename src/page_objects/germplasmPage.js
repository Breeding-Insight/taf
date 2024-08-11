module.exports = {
  elements: {
    header: {
      selector: "//h1[normalize-space()='Germplasm']",
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
    germplasmTable: {
      selector: "#germplasmTable",
      elements: {
        totalRows: {
          selector: "./table//tr",
          locateStrategy: "xpath",
        },
        showDetailsLinks: {
          selector: "//table//a[normalize-space()='Show Details']",
          locateStrategy: "xpath",
        },
        GIDSort:{
          selector: "//span[normalize-space()='GID']/span",
          locateStrategy: "xpath"
        }
      },
    },
    listsTable: {
      selector: "#germplasmListTableLabel",
    },
    germplasmDetails: {
      selector: "//div[@class='germplasm']",
      locateStrategy: "xpath",
      elements: {
        preferredNameText: {
          selector: ".//b[normalize-space(.)='Preferred Name:']/..",
          locateStrategy: "xpath",
        },
        GIDText: {
          selector: ".//b[normalize-space(.)='GID:']/..",
          locateStrategy: "xpath",
        },
        breedingMethodText: {
          selector: ".//b[normalize-space(.)='Breeding Method:']/..",
          locateStrategy: "xpath",
        },
        sourceText: {
          selector: ".//b[normalize-space(.)='Source:']/..",
          locateStrategy: "xpath",
        },
        pedigreeText: {
          selector: ".//b[normalize-space(.)='Pedigree:']/..",
          locateStrategy: "xpath",
        },
        pedigreeGIDText: {
          selector: ".//b[normalize-space(.)='Pedigree GID(s):']/..",
          locateStrategy: "xpath",
        },
        synonymsText: {
          selector: ".//b[normalize-space(.)='Synonyms:']/..",
          locateStrategy: "xpath",
        },
        externalUIDText: {
          selector: ".//b[normalize-space(.)='External UID:']/..",
          locateStrategy: "xpath",
        },
        userText: {
          selector: ".//b[normalize-space(.)='User:']/..",
          locateStrategy: "xpath",
        },
        creationDateText: {
          selector: ".//b[normalize-space(.)='Creation Date:']/..",
          locateStrategy: "xpath",
        },
        imagesLink: {
          selector: ".//nav//li/a[normalize-space()='Images']",
          locateStrategy: "xpath",
        },
        pedigreesLink: {
          selector: ".//nav//li/a[normalize-space()='Pedigrees']",
          locateStrategy: "xpath",
        },
        attributesLink: {
          selector: ".//nav//li/a[normalize-space()='Attributes']",
          locateStrategy: "xpath",
        },
      },
    },
    germplasmListsDetails: {
      selector: "//div[@class='germplasm']",
      locateStrategy: "xpath",
      elements: {
        descriptionText: {
          selector: ".//b[normalize-space(.)='Description:']/../following::div",
          locateStrategy: "xpath",
          timeout: 10000,
        },
        userText: {
          selector: ".//b[normalize-space(.)='User:']/../following::div",
          locateStrategy: "xpath",
          timeout: 10000,
        },
        importDateText: {
          selector: ".//b[normalize-space(.)='Import Date:']/../following::div",
          locateStrategy: "xpath",
          timeout: 10000,
        },
        totalEntriesText: {
          selector:
            ".//b[normalize-space(.)='Total Entries:']/../following::div",
          locateStrategy: "xpath",
          timeout: 10000,
        },
      },
    },
  },
};
