import { createRoot } from 'react-dom/client';
import ME from 'this.me';
import { createWsMeRuntime } from 'this.gui/runtime';
import { SeedSessionProvider, SessionSurface } from 'this.gui/react';
import app from './app';
import Root from './Root';
import 'this.gui/style.css';
import './index.css';

// The monad's own DNS-style root namespace — set when you provision the
// monad (see this.gui's docs on running one locally / registering with
// netget). NOT the same thing as app.namespace (that's a `.me` path prefix
// like "apps.__APP_ID__"); this is the claim/routing identity.
const MONAD_ROOT_NAMESPACE = '__APP_ID__.local';
const monadOrigin = import.meta.env.VITE_MONAD_ORIGIN || `http://local.netget/apps/__APP_ID__`;
const SEED_STORAGE_KEY = `${app.id}.operator.seed:v1`;

// One shared "public" runtime — no seed, no claim, just a live connection to
// the monad's own root namespace. Public `.me` paths (anything not inside a
// secret scope) resolve the same regardless of who's asking, so the whole
// shell — session or not — reads through this. SessionSurface, once
// entered, layers a claimed identity's write access on top; it never
// replaces this connection.
const publicMe = new ME() as any;
const publicRuntime = createWsMeRuntime(publicMe, {
  semanticNamespace: MONAD_ROOT_NAMESPACE,
  transportOrigin: monadOrigin,
});

const el = document.querySelector('#root');
if (!el) throw new Error('main: #root not found');

createRoot(el).render(
  <SeedSessionProvider
    transportOrigin={monadOrigin}
    createRuntime={(me, ctx) => createWsMeRuntime(me, ctx)}
  >
    <SessionSurface claimRootNamespace={MONAD_ROOT_NAMESPACE} seedStorageKey={SEED_STORAGE_KEY}>
      <Root app={app} me={publicMe} runtime={publicRuntime} />
    </SessionSurface>
  </SeedSessionProvider>,
);
