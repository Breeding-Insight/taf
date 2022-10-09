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
};
