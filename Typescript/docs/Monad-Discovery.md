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

<footer style="margin-top:56px;padding:24px 0;text-align:center;border-top:1px solid rgba(128,128,128,0.15);">
  <a href="https://neurons.me" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;opacity:0.45;transition:opacity 120ms;" onmouseover="this.style.opacity=0.9" onmouseout="this.style.opacity=0.45">
    <img src="https://res.cloudinary.com/dkwnxf6gm/image/upload/v1760629064/neurons.me_b50f6a.png" alt="neurons.me" style="width:24px;height:24px;object-fit:contain;filter:grayscale(1);" />
    <span style="font-size:0.8rem;font-weight:600;color:inherit;letter-spacing:0.04em;">neurons.me</span>
  </a>
</footer>
