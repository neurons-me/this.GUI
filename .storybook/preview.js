// .storybook/preview.js
import React from 'react';
import { ThemeProvider } from '../src/themes/ThemeProvider';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'neurons',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'neurons', title: 'Neurons' },
        // Add other themes if you have them
      ],
    },
  },
  mode: {
    name: 'Mode',
    description: 'Light or Dark mode',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light Mode' },
        { value: 'dark', title: 'Dark Mode' },
      ],
    },
  },
};

export const decorators = [
  (Story, context) => {
    const { theme, mode } = context.globals;

    // In Storybook, the decorator runs inside the iframe, so 'document' refers to the iframe's document
    const iframeDocument = typeof document !== 'undefined' ? document : undefined;

    return React.createElement(
      ThemeProvider,
      {
        initialTheme: theme,
        initialMode: mode,
        targetDocument: iframeDocument, // Pass the iframe's document
      },
      React.createElement(Story, context.args)
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
  },
};