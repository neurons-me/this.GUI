// .storybook/preview.tsx
import React from 'react'
import { CssBaseline } from '@mui/material'
import { GuiProvider } from '../src/themes'
import { getFlatGuiThemes } from '../src/themes/utils/catalog';
import { themes } from 'storybook/internal/theming';
import { MemoryRouter } from 'react-router-dom';

export const decorators = [
  (Story: React.FC) => (
    <MemoryRouter>
      <GuiProvider initialThemeId="neurons.me" initialMode="light">
        <CssBaseline />
        <Story />
      </GuiProvider>
    </MemoryRouter>
  ),
];

export const parameters = {
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  backgrounds: { disable: true },
  docs: { page: null, theme: themes.dark },
}