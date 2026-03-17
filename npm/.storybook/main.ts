import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "staticDirs": [
    "../public"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-themes",
    "@storybook/addon-links",
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  viteFinal: async (viteConfig) => {
    viteConfig.plugins = viteConfig.plugins || [];
    viteConfig.plugins.push(tsconfigPaths());
    return viteConfig;
  },
  docs: { defaultName: 'Docs' },
  
};
export default config;
