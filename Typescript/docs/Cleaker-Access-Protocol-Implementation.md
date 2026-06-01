# Cleaker Access Protocol - Implementation Reference

This document translates the high-level access protocol into implementation-facing decisions.

It is the practical companion to:

- [Cleaker-Access-Protocol.md](/Users/suign/Desktop/Neuroverse/neurons.me/this/GUI/npm/docs/Cleaker-Access-Protocol.md)
- [Semantic-Taxonomy.md](/Users/suign/Desktop/Neuroverse/neurons.me/this/GUI/npm/docs/Semantic-Taxonomy.md)

Its purpose is to answer:

- what should the client surface look like?
- which kernel paths are involved in each operation?
- what does Cleaker do internally?
- where do canonical identity, session state, and UI state get separated?

This is still a local-first reference.
It describes the contract that should exist before network-backed `monad.ai` resolution becomes part of the flow.

## Status

- protocol state: proposed
- implementation state: partial
- network dependency: intentionally deferred

## 1. Client Surface

The first client surface should be JavaScript-first.

This document uses `cleaker` as the interface name, but that does **not** imply the package already exists as `this.cleaker`.
It only describes the intended API shape.

```ts
interface CleakerAccessClient {
  requestAccess(input: AccessRequest): Promise<AccessResponse>;
  claim(input: ClaimRequest): Promise<ClaimResponse>;
  open(input: OpenRequest): Promise<OpenResponse>;
  logout(): Promise<LogoutResponse>;
  resolveSession(input?: ResolveSessionRequest): Promise<ResolveSessionResponse>;
}
```

### `requestAccess`

```ts
interface AccessRequest {
  appName: string;
  requestedScopes: string[];
  reason?: string;
  requirePin?: boolean;
}

interface AccessResponse {
  success: boolean;
  token?: string;
  expiresAt?: number;
  grantedScopes?: string[];
  error?: string;
}
```

Example:

```ts
const result = await cleaker.requestAccess({
  appName: 'fulltrailer',
  requestedScopes: [
    'identity.username',
    'keys.fulltrailer.password',
    'wallet.eth.read',
  ],
  reason: 'Sign in and unlock fleet credentials',
});
```

### `claim`

```ts
interface ClaimRequest {
  namespace: string;
  secret?: string;
  username?: string;
  email?: string;
  phone?: string;
}

interface ClaimResponse {
  success: boolean;
  namespace?: string;
  claimedAt?: number;
  error?: string;
}
```

### `open`

```ts
interface OpenRequest {
  namespace: string;
  secret: string;
}

interface OpenResponse {
  success: boolean;
  namespace?: string;
  openedAt?: number;
  error?: string;
}
```

### `logout`

```ts
interface LogoutResponse {
  success: boolean;
}
```

### `resolveSession`

```ts
interface ResolveSessionRequest {
  appName?: string;
}

interface ResolveSessionResponse {
  active: boolean;
  namespace?: string;
  username?: string;
  claimedAt?: number | null;
}
```

## 2. Kernel Path Mapping

The table below describes the kernel paths each operation should touch.

| Operation | Reads | Writes | Canonical write? | Notes |
| --- | --- | --- | --- | --- |
| `requestAccess` | `profile.*`, `auth.*`, `identity.session.*` | `runtime.cleaker.auth.*`, `ui.cleaker.*` | No by default | Access mediation, consent, and temporary token issue |
| `claim` | `identity.session.*`, `runtime.cleaker.namespace.*` | `profile.*`, `auth.claimed_at`, `identity.session.*`, `runtime.cleaker.*` | Yes | Onboarding / first claim |
| `open` | `profile.*`, `auth.*`, `runtime.cleaker.namespace.*` | `identity.session.*`, `runtime.cleaker.*` | Sometimes hydration only | Re-open existing namespace session |
| `logout` | `identity.session.*`, `runtime.cleaker.*`, `ui.cleaker.*` | `identity.session.*`, `runtime.cleaker.*`, `ui.cleaker.*` | No | Must not erase `profile.*` or `auth.*` |
| `resolveSession` | `identity.session.*`, `auth.claimed_at`, `profile.username` | none | No | Session introspection only |

## 3. Canonical vs Ephemeral Responsibilities

### Canonical

These paths belong to semantic identity and auth facts:

- `profile.username`
- `profile.name`
- `profile.avatar`
- `profile.bio`
- `profile.email`
- `auth.claimed_at`
- `auth.keys.*`

These should never be mutated casually from GUI or consumer apps.

### Session / Runtime

These paths belong to active operation:

- `identity.session.username`
- `identity.session.namespace`
- `identity.session.authenticated`
- `identity.session.identityHash`
- `identity.session.openedAt`
- `runtime.cleaker.auth.*`
- `runtime.cleaker.namespace.*`

### UI / Shared View

These paths belong to temporary experience state:

- `ui.cleaker.viewMode`
- `ui.cleaker.registerOpen`
- `ui.cleaker.settingsOpen`
- `ui.cleaker.avatarExpanded`
- `ui.cleaker.showSecret`

## 4. Operation Flows

## `requestAccess`

Goal:

- app asks for a subset of identity or credentials
- Cleaker mediates consent
- app gets a temporary access token, not arbitrary tree access

### Proposed flow

1. App calls `requestAccess(...)`
2. Cleaker validates requested scopes
3. Cleaker checks whether a session is already active
4. If no valid active session exists, Cleaker must block access or prompt for bind/open
5. Cleaker presents consent UI
6. If `requirePin !== false`, Cleaker asks for PIN or equivalent trust check
7. Cleaker generates a temporary session token
8. Cleaker returns only the granted scopes and token metadata

### Read paths

- `profile.username`
- `auth.claimed_at`
- `identity.session.namespace`
- `identity.session.authenticated`
- `identity.session.identityHash`
- `auth.keys.*` only internally, never directly exposed as a raw tree

### Runtime/UI write paths

Recommended operational writes:

- `runtime.cleaker.auth.status`
- `runtime.cleaker.auth.error`
- `runtime.cleaker.auth.progressMessage`
- `runtime.cleaker.auth.successMessage`
- `ui.cleaker.viewMode`

### Temporary token note

The token itself should be treated as runtime/session state, not canonical identity.

Recommended future location:

- `runtime.cleaker.access.tokens.<appName>.*`

This path family does not yet exist, but it is a good place to add it later without contaminating `profile.*` or `auth.*`.

## `claim`

Goal:

- create or claim a personal namespace
- hydrate canonical identity
- bind active session

### Canonical writes

- `profile.username`
- `profile.name`
- `profile.email`
- `profile.phone`
- `auth.claimed_at`

### Session/runtime writes

- `identity.session.username`
- `identity.session.namespace`
- `identity.session.authenticated`
- `identity.session.identityHash`
- `identity.session.openedAt`
- `ui.cleaker.viewMode = 'profile'`

### Important rule

Claim creates meaning.
It is one of the few operations that should legitimately use canonical writes.

## `open`

Goal:

- reopen an existing claimed namespace on the current device/runtime

### Reads

- `runtime.cleaker.namespace.*`
- `auth.claimed_at`
- `profile.username`

### Writes

- `identity.session.username`
- `identity.session.namespace`
- `identity.session.authenticated`
- `identity.session.identityHash`
- `identity.session.openedAt`
- `ui.cleaker.viewMode = 'profile'`

### Canonical behavior

`open` should prefer hydration or confirmation of canonical state, not blind overwrites.

## `logout`

Goal:

- close the active session
- preserve canonical identity

### Required cleanup

- `identity.session.*`
- `runtime.cleaker.*`
- `ui.cleaker.*`

### Must never erase

- `profile.*`
- `auth.*`

### Canonical meaning of logout

Logout means:

- the user is no longer operating here

Logout does **not** mean:

- the identity never existed
- the claim is revoked
- the profile is erased

## `resolveSession`

Goal:

- tell an app whether there is an active local session it can rely on

### Reads

- `identity.session.username`
- `identity.session.namespace`
- `identity.session.authenticated`
- `profile.username`
- `auth.claimed_at`

### No writes

This operation should be read-only.

## 5. Scope Evaluation Rules

Requested scopes should not map 1:1 to raw kernel paths without mediation.

Recommended examples:

- `identity.username`
  - resolves to `profile.username`
- `profile.name`
  - resolves to `profile.name`
- `keys.fulltrailer.password`
  - resolves internally to a namespaced secret fact under `auth.keys.*`
- `wallet.eth.read`
  - resolves to a wallet capability, not necessarily a single raw path

### Rule of thumb

- consumer asks for a semantic capability
- Cleaker decides which internal path or secret satisfies it

That keeps the external API stable even if internal kernel structure evolves.

## 6. Security Rules

- no app may write `profile.*` or `auth.*` directly
- no app should receive unrestricted tree access
- consent must be explicit
- PIN should be required by default
- access tokens must be short-lived
- logout must invalidate all temporary app access tokens

## 7. Error Model

Every operation should return stable error categories.

Recommended categories:

- `NO_ACTIVE_SESSION`
- `CLAIM_REQUIRED`
- `PIN_REQUIRED`
- `PIN_REJECTED`
- `SCOPE_DENIED`
- `SCOPE_UNKNOWN`
- `TOKEN_EXPIRED`
- `NAMESPACE_UNAVAILABLE`
- `NETWORK_UNAVAILABLE`
- `INTERNAL_ERROR`

Example:

```ts
{
  success: false,
  error: 'PIN_REQUIRED'
}
```

## 8. Suggested Internal Helpers

The implementation will likely want helpers shaped like:

```ts
function requestAccess(input: AccessRequest): Promise<AccessResponse>;
function validateScopes(scopes: string[]): string[];
function ensureActiveSession(): boolean;
function promptForConsent(input: AccessRequest): Promise<boolean>;
function promptForPin(): Promise<boolean>;
function issueAccessToken(appName: string, scopes: string[]): { token: string; expiresAt: number };
function clearAccessTokens(): void;
```

These helpers do not need to be public.

## 9. Relationship To Current Cleaker

Today Cleaker already knows how to:

- claim
- open
- logout
- project canonical identity into the kernel
- switch the shell between login/profile/settings

What is missing is the app-facing access layer above that.

This document is the bridge between:

- current identity shell behavior
- future external app integration

## 10. Recommended Next Implementation Step

Do not jump to network yet.

The next correct code step is:

1. add an internal `requestAccess(...)` shape to Cleaker
2. define its runtime token storage
3. define scope validation
4. surface consent state in `ui.cleaker.*` and `runtime.cleaker.auth.*`

Only after that should `monad.ai` become the live source for claim/open/session truth.
