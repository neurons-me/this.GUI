# Cleaker Access Protocol v0.1

This document defines the external access contract for apps that want to use Cleaker as a sovereign identity and key manager.

Its purpose is to answer one question cleanly:

- how does an external app ask Cleaker for identity, session, or key access without bypassing the kernel contract?

This protocol sits on top of the path taxonomy in [Semantic-Taxonomy.md](/Users/suign/Desktop/Neuroverse/neurons.me/this/GUI/npm/docs/Semantic-Taxonomy.md).

## Core Model

- Cleaker is the identity and key manager.
- External apps do not read `profile.*` or `auth.keys.*` directly.
- External apps ask Cleaker for scoped access.
- Cleaker mediates consent, session, and temporary credentials.
- The kernel remains the source of truth for local state and projection.

## Design Goals

- keep identity sovereign
- keep app access explicit and scoped
- keep canonical meaning separate from runtime/session/UI
- support local app integration first, network integration second
- preserve explainability and traceability

## Trust Boundaries

### Canonical

These paths represent semantic identity and auth facts:

- `profile.*`
- `auth.*`

External apps must never write these directly.

### Session / Runtime

These paths represent local binding and operation:

- `identity.session.*`
- `runtime.cleaker.*`
- `ui.cleaker.*`

These are the paths Cleaker may mutate while brokering access.

## Access Philosophy

External apps do not ask for arbitrary tree access.

They ask for:

- identity facts
- namespace/session state
- named keys or capabilities
- temporary session access tokens

The user must explicitly approve sensitive access, typically with a PIN or equivalent device trust gate.

## Proposed Transport Order

### Phase 1: JavaScript-first

The first implementation should be a local/runtime-facing API.

Example shape:

```ts
const result = await cleaker.requestAccess({
  appName: 'fulltrailer',
  requestedScopes: [
    'identity.username',
    'keys.fulltrailer.password',
    'wallet.eth.read',
  ],
  reason: 'Sign in and unlock app credentials',
});
```

This does **not** require the public package name to already be `this.cleaker`.
It is only the protocol shape.

### Phase 2: HTTP / remote mediation

Once the local contract is stable, the same operations can be exposed over HTTP or daemon transport for browser-only or remote clients.

## Operations

### `requestAccess`

Primary operation. An app asks Cleaker for scoped access.

#### Input

```ts
interface AccessRequest {
  appName: string;
  requestedScopes: string[];
  reason?: string;
  requirePin?: boolean;
}
```

#### Output

```ts
interface AccessResponse {
  success: boolean;
  token?: string;
  expiresAt?: number;
  grantedScopes?: string[];
  error?: string;
}
```

#### Flow

1. App requests scopes.
2. Cleaker presents consent UI.
3. User approves or denies.
4. If approval requires verification, Cleaker asks for PIN or equivalent.
5. Cleaker returns a temporary access token and granted scopes.

#### Kernel Effects

Likely runtime/session effects:

- `runtime.cleaker.auth.status`
- `runtime.cleaker.auth.error`
- `identity.session.*`
- `ui.cleaker.*`

Canonical paths remain source-of-truth inputs, not arbitrary write targets.

### `claim`

Register or claim a new namespace.

#### Input

```ts
interface ClaimRequest {
  namespace: string;
  secret?: string;
  username?: string;
  email?: string;
  phone?: string;
}
```

#### Output

```ts
interface ClaimResponse {
  success: boolean;
  namespace?: string;
  claimedAt?: number;
  error?: string;
}
```

#### Canonical Effects

- `profile.username`
- `profile.name`
- `profile.email`
- `profile.phone`
- `auth.claimed_at`

#### Session Effects

- `identity.session.username`
- `identity.session.namespace`
- `identity.session.authenticated`
- `identity.session.identityHash`
- `identity.session.openedAt`

### `open`

Open an existing claimed namespace/session.

#### Input

```ts
interface OpenRequest {
  namespace: string;
  secret: string;
}
```

#### Output

```ts
interface OpenResponse {
  success: boolean;
  namespace?: string;
  openedAt?: number;
  error?: string;
}
```

#### Effects

Canonical data may be hydrated from the namespace.

Session/runtime paths become active:

- `identity.session.username`
- `identity.session.namespace`
- `identity.session.authenticated`
- `identity.session.identityHash`
- `identity.session.openedAt`

### `logout`

Close the active local session without destroying canonical identity.

#### Input

No input required.

#### Output

```ts
interface LogoutResponse {
  success: boolean;
}
```

#### Effects

Must clear ephemeral state only:

- `identity.session.*`
- `runtime.cleaker.*`
- `ui.cleaker.*`

Must **not** erase canonical identity:

- `profile.*`
- `auth.*`

### `resolveSession`

Check whether a valid local session is active and what namespace it is bound to.

#### Input

```ts
interface ResolveSessionRequest {
  appName?: string;
}
```

#### Output

```ts
interface ResolveSessionResponse {
  active: boolean;
  namespace?: string;
  username?: string;
  claimedAt?: number | null;
}
```

## Scope Model

Scopes should be medium-to-high granularity.

Examples:

- `identity.username`
- `profile.name`
- `keys.fulltrailer.*`
- `keys.fulltrailer.password`
- `wallet.eth.read`
- `wallet.eth.write`

Recommended rule:

- prefer explicit prefixes and namespaced domains
- avoid broad root-level wildcard access unless the user explicitly consents

## Consent Rules

- sensitive access should require explicit user confirmation
- PIN should be required by default
- device trust or “remember this device” may exist later, but only as a bounded session optimization

Recommended default:

- `requirePin = true`

## Relationship To The Kernel

Cleaker is not replacing `.me`.
Cleaker is brokering access around the kernel.

The kernel remains responsible for:

- canonical identity projection
- session binding
- runtime state
- explainability

The protocol only defines how an app asks for access and how Cleaker responds.

## Relationship To `monad.ai`

This protocol is intentionally local-first.

It should be frozen before coupling to live network resolution.
Once stable:

- `monad.ai` can provide claim/open/session truth
- Cleaker can hydrate canonical paths from network truth
- the same access protocol can remain stable above that layer

## Non-Goals For v0.1

- full HTTP API design
- token cryptography details
- long-term refresh token model
- multi-device trust federation
- complete permission UI system

## Immediate Next Step

Implement a local contract first:

- define the client surface shape
- define how Cleaker maps each operation onto kernel paths
- define how temporary access tokens are represented in runtime/session state

Only after that should network-backed claim/open move into the same contract.
