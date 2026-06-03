<p align="center">
  <img src="Typescript/public/GUI.png" alt=".GUI logo" width="320"/>
</p>
<h1 align="center">.GUI</h1>
<p align="center">
  Generative User Interfaces. Composable React component library for the neurons.me stack.
</p>

[![npm](https://img.shields.io/npm/v/this.gui)](https://www.npmjs.com/package/this.gui) [![docs](https://img.shields.io/badge/docs-neurons--me.github.io-blue)](https://neurons-me.github.io/GUI/docs/)

---

## What is neurons.me?

**[neurons.me](https://neurons.me)** is a sovereign semantic compute stack. It lets any person or machine own a cryptographic identity, bind it to a namespace, run it as an HTTP daemon, and render it as a user interface — without depending on any central service.

| Layer | Package | Role |
|---|---|---|
| **Kernel** | [`this.me`](https://neurons-me.github.io/.me/) | Schema-free reactive memory. Derives identity from a seed. |
| **Identity** | [`cleaker`](https://neurons-me.github.io/Cleaker/) | Namespace resolver. Projects `.me` into a surface. |
| **Runtime** | [`monad`](https://neurons-me.github.io/monad/) | HTTP daemon. Exposes a namespace over HTTP. Runs the mesh. |
| **Gateway** | [`netget`](https://neurons-me.github.io/netget/) | Routes incoming requests to the correct monad. |
| **Interface** | [`this.gui`](https://neurons-me.github.io/GUI/) | React component library. Renders the semantic surface. |

## This package: `this.gui`

`this.gui` is the **interface layer** of the neurons.me stack. It is a React component library that renders semantic surfaces — it reads from and writes to a live `.me` kernel via a monad HTTP connection, and presents the result as composable, declarative UI.

Three entry points:

```ts
import { GUI } from 'this.gui'           // UI primitives and high-level surface
import { useMe, useMeValue } from 'this.gui/react'    // .me React bridge
import { mount, startApp } from 'this.gui/runtime'   // runtime lifecycle and boot
```

**Depends on:** `this.me` (reads/writes kernel paths), `cleaker` (identity sessions), `monad` (HTTP surface discovery and namespace resolution).
**Consumed by:** end users — this.gui is what people see and interact with.

---

<p align="center">
  <a href="https://neurons-me.github.io/GUI/" style="text-decoration:none" target="_blank"><strong>→ Documentation</strong></a>
  &nbsp;·&nbsp;
  <a href="https://neurons-me.github.io/GUI/docs/storybook/" style="text-decoration:none" target="_blank"><strong>→ Storybook</strong></a>
</p>
