import { createRoot } from 'react-dom/client';
import { Theme, Layout, ThemeLauncher } from 'this.gui';
import { MeRuntimeProvider } from 'this.gui/react';
import { writeMeValue } from 'this.gui/runtime';
import type { MeLike } from 'this.gui/react';

export interface AppDeclaration {
  id: string;
  namespace: string;
  title: string;
  theme?: string;
  views: Record<string, React.ComponentType>;
}

export function declareApp(me: MeLike, app: AppDeclaration): void {
  writeMeValue(me, `${app.namespace}.manifest`, {
    id: app.id,
    title: app.title,
    theme: app.theme,
  });
  writeMeValue(me, `${app.namespace}.views`, Object.keys(app.views));
}

export interface MountAppOptions {
  me: MeLike;
  app: AppDeclaration;
  target: string;
}

export function mountApp({ me, app, target }: MountAppOptions): void {
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
