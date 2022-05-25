const path = require("path");

module.exports = {
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  framework: "@storybook/react",
  staticDirs: ["../public"],
  stories: ["../components/**/*.stories.tsx"],
  webpackFinal: async (config) => {
    // Resolve absolute imports.
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];
    return config;
  },
};
