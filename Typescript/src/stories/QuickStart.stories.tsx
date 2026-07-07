// src/stories/QuickStart.stories.tsx
//
// This story is a *literal* render of what `npx this.gui <AppName>` produces.
// It is not a hand-built demo — it mirrors npx/template/src/{app.ts,runtime.tsx,
// views/Home.tsx} structurally exactly (same declareApp + Theme/MeRuntimeProvider/
// Layout shell, same Home view shape). If the template changes, update this story
// to match — it exists so "what you see here" === "what you get from the CLI".
import ME from 'this.me';
import type { Meta, StoryObj } from '@storybook/react';

import Theme from '@/gui/Theme/Theme';
import Layout from '@/gui/Layout/Layout';
import ThemeLauncher from '@/gui/Theme/Launcher/ThemeLauncher';
import { MeRuntimeProvider } from '@/react/MeRuntimeProvider';
import { useMeValue } from '@/react/useMeValue';
import { declareApp } from '@/runtime/mountApp';
import type { AppDeclaration } from '@/runtime/mountApp';
import { Typography, Button } from '@/gui/Atoms';
import { Hero, Stack } from '@/gui/Molecules';

// ── Mirrors npx/template/src/views/Home.tsx ────────────────────────────────
function TemplateHome() {
  const title = useMeValue<string>('apps.my-app.manifest.title') || 'My App';
  return (
    <Hero height="100vh" mode="left" padding={{ xs: 3, md: 8 }} contentMaxWidth={680}>
      <Stack spacing={2} alignItems="flex-start">
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h5">Powered by this.gui</Typography>
        <Button variant="contained" size="large">
          Get started
        </Button>
      </Stack>
    </Hero>
  );
}

// ── Mirrors npx/template/src/app.ts ────────────────────────────────────────
const templateApp: AppDeclaration = {
  id: 'my-app',
  namespace: 'apps.my-app',
  title: 'My App',
  theme: 'neurons.me',
  views: { home: TemplateHome },
};

// ── Mirrors npx/template/src/runtime.tsx's mountApp() shell, as a React tree
// instead of a createRoot() call (Storybook already owns the root) ─────────
function QuickStartPreview() {
  const me = new ME() as any;
  declareApp(me, templateApp);

  return (
    <Theme initialThemeId={templateApp.theme}>
      <MeRuntimeProvider me={me}>
        <Layout
          LeftBar={{
            initialView: 'expanded',
            footerElements: [{ type: 'action', props: { element: <ThemeLauncher /> } }],
          }}
        >
          <TemplateHome />
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
