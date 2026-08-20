import { AppShell } from 'this.gui/runtime';
import type { AppDeclaration } from 'this.gui/runtime';
import type { RuntimeAdapter } from 'this.gui/runtime';
import type { MeLike } from 'this.gui/react';

export interface RootProps {
  app: AppDeclaration;
  me: MeLike;
  runtime: RuntimeAdapter;
}

const NAV_ITEMS = [
  { route: 'home', label: 'Inicio', icon: 'home' },
  { route: 'spaces', label: 'Espacios', icon: 'workspaces' },
];

/**
 * The whole app, always rendered — there is no login wall here. `me`/
 * `runtime` are the public connection from main.tsx, so every view (Home,
 * Spaces) works with or without a session; SessionSurface (already wrapping
 * this in main.tsx) is what adds a claimed identity's write access on top,
 * via useSessionSurface() wherever a view needs it.
 */
export default function Root({ app, me, runtime }: RootProps) {
  return <AppShell app={app} me={me} runtime={runtime} navItems={NAV_ITEMS} />;
}
