module.exports = {
  elements: {
    newTraitButton: {
      selector: "//button[@data-testid='newDataForm']",
      locateStrategy: "xpath",
    },
  },
  sections: {
    allTraitsForm: {
      selector: "#traitTableLabel",
      elements: {
        traitNameField: "#Trait-name",
        isCollectedOnField: "div.control.is-clearfix input",
        byMethodSelect: "#Method",
        byScaleSelect: "#Scale",
        descriptionCollectionMethodField:
          "div.control input[placeholder='Method Description']",
        abbreviationField: "div.control input[placeholder='Abbreviation(s)']",
        synonymsField: "#Synonyms",
        saveButton: {
          selector: "//span[normalize-space(.)='Save']",
          locateStrategy: "xpath",
        },
        cancelButton: {
          selector: "//button[normalize-space(.)='Cancel']",
          locateStrategy: "xpath",
        },
        firstScaleField: {
          selector: "div.column.is-four-fifths input",
          index: 0,
        },
        secondScaleField: {
          selector: "div.column.is-four-fifths input",
          index: 1,
        },
        thirdScaleField: {
          selector: "div.column.is-four-fifths input",
          index: 2,
        },
        fourthScaleField: {
          selector: "div.column.is-four-fifths input",
          index: 3,
        },
        firstOrdinalField: {
          selector: "div.column.is-2 div.field-body input",
          index: 0,
        },
        secondOrdinalField: {
          selector: "div.column.is-2 div.field-body input",
          index: 1,
        },
        thirdOrdinalField: {
          selector: "div.column.is-2 div.field-body input",
          index: 2,
        },
      },
    },
  },
};
