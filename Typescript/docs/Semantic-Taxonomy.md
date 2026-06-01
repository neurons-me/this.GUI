# Semantic Taxonomy

This document defines the official path taxonomy for `.me + GUI + Cleaker`.

Its purpose is simple:

- keep canonical meaning clean
- keep runtime state operational
- keep UI state ephemeral
- avoid contaminating namespaces with view logic

## Core Rule

The namespace owns meaning.

- `profile.*` and `auth.*` are canonical
- `identity.session.*`, `runtime.cleaker.*`, and `ui.cleaker.*` are local
- GUI must not write canonical paths accidentally

## Path Categories

| Prefix | Category | Purpose | Canonical | Examples |
| --- | --- | --- | --- | --- |
| `profile.*` | Canonical identity | Public, persistent user identity | Yes | `profile.username`, `profile.avatar`, `profile.bio`, `profile.email` |
| `auth.*` | Canonical auth facts | Claim and key facts that can be resolved by a namespace | Yes | `auth.claimed_at`, `auth.keys` |
| `identity.session.*` | Active session binding | Who is currently operating and under which personal namespace | No | `identity.session.username`, `identity.session.namespace`, `identity.session.authenticated`, `identity.session.identityHash`, `identity.session.openedAt` |
| `runtime.cleaker.*` | Operational runtime | Host, resolver, origin, network state, active transport | No | `runtime.cleaker.namespace.activeUrl`, `runtime.cleaker.namespace.previewQrValue`, `runtime.cleaker.auth.status` |
| `ui.cleaker.*` | Shared UI state | Visual or temporary state that may be shared across components | No | `ui.cleaker.modalOpen`, `ui.cleaker.viewMode`, `ui.cleaker.loading`, `ui.cleaker.error` |

## Naming Rules

- `identity.session.*` is the active personal binding.
- `runtime.cleaker.*` is the technical environment.
- `profile.*` must never hold host, device, modal, or view data.
- `auth.*` should store facts, not UI booleans.

### Meaning Of The Critical Split

- `identity.session.username` = the user currently operating
- `identity.session.namespace` = the personal namespace currently bound
- `runtime.cleaker.namespace.*` = the current host/origin/expression context

In short:

- `identity.session.*` = "who am I right now?"
- `runtime.cleaker.*` = "where am I running right now?"

## Write Rules

- GUI must not write `profile.*` or `auth.*` unless the caller explicitly opts in.
- Canonical writes require `allowCanonicalWrite: true`.
- `runtime.cleaker.*` and `ui.cleaker.*` are freely writable from GUI.
- `identity.session.*` should only be written during binding, login, logout, or session transitions.

## Read Rules

- Identity surfaces should read from `profile.*` and `auth.*`.
- Session-aware surfaces may also read from `identity.session.*`.
- Host/runtime displays should read from `runtime.cleaker.*`.
- Shared visual logic should read from `ui.cleaker.*`.

## Snapshot Guidance

- `profile.*` and `auth.*` may be exported as semantic state.
- `identity.session.*`, `runtime.cleaker.*`, and `ui.cleaker.*` should be treated as ephemeral unless there is a specific reason to persist them.

## Correct Examples

```ts
me.profile.username = 'jabellae';
me.auth.claimed_at = 1744300000000;
me.identity.session.username = 'jabellae';
me.identity.session.namespace = 'jabellae.cleaker.me';
me.runtime.cleaker.namespace.activeUrl = 'http://jabellae.localhost:8161';
me.ui.cleaker.modalOpen = true;
```

## Incorrect Examples

```ts
me.profile.modalOpen = true;
me.profile.viewMode = 'profile';
me.profile.rootHash = '0x...';
me.profile.namespace = 'suimacbook-air.local';
me.auth.loading = true;
```

## Practical Test

If a field answers one of these questions:

- "Who is this user?" -> `profile.*`
- "What auth fact exists?" -> `auth.*`
- "Who is currently bound in this runtime?" -> `identity.session.*`
- "What host/origin/runtime is active?" -> `runtime.cleaker.*`
- "What is the UI doing right now?" -> `ui.cleaker.*`

then it belongs in exactly one layer.
