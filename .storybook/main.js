const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/preset-typescript",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
          vue: "vue/dist/vue.js",
          vue$: "vue/dist/vue.esm.js",
        },
      },
    });

    return config;
  },
};
