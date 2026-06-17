# this.gui `2.1.8`

> Composable React component library for the neurons.me stack.

`this.gui` is a React-first runtime for semantic interfaces — composable, declarative, and imperative UI primitives built on top of `.me` identity and cleaker namespaces.

---

## Install

```bash
npm install this.gui
```

## Quick Start

```tsx
import { GUI } from 'this.gui'

GUI.mount(document.getElementById('root'), {
  namespace: 'me://your.namespace',
})
```

---

## Three layers

```
this.gui          → UI primitives and high-level package surface
this.gui/react    → .me React bridge (MeRuntimeProvider, useMeValue, etc.)
this.gui/runtime  → spec mounting and runtime adapters
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

[GUI Mount →](./GUI-Mount) · [Semantic Taxonomy →](./Semantic-Taxonomy) · [Monad Discovery →](./Monad-Discovery) · [Cleaker Access Protocol →](./Cleaker-Access-Protocol)
