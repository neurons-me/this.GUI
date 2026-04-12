import React, { useCallback, useEffect, useMemo, useState } from "react";
import ME from 'this.me';
import { alpha } from '@mui/material/styles';
import { useGuiTheme } from '@/gui-internals/Hooks';
import Box from '@/gui/Atoms/Box/Box';
import Card from '@/gui/Atoms/Card/Card';
import CardContent from '@/gui/Atoms/Card/CardContent/CardContent';
import Paper from '@/gui/Atoms/Paper/Paper';
import TextField from "@/gui/Atoms/TextField/TextField";
import Icon from "@/gui/Atoms/Icon/Icon";
import IconButton from '@/gui/Atoms/IconButton/IconButton';
import Button from '@/gui/Atoms/Button/Button';
import Typography from '@/gui/Atoms/Typography/Typography';
import Modal from "@/gui/Molecules/Modal/Modal";
import Stack from '@/gui/Molecules/Stack/Stack';
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
  readUsernameFromStorage,
  readCleakerBootstrap,
  sanitizeCleakerUsername,
  SESSION_CREDENTIALS_EVENT,
  SESSION_SECRET_STORAGE_KEY,
  SESSION_USERNAME_STORAGE_KEY,
} from './runtimeUsername';
import { MeRuntimeProvider, useOptionalMeRuntimeContext } from '@/react/MeRuntimeProvider';
import { useMe } from '@/react/useMe';
import { useMeAction } from '@/react/useMeAction';
import { useMeValue } from '@/react/useMeValue';
import type { MeLike } from '@/react/types';
import { useRuntimeEnvironment } from '@/runtime/runtimeContext';
import { renderNode } from '@/runtime/renderer';
import { readMeValue, writeMeValue } from '@/runtime/run-me';
import QRme from '@/gui/All.This/me/QR/QR.me';
import {
  DEFAULT_CLEAKER_NAMESPACE_EXPRESSION,
  buildCleakerNamespaceUrl,
  parseCleakerNamespaceExpression,
} from "./namespaceExpression";
import { createSurfaceEntry, isLoopbackishHost, resolveSemanticRootName } from "./surfaceModel";
import { createProfileCardSpec } from './specs';
import { AccessRequestHandler } from './access';
import ClaimSurface from './ClaimSurface';
import GeneratePairingQR from './GeneratePairingQR';
import {
  CLEAKER_OPEN_MESH_LINK_EVENT,
  isProbablyLocalOrigin,
  parseMeshExpression,
  readIncomingMeshExpression,
  registerMeshSurface,
  resolveMeshLinkAction,
  slugifySurfaceName,
  writeMeshRuntimeValue,
} from './meshPairing';

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
  me?: MeLike;
};

const KERNEL_CLEAKER_IDENTITY_PATH = 'identity.session';
const KERNEL_CLEAKER_UI_PATH = 'ui.cleaker';
const KERNEL_CLEAKER_AUTH_PATH = 'runtime.cleaker.auth';
const KERNEL_CLEAKER_NAMESPACE_PATH = 'runtime.cleaker.namespace';
const KERNEL_CLEAKER_REGISTER_PATH = 'ui.cleaker.register';
const KERNEL_CLEAKER_PROFILE_PATH = 'profile';
const KERNEL_CLEAKER_CANONICAL_AUTH_PATH = 'auth';

function normalizeSemanticValue(value: any): any {
  if (value === undefined) return null;
  if (Array.isArray(value)) return value.map((item) => normalizeSemanticValue(item));
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(
    Object.entries(value).map(([key, entryValue]) => [key, normalizeSemanticValue(entryValue)])
  );
}

function collectSemanticWrites(path: string, rawValue: any): Array<{ path: string; value: any }> {
  const targetPath = String(path || '').trim();
  if (!targetPath) return [];

  const value = normalizeSemanticValue(rawValue);
  const writes = [{ path: targetPath, value }];
  if (!value || typeof value !== 'object' || Array.isArray(value)) return writes;

  for (const [key, childValue] of Object.entries(value)) {
    writes.push(...collectSemanticWrites(`${targetPath}.${key}`, childValue));
  }

  return writes;
}

function readKernelValue(me: MeLike, path: string): any {
  try {
    return readMeValue(me, path, { allowBarePath: true });
  } catch {
    return undefined;
  }
}

function readKernelTimestamp(me: MeLike, path: string): number | null {
  const value = Number(readKernelValue(me, path));
  return Number.isFinite(value) && value > 0 ? value : null;
}

function toTimestamp(value: any): number | null {
  const next = Number(value);
  return Number.isFinite(next) && next > 0 ? next : null;
}

function readPayloadMemoryValue(payload: any, path: string): any {
  const memories = Array.isArray(payload?.memories) ? payload.memories as Array<{ path?: string; data?: any }> : [];
  const match = memories.find((entry: { path?: string; data?: any }) => String(entry?.path || '').trim() === path);
  return match?.data;
}

function resolveClaimedAt(payload: any, fallback: number | null = null): number | null {
  return (
    toTimestamp(readPayloadMemoryValue(payload, 'auth.claimed_at'))
    || toTimestamp(payload?.createdAt)
    || toTimestamp(payload?.persistentClaim?.claim?.issuedAt)
    || fallback
  );
}

function safeWriteKernelPath(me: MeLike, runtime: any, path: string, value: any): boolean {
  try {
    writeMeValue(me, path, value);
    runtime?.notify?.(path);
    return true;
  } catch {
    return false;
  }
}

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

function cleanString(value: unknown): string {
  return String(value || '').trim();
}

function validateFullName(raw: string): string | null {
  const value = cleanString(raw).replace(/\s+/g, ' ');
  if (!value) return 'Full name is required';
  if (value.length < 2) return 'Full name is too short';
  return null;
}

function resolveProfileField(
  payload: any,
  field: 'username' | 'name' | 'email' | 'phone' | 'avatar',
  fallback = ''
): string {
  const fromMemory = readPayloadMemoryValue(payload, `profile.${field}`);
  if (fromMemory != null) return cleanString(fromMemory);
  const fromProfile = payload && typeof payload === 'object'
    ? (payload as { profile?: Record<string, unknown> }).profile?.[field]
    : undefined;
  return cleanString(fromProfile ?? fallback);
}

function humanizeCleakerError(
  raw: unknown,
  options: { namespaceSeedHandle?: string; exampleHandle?: string } = {}
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

function safeAlphaColor(color: string | undefined, opacity: number, fallback: string): string {
  const normalized = String(color || '').trim().toLowerCase();
  if (!normalized || normalized === 'transparent') return fallback;

  try {
    return alpha(color as string, opacity);
  } catch {
    return fallback;
  }
}

function CleakerInner(props: CleakerProps) {
  const { me: runtimeMe, runtime } = useMe();
  const theme = useGuiTheme();
  const rootNodeId = String(props['data-gui-node-id'] || 'Cleaker');
  const rootNodeType = String(props['data-gui-component'] || 'Cleaker');
  const profileUsername = useMeValue<string>('profile.username') || '';
  const profileName = useMeValue<string>('profile.name') || '';
  const profileEmail = useMeValue<string>('profile.email') || '';
  const profilePhone = useMeValue<string>('profile.phone') || '';
  const claimedAtPath = useMeValue<number | null>('auth.claimed_at');
  const activeSessionNamespace = useMeValue<string>('identity.session.namespace') || '';
  const kernelRuntimeAuthenticated = Boolean(useMeValue<boolean>('runtime.cleaker.authenticated'));
  const kernelViewMode = useMeValue<string>('ui.cleaker.viewMode') || '';
  const setKernelViewMode = useMeAction('ui.cleaker.viewMode');
  const [namespaceInput, setNamespaceInput] = useState<string>(() => {
    const explicit = String(props.namespace || props.namespaceOrigin || '').trim();
    if (explicit) return explicit;
    const kernelValue = String(readKernelValue(runtimeMe, `${KERNEL_CLEAKER_NAMESPACE_PATH}.expression`) || '').trim();
    if (kernelValue) return kernelValue;
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

  const specRegistry = useMemo(
    () => ({
      Box,
      Button,
      Card,
      CardContent,
      Paper,
      Stack,
      Typography,
      'QR.me': QRme,
    }),
    []
  );

  const renderSpecNode = useCallback(
    (spec: any, path: string) =>
      renderNode(spec, {
        React,
        registry: specRegistry,
        runtime: runtime ?? undefined,
      }, path),
    [runtime, specRegistry]
  );

  const sanitizeRuntimeUsername = useCallback((raw: string) => sanitizeCleakerUsername(raw), []);

  const themedUi = useMemo(() => {
    const primary = theme.palette.primary.main;
    const divider = theme.palette.divider;
    const paper = theme.palette.background.paper;
    const subtleSection = theme.palette.section.subtle;
    const defaultSection = theme.palette.section.default;
    const isDark = theme.palette.mode === 'dark';
    const paperLow = safeAlphaColor(
      paper,
      isDark ? 0.04 : 0.94,
      isDark ? alpha(theme.palette.common.black, 0.18) : alpha(theme.palette.common.white, 0.94)
    );
    const paperMid = safeAlphaColor(
      paper,
      isDark ? 0.16 : 0.84,
      isDark ? alpha(theme.palette.common.black, 0.24) : alpha(theme.palette.common.white, 0.84)
    );
    const paperSoft = safeAlphaColor(
      paper,
      0.08,
      isDark ? alpha(theme.palette.common.white, 0.06) : alpha(theme.palette.common.black, 0.03)
    );

    return {
      shellBorder: safeAlphaColor(primary, isDark ? 0.2 : 0.14, divider),
      shellBackground: isDark
        ? `linear-gradient(180deg, ${paperLow} 0%, ${defaultSection} 100%)`
        : `linear-gradient(180deg, ${paperLow} 0%, ${subtleSection} 100%)`,
      shellShadow: isDark ? theme.shadows[8] : theme.shadows[3],
      panelBackground: paperMid,
      panelBorder: safeAlphaColor(divider, isDark ? 0.92 : 0.8, divider),
      qrBorder: safeAlphaColor(primary, isDark ? 0.42 : 0.28, divider),
      qrBackground: isDark
        ? `radial-gradient(circle at 28% 24%, ${safeAlphaColor(primary, 0.16, divider)} 0%, ${subtleSection} 48%, ${paperLow} 100%)`
        : `radial-gradient(circle at 28% 24%, ${safeAlphaColor(primary, 0.12, divider)} 0%, ${paperLow} 52%, ${subtleSection} 100%)`,
      qrExpandedShadow: `0 0 0 2px ${safeAlphaColor(primary, 0.24, divider)}, ${theme.shadows[8]}`,
      qrCollapsedShadow: `0 0 0 1px ${safeAlphaColor(primary, 0.18, divider)}, ${theme.shadows[2]}`,
      inputUnderline: safeAlphaColor(primary, 0.78, primary),
      subtleSurface: isDark ? paperSoft : alpha(theme.palette.common.black, 0.03),
      ghostHover: safeAlphaColor(
        theme.palette.text.primary,
        isDark ? 0.08 : 0.05,
        isDark ? alpha(theme.palette.common.white, 0.08) : alpha(theme.palette.common.black, 0.05)
      ),
      activeIcon: safeAlphaColor(primary, 0.12, divider),
    };
  }, [theme]);

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
    const rawValue = String(raw || '').trim().toLowerCase();
    const value = sanitizeRuntimeUsername(raw);
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
  }, [namespaceSeedFallback, sanitizeRuntimeUsername]);

  const [username, setUsername] = useState(() => {
    const explicit = sanitizeRuntimeUsername(String(props.username || '').trim());
    if (explicit) return explicit;
    const kernelValue = sanitizeRuntimeUsername(
      String(readKernelValue(runtimeMe, `${KERNEL_CLEAKER_IDENTITY_PATH}.username`) || '')
    );
    if (kernelValue) return kernelValue;
    return readUsernameFromStorage();
  });
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [secret, setSecret] = useState(() => readStoredValue(SESSION_SECRET_STORAGE_KEY));
  const [registerOpen, setRegisterOpen] = useState(false);
  const [registerFullName, setRegisterFullName] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPhone, setRegisterPhone] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [registerError, setRegisterError] = useState<string | null>(null);
  const [showSecret, setShowSecret] = useState(false);
  const [avatarExpanded, setAvatarExpanded] = useState(false);
  const [pairingExpression, setPairingExpression] = useState(() => {
    return String(readKernelValue(runtimeMe, 'runtime.mesh.pairing.currentExpression') || '').trim();
  });
  const [pairingLinkError, setPairingLinkError] = useState<string | null>(null);
  const [authStatus, setAuthStatus] = useState<AuthStatus>('idle');
  const [authAction, setAuthAction] = useState<AuthAction>('claim');
  const [authError, setAuthError] = useState<string | null>(null);
  const [claimResolution, setClaimResolution] = useState<ClaimResolution>('idle');
  const [bootstrapInfo, setBootstrapInfo] = useState<CleakerBootstrapInfo | null>(null);
  const [activeProfileUsername, setActiveProfileUsername] = useState(() => {
    return sanitizeRuntimeUsername(
      String(readKernelValue(runtimeMe, `${KERNEL_CLEAKER_PROFILE_PATH}.username`) || '')
    );
  });
  const [activeProfileName, setActiveProfileName] = useState(() => {
    return cleanString(readKernelValue(runtimeMe, `${KERNEL_CLEAKER_PROFILE_PATH}.name`));
  });
  const [activeProfileEmail, setActiveProfileEmail] = useState(() => {
    return cleanString(readKernelValue(runtimeMe, `${KERNEL_CLEAKER_PROFILE_PATH}.email`));
  });
  const [activeProfilePhone, setActiveProfilePhone] = useState(() => {
    return cleanString(readKernelValue(runtimeMe, `${KERNEL_CLEAKER_PROFILE_PATH}.phone`));
  });
  const [activeIdentityNamespace, setActiveIdentityNamespace] = useState(() => {
    return String(readKernelValue(runtimeMe, `${KERNEL_CLEAKER_IDENTITY_PATH}.namespace`) || '').trim();
  });
  const [claimedAt, setClaimedAt] = useState<number | null>(() => {
    return readKernelTimestamp(runtimeMe, `${KERNEL_CLEAKER_CANONICAL_AUTH_PATH}.claimed_at`);
  });
  const [sessionAuthenticated, setSessionAuthenticated] = useState(() => {
    return Boolean(readKernelValue(runtimeMe, 'runtime.cleaker.authenticated'));
  });

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
    const explicit = sanitizeRuntimeUsername(String(props.username || '').trim());
    if (!explicit) return;
    setUsername(explicit);
    setUsernameError(validateUsername(explicit).error);
  }, [props.username, sanitizeRuntimeUsername, validateUsername]);

  useEffect(() => {
    const syncCredentials = () => {
      const storedUsername = readUsernameFromStorage();
      const storedSecret = readStoredValue(SESSION_SECRET_STORAGE_KEY);
      setUsername(storedUsername || '');
      setUsernameError(validateUsername(storedUsername || '').error);
      setSecret(storedSecret || '');
      if (!storedUsername && !storedSecret) {
        setClaimResolution('idle');
        setAuthStatus('idle');
        setAuthError(null);
        setSessionAuthenticated(false);
        setActiveIdentityNamespace('');
        return;
      }

      if (storedUsername && activeProfileUsername && sanitizeRuntimeUsername(storedUsername) !== activeProfileUsername) {
        setSessionAuthenticated(false);
        setActiveIdentityNamespace('');
      }
    };

    syncCredentials();
    window.addEventListener(SESSION_CREDENTIALS_EVENT, syncCredentials as EventListener);
    window.addEventListener('storage', syncCredentials as EventListener);

    return () => {
      window.removeEventListener(SESSION_CREDENTIALS_EVENT, syncCredentials as EventListener);
      window.removeEventListener('storage', syncCredentials as EventListener);
    };
  }, [activeProfileUsername, sanitizeRuntimeUsername, validateUsername]);

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
    const validated = validateUsername(username);
    setRegisterFullName('');
    setRegisterUsername(validated.error ? '' : validated.value);
    setRegisterEmail('');
    setRegisterPhone('');
    setRegisterPassword(secret);
    setRegisterConfirmPassword(secret);
    setRegisterError(null);
    setRegisterOpen(true);
  }, [secret, username, validateUsername]);

  const closeRegisterModal = useCallback(() => {
    setRegisterOpen(false);
    setRegisterFullName('');
    setRegisterUsername('');
    setRegisterEmail('');
    setRegisterPhone('');
    setRegisterPassword('');
    setRegisterConfirmPassword('');
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
          if (response.status === 403) {
            throw new Error('Wrong password for this claimed username.');
          }
          if (response.status === 404) {
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
        setClaimResolution('openable');
        setActiveProfileUsername(sanitizeRuntimeUsername(resolveProfileField(payload, 'username', value)) || value);
        setActiveProfileName(resolveProfileField(payload, 'name', activeProfileName));
        setActiveProfileEmail(resolveProfileField(payload, 'email', activeProfileEmail));
        setActiveProfilePhone(resolveProfileField(payload, 'phone', activeProfilePhone));
        setActiveIdentityNamespace(identityNamespace);
        setClaimedAt(resolveClaimedAt(payload, claimedAt ?? Date.now()));
        setSessionAuthenticated(true);
        setKernelViewMode('profile');
      } else {
        const claimed = await postNamespaceOperation('/claims');
        if (claimed.response.ok) {
          setClaimResolution('openable');
          setActiveProfileUsername(sanitizeRuntimeUsername(resolveProfileField(claimed.payload, 'username', value)) || value);
          setActiveProfileName(resolveProfileField(claimed.payload, 'name', activeProfileName));
          setActiveProfileEmail(resolveProfileField(claimed.payload, 'email', activeProfileEmail));
          setActiveProfilePhone(resolveProfileField(claimed.payload, 'phone', activeProfilePhone));
          setActiveIdentityNamespace(identityNamespace);
          setClaimedAt(resolveClaimedAt(claimed.payload, Date.now()));
          setSessionAuthenticated(true);
          setKernelViewMode('profile');
        } else if (claimed.response.status === 409) {
          throw new Error('Namespace already claimed. Use Login.');
        } else {
            throw new Error(
              humanizeCleakerError(
                readErrorMessage(claimed.payload, claimed.response.status, 'Failed to claim namespace'),
                {
                  namespaceSeedHandle,
                  exampleHandle: value,
                }
              )
            );
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
  }, [
    actionBaseUrl,
    activeProfileEmail,
    activeProfileName,
    activeProfilePhone,
    claimedAt,
    commitRuntimeCredentials,
    identityNamespace,
    namespaceSeedHandle,
    postNamespaceOperation,
    secret,
    setKernelViewMode,
    sanitizeRuntimeUsername,
    username,
    validateUsername,
  ]);

  const handleRegisterSubmit = useCallback(async () => {
    const fullNameError = validateFullName(registerFullName);
    const validated = validateUsername(registerUsername);
    const emailError = validateEmail(registerEmail);
    const phoneError = validatePhone(registerPhone);
    const normalizedPassword = String(registerPassword || '');
    const normalizedConfirm = String(registerConfirmPassword || '');

    if (fullNameError) {
      setRegisterError(fullNameError);
      return false;
    }
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
          name: cleanString(registerFullName).replace(/\s+/g, ' '),
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
        throw new Error(
          humanizeCleakerError(
            readErrorMessage(payload, response.status, 'Failed to claim namespace'),
            {
              namespaceSeedHandle,
              exampleHandle: validated.value,
            }
          )
        );
      }

      setUsername(validated.value);
      setUsernameError(null);
      setSecret(normalizedPassword);
      commitRuntimeCredentials(validated.value, normalizedPassword);
      setClaimResolution('openable');
      setActiveProfileUsername(
        sanitizeRuntimeUsername(resolveProfileField(payload, 'username', validated.value)) || validated.value
      );
      setActiveProfileName(resolveProfileField(payload, 'name', registerFullName));
      setActiveProfileEmail(resolveProfileField(payload, 'email', registerEmail));
      setActiveProfilePhone(resolveProfileField(payload, 'phone', registerPhone));
      setActiveIdentityNamespace(nextNamespace);
      setClaimedAt(resolveClaimedAt(payload, Date.now()));
      setSessionAuthenticated(true);
      setKernelViewMode('profile');
      setAuthStatus('ok');
      setAuthAction('claim');
      closeRegisterModal();
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
    registerFullName,
    registerPassword,
    registerPhone,
    registerUsername,
    closeRegisterModal,
    setKernelViewMode,
    sanitizeRuntimeUsername,
    validateUsername,
  ]);

  const connectionTone = useCallback((status: ConnectionStatus) => {
    if (status === 'online') return theme.palette.success.main;
    if (status === 'connecting') return theme.palette.warning.main;
    if (status === 'offline' || status === 'declined') return theme.palette.error.main;
    return theme.palette.text.secondary;
  }, [theme.palette.error.main, theme.palette.success.main, theme.palette.text.secondary, theme.palette.warning.main]);


  const isActionDisabled = !normalizedUsername || !secret || actionTarget === 'none' || authStatus === 'checking';
  const hasLocalCredentials = Boolean(normalizedUsername && secret);
  const hasNamespaceBinding = Boolean(
    (activeSessionNamespace || activeIdentityNamespace)
    && (activeSessionNamespace || activeIdentityNamespace) === identityNamespace
    && activeNamespaceUrl
  );
  const runtimeAuthenticated = Boolean((kernelRuntimeAuthenticated || sessionAuthenticated) && hasNamespaceBinding);
  const hasCanonicalClaim = Boolean(profileUsername && claimedAtPath);
  const hasClaimedIdentity = Boolean(profileUsername && claimedAtPath && activeSessionNamespace);
  const isClaimSurfaceView = kernelViewMode === 'claim-surface' && Boolean(pairingExpression);
  const settingsOpen = kernelViewMode === 'settings';
  const semanticViewMode = isClaimSurfaceView
    ? 'claim-surface'
    : settingsOpen
    ? 'settings'
    : hasClaimedIdentity
      ? 'profile'
      : 'login';
  const currentViewMode = isClaimSurfaceView
    ? 'claim-surface'
    : hasClaimedIdentity
    ? (settingsOpen ? 'settings' : 'profile')
    : 'login';
  const isClaimed = Boolean(hasCanonicalClaim || claimResolution === 'openable');
  const showProfileView = currentViewMode === 'profile';
  const showClaimSurfaceView = currentViewMode === 'claim-surface';
  const showLoginView = currentViewMode === 'login';

  const hostSurfaceId = useMemo(() => {
    return slugifySurfaceName(surfaceEntry.hostId || resolverHostName || semanticRootName || 'host-surface');
  }, [resolverHostName, semanticRootName, surfaceEntry.hostId]);

  const hostSurfaceRecord = useMemo(() => ({
    hostId: hostSurfaceId,
    displayName: resolverDisplayName || compactMonadLabel || hostSurfaceId,
    type: surfaceEntry.type,
    platform:
      typeof navigator === 'undefined'
        ? 'unknown'
        : String((navigator as any).userAgentData?.platform || navigator.platform || 'unknown'),
    note: 'Active Cleaker host surface.',
    namespace: activeIdentityNamespace || identityNamespace || typingNamespace || namespaceSeedHandle,
    status: (parentStatus === 'online' ? 'online' : 'unknown') as 'online' | 'unknown',
    confidence: isProbablyLocalOrigin(namespaceOrigin) ? 96 : 88,
    lastSeen: surfaceEntry.status.lastSeen || Date.now(),
    pairedAt: surfaceEntry.status.lastSeen || Date.now(),
    origin: namespaceOrigin || activeNamespaceUrl || null,
    localNetwork: isProbablyLocalOrigin(namespaceOrigin),
    claimToken: null,
    transport: (isProbablyLocalOrigin(namespaceOrigin) ? 'mdns' : 'https') as 'mdns' | 'https',
    trust: 'owner' as const,
    metadata: {
      userAgent: typeof navigator === 'undefined' ? 'unknown' : String(navigator.userAgent || 'unknown'),
      hostSurface: null,
    },
  }), [
    activeIdentityNamespace,
    activeNamespaceUrl,
    compactMonadLabel,
    hostSurfaceId,
    identityNamespace,
    namespaceOrigin,
    namespaceSeedHandle,
    parentStatus,
    resolverDisplayName,
    surfaceEntry.status.lastSeen,
    surfaceEntry.type,
    typingNamespace,
  ]);

  const hostSurfaceSnapshotRef = React.useRef('');

  useEffect(() => {
    if (!runtimeMe) return;
    const snapshot = JSON.stringify(hostSurfaceRecord);
    if (hostSurfaceSnapshotRef.current === snapshot) return;

    hostSurfaceSnapshotRef.current = snapshot;
    registerMeshSurface(runtimeMe, runtime, hostSurfaceId, hostSurfaceRecord);
    writeMeshRuntimeValue(runtimeMe, runtime, 'runtime.mesh.hostSurface', hostSurfaceRecord);
  }, [hostSurfaceId, hostSurfaceRecord, runtime, runtimeMe]);

  const handleMeshExpressionOpen = useCallback((incomingExpression: string) => {
    const raw = String(incomingExpression || '').trim();
    if (!raw) return false;

    try {
      const parsed = parseMeshExpression(raw);
      const action = resolveMeshLinkAction(parsed);
      const receivedAt = Date.now();

      writeMeshRuntimeValue(runtimeMe, runtime, 'runtime.mesh.deepLink.lastExpression', raw);
      writeMeshRuntimeValue(runtimeMe, runtime, 'runtime.mesh.deepLink.lastReceivedAt', receivedAt);
      setPairingLinkError(null);

      if (action.kind === 'claim-surface') {
        setPairingExpression(raw);
        writeMeshRuntimeValue(runtimeMe, runtime, 'runtime.mesh.pairing.currentExpression', raw);
        setKernelViewMode('claim-surface');
        return true;
      }

      if (action.kind === 'profile') {
        setKernelViewMode('profile');
        return true;
      }

      if (action.kind === 'broadcast') {
        setKernelViewMode(runtimeAuthenticated ? 'profile' : 'login');
        return true;
      }

      writeMeshRuntimeValue(runtimeMe, runtime, 'runtime.mesh.deepLink.lastUnhandled', raw);
      return false;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setPairingLinkError(message);
      writeMeshRuntimeValue(runtimeMe, runtime, 'runtime.mesh.deepLink.lastError', message);
      return false;
    }
  }, [runtime, runtimeAuthenticated, runtimeMe, setKernelViewMode]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const bootExpression = readIncomingMeshExpression();
    if (bootExpression) {
      handleMeshExpressionOpen(bootExpression);
    }

    const handleOpenMeshLink = (event: Event) => {
      const customEvent = event as CustomEvent<{ expression?: string }>;
      const nextExpression = String(customEvent.detail?.expression || '').trim();
      if (!nextExpression) return;
      handleMeshExpressionOpen(nextExpression);
    };

    window.addEventListener(CLEAKER_OPEN_MESH_LINK_EVENT, handleOpenMeshLink as EventListener);
    return () => {
      window.removeEventListener(CLEAKER_OPEN_MESH_LINK_EVENT, handleOpenMeshLink as EventListener);
    };
  }, [handleMeshExpressionOpen]);

  useEffect(() => {
    const restoreKey = [actionBaseUrl, identityNamespace, normalizedUsername, secret].join('|');

    if (!normalizedUsername || !secret || !actionBaseUrl) {
      restoreAttemptRef.current = '';
      return;
    }

    if (hasClaimedIdentity || authStatus === 'checking' || currentViewMode === 'claim-surface') {
      return;
    }

    if (claimResolution === 'locked' || claimResolution === 'unclaimed') {
      return;
    }

    if (restoreAttemptRef.current === restoreKey) {
      return;
    }

    restoreAttemptRef.current = restoreKey;
    void handleCleak('open');
  }, [
    actionBaseUrl,
    authStatus,
    claimResolution,
    currentViewMode,
    handleCleak,
    hasClaimedIdentity,
    identityNamespace,
    normalizedUsername,
    secret,
  ]);

  const authSuccessMessage = authAction === 'open'
    ? `Logged in on ${actionTargetLabel}.`
    : `Claimed on ${actionTargetLabel}.`;
  const authProgressMessage = authAction === 'open'
    ? `Logging into ${identityNamespace} on ${actionTargetLabel}...`
    : `Claiming ${identityNamespace} on ${actionTargetLabel}...`;
  const secretInputType = showSecret ? 'text' : 'password';
  const semanticWriteTargetRef = React.useRef<any>(null);
  const semanticWriteCacheRef = React.useRef<Map<string, string>>(new Map());

  const identitySemanticState = useMemo(() => ({
    username: runtimeAuthenticated ? activeProfileUsername || null : null,
    draftUsername: String(username || '').trim() || null,
    usernameError: usernameError || null,
    namespace: runtimeAuthenticated ? activeIdentityNamespace || null : null,
    namespaceSeed: namespaceSeedHandle || null,
    typingNamespace: typingNamespace || null,
    note: liveUsernameNote || null,
    liveState: liveUsernameState,
    rootHash: rootNamespaceHash || null,
    surfaceHash: surfaceNamespaceHash || null,
    subjectHash: subjectNamespaceHash || null,
    namespaceUrl: activeNamespaceUrl || null,
    authenticated: runtimeAuthenticated,
    hasSecret: Boolean(secret),
  }), [
    activeNamespaceUrl,
    activeIdentityNamespace,
    activeProfileUsername,
    identityNamespace,
    liveUsernameNote,
    liveUsernameState,
    namespaceSeedHandle,
    normalizedUsername,
    rootNamespaceHash,
    secret,
    subjectNamespaceHash,
    surfaceNamespaceHash,
    typingNamespace,
    runtimeAuthenticated,
    username,
    usernameError,
  ]);

  const namespaceSemanticState = useMemo(() => ({
    expression: namespaceConfig.expression,
    input: String(namespaceInput || '').trim() || null,
    origin: namespaceOrigin || null,
    host: namespaceHost || null,
    displayHost: namespaceDisplayHost || null,
    localUrl: localNamespaceUrl || null,
    networkUrl: networkNamespaceUrl || null,
    activeUrl: activeNamespaceUrl || null,
    rootHostNamespace: rootHostNamespace || null,
    surfaceNamespace: surfaceNamespace || null,
    subjectSurfaceNamespace: subjectSurfaceNamespace || null,
    subjectHandleNamespace: subjectHandleNamespace || null,
    resolverHostName: resolverHostName || null,
    resolverDisplayName: resolverDisplayName || null,
    resolverSurfaceNamespace: resolverSurfaceNamespace || null,
    resolverSubjectSurfaceNamespace: resolverSubjectSurfaceNamespace || null,
    previewQrValue: previewQrValue || null,
  }), [
    activeNamespaceUrl,
    localNamespaceUrl,
    namespaceConfig.expression,
    namespaceDisplayHost,
    namespaceHost,
    namespaceInput,
    namespaceOrigin,
    networkNamespaceUrl,
    previewQrValue,
    resolverDisplayName,
    resolverHostName,
    resolverSubjectSurfaceNamespace,
    resolverSurfaceNamespace,
    rootHostNamespace,
    subjectHandleNamespace,
    subjectSurfaceNamespace,
    surfaceNamespace,
  ]);

  const uiSemanticState = useMemo(() => ({
    settingsOpen,
    registerOpen,
    avatarExpanded,
    showSecret,
    viewMode: semanticViewMode,
    actionDisabled: isActionDisabled,
    parentStatus: describeConnectionStatus(parentStatus),
    parentOnline: isParentOnline,
  }), [
    avatarExpanded,
    semanticViewMode,
    isActionDisabled,
    isParentOnline,
    parentStatus,
    registerOpen,
    settingsOpen,
    showSecret,
  ]);

  const authSemanticState = useMemo(() => ({
    status: authStatus,
    action: authAction,
    error: authError || null,
    claimed: isClaimed,
    claimResolution,
    claimResolutionNote: claimResolutionNote || null,
    progressMessage: authStatus === 'checking' ? authProgressMessage : null,
    successMessage: authStatus === 'ok' ? authSuccessMessage : null,
    actionTarget,
    actionTargetLabel,
    actionBaseUrl: actionBaseUrl || null,
  }), [
    actionBaseUrl,
    actionTarget,
    actionTargetLabel,
    authAction,
    authError,
    authProgressMessage,
    authStatus,
    authSuccessMessage,
    isClaimed,
    claimResolution,
    claimResolutionNote,
  ]);

  const canonicalAuthSemanticState = useMemo(() => ({
    claimed_at: claimedAtPath ?? claimedAt,
  }), [claimedAt, claimedAtPath]);

  const profileSemanticState = useMemo(() => ({
    username: sanitizeRuntimeUsername(profileUsername) || activeProfileUsername || null,
    name: cleanString(profileName) || activeProfileName || null,
    email: cleanString(profileEmail) || activeProfileEmail || null,
    phone: cleanString(profilePhone) || activeProfilePhone || null,
  }), [
    activeProfileEmail,
    activeProfileName,
    activeProfilePhone,
    activeProfileUsername,
    profileEmail,
    profileName,
    profilePhone,
    profileUsername,
    sanitizeRuntimeUsername,
  ]);

  const registerSemanticState = useMemo(() => ({
    open: registerOpen,
    name: cleanString(registerFullName).replace(/\s+/g, ' ') || null,
    username: String(registerUsername || '').trim() || null,
    email: String(registerEmail || '').trim() || null,
    phone: String(registerPhone || '').trim() || null,
    error: registerError || null,
  }), [
    registerEmail,
    registerError,
    registerFullName,
    registerOpen,
    registerPhone,
    registerUsername,
  ]);

  const semanticWrites = useMemo(() => {
    const writes = [
      ...collectSemanticWrites(KERNEL_CLEAKER_IDENTITY_PATH, identitySemanticState),
      ...collectSemanticWrites(KERNEL_CLEAKER_NAMESPACE_PATH, namespaceSemanticState),
      ...collectSemanticWrites(KERNEL_CLEAKER_UI_PATH, uiSemanticState),
      ...collectSemanticWrites(KERNEL_CLEAKER_AUTH_PATH, authSemanticState),
      ...collectSemanticWrites(KERNEL_CLEAKER_REGISTER_PATH, registerSemanticState),
      ...collectSemanticWrites(KERNEL_CLEAKER_CANONICAL_AUTH_PATH, canonicalAuthSemanticState),
      ...collectSemanticWrites(KERNEL_CLEAKER_PROFILE_PATH, profileSemanticState),
      { path: 'runtime.cleaker.authenticated', value: runtimeAuthenticated },
    ];

    const deduped = new Map<string, any>();
    for (const entry of writes) deduped.set(entry.path, entry.value);
    return Array.from(deduped, ([path, value]) => ({ path, value }));
  }, [
    authSemanticState,
    canonicalAuthSemanticState,
    identitySemanticState,
    namespaceSemanticState,
    profileSemanticState,
    registerSemanticState,
    runtimeAuthenticated,
    uiSemanticState,
  ]);

  const claimedProfileCardSpec = useMemo(
    () =>
      createProfileCardSpec({
        rootNodeId: nodeId('profile-spec'),
        showIdentityFace: true,
        showActions: true,
      }),
    [nodeId]
  );
  const restoreAttemptRef = React.useRef<string>('');

  useEffect(() => {
    if (!runtimeMe) return;
    if (semanticWriteTargetRef.current !== runtimeMe) {
      semanticWriteTargetRef.current = runtimeMe;
      semanticWriteCacheRef.current = new Map();
    }

    const nextCache = new Map<string, string>();
    for (const entry of semanticWrites) {
      const snapshot = JSON.stringify(normalizeSemanticValue(entry.value));
      nextCache.set(entry.path, snapshot);
      if (semanticWriteCacheRef.current.get(entry.path) === snapshot) continue;
      safeWriteKernelPath(runtimeMe, runtime, entry.path, entry.value);
    }

    semanticWriteCacheRef.current = nextCache;
  }, [runtime, runtimeMe, semanticWrites]);

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
      themeMode: theme.palette.mode,
      primaryColor: theme.palette.primary.main,
    });

    registerNode(nodeId('card'), nodePath('card'), 'Cleaker.Card', {
      namespace: identityNamespace,
      expandedAvatar: avatarExpanded,
      namespaceSurface: namespaceDisplayHost,
      namespaceStatus: describeConnectionStatus(parentStatus),
    });
    registerNode(nodeId('header'), nodePath('header'), 'Cleaker.Header', {
      namespace: identityNamespace,
      settingsOpen,
    });
    registerNode(nodeId('avatar'), nodePath('avatar'), 'Cleaker.AvatarQR', {
      identityRoot: identity.identityRoot,
      namespaceUrl: activeNamespaceUrl,
      expanded: avatarExpanded,
    });
    registerNode(nodeId('identity-shell'), nodePath('identity-shell'), 'Cleaker.IdentityShell', {
      username,
      namespaceSuffix: namespaceSeedHandle,
    });
    registerNode(nodeId('identity'), nodePath('identity'), 'Cleaker.IdentityField', {
      username,
      namespace: typingNamespace,
      valid: liveUsernameState === 'valid',
      error: usernameError,
    });
    registerNode(nodeId('identity-input'), nodePath('identity-input'), 'Cleaker.IdentityInput', {
      username,
      placeholder: 'username',
      namespaceSuffix: namespaceSeedHandle,
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
    registerNode(nodeId('settings-toggle'), nodePath('settings-toggle'), 'Cleaker.SettingsToggle', {
      open: settingsOpen,
    });
    registerNode(nodeId('settings-panel'), nodePath('settings-panel'), 'Cleaker.SettingsPanel', {
      open: settingsOpen,
      expression: namespaceConfig.expression,
    });
    registerNode(nodeId('settings-namespace'), nodePath('settings-namespace'), 'Cleaker.SettingsNamespace', {
      value: namespaceInput,
      expression: namespaceConfig.expression,
    });
    registerNode(nodeId('settings-preview'), nodePath('settings-preview'), 'Cleaker.NamespacePreview', {
      monadLabel: compactMonadLabel,
      namespace: compactRootLabel,
      rootHash: maskHash(rootNamespaceHash),
    });
    registerNode(nodeId('settings-preview-qr'), nodePath('settings-preview-qr'), 'Cleaker.NamespacePreviewQR', {
      value: previewQrValue,
      size: 88,
    });
    registerNode(nodeId('settings-preview-meta'), nodePath('settings-preview-meta'), 'Cleaker.NamespacePreviewMeta', {
      monadLabel: compactMonadLabel,
      namespace: compactRootLabel,
      rootHash: maskHash(rootNamespaceHash),
    });
    registerNode(nodeId('controls'), nodePath('controls'), 'Cleaker.Controls', {
      hasSecret: Boolean(secret),
      authStatus,
      mode: currentViewMode,
    });
    registerNode(nodeId('actions'), nodePath('actions'), 'Cleaker.Actions', {
      authStatus,
      actionTargetLabel,
      disabled: isActionDisabled,
    });
    registerNode(nodeId('profile-card'), nodePath('profile-card'), 'Cleaker.ProfileCard', {
      visible: showProfileView,
      username: sanitizeRuntimeUsername(profileUsername) || activeProfileUsername,
      name: cleanString(profileName) || activeProfileName,
      email: cleanString(profileEmail) || activeProfileEmail,
      phone: cleanString(profilePhone) || activeProfilePhone,
      namespace: activeSessionNamespace,
      claimed: Boolean(claimedAtPath ?? claimedAt),
      authenticated: runtimeAuthenticated,
      rootHash: maskHash(rootNamespaceHash),
    });
    registerNode(nodeId('profile-actions'), nodePath('profile-actions'), 'Cleaker.ProfileActions', {
      visible: showProfileView,
    });
    registerNode(nodeId('password-visibility-toggle'), nodePath('password-visibility-toggle'), 'Cleaker.PasswordVisibilityToggle', {
      visible: showSecret,
      disabled: !secret,
    });
    registerNode(nodeId('register-modal'), nodePath('register-modal'), 'Cleaker.RegisterModal', {
      open: registerOpen,
      name: registerFullName,
      username: registerUsername,
      email: registerEmail,
      phone: registerPhone,
    });
    registerNode(nodeId('register-form'), nodePath('register-form'), 'Cleaker.RegisterForm', {
      open: registerOpen,
    });
    registerNode(nodeId('register-actions'), nodePath('register-actions'), 'Cleaker.RegisterActions', {
      open: registerOpen,
      busy: authStatus === 'checking',
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
    activeIdentityNamespace,
    avatarExpanded,
    currentViewMode,
    claimResolution,
    claimResolutionNote,
    claimedAtPath,
    identity.identityRoot,
    identityNamespace,
    isClaimed,
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
    showProfileView,
    showLoginView,
    compactMonadLabel,
    compactRootLabel,
    theme.palette.mode,
    theme.palette.primary.main,
    registerFullName,
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
    claimedAt,
    activeProfileEmail,
    activeProfileName,
    activeProfilePhone,
    kernelRuntimeAuthenticated,
    runtimeAuthenticated,
    username,
    usernameError,
    parentStatus,
    profileUsername,
    profileEmail,
    profileName,
    profilePhone,
    activeSessionNamespace,
    sanitizeRuntimeUsername,
  ]);

  const handleLogout = useCallback(() => {
    const clearEntries: Array<[string, any]> = [
      ['profile.username', null],
      ['profile.name', null],
      ['profile.avatar', null],
      ['profile.bio', null],
      ['profile.email', null],
      ['profile.phone', null],
      ['auth.claimed_at', null],
      ['auth.keys', null],
      ['identity.session.username', ''],
      ['identity.session.draftUsername', ''],
      ['identity.session.authenticated', false],
      ['identity.session.hasSecret', false],
      ['identity.session.namespace', ''],
      ['identity.session.note', ''],
      ['runtime.cleaker.auth.status', 'idle'],
      ['runtime.cleaker.auth.error', null],
      ['runtime.cleaker.auth.successMessage', null],
      ['runtime.cleaker.auth.progressMessage', null],
      ['runtime.cleaker.auth.claimed', false],
      ['runtime.cleaker.auth.claimResolution', 'idle'],
      ['runtime.cleaker.authenticated', false],
      ['ui.cleaker.settingsOpen', false],
      ['ui.cleaker.registerOpen', false],
      ['ui.cleaker.avatarExpanded', false],
      ['ui.cleaker.showSecret', false],
      ['ui.cleaker.viewMode', 'login'],
    ];
    clearEntries.forEach(([path, value]) => {
      safeWriteKernelPath(runtimeMe, runtime, path, value);
    });
    setUsername('');
    setUsernameError(null);
    setSecret('');
    setActiveProfileUsername('');
    setActiveProfileName('');
    setActiveProfileEmail('');
    setActiveProfilePhone('');
    setClaimedAt(null);
    setSessionAuthenticated(false);
    setActiveIdentityNamespace('');
    setAuthAction('claim');
    setAuthStatus('idle');
    setAuthError(null);
    setClaimResolution('idle');
    closeRegisterModal();
    setShowSecret(false);
    setAvatarExpanded(false);
    commitRuntimeCredentials('', '');
  }, [closeRegisterModal, commitRuntimeCredentials, runtime, runtimeMe]);

  return (
    <Box
      data-gui-node-id={rootNodeId}
      data-gui-component={rootNodeType}
      sx={{
        width: '100%',
        px: '5px',
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr)',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'start',
      }}
    >
      <Box
        {...nodeAttrs('card', 'Cleaker.Card')}
        sx={{
          border: `1px solid ${themedUi.shellBorder}`,
          borderRadius: '12px',
          p: 1.5,
          width: '100%',
          maxWidth: showClaimSurfaceView ? '460px' : '320px',
          background: themedUi.shellBackground,
          boxShadow: themedUi.shellShadow,
          position: 'relative',
        }}
      >
        {!showProfileView && !showClaimSurfaceView ? (
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
                  border: `1px solid ${themedUi.qrBorder}`,
                  boxShadow: avatarExpanded
                    ? themedUi.qrExpandedShadow
                    : themedUi.qrCollapsedShadow,
                  background: themedUi.qrBackground,
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

                <>
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
                        commitRuntimeCredentials(error ? '' : username, secret);
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
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
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
                                : themedUi.inputUnderline,
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
                </>
              </Box>
            </Box>

            <IconButton
              {...nodeAttrs('settings-toggle', 'Cleaker.SettingsToggle')}
              size="small"
              onClick={() => setKernelViewMode(settingsOpen ? 'login' : 'settings')}
              aria-label={settingsOpen ? 'Close Cleaker settings' : 'Open Cleaker settings'}
              sx={{
                mt: -0.25,
                mr: -0.5,
                color: settingsOpen ? theme.palette.primary.main : theme.palette.text.secondary,
                backgroundColor: settingsOpen ? themedUi.activeIcon : 'transparent',
                alignSelf: 'flex-start',
                '&:hover': {
                  backgroundColor: themedUi.ghostHover,
                },
              }}
            >
              <Icon name="settings" fontSize={18 as any} />
            </IconButton>
          </Box>
        ) : null}

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
              border: `1px solid ${themedUi.panelBorder}`,
              background: themedUi.panelBackground,
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
              fullWidth
            />
            <Box
              {...nodeAttrs('settings-preview', 'Cleaker.NamespacePreview')}
              sx={{
                mt: 0.25,
                pt: 1,
                borderTop: `1px solid ${theme.palette.divider}`,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1.25,
                alignItems: 'start',
              }}
            >
              <Box
                {...nodeAttrs('settings-preview-qr', 'Cleaker.NamespacePreviewQR')}
                sx={{
                  width: 88,
                  height: 88,
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: `1px solid ${themedUi.qrBorder}`,
                  background: themedUi.qrBackground,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <QR
                  value={previewQrValue}
                  size={88}
                  fg={theme.palette.primary.main}
                  ecc="H"
                  embedMode="positive-overlay"
                  embedScale={0.32}
                />
              </Box>
              <Box
                {...nodeAttrs('settings-preview-meta', 'Cleaker.NamespacePreviewMeta')}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0.5,
                  flex: '1 1 190px',
                  minWidth: 0,
                }}
              >
                <Box
                  title={`Expression: ${namespaceConfig.expression} · local=${localNamespaceUrl || '—'} · network=${networkNamespaceUrl || '—'} · node=${resolverDisplayName || '—'}`}
                  sx={{ fontSize: '11px', lineHeight: 1.4, color: theme.palette.text.secondary }}
                >
                  monad.ai:{' '}
                  <Box
                    component="span"
                    sx={{
                      color: theme.palette.text.primary,
                      fontFamily: 'monospace',
                      minWidth: 0,
                      overflowWrap: 'anywhere',
                    }}
                  >
                    {compactMonadLabel}
                  </Box>
                </Box>
                <Box sx={{ fontSize: '11px', lineHeight: 1.35, color: theme.palette.text.secondary }}>
                  Namespace:{' '}
                  <Box
                    component="span"
                    sx={{
                      color: theme.palette.text.primary,
                      fontFamily: 'monospace',
                      minWidth: 0,
                      overflowWrap: 'anywhere',
                    }}
                  >
                    {compactRootLabel}
                  </Box>
                </Box>
                <Box sx={{ fontSize: '11px', lineHeight: 1.35, color: theme.palette.text.secondary }}>
                  Root Hash:{' '}
                  <Box
                    component="span"
                    sx={{
                      color: theme.palette.text.primary,
                      fontFamily: 'monospace',
                      minWidth: 0,
                      overflowWrap: 'anywhere',
                    }}
                  >
                    {maskHash(rootNamespaceHash)}
                  </Box>
                </Box>
              </Box>
            </Box>
            <GeneratePairingQR
              namespace={runtimeAuthenticated ? (activeIdentityNamespace || identityNamespace) : ''}
              origin={activeNamespaceUrl || namespaceOrigin}
              hostSurface={hostSurfaceId}
              rootName={semanticRootName}
            />
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
          {showProfileView ? (
            <Stack spacing={1}>
              <Box
                {...nodeAttrs('profile-card', 'Cleaker.ProfileCard')}
                sx={{ minWidth: 0 }}
              >
                {renderSpecNode(claimedProfileCardSpec, `${rootNodeId}.profile-card`)}
              </Box>
              <Box
                {...nodeAttrs('profile-actions', 'Cleaker.ProfileActions')}
                sx={{ display: 'flex', width: '100%', gap: 0.5, alignItems: 'center', justifyContent: 'flex-end', pt: 0.1 }}
              >
                <Button
                  variant="text"
                  size="small"
                  onClick={handleLogout}
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
                    '&:hover': {
                      backgroundColor: themedUi.ghostHover,
                      color: theme.palette.text.primary,
                    },
                  }}
                >
                  Logout
                </Button>
              </Box>
            </Stack>
          ) : showClaimSurfaceView ? (
            <ClaimSurface
              expression={pairingExpression}
              onCancel={() => {
                setPairingExpression('');
                setPairingLinkError(null);
                writeMeshRuntimeValue(runtimeMe, runtime, 'runtime.mesh.pairing.currentExpression', '');
                setKernelViewMode(runtimeAuthenticated ? 'profile' : 'login');
              }}
              onClaimed={() => {
                setPairingExpression('');
                setPairingLinkError(null);
                setKernelViewMode(runtimeAuthenticated ? 'profile' : 'login');
              }}
            />
          ) : showLoginView ? (
            <>
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
                onBlur={() => commitRuntimeCredentials(normalizedUsername, secret)}
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
                        {...nodeAttrs('password-visibility-toggle', 'Cleaker.PasswordVisibilityToggle')}
                        variant="text"
                        size="small"
                        onClick={() => setShowSecret((value) => !value)}
                        sx={{
                          minWidth: '32px',
                          p: 0,
                          mr: '-6px',
                          color: secret ? theme.palette.text.secondary : theme.palette.divider,
                          '&:hover': {
                            backgroundColor: themedUi.ghostHover,
                          },
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
                  {...nodeAttrs('action-login', 'Cleaker.PrimaryAction')}
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
                    background: themedUi.subtleSurface,
                    color: theme.palette.text.primary,
                    borderColor: themedUi.panelBorder,
                    '&:hover': {
                      background: themedUi.ghostHover,
                      borderColor: theme.palette.primary.main,
                    },
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
            </>
          ) : null}
        </Box>
        {pairingLinkError && !showClaimSurfaceView ? (
          <Box
            sx={{
              mt: 1,
              px: 0.9,
              py: 0.75,
              borderRadius: '10px',
              fontSize: '11px',
              lineHeight: 1.45,
              color: theme.palette.error.main,
              backgroundColor: alpha(theme.palette.error.main, 0.08),
              border: `1px solid ${alpha(theme.palette.error.main, 0.16)}`,
            }}
          >
            {pairingLinkError}
          </Box>
        ) : null}
      </Box>
      <AccessRequestHandler />
      <Modal
        open={registerOpen}
        onClose={closeRegisterModal}
        title="Sign Up"
        width={460}
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
            {...nodeAttrs('register-full-name', 'Cleaker.RegisterFullName')}
            label="Full Name"
            placeholder="Sui Abella"
            helperText="Your full name as it will appear in the profile."
            value={registerFullName}
            onChange={(event) => {
              setRegisterFullName(event.target.value);
              setRegisterError(null);
            }}
            autoComplete="name"
            fullWidth
          />
          <TextField
            {...nodeAttrs('register-username', 'Cleaker.RegisterUsername')}
            label="Username"
            helperText={
              namespaceSeedHandle
                ? `Use only the handle. Example: jabellae, not jabellae.${namespaceSeedHandle}`
                : 'Use only the handle. Example: jabellae'
            }
            placeholder="jabellae"
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
            helperText="We'll store this on the claim as your contact email."
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
            helperText="We'll store this on the claim as your contact phone."
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

export default function Cleaker(props: CleakerProps) {
  const localContext = useOptionalMeRuntimeContext();
  const env = useRuntimeEnvironment();
  const localKernelRef = React.useRef<MeLike | null>(null);

  if (!localKernelRef.current) {
    localKernelRef.current = new ME() as unknown as MeLike;
  }

  const inheritedMe = (
    props.me ??
    localContext?.me ??
    env.me ??
    (env.runtime as any)?.__me ??
    (env.runtime as any)?.me
  ) as MeLike | undefined;

  const kernel = inheritedMe ?? localKernelRef.current;
  const shouldWrap = !localContext?.me || localContext.me !== kernel;
  const content = <CleakerInner {...props} me={kernel} />;

  if (!shouldWrap) return content;

  return <MeRuntimeProvider me={kernel}>{content}</MeRuntimeProvider>;
}
