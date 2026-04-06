import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useGuiTheme } from '@/gui-internals/Hooks';
import Box from '@/gui/Atoms/Box/Box';
import TextField from "@/gui/Atoms/TextField/TextField";
import Icon from "@/gui/Atoms/Icon/Icon";
import IconButton from '@/gui/Atoms/IconButton/IconButton';
import Button from '@/gui/Atoms/Button/Button';
import Modal from "@/gui/Molecules/Modal/Modal";
import {
  type ConnectionStatus,
  useSovereignPresence,
} from "./Namespace/scripts/connection";
import { selectionStore } from '@/runtime/selectionStore';
import {
  deriveChildIdentityHash,
  deriveIdentity,
  deriveIdentityRootHash,
} from "../me/identity";
import QR from "../me/QR";
import { usernameRegexPasses } from 'cleaker';
import {
  type CleakerBootstrapInfo,
  readCleakerBootstrap,
  sanitizeCleakerUsername,
  SESSION_CREDENTIALS_EVENT,
  SESSION_SECRET_STORAGE_KEY,
  SESSION_USERNAME_STORAGE_KEY,
} from './runtimeUsername';
import {
  DEFAULT_CLEAKER_NAMESPACE_EXPRESSION,
  buildCleakerNamespaceUrl,
  parseCleakerNamespaceExpression,
} from "./namespaceExpression";
import { createSurfaceEntry, isLoopbackishHost, resolveSemanticRootName } from "./surfaceModel";

const CLEAKER_NAMESPACE_STORAGE_KEY = 'cleaker.namespace.v1';

function readStoredValue(key: string): string {
  if (typeof window === 'undefined') return '';
  try {
    return String(localStorage.getItem(key) || '').trim();
  } catch {
    return '';
  }
}

function writeStoredValue(key: string, value: string): void {
  if (typeof window === 'undefined') return;
  try {
    const normalized = String(value || '').trim();
    if (normalized) localStorage.setItem(key, normalized);
    else localStorage.removeItem(key);
  } catch {
    // Ignore storage failures in restricted runtimes.
  }
}

type AuthStatus = 'idle' | 'checking' | 'ok' | 'error';
type AuthAction = 'claim' | 'open';
type ClaimResolution = 'idle' | 'checking' | 'openable' | 'locked' | 'unclaimed' | 'error';
type ActionTarget = 'local' | 'cloud' | 'none';
export type CleakerProps = {
  'data-gui-node-id'?: string;
  'data-gui-component'?: string;
  username?: string;
  namespace?: string;
  namespaceOrigin?: string;
};

function describeConnectionStatus(status: ConnectionStatus): string {
  switch (status) {
    case 'online':
      return 'online';
    case 'offline':
      return 'offline';
    case 'declined':
      return 'blocked';
    case 'connecting':
      return 'checking';
    default:
      return 'idle';
  }
}

function readErrorMessage(payload: unknown, status: number, fallback: string): string {
  const body = payload as { error?: string; message?: string } | null;
  return String(body?.error || body?.message || fallback || `HTTP ${status}`);
}

function validateEmail(raw: string): string | null {
  const value = String(raw || '').trim();
  if (!value) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email';
  return null;
}

function validatePhone(raw: string): string | null {
  const value = String(raw || '').trim();
  if (!value) return 'Phone number is required';
  const digits = value.replace(/\D/g, '');
  if (digits.length < 8) return 'Invalid phone number';
  return null;
}

function formatSurfaceNamespace(host: string, port: number | null): string {
  const normalizedHost = String(host || '').trim().toLowerCase();
  if (!normalizedHost) return '';
  return port == null ? normalizedHost : `${normalizedHost}:${port}`;
}

function maskHash(hash: string): string {
  const value = String(hash || '').trim();
  if (!value) return '';
  if (value.length <= 18) return value;
  return `${value.slice(0, 10)}…${value.slice(-8)}`;
}

function compactNamespaceName(raw: string): string {
  return String(raw || '').trim().toLowerCase().replace(/\.local$/, '');
}

function compactSurfaceLabel(raw: string): string {
  return String(raw || '')
    .trim()
    .replace(/^https?:\/\//i, '')
    .replace(/\/+$/, '');
}

export default function Cleaker(props: CleakerProps) {
  const theme = useGuiTheme();
  const rootNodeId = String(props['data-gui-node-id'] || 'Cleaker');
  const rootNodeType = String(props['data-gui-component'] || 'Cleaker');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [namespaceInput, setNamespaceInput] = useState<string>(() => {
    const explicit = String(props.namespace || props.namespaceOrigin || '').trim();
    if (explicit) return explicit;
    return readStoredValue(CLEAKER_NAMESPACE_STORAGE_KEY) || DEFAULT_CLEAKER_NAMESPACE_EXPRESSION;
  });

  const nodeId = useCallback((segment: string) => `${rootNodeId}/${segment}`, [rootNodeId]);
  const nodePath = useCallback((segment: string) => `${rootNodeId}.${segment}`, [rootNodeId]);
  const nodeAttrs = useCallback(
    (segment: string, component: string) => ({
      'data-gui-node-id': nodeId(segment),
      'data-gui-component': component,
    }),
    [nodeId]
  );

  const sanitizeRuntimeUsername = useCallback((raw: string) => sanitizeCleakerUsername(raw), []);

  useEffect(() => {
    const explicit = String(props.namespace || props.namespaceOrigin || '').trim();
    if (!explicit) return;
    setNamespaceInput(explicit);
  }, [props.namespace, props.namespaceOrigin]);

  const namespaceConfig = useMemo(() => {
    try {
      return parseCleakerNamespaceExpression(namespaceInput);
    } catch {
      return parseCleakerNamespaceExpression(DEFAULT_CLEAKER_NAMESPACE_EXPRESSION);
    }
  }, [namespaceInput]);
  const namespaceOrigin = namespaceConfig.transport.origin;
  const namespaceHost = namespaceConfig.constant;
  const namespaceDisplayHost = namespaceConfig.displayHost;
  const namespaceSeedFallback = useMemo(() => {
    return String(namespaceHost || '').trim().toLowerCase().replace(/:\d+$/, '');
  }, [namespaceHost]);

  const validateUsername = useCallback((raw: string) => {
    const value = sanitizeRuntimeUsername(raw);
    if (!value) return { value: '', error: null as string | null };
    if (value.length < 5) return { value, error: 'Username too short' };
    if (value.length > 32) return { value, error: 'Username too long' };
    if (!usernameRegexPasses(value, { allowEmpty: false })) {
      return { value, error: 'Only a-z 0-9 . _ -' };
    }
    return { value, error: null as string | null };
  }, [sanitizeRuntimeUsername]);

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [secret, setSecret] = useState('');
  const [registerOpen, setRegisterOpen] = useState(false);
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPhone, setRegisterPhone] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [registerError, setRegisterError] = useState<string | null>(null);
  const [showSecret, setShowSecret] = useState(false);
  const [avatarExpanded, setAvatarExpanded] = useState(false);
  const [authStatus, setAuthStatus] = useState<AuthStatus>('idle');
  const [authAction, setAuthAction] = useState<AuthAction>('claim');
  const [authError, setAuthError] = useState<string | null>(null);
  const [claimResolution, setClaimResolution] = useState<ClaimResolution>('idle');
  const [bootstrapInfo, setBootstrapInfo] = useState<CleakerBootstrapInfo | null>(null);

  const commitRuntimeCredentials = useCallback((nextUsername: string, nextSecret: string) => {
    const normalizedUsername = sanitizeRuntimeUsername(nextUsername);
    const normalizedSecret = String(nextSecret || '').trim();

    try {
      if (normalizedUsername) localStorage.setItem(SESSION_USERNAME_STORAGE_KEY, normalizedUsername);
      else localStorage.removeItem(SESSION_USERNAME_STORAGE_KEY);

      if (normalizedSecret) localStorage.setItem(SESSION_SECRET_STORAGE_KEY, normalizedSecret);
      else localStorage.removeItem(SESSION_SECRET_STORAGE_KEY);

      window.dispatchEvent(new CustomEvent(SESSION_CREDENTIALS_EVENT, {
        detail: {
          username: normalizedUsername,
          secret: normalizedSecret,
        },
      }));
    } catch {
      // Ignore storage and event failures in restricted runtimes.
    }
  }, [sanitizeRuntimeUsername]);

  const normalizedUsername = useMemo(() => {
    const { value, error } = validateUsername(username);
    return error ? '' : value;
  }, [username, validateUsername]);

  const {
    parentHost,
    parentStatus,
  } = useSovereignPresence({
    parent: namespaceOrigin,
    local: '',
  });

  const isParentOnline = parentStatus === 'online';

  useEffect(() => {
    writeStoredValue(CLEAKER_NAMESPACE_STORAGE_KEY, namespaceInput || DEFAULT_CLEAKER_NAMESPACE_EXPRESSION);
  }, [namespaceInput]);

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

  const actionTarget = useMemo<ActionTarget>(() => {
    if (namespaceOrigin || isParentOnline) return 'cloud';
    return 'none';
  }, [isParentOnline, namespaceOrigin]);

  const actionBaseUrl = useMemo(() => {
    if (actionTarget === 'cloud') return namespaceOrigin;
    return '';
  }, [actionTarget, namespaceOrigin]);

  const actionTargetLabel = useMemo(() => {
    if (actionTarget === 'cloud') return parentHost || namespaceDisplayHost || namespaceHost || 'cleaker.me';
    return 'offline';
  }, [actionTarget, namespaceDisplayHost, namespaceHost, parentHost]);

  const rootHostNamespace = useMemo(() => {
    return String(namespaceConfig.transport.host || '').trim().toLowerCase();
  }, [namespaceConfig.transport.host]);

  const surfaceNamespace = useMemo(() => {
    return formatSurfaceNamespace(namespaceConfig.transport.host, namespaceConfig.transport.port);
  }, [namespaceConfig.transport.host, namespaceConfig.transport.port]);

  const subjectSurfaceNamespace = useMemo(() => {
    if (!normalizedUsername || !surfaceNamespace) return '';
    return `${normalizedUsername}.${surfaceNamespace}`;
  }, [normalizedUsername, surfaceNamespace]);

  const resolverHostName = useMemo(() => {
    return String(bootstrapInfo?.resolverHostName || '').trim().toLowerCase();
  }, [bootstrapInfo?.resolverHostName]);

  const resolverDisplayName = useMemo(() => {
    return String(bootstrapInfo?.resolverDisplayName || '').trim();
  }, [bootstrapInfo?.resolverDisplayName]);

  const resolverSurfaceNamespace = useMemo(() => {
    if (!resolverHostName) return '';
    return formatSurfaceNamespace(resolverHostName, namespaceConfig.transport.port);
  }, [namespaceConfig.transport.port, resolverHostName]);

  const resolverSubjectSurfaceNamespace = useMemo(() => {
    if (!normalizedUsername || !resolverSurfaceNamespace) return '';
    return `${normalizedUsername}.${resolverSurfaceNamespace}`;
  }, [normalizedUsername, resolverSurfaceNamespace]);

  const hostResolvedSurfaceEntry = useMemo(() => {
    const entry = bootstrapInfo?.surfaceEntry;
    if (!entry) return null;

    return {
      ...entry,
      status: {
        ...entry.status,
        availability: parentStatus === 'online' ? 'online' : entry.status.availability,
        syncState: parentStatus === 'online' ? 'current' : entry.status.syncState,
        lastSeen: parentStatus === 'online' ? Date.now() : entry.status.lastSeen,
      },
    };
  }, [bootstrapInfo?.surfaceEntry, parentStatus]);

  const semanticRootName = useMemo(() => {
    const resolvedRoot = String(hostResolvedSurfaceEntry?.rootName || '').trim().toLowerCase();
    if (resolvedRoot) return resolvedRoot;
    return resolveSemanticRootName({
      namespaceHandle: namespaceHost,
      resolverHostName,
      rootHostNamespace,
    });
  }, [hostResolvedSurfaceEntry?.rootName, namespaceHost, resolverHostName, rootHostNamespace]);

  const namespaceSeedHandle = useMemo(() => {
    return String(semanticRootName || namespaceSeedFallback || '').trim().toLowerCase();
  }, [namespaceSeedFallback, semanticRootName]);

  const identityNamespace = useMemo(() => {
    return normalizedUsername ? `${normalizedUsername}.${namespaceSeedHandle}` : namespaceSeedHandle;
  }, [namespaceSeedHandle, normalizedUsername]);

  const typingNamespace = useMemo(() => {
    const draft = sanitizeRuntimeUsername(username);
    return draft ? `${draft}.${namespaceSeedHandle}` : namespaceSeedHandle;
  }, [namespaceSeedHandle, sanitizeRuntimeUsername, username]);

  const subjectHandleNamespace = useMemo(() => {
    if (!normalizedUsername) return '';
    return `${normalizedUsername}.${namespaceSeedHandle}`;
  }, [namespaceSeedHandle, normalizedUsername]);

  const liveUsernameState = useMemo(() => {
    const raw = String(username || '').trim();
    if (!raw) return 'idle' as const;
    if (usernameError) return 'invalid' as const;
    return 'valid' as const;
  }, [username, usernameError]);

  const liveUsernameNote = useMemo(() => {
    if (liveUsernameState === 'invalid') return String(usernameError || 'invalid username format');
    if (liveUsernameState === 'valid') return identityNamespace;
    return '';
  }, [identityNamespace, liveUsernameState, usernameError]);

  const rootNamespaceHash = useMemo(() => {
    return deriveIdentityRootHash(secret, namespaceSeedHandle || rootHostNamespace);
  }, [namespaceSeedHandle, rootHostNamespace, secret]);

  const surfaceNamespaceHash = useMemo(() => {
    return rootNamespaceHash;
  }, [rootNamespaceHash]);

  const subjectNamespaceHash = useMemo(() => {
    if (!normalizedUsername) return rootNamespaceHash;
    return deriveChildIdentityHash(rootNamespaceHash, normalizedUsername);
  }, [normalizedUsername, rootNamespaceHash]);

  const localNamespaceUrl = useMemo(() => {
    if (!surfaceNamespace) return '';
    const label = normalizedUsername ? `${normalizedUsername}.` : '';
    return `${namespaceConfig.transport.protocol}://${label}${surfaceNamespace}`;
  }, [namespaceConfig.transport.protocol, normalizedUsername, surfaceNamespace]);

  const networkNamespaceUrl = useMemo(() => {
    if (!resolverSurfaceNamespace) return '';
    const label = normalizedUsername ? `${normalizedUsername}.` : '';
    return `${namespaceConfig.transport.protocol}://${label}${resolverSurfaceNamespace}`;
  }, [namespaceConfig.transport.protocol, normalizedUsername, resolverSurfaceNamespace]);

  const activeNamespaceUrl = useMemo(() => {
    if (isLoopbackishHost(namespaceConfig.transport.host) && networkNamespaceUrl) return networkNamespaceUrl;
    if (localNamespaceUrl) return localNamespaceUrl;

    try {
      return buildCleakerNamespaceUrl(namespaceConfig, normalizedUsername || undefined);
    } catch {
      return namespaceOrigin || '';
    }
  }, [
    localNamespaceUrl,
    namespaceConfig,
    namespaceOrigin,
    networkNamespaceUrl,
    normalizedUsername,
  ]);

  const surfaceEntry = useMemo(() => {
    if (hostResolvedSurfaceEntry) return hostResolvedSurfaceEntry;
    return createSurfaceEntry({
      namespaceUrl: activeNamespaceUrl,
      endpoint: namespaceOrigin,
      namespaceHandle: namespaceSeedHandle,
      rootHostNamespace,
      resolverHostName,
      connected: parentStatus === 'online',
    });
  }, [
    activeNamespaceUrl,
    hostResolvedSurfaceEntry,
    namespaceSeedHandle,
    namespaceOrigin,
    parentStatus,
    resolverHostName,
    rootHostNamespace,
  ]);

  const previewQrValue = useMemo(() => {
    return activeNamespaceUrl || subjectNamespaceHash || surfaceNamespaceHash || rootNamespaceHash;
  }, [activeNamespaceUrl, rootNamespaceHash, subjectNamespaceHash, surfaceNamespaceHash]);

  const compactMonadLabel = useMemo(() => {
    return compactSurfaceLabel(surfaceNamespace || namespaceOrigin || namespaceHost || 'unknown');
  }, [namespaceHost, namespaceOrigin, surfaceNamespace]);

  const compactRootLabel = useMemo(() => {
    return compactNamespaceName(namespaceSeedHandle || rootHostNamespace || '—') || '—';
  }, [namespaceSeedHandle, rootHostNamespace]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const detail = {
      namespaceExpression: namespaceConfig.expression,
      namespaceOrigin,
      namespaceHost,
      semanticRootName,
      localNamespaceUrl,
      networkNamespaceUrl,
      identityNamespace,
      rootHostNamespace,
      surfaceNamespace,
      resolverHostName,
      resolverDisplayName,
      resolverSurfaceNamespace,
      resolverSubjectSurfaceNamespace,
      surfaceEntry,
      subjectSurfaceNamespace,
      subjectHandleNamespace,
      namespaceUrl: activeNamespaceUrl,
      rootNamespaceHash,
      surfaceNamespaceHash,
      subjectNamespaceHash,
      previewQrValue,
      endpoint: namespaceOrigin,
    };

    try {
      (window as any).__cleakerNamespacePreview = detail;
      window.dispatchEvent(new CustomEvent('cleaker:namespace-preview-changed', { detail }));
    } catch {
      // Ignore preview broadcast failures in restricted runtimes.
    }
  }, [
    identityNamespace,
    namespaceConfig.expression,
    namespaceHost,
    namespaceOrigin,
    semanticRootName,
    localNamespaceUrl,
    networkNamespaceUrl,
    resolverDisplayName,
    resolverHostName,
    resolverSurfaceNamespace,
    resolverSubjectSurfaceNamespace,
    surfaceEntry,
    activeNamespaceUrl,
    previewQrValue,
    rootHostNamespace,
    rootNamespaceHash,
    subjectHandleNamespace,
    subjectNamespaceHash,
    subjectSurfaceNamespace,
    surfaceNamespace,
    surfaceNamespaceHash,
  ]);

  const identity = useMemo(() => {
    return deriveIdentity({
      secret,
      namespace: identityNamespace,
    });
  }, [identityNamespace, secret]);

  const openRegisterModal = useCallback(() => {
    setRegisterUsername((current) => current || username);
    setRegisterPassword((current) => current || secret);
    setRegisterConfirmPassword((current) => current || secret);
    setRegisterError(null);
    setRegisterOpen(true);
  }, [secret, username]);

  const closeRegisterModal = useCallback(() => {
    setRegisterOpen(false);
    setRegisterError(null);
  }, []);

  const claimResolutionNote = useMemo(() => {
    if (claimResolution === 'locked') {
      return `Password did not unlock ${actionTargetLabel}.`;
    }
    if (claimResolution === 'error') {
      return `Could not verify claim state on ${actionTargetLabel}.`;
    }
    return '';
  }, [actionTargetLabel, claimResolution]);

  const postNamespaceOperation = useCallback(async (path: '/claims' | '/claims/open') => {
    const response = await fetch(`${actionBaseUrl}${path}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        namespace: identityNamespace,
        secret,
      }),
    });

    const payload = await response.json().catch(() => null);
    return { response, payload };
  }, [actionBaseUrl, identityNamespace, secret]);

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

    let finalAction: AuthAction = requestedAction;
    setAuthStatus('checking');
    setAuthAction(finalAction);
    setAuthError(null);
    commitRuntimeCredentials(value, secret);

    try {
      if (requestedAction === 'open') {
        const { response, payload } = await postNamespaceOperation('/claims/open');
        if (!response.ok) {
          if (response.status === 403) setClaimResolution('locked');
          if (response.status === 404) setClaimResolution('unclaimed');
          if (response.status === 403 || response.status === 404) {
            throw new Error('Wrong Credentials');
          }
          throw new Error(readErrorMessage(payload, response.status, 'Wrong Credentials'));
        }
        setClaimResolution('openable');
      } else {
        const claimed = await postNamespaceOperation('/claims');
        if (claimed.response.ok) {
          setClaimResolution('openable');
        } else if (claimed.response.status === 409) {
          throw new Error('Namespace already claimed. Use Login.');
        } else {
          throw new Error(readErrorMessage(claimed.payload, claimed.response.status, 'Failed to claim namespace'));
        }
      }

      setAuthStatus('ok');
      setAuthAction(finalAction);
      window.setTimeout(() => setAuthStatus('idle'), 1200);
      return true;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setAuthStatus('error');
      setAuthError(message);
      return false;
    }
  }, [actionBaseUrl, commitRuntimeCredentials, postNamespaceOperation, secret, username, validateUsername]);

  const handleRegisterSubmit = useCallback(async () => {
    const validated = validateUsername(registerUsername);
    const emailError = validateEmail(registerEmail);
    const phoneError = validatePhone(registerPhone);
    const normalizedPassword = String(registerPassword || '');
    const normalizedConfirm = String(registerConfirmPassword || '');

    if (!validated.value || validated.error) {
      setRegisterError(validated.error || 'Invalid username');
      return false;
    }
    if (emailError) {
      setRegisterError(emailError);
      return false;
    }
    if (phoneError) {
      setRegisterError(phoneError);
      return false;
    }
    if (!normalizedPassword) {
      setRegisterError('Password is required');
      return false;
    }
    if (normalizedPassword !== normalizedConfirm) {
      setRegisterError('Passwords do not match');
      return false;
    }
    if (!actionBaseUrl) {
      setRegisterError('No Monad host available');
      return false;
    }

    setAuthStatus('checking');
    setAuthAction('claim');
    setAuthError(null);
    setRegisterError(null);

    const nextNamespace = `${validated.value}.${namespaceSeedHandle}`;

    try {
      const response = await fetch(`${actionBaseUrl}/claims`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          namespace: nextNamespace,
          secret: normalizedPassword,
          username: validated.value,
          email: String(registerEmail || '').trim(),
          phone: String(registerPhone || '').trim(),
        }),
      });

      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        if (response.status === 409) {
          setClaimResolution('openable');
          throw new Error('Namespace already claimed. Use .me.');
        }
        throw new Error(readErrorMessage(payload, response.status, 'Failed to claim namespace'));
      }

      setUsername(validated.value);
      setUsernameError(null);
      setSecret(normalizedPassword);
      commitRuntimeCredentials(validated.value, normalizedPassword);
      setClaimResolution('openable');
      setAuthStatus('ok');
      setAuthAction('claim');
      setRegisterOpen(false);
      window.setTimeout(() => setAuthStatus('idle'), 1200);
      return true;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setRegisterError(message);
      setAuthStatus('error');
      setAuthError(message);
      return false;
    }
  }, [
    actionBaseUrl,
    commitRuntimeCredentials,
    namespaceSeedHandle,
    registerConfirmPassword,
    registerEmail,
    registerPassword,
    registerPhone,
    registerUsername,
    validateUsername,
  ]);

  const connectionTone = useCallback((status: ConnectionStatus) => {
    if (status === 'online') return theme.palette.success.main;
    if (status === 'connecting') return theme.palette.warning.main;
    if (status === 'offline' || status === 'declined') return theme.palette.error.main;
    return theme.palette.text.secondary;
  }, [theme.palette.error.main, theme.palette.success.main, theme.palette.text.secondary, theme.palette.warning.main]);


  const isActionDisabled = !normalizedUsername || !secret || actionTarget === 'none' || authStatus === 'checking';
  const authSuccessMessage = authAction === 'open'
    ? `Logged in on ${actionTargetLabel}.`
    : `Claimed on ${actionTargetLabel}.`;
  const authProgressMessage = authAction === 'open'
    ? `Logging into ${identityNamespace} on ${actionTargetLabel}...`
    : `Claiming ${identityNamespace} on ${actionTargetLabel}...`;
  const secretInputType = showSecret ? 'text' : 'password';

  useEffect(() => {
    const registeredIds: string[] = [];

    const registerNode = (
      id: string,
      path: string,
      type: string,
      resolvedProps: Record<string, unknown>
    ) => {
      registeredIds.push(id);
      selectionStore.actions.registerNode({
        id,
        path,
        type,
        spec: {
          type,
          props: resolvedProps,
        },
        resolvedProps,
      });
    };

    registerNode(rootNodeId, rootNodeId, rootNodeType, {
      namespaceExpression: namespaceConfig.expression,
      namespace: identityNamespace,
      namespaceHost,
      namespaceOrigin,
      actionTarget,
      actionBaseUrl,
      claimResolution,
    });

    registerNode(nodeId('card'), nodePath('card'), 'Cleaker.Card', {
      namespace: identityNamespace,
      expandedAvatar: avatarExpanded,
      namespaceSurface: namespaceDisplayHost,
      namespaceStatus: describeConnectionStatus(parentStatus),
    });
    registerNode(nodeId('avatar'), nodePath('avatar'), 'Cleaker.AvatarQR', {
      identityRoot: identity.identityRoot,
      namespaceUrl: activeNamespaceUrl,
      expanded: avatarExpanded,
    });
    registerNode(nodeId('identity'), nodePath('identity'), 'Cleaker.IdentityField', {
      username,
      namespace: typingNamespace,
      valid: liveUsernameState === 'valid',
      error: usernameError,
    });
    registerNode(nodeId('namespace'), nodePath('namespace'), 'Cleaker.NamespaceSurface', {
      label: namespaceDisplayHost,
      status: describeConnectionStatus(parentStatus),
      expression: namespaceConfig.expression,
    });
    registerNode(nodeId('password'), nodePath('password'), 'Cleaker.PasswordField', {
      hasValue: Boolean(secret),
      visible: showSecret,
    });
    registerNode(nodeId('action-login'), nodePath('action-login'), 'Cleaker.PrimaryAction', {
      label: '⟁.me',
      title: 'Login',
      disabled: isActionDisabled,
      intent: 'open',
      target: actionTargetLabel,
    });
    registerNode(nodeId('action-register'), nodePath('action-register'), 'Cleaker.RegisterAction', {
      label: 'Sign Up',
      title: 'Sign Up',
      disabled: false,
      intent: 'claim',
      target: actionTargetLabel,
    });
    registerNode(nodeId('feedback'), nodePath('feedback'), 'Cleaker.Feedback', {
      claimResolution,
      claimResolutionNote,
      authStatus,
      authError,
      authProgressMessage,
      authSuccessMessage,
    });
    registerNode(nodeId('settings'), nodePath('settings'), 'Cleaker.Settings', {
      open: settingsOpen,
      expression: namespaceConfig.expression,
      namespaceOrigin,
      namespaceHost,
      rootHostNamespace,
      semanticRootName,
      localNamespaceUrl,
      networkNamespaceUrl,
      surfaceNamespace,
      resolverHostName,
      resolverDisplayName,
      resolverSurfaceNamespace,
      resolverSubjectSurfaceNamespace,
      surfaceEntry,
      subjectSurfaceNamespace,
      subjectHandleNamespace,
      rootNamespaceHash,
      surfaceNamespaceHash,
      subjectNamespaceHash,
    });
    registerNode(nodeId('register-modal'), nodePath('register-modal'), 'Cleaker.RegisterModal', {
      open: registerOpen,
      username: registerUsername,
      email: registerEmail,
      phone: registerPhone,
    });

    return () => {
      registeredIds.forEach((id) => selectionStore.actions.unregisterNode(id));
    };
  }, [
    actionBaseUrl,
    actionTarget,
    actionTargetLabel,
    authError,
    authProgressMessage,
    authStatus,
    authSuccessMessage,
    avatarExpanded,
    claimResolution,
    claimResolutionNote,
    identity.identityRoot,
    identityNamespace,
    isActionDisabled,
    liveUsernameState,
    namespaceConfig.expression,
    namespaceDisplayHost,
    namespaceHost,
    namespaceOrigin,
    semanticRootName,
    localNamespaceUrl,
    networkNamespaceUrl,
    resolverDisplayName,
    resolverHostName,
    resolverSurfaceNamespace,
    resolverSubjectSurfaceNamespace,
    surfaceEntry,
    activeNamespaceUrl,
    nodeId,
    nodePath,
    previewQrValue,
    props,
    rootNodeId,
    rootNodeType,
    rootHostNamespace,
    rootNamespaceHash,
    compactMonadLabel,
    compactRootLabel,
    registerEmail,
    registerOpen,
    registerPhone,
    registerUsername,
    secret,
    settingsOpen,
    showSecret,
    subjectHandleNamespace,
    subjectNamespaceHash,
    subjectSurfaceNamespace,
    surfaceNamespace,
    surfaceNamespaceHash,
    typingNamespace,
    username,
    usernameError,
    parentStatus,
  ]);

  return (
    <Box
      data-gui-node-id={rootNodeId}
      data-gui-component={rootNodeType}
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 300px)',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'start',
      }}
    >
      <Box
        {...nodeAttrs('card', 'Cleaker.Card')}
        sx={{
          border: `1px solid ${theme.palette.section.subtle}`,
          borderRadius: '12px',
          p: 1.5,
          width: '100%',
          maxWidth: '300px',
          background:
            theme.palette.mode === 'dark'
              ? theme.palette.section.default
              : theme.palette.section.subtle,
          position: 'relative',
        }}
      >
        <Box
          {...nodeAttrs('header', 'Cleaker.Header')}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 1,
            mb: 0.5,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, minWidth: 0, flex: 1 }}>
            <Box
              {...nodeAttrs('avatar', 'Cleaker.AvatarQR')}
              onClick={() => setAvatarExpanded((value) => !value)}
              sx={{
                width: avatarExpanded ? 164 : 72,
                height: avatarExpanded ? 164 : 72,
                borderRadius: '50%',
                overflow: 'hidden',
                border: `1px solid ${theme.palette.primary.main}66`,
                boxShadow: avatarExpanded
                  ? `0 0 0 2px ${theme.palette.primary.main}44, 0 10px 24px rgba(0,0,0,0.25)`
                  : `0 0 0 1px ${theme.palette.primary.main}33`,
                background:
                  theme.palette.mode === 'dark'
                    ? theme.palette.section.subtle
                    : theme.palette.background.paper,
                cursor: 'pointer',
                transition: 'width 180ms ease, height 180ms ease, box-shadow 180ms ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
              aria-label={avatarExpanded ? 'Collapse avatar QR' : 'Expand avatar QR'}
              title={avatarExpanded ? 'Click to collapse' : 'Click to expand'}
            >
              <QR
                value={activeNamespaceUrl || identity.identityRoot}
                size={avatarExpanded ? 164 : 72}
                fg={theme.palette.primary.main}
                ecc="H"
                embedMode="positive-overlay"
                embedScale={0.36}
                embedBitmap={[
                  "000000000000000000000000000111111000",
                  "000000000000000000000000000111111000",
                  "111000111111111110000000111111111111",
                  "111000111111111110000000111000000111",
                  "111000111111111110000000111000000111",
                  "000000111001111001110000111111111111",
                  "000000111001111001110000111111111111",
                  "000000111001111001110000111111111111",
                  "000000111001111001110000111000000000",
                  "000000111001111001110000111000000000",
                  "000000000000000000000000000000000000",
                  "000000111000000001110000111000000000",
                  "000000111000000001110000111000000000",
                  "000000111000000001110000111111111111",
                  "000000111000000001110000000111111111",
                  "000000111000000001110000000111111111",
                ]}
              />
            </Box>

            <Box
              {...nodeAttrs('identity-shell', 'Cleaker.IdentityShell')}
              sx={{ display: 'flex', flexDirection: 'column', gap: 0.35, minWidth: 0 }}
            >
              <pre style={{ margin: 0, padding: 0, lineHeight: '12px', fontSize: '12px', color: theme.palette.text.primary }}>
                {`
    ┓   ┏┓
 ┓┏┏┣┓┏┓┏┛
•┗┻┛┛┗┗┛•
             `}
              </pre>

              <Box
                {...nodeAttrs('identity', 'Cleaker.IdentityField')}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 0.2,
                  minWidth: 0,
                }}
              >
                <TextField
                  {...nodeAttrs('identity-input', 'Cleaker.IdentityInput')}
                  variant="standard"
                  placeholder="username"
                  autoComplete="off"
                    value={username}
                    onChange={(event) => {
                      const next = event.target.value;
                      setUsername(next);
                      setAuthStatus('idle');
                      setAuthError(null);
                    const { error } = validateUsername(next);
                    setUsernameError(error);
                  }}
                  onBlur={() => {
                    const { error } = validateUsername(username);
                    setUsernameError(error);
                    commitRuntimeCredentials(username, secret);
                  }}
                  error={Boolean(usernameError)}
                  fullWidth
                  slotProps={{
                    htmlInput: {
                      autoCapitalize: 'none',
                      autoCorrect: 'off',
                      spellCheck: false,
                      inputMode: 'text',
                    },
                    input: {
                      disableUnderline: true,
                      endAdornment: (
                        <Box
                  sx={{
                            pl: 0.55,
                            fontSize: '11px',
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            whiteSpace: 'nowrap',
                            opacity: username ? 1 : 0.7,
                          }}
                        >
                          .{namespaceSeedHandle}
                        </Box>
                      ),
                    },
                  }}
                  sx={{
                    width: '100%',
                    '& .MuiInputBase-root': {
                      alignItems: 'baseline',
                      gap: 0,
                      px: 0,
                      py: 0,
                    },
                    '& .MuiInputBase-input': {
                      padding: 0,
                      fontSize: '11px',
                      fontWeight: 700,
                      lineHeight: 1.2,
                      color: theme.palette.text.primary,
                      minWidth: 0,
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: theme.palette.text.secondary,
                      opacity: 0.72,
                    },
                    '& .MuiInputBase-root:after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: -2,
                      height: '2px',
                      borderRadius: '999px',
                      backgroundColor:
                        !username
                          ? 'transparent'
                          : usernameError
                            ? theme.palette.error.main
                            : theme.palette.success.main,
                      pointerEvents: 'none',
                    },
                  }}
                />
              </Box>
              {liveUsernameState === 'invalid' && liveUsernameNote ? (
                <Box
                  {...nodeAttrs('identity-note', 'Cleaker.IdentityNote')}
                  sx={{
                    fontSize: '10px',
                    lineHeight: 1.1,
                    color: theme.palette.error.main,
                    userSelect: 'none',
                  }}
                >
                  {liveUsernameNote}
                </Box>
              ) : null}
            </Box>
          </Box>

          <IconButton
            {...nodeAttrs('settings-toggle', 'Cleaker.SettingsToggle')}
            size="small"
            onClick={() => setSettingsOpen((value) => !value)}
            aria-label={settingsOpen ? 'Close Cleaker settings' : 'Open Cleaker settings'}
            sx={{
              mt: -0.25,
              mr: -0.5,
              color: settingsOpen ? theme.palette.primary.main : theme.palette.text.secondary,
              alignSelf: 'flex-start',
            }}
          >
            <Icon name="settings" fontSize={18 as any} />
          </IconButton>
        </Box>

        {claimResolutionNote ? (
          <Box
            {...nodeAttrs('claim-note', 'Cleaker.ClaimState')}
            sx={{
              fontSize: '11px',
              lineHeight: 1.4,
              color: theme.palette.text.secondary,
              px: 0.75,
              mt: 1,
            }}
          >
            {claimResolutionNote}
          </Box>
        ) : null}

        {settingsOpen ? (
          <Box
            {...nodeAttrs('settings-panel', 'Cleaker.SettingsPanel')}
            sx={{
              mt: 1,
              mb: 1,
              px: 0.75,
              py: 1,
              borderRadius: '10px',
              border: `1px solid ${theme.palette.divider}`,
              background:
                theme.palette.mode === 'dark'
                  ? 'rgba(255,255,255,0.02)'
                  : 'rgba(0,0,0,0.02)',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <TextField
              {...nodeAttrs('settings-namespace', 'Cleaker.SettingsNamespace')}
              label="Namespace"
              size="small"
              value={namespaceInput}
              onChange={(event) => setNamespaceInput(event.target.value)}
              onBlur={() => {
                const next = String(namespaceInput || '').trim() || DEFAULT_CLEAKER_NAMESPACE_EXPRESSION;
                setNamespaceInput(next);
              }}
              helperText={`seed: ${namespaceSeedHandle} · alias: ${namespaceOrigin} · e.g. cleaker.me or cleaker.me[host:localhost|protocol:http|port:8161]`}
              fullWidth
            />
            <Box
              {...nodeAttrs('settings-preview', 'Cleaker.NamespacePreview')}
              sx={{
                mt: 0.25,
                pt: 1,
                borderTop: `1px solid ${theme.palette.divider}`,
                display: 'grid',
                gridTemplateColumns: '72px minmax(0, 1fr)',
                gap: 1,
                alignItems: 'start',
              }}
            >
              <Box
                {...nodeAttrs('settings-preview-qr', 'Cleaker.NamespacePreviewQR')}
                sx={{
                  width: 96,
                  height: 96,
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: `1px solid ${theme.palette.divider}`,
                  background: theme.palette.background.paper,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <QR
                  value={previewQrValue}
                  size={96}
                  fg={theme.palette.primary.main}
                  ecc="H"
                  embedMode="positive-overlay"
                  embedScale={0.32}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0.5,
                  minWidth: 0,
                }}
              >
                <Box
                  sx={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: 0.3,
                    textTransform: 'uppercase',
                    color: theme.palette.primary.main,
                  }}
                >
                  Namespace Preview
                </Box>
                <Box
                  title={`Expression: ${namespaceConfig.expression} · local=${localNamespaceUrl || '—'} · network=${networkNamespaceUrl || '—'} · node=${resolverDisplayName || '—'}`}
                  sx={{ fontSize: '11px', lineHeight: 1.4, color: theme.palette.text.secondary }}
                >
                  monad.ai: <Box component="span" sx={{ color: theme.palette.text.primary, fontFamily: 'monospace' }}>{compactMonadLabel}</Box>
                </Box>
                <Box sx={{ fontSize: '11px', lineHeight: 1.35, color: theme.palette.text.secondary }}>
                  Namespace: <Box component="span" sx={{ color: theme.palette.text.primary, fontFamily: 'monospace' }}>{compactRootLabel}</Box>
                </Box>
                <Box sx={{ fontSize: '11px', lineHeight: 1.35, color: theme.palette.text.secondary }}>
                  Root Hash: <Box component="span" sx={{ color: theme.palette.text.primary, fontFamily: 'monospace' }}>{maskHash(rootNamespaceHash)}</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : null}

        <Box
          {...nodeAttrs('controls', 'Cleaker.Controls')}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.25,
            mt: 1.25,
            width: '100%',
            px: 0.5,
          }}
        >
          <TextField
            {...nodeAttrs('password', 'Cleaker.PasswordField')}
            label="Password"
            type={secretInputType}
            variant="outlined"
            autoComplete="current-password"
            value={secret}
            onChange={(event) => {
              setSecret(event.target.value);
              setAuthStatus('idle');
              setAuthError(null);
            }}
            onBlur={() => commitRuntimeCredentials(username, secret)}
            fullWidth
            slotProps={{
              htmlInput: {
                autoCapitalize: 'none',
                autoCorrect: 'off',
                spellCheck: false,
              },
              input: {
                endAdornment: (
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => setShowSecret((value) => !value)}
                    sx={{
                      minWidth: '32px',
                      p: 0,
                      mr: '-6px',
                      color: secret ? theme.palette.text.secondary : theme.palette.divider,
                    }}
                    aria-label={showSecret ? 'Hide secret' : 'Show secret'}
                  >
                    <Icon name={showSecret ? 'visibility_off' : 'visibility'} fontSize={18} fill={showSecret ? 1 : 0} />
                  </Button>
                ),
              },
            }}
            sx={{
              '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active': {
                WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.paper} inset`,
                WebkitTextFillColor: theme.palette.text.primary,
                caretColor: theme.palette.text.primary,
                transition: 'background-color 9999s ease-out 0s',
              },
            }}
          />

          <Box
            {...nodeAttrs('actions', 'Cleaker.Actions')}
            sx={{ display: 'flex', width: '100%', gap: 0.5, alignItems: 'center', justifyContent: 'flex-end' }}
          >
            <Button
              {...nodeAttrs('action-register', 'Cleaker.RegisterAction')}
              variant="text"
              size="small"
              onClick={() => {
                openRegisterModal();
              }}
              aria-label="Sign Up"
              sx={{
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 500,
                minWidth: 'unset',
                fontSize: '0.78rem',
                letterSpacing: 0.1,
                px: 0.75,
                py: 0.25,
                color: theme.palette.text.secondary,
                opacity: 0.8,
                '&:hover': {
                  background: 'transparent',
                  color: theme.palette.text.primary,
                  opacity: 1,
                },
              }}
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                void handleCleak('open');
              }}
              aria-label="Login"
              sx={{
                borderRadius: '10px',
                textTransform: 'none',
                fontWeight: 600,
                minWidth: '96px',
                fontSize: '0.9rem',
                letterSpacing: 0.3,
                padding: '6px 14px',
                borderWidth: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                background: 'none',
                color: theme.palette.text.primary,
                borderColor: theme.palette.divider,
              }}
              disabled={isActionDisabled}
            >
              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.6 }}>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M6 1.4L10.5 9.2H1.5L6 1.4Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
                <span>.me</span>
              </Box>
            </Button>
          </Box>

          {authStatus === 'checking' ? (
            <span
              {...nodeAttrs('feedback', 'Cleaker.Feedback')}
              style={{ fontSize: '11px', color: theme.palette.text.secondary, paddingLeft: 2 }}
            >
              {authProgressMessage}
            </span>
          ) : null}

          {authStatus === 'error' && authError ? (
            <span
              {...nodeAttrs('feedback', 'Cleaker.Feedback')}
              style={{ fontSize: '11px', color: theme.palette.error.main, paddingLeft: 2 }}
            >
              {authError}
            </span>
          ) : null}

          {authStatus === 'ok' ? (
            <span
              {...nodeAttrs('feedback', 'Cleaker.Feedback')}
              style={{ fontSize: '11px', color: theme.palette.success.main, paddingLeft: 2 }}
            >
              {authSuccessMessage}
            </span>
          ) : null}
        </Box>
      </Box>
      <Modal
        open={registerOpen}
        onClose={closeRegisterModal}
        title="Sign Up"
        width={420}
      >
        <Box
          {...nodeAttrs('register-form', 'Cleaker.RegisterForm')}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.2,
          }}
        >
          <TextField
            {...nodeAttrs('register-username', 'Cleaker.RegisterUsername')}
            label="Username"
            value={registerUsername}
            onChange={(event) => {
              setRegisterUsername(event.target.value);
              setRegisterError(null);
            }}
            autoComplete="username"
            fullWidth
          />
          <TextField
            {...nodeAttrs('register-email', 'Cleaker.RegisterEmail')}
            label="Email"
            value={registerEmail}
            onChange={(event) => {
              setRegisterEmail(event.target.value);
              setRegisterError(null);
            }}
            autoComplete="email"
            fullWidth
          />
          <TextField
            {...nodeAttrs('register-phone', 'Cleaker.RegisterPhone')}
            label="Phone Number"
            value={registerPhone}
            onChange={(event) => {
              setRegisterPhone(event.target.value);
              setRegisterError(null);
            }}
            autoComplete="tel"
            fullWidth
          />
          <TextField
            {...nodeAttrs('register-password', 'Cleaker.RegisterPassword')}
            label="Password"
            type="password"
            value={registerPassword}
            onChange={(event) => {
              setRegisterPassword(event.target.value);
              setRegisterError(null);
            }}
            autoComplete="new-password"
            fullWidth
          />
          <TextField
            {...nodeAttrs('register-confirm-password', 'Cleaker.RegisterConfirmPassword')}
            label="Confirm Password"
            type="password"
            value={registerConfirmPassword}
            onChange={(event) => {
              setRegisterConfirmPassword(event.target.value);
              setRegisterError(null);
            }}
            autoComplete="new-password"
            fullWidth
          />
          {registerError ? (
            <Box
              {...nodeAttrs('register-error', 'Cleaker.RegisterError')}
              sx={{
                fontSize: '11px',
                lineHeight: 1.35,
                color: theme.palette.error.main,
              }}
            >
              {registerError}
            </Box>
          ) : null}
          <Box
            {...nodeAttrs('register-actions', 'Cleaker.RegisterActions')}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 1,
              pt: 0.5,
            }}
          >
            <Button variant="text" onClick={closeRegisterModal}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                void handleRegisterSubmit();
              }}
              disabled={authStatus === 'checking'}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
