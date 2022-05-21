const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  framework: "@storybook/react",
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];
    return config;
  },
};
