module.exports = {
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

  getValue: async function(section, field) {
    return await new Promise((resolve, reject) => {
      section.getValue(field, ({ value, status }) => {
        if (status === 0) resolve(value);
        else reject(new Error(`Failed to get value for ${field}`));
      });
    });
  },

  getText: async function(section, field) {
    return await new Promise((resolve, reject) => {
      section.getText(field, ({ value, status }) => {
        if (status === 0) resolve(value);
        else reject(new Error(`Failed to get value for ${field}`));
      });
    });
  }
};

