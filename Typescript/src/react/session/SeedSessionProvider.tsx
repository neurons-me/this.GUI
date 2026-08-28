import ME from 'this.me';
import * as React from 'react';
import { MeRuntimeProvider } from '@/react/MeRuntimeProvider';
import type { RuntimeAdapter } from '@/runtime/adapter';
import type { MeLike } from '@/react/types';
import {
  createSeedSession,
  type SeedSession,
  type SeedSessionOptions,
  type SeedSessionWriteOptions,
} from '@/core/session/createSeedSession';
import { createCleakerSession } from '@/core/session/createCleakerSession';
import {
  DEFAULT_MONAD_TRANSPORT_ORIGIN,
  normalizeMonadTransportOrigin,
  MonadClientError,
  type MonadClaimResult,
  type MonadClientOptions,
  type MonadOpenResult,
  type MonadWriteResult,
} from '@/core/session/monadClient';
import { getActiveNamespaceRoot, fetchGatewayHostname } from '@/gui/All.This/Cleaker/signedRequest';

export type SeedSessionStatus = 'idle' | 'pending' | 'ready' | 'error';

export type SeedSessionLoginInput = {
  seed: string;
  namespace?: string | null;
  transportOrigin?: string | null;
  autoOpen?: boolean;
};

export type SeedCredentialsLoginInput = {
  email?: string | null;
  username?: string | null;
  password: string;
  namespace?: string | null;
  transportOrigin?: string | null;
  autoOpen?: boolean;
};

export type SeedCredentialResolution =
  | string
  | {
      seed: string;
      namespace?: string | null;
      semanticNamespace?: string | null;
      transportOrigin?: string | null;
    };

export type ResolveSeedFromCredentials = (
  input: SeedCredentialsLoginInput,
) => Promise<SeedCredentialResolution> | SeedCredentialResolution;

export type CreateSeedSessionRuntime = (
  me: MeLike,
  context: { semanticNamespace: string | null; transportOrigin: string },
) => RuntimeAdapter;

export type SeedSessionProviderProps = MonadClientOptions & {
  children: React.ReactNode;
  transportOrigin?: string;
  resolveSeedFromCredentials?: ResolveSeedFromCredentials;
  onSessionChange?: (session: SeedSession | null) => void;
  /**
   * Overrides the RuntimeAdapter createSeedSession() builds internally
   * (default: createMeRuntime(me), local-only, no network subscribe).
   * Pass e.g. `(me, ctx) => createWsMeRuntime(me, ctx)` for a session with
   * live WS subscriptions against a remote monad — createSeedSession()
   * itself has no network-adapter concept, only this provider constructs
   * `me` early enough to hand it to a runtime factory before login.
   */
  createRuntime?: CreateSeedSessionRuntime;
  /**
   * Which session implementation loginWithCredentials() builds on.
   * - 'monad' (default, unchanged): createSeedSession() — REST-only
   *   claimNamespace()/openNamespace() against monadClient.ts, sending only
   *   { secret, identityHash }. Matches every existing real caller's
   *   behavior today.
   * - 'cleaker': createCleakerSession() — mounts a real ME(username,
   *   password) kernel and claims/opens through cleaker's own
   *   bindKernel(), which sends a real signed Ed25519 proof
   *   (me['!'].prove()) alongside the secret. Closes a real gap the REST
   *   path has: monad's claimNamespace() accepts a self-asserted,
   *   unverified identityHash whenever no proof is present (confirmed live
   *   this session). Only affects loginWithCredentials() — this backend
   *   needs the raw username+password directly (it derives its own seed),
   *   not a pre-resolved seed, so resolveSeedFromCredentials is bypassed
   *   entirely when this is 'cleaker'. loginWithSeed() is unaffected either
   *   way (it always uses createSeedSession()) since it starts from an
   *   already-derived seed, which the cleaker path can't use (it needs
   *   #activeExpression set from the real username, which only the
   *   2-arg ME(who, secret) constructor does).
   */
  sessionBackend?: 'monad' | 'cleaker';
};

export type SeedSessionContextErrorCode =
  | 'SESSION_REQUIRED'
  | 'CREDENTIAL_LOGIN_UNAVAILABLE'
  | 'INVALID_CREDENTIAL_RESULT'
  | 'INVALID_CLAIM';

export class SeedSessionContextError<
  Code extends SeedSessionContextErrorCode = SeedSessionContextErrorCode,
> extends Error {
  readonly code: Code;

  constructor(code: Code, message?: string) {
    super(message || code);
    this.name = 'SeedSessionContextError';
    this.code = code;
  }
}

export type SeedSessionContextValue = {
  readonly session: SeedSession | null;
  readonly me: MeLike | null;
  readonly runtime: RuntimeAdapter | null;
  readonly status: SeedSessionStatus;
  readonly pending: boolean;
  readonly authenticated: boolean;
  readonly error: Error | null;
  readonly transportOrigin: string;
  readonly semanticNamespace: string | null;
  readonly identityHash: string | null;
  readonly openedAt: number | null;
  activateSession(session: SeedSession | null): SeedSession | null;
  loginWithSeed(input: SeedSessionLoginInput): Promise<SeedSession>;
  loginWithCredentials(input: SeedCredentialsLoginInput): Promise<SeedSession>;
  claim(namespace: string): Promise<MonadClaimResult>;
  open(namespace?: string | null): Promise<MonadOpenResult>;
  claimAndOpen(namespace: string): Promise<MonadOpenResult>;
  sync(): Promise<MonadOpenResult>;
  read<TValue = unknown>(path: string): TValue | undefined;
  write<TValue = unknown>(
    expression: string,
    value: TValue,
    options?: SeedSessionWriteOptions<TValue>,
  ): Promise<MonadWriteResult>;
  logout(): void;
  clearError(): void;
};

type SessionSnapshot = {
  session: SeedSession | null;
  me: MeLike | null;
  runtime: RuntimeAdapter | null;
  transportOrigin: string;
  semanticNamespace: string | null;
  identityHash: string | null;
  openedAt: number | null;
  authenticated: boolean;
};

// This module ends up bundled into multiple separate chunks — this.gui
// ships runtime/react/devtools/cleaker as SEPARATE entry points, and a
// consumer pulled from each one drags its own copy of this file along with
// it (Vite doesn't dedupe a shared internal module across entry-point
// boundaries by default). Each copy calling React.createContext() at
// module scope produces a DIFFERENT context object, so a <Provider> from
// one copy (e.g. netget's App.jsx importing SeedSessionProvider via
// `this.gui/react`) is invisible to useContext() reading a different
// bundled copy (e.g. one pulled in via `this.gui` or `this.gui/devtools`)
// — every consumer of the "wrong" copy sees `null`/defaults regardless of
// what the real Provider was given, which is exactly what produced "No
// credential resolver was provided to SeedSessionProvider" on a real
// submit even though App.jsx correctly passes resolveSeedFromCredentials.
// Same root cause, same fix already applied to runtime/launcherPopover.tsx
// this session: key the actual Context object off `globalThis`, so every
// bundled copy of this file resolves to the exact same object no matter
// how many chunks it got duplicated into.
const SEED_SESSION_CONTEXT_KEY = '__THIS_GUI_SEED_SESSION_CONTEXT__';

function getSeedSessionContext(): React.Context<SeedSessionContextValue | null> {
  const g = globalThis as unknown as Record<string, React.Context<SeedSessionContextValue | null>>;
  if (!g[SEED_SESSION_CONTEXT_KEY]) {
    g[SEED_SESSION_CONTEXT_KEY] = React.createContext<SeedSessionContextValue | null>(null);
  }
  return g[SEED_SESSION_CONTEXT_KEY];
}

function toError(error: unknown): Error {
  if (error instanceof Error) return error;
  return new Error(typeof error === 'string' ? error : 'Unknown session error.');
}

function createEmptySnapshot(transportOrigin: string): SessionSnapshot {
  return {
    session: null,
    me: null,
    runtime: null,
    transportOrigin,
    semanticNamespace: null,
    identityHash: null,
    openedAt: null,
    authenticated: false,
  };
}

function readSessionNumber(session: SeedSession, path: string): number | null {
  try {
    const value = Number(session.read(path));
    return Number.isFinite(value) && value > 0 ? value : null;
  } catch {
    return null;
  }
}

function readSessionBoolean(session: SeedSession, path: string): boolean {
  try {
    return Boolean(session.read(path));
  } catch {
    return false;
  }
}

function snapshotSession(session: SeedSession): SessionSnapshot {
  return {
    session,
    me: session.me,
    runtime: session.runtime,
    transportOrigin: session.transportOrigin,
    semanticNamespace: session.semanticNamespace,
    identityHash: String(session.identityHash || '').trim() || null,
    openedAt: readSessionNumber(session, 'identity.session.openedAt'),
    authenticated: readSessionBoolean(session, 'identity.session.authenticated'),
  };
}

function normalizeCredentialResolution(
  input: SeedCredentialResolution,
  fallbackNamespace: string | null | undefined,
  fallbackTransportOrigin: string,
) {
  if (typeof input === 'string') {
    const seed = String(input || '').trim();
    if (!seed) {
      throw new SeedSessionContextError(
        'INVALID_CREDENTIAL_RESULT',
        'Credential resolution must return a seed.',
      );
    }

    return {
      seed,
      namespace: String(fallbackNamespace || '').trim() || null,
      transportOrigin: fallbackTransportOrigin,
    };
  }

  const seed = String(input?.seed || '').trim();
  if (!seed) {
    throw new SeedSessionContextError(
      'INVALID_CREDENTIAL_RESULT',
      'Credential resolution must return a seed.',
    );
  }

  const namespace =
    String(input?.semanticNamespace || input?.namespace || fallbackNamespace || '').trim() || null;

  return {
    seed,
    namespace,
    transportOrigin: normalizeMonadTransportOrigin(
      input?.transportOrigin || fallbackTransportOrigin,
    ),
  };
}

// Shared by both backends (loginWithSeed's createSeedSession path and
// loginWithCredentials' opt-in createCleakerSession path) so they produce
// identical behavior and error messages regardless of which one is active.
// Only a genuinely UNCLAIMED namespace falls through to claimAndOpen()
// ("first claimer wins" — SessionSurface.enter() originally did this by
// hand). A WRONG SECRET against an already-claimed namespace must NOT
// attempt a claim (it used to, silently, producing a confusing raw
// "CLAIM NAMESPACE_TAKEN") — surfaced instead as a clean "Invalid Claim".
async function openOrClaim(session: SeedSession, namespace: string): Promise<void> {
  try {
    await session.open(namespace);
  } catch (openError) {
    const code = openError instanceof MonadClientError ? openError.code : null;
    if (code === 'CLAIM_NOT_FOUND') {
      await session.claimAndOpen(namespace);
    } else if (code === 'IDENTITY_MISMATCH' || code === 'CLAIM_VERIFICATION_FAILED') {
      throw new SeedSessionContextError('INVALID_CLAIM', 'Invalid Claim');
    } else {
      throw openError;
    }
  }
}

function buildSeedSessionOptions(
  input: SeedSessionLoginInput,
  defaults: Pick<SeedSessionProviderProps, 'fetchImpl' | 'headers'> & {
    transportOrigin: string;
  },
): SeedSessionOptions {
  return {
    seed: String(input.seed || '').trim(),
    semanticNamespace: String(input.namespace || '').trim() || null,
    transportOrigin: normalizeMonadTransportOrigin(
      input.transportOrigin || defaults.transportOrigin,
    ),
    fetchImpl: defaults.fetchImpl,
    headers: defaults.headers,
  };
}

export function SeedSessionProvider({
  children,
  transportOrigin = DEFAULT_MONAD_TRANSPORT_ORIGIN,
  resolveSeedFromCredentials,
  onSessionChange,
  fetchImpl,
  headers,
  createRuntime,
  sessionBackend = 'monad',
}: SeedSessionProviderProps) {
  const defaultTransportOrigin = React.useMemo(
    () => normalizeMonadTransportOrigin(transportOrigin),
    [transportOrigin],
  );
  const [snapshot, setSnapshot] = React.useState<SessionSnapshot>(() =>
    createEmptySnapshot(defaultTransportOrigin),
  );
  const [status, setStatus] = React.useState<SeedSessionStatus>('idle');
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    if (snapshot.session) return;
    setSnapshot((current) => {
      if (current.session || current.transportOrigin === defaultTransportOrigin) {
        return current;
      }
      return createEmptySnapshot(defaultTransportOrigin);
    });
  }, [defaultTransportOrigin, snapshot.session]);

  const commitSnapshot = React.useCallback(
    (nextSession: SeedSession | null) => {
      const nextSnapshot = nextSession
        ? snapshotSession(nextSession)
        : createEmptySnapshot(defaultTransportOrigin);

      React.startTransition(() => {
        setSnapshot(nextSnapshot);
        setStatus(nextSession ? 'ready' : 'idle');
        setError(null);
      });

      onSessionChange?.(nextSession);
      return nextSession;
    },
    [defaultTransportOrigin, onSessionChange],
  );

  const activateSession = React.useCallback(
    (nextSession: SeedSession | null) => commitSnapshot(nextSession),
    [commitSnapshot],
  );

  const fail = React.useCallback((cause: unknown) => {
    const normalized = toError(cause);
    React.startTransition(() => {
      setStatus('error');
      setError(normalized);
    });
    throw normalized;
  }, []);

  const requireSession = React.useCallback(() => {
    if (snapshot.session) return snapshot.session;
    throw new SeedSessionContextError(
      'SESSION_REQUIRED',
      'A seed session is required for this operation.',
    );
  }, [snapshot.session]);

  const loginWithSeed = React.useCallback(
    async (input: SeedSessionLoginInput) => {
      React.startTransition(() => {
        setStatus('pending');
        setError(null);
      });

      const options = buildSeedSessionOptions(input, {
        transportOrigin: defaultTransportOrigin,
        fetchImpl,
        headers,
      });
      if (createRuntime) {
        const me = (new ME(options.seed) as unknown) as MeLike;
        options.me = me;
        options.runtime = createRuntime(me, {
          semanticNamespace: options.semanticNamespace ?? null,
          transportOrigin: options.transportOrigin || defaultTransportOrigin,
        });
      }
      const nextSession = createSeedSession(options);
      const shouldAutoOpen = input.autoOpen !== false && Boolean(options.semanticNamespace);

      try {
        if (shouldAutoOpen && options.semanticNamespace) {
          await openOrClaim(nextSession, options.semanticNamespace);
        }
        commitSnapshot(nextSession);
        return nextSession;
      } catch (cause) {
        try {
          nextSession.logout();
        } catch {
          // Best-effort cleanup for failed logins.
        }
        commitSnapshot(null);
        return fail(cause);
      }
    },
    [commitSnapshot, createRuntime, defaultTransportOrigin, fail, fetchImpl, headers],
  );

  // sessionBackend: 'cleaker' path — bypasses resolveSeedFromCredentials
  // entirely (it needs the raw username+password to construct
  // ME(username, password) directly, not a pre-derived seed — see
  // SeedSessionProviderProps.sessionBackend's doc comment for why). input.
  // namespace is the ROOT here (e.g. "local.cleaker"), not the full
  // <handle>.<root> loginWithSeed expects — createCleakerSession composes
  // the full namespace itself via ME.bindNamespace().
  const loginWithCleaker = React.useCallback(
    async (input: SeedCredentialsLoginInput) => {
      const username = String(input.username || input.email || '').trim();
      const password = String(input.password || '');

      if (!username) {
        return fail(new SeedSessionContextError('INVALID_CREDENTIAL_RESULT', 'Username is required.'));
      }

      // Mirrors resolveNetgetSeedFromCredentials' own fallback chain
      // (getActiveNamespaceRoot() || await fetchGatewayHostname()) so a
      // caller like MeLauncher's onEnter — which never passes `namespace`,
      // relying on the 'monad' backend's resolveSeedFromCredentials to fill
      // it in — gets the same root resolved for free under this backend
      // too, instead of needing backend-aware wiring at every call site.
      let rootNamespace = String(input.namespace || '').trim() || getActiveNamespaceRoot() || '';
      if (!rootNamespace) {
        try {
          rootNamespace = await fetchGatewayHostname();
        } catch (cause) {
          return fail(cause instanceof Error ? cause : new Error(String(cause)));
        }
      }
      if (!rootNamespace) {
        return fail(new SeedSessionContextError('INVALID_CREDENTIAL_RESULT', 'A root namespace is required.'));
      }

      React.startTransition(() => {
        setStatus('pending');
        setError(null);
      });

      const cleakerTransportOrigin = normalizeMonadTransportOrigin(
        input.transportOrigin || defaultTransportOrigin,
      );
      const nextSession = createCleakerSession({
        username,
        password,
        namespace: rootNamespace,
        transportOrigin: cleakerTransportOrigin,
        fetchImpl,
        headers,
      });
      const fullNamespace = `${username.toLowerCase()}.${rootNamespace}`;
      const shouldAutoOpen = input.autoOpen !== false;

      try {
        if (shouldAutoOpen) {
          await openOrClaim(nextSession, fullNamespace);
        }
        commitSnapshot(nextSession);
        return nextSession;
      } catch (cause) {
        try {
          nextSession.logout();
        } catch {
          // Best-effort cleanup for failed logins.
        }
        commitSnapshot(null);
        return fail(cause);
      }
    },
    [commitSnapshot, defaultTransportOrigin, fail, fetchImpl, headers],
  );

  const loginWithCredentials = React.useCallback(
    async (input: SeedCredentialsLoginInput) => {
      if (sessionBackend === 'cleaker') {
        return loginWithCleaker(input);
      }

      if (typeof resolveSeedFromCredentials !== 'function') {
        return fail(new SeedSessionContextError(
          'CREDENTIAL_LOGIN_UNAVAILABLE',
          'No credential resolver was provided to SeedSessionProvider.',
        ));
      }

      React.startTransition(() => {
        setStatus('pending');
        setError(null);
      });

      try {
        const resolved = await resolveSeedFromCredentials(input);
        const normalized = normalizeCredentialResolution(
          resolved,
          input.namespace,
          normalizeMonadTransportOrigin(input.transportOrigin || defaultTransportOrigin),
        );

        return await loginWithSeed({
          seed: normalized.seed,
          namespace: normalized.namespace,
          transportOrigin: normalized.transportOrigin,
          autoOpen: input.autoOpen,
        });
      } catch (cause) {
        return fail(cause);
      }
    },
    [defaultTransportOrigin, fail, loginWithCleaker, loginWithSeed, resolveSeedFromCredentials, sessionBackend],
  );

  const claim = React.useCallback(async (namespace: string) => {
    const session = requireSession();
    React.startTransition(() => {
      setStatus('pending');
      setError(null);
    });

    try {
      const result = await session.claim(namespace);
      commitSnapshot(session);
      return result;
    } catch (cause) {
      return fail(cause);
    }
  }, [commitSnapshot, fail, requireSession]);

  const open = React.useCallback(async (namespace?: string | null) => {
    const session = requireSession();
    React.startTransition(() => {
      setStatus('pending');
      setError(null);
    });

    try {
      const result = await session.open(namespace);
      commitSnapshot(session);
      return result;
    } catch (cause) {
      return fail(cause);
    }
  }, [commitSnapshot, fail, requireSession]);

  const claimAndOpen = React.useCallback(async (namespace: string) => {
    const session = requireSession();
    React.startTransition(() => {
      setStatus('pending');
      setError(null);
    });

    try {
      const result = await session.claimAndOpen(namespace);
      commitSnapshot(session);
      return result;
    } catch (cause) {
      return fail(cause);
    }
  }, [commitSnapshot, fail, requireSession]);

  const sync = React.useCallback(async () => {
    const session = requireSession();
    React.startTransition(() => {
      setStatus('pending');
      setError(null);
    });

    try {
      const result = await session.sync();
      commitSnapshot(session);
      return result;
    } catch (cause) {
      return fail(cause);
    }
  }, [commitSnapshot, fail, requireSession]);

  const read = React.useCallback(<TValue,>(path: string): TValue | undefined => {
    if (!snapshot.session) return undefined;
    try {
      return snapshot.session.read<TValue>(path);
    } catch {
      return undefined;
    }
  }, [snapshot.session]);

  const write = React.useCallback(
    async <TValue,>(
      expression: string,
      value: TValue,
      options?: SeedSessionWriteOptions<TValue>,
    ) => {
      const session = requireSession();
      React.startTransition(() => {
        setStatus('pending');
        setError(null);
      });

      try {
        const result = await session.write(expression, value, options);
        commitSnapshot(session);
        return result;
      } catch (cause) {
        return fail(cause);
      }
    },
    [commitSnapshot, fail, requireSession],
  );

  const logout = React.useCallback(() => {
    if (snapshot.session) {
      try {
        snapshot.session.logout();
      } catch {
        // Ignore logout cleanup failures and always clear local state.
      }
    }
    commitSnapshot(null);
  }, [commitSnapshot, snapshot.session]);

  const clearError = React.useCallback(() => {
    React.startTransition(() => {
      setError(null);
      setStatus(snapshot.session ? 'ready' : 'idle');
    });
  }, [snapshot.session]);

  const contextValue = React.useMemo<SeedSessionContextValue>(
    () => ({
      session: snapshot.session,
      me: snapshot.me,
      runtime: snapshot.runtime,
      status,
      pending: status === 'pending',
      authenticated: snapshot.authenticated,
      error,
      transportOrigin: snapshot.transportOrigin,
      semanticNamespace: snapshot.semanticNamespace,
      identityHash: snapshot.identityHash,
      openedAt: snapshot.openedAt,
      activateSession,
      loginWithSeed,
      loginWithCredentials,
      claim,
      open,
      claimAndOpen,
      sync,
      read,
      write,
      logout,
      clearError,
    }),
    [
      claim,
      claimAndOpen,
      clearError,
      error,
      loginWithCredentials,
      loginWithSeed,
      activateSession,
      open,
      read,
      snapshot,
      status,
      sync,
      write,
      logout,
    ],
  );

  const content = snapshot.me && snapshot.runtime ? (
    <MeRuntimeProvider me={snapshot.me} runtime={snapshot.runtime}>
      {children}
    </MeRuntimeProvider>
  ) : (
    children
  );

  const SeedSessionContext = getSeedSessionContext();
  return (
    <SeedSessionContext.Provider value={contextValue}>
      {content}
    </SeedSessionContext.Provider>
  );
}

export function useOptionalSeedSessionContext(): SeedSessionContextValue | null {
  return React.useContext(getSeedSessionContext());
}
