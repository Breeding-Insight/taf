module.exports = {
  elements: {
    newTermButton: {
      selector: "//button[starts-with(normalize-space(.),'New Term') and not(contains(@style,'display: none'))]",
      locateStrategy: "xpath",
    },
  },
  sections: {
    allTraitsForm: {
      selector: "#traitTableLabel",
      elements: {
        nameField:"#Name",
        fullNameField:"#Full-name",
        descriptionField:"#Description",
        synonymsLabel:"//span[normalize-space(.)='Synonyms']",
        //tagsField:"input[placeholder='Start typing to see suggestions']",
        //entityField:"input[placeholder='Start typing to see suggestions']",
        //attributeField:"input[placeholder='Start typing to see suggestions']",
        //methodDescription:
        isCollectedOnField: "div.control.is-clearfix input",
        byMethodSelect: "#Method",
        byScaleSelect: {
          selector: "#Class",
          index: 1,
        },
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
        fifthScaleField: {
          selector: "div.column.is-four-fifths input",
          index: 4,
        },
        firstScaleDeleteButton: {
          selector: "div.column.is-one-fifth button.delete",
          index: 0,
        },
        secondScaleDeleteButton: {
          selector: "div.column.is-one-fifth button.delete",
          index: 1,
        },
        thirdScaleDeleteButton: {
          selector: "div.column.is-one-fifth button.delete",
          index: 2,
        },
        ordinalFields: { selector: "div.column.is-2 div.field-body input" },

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
        fifthOrdinalField: {
          selector: "div.column.is-2 div.field-body input",
          index: 4,
        },
      },
    },
  },
};
