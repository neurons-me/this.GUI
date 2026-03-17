import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useGuiTheme } from '@/gui/hooks';
import Box from '@/gui/atoms/Box/Box';
import TextField from "@/gui/atoms/TextField/TextField";
import Icon from "@/gui/Theme/Icon/Icon";
import Button from '@/gui/atoms/Button/Button';
import { useBlockchainConnection } from "@/gui/components/Blockchain/scripts/connection";
import { deriveIdentity } from "./me/identity";
import QR from "./me/QR";
import ME from "this.me";
import {
  AuditClient,
  SessionOrchestrator,
  emailRegexPasses,
  phoneRegexPasses,
  type SessionState,
  type TimelineEvent,
  usernameRegexPasses,
} from 'cleaker';

const SESSION_USERNAME_STORAGE_KEY = 'cleaker.session.username.v1';
const SESSION_SECRET_STORAGE_KEY = 'cleaker.session.secret.v1';
const SESSION_SOURCE_STORAGE_KEY = 'cleaker.session.source.v1';
const DEFAULT_CLEAKER_SOURCE = 'https://cleaker.me';
const SESSION_CREDENTIALS_EVENT = 'cleaker:session:credentials-changed';

export default function Cleaker() {
  const theme = useGuiTheme();
  const sanitizeRuntimeUsername = useCallback((raw: string) => {
    return String(raw || '').trim().toLowerCase().replace(/^me:\/\//, '').replace(/\/+$/, '').replace(/:\d+$/, '');
  }, []);

  // Username typed in the UI (raw text).
  const [username, setUsername] = useState("");

  // If the user types an invalid username, we keep the raw text in `username`
  // but avoid feeding it into ME / network logic until it validates.
  const [usernameError, setUsernameError] = useState<string | null>(null);

  // Light, local validation to avoid exceptions from ME runtime.
  // (We keep this intentionally permissive; ME is the source of truth.)
  const validateUsername = useCallback((raw: string) => {
    const v = sanitizeRuntimeUsername(raw);
    if (!v) return { value: '', error: null as string | null };
    if (v.length < 5) return { value: v, error: 'Username too short' };
    if (v.length > 32) return { value: v, error: 'Username too long' };
    if (!usernameRegexPasses(v, { allowEmpty: false })) return { value: v, error: 'Only a-z 0-9 . _ -' };
    return { value: v, error: null as string | null };
  }, [sanitizeRuntimeUsername]);
  const [secret, setSecret] = useState("");
  const [secretConfirm, setSecretConfirm] = useState("");
  const [showSecret, setShowSecret] = useState(false);
  const [claimMode, setClaimMode] = useState(false);
  const [claimEmail, setClaimEmail] = useState('');
  const [claimPhone, setClaimPhone] = useState('');
  const [blockchain, setBlockchain] = useState(DEFAULT_CLEAKER_SOURCE);
  const [blockchainDraft, setBlockchainDraft] = useState(DEFAULT_CLEAKER_SOURCE);
  const [showSettings, setShowSettings] = useState(false);
  const [sourceTestStatus, setSourceTestStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');
  const [sourceTestMessage, setSourceTestMessage] = useState<string>('');
  const [showIdentity, setShowIdentity] = useState(false);
  const [showLedgerBox, setShowLedgerBox] = useState(false);
  const [showFaceScan, setShowFaceScan] = useState(false);
  const [avatarExpanded, setAvatarExpanded] = useState(false);
  const [lastFacePayload, setLastFacePayload] = useState<any | null>(null);
  const [faceHasStableTemplate, setFaceHasStableTemplate] = useState(false);
  const secretInputType = useMemo(() => (showSecret ? 'text' : 'password'), [showSecret]);
  // this.me runtime (local semantic + crypto)
  const me = useMemo(() => new ME(), []);

  useEffect(() => {
    try {
      const savedUsername = sanitizeRuntimeUsername(localStorage.getItem(SESSION_USERNAME_STORAGE_KEY) || '');
      const savedSecret = String(localStorage.getItem(SESSION_SECRET_STORAGE_KEY) || '');
      const savedSource = String(localStorage.getItem(SESSION_SOURCE_STORAGE_KEY) || '').trim();
      if (savedUsername) {
        setUsername(savedUsername);
      }
      if (savedSecret) setSecret(savedSecret);
      if (savedSource) {
        setBlockchain(savedSource);
        setBlockchainDraft(savedSource);
      }
    } catch {
      // ignore storage access issues
    }
  }, [sanitizeRuntimeUsername]);

  const commitSource = useCallback((raw: string) => {
    const cleaned = String(raw || '').trim();
    const next = cleaned || DEFAULT_CLEAKER_SOURCE;
    setBlockchain(next);
    setBlockchainDraft(next);
    setSourceTestStatus('idle');
    setSourceTestMessage('');
    try {
      localStorage.setItem(SESSION_SOURCE_STORAGE_KEY, next);
    } catch {
      // ignore storage issues
    }
  }, []);

  const testSource = useCallback(async () => {
    const target = String(blockchainDraft || blockchain || '').trim() || DEFAULT_CLEAKER_SOURCE;
    const normalizedTarget = target.startsWith('http') ? target : `http://${target}`;
    setSourceTestStatus('loading');
    setSourceTestMessage('testing...');
    const started = performance.now();
    try {
      const response = await fetch(normalizedTarget, { method: 'GET' });
      const elapsed = Math.round(performance.now() - started);
      setSourceTestStatus(response.ok ? 'ok' : 'error');
      setSourceTestMessage(`HTTP ${response.status} (${elapsed}ms)`);
    } catch (error) {
      const elapsed = Math.round(performance.now() - started);
      const message = error instanceof Error ? error.message : String(error);
      setSourceTestStatus('error');
      setSourceTestMessage(`${message} (${elapsed}ms)`);
    }
  }, [blockchainDraft, blockchain]);

  const commitRuntimeCredentials = useCallback((nextUsername: string, nextSecret: string) => {
    const normalizedUsername = sanitizeRuntimeUsername(nextUsername);
    const normalizedSecret = String(nextSecret || '').trim();
    try {
      if (normalizedUsername) {
        localStorage.setItem(SESSION_USERNAME_STORAGE_KEY, normalizedUsername);
      } else {
        localStorage.removeItem(SESSION_USERNAME_STORAGE_KEY);
      }
      if (normalizedSecret) {
        localStorage.setItem(SESSION_SECRET_STORAGE_KEY, normalizedSecret);
      } else {
        localStorage.removeItem(SESSION_SECRET_STORAGE_KEY);
      }
      window.dispatchEvent(new CustomEvent(SESSION_CREDENTIALS_EVENT, {
        detail: {
          username: normalizedUsername,
          secret: normalizedSecret,
        },
      }));
    } catch {
      // ignore storage/event issues
    }
  }, [sanitizeRuntimeUsername]);
  // Helper: normalized username only when valid (live input).

  // Mirror only blockchain host into ME (safe to do during typing).
  // Identity claim '@' and secret '_' are applied explicitly on action (Cleak it).
  // The hook provides blockchainHost and blockchainBaseUrl.
  const normalizedUsername = useMemo(() => {
    const { value, error } = validateUsername(username);
    return error ? '' : value;
  }, [username, validateUsername]);

  const { blockchainHost, blockchainBaseUrl, connectionStatus } = useBlockchainConnection({
    blockchain,
    username: '',
    me,
  });

  const isCleakerAvailable = connectionStatus === 'online';
  const isCleakerUnavailable = connectionStatus === 'offline' || connectionStatus === 'declined';

  useEffect(() => {
    try {
      if (blockchainHost) (me as any).ledger.host(blockchainHost);
    } catch {
      // ignore
    }
  }, [me, blockchainHost]);
  const namespace = normalizedUsername
    ? `${normalizedUsername}@${blockchainHost}`
    : `${blockchainHost || 'blockchain:none'}`;
  const identity = useMemo(() => deriveIdentity({ secret, namespace }), [secret, namespace]);
  const cleak = identity.identityRoot;

  const [authStatus, setAuthStatus] = useState<'idle' | 'checking' | 'ok' | 'error'>('idle');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authAction, setAuthAction] = useState<'verify' | 'claim'>('verify');
  const [sessionMode, setSessionMode] = useState<'cloud' | 'host' | null>(null);
  const [sessionFingerprint, setSessionFingerprint] = useState<string | null>(null);
  const [auditEvents, setAuditEvents] = useState<TimelineEvent[]>([]);
  const [auditLoading, setAuditLoading] = useState(false);
  const [auditError, setAuditError] = useState<string | null>(null);
  const [daemonDetected, setDaemonDetected] = useState(false);
  const [hostUpgradeStatus, setHostUpgradeStatus] = useState<'idle' | 'checking' | 'ok' | 'error'>('idle');
  const [hostUpgradeError, setHostUpgradeError] = useState<string | null>(null);

  const apiBaseUrl = useMemo(() => {
    const s = String(blockchainBaseUrl || blockchain || '').trim();
    if (!s) return '';
    return s.startsWith('http') ? s.replace(/\/$/, '') : `http://${s.replace(/\/$/, '')}`;
  }, [blockchainBaseUrl, blockchain]);

  const hostAttestor = useCallback(async (input: { username: string; nonce: string }) => {
    const maybeProvider = (globalThis as unknown as {
      __CLEAKER_HOST_ATTESTOR__?: (value: {
        username: string;
        nonce: string;
      }) => Promise<{
        fingerprint: string;
        local_endpoint: string;
        attestation: string;
        daemonPublicKey: string;
        capabilities?: string[];
      } | null>;
    }).__CLEAKER_HOST_ATTESTOR__;

    if (typeof maybeProvider !== 'function') return null;
    try {
      return await maybeProvider(input);
    } catch {
      return null;
    }
  }, []);

  const hasHostAttestor = useMemo(() => {
    const provider = (globalThis as unknown as {
      __CLEAKER_HOST_ATTESTOR__?: unknown;
    }).__CLEAKER_HOST_ATTESTOR__;
    return typeof provider === 'function';
  }, []);

  const sessionOrchestrator = useMemo(() => {
    if (!apiBaseUrl || !normalizedUsername) return null;
    return new SessionOrchestrator({
      username: normalizedUsername,
      monadBaseUrl: apiBaseUrl,
      hostAttestor,
    });
  }, [apiBaseUrl, normalizedUsername, hostAttestor]);

  const auditClient = useMemo(() => {
    if (!apiBaseUrl) return null;
    return new AuditClient({ monadBaseUrl: apiBaseUrl });
  }, [apiBaseUrl]);

  const loadHostAudit = useCallback(
    async (usernameInput: string, fingerprintInput: string) => {
      if (!auditClient) {
        setAuditEvents([]);
        setAuditError('Audit client is not available');
        return;
      }
      setAuditLoading(true);
      setAuditError(null);
      try {
        const events = await auditClient.getHostHistory(usernameInput, fingerprintInput, 20);
        setAuditEvents(events);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        setAuditEvents([]);
        setAuditError(message);
      } finally {
        setAuditLoading(false);
      }
    },
    [auditClient],
  );

  const syncSessionState = useCallback(async () => {
    if (!sessionOrchestrator) {
      setSessionMode(null);
      setSessionFingerprint(null);
      setAuditEvents([]);
      setAuditError(null);
      return;
    }

    const result = await sessionOrchestrator.sync({ preferHost: true });
    const host = result.envelope.session.host;
    setSessionMode(result.mode);
    setSessionFingerprint(host?.fingerprint || null);

    if (result.mode === 'host' && host?.fingerprint) {
      await loadHostAudit(normalizedUsername, host.fingerprint);
      return;
    }

    setAuditEvents([]);
    setAuditError(null);
  }, [loadHostAudit, normalizedUsername, sessionOrchestrator]);

  useEffect(() => {
    if (!sessionOrchestrator) return;
    const unsubscribe = sessionOrchestrator.subscribe((state: SessionState) => {
      setSessionMode(state.mode);
      setSessionFingerprint(state.envelope?.session.host?.fingerprint || null);
    });
    return unsubscribe;
  }, [sessionOrchestrator]);

  useEffect(() => {
    let cancelled = false;
    const candidates = [
      'http://localhost:8161/__bootstrap',
      `${apiBaseUrl}/__bootstrap`,
    ].filter((value, index, list) => !!value && list.indexOf(value) === index);

    if (!candidates.length) {
      setDaemonDetected(false);
      return;
    }

    (async function detectDaemon() {
      for (let i = 0; i < candidates.length; i += 1) {
        try {
          const response = await fetch(candidates[i], { method: 'GET' });
          if (cancelled) return;
          if (response.ok) {
            setDaemonDetected(true);
            return;
          }
        } catch {
          // keep checking next candidate
        }
      }
      if (!cancelled) setDaemonDetected(false);
    })();

    return () => {
      cancelled = true;
    };
  }, [apiBaseUrl]);

  const canOfferHostUpgrade = useMemo(() => {
    if (!isCleakerAvailable) return false;
    if (!normalizedUsername || !secret) return false;
    if (!daemonDetected) return false;
    return sessionMode !== 'host';
  }, [daemonDetected, isCleakerAvailable, normalizedUsername, secret, sessionMode]);

  const canonicalUsernameLabel = useMemo(() => {
    const label = normalizedUsername || 'username';
    return `${label}.cleaker.me`;
  }, [normalizedUsername]);

  const typingUsernameLabel = useMemo(() => {
    const draft = sanitizeRuntimeUsername(username);
    return draft ? `${draft}.cleaker.me` : 'cleaker.me';
  }, [sanitizeRuntimeUsername, username]);

  const liveUsernameState = useMemo(() => {
    const raw = String(username || '').trim();
    if (!raw) return 'idle' as const;
    if (usernameError) return 'invalid' as const;
    return 'valid' as const;
  }, [username, usernameError]);

  const liveUsernameNote = useMemo(() => {
    if (liveUsernameState === 'invalid') return String(usernameError || 'invalid username format');
    return '';
  }, [liveUsernameState, usernameError]);

  const claimEmailError = useMemo(() => {
    const v = String(claimEmail || '').trim().toLowerCase();
    if (!v) return null as string | null;
    if (!emailRegexPasses(v, { allowEmpty: true })) return 'Invalid email format';
    return null as string | null;
  }, [claimEmail]);

  const claimPhoneError = useMemo(() => {
    const v = String(claimPhone || '').trim();
    if (!v) return null as string | null;
    if (!phoneRegexPasses(v, { allowEmpty: true })) return 'Invalid phone format';
    return null as string | null;
  }, [claimPhone]);

  const secretConfirmError = useMemo(() => {
    if (!claimMode) return null as string | null;
    if (!secretConfirm) return null as string | null;
    return secretConfirm === secret ? null : 'Secrets do not match';
  }, [claimMode, secret, secretConfirm]);

  const resolveUsernameState = useCallback(async (nextUsername: string) => {
    const resp = await fetch(`${apiBaseUrl}/users/${encodeURIComponent(nextUsername)}`);
    if (resp.status === 200) {
      const payload = await resp.json().catch(() => null);
      return { status: 'exists' as const, identityHash: String(payload?.user?.identityHash || '') };
    }
    if (resp.status === 404) {
      return { status: 'available' as const, identityHash: '' };
    }
    throw new Error(`HTTP ${resp.status}`);
  }, [apiBaseUrl]);

  const handleCleak = useCallback(async () => {
    const { value: u, error: uErr } = validateUsername(username);
    if (!u || uErr) {
      setAuthStatus('error');
      setAuthError(uErr || 'Invalid username');
      return false;
    }

    if (!isCleakerAvailable) {
      setAuthStatus('error');
      setAuthError('cleaker not available');
      return false;
    }

    // Must have secret for both claim and verify.
    if (!secret) {
      setAuthStatus('error');
      setAuthError('Secret is required');
      return false;
    }
    if (claimMode && (!secretConfirm || secretConfirm !== secret)) {
      setAuthStatus('error');
      setAuthError('Secrets do not match');
      return false;
    }

    setAuthStatus('checking');
    setAuthError(null);
    setAuthAction(claimMode ? 'claim' : 'verify');
    commitRuntimeCredentials(u, secret);

    let usernameState: 'exists' | 'available' = 'available';
    let remoteIdentityHash = '';
    try {
      const resolved = await resolveUsernameState(u);
      usernameState = resolved.status;
      remoteIdentityHash = resolved.identityHash;
    } catch (e: any) {
      setAuthStatus('error');
      setAuthError(e?.message ?? 'Could not resolve username status');
      return false;
    }
              <TextField
                label="Username"
                placeholder="type a username"
                variant="outlined"
                autoComplete="off"
                value={username}
                onChange={(e) => {
                  const next = e.target.value;
                  setUsername(next);
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
                    autoCorrect: 'off',
                    autoCapitalize: 'off',
                    spellCheck: 'false',
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      right: 0,
                      width: '6px',
                      borderRadius: '0 10px 10px 0',
                      backgroundColor:
                        !username
                          ? theme.palette.divider
                          : usernameError
                          ? theme.palette.error.main
                          : theme.palette.success.main,
                      pointerEvents: 'none',
                      zIndex: 2,
                    }
                  }
                }}
              />
    try { (me as any)['_'](secret); } catch (e: any) {
      setAuthStatus('error');
      setAuthError(e?.message ?? 'Invalid secret');
      return false;
    }

    const identityHash = String(identity.identityRoot || '').trim();
    const publicKey = '0x';

    try {
      const resp = await fetch(`${apiBaseUrl}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: u, identityHash, publicKey }),
      });

      const payload = await resp.json().catch(() => null);
      if (!resp.ok) {
        const msg = payload?.error || payload?.message || `HTTP ${resp.status}`;
        throw new Error(msg);
      }

      setAuthStatus('ok');
      setClaimMode(false);
      window.setTimeout(() => setAuthStatus('idle'), 900);
      return true;
    } catch (e: any) {
      setAuthStatus('error');
      setAuthError(e?.message ?? 'Failed to claim username');
      return false;
    }
  }, [apiBaseUrl, claimEmailError, claimMode, commitRuntimeCredentials, identity.identityRoot, isCleakerAvailable, me, resolveUsernameState, secret, username, validateUsername]);

  const handleMeSnapshot = useCallback(async () => {
    setAuthError(null);
    setAuditError(null);
    if (!faceHasStableTemplate || !lastFacePayload) {
      setAuthStatus('error');
      setAuthError('No face snapshot yet');
      return;
    }
    const ok = await handleCleak();
    if (ok) {
      try {
        await syncSessionState();
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        setAuditError(message);
      }
      setShowFaceScan(false);
      setFaceHasStableTemplate(false);
      setLastFacePayload(null);
    }
  }, [faceHasStableTemplate, handleCleak, lastFacePayload, syncSessionState]);

  const handleHostAuthorize = useCallback(async () => {
    setHostUpgradeStatus('checking');
    setHostUpgradeError(null);

    if (!hasHostAttestor) {
      setHostUpgradeStatus('error');
      setHostUpgradeError('Daemon detected, but no host attestor is available in this runtime.');
      return;
    }

    try {
      await syncSessionState();
      if (sessionOrchestrator?.getMode() === 'host') {
        setHostUpgradeStatus('ok');
        window.setTimeout(() => setHostUpgradeStatus('idle'), 1600);
        return;
      }
      setHostUpgradeStatus('error');
      setHostUpgradeError('Host verification did not complete.');
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setHostUpgradeStatus('error');
      setHostUpgradeError(message);
    }
  }, [hasHostAttestor, sessionOrchestrator, syncSessionState]);

  const handleFaceId = useCallback(() => {
    setAuthStatus('idle');
    setAuthError(null);
    setShowFaceScan(true);
  }, []);
  return (
    <Box
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
        sx={{
          border: `1px solid ${theme.palette.section.subtle}`,
          borderRadius: "12px",
          p: 1.5,
          width: "100%",
          maxWidth: '300px',
          background:
            theme.palette.mode === "dark"
              ? theme.palette.section.default
              : theme.palette.section.subtle,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 5,
          }}
        >
          <Button
            variant="text"
            size="small"
            onClick={() => setShowSettings((v) => !v)}
            aria-label="Connection settings"
            sx={{
              minWidth: '28px',
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              p: 0,
              color: showSettings ? theme.palette.text.primary : theme.palette.text.secondary,
              background: showSettings ? theme.palette.section.default : 'transparent',
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Icon name="settings" fontSize={18} fill={showSettings ? 1 : 0} />
          </Button>
        </Box>

        {showSettings ? (
          <Box
            sx={{
              position: 'absolute',
              top: 40,
              right: 8,
              zIndex: 4,
              width: 220,
              borderRadius: '10px',
              border: `1px solid ${theme.palette.divider}`,
              background:
                theme.palette.mode === 'dark'
                  ? theme.palette.section.default
                  : theme.palette.background.paper,
              boxShadow: '0 12px 28px rgba(0,0,0,0.25)',
              p: 1,
            }}
          >
            <Box
              sx={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: 0.2,
                mb: 0.5,
                color: theme.palette.text.primary,
              }}
            >
              namespace
            </Box>
            <TextField
              variant="outlined"
              value={blockchainDraft}
              onChange={(e) => setBlockchainDraft(e.target.value)}
              onBlur={(e) => commitSource(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  commitSource(blockchainDraft);
                }
              }}
              fullWidth
              slotProps={{
                htmlInput: {
                  autoCapitalize: 'none',
                  autoCorrect: 'off',
                  spellCheck: false,
                  inputMode: 'url',
                },
                input: {
                  endAdornment: (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.35, pr: 0.25 }}>
                      <Button
                        variant="text"
                        size="small"
                        onClick={testSource}
                        sx={{
                          minWidth: 'auto',
                          px: 0.6,
                          py: 0,
                          borderRadius: '6px',
                          fontSize: '10px',
                          textTransform: 'none',
                          color: theme.palette.text.primary,
                          border: `1px solid ${theme.palette.divider}`,
                        }}
                        aria-label="Test source connection"
                      >
                        test
                      </Button>
                      <Button
                        variant="text"
                        size="small"
                        onClick={() => commitSource(DEFAULT_CLEAKER_SOURCE)}
                        sx={{
                          minWidth: 'auto',
                          px: 0.5,
                          py: 0,
                          borderRadius: '6px',
                          fontSize: '10px',
                          textTransform: 'none',
                          color: theme.palette.text.secondary,
                        }}
                        aria-label="Reset source to default"
                      >
                        default
                      </Button>
                    </Box>
                  ),
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                },
              }}
              helperText={
                sourceTestStatus === 'loading'
                  ? 'testing...'
                  : sourceTestMessage || 'https://cleaker.me or your local server'
              }
            />
          </Box>
        ) : null}

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: 1,
            mb: 0.5,
          }}
        >
          <Box
            onClick={() => setAvatarExpanded((prev) => !prev)}
            sx={{
              width: avatarExpanded ? 164 : 72,
              height: avatarExpanded ? 164 : 72,
              borderRadius: '50%',
              overflow: 'hidden',
              border: `1px solid ${theme.palette.primary.main}66`,
              boxShadow: avatarExpanded
                ? `0 0 0 2px ${theme.palette.primary.main}44, 0 10px 24px rgba(0,0,0,0.25)`
                : `0 0 0 1px ${theme.palette.primary.main}33`,
              background: theme.palette.mode === 'dark'
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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.35, minWidth: 0 }}>
            <pre style={{ margin: 0, padding: 0, lineHeight: "12px", fontSize: "12px", color: theme.palette.text.primary }}>
              {`
    ┓   ┏┓
 ┓┏┏┣┓┏┓┏┛
•┗┻┛┛┗┗┛•   
             `}
            </pre>
            {sanitizeRuntimeUsername(username) ? (
              liveUsernameState === 'valid' ? (
                <a
                  href={`https://${typingUsernameLabel}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    color: theme.palette.text.primary,
                    cursor: 'pointer',
                    fontSize: '11px',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    userSelect: 'text',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: avatarExpanded ? '220px' : '180px',
                    borderBottom: `2px solid ${theme.palette.success.main}`,
                    transition: 'border-color 0.2s ease',
                    paddingBottom: '1px',
                    display: 'inline-block',
                  }}
                  title={typingUsernameLabel}
                >
                  {typingUsernameLabel}
                </a>
              ) : (
                <Box
                  title={typingUsernameLabel}
                  sx={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    lineHeight: 1.2,
                    userSelect: 'text',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: avatarExpanded ? '220px' : '180px',
                    borderBottom: liveUsernameState === 'invalid'
                      ? '2px solid transparent'
                      : '2px solid #888',
                    transition: 'border-color 0.2s ease',
                    pb: '1px',
                    display: 'inline-block',
                  }}
                >
                  {typingUsernameLabel}
                </Box>
              )
            ) : (
              <Box
                sx={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  lineHeight: 1.2,
                  userSelect: 'text',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: avatarExpanded ? '220px' : '180px',
                  borderBottom: '2px solid transparent',
                  transition: 'border-color 0.2s ease',
                  pb: '1px',
                  display: 'inline-block',
                }}
              >
                cleaker.me
              </Box>
            )}
            {liveUsernameNote && (
              <Box
                sx={{
                  fontSize: '10px',
                  lineHeight: 1.1,
                  color:
                    liveUsernameState === 'invalid'
                      ? theme.palette.error.main
                      : theme.palette.text.secondary,
                  userSelect: 'none',
                }}
              >
                {liveUsernameNote}
              </Box>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.25,
            mt: 1.75,
            width: "100%",
            px: 0.5,
          }}
        >
          {!isCleakerAvailable ? (
            <Box
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: '10px',
                px: 1,
                py: 0.75,
                color: isCleakerUnavailable ? theme.palette.error.main : theme.palette.text.secondary,
                background:
                  theme.palette.mode === 'dark'
                    ? theme.palette.section.default
                    : theme.palette.background.paper,
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: 0.1,
                textAlign: 'center',
                '@keyframes statusPulse': {
                  '0%': { opacity: 0.55 },
                  '50%': { opacity: 1 },
                  '100%': { opacity: 0.55 },
                },
                animation: isCleakerUnavailable ? 'none' : 'statusPulse 1.8s ease-in-out infinite',
              }}
            >
              {isCleakerUnavailable ? 'cleaker not available.' : 'checking cleaker...'}
            </Box>
          ) : (
            <Box sx={{ display: "flex", gap: 1, mb: 0.25 }}>
              <TextField
                label="Username"
                variant="outlined"
                autoComplete="off"
                value={username}
                onChange={(e) => {
                  const next = e.target.value;
                  setUsername(next);
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
                    endAdornment: (
                      <Box sx={{ display: 'flex', alignItems: 'center', pr: 0.25 }}>
                        <Button
                          variant={claimMode ? 'contained' : 'text'}
                          size="small"
                          onClick={() => {
                            setClaimMode((prev) => {
                              const next = !prev;
                              if (!next) {
                                setClaimEmail('');
                                setClaimPhone('');
                                setSecretConfirm('');
                              }
                              return next;
                            });
                            setAuthStatus('idle');
                            setAuthError(null);
                          }}
                          sx={{
                            minWidth: 'auto',
                            px: 0.6,
                            py: 0,
                            borderRadius: '8px',
                            textTransform: 'none',
                            fontSize: '10px',
                            fontWeight: 700,
                            lineHeight: 1.5,
                            whiteSpace: 'nowrap',
                          }}
                          aria-label={claimMode ? 'Disable claim mode' : 'Enable claim mode'}
                        >
                          sign up
                        </Button>
                      </Box>
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
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      right: 0,
                      width: '6px',
                      borderRadius: '0 10px 10px 0',
                      backgroundColor:
                        !username
                          ? theme.palette.divider
                          : usernameError
                          ? theme.palette.error.main
                          : theme.palette.success.main,
                      pointerEvents: 'none',
                      zIndex: 2,
                    }
                  }
                }}
              />
            </Box>
          )}

          {isCleakerAvailable && normalizedUsername && (
            <>
              {claimMode ? (
                <>
                  <TextField
                    label="Email"
                    variant="outlined"
                    autoComplete="email"
                    value={claimEmail}
                    onChange={(e) => {
                      setClaimEmail(e.target.value);
                      setAuthStatus('idle');
                      setAuthError(null);
                    }}
                    onBlur={() => setClaimEmail((prev) => String(prev || '').trim().toLowerCase())}
                    error={Boolean(claimEmailError)}
                    helperText={claimEmailError || undefined}
                    fullWidth
                    slotProps={{
                      htmlInput: {
                        autoCapitalize: 'none',
                        autoCorrect: 'off',
                        spellCheck: false,
                        inputMode: 'email',
                      },
                    }}
                  />

                  <TextField
                    label="Phone"
                    variant="outlined"
                    autoComplete="tel"
                    value={claimPhone}
                    onChange={(e) => {
                      setClaimPhone(e.target.value);
                      setAuthStatus('idle');
                      setAuthError(null);
                    }}
                    onBlur={() => setClaimPhone((prev) => String(prev || '').trim())}
                    error={Boolean(claimPhoneError)}
                    helperText={claimPhoneError || undefined}
                    fullWidth
                    slotProps={{
                      htmlInput: {
                        autoCapitalize: 'none',
                        autoCorrect: 'off',
                        spellCheck: false,
                        inputMode: 'tel',
                      },
                    }}
                  />
                </>
              ) : null}

              <TextField
                label="Secret"
                type={secretInputType}
                variant="outlined"
                autoComplete="new-password"
                value={secret}
                onChange={(e) => { setSecret(e.target.value); setAuthStatus('idle'); setAuthError(null); }}
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
                        onClick={() => setShowSecret((v) => !v)}
                        sx={{
                          minWidth: '32px',
                          p: 0,
                          mr: '-6px',
                          color: secret ? theme.palette.text.secondary : theme.palette.divider,
                        }}
                        aria-label={showSecret ? 'Hide secret' : 'Show secret'}
                      >
                        <Icon name={showSecret ? "visibility_off" : "visibility"} fontSize={18} fill={showSecret ? 1 : 0} />
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

              {claimMode ? (
                <TextField
                  label="Repeat secret"
                  type={secretInputType}
                  variant="outlined"
                  autoComplete="new-password"
                  value={secretConfirm}
                  onChange={(e) => { setSecretConfirm(e.target.value); setAuthStatus('idle'); setAuthError(null); }}
                  fullWidth
                  error={Boolean(secretConfirmError)}
                  helperText={secretConfirmError || undefined}
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
                          onClick={() => setShowSecret((v) => !v)}
                          sx={{
                            minWidth: '32px',
                            p: 0,
                            mr: '-6px',
                            color: secretConfirm ? theme.palette.text.secondary : theme.palette.divider,
                          }}
                          aria-label={showSecret ? 'Hide secret' : 'Show secret'}
                        >
                          <Icon name={showSecret ? "visibility_off" : "visibility"} fontSize={18} fill={showSecret ? 1 : 0} />
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
              ) : null}


              <Box sx={{ display: 'flex', width: '100%' }}>
                <div style={{ flex: 1 }} />
                <Button
                  variant="outlined"
                  size="small"
                  onClick={async () => {
                    const ok = await handleCleak();
                    if (ok) {
                      try {
                        await syncSessionState();
                      } catch {
                        // keep auth result even if timeline refresh fails
                      }
                    }
                  }}
                  aria-label="Verify username and secret"
                  sx={{
                    borderRadius: '10px',
                    textTransform: 'none',
                    fontWeight: 400,
                    minWidth: '88px',
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
                  disabled={
                    !secret ||
                    !normalizedUsername ||
                    authStatus === 'checking' ||
                    (claimMode && (Boolean(claimEmailError) || Boolean(claimPhoneError) || !secretConfirm || Boolean(secretConfirmError)))
                  }
                >
                  {claimMode
                    ? 'claim'
                    : <><span style={{
                        fontSize: '1em',
                        marginRight: 8,
                        verticalAlign: 'middle',
                        color: theme.palette.text.secondary,
                        opacity: 0.7,
                        fontWeight: 400,
                        letterSpacing: 0
                      }}>⟁</span><span style={{ fontWeight: 400, fontSize: '1rem' }}>.me</span></>}
                </Button>
              </Box>

              {authStatus === 'checking' ? (
                <span style={{ fontSize: '11px', color: theme.palette.text.secondary, paddingLeft: 2 }}>
                  {authAction === 'claim' ? 'Claiming username...' : 'Verifying username + secret...'}
                </span>
              ) : null}

              {authStatus === 'error' && authError ? (
                <span style={{ fontSize: '11px', color: theme.palette.error.main, paddingLeft: 2 }}>
                  {authError}
                </span>
              ) : null}

              {authStatus === 'ok' ? (
                <span style={{ fontSize: '11px', color: theme.palette.success.main, paddingLeft: 2 }}>
                  {authAction === 'claim' ? 'Claimed.' : 'Verified.'}
                </span>
              ) : null}
            </>
          )}

        </Box>
      </Box>
    </Box>
  );
}
