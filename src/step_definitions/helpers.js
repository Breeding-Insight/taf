const { client } = require("nightwatch-api");
const page = client.page.page();

module.exports = {
  showAll: async function () {
    await page.moveToElement("@showAllButton", 1, 1);
    await page.pause(1000);
    await page.click("@showAllButton");
    await page.pause(5000);
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
    return this.formatDate(new Date(Date.now()), "yyyy-mm-dd");
  },

  formatDate: function (date, format) {
    const map = {
      mm: this.padDay(date.getMonth() + 1),
      dd: this.padDay(date.getDate()),
      yyyy: date.getFullYear(),
    };

    return format.replace(/mm|dd|yyyy/gi, (matched) => map[matched]);
  },

  padDay: function (value) {
    if (value < 10) {
      return "0" + value.toString();
    }
    return value;
  },
};
