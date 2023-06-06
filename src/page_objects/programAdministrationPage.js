module.exports = {
  elements: {
    header: {
      selector: "//h1[normalize-space()='Program Administration']",
      locateStrategy: "xpath",
    },
    usersTab: {
      selector: "//li/a[normalize-space()='Users']",
      locateStrategy: "xpath",
    },
    locationsTab: {
      selector: "//li/a[normalize-space()='Locations']",
      locateStrategy: "xpath",
    },
    breedingMethodsTab: {
      selector: "//li/a[normalize-space()='Breeding Methods']",
      locateStrategy: "xpath",
    },
    configurationTab: {
      selector: "//li/a[normalize-space()='Configuration']",
      locateStrategy: "xpath",
    },
  },
  sections: {
    programUsers: {
      selector: "#programUserTableLabel",
    },
    programLocations: {
      selector: "#locationTableLabel",
    },
    breedingMethods: {
      selector: "#breeding-methods",
      elements: {
        showAllButton: {
          selector: "//nav//button[normalize-space(.)='Show All']",
          locateStrategy: "xpath",
        },
        createBreedingMethodButton: {
          selector: "//button[contains(text(),'Create Breeding Method')]",
          locateStrategy: "xpath",
        },
        inUseMessage: "#method-in-use-message",
      },
    },
    programConfiguration: {
      selector: "#program-configuration",
    },
    newBreedingMethodForm: {
      selector: "//form[@class='new-form']",
      locateStrategy: "xpath",
      elements: {
        nameField: "#Name",
        abbreviationField: "#Abbreviation",
        descriptionField: "#Description",
        categorySelect: "#Category",
        geneticDiversitySelect: "#Genetic-Diversity",
        saveButton: {
          selector: ".//span[normalize-space(.)='Save']",
          locateStrategy: "xpath",
        },
      },
    },
  },
};
