import React from 'react';
import { createRoot } from 'react-dom/client';
import Theme from '@/gui/Theme/Theme';
import Layout from '@/gui/Layout/Layout';
import ThemeLauncher from '@/gui/Theme/Launcher/ThemeLauncher';
import { MeRuntimeProvider } from '@/react/MeRuntimeProvider';
import { writeMeValue } from './run-me';
import type { MeLike } from '@/react/types';

export interface AppDeclaration {
  id: string;
  namespace: string;
  title: string;
  theme?: string;
  views: Record<string, React.ComponentType>;
}

export interface MountAppOptions {
  me: MeLike;
  app: AppDeclaration;
  target?: string;
}

export function declareApp(me: MeLike, app: AppDeclaration): void {
  writeMeValue(me, `${app.namespace}.manifest`, {
    id: app.id,
    title: app.title,
    theme: app.theme,
  });
  writeMeValue(me, `${app.namespace}.views`, Object.keys(app.views));
}

export function mountApp({ me, app, target = '#root' }: MountAppOptions): void {
  declareApp(me, app);

  const el = document.querySelector(target);
  if (!el) throw new Error(`mountApp: target "${target}" not found`);

  const path = window.location.pathname.replace(/^\/+/, '') || 'home';
  const View = app.views[path] ?? app.views.home;

  createRoot(el).render(
    <Theme initialThemeId={app.theme}>
      <MeRuntimeProvider me={me}>
        <Layout
          LeftBar={{
            initialView: 'expanded',
            footerElements: [
              { type: 'action', props: { element: <ThemeLauncher /> } },
            ],
          }}
        >
          <View />
        </Layout>
      </MeRuntimeProvider>
    </Theme>,
  );
}
