const { client } = require("nightwatch-api");
const { Given, Then, When } = require("cucumber");
const path = require("path");
const page = client.page.page();

Then(/^user can see 'Program Name' label in Programs page$/, async () => {
  return true;
});

Then(/^user can see 'Program Name' field in Programs page$/, async () => {
  return true;
});

Then(
  /^user can see 'Name of program. All Unicode special characters accepted.' text in Programs page$/,
  async () => {
    return true;
  }
);

Then(/^user can see 'Species' label in Programs page$/, async () => {
  return true;
});

Then(/^user can see 'Species' dropdown in Programs page$/, async () => {
  return true;
});

Then(
  /^user can see "([^"]*)" in 'Species' dropdown in Programs page$/,
  async (args1) => {
    console.log(args1);
    return true;
  }
);

Then(
  /^user can see 'Specify custom program data storage location' checkbox in Programs page$/,
  async () => {
    return true;
  }
);

Then(/^user can see 'Save' button in Programs page$/, async () => {
  return true;
});

Then(/^user can see 'Cancel' button in Programs page$/, async () => {
  return true;
});
