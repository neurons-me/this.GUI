// .storybook/main.js
import { join, dirname } from 'path';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/stories/**/*.mdx",  // Include MDX files for component documentation
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)", // Include all story files
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
  ],
  docs: {
    autodocs: true, // Enables automatic documentation generation
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;