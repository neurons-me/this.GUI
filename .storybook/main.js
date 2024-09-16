import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
 */

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    // Only include .mdx and .stories.* files from the ./src/stories/ directory and its subdirectories
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",  // This already includes addon-docs
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  docs: {
    autodocs: true, // This enables autodocs globally
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;