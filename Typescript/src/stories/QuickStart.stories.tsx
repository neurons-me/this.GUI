// src/stories/QuickStart.stories.tsx
//
// This story is a *literal* render of what `npx this.gui <AppName>` produces.
// It mirrors npx/template/src/{app.ts,views/Home.ts} content/shape exactly
// (same declareApp, same Home spec tree). If the template changes, update
// this story to match — it exists so "what you see here" === "what you get
// from the CLI". One deliberate bootstrap difference: the real template
// calls mount() (which owns its own DOM root + SelectionProvider); this
// story instead calls renderNode() directly against the same spec and
// bridges resolved nodes into Storybook's own ambient SelectionProvider
// (see .storybook/preview.tsx) — mount() can't be used here because it
// would create a second SelectionProvider that fights the toolbar's
// Inspector toggle and double-mounts the inspector panel.
import React, { useMemo } from 'react';
import ME from 'this.me';
import type { Meta, StoryObj } from '@storybook/react';

import Theme from '@/gui/Theme/Theme';
import Layout from '@/gui/Layout/Layout';
import ThemeLauncher from '@/gui/Theme/Launcher/ThemeLauncher';
import DevToolsLauncher from '@/runtime/DevToolsLauncher';
import { MeRuntimeProvider } from '@/react/MeRuntimeProvider';
import { declareApp } from '@/runtime/mountApp';
import type { AppDeclaration } from '@/runtime/mountApp';
import { SpecBoundary } from '@/runtime/SpecBoundary';
import type { GuiSpecNode } from '@/runtime/renderer';
import { RunMe } from '@/runtime/run-me';
import { Typography, Button } from '@/gui/Atoms';
import { Hero, Stack } from '@/gui/Molecules';

const TITLE_PATH = 'me/apps.my-app.manifest.title';

// ── Mirrors npx/template/src/views/Home.ts ─────────────────────────────────
function createTemplateHomeSpec(): GuiSpecNode {
  return {
    type: 'Hero',
    props: { height: '100vh', mode: 'left', padding: { xs: 3, md: 8 }, contentMaxWidth: 680 },
    provenance: {
      source: 'views/Home.ts',
      note: 'Template landing view.',
    },
    children: {
      type: 'Stack',
      props: { spacing: 2, alignItems: 'flex-start' },
      children: [
        {
          type: 'Typography',
          props: { variant: 'h1', children: { read: TITLE_PATH } },
          provenance: {
            source: 'views/Home.ts#title',
            semanticPath: TITLE_PATH,
            note: 'App title, read live from the kernel manifest written by declareApp().',
          },
        },
        {
          type: 'Typography',
          props: { variant: 'h5', children: 'Powered by this.gui' },
          provenance: {
            source: 'views/Home.ts#subtitle',
            note: 'Static template copy — no kernel binding.',
          },
        },
        {
          type: 'Button',
          props: { variant: 'contained', size: 'large', children: 'Get started' },
          provenance: {
            source: 'views/Home.ts#cta',
            note: 'Template placeholder CTA — wire an onClick: { write: ... } action here.',
          },
        },
      ],
    },
  };
}

const SPEC_REGISTRY = { Typography, Button, Hero, Stack };

// ── Mirrors npx/template/src/app.ts ────────────────────────────────────────
const templateApp: AppDeclaration = {
  id: 'my-app',
  namespace: 'apps.my-app',
  title: 'GUI',
  theme: 'neurons.me',
  views: { home: createTemplateHomeSpec },
};

// ── Mirrors npx/template/src/runtime.tsx's mountApp() shell, as a React tree
// instead of a mount()/createRoot() call (Storybook already owns the root) ─
function QuickStartPreview() {
  // Both created once, not per-render: a fresh `me` every render defeats
  // `runtime`'s own useMemo below (its dep would never match across
  // renders) and re-seeds+re-declares the kernel on every render for no
  // reason — declareApp() only needs to run once per mounted instance.
  const me = useMemo(() => {
    const instance = new ME() as any;
    declareApp(instance, templateApp);
    return instance;
  }, []);
  const homeSpec = useMemo(() => (templateApp.views.home as () => GuiSpecNode)(), []);
  const runtime = useMemo(() => RunMe(me), [me]);

  return (
    <Theme initialThemeId={templateApp.theme}>
      <MeRuntimeProvider me={me}>
        <Layout
          LeftBar={{
            initialView: 'expanded',
            footerElements: [
              { type: 'action', props: { element: <DevToolsLauncher /> } },
              { type: 'action', props: { element: <ThemeLauncher /> } },
            ],
          }}
        >
          <SpecBoundary spec={homeSpec} registry={SPEC_REGISTRY} runtime={runtime} />
        </Layout>
      </MeRuntimeProvider>
    </Theme>
  );
}

const meta = {
  title: 'Getting Started/Quick Start',
  component: QuickStartPreview,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof QuickStartPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'npx this.gui <AppName>',
};
