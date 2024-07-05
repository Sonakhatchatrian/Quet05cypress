const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: "nyan",
  },
});

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
