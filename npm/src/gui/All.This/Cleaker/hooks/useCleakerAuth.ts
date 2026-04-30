import { useCallback, useEffect, useMemo, useState } from 'react';
import { MonadClientError } from '@/core/session/monadClient';
import type { SeedSession } from '@/core/session/createSeedSession';
import { useSeedSession } from '@/react/session/useSeedSession';
import {
  type CleakerBootstrapInfo,
  readCleakerBootstrap,
  sanitizeCleakerUsername,
} from '../runtimeUsername';
import useCleakerSignUp, {
  type CleakerSignUpSubmitInput,
} from './useCleakerSignUp';

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
  authSuccessMessage: string;
  authProgressMessage: string;
};

type HumanizeOptions = {
  namespaceSeedHandle?: string;
  exampleHandle?: string;
};

function cleanString(value: unknown): string {
  return String(value || '').trim();
}

function normalizeUsernameInput(value: string): string {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/^me:\/\//, '')
    .replace(/\/+$/, '')
    .replace(/:\d+$/, '');
}

function usernameRegexPasses(value: string, allowEmpty = false): boolean {
  const normalized = normalizeUsernameInput(value);
  if (!normalized) return allowEmpty;
  if (normalized.length < 5 || normalized.length > 32) return false;
  if (!/^[a-z0-9._-]+$/.test(normalized)) return false;
  if (normalized.startsWith('.') || normalized.endsWith('.') || normalized.includes('..')) return false;
  return true;
}

function toTimestamp(value: unknown): number | null {
  const next = Number(value);
  return Number.isFinite(next) && next > 0 ? next : null;
}

function humanizeCleakerError(
  raw: unknown,
  options: HumanizeOptions = {},
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
    case 'NOISE_DECRYPT_FAILED':
    case 'IDENTITY_MISMATCH':
      return 'Wrong password for this claimed username.';
    case 'NAMESPACE_TAKEN':
      return 'This username is already claimed. Use .me to log in.';
    case 'NAMESPACE_WRITE_FORBIDDEN':
      return 'This namespace refused the write request for the current identity.';
    case 'SEED_REQUIRED':
      return 'Password is required';
    default:
      return code;
  }
}

function getMonadErrorCode(error: unknown): string {
  if (error instanceof MonadClientError) return String(error.code || '').trim();
  if (error instanceof Error) return String(error.message || '').trim();
  return String(error || '').trim();
}

function buildAuthenticatedProfile(args: {
  session: SeedSession;
  fallbackUsername: string;
  activeProfile: CleakerProfileSnapshot;
  fallbackNamespace: string;
  claimedAt?: number | null;
}): CleakerProfileSnapshot {
  const {
    session,
    fallbackUsername,
    activeProfile,
    fallbackNamespace,
    claimedAt,
  } = args;

  return {
    username:
      sanitizeCleakerUsername(cleanString(session.read('profile.username'))) ||
      fallbackUsername,
    name: cleanString(session.read('profile.name')) || activeProfile.name,
    email: cleanString(session.read('profile.email')) || activeProfile.email,
    phone: cleanString(session.read('profile.phone')) || activeProfile.phone,
    namespace: cleanString(session.semanticNamespace) || fallbackNamespace,
    claimedAt:
      toTimestamp(session.read('auth.claimed_at')) ||
      toTimestamp(claimedAt) ||
      activeProfile.claimedAt ||
      Date.now(),
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

  const {
    session,
    authenticated,
    loginWithSeed,
    activateSession,
    logout,
  } = useSeedSession();

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
    if (!usernameRegexPasses(value, false)) {
      return { value, error: 'Only a-z 0-9 . _ -' };
    }
    return { value, error: null as string | null };
  }, [namespaceSeedFallback]);

  const [username, setUsernameState] = useState(() =>
    sanitizeCleakerUsername(String(externalUsername || '').trim()),
  );
  const [secret, setSecretState] = useState('');
  const [showSecret, setShowSecret] = useState(false);
  const [authStatus, setAuthStatus] = useState<AuthStatus>('idle');
  const [authAction, setAuthAction] = useState<AuthAction>('claim');
  const [authError, setAuthError] = useState<string | null>(null);
  const [claimResolution, setClaimResolution] = useState<ClaimResolution>('idle');
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
    setClaimResolution('idle');
  }, []);

  const setSecret = useCallback((next: React.SetStateAction<string>) => {
    setSecretState(next);
    setAuthStatus('idle');
    setAuthError(null);
    setClaimResolution('idle');
  }, []);

  useEffect(() => {
    const explicit = sanitizeCleakerUsername(String(externalUsername || '').trim());
    if (!explicit) return;
    setUsernameState(explicit);
  }, [externalUsername]);

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

  const applyAuthenticatedProfile = useCallback((args: {
    session: SeedSession;
    fallbackUsername: string;
    action: AuthAction;
    claimedAt?: number | null;
    nextSecret?: string;
  }) => {
    const nextProfile = buildAuthenticatedProfile({
      session: args.session,
      fallbackUsername: args.fallbackUsername,
      activeProfile,
      fallbackNamespace: identityNamespace,
      claimedAt: args.claimedAt,
    });

    setUsernameState(nextProfile.username);
    if (typeof args.nextSecret === 'string') {
      setSecretState(args.nextSecret);
    }
    setClaimResolution('openable');
    setAuthStatus('ok');
    setAuthAction(args.action);
    setAuthError(null);
    onAuthenticated?.(nextProfile, args.action);
    onViewModeChange?.('profile');
    window.setTimeout(() => setAuthStatus('idle'), 1200);
    return nextProfile;
  }, [activeProfile, identityNamespace, onAuthenticated, onViewModeChange]);

  const handleMonadFailure = useCallback((error: unknown, fallbackHandle: string) => {
    const code = getMonadErrorCode(error);
    const message = humanizeCleakerError(code, {
      namespaceSeedHandle,
      exampleHandle: fallbackHandle,
    });

    if (code === 'CLAIM_NOT_FOUND') {
      setClaimResolution('unclaimed');
    } else if (
      code === 'CLAIM_VERIFICATION_FAILED' ||
      code === 'NOISE_DECRYPT_FAILED' ||
      code === 'IDENTITY_MISMATCH'
    ) {
      setClaimResolution('locked');
    } else if (code === 'NAMESPACE_TAKEN') {
      setClaimResolution('openable');
    } else {
      setClaimResolution('error');
    }

    setAuthStatus('error');
    setAuthError(message);
    return false;
  }, [namespaceSeedHandle]);

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
    setClaimResolution('checking');

    try {
      const nextSession = await loginWithSeed({
        seed: secret,
        namespace: `${value}.${namespaceSeedHandle}`,
        transportOrigin: actionBaseUrl,
        autoOpen: true,
      });

      applyAuthenticatedProfile({
        session: nextSession,
        fallbackUsername: value,
        action: requestedAction,
        nextSecret: secret,
      });
      return true;
    } catch (error) {
      return handleMonadFailure(error, value);
    }
  }, [
    actionBaseUrl,
    applyAuthenticatedProfile,
    handleMonadFailure,
    loginWithSeed,
    namespaceSeedHandle,
    secret,
    username,
    validateUsername,
  ]);

  const handleSignUpSubmit = useCallback(async (input: CleakerSignUpSubmitInput) => {
    const validated = validateUsername(input.username);

    if (!validated.value || validated.error) {
      setAuthStatus('error');
      setAuthError(validated.error || 'Invalid username');
      return false;
    }

    if (!actionBaseUrl) {
      setAuthStatus('error');
      setAuthError('No Monad host available');
      return false;
    }

    setAuthStatus('checking');
    setAuthAction('claim');
    setAuthError(null);
    setClaimResolution('checking');

    const nextNamespace = `${validated.value}.${namespaceSeedHandle}`;
    const previousSession = session;
    let nextSession: SeedSession | null = null;

    try {
      nextSession = await loginWithSeed({
        seed: input.password,
        namespace: nextNamespace,
        transportOrigin: actionBaseUrl,
        autoOpen: false,
      });

      const claimResult = await nextSession.claim(nextNamespace);
      await nextSession.write('profile.username', validated.value);
      await nextSession.write('profile.name', input.fullName);
      await nextSession.write('profile.email', input.email);
      await nextSession.write('profile.phone', input.phone);
      await nextSession.write('auth.claimed_at', claimResult.createdAt);
      await nextSession.open(nextNamespace);
      activateSession(nextSession);

      applyAuthenticatedProfile({
        session: nextSession,
        fallbackUsername: validated.value,
        action: 'claim',
        claimedAt: claimResult.createdAt,
        nextSecret: input.password,
      });
      return true;
    } catch (error) {
      try {
        nextSession?.logout();
      } catch {
        // Best-effort cleanup for failed signup attempts.
      }
      activateSession(previousSession || null);
      return handleMonadFailure(error, validated.value);
    }
  }, [
    actionBaseUrl,
    activateSession,
    applyAuthenticatedProfile,
    handleMonadFailure,
    loginWithSeed,
    namespaceSeedHandle,
    session,
    validateUsername,
  ]);

  const signUp = useCleakerSignUp({
    username,
    secret,
    validateUsername,
    onSubmit: handleSignUpSubmit,
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
    logout();
    setUsernameState('');
    setSecretState('');
    closeRegisterModal();
    setShowSecret(false);
    setAuthAction('claim');
    setAuthStatus('idle');
    setAuthError(null);
    setClaimResolution('idle');
    onViewModeChange?.('login');
  }, [closeRegisterModal, logout, onViewModeChange]);

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
    sessionAuthenticated: authenticated,
    bootstrapInfo,
    handleCleak,
    handleRegisterSubmit,
    handleLogout,
    authSuccessMessage,
    authProgressMessage,
  };
}

export default useCleakerAuth;
