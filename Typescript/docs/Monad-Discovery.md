# Monad Discovery

GUI treats monads as a live topology. NetGet is now a primary discovery source, while direct port probing remains a fallback for older or partially configured local environments.

Discovery sources:

- NetGet registry: `GET /apps`, filtered to `kind: "monad"` or monad tags/names.
- Monad surfaces: `GET /__surface` on known endpoints.
- Monad control: `GET /__monads` on live surfaces.
- Mesh registry: `GET /.mesh/monads` on live surfaces.

The discovery store keeps a semantic fingerprint so UI code does not remount when only volatile fields change.

Focused build guard:

```bash
npm run test:runtime
```

`npm run build` runs this guard through `prebuild`.
