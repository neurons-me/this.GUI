// dev.tsx — local dev sandbox (not included in the lib build)
// Run `npm run dev` to preview components in isolation before Storybook.

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from 'this.gui';
import { ExampleMolecule } from './molecules';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme initialMode="dark">
      <div style={{ padding: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <ExampleMolecule title="__APP_NAME__ item" tag="active" tagVariant="success" />
        <ExampleMolecule title="Stale item"   tag="stale"  tagVariant="warning" />
        <ExampleMolecule title="Error state"  tag="error"  tagVariant="error"   />
      </div>
    </Theme>
  </React.StrictMode>,
);
