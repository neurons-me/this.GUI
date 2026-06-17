<img src="./public/GUI.png" style="width: 34%" />

---

# this.gui

###### Generative User Interfaces

[![npm](https://img.shields.io/npm/v/this.gui)](https://www.npmjs.com/package/this.gui) [![docs](https://img.shields.io/badge/docs-neurons--me.github.io-blue)](https://neurons-me.github.io/GUI/docs/)

`this.gui` is a React component library for `.me`-native apps. It gives you Layout, Theme, atoms, molecules, and the React bridge to read and write `.me` namespaces.

## Scaffold a new app

```bash
npx this.gui my-app
cd my-app
npm install
npm run dev
```

## Install manually

```bash
npm install this.gui this.me
```

## Quick Start

```ts
// app.ts
import Home from './views/Home';

export default {
  id: 'my-app',
  namespace: 'apps.my-app',
  title: 'My App',
  theme: 'neurons.me',
  views: { home: Home },
};
```

```tsx
// main.tsx
import ME from 'this.me';
import { mountApp } from './runtime';
import app from './app';

mountApp({ me: new ME() as any, app, target: '#root' });
```

```tsx
// views/Home.tsx
import { Typography } from 'this.gui/atoms';
import { Hero, Stack } from 'this.gui/molecules';
import { useMeValue } from 'this.gui/react';

export default function Home() {
  const title = useMeValue<string>('apps.my-app.manifest.title') || 'My App';
  return (
    <Hero height="100vh" mode="left" padding={{ xs: 3, md: 8 }}>
      <Stack spacing={2}>
        <Typography variant="h1">{title}</Typography>
      </Stack>
    </Hero>
  );
}
```

## Package Surface

Components are organized as **atoms → molecules → compounds** — primitives compose
into patterns, patterns compose into features.

| Entry | What it gives you |
|---|---|
| `this.gui` | `Theme`, `Layout`, `ThemeLauncher` |
| `this.gui/atoms` | Primitives — `Box`, `Button`, `Typography`, `Icon`, `Avatar`, … |
| `this.gui/molecules` | Compositions — `Hero`, `Stack`, `Page`, … |
| `this.gui/compounds` | Feature panels built from molecules |
| `this.gui/react` | `.me` bridge — `MeRuntimeProvider`, `useMeValue`, `useMeAction` |
| `this.gui/runtime` | `mountApp`, `writeMeValue`, `readMeValue` |

## Docs

[neurons-me.github.io/GUI](https://neurons-me.github.io/GUI/docs/)

---

<img src="https://suign.github.io/assets/imgs/neurons_me_logo.png" alt="neurons.me logo" width="89">

**MIT License.** ∴ suiGn / [neurons.me](https://neurons.me)
