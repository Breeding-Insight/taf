const { client } = require("nightwatch-api");
const { Given, Then, When } = require("@cucumber/cucumber");
const traitsPage = client.page.traitsPage();

When(/^user selects 'New Term' button on ontology list page$/, async () => {
  await traitsPage.waitForElementPresent("@newTermButton");
  await traitsPage.click("@newTermButton");
});

When(
  /^user selects "([^"]*)" in scale dropdown on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue("@byScaleSelect", args1);
  }
);

When(
  /^user sets "([^"]*)" in first scale field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue("@firstScaleField", args1);
  }
);

When(
  /^user sets "([^"]*)" in second scale field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue("@secondScaleField", args1);
  }
);

When(
  /^user sets "([^"]*)" in third scale field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue("@thirdScaleField", args1);
  }
);

When(
  /^user sets "([^"]*)" in fifth scale field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.setValue("@fifthScaleField", args1);
  }
);

When(/^user selects 'x' button for second scale category$/, async () => {
  await traitsPage.section.allTraitsForm.click("@secondScaleDeleteButton");
});

When(/^user selects 'x' button for third scale category$/, async () => {
  await traitsPage.section.allTraitsForm.click("@thirdScaleDeleteButton");
});

Then(
  /^user can not see the .* "ordinal label" on ontology list page$/,
  async () => {
    await traitsPage.section.allTraitsForm.assert.not.elementPresent(
      "@ordinalFields"
    );
  }
);

Then(
  /^user can see "([^"]*)" in the first Ordinal field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@firstOrdinalField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in the second Ordinal field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@secondOrdinalField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in the third Ordinal field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@thirdOrdinalField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in the fifth Ordinal field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@fifthOrdinalField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in first Scale field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@firstScaleField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in second Scale field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@secondScaleField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in third Scale field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@thirdScaleField",
      args1
    );
  }
);

Then(
  /^user can see "([^"]*)" in fifth Scale field on ontology list page$/,
  async (args1) => {
    await traitsPage.section.allTraitsForm.assert.value(
      "@fifthScaleField",
      args1
    );
  }
);

Then(
  /^user can see 'Ontology Term Name' field in ontology list page$/,
  async () => {
    await traitsPage.section.allTraitsForm.assert.visible("@nameField");
  }
);

Then(/^user can see 'Full Name' field in ontology list page$/, async () => {
  await traitsPage.section.allTraitsForm.assert.visible("@fullNameField");
});

Then(/^user can see 'Description' field in ontology list page$/, async () => {
  await traitsPage.section.allTraitsForm.assert.visible("@descriptionField");
});

Then(/^user can see 'Synonyms' label in ontology list page$/, async () => {
  await traitsPage.section.allTraitsForm.assert.visible("@synonymsLabel");
});

Then(
  /^user can see 'Trait = Entity \+ Attribute' field in ontology list page$/,
  () => {
    return true;
  }
);

Then(/^user can see 'Entity' field in ontology list page$/, () => {
  return true;
});

Then(/^user can see 'Attribute' field in ontology list page$/, () => {
  return true;
});

Then(/^user can see 'Trait' field in ontology list page$/, () => {
  return true;
});

Then(
  /^user can see 'Method = Description \\+ Class' field in ontology list page$/,
  () => {
    return true;
  }
);

Then(/^user can see 'Description' field in ontology list page$/, () => {
  return true;
});

Then(/^user can see 'Method Class' dropdown in ontology list page$/, () => {
  return true;
});

Then(/^user can see 'Scale' field in ontology list page$/, () => {
  return true;
});

Then(/^user can see 'Scale Class' dropdown in ontology list page$/, () => {
  return true;
});

Then(/^user can see 'Tags' field in ontology list page$/, () => {
  return true;
});

Then(/^user can see 'Save' button in ontology list page$/, () => {
  return true;
});

Then(/^user can see 'Cancel' button in ontology list page$/, () => {
  return true;
});

When(/^user sets "([^"]*)" in the 'Entity' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user can see "([^"]*)" as suggested text in 'Entity' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Given(/^user sets "([^"]*)" in 'Name' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Given(/^user sets "([^"]*)" in 'Full Name' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Given(/^user sets "([^"]*)" in 'Entity' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Given(/^user sets "([^"]*)" in 'Attribute' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Given(/^user sets "([^"]*)" in 'Method Description' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^user selects "([^"]*)" in 'Method Class' dropdown in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Given(/^user selects "([^"]*)" in 'Scale Class' dropdown in ontology list page$/, (args1,args2) => {
	console.log(args1,args2);
	return true;
});

Given(/^user selects "([^"]*)" button in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Given(/^user selects 'New Term' button in ontology list page$/, () => {
	return true;
});

Then(/^user can see "([^"]*)" below the 'Name' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user can see "([^"]*)" below the 'Ontology Term Description' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user can see "([^"]*)" below the 'Entity' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user can see "([^"]*)" below the 'Attribute' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user can see "([^"]*)" below the 'Method Description' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user can see "([^"]*)" below the 'Method Class' dropdown in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user can see "([^"]*)" below the 'Scale Class' dropdown in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user can not see "([^"]*)" in 'Name' column in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^user selects 'Save' button in ontology list page$/, () => {
	return true;
});

Then(/^user can see "([^"]*)" in 'Name' column in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user can see "([^"]*)" in 'Trait' column in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user can see "([^"]*)" in 'Method' column in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user can see "([^"]*)" in 'Scale Class' column in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user can see "([^"]*)" in 'Scale Class' dropdown in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user can see 'Formula' field in ontology list page$/, () => {
	return true;
});

Then(/^user can see 'Unit' field in ontology list page$/, () => {
	return true;
});

Then(/^user can see 'Decimal Places' field in ontology list page$/, () => {
	return true;
});

Then(/^user can see 'Minimum Valid Value' field in ontology list page$/, () => {
	return true;
});

Then(/^user can see 'Maximum Valid Value' field in ontology list page$/, () => {
	return true;
});

Then(/^user can see "([^"]*)" below the 'Formula' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user can see "([^"]*)" below the 'Unit' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^user sets "([^"]*)" in 'Formula' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^user sets "([^"]*)" in 'Unit' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});


When(/^user sets "([^"]*)" in 'Minimum Valid Value' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^user sets "([^"]*)" in 'Maximum Valid Value' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user can see "([^"]*)" below the 'Max' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^user can see 'Unit of time' field in ontology list page$/, () => {
	return true;
});

When(/^user set "([^"]*)" in 'Unit' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^user sets "([^"]*)" in 'Scale' field in ontology list page$/, (args1) => {
	console.log(args1);
	return true;
});

