/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-themes"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  docs: { defaultName: 'Docs' },
  parameters: {
    options: {
      storySort: {
        order: [
          'Home',
          'Foundations',
          'Layout',
          'Navigation',
          'Content',
          'Media',
          'Text',
          'Organization',
          'Code',
          'Feedback',
          'Patterns'
        ]
      }
    }
  }
};
export default config;