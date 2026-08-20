import Home from './views/Home';
import Spaces from './views/Spaces';
import type { AppDeclaration } from 'this.gui/runtime';

// Two surfaces, same namespace: `home` is the published surface — public,
// read-first, no session required. `admin` is the authoring surface — the
// Spaces explorer (create/edit anything under apps.__APP_ID__.*), gated on
// having a session (see Spaces.tsx's own gate). Not role-based: v1 "admin"
// means "authenticated", not "authorized as an operator" — see the note in
// Spaces.tsx for what that distinction becomes once a capability layer exists.
const app: AppDeclaration = {
  id: '__APP_ID__',
  namespace: 'apps.__APP_ID__',
  title: '__APP_TITLE__',
  theme: 'neurons.me',
  views: {
    home: Home,
    admin: Spaces,
  },
};

export default app;
