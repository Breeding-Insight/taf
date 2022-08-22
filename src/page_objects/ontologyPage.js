module.exports = {
  elements: {
    newTermButton: {
      selector:
        "//button[starts-with(normalize-space(.),'New Term') and not(contains(@style,'display: none'))]",
      locateStrategy: "xpath",
    },
    beforeImportMessage: {
      selector: "//main//div[@class='import-template mb-5']/article//strong",
      locateStrategy: "xpath",
    },
    beforeImportMessageDetails: {
      selector: "//main//div[@class='import-template mb-5']/article//div",
      locateStrategy: "xpath",
    },
    downloadImportTemplateButton: "#importtemplatemessagebox-download-template",
    confirmOntologyHeader: {
      selector: "//div[@id='import-ontology']//h1",
      locateStrategy: "xpath",
    },
  },
  sections: {
    allTraitsForm: {
      selector: "#ontologyTableLabel",
      elements: {
        nameField: "#Name",
        errorText: {
          selector: "//span[@class='form-error has-text-danger']",
          locateStrategy: "xpath",
        },
        fullNameField: "#Full-name",
        entitySelectField: {
          selector: "//*[@id='entity']",
          locateStrategy: "xpath",
        },
        synonymsText: {
          selector: "//form//label[@for='Synonyms']/../following-sibling::div",
          locateStrategy: "xpath",
        },
        descriptionField: "#Description",
        desriptionErrorText:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(9) > div > div.field-body > div > div > span",
        tagsField:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(13) > div > div.field-body > div > div > div > div > div > div.control.is-clearfix > input",
        entityField:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(17) > div > div.field-body > div > div > div > div.control.is-clearfix > input",
        entityErrorText:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(17) > div > div.field-body > div > div > span:nth-child(3)",
        traitText: {
          selector: ".//div[@class='column is-10 mt-4']",
          index: 0,
          locateStrategy: "xpath",
        },
        attributeField:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(19) > div > div.field-body > div > div > div > div.control.is-clearfix > input",
        attributeErrorText:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(19) > div > div.field-body > div > div > span:nth-child(3)",
        methodDescription:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(23) > div > div.field-body > div > div > div > div.control.is-clearfix > input",
        methodDescriptionErrorText: {
          selector: "span.form-error.has-text-danger",
          index: 3,
        },
        methodClass:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(25) > div > div.field-body > div > div > div > select",
        methodClassErrorText:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(25) > div > div.field-body > div > div > span",
        methodText: {
          selector: "//div[@class='column is-10 mt-4']",
          index: 1,
          locateStrategy: "xpath",
        },
        scaleClass:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(29) > div > div.field-body > div > div > div > select",
        scaleClassErrorText:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(29) > div > div.field-body > div > div > span",
        scaleClassNoOptionsText:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(31) > p",
        formulaField: "#Formula",
        formulaErrorText:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div:nth-child(31) > div > div.field-body > div > div > span",
        unitField: "#Unit",
        unitErrorText:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div.column.is-full > div > div.column.new-term.is-10 > div > div.field-body > div > div > span",
        // minValidValueField: "#Minimum-Valid Value",
        unitofTimeField:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div.column.is-full > div > div.column.new-term.is-10 > div > div.field-body > div > div > div > div.control.is-clearfix > input",
        minValidValueField: {
          selector: "#Minimum-Valid-Value",
        },
        minValidValueErrorText:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div.column.is-full > div > div:nth-child(4) > div > div.field-body > div > div > span:nth-child(3)",
        // maxValidValueField: "#Maximum-Valid Value",
        maxValidValueField: {
          selector: "#Maximum-Valid-Value",
        },
        maxValidValueErrorText:
          "form > div.columns.is-multiline.is-gapless.is-vcentered > div.column.is-full > div > div:nth-child(6) > div > div.field-body > div > div > span:nth-child(3)",
        decimalPlacesField: "#Decimal-Places",
        byMethodSelect: "#Method",
        byScaleSelect: "#Scale-Class",
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
        addItemButton: "button[data-testid='new']",
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
        sixthScaleField: {
          selector: "div.column.is-four-fifths input",
          index: 5,
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
        fourthScaleDeleteButton: {
          selector: "div.column.is-one-fifth button.delete",
          index: 3,
        },
        fifthScaleDeleteButton: {
          selector: "div.column.is-one-fifth button.delete",
          index: 4,
        },
        sixthScaleDeleteButton: {
          selector: "div.column.is-one-fifth button.delete",
          index: 5,
        },
        firstScaleErrorText: {
          selector: "div.column.is-four-fifths span",
          index: 0,
        },
        secondScaleErrorText: {
          selector: "div.column.is-four-fifths span",
          index: 1,
        },
        thirdScaleErrorText: {
          selector: "div.column.is-four-fifths span",
          index: 2,
        },
        fourthScaleErrorText: {
          selector: "div.column.is-four-fifths span",
          index: 3,
        },
        fifthScaleErrorText: {
          selector: "div.column.is-four-fifths span",
          index: 4,
        },
        ordinalFields: { selector: "div.column.is-2 div.field-body input" },
        firstOrdinalField: {
          selector:
            "div:nth-child(31) div:nth-child(2) div.column.is-2  div.field-body input",
        },
        secondOrdinalField: {
          selector:
            "div:nth-child(31) div:nth-child(3) div.column.is-2  div.field-body input",
        },
        thirdOrdinalField: {
          selector:
            "div:nth-child(31) div:nth-child(4) div.column.is-2  div.field-body input",
        },
        fourthOrdinalField: {
          selector:
            "div:nth-child(31) div:nth-child(5) div.column.is-2  div.field-body input",
        },
        fifthOrdinalField: {
          selector:
            "div:nth-child(31) div:nth-child(6) div.column.is-2  div.field-body input",
        },
        sixthOrdinalField: {
          selector:
            "div:nth-child(31) div:nth-child(7) div.column.is-2  div.field-body input",
        },
        firstCategoryField: {
          selector: ".//input[@placeholder='Category']",
          locateStrategy: "xpath",
          index: 0,
        },
        secondCategoryField: {
          selector: ".//input[@placeholder='Category']",
          locateStrategy: "xpath",
          index: 1,
        },
        thirdCategoryField: {
          selector: ".//input[@placeholder='Category']",
          locateStrategy: "xpath",
          index: 2,
        },
        fourthCategoryField: {
          selector: ".//input[@placeholder='Category']",
          locateStrategy: "xpath",
          index: 3,
        },
        deleteButtonSecondCategoryField: {
          selector:
            ".//div[@class='column is-one-fifth ml-2']//button[@class='delete']",
          locateStrategy: "xpath",
          index: 1,
        },
        deleteButtonThirdCategoryField: {
          selector:
            ".//div[@class='column is-one-fifth ml-2']//button[@class='delete']",
          locateStrategy: "xpath",
          index: 2,
        },
        firstValueField: {
          selector: ".//input[@placeholder='Value']",
          locateStrategy: "xpath",
          index: 0,
        },
        secondValueField: {
          selector: ".//input[@placeholder='Value']",
          locateStrategy: "xpath",
          index: 1,
        },
        thirdValueField: {
          selector: ".//input[@placeholder='Value']",
          locateStrategy: "xpath",
          index: 2,
        },
        fourthValueField: {
          selector: ".//input[@placeholder='Value']",
          locateStrategy: "xpath",
          index: 3,
        },
      },
    },
  },
};