// .storybook/preview.tsx
import React from 'react'
import { CssBaseline } from '@mui/material'
import { GuiProvider, AVAILABLE_THEMES } from '../src/themes'
import { themes } from 'storybook/internal/theming';
import { MemoryRouter } from 'react-router-dom';

const TOOLBAR_ITEMS = (AVAILABLE_THEMES || []).map(t => ({
  value: t.id || t.key || t.name,
  title: t.name || t.id,
}))

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'This.GUI theme',
    defaultValue: 'neurons-dark',
    toolbar: {
      icon: 'mirror',
      items: TOOLBAR_ITEMS.length
        ? TOOLBAR_ITEMS
        : [
            { value: 'neurons-light', title: 'Light' },
            { value: 'neurons-dark',  title: 'Dark'  },
          ],
      showName: true,
      dynamicTitle: true,
    },
  },
}

export const decorators = [
  (Story: React.FC, context: Record<string, any>) => {
    const themeKey = context.globals.theme || 'neurons-dark';

    return (
      <MemoryRouter>
        <GuiProvider initialTheme={themeKey} key={`sb-${themeKey}`}>
          <CssBaseline />
          <Story />
        </GuiProvider>
      </MemoryRouter>
    );
  },
];

export const parameters = {
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  backgrounds: { disable: true },
  docs: { page: null, theme: themes.dark },
}