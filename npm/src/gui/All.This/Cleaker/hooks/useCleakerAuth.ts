//this/GUI/npm/src/gui/All.This/Cleaker/hooks/useCleakerAuth.ts
import { useCallback, useEffect, useMemo, useState } from 'react';
import { usernameRegexPasses } from 'cleaker';
import {
  type CleakerBootstrapInfo,
  readUsernameFromStorage,
  readCleakerBootstrap,
  sanitizeCleakerUsername,
  SESSION_CREDENTIALS_EVENT,
  SESSION_SECRET_STORAGE_KEY,
  SESSION_USERNAME_STORAGE_KEY,
} from '../runtimeUsername';
import useCleakerSignUp from './useCleakerSignUp';

export type AuthStatus = 'idle' | 'checking' | 'ok' | 'error';
export type AuthAction = 'claim' | 'open';
export type ClaimResolution = 'idle' | 'checking' | 'openable' | 'locked' | 'unclaimed' | 'error';

export type CleakerProfileSnapshot = {
  username: string;
  name: string;
  email: string;
  phone: string;
  namespace: string;
  claimedAt: number | null;
};

export type UseCleakerAuthOptions = {
  username?: string;
  namespaceOrigin: string;
  namespaceSeedHandle: string;
  namespaceSeedFallback?: string;
  actionBaseUrl: string;
  actionTargetLabel: string;
  activeProfile: CleakerProfileSnapshot;
  onAuthenticated?: (profile: CleakerProfileSnapshot, action: AuthAction) => void;
  onViewModeChange?: (viewMode: 'login' | 'profile') => void;
};

export type UseCleakerAuthResult = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  usernameError: string | null;
  normalizedUsername: string;
  validateUsername: (raw: string) => { value: string; error: string | null };
  secret: string;
  setSecret: React.Dispatch<React.SetStateAction<string>>;
  showSecret: boolean;
  setShowSecret: React.Dispatch<React.SetStateAction<boolean>>;
  registerOpen: boolean;
  openRegisterModal: () => void;
  closeRegisterModal: () => void;
  registerFullName: string;
  setRegisterFullName: React.Dispatch<React.SetStateAction<string>>;
  registerUsername: string;
  setRegisterUsername: React.Dispatch<React.SetStateAction<string>>;
  registerEmail: string;
  setRegisterEmail: React.Dispatch<React.SetStateAction<string>>;
  registerPhone: string;
  setRegisterPhone: React.Dispatch<React.SetStateAction<string>>;
  registerPassword: string;
  setRegisterPassword: React.Dispatch<React.SetStateAction<string>>;
  registerConfirmPassword: string;
  setRegisterConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  registerError: string | null;
  authStatus: AuthStatus;
  authAction: AuthAction;
  authError: string | null;
  claimResolution: ClaimResolution;
  claimResolutionNote: string;
  sessionAuthenticated: boolean;
  bootstrapInfo: CleakerBootstrapInfo | null;
  handleCleak: (requestedAction: AuthAction) => Promise<boolean>;
  handleRegisterSubmit: () => Promise<boolean>;
  handleLogout: () => void;
  commitRuntimeCredentials: (nextUsername: string, nextSecret: string) => void;
  authSuccessMessage: string;
  authProgressMessage: string;
};

type CleakerProfilePayload = {
  username?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
};

type CleakerMemoryEntry = {
  path?: string;
  data?: unknown;
};

type CleakerClaimPayload = {
  error?: string;
  message?: string;
  createdAt?: unknown;
  profile?: CleakerProfilePayload;
  memories?: CleakerMemoryEntry[];
  persistentClaim?: {
    claim?: {
      issuedAt?: unknown;
    };
  };
};

function readStoredValue(key: string): string {
  if (typeof window === 'undefined') return '';
  try {
    return String(localStorage.getItem(key) || '').trim();
  } catch {
    return '';
  }
}

function cleanString(value: unknown): string {
  return String(value || '').trim();
}


function toTimestamp(value: unknown): number | null {
  const next = Number(value);
  return Number.isFinite(next) && next > 0 ? next : null;
}

function readPayloadMemoryValue(payload: CleakerClaimPayload | null | undefined, path: string): unknown {
  const memories = Array.isArray(payload?.memories)
    ? payload.memories
    : [];
  const match = memories.find((entry) => String(entry?.path || '').trim() === path);
  return match?.data;
}

function resolveClaimedAt(payload: CleakerClaimPayload | null | undefined, fallback: number | null = null): number | null {
  return (
    toTimestamp(readPayloadMemoryValue(payload, 'auth.claimed_at')) ||
    toTimestamp(payload?.createdAt) ||
    toTimestamp(payload?.persistentClaim?.claim?.issuedAt) ||
    fallback
  );
}

function resolveProfileField(
  payload: CleakerClaimPayload | null | undefined,
  field: 'username' | 'name' | 'email' | 'phone',
  fallback = '',
): string {
  const fromMemory = readPayloadMemoryValue(payload, `profile.${field}`);
  if (fromMemory != null) return cleanString(fromMemory);
  return cleanString(payload?.profile?.[field] ?? fallback);
}

function readErrorMessage(payload: unknown, status: number, fallback: string): string {
  const body = payload as { error?: string; message?: string } | null;
  return String(body?.error || body?.message || fallback || `HTTP ${status}`);
}

function humanizeCleakerError(
  raw: unknown,
  options: { namespaceSeedHandle?: string; exampleHandle?: string } = {},
): string {
  const code = String(raw || '').trim();
  if (!code) return 'Unknown error';
  const exampleHandle = sanitizeCleakerUsername(String(options.exampleHandle || '').trim()) || 'jabellae';

  switch (code) {
    case 'USERNAME_NAMESPACE_MISMATCH':
      return options.namespaceSeedHandle
        ? `Use only the username handle, not the full namespace. Example: "${exampleHandle}", not "${exampleHandle}.${options.namespaceSeedHandle}".`
        : 'Use only the username handle, not email or full namespace.';
    case 'USERNAME_REQUIRED':
      return 'Username is required';
    case 'NAME_REQUIRED':
      return 'Full name is required';
    case 'EMAIL_REQUIRED':
      return 'Email is required';
    case 'EMAIL_INVALID':
      return 'Invalid email';
    case 'PHONE_REQUIRED':
      return 'Phone number is required';
    case 'PHONE_INVALID':
      return 'Invalid phone number';
    case 'CLAIM_NOT_FOUND':
      return 'This username is not claimed yet. Use Sign Up.';
    case 'CLAIM_VERIFICATION_FAILED':
      return 'Wrong password for this claimed username.';
    case 'NAMESPACE_TAKEN':
      return 'This username is already claimed. Use .me to log in.';
    default:
      return code;
  }
}

function buildAuthenticatedProfile(args: {
  payload: CleakerClaimPayload | null | undefined;
  fallbackUsername: string;
  activeProfile: CleakerProfileSnapshot;
  identityNamespace: string;
}): CleakerProfileSnapshot {
  const { payload, fallbackUsername, activeProfile, identityNamespace } = args;

  return {
    username: sanitizeCleakerUsername(resolveProfileField(payload, 'username', fallbackUsername)) || fallbackUsername,
    name: resolveProfileField(payload, 'name', activeProfile.name),
    email: resolveProfileField(payload, 'email', activeProfile.email),
    phone: resolveProfileField(payload, 'phone', activeProfile.phone),
    namespace: identityNamespace,
    claimedAt: resolveClaimedAt(payload, activeProfile.claimedAt ?? Date.now()),
  };
}

export function useCleakerAuth(options: UseCleakerAuthOptions): UseCleakerAuthResult {
  const {
    username: externalUsername,
    namespaceOrigin,
    namespaceSeedHandle,
    namespaceSeedFallback = '',
    actionBaseUrl,
    actionTargetLabel,
    activeProfile,
    onAuthenticated,
    onViewModeChange,
  } = options;

  const validateUsername = useCallback((raw: string) => {
    const rawValue = String(raw || '').trim().toLowerCase();
    const value = sanitizeCleakerUsername(raw);
    if (!value) return { value: '', error: null as string | null };
    if (rawValue.includes('@')) {
      return { value, error: 'Use only the username handle, not email' };
    }
    if (rawValue.includes('://') || rawValue.includes('/')) {
      return { value, error: 'Use only the username handle, not a URL or path' };
    }
    if (namespaceSeedFallback && value.endsWith(`.${namespaceSeedFallback}`)) {
      return {
        value,
        error: `Use only the handle before .${namespaceSeedFallback}`,
      };
    }
    if (value.length < 5) return { value, error: 'Username too short' };
    if (value.length > 32) return { value, error: 'Username too long' };
    if (!usernameRegexPasses(value, { allowEmpty: false })) {
      return { value, error: 'Only a-z 0-9 . _ -' };
    }
    return { value, error: null as string | null };
  }, [namespaceSeedFallback]);

  const [username, setUsernameState] = useState(() => {
    const explicit = sanitizeCleakerUsername(String(externalUsername || '').trim());
    if (explicit) return explicit;
    return readUsernameFromStorage();
  });
  const [secret, setSecretState] = useState(() => readStoredValue(SESSION_SECRET_STORAGE_KEY));
  // Register state now managed by useCleakerSignUp
  const [showSecret, setShowSecret] = useState(false);
  const [authStatus, setAuthStatus] = useState<AuthStatus>('idle');
  const [authAction, setAuthAction] = useState<AuthAction>('claim');
  const [authError, setAuthError] = useState<string | null>(null);
  const [claimResolution, setClaimResolution] = useState<ClaimResolution>('idle');
  const [sessionAuthenticated, setSessionAuthenticated] = useState(false);
  const [bootstrapInfo, setBootstrapInfo] = useState<CleakerBootstrapInfo | null>(null);

  const usernameValidation = useMemo(() => validateUsername(username), [username, validateUsername]);
  const usernameError = usernameValidation.error;
  const normalizedUsername = usernameValidation.error ? '' : usernameValidation.value;
  const identityNamespace = normalizedUsername
    ? `${normalizedUsername}.${namespaceSeedHandle}`
    : namespaceSeedHandle;

  const setUsername = useCallback((next: React.SetStateAction<string>) => {
    setUsernameState(next);
    setAuthStatus('idle');
    setAuthError(null);
  }, []);

  const setSecret = useCallback((next: React.SetStateAction<string>) => {
    setSecretState(next);
    setAuthStatus('idle');
    setAuthError(null);
  }, []);

  // Register callbacks now managed by useCleakerSignUp

  const commitRuntimeCredentials = useCallback((nextUsername: string, nextSecret: string) => {
    const normalizedUser = sanitizeCleakerUsername(nextUsername);
    const normalizedSecret = String(nextSecret || '').trim();

    try {
      if (normalizedUser) localStorage.setItem(SESSION_USERNAME_STORAGE_KEY, normalizedUser);
      else localStorage.removeItem(SESSION_USERNAME_STORAGE_KEY);

      if (normalizedSecret) localStorage.setItem(SESSION_SECRET_STORAGE_KEY, normalizedSecret);
      else localStorage.removeItem(SESSION_SECRET_STORAGE_KEY);

      window.dispatchEvent(new CustomEvent(SESSION_CREDENTIALS_EVENT, {
        detail: {
          username: normalizedUser,
          secret: normalizedSecret,
        },
      }));
    } catch {
      // Ignore storage and event failures in restricted runtimes.
    }
  }, []);

  useEffect(() => {
    const explicit = sanitizeCleakerUsername(String(externalUsername || '').trim());
    if (!explicit) return;
    setUsernameState(explicit);
  }, [externalUsername]);

  useEffect(() => {
    const syncCredentials = () => {
      const storedUsername = readUsernameFromStorage();
      const storedSecret = readStoredValue(SESSION_SECRET_STORAGE_KEY);
      setUsernameState(storedUsername || '');
      setSecretState(storedSecret || '');

      if (!storedUsername && !storedSecret) {
        setClaimResolution('idle');
        setAuthStatus('idle');
        setAuthError(null);
        setSessionAuthenticated(false);
      }
    };

    syncCredentials();
    window.addEventListener(SESSION_CREDENTIALS_EVENT, syncCredentials as EventListener);
    window.addEventListener('storage', syncCredentials as EventListener);

    return () => {
      window.removeEventListener(SESSION_CREDENTIALS_EVENT, syncCredentials as EventListener);
      window.removeEventListener('storage', syncCredentials as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!/^https?:\/\//i.test(String(namespaceOrigin || '').trim())) {
      setBootstrapInfo(null);
      return;
    }

    let cancelled = false;
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;

    (async () => {
      const payload = await readCleakerBootstrap(namespaceOrigin, controller?.signal);
      if (cancelled) return;
      setBootstrapInfo(payload);
    })();

    return () => {
      cancelled = true;
      controller?.abort();
    };
  }, [namespaceOrigin]);

  const applyAuthenticatedProfile = useCallback((payload: CleakerClaimPayload | null | undefined, fallbackUsername: string, nextSecret: string, action: AuthAction) => {
    const nextProfile = buildAuthenticatedProfile({
      payload,
      fallbackUsername,
      activeProfile,
      identityNamespace,
    });

    setUsernameState(nextProfile.username);
    setSecretState(nextSecret);
    setClaimResolution('openable');
    setSessionAuthenticated(true);
    setAuthStatus('ok');
    setAuthAction(action);
    setAuthError(null);
    commitRuntimeCredentials(nextProfile.username, nextSecret);
    onAuthenticated?.(nextProfile, action);
    onViewModeChange?.('profile');
    window.setTimeout(() => setAuthStatus('idle'), 1200);
    return nextProfile;
  }, [activeProfile, commitRuntimeCredentials, identityNamespace, onAuthenticated, onViewModeChange]);

  const postNamespaceOperation = useCallback(async (path: '/claims' | '/claims/open', targetSecret: string) => {
    const response = await fetch(`${actionBaseUrl}${path}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        namespace: identityNamespace,
        secret: targetSecret,
      }),
    });

    const payload = await response.json().catch(() => null) as CleakerClaimPayload | null;
    return { response, payload };
  }, [actionBaseUrl, identityNamespace]);

  const handleCleak = useCallback(async (requestedAction: AuthAction) => {
    const { value, error } = validateUsername(username);

    if (!value || error) {
      setAuthStatus('error');
      setAuthError(error || 'Invalid username');
      return false;
    }

    if (!secret) {
      setAuthStatus('error');
      setAuthError('Password is required');
      return false;
    }

    if (!actionBaseUrl) {
      setAuthStatus('error');
      setAuthError('No Monad host available');
      return false;
    }

    setAuthStatus('checking');
    setAuthAction(requestedAction);
    setAuthError(null);
    commitRuntimeCredentials(value, secret);

    try {
      if (requestedAction === 'open') {
        const { response, payload } = await postNamespaceOperation('/claims/open', secret);
        if (!response.ok) {
          if (response.status === 403) {
            setClaimResolution('locked');
            throw new Error('Wrong password for this claimed username.');
          }
          if (response.status === 404) {
            setClaimResolution('unclaimed');
            throw new Error('This username is not claimed yet. Use Sign Up.');
          }
          throw new Error(
            humanizeCleakerError(
              readErrorMessage(payload, response.status, 'Wrong Credentials'),
              {
                namespaceSeedHandle,
                exampleHandle: value,
              }
            )
          );
        }

        applyAuthenticatedProfile(payload, value, secret, 'open');
        return true;
      }

      const claimed = await postNamespaceOperation('/claims', secret);
      if (claimed.response.ok) {
        applyAuthenticatedProfile(claimed.payload, value, secret, 'claim');
        return true;
      }
      if (claimed.response.status === 409) {
        throw new Error('Namespace already claimed. Use Login.');
      }
      throw new Error(
        humanizeCleakerError(
          readErrorMessage(claimed.payload, claimed.response.status, 'Failed to claim namespace'),
          {
            namespaceSeedHandle,
            exampleHandle: value,
          }
        )
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setAuthStatus('error');
      setAuthError(message);
      return false;
    }
  }, [actionBaseUrl, applyAuthenticatedProfile, commitRuntimeCredentials, namespaceSeedHandle, postNamespaceOperation, secret, username, validateUsername]);

  // Sign-up modal, close, and submit now handled by useCleakerSignUp

  // --- Signup hook integration ---
  const signUp = useCleakerSignUp({
    username,
    secret,
    actionBaseUrl,
    namespaceSeedHandle,
    validateUsername,
    applyAuthenticatedProfile,
    humanizeCleakerError,
    readErrorMessage,
    setAuthStatus,
    setAuthAction,
    setAuthError,
    setClaimResolution,
  });

  const {
    registerOpen,
    openRegisterModal,
    closeRegisterModal,
    registerFullName,
    setRegisterFullName,
    registerUsername,
    setRegisterUsername,
    registerEmail,
    setRegisterEmail,
    registerPhone,
    setRegisterPhone,
    registerPassword,
    setRegisterPassword,
    registerConfirmPassword,
    setRegisterConfirmPassword,
    registerError,
    handleRegisterSubmit,
  } = signUp;

  const handleLogout = useCallback(() => {
    setUsernameState('');
    setSecretState('');
    closeRegisterModal();
    setShowSecret(false);
    setAuthAction('claim');
    setAuthStatus('idle');
    setAuthError(null);
    setClaimResolution('idle');
    setSessionAuthenticated(false);
    commitRuntimeCredentials('', '');
    onViewModeChange?.('login');
  }, [closeRegisterModal, commitRuntimeCredentials, onViewModeChange]);

  const claimResolutionNote = useMemo(() => {
    if (claimResolution === 'locked') {
      return `Password did not unlock ${actionTargetLabel}.`;
    }
    if (claimResolution === 'error') {
      return `Could not verify claim state on ${actionTargetLabel}.`;
    }
    return '';
  }, [actionTargetLabel, claimResolution]);

  const authSuccessMessage = authAction === 'open'
    ? `Logged in on ${actionTargetLabel}.`
    : `Claimed on ${actionTargetLabel}.`;

  const authProgressMessage = authAction === 'open'
    ? `Logging into ${identityNamespace} on ${actionTargetLabel}...`
    : `Claiming ${identityNamespace} on ${actionTargetLabel}...`;

  return {
    username,
    setUsername,
    usernameError,
    normalizedUsername,
    validateUsername,
    secret,
    setSecret,
    showSecret,
    setShowSecret,
    registerOpen,
    openRegisterModal,
    closeRegisterModal,
    registerFullName,
    setRegisterFullName,
    registerUsername,
    setRegisterUsername,
    registerEmail,
    setRegisterEmail,
    registerPhone,
    setRegisterPhone,
    registerPassword,
    setRegisterPassword,
    registerConfirmPassword,
    setRegisterConfirmPassword,
    registerError,
    authStatus,
    authAction,
    authError,
    claimResolution,
    claimResolutionNote,
    sessionAuthenticated,
    bootstrapInfo,
    handleCleak,
    handleRegisterSubmit,
    handleLogout,
    commitRuntimeCredentials,
    authSuccessMessage,
    authProgressMessage,
  };
}

export default useCleakerAuth;
