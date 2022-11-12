const { client } = require("nightwatch-api");
const page = client.page.page();

module.exports = {
  showAll: async function () {
    await page.moveToElement("@showAllButton", 1, 1);
    await page.pause(1000);
    await page.click("@showAllButton");
  },

  generateRandomAlphaString: function (length) {
    let generated = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < length; i++) {
      generated += letters[Math.floor(Math.random() * letters.length)];
    }
    return generated;
  },

  getToday: function () {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
  },
};
