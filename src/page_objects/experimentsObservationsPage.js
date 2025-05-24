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
    commands: [
    {
      isCollaboratorVisible: async function (collaborator) {
        this.assert.visible({selector:`//li[contains((.), '${collaborator}')]`, locateStrategy:"xpath"});
      },
      isDeleteNotVisible: async function (collaborator) {
        this.assert.not.visible({selector:`//li[contains((.), '${collaborator}')]//button`, locateStrategy:"xpath"});
      },
      isDeleteVisible: async function (collaborator) {
        this.assert.visible({selector:`//li[contains((.), '${collaborator}')]//button`, locateStrategy:"xpath"});
      },
      deleteCollaborator: async function (collaborator) {
        this.api.click({selector:`//li[contains((.), '${collaborator}')]//button`, locateStrategy:"xpath"});
      }
    }
  ],
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