import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { mount, declareApp, RunMe } from 'this.gui/runtime';
import type { AppDeclaration, GuiSpecNode } from 'this.gui/runtime';
import { Theme, Layout, ThemeLauncher } from 'this.gui';
import { Typography, Button } from 'this.gui/atoms';
import { Hero, Stack } from 'this.gui/molecules';
import type { MeLike } from 'this.gui/react';

export type { AppDeclaration };
export { declareApp };

export interface MountAppOptions {
  me: MeLike;
  app: AppDeclaration;
  target: string;
}

// Template-local bootstrap wrapper — not the package's own mountApp() (which
// only supports Component-typed views). This one delegates rendering to
// mount() so the whole page participates in the Semantic Inspector graph.
export function mountApp({ me, app, target }: MountAppOptions): void {
  declareApp(me, app);

  const path = window.location.pathname.replace(/^\/+/, '') || 'home';
  const views = app.views as Record<string, () => GuiSpecNode>;
  const createViewSpec = views[path] ?? views.home;

  const gui = { RunMe, Typography, Button, Hero, Stack };

  const spec: GuiSpecNode = {
    type: Theme,
    props: { initialThemeId: app.theme, 'data-gui-component': 'Theme' },
    children: {
      type: Layout,
      props: {
        'data-gui-component': 'Layout',
        LeftBar: {
          initialView: 'expanded',
          footerElements: [
            { type: 'action', props: { element: React.createElement(ThemeLauncher) } },
          ],
        },
      },
      children: createViewSpec(),
    },
  };

  mount(spec, target, {
    gui,
    me,
    React,
    ReactDOM,
    devtools: { inspector: true, inspectorToggleVisible: true },
  });
}
