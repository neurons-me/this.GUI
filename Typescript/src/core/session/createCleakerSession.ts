// createCleakerSession.ts — the SeedSession shape, backed by cleaker's own
// bindKernel() (cleaker(me, {...})) instead of monadClient.ts's bare REST
// calls. Exists ALONGSIDE createSeedSession.ts, not replacing it (see
// SeedSessionProvider.tsx's pluggable backend) — this is what actually
// "mounts you onto the .me kernel" rather than just validating a secret
// against the server: it constructs a real kernel (ME(username, secret)),
// binds it to a namespace (ME.bindNamespace), and lets cleaker's own
// claim/signIn send a REAL signed proof (me['!'].prove()) alongside the
// secret. monadClient.ts's claimNamespace()/openNamespace() send only
// { secret, identityHash } — the server accepts an unverified, self-asserted
// identityHash whenever no proof is present (confirmed live: claim/records.ts's
// resolveClaimIdentity()). cleaker's claim path closes that gap.
import ME, {
  deriveBranchProofSeed,
  importEd25519SigningKey,
  signEd25519Proof,
} from 'this.me';
import cleaker from 'cleaker';
import type { CleakerNode, MeKernel } from 'cleaker';
import type { RuntimeAdapter } from '@/runtime/adapter';
import { createMeRuntime, readMeValue } from '@/runtime/run-me';
import type { MeLike } from '@/react/types';
import { deriveCompoundSeed } from '@/gui/All.This/Cleaker/signedRequest';
import {
  DEFAULT_MONAD_TRANSPORT_ORIGIN,
  MonadClientError,
  createMonadClient,
  normalizeMonadSemanticNamespace,
  normalizeMonadTransportOrigin,
  type MonadClaimResult,
  type MonadClient,
  type MonadClientOptions,
  type MonadOpenResult,
  type MonadTarget,
  type MonadWriteResult,
} from './monadClient';
import {
  SeedSessionError,
  writeLocalSessionState,
  type SeedSession,
  type SeedSessionWriteOptions,
} from './createSeedSession';

export type CleakerSessionOptions = MonadClientOptions & {
  username: string;
  password: string;
  /** Root namespace to bind into, e.g. "local.cleaker" or "cleaker.me". */
  namespace: string;
  runtime?: RuntimeAdapter | null;
};

// bindKernel's claim()/signIn() throw plain `Error(CODE)` strings (see
// binder.ts — e.g. "PROOF_INVALID", "CLAIM_NOT_FOUND", "NAMESPACE_TAKEN").
// Re-thrown here as MonadClientError so SeedSessionProvider.tsx's existing
// catch block (already handles IDENTITY_MISMATCH/CLAIM_VERIFICATION_FAILED
// → a clean "Invalid Claim" message) keeps working unmodified regardless of
// which session backend produced the error — no parallel error-code enum.
function toMonadClientError(
  cause: unknown,
  operation: 'claim' | 'open',
  semanticNamespace: string,
  transportOrigin: string,
): MonadClientError<string> {
  const code = cause instanceof Error ? cause.message : String(cause);
  return new MonadClientError<string>({
    code: code || 'UNKNOWN_ERROR',
    status: 0,
    operation,
    semanticNamespace,
    transportOrigin,
    cause,
  });
}

// CleakerNode's OpenNodeResult only carries a memoriesCount, not the actual
// memories array (bindKernel already hydrates them straight into the kernel
// as part of claim()/signIn() — confirmed live, see modules/cleaker's own
// bind.test.ts). So `memories: []` here is a real, deliberate difference
// from monadClient's shape, not a bug: nothing needs to replay them a
// second time the way createSeedSession.ts's open() does for the REST path.
function toMonadOpenResult(result: { namespace: string; identityHash: string; noise: string; openedAt: number }): MonadOpenResult {
  const target: MonadTarget = {
    namespace: { me: result.namespace, host: result.namespace },
    operation: 'open',
    path: result.namespace,
    nrp: `me://kernel:open/${result.namespace}`,
  };
  return {
    ok: true,
    target,
    namespace: result.namespace,
    identityHash: result.identityHash,
    noise: result.noise,
    memories: [],
    openedAt: result.openedAt,
    verified: true,
    identity: null,
    policy: null,
    audit: null,
    reason: null,
    reasonCode: null,
  };
}

function toMonadClaimResult(result: { namespace: string; identityHash: string; openedAt: number }): MonadClaimResult {
  const target: MonadTarget = {
    namespace: { me: result.namespace, host: result.namespace },
    operation: 'claim',
    path: result.namespace,
    nrp: `me://kernel:claim/${result.namespace}`,
  };
  return {
    ok: true,
    target,
    namespace: result.namespace,
    identityHash: result.identityHash,
    publicKey: null,
    createdAt: result.openedAt,
    persistentClaim: null,
  };
}

export function createCleakerSession(options: CleakerSessionOptions): SeedSession {
  const username = String(options.username || '').trim();
  const password = String(options.password || '');
  const rootNamespace = String(options.namespace || '').trim();

  if (!username) throw new SeedSessionError('SEED_REQUIRED', 'Username is required to create a cleaker session.');
  if (!rootNamespace) throw new SeedSessionError('NAMESPACE_REQUIRED', 'A root namespace is required to create a cleaker session.');

  // The 2-arg constructor both derives the compound seed AND sets
  // #activeExpression — required for prove()/bindNamespace() to work at
  // all (confirmed live: the 1-arg seed-string form createSeedSession.ts
  // uses never sets it, and prove() throws ACTIVE_EXPRESSION_REQUIRED
  // without it).
  // Same `as any` cast signedRequest.ts already uses for this exact import —
  // this package's 'this.me' default export is typed as the factory
  // function (ThisMeInput-based), not the raw ME class's own constructor
  // overloads, so TS doesn't see the 2-arg (who, secret) form without it.
  const me = (new (ME as any)(username, password) as unknown as MeLike & {
    bindNamespace: (root: string) => unknown;
  });
  me.bindNamespace(rootNamespace);

  // The secret sent over the wire must be the SAME derived value the REST
  // path already uses (deriveCompoundSeed(username, password)), not the raw
  // password — this is what every existing claim (including real,
  // already-claimed namespaces) was created with. Passing the raw password
  // instead would silently fail to decrypt any existing claim's noise.
  const secretForWire = deriveCompoundSeed(username, password);

  const runtime = options.runtime || createMeRuntime(me);
  const monad = createMonadClient(options);
  const transportOrigin = normalizeMonadTransportOrigin(
    options.transportOrigin || DEFAULT_MONAD_TRANSPORT_ORIGIN,
  );

  // Deliberately NOT passing `space` here. bindKernel's own origin
  // resolution (resolveSurfaceOrigins) only knows how to derive a
  // connection origin from a few fixed space shapes (public domain, bare
  // hostname+.local+port, IP) — it has no concept of netget's /apps/:name
  // mesh-proxy path (confirmed live: passing space: 'local.cleaker' tried
  // connecting to https://local.cleaker directly and got a real 405, the
  // same failure this session already diagnosed once for a raw POST to
  // local.cleaker's admin block outside /apps/netget). `bootstrap` is
  // cleaker's actual mechanism for "here is the exact origin to use" — the
  // namespace STRING (not the connection target) still resolves correctly
  // without `space` here because bindNamespace() already wrote it onto the
  // kernel, and resolveSurfaceNamespaceConstant()'s new fallback (Stage 2)
  // reads it from there.
  //
  // Also deliberately NOT passing `secret` here. bindKernel's "Triad
  // auto-open" fires a background signIn() the instant options.secret is
  // truthy (binder.ts: `if (options.secret) { _ready = signIn({namespace:
  // explicitNamespace, ...}) }`) — and explicitNamespace resolves from the
  // kernel's own bound root (Stage 2's fallback) even with no explicit
  // `namespace` passed here, so this fires for real. That races the
  // claim()/open() calls below, which already pass `secret` per-call
  // (confirmed live: two concurrent claim attempts for the same brand-new
  // namespace, one racing to NAMESPACE_TAKEN and cascading through every
  // origin fallback down to a real CORS-blocked cleaker.me request).
  const node: CleakerNode = cleaker(me as unknown as MeKernel, {
    bootstrap: [transportOrigin],
    fetcher: options.fetchImpl,
  });

  let activeNamespace: string | null = null;
  let identityHash = '';

  const claim = async (namespace: string): Promise<MonadClaimResult> => {
    const semanticNamespace = normalizeMonadSemanticNamespace(String(namespace || '').trim());
    if (!semanticNamespace) {
      throw new SeedSessionError('NAMESPACE_REQUIRED', 'Namespace is required for claim.');
    }

    try {
      const result = await node.claim({ namespace: semanticNamespace, secret: secretForWire });
      activeNamespace = result.namespace;
      identityHash = result.identityHash;
      writeLocalSessionState(me, runtime, activeNamespace, true, identityHash, result.openedAt);
      return toMonadClaimResult(result);
    } catch (cause) {
      throw toMonadClientError(cause, 'claim', semanticNamespace, transportOrigin);
    }
  };

  const open = async (namespace?: string | null): Promise<MonadOpenResult> => {
    const semanticNamespace = normalizeMonadSemanticNamespace(String(namespace || activeNamespace || '').trim());
    if (!semanticNamespace) {
      throw new SeedSessionError('NAMESPACE_REQUIRED', 'Namespace is required for open.');
    }

    try {
      const result = await node.signIn({ namespace: semanticNamespace, secret: secretForWire });
      activeNamespace = result.namespace;
      identityHash = result.identityHash;
      writeLocalSessionState(me, runtime, activeNamespace, true, identityHash, result.openedAt);
      return toMonadOpenResult(result);
    } catch (cause) {
      throw toMonadClientError(cause, 'open', semanticNamespace, transportOrigin);
    }
  };

  const clear = () => {
    activeNamespace = null;
    identityHash = '';
    writeLocalSessionState(me, runtime, null, false, null, null);
  };

  return {
    me,
    runtime,
    monad,
    get identityHash() {
      return identityHash;
    },
    transportOrigin,
    get semanticNamespace() {
      return activeNamespace;
    },
    claim,
    async claimAndOpen(namespace: string) {
      await claim(namespace);
      return open(namespace);
    },
    open,
    async sync() {
      return open(activeNamespace);
    },
    read(path) {
      return readMeValue(me, path, { allowBarePath: true });
    },
    // CleakerNode has no signed-write primitive today (confirmed: its
    // public surface is claim/signIn/pointer/discoverHosts/validateHosts —
    // no write). Falls back to the same REST write monadClient.ts already
    // provides, deliberately not reimplemented here.
    async write<TValue = unknown>(
      expression: string,
      value: TValue,
      writeOptions: SeedSessionWriteOptions<TValue> = {},
    ): Promise<MonadWriteResult> {
      const semanticNamespace = normalizeMonadSemanticNamespace(String(activeNamespace || '').trim());
      if (!semanticNamespace) {
        throw new SeedSessionError('NAMESPACE_REQUIRED', 'An active namespace is required for write.');
      }

      return monad.writeNamespace({
        semanticNamespace,
        expression,
        value,
        identityHash,
        signature: writeOptions.signature,
        signedPayload: writeOptions.signedPayload,
        signatureEncoding: writeOptions.signatureEncoding,
        signatureFormat: writeOptions.signatureFormat,
        body: writeOptions.body,
        signal: writeOptions.signal,
      });
    },
    // Same branch-proof key derivation prove() uses internally
    // (deriveBranchProofSeed(seed, expression) -> importEd25519SigningKey),
    // now signing a caller-supplied message instead of prove()'s own fixed
    // claim/challenge shape. secretForWire and username are already in
    // closure scope from session creation -- the raw key never leaves this
    // module, and this derives the exact same key the server already holds
    // the public half of from claim time (see modules/monad's
    // records.ts:rawEd25519PublicKeyToPem, and the cross-package
    // compatibility test in modules/monad's crossPackageSigning.test.ts).
    async signPayload(message: string): Promise<string> {
      const branchSeed = await deriveBranchProofSeed(secretForWire, username);
      const { privateKey } = await importEd25519SigningKey(branchSeed);
      return signEd25519Proof(privateKey, message);
    },
    clear,
    logout() {
      clear();
    },
  };
}

export default createCleakerSession;
