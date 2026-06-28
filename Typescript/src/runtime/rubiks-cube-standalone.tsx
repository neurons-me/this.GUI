// src/runtime/rubiks-cube-standalone.tsx
// Minimal standalone mount for RubiksCube on plain static HTML pages —
// no GUI runtime, no Theme provider, just React + this one widget.
// Auto-mounts into every [data-gui-rubiks-cube] element on the page.
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import RubiksCube from '@/gui/widgets/RubiksCube/RubiksCube';

// This standalone mount has no app-wide <Theme>, so 'themed' palette
// (which reads live from MUI's ThemeProvider) needs a theme to read —
// seed it with the same values as the official "neurons.me" Catalog
// theme (dark.tokens.ts) so the brand-themed default still looks right.
const standaloneTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#4fd1c5', dark: '#0f6a78' },
    warning: { main: '#f4c95d' },
    info: { main: '#90caf9' },
    error: { main: '#ff6b6b' },
    background: { default: '#0b1114' },
    text: { primary: '#e8eded' },
  },
});

function mountAll() {
  const nodes = document.querySelectorAll<HTMLElement>('[data-gui-rubiks-cube]');
  nodes.forEach((node) => {
    if (node.dataset.guiRubiksCubeMounted) return;
    node.dataset.guiRubiksCubeMounted = 'true';
    const height = node.dataset.height ? Number(node.dataset.height) : undefined;
    const spin = node.dataset.spin !== 'false';
    const orbit = node.dataset.orbit !== 'false';
    const borderRadius = node.dataset.borderRadius ? Number(node.dataset.borderRadius) : undefined;
    const palette = node.dataset.palette === 'classic' ? 'classic' : 'themed';
    createRoot(node).render(
      React.createElement(
        ThemeProvider,
        { theme: standaloneTheme },
        React.createElement(RubiksCube, { height, spin, orbit, borderRadius, palette })
      )
    );
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountAll);
} else {
  mountAll();
}

(window as any).GUIRubiksCube = { mountAll };
