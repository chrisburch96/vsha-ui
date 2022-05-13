module.exports = {
  stories: ["../components/**/*.stories.tsx"],
  addons: [
    "@react-theming/storybook-addon",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  staticDirs: ["../public"],
};
