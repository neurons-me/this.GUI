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
import {
  DEFAULT_MONAD_TRANSPORT_ORIGIN,
  normalizeMonadTransportOrigin,
  type MonadClaimResult,
  type MonadClientOptions,
  type MonadOpenResult,
  type MonadWriteResult,
} from '@/core/session/monadClient';

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
};

export type SeedSessionContextErrorCode =
  | 'SESSION_REQUIRED'
  | 'CREDENTIAL_LOGIN_UNAVAILABLE'
  | 'INVALID_CREDENTIAL_RESULT';

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

const SeedSessionContext = React.createContext<SeedSessionContextValue | null>(null);

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
          await nextSession.open(options.semanticNamespace);
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

  const loginWithCredentials = React.useCallback(
    async (input: SeedCredentialsLoginInput) => {
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
    [defaultTransportOrigin, fail, loginWithSeed, resolveSeedFromCredentials],
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

  return (
    <SeedSessionContext.Provider value={contextValue}>
      {content}
    </SeedSessionContext.Provider>
  );
}

export function useOptionalSeedSessionContext(): SeedSessionContextValue | null {
  return React.useContext(SeedSessionContext);
}
