<img src="https://res.cloudinary.com/dkwnxf6gm/image/upload/w_320/v1761281165/geometry_shapes-removebg-preview_anrdke.png" alt="Geometry shapes" width="244" />

---

# this.gui

`this.gui` is a React-first runtime for semantic interfaces.

It gives you three clean layers:

- `this.gui` for UI primitives and the high-level package surface
- `this.gui/react` for the `.me` React bridge
- `this.gui/runtime` for spec mounting and runtime adapters

Legacy browser/global usage still exists in `this.gui/legacy`, but the modern path is React + Vite.

## Install

```bash
npm install this.gui this.me
```

## React-First Quick Start

```tsx
import * as React from 'react';
import ME from 'this.me';

import { Theme, Box, Button, Typography } from 'this.gui';
import { MeRuntimeProvider, useMeAction, useMeValue } from 'this.gui/react';

const me = new ME();
me.profile.name('Ana');
me.profile.status('online');

function ProfileCard() {
  const name = useMeValue<string>('profile.name');
  const status = useMeValue<string>('profile.status');
  const setStatus = useMeAction('profile.status');

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">{name}</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Status: {status}
      </Typography>
      <Button variant="contained" onClick={() => setStatus('offline')}>
        Set Offline
      </Button>
    </Box>
  );
}

export default function App() {
  return (
    <Theme>
      <MeRuntimeProvider me={me}>
        <ProfileCard />
      </MeRuntimeProvider>
    </Theme>
  );
}
```

## Mount a Spec with `.me`

If you want to render declarative specs instead of hand-writing JSX, use `mount()` from `this.gui/runtime`.
In modern ESM apps, pass the package surface and React namespaces explicitly.

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as GUI from 'this.gui';
import ME from 'this.me';
import { createMeRuntime, mount } from 'this.gui/runtime';

const me = new ME();
me.profile.name('Ana');
me.profile.status('online');
const runtime = createMeRuntime(me);

const spec = {
  type: 'Page',
  props: {
    title: 'Profile',
    subtitle: 'Spec mounted with the runtime bridge',
  },
  children: [
    {
      type: 'Typography',
      props: {
        variant: 'h5',
        children: { read: 'me/profile/name' },
      },
    },
    {
      type: 'Typography',
      props: {
        variant: 'body1',
        children: { read: 'me/profile/status' },
      },
    },
    {
      type: 'Button',
      props: {
        label: 'Set Reviewing',
        variant: 'contained',
        onClick: { write: "me/profile/status = 'reviewing'" },
      },
    },
  ],
};

mount(spec, '#root', {
  gui: GUI,
  React,
  ReactDOM,
  me,
  runtime,
  devtools: {
    inspector: false,
    inspectorToggleVisible: true,
    adminView: false,
  },
});
```

## Package Surface

### `this.gui`

Use the root entry for the UI surface:

- `Theme`
- `Box`, `Button`, `Typography`, `TextField`
- `Layout`
- `Router`, `RouterProvider`
- `mount`

### `this.gui/react`

Use this entry when `.me` is your state layer:

- `MeRuntimeProvider`
- `useMe`
- `useMeValue`
- `useMeAction`

### `this.gui/runtime`

Use this entry when you want the lower-level runtime APIs:

- `mount`
- `createMeRuntime`
- `readMeValue`
- `writeMeValue`
- `createHttpNamespaceProvider`
- `startApp`

### `this.gui/devtools`

Use this entry only when you explicitly want runtime tooling:

- `RuntimeInspector`
- `RuntimeAdminView`
- `toggleInspector`
- `toggleAdminView`

### `this.gui/legacy`

Use this only for explicit compatibility with the browser/global facade.

## Recommended Direction

- Build apps in React/Vite
- Use `.me` as the semantic source of truth
- Use `this.gui/react` for bindings
- Use `this.gui/runtime` when you want to mount specs
- Opt into `this.gui/devtools` only when you need runtime inspection

## Docs

- Storybook runtime examples live under `Getting Started` and `Runtime`
- The runtime contract lives in [`Runtime-Contract.md`](/Users/suign/Desktop/Neuroverse/neurons.me/this/GUI/npm/Runtime-Contract.md)

<img src="https://suign.github.io/assets/imgs/neurons_me_logo.png" alt="neurons.me logo" width="89">

**MIT License.**
∴ suiGn / [neurons.me](https://neurons.me)
