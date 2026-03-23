# Runtime Contract
This document defines how `this.GUI` connects routes, runtime expressions, and security policy.

## 1. Mapping URLs to Identity
`Router` supports exact routes, dynamic params (`:id`), and wildcards (`*`).
Resolved params are injected into `ctx.params`.

```ts
import { Router } from 'this.gui';
const router = new Router({ runtime });

router.set('/dashboard', () => ({ 
  type: 'Page', 
  props: { title: 'Dashboard' } }));

router.set('/shops/:id', ({ ctx }) => ({
  type: 'Page',
  props: {
    title: { $expr: 'me/views/shops[{{params.id}}].name' },
    subtitle: `shop id=${ctx.params.id}`,
  },
}));

router.set('/docs/*', ({ ctx }) => ({
  type: 'Page',
  props: { title: `docs/${ctx.wildcard}` },
}));
```

Behavior:
- Exact routes win over dynamic routes.
- Dynamic routes are ranked by specificity (more static segments wins).
- Params are decoded safely (`decodeURIComponent` fallback if malformed).

## 2. The Power of Read/Write Tokens
`this.GUI` resolves dynamic props in the runtime renderer:

- `{ read: "..." }` for reads
- `{ write: "..." }` for mutations/events
- Legacy compatibility: `{ $expr: "..." }` and `{ $action: "..." }`

```json
{
  "type": "Button",
  "props": {
    "label": { "read": "me/public/profile/name" },
    "onClick": { "write": "me/public/profile/status = 'active'" }
  }
}
```

Interpolation is supported in both tokens:

- `{{params.id}}`
- `{{ctx.params.id}}`
- `{{wildcard}}`

Example:

```json
{
  "type": "Typography",
  "props": {
    "children": { "read": "me/views/shops[{{params.id}}].price" }
  }
}
```

If interpolation fails, placeholder is preserved (visible debug) and a warning is emitted in dev.

## 3. Security Policy (`deny-by-default`)

By default, expression execution is allowlisted to:

- `me/views/`
- `me/public/`

Anything outside allowlist is blocked in the renderer.

### Extend allowed roots

```ts
GUI.mount(spec, '#root', {
  runtime,
  allowedExprRoots: ['me/views/', 'me/public/', 'me/app/'],
});
```

### Unsafe override (not recommended)

```ts
GUI.mount(spec, '#root', {
  runtime,
  unsafeAllowAllExpressions: true,
});
```

Use only in trusted internal environments.

## 4. Minimal End-to-End Wiring

```ts
const router = new Router({ runtime });

router.onChange((spec, meta) => {
  GUI.mount(spec, '#root', {
    runtime,
    ctx: meta.ctx,
    showUnknown: true,
  });
});

router.navigate(window.location.pathname || '/dashboard', { push: false });
```

This gives you:
- deterministic navigation
- semantic rendering
- secure expression boundaries
