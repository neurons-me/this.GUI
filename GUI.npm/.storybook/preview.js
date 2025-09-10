// .storybook/preview.js — force-sync MUI theme in Canvas **and** Docs, no JSX
import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { themes } from 'storybook/internal/theming';
import { getTheme } from '../src/themes'

// Bridge: sync `data-theme` on <html> so Docs/MDX (unattached) can react
function HtmlThemeBridge(props) {
  const theme = props && props.theme ? props.theme : 'light'
  React.useEffect(() => {
    const el = document.documentElement // <html>
    if (!el) return
    el.setAttribute('data-theme', theme)
  }, [theme])
  return null
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'This.GUI theme',
    defaultValue: 'dark',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', right: '☀️', title: 'Light' },
        { value: 'dark', right: '🌙', title: 'Dark' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
}

export const decorators = [
  (Story, context) => {
    const themeName = context.globals.theme || 'dark'
    const key = themeName === 'light' ? 'neurons-light' : 'neurons-dark'
    const theme = getTheme({ key })
    return React.createElement(
      ThemeProvider,
      { theme },
      React.createElement(CssBaseline, null),
      React.createElement(HtmlThemeBridge, { theme: themeName }),
      React.createElement(Story, null)
    )
  },
]

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  backgrounds: { disable: true },
  docs: { 
    page: null ,
    theme: themes.dark,
  },
}
