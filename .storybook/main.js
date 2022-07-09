const { mergeConfig } = require('vite');

module.exports = {
  "stories": [
    // "../src/**/*.stories.mdx",
    // "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // "@storybook/addon-jest"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  staticDirs: [
    "../public"
  ],
  // async viteFinal(config, { configType }) {
  //   return mergeConfig(config, {
  //     resolve: {
  //       alias: {
  //         path: "path-browserify"
  //       }
  //     }
  //   })
  // },
}