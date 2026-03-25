import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useGuiTheme } from '@/gui/Hooks';
import Box from '@/gui/Atoms/Box/Box';
import TextField from "@/gui/Atoms/TextField/TextField";
import Icon from "@/gui/Atoms/Icon/Icon";
import Button from '@/gui/Atoms/Button/Button';
import {
  type ConnectionStatus,
  useSovereignPresence,
} from "./Blockchain/scripts/connection";
import { selectionStore } from '@/runtime/selectionStore';
import { deriveIdentity } from "../me/identity";
import QR from "../me/QR";
import { usernameRegexPasses } from 'cleaker';
import {
  readUsernameFromBootstrap,
  readUsernameFromLocation,
  readUsernameFromStorage,
  readUsernameFromWindow,
  sanitizeCleakerUsername,
  SESSION_CREDENTIALS_EVENT,
  SESSION_SECRET_STORAGE_KEY,
  SESSION_USERNAME_STORAGE_KEY,
} from './runtimeUsername';

const DEFAULT_PARENT_ORIGIN = 'https://cleaker.me';
const DEFAULT_LOCAL_DAEMON_ORIGIN = 'http://localhost:8161';

type AuthStatus = 'idle' | 'checking' | 'ok' | 'error';
type AuthAction = 'claim' | 'open';
type ClaimResolution = 'idle' | 'checking' | 'openable' | 'locked' | 'unclaimed' | 'error';
type ActionTarget = 'local' | 'cloud' | 'none';
export type CleakerProps = {
  'data-gui-node-id'?: string;
  'data-gui-component'?: string;
  username?: string;
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

export default function Cleaker(props: CleakerProps) {
  const theme = useGuiTheme();
  const rootNodeId = String(props['data-gui-node-id'] || 'Cleaker');
  const rootNodeType = String(props['data-gui-component'] || 'Cleaker');

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
  const [showSecret, setShowSecret] = useState(false);
  const [avatarExpanded, setAvatarExpanded] = useState(false);
  const [authStatus, setAuthStatus] = useState<AuthStatus>('idle');
  const [authAction, setAuthAction] = useState<AuthAction>('claim');
  const [authError, setAuthError] = useState<string | null>(null);
  const [claimResolution, setClaimResolution] = useState<ClaimResolution>('idle');
  const [localResolverLabel, setLocalResolverLabel] = useState('');

  useEffect(() => {
    try {
      const savedSecret = String(localStorage.getItem(SESSION_SECRET_STORAGE_KEY) || '');

      if (savedSecret) setSecret(savedSecret);
    } catch {
      // Ignore storage access failures in restricted runtimes.
    }
  }, []);

  useEffect(() => {
    const explicitUsername = sanitizeRuntimeUsername(props.username || '');
    if (!explicitUsername) return;

    const { error } = validateUsername(explicitUsername);
    setUsername(explicitUsername);
    setUsernameError(error);
  }, [props.username, sanitizeRuntimeUsername, validateUsername]);

  useEffect(() => {
    if (username) return;

    const discoveredUsername =
      readUsernameFromWindow() ||
      readUsernameFromLocation() ||
      readUsernameFromStorage();

    if (!discoveredUsername) return;

    const { error } = validateUsername(discoveredUsername);
    setUsername(discoveredUsername);
    setUsernameError(error);
  }, [username, validateUsername]);

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

  const identityNamespace = useMemo(() => {
    return normalizedUsername ? `${normalizedUsername}.cleaker.me` : 'cleaker.me';
  }, [normalizedUsername]);

  const typingNamespace = useMemo(() => {
    const draft = sanitizeRuntimeUsername(username);
    return draft ? `${draft}.cleaker.me` : 'cleaker.me';
  }, [sanitizeRuntimeUsername, username]);

  const {
    parentHost,
    parentBaseUrl,
    parentStatus,
    localHost,
    localBaseUrl,
    localStatus,
  } = useSovereignPresence({
    parent: DEFAULT_PARENT_ORIGIN,
    local: DEFAULT_LOCAL_DAEMON_ORIGIN,
  });

  const isParentOnline = parentStatus === 'online';
  const isLocalOnline = localStatus === 'online';

  useEffect(() => {
    let cancelled = false;

    if (localStatus !== 'online' || !localBaseUrl) {
      setLocalResolverLabel('');
      return;
    }

    fetch(`${localBaseUrl}/__bootstrap`, { method: 'GET' })
      .then((response) => response.json().catch(() => null))
      .then((payload) => {
        if (cancelled) return;
        const body = payload as { resolverDisplayName?: string; resolverHostName?: string } | null;
        const next = String(body?.resolverDisplayName || body?.resolverHostName || '').trim();
        setLocalResolverLabel(next);
      })
      .catch(() => {
        if (!cancelled) setLocalResolverLabel('');
      });

    return () => {
      cancelled = true;
    };
  }, [localBaseUrl, localStatus]);

  const actionTarget = useMemo<ActionTarget>(() => {
    if (isLocalOnline) return 'local';
    if (isParentOnline) return 'cloud';
    return 'none';
  }, [isLocalOnline, isParentOnline]);

  const actionBaseUrl = useMemo(() => {
    if (actionTarget === 'local') return localBaseUrl;
    if (actionTarget === 'cloud') return parentBaseUrl;
    return '';
  }, [actionTarget, localBaseUrl, parentBaseUrl]);

  const actionTargetLabel = useMemo(() => {
    if (actionTarget === 'local') return localResolverLabel || localHost || 'localhost:8161';
    if (actionTarget === 'cloud') return parentHost || 'cleaker.me';
    return 'offline';
  }, [actionTarget, localHost, localResolverLabel, parentHost]);

  useEffect(() => {
    if (username) return;

    const runtimeOrigins = Array.from(new Set([
      typeof window !== 'undefined' ? window.location.origin : '',
      actionBaseUrl,
    ].map((origin) => String(origin || '').trim().replace(/\/+$/, '')).filter(Boolean)));

    if (runtimeOrigins.length === 0) return;

    let cancelled = false;
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;

    (async () => {
      for (const origin of runtimeOrigins) {
        const discoveredUsername = await readUsernameFromBootstrap(origin, controller?.signal);
        if (cancelled) return;
        if (!discoveredUsername) continue;

        const { error } = validateUsername(discoveredUsername);
        setUsername(discoveredUsername);
        setUsernameError(error);
        return;
      }
    })();

    return () => {
      cancelled = true;
      controller?.abort();
    };
  }, [actionBaseUrl, username, validateUsername]);

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

  const identity = useMemo(() => {
    return deriveIdentity({
      secret,
      namespace: identityNamespace,
    });
  }, [identityNamespace, secret]);

  useEffect(() => {
    let cancelled = false;

    if (!normalizedUsername || !secret || !actionBaseUrl) {
      setClaimResolution('idle');
      return;
    }

    setClaimResolution('checking');

    const handle = window.setTimeout(async () => {
      try {
        const response = await fetch(`${actionBaseUrl}/claims/open`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            namespace: identityNamespace,
            secret,
          }),
        });

        if (cancelled) return;

        if (response.ok) {
          setClaimResolution('openable');
          return;
        }

        if (response.status === 404) {
          setClaimResolution('unclaimed');
          return;
        }

        if (response.status === 403) {
          setClaimResolution('locked');
          return;
        }

        setClaimResolution('error');
      } catch {
        if (!cancelled) setClaimResolution('error');
      }
    }, 320);

    return () => {
      cancelled = true;
      window.clearTimeout(handle);
    };
  }, [actionBaseUrl, identityNamespace, normalizedUsername, secret]);

  const primaryAction = useMemo<AuthAction>(() => {
    if (claimResolution === 'openable' || claimResolution === 'locked') return 'open';
    return 'claim';
  }, [claimResolution]);

  const primaryActionLabel = useMemo(() => {
    if (actionTarget === 'none') return 'Offline';
    return '⟁.me';
  }, [actionTarget]);

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

  const handleCleak = useCallback(async () => {
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

    let finalAction: AuthAction = primaryAction;
    setAuthStatus('checking');
    setAuthAction(finalAction);
    setAuthError(null);
    commitRuntimeCredentials(value, secret);

    try {
      if (primaryAction === 'open') {
        const { response, payload } = await postNamespaceOperation('/claims/open');
        if (!response.ok) {
          if (response.status === 403) setClaimResolution('locked');
          if (response.status === 404) setClaimResolution('unclaimed');
          throw new Error(readErrorMessage(payload, response.status, 'Failed to open namespace'));
        }
        setClaimResolution('openable');
      } else {
        const claimed = await postNamespaceOperation('/claims');
        if (claimed.response.ok) {
          setClaimResolution('openable');
        } else if (claimed.response.status === 409) {
          const opened = await postNamespaceOperation('/claims/open');
          if (opened.response.ok) {
            finalAction = 'open';
            setAuthAction(finalAction);
            setClaimResolution('openable');
          } else if (opened.response.status === 403) {
            setClaimResolution('locked');
            throw new Error('Claim exists on selected host, but the password did not unlock it');
          } else {
            throw new Error(readErrorMessage(claimed.payload, claimed.response.status, 'Namespace already claimed'));
          }
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
  }, [actionBaseUrl, commitRuntimeCredentials, postNamespaceOperation, primaryAction, secret, username, validateUsername]);

  const connectionTone = useCallback((status: ConnectionStatus) => {
    if (status === 'online') return theme.palette.success.main;
    if (status === 'connecting') return theme.palette.warning.main;
    if (status === 'offline' || status === 'declined') return theme.palette.error.main;
    return theme.palette.text.secondary;
  }, [theme.palette.error.main, theme.palette.success.main, theme.palette.text.secondary, theme.palette.warning.main]);


  const isPrimaryActionDisabled = !normalizedUsername || !secret || actionTarget === 'none' || authStatus === 'checking';
  const authSuccessMessage = authAction === 'open'
    ? `Opened on ${actionTargetLabel}.`
    : `Claimed on ${actionTargetLabel}.`;
  const authProgressMessage = authAction === 'open'
    ? `Opening ${identityNamespace} on ${actionTargetLabel}...`
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
      namespace: identityNamespace,
      actionTarget,
      actionBaseUrl,
      claimResolution,
    });

    registerNode(nodeId('card'), nodePath('card'), 'Cleaker.Card', {
      namespace: identityNamespace,
      expandedAvatar: avatarExpanded,
      localSurface: localResolverLabel || localHost || 'localhost:8161',
      localStatus: describeConnectionStatus(localStatus),
    });
    registerNode(nodeId('avatar'), nodePath('avatar'), 'Cleaker.AvatarQR', {
      identityRoot: identity.identityRoot,
      expanded: avatarExpanded,
    });
    registerNode(nodeId('identity'), nodePath('identity'), 'Cleaker.IdentityField', {
      username,
      namespace: typingNamespace,
      valid: liveUsernameState === 'valid',
      error: usernameError,
    });
    registerNode(nodeId('local'), nodePath('local'), 'Cleaker.LocalSurface', {
      label: localResolverLabel || localHost || 'localhost:8161',
      status: describeConnectionStatus(localStatus),
    });
    registerNode(nodeId('password'), nodePath('password'), 'Cleaker.PasswordField', {
      hasValue: Boolean(secret),
      visible: showSecret,
    });
    registerNode(nodeId('action'), nodePath('action'), 'Cleaker.PrimaryAction', {
      label: primaryActionLabel,
      disabled: isPrimaryActionDisabled,
      intent: primaryAction,
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
    isPrimaryActionDisabled,
    liveUsernameState,
    localHost,
    localResolverLabel,
    localStatus,
    nodeId,
    nodePath,
    primaryAction,
    primaryActionLabel,
    props,
    rootNodeId,
    rootNodeType,
    secret,
    showSecret,
    typingNamespace,
    username,
    usernameError,
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
            justifyContent: 'flex-start',
            gap: 1,
            mb: 0.5,
          }}
        >
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
              value={identity.identityRoot}
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
                        .cleaker.me
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
            {...nodeAttrs('action', 'Cleaker.PrimaryAction')}
            sx={{ display: 'flex', width: '100%' }}
          >
            <div style={{ flex: 1 }} />
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                void handleCleak();
              }}
              aria-label=".me."
              sx={{
                borderRadius: '10px',
                textTransform: 'none',
                fontWeight: 400,
                minWidth: '94px',
                fontSize: '1rem',
                letterSpacing: 0.5,
                padding: '4px 18px',
                borderWidth: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                background: 'none',
                color: theme.palette.text.primary,
                borderColor: theme.palette.divider,
              }}
              disabled={isPrimaryActionDisabled}
            >
              {primaryActionLabel}
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
    </Box>
  );
}
