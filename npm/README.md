# .GUI
A collection of components and building blocks enabling **Graphic User Interface** generation.
[Docs](https://neurons-me.github.io/GUI/)  -  [Storybook](https://neurons-me.github.io/GUI/docs/storybook)

<img src="https://res.cloudinary.com/dkwnxf6gm/image/upload/w_320/v1761281165/geometry_shapes-removebg-preview_anrdke.png" alt="Geometry shapes" width="244" />

# Start Here:
`.GUI` is a declarative runtime with three layers:
**[ Technical ]**
1. **GUI spec**: you describe the screen as data: 

#### `Layout` for the shell/sidebar:

```ts
const shell = {
  type: 'Layout',
  props: {
    leftSidebarConfig: {
      elements: [
        { type: 'link', props: { label: 'Home', icon: 'home', href: '#/' } },
        { type: 'link', props: { label: 'Profile', icon: 'person', href: '#/profile' } },
      ],
    },
  },
  children: [],
};
```

#### `Page` for the main screen:

```ts
const screen = {
  ...shell,
  children: [
    {
      type: 'Page',
      props: {
        title: 'Profile',
        subtitle: 'Basic profile screen',
      },
      children: [],
    },
  ],
};
```

#### `Box` for internal layout:

```ts
const withLayout = {
  ...screen,
  children: [
    {
      type: 'Page',
      props: {
        title: 'Profile',
        subtitle: 'Basic profile screen',
      },
      children: [
        {
          type: 'Box',
          props: {
            sx: {
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 2,
            },
          },
          children: [],
        },
      ],
    },
  ],
};
```

#### `Paper` for a card:

```ts
const card = {
  type: 'Paper',
  props: { sx: { p: 2, borderRadius: 2 } },
  children: [],
};
```

#### `Typography` for text inside the card:

```ts
const cardWithText = {
  ...card,
  children: [
    {
      type: 'Typography',
      props: { variant: 'h6', children: 'Account' },
    },
    {
      type: 'Typography',
      props: { variant: 'body2', children: 'Status: active' },
    },
  ],
};
```

#### `Button` for interaction:

```ts
const cardWithAction = {
  ...cardWithText,
  children: [
    ...cardWithText.children,
    {
      type: 'Button',
      props: { label: 'Edit profile', variant: 'contained' },
    },
  ],
};
```

##### Put it all together:

```ts
const profileScreen = {
  ...shell,
  children: [
    {
      type: 'Page',
      props: {
        title: 'Profile',
        subtitle: 'One screen assembled from declarative nodes',
      },
      children: [
        {
          type: 'Box',
          props: {
            sx: {
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 2,
            },
          },
          children: [
            cardWithAction,
            {
              type: 'Paper',
              props: { sx: { p: 2, borderRadius: 2 } },
              children: [
                {
                  type: 'Typography',
                  props: { variant: 'h6', children: 'Security' },
                },
                {
                  type: 'Typography',
                  props: { variant: 'body2', children: '2FA enabled' },
                },
                {
                  type: 'Button',
                  props: { label: 'Manage keys', variant: 'outlined' },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
```

2. **Dynamic read/write tokens (`read` / `write`)**: instead of hardcoding everything, you can say "read this value" or "run this mutation" in a serializable way.  
   `this.GUI` also accepts the legacy aliases `$expr` / `$action`.

Build that layer piece by piece:

Start with a literal value:

```ts
const staticName = {
  type: 'Typography',
  props: {
    variant: 'body1',
    children: 'Abella',
  },
};
```

Replace the literal with `read` when the value should be resolved from runtime data:

```ts
const dynamicName = {
  type: 'Typography',
  props: {
    variant: 'body1',
    children: { read: 'me/public/profile/name' },
  },
};
```

Use `write` when a node should trigger a mutation:

```ts
const activateButton = {
  type: 'Button',
  props: {
    label: 'Set active',
    onClick: { write: "me/public/profile/status = 'active'" },
  },
};
```

Use both together when a screen both reads and writes:

```ts
const dynamicProfileCard = {
  type: 'Paper',
  props: { sx: { p: 2, borderRadius: 2 } },
  children: [
    {
      type: 'Typography',
      props: {
        variant: 'h6',
        children: { read: 'me/public/profile/name' },
      },
    },
    {
      type: 'Typography',
      props: {
        variant: 'body2',
        children: { read: 'me/public/profile/status' },
      },
    },
    {
      type: 'Button',
      props: {
        label: 'Set active',
        onClick: { write: "me/public/profile/status = 'active'" },
      },
    },
  ],
};
```

What each token does:
- `read` resolves a value before render.
- `write` turns a serializable mutation into an executable callback.
- `$expr` / `$action` still work as compatibility aliases.
- Together they let the same GUI spec stay declarative while becoming live.

3. **Runtime (`runtime`, optional `.me`)**: the host decides how those reads and writes actually work, for example by resolving profile data, route params, or backend mutations.

In plain terms:
- `GUI` defines **what to render**
- `read` and `write` define **what should be dynamic**
- `runtime` defines **where the data comes from and what actions do**

## Mental Model
You can run `this.GUI` in two modes:
- **JS-Only mode**: plain functions and local state.
- **Data-Driven mode**: dynamic tokens resolved by runtime (`read`, `write`).
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
    "children": { "read": "me/public/profile/name" }
  }
}
```

And for mutations:

```json
{
  "type": "Button",
  "props": {
    "label": "Set active",
    "onClick": { "write": "me/public/profile/status = 'active'" }
  }
}
```

This is the core idea:
- static prop -> fixed UI
- `read` -> read data
- `write` -> mutate data

---

## Dynamic Props with Read/Write Tokens
```json
{
  "type": "Button",
  "props": {
    "label": { "read": "me/public/profile/name" },
    "onClick": { "write": "me/public/profile/status = 'active'" }
  }
}
```

What happens:
- `read` is resolved before render.
- `write` is hydrated into a callback.
- `$expr` / `$action` are still accepted as aliases.
- If runtime is missing, GUI falls back safely (no crash).

---

## Routes And Params
When you add routes like `/shops/:id`, the router places route params into `ctx.params`.

```ts
router.set('/shops/:id', ({ ctx }) => ({
  type: 'Page',
  props: {
    // Inside read, {{...}} injects route/context values into the expression string.
    title: { read: 'me/views/shops[{{params.id}}].name' },
  },
}));
```

That lets one screen template render many records.

---

## Typical Build Order
If you are building a screen from scratch, this order works well:

1. **Start with layout**: `Page`, `Box`, `Paper`, `Stack`
2. **Add content**: `Typography`, headings, labels
3. **Insert interactive nodes**: `Button`, `TextField`, tables, cards
4. **Replace literals** with `read`
5. **Hydrate callbacks** with `write`
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

`/html/bootstrap.local.html`
That file demonstrates `.me + this.GUI` end-to-end with runtime tokens.

<img src="https://suign.github.io/assets/imgs/neurons_me_logo.png" alt="neurons.me logo" width="89">

###### [neurons.me](https://neurons.me)
**MIT License.**
###### suiGn
