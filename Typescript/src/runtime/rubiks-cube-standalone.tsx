// src/runtime/rubiks-cube-standalone.tsx
// Minimal standalone mount for RubiksCube on plain static HTML pages —
// no GUI runtime, no Theme provider, just React + this one widget.
// Auto-mounts into every [data-gui-rubiks-cube] element on the page.
import React from 'react';
import { createRoot } from 'react-dom/client';
import RubiksCube from '@/gui/widgets/RubiksCube/RubiksCube';

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
      React.createElement(RubiksCube, { height, spin, orbit, borderRadius, palette })
    );
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountAll);
} else {
  mountAll();
}

(window as any).GUIRubiksCube = { mountAll };
