// .storybook/preview.js
import React from 'react'
import { CssBaseline } from '@mui/material'
import GuiProvider from '../src/context/GuiProvider'
import { AVAILABLE_THEMES } from '../src/themes'
import { themes } from 'storybook/internal/theming';

// Items reales para la toolbar (si tienes meta en tokens)
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
  (Story, context) => {
    const themeKey =
      context.globals.theme ||
      (AVAILABLE_THEMES?.[0]?.id) ||
      'neurons-dark';

    // 1) sincroniza con localStorage (sin tocar tu provider)
    try { localStorage.setItem('this.gui:theme', themeKey) } catch {}

    // 2) setea data-theme para MDX/CSS en Docs
    React.useEffect(() => {
      document.documentElement?.setAttribute('data-theme', themeKey)
    }, [themeKey])

    // 3) forzamos remount con `key` para que el provider rehaga el estado
    return React.createElement(
      GuiProvider,
      { initialTheme: themeKey, key: `sb-${themeKey}` },
      React.createElement(CssBaseline, null),
      React.createElement(Story, null)
    )
  },
]

export const parameters = {
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  backgrounds: { disable: true },
  docs: { page: null, theme: themes.dark },
}