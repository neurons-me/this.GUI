# .GUI
A collection of components and building blocks enabling **.GUI** generation.
[Demo](https://neurons-me.github.io/GUI/)  -  [Storybook](https://neurons-me.github.io/GUI/docs/storybook)



<img src="https://res.cloudinary.com/dkwnxf6gm/image/upload/w_320/v1761281165/geometry_shapes-removebg-preview_anrdke.png" alt="Geometry shapes" width="244" />

# Start Here: Runtime, Not Widgets
`this.GUI` is not only a component catalog.  
It is a declarative runtime with three layers:

1. **UI spec (`this.GUI`)**: you describe the screen as data: pages, cards, text, buttons, sidebars, and children.
2. **Dynamic tokens (`$expr` / `$action`)**: instead of hardcoding everything, you can say "read this value" or "run this mutation" in a serializable way.
3. **Runtime (`runtime`, optional `.me`)**: the host decides how those reads and writes actually work, for example by resolving profile data, route params, or backend mutations.

In plain terms:
- `this.GUI` defines **what to render**
- `$expr` and `$action` define **what should be dynamic**
- `runtime` defines **where the data comes from and what actions do**

## Mental Model
You can run `this.GUI` in two modes:
- **JS-Only mode**: plain functions and local state.
- **Data-Driven mode**: dynamic tokens resolved by runtime (`$expr`, `$action`).
  The same spec can evolve from local UI to data-driven app without rewriting components.

---

## First GUI
Start with a tiny spec and mount it.
`Page` here is a built-in `this.GUI` node, so you can use it directly without registering it yourself.

```ts
const spec = {
  type: 'Page',
  props: {
    title: 'Hello GUI',
    subtitle: 'Your first rendered screen',
  },
  children: [
    {
      type: 'Button',
      props: {
        variant: 'contained',
        label: 'Click me',
      },
    },
  ],
};

GUI.mount(spec, '#root');
```

That already gives you:
- a page shell
- a heading
- a working button
  <FirstGuiPreview />

---

## Compose With Children
Everything is just nested nodes.

```json
{
  "type": "Paper",
  "props": { "sx": { "p": 2, "borderRadius": 2 } },
  "children": [
    {
      "type": "Typography",
      "props": { "variant": "h5", "children": "Profile" }
    },
    {
      "type": "Typography",
      "props": { "variant": "body2", "children": "Status: active" }
    },
    {
      "type": "Button",
      "props": { "label": "Edit", "variant": "outlined" }
    }
  ]
}
```

Think in blocks:

- layout containers
- content nodes
- actions

---

For those blocks to come alive, they need a contract with the runtime.

---

## Runtime Contract (Minimal)
```ts
const runtime = {
  resolve(value, ctx) {
    // read expression -> value
    return value;
  },
  action(expression, ctx) {
    // expression -> executable callback
    return () => {};
  },
};
```

Use with mount:

```ts
GUI.mount(spec, '#root', { runtime, ctx });
```

---

## Make It Dynamic
Once you want live data, switch props from literals to tokens.
```json
{
  "type": "Typography",
  "props": {
    "variant": "body1",
    "children": { "$expr": "me/public/profile/name" }
  }
}
```

And for mutations:

```json
{
  "type": "Button",
  "props": {
    "label": "Set active",
    "onClick": { "$action": "me/public/profile/status = 'active'" }
  }
}
```

This is the core idea:
- static prop -> fixed UI
- `$expr` -> read data
- `$action` -> mutate data

---

## Dynamic Props with `$Tokens`
```json
{
  "type": "Button",
  "props": {
    "label": { "$expr": "me/public/profile/name" },
    "onClick": { "$action": "me/public/profile/status = 'active'" }
  }
}
```

What happens:
- `$expr` is resolved before render.
- `$action` is hydrated into a callback.
- If runtime is missing, GUI falls back safely (no crash).

---

## Routes And Params
When you add routes like `/shops/:id`, the router places route params into `ctx.params`.

```ts
router.set('/shops/:id', ({ ctx }) => ({
  type: 'Page',
  props: {
    // Inside $expr, {{...}} injects route/context values into the expression string.
    title: { $expr: 'me/views/shops[{{params.id}}].name' },
  },
}));
```

That lets one screen template render many records.
<QueryExpressionsDemo />

---

## Typical Build Order
If you are building a screen from scratch, this order works well:

1. **Start with layout**: `Page`, `Box`, `Paper`, `Stack`
2. **Add content**: `Typography`, headings, labels
3. **Insert interactive nodes**: `Button`, `TextField`, tables, cards
4. **Replace literals** with `$expr`
5. **Hydrate callbacks** with `$action`
6. **Connect routes** once the static UI already works

---

## Security by Default
Expression resolution is allowlisted by default:

- `me/views/`
- `me/public/`

You can extend:

```ts
GUI.mount(spec, '#root', {
  runtime,
  allowedExprRoots: ['me/views/', 'me/public/', 'me/app/'],
});
```

---

## Inspectors, Not Starters
These stories are useful when debugging theme/runtime internals, not when learning how to assemble a screen:

- current theme state
- palette inspector
- typography inspector

Use them only if you need to verify resolved values while developing the system.

---

## Practical Note
If you want the ultra-minimal plain-HTML bootstrap, use:

- `/html/bootstrap.local.html`
  That file demonstrates `.me + this.GUI` end-to-end with runtime tokens.



