# Semantic Taxonomy

This document defines the agreed path conventions for `.me + GUI + Cleaker`.

Its purpose is simple:

- keep agreed meaning consistent across the stack
- keep runtime state operational
- keep UI state ephemeral
- avoid contaminating namespaces with view logic

## Important: `.me` Has No Schema

[`.me`](https://neurons-me.github.io/.me/) is a schema-free kernel. It accepts any path:

```ts
me('suign', 'secret')
me.whatever.you.want = 'yes'        // perfectly valid
me.foo.bar.baz.deeply.nested = 42   // also valid
```

This document does **not** define what [`.me`](https://neurons-me.github.io/.me/) enforces — it defines what **this stack** ([monad](https://neurons-me.github.io/monad/) + [this.gui](https://neurons-me.github.io/GUI/) + [cleaker](https://neurons-me.github.io/Cleaker/)) has agreed to write and read, so components can find data where they expect it.

## Core Rule

The namespace owns meaning.

- Some paths are **agreed as source-of-truth** — written by monad at registration, read back by GUI and cleaker
- Other paths are **local/ephemeral** — written and read only within a session or component
- GUI should not write agreed source-of-truth paths accidentally

## Path Categories

| Prefix | Written by | Purpose | Lifetime | Examples |
| --- | --- | --- | --- | --- |
| `me.*` | monad at registration | Agreed identity paths — username, name, contact | Persistent | `me.username`, `me.name`, `me.email.primary`, `me.phone.primary` |
| `auth.*` | monad at claim | Claim facts — timestamps, keys | Persistent | `auth.claimed_at`, `auth.keys` |
| `identity.session.*` | GUI during login/logout | Who is currently operating and under which namespace | Ephemeral | `identity.session.username`, `identity.session.namespace`, `identity.session.authenticated`, `identity.session.identityHash` |
| `runtime.cleaker.*` | GUI during runtime | Host, resolver, origin, active transport | Ephemeral | `runtime.cleaker.namespace.activeUrl`, `runtime.cleaker.namespace.expression`, `runtime.cleaker.namespace.previewQrValue` |
| `runtime.mesh.*` | GUI during mesh scan | Surface discovery, pairing tokens, mesh state | Ephemeral | `runtime.mesh.surfaces`, `runtime.mesh.pairing.tokens`, `runtime.mesh.pairing.currentExpression` |
| `ui.cleaker.*` | GUI components | Visual or temporary state shared across components | Ephemeral | `ui.cleaker.modalOpen`, `ui.cleaker.viewMode`, `ui.cleaker.loading` |

## Legacy Paths

`profile.*` paths (`profile.username`, `profile.name`, `profile.email`, `profile.phone`) are **deprecated**.
GUI reads them as a fallback for kernels that predate the `me.*` migration, but all new writes go to `me.*`.
Do not write to `profile.*` in new code.

## Naming Rules

- `me.*` is canonical identity — written by monad, read-only from GUI unless `allowCanonicalWrite: true`.
- `identity.session.*` is the active personal binding — written only during login/logout/session transitions.
- `runtime.*` is the technical environment — freely writable from GUI.
- `auth.*` stores facts, not UI booleans.

### The Critical Split

- `identity.session.username` = the user currently operating
- `identity.session.namespace` = the personal namespace currently bound
- `runtime.cleaker.namespace.*` = the current host/origin/expression context
- `runtime.mesh.*` = the live mesh surface topology

In short:

- `me.*` = "who is this user?" (canonical, persistent)
- `identity.session.*` = "who am I right now?" (ephemeral binding)
- `runtime.cleaker.*` = "where am I running right now?"
- `runtime.mesh.*` = "what surfaces are reachable right now?"

## Write Rules

- GUI must not write `me.*` or `auth.*` unless the caller explicitly opts in.
- Canonical writes require `allowCanonicalWrite: true`.
- `runtime.*` and `ui.cleaker.*` are freely writable from GUI.
- `identity.session.*` should only be written during binding, login, logout, or session transitions.
- Do not write to deprecated `profile.*` paths.

## Read Rules

- Identity surfaces should read from `me.*` and `auth.*`.
- Session-aware surfaces may also read from `identity.session.*`.
- Host/runtime displays should read from `runtime.cleaker.*`.
- Mesh/surface displays should read from `runtime.mesh.*`.
- Shared visual logic should read from `ui.cleaker.*`.

## Snapshot Guidance

- `me.*` and `auth.*` may be exported as semantic state.
- `identity.session.*`, `runtime.*`, and `ui.cleaker.*` should be treated as ephemeral.

## Correct Examples

```ts
// Written by monad at claim time
me['me.username'] = 'jabellae';
me['me.email.primary'] = 'sui@neurons.me';
me['auth.claimed_at'] = 1744300000000;

// Written by GUI during session
writeMeValue(me, 'identity.session.username', 'jabellae');
writeMeValue(me, 'identity.session.namespace', 'jabellae.cleaker.me');
writeMeValue(me, 'runtime.cleaker.namespace.activeUrl', 'http://jabellae.localhost:8161');
writeMeValue(me, 'runtime.mesh.surfaces', {});
writeMeValue(me, 'ui.cleaker.viewMode', 'settings');
```

## Incorrect Examples

```ts
// Don't write profile.* — deprecated
writeMeValue(me, 'profile.username', 'jabellae');  // ❌ use me.username

// Don't put runtime/UI data in canonical paths
me['me.modalOpen'] = true;      // ❌
me['me.viewMode'] = 'profile';  // ❌
me['auth.loading'] = true;      // ❌
```

## Practical Test

If a field answers one of these questions:

- "Who is this user?" → `me.*`
- "What auth fact exists?" → `auth.*`
- "Who is currently bound in this runtime?" → `identity.session.*`
- "What host/origin/runtime is active?" → `runtime.cleaker.*`
- "What mesh surfaces are reachable?" → `runtime.mesh.*`
- "What is the UI doing right now?" → `ui.cleaker.*`

then it belongs in exactly one layer.

---

<div class="stack-grid" data-show=".me,monad,cleaker,GUI"></div>

<script>
(function() {
  const ALL = {
    '.me':    { label: '.me',      icon: '🧬', url: 'https://neurons-me.github.io/.me/',      desc: 'Schema-free sovereign kernel. Identity and memory root.' },
    'monad':  { label: 'monad',    icon: '⚡', url: 'https://neurons-me.github.io/monad/',    desc: 'HTTP daemon. Runs the mesh. Exposes namespace over HTTP.' },
    'cleaker':{ label: 'cleaker',  icon: '🔑', url: 'https://neurons-me.github.io/Cleaker/',  desc: 'Namespace resolver. Projects .me into a surface.' },
    'GUI':    { label: 'this.gui', icon: '🎨', url: 'https://neurons-me.github.io/GUI/',      desc: 'React component library. Renders the surface.' },
    'netget': { label: 'netget',   icon: '🌐', url: 'https://neurons-me.github.io/netget/',   desc: 'Gateway. Routes hostnames to monads.' },
  };
  function render() { if (typeof document === "undefined") return;
    const el = document.querySelector('.stack-grid');
    if (!el) return;
    const keys = (el.dataset.show || '').split(',').map(s => s.trim()).filter(Boolean);
    const css = `
      .stack-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;margin-top:8px}
      .stack-grid a{display:flex;flex-direction:column;gap:6px;padding:14px 16px;border-radius:10px;border:1px solid rgba(128,128,128,0.2);text-decoration:none;color:inherit;transition:border-color 120ms,transform 120ms}
      .stack-grid a:hover{border-color:#0f6a78;transform:translateY(-1px)}
      .stack-grid .sg-icon{font-size:1.3rem}
      .stack-grid .sg-label{font-weight:700;font-size:0.95rem}
      .stack-grid .sg-desc{font-size:0.8rem;opacity:0.65;line-height:1.4}
    `;
    if (!document.getElementById('sg-style')) {
      const s = document.createElement('style'); s.id = 'sg-style'; s.textContent = css;
      document.head.appendChild(s);
    }
    el.innerHTML = keys.map(k => {
      const p = ALL[k]; if (!p) return '';
      return `<a href="${p.url}"><span class="sg-icon">${p.icon}</span><span class="sg-label">${p.label}</span><span class="sg-desc">${p.desc}</span></a>`;
    }).join('');
  }
  if (typeof document !== "undefined" && document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
</script>

<footer style="margin-top:56px;padding:24px 0;text-align:center;border-top:1px solid rgba(128,128,128,0.15);">
  <a href="https://neurons.me" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;opacity:0.45;transition:opacity 120ms;" onmouseover="this.style.opacity=0.9" onmouseout="this.style.opacity=0.45">
    <img src="https://res.cloudinary.com/dkwnxf6gm/image/upload/v1760629056/neurons-grey_hxjcom.png" alt="neurons.me" style="width:24px;height:24px;object-fit:contain;" />
    <span style="font-size:0.8rem;font-weight:600;color:inherit;letter-spacing:0.04em;">neurons.me</span>
  </a>
</footer>
