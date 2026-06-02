# Semantic Taxonomy

This document defines the official path taxonomy for `.me + GUI + Cleaker`.

Its purpose is simple:

- keep canonical meaning clean
- keep runtime state operational
- keep UI state ephemeral
- avoid contaminating namespaces with view logic

## Core Rule

The namespace owns meaning.

- `me.*` and `auth.*` are canonical — written by monad on claim/registration
- `identity.session.*`, `runtime.*`, and `ui.cleaker.*` are local/ephemeral
- GUI must not write canonical paths accidentally

## Path Categories

| Prefix | Category | Purpose | Canonical | Examples |
| --- | --- | --- | --- | --- |
| `me.*` | Canonical identity | Public, persistent user identity written at claim time | Yes | `me.username`, `me.name`, `me.email.primary`, `me.phone.primary` |
| `auth.*` | Canonical auth facts | Claim and key facts that can be resolved by a namespace | Yes | `auth.claimed_at`, `auth.keys` |
| `identity.session.*` | Active session binding | Who is currently operating and under which personal namespace | No | `identity.session.username`, `identity.session.namespace`, `identity.session.authenticated`, `identity.session.identityHash`, `identity.session.openedAt` |
| `runtime.cleaker.*` | Namespace runtime | Host, resolver, origin, network state, active transport | No | `runtime.cleaker.namespace.activeUrl`, `runtime.cleaker.namespace.expression`, `runtime.cleaker.namespace.previewQrValue` |
| `runtime.mesh.*` | Mesh runtime | Surface discovery, pairing tokens, active mesh state | No | `runtime.mesh.surfaces`, `runtime.mesh.pairing.tokens`, `runtime.mesh.pairing.currentExpression` |
| `ui.cleaker.*` | Shared UI state | Visual or temporary state shared across components | No | `ui.cleaker.modalOpen`, `ui.cleaker.viewMode`, `ui.cleaker.loading`, `ui.cleaker.error` |

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
