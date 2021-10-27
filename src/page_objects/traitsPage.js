module.exports = {
  elements: {
    newTermButton: {
      selector:
        "//button[starts-with(normalize-space(.),'New Term') and not(contains(@style,'display: none'))]",
      locateStrategy: "xpath",
    },
  },
  sections: {
    allTraitsForm: {
      selector: "#traitTableLabel",
      elements: {
        nameField: "#Name",
        nameErrorText:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(5) > div > div.field-body > div > div > span:nth-child(3)",
        fullNameField: "#Full-name",
        descriptionField: "#Description",
        desriptionErrorText:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(9) > div > div.field-body > div > div > span",
        tagsField:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(13) > div > div.field-body > div > div > div > div > div > div.control.is-clearfix > input",
        entityField:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(17) > div > div.field-body > div > div > div > div.control.is-clearfix > input",
        entityErrorText:
          "#traitTableLabel > form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(17) > div > div.field-body > div > div > span:nth-child(3)",
        attributeField:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(19) > div > div.field-body > div > div > div > div.control.is-clearfix > input",
        attributeErrorText:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(19) > div > div.field-body > div > div > span:nth-child(3)",
        methodDescription:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(23) > div > div.field-body > div > div > div > div.control.is-clearfix > input",
        methodDescriptionErrorText:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(23) > div > div.field-body > div > div > span:nth-child(3)",
        methodClass:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(25) > div > div.field-body > div > div > div > select",
        methodClassErrorText:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(25) > div > div.field-body > div > div > span",
        scaleClass:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(29) > div > div.field-body > div > div > div > select",
        scaleClassErrorText:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(29) > div > div.field-body > div > div > span",
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
          selector: ".//span[normalize-space(.)='Save']",
          locateStrategy: "xpath",
        },
        cancelButton: {
          selector:
            ".//button[@data-testid='cancel'][normalize-space(.)='Cancel']",
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
