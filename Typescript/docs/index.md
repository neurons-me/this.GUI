---
layout: home

hero:
  name: "this.gui"
  text: "Generative User Interfaces"
  tagline: "React ⚡ TypeScript — Composable, Declarative & Imperative"
  image:
    src: https://neurons-me.github.io/GUI/Typescript/public/GUI.png
    alt: this.gui
  actions:
    - theme: brand
      text: Storybook
      link: https://neurons-me.github.io/GUI/storybook/
    - theme: alt
      text: API Reference
      link: /api/
---

<div class="vp-doc" style="max-width:960px;margin:0 auto;padding:2rem 1.5rem">

## Install

```bash
npm install this.gui
```

## Quick Start

```tsx
import { GUI } from 'this.gui'

// Mount the GUI runtime into your app
GUI.mount(document.getElementById('root'), {
  namespace: 'me://your.namespace',
})
```

---

## Architecture

```
this.me    → sovereign kernel. identity and memory root.
cleaker    → namespace resolver. projects .me into a surface.
monad.ai   → HTTP daemon. exposes namespace over HTTP.
this.gui   → React component library. renders the surface.
```

> *Composable, Declarative & Imperative.*

[Semantic Taxonomy →](./Semantic-Taxonomy) · [Monad Discovery →](./Monad-Discovery) · [Cleaker Access Protocol →](./Cleaker-Access-Protocol)

</div>
