// this.GUI — Blockchain Container (Clean Version)
// This component ONLY manages:
//  ✔ Endpoint URL
//  ✔ Connection state
//  ✔ Tabs (Users / Blocks)
//  ✔ Passing endpoint prop downward
// No fetching, no table markup.
//@/gui/Session/Session.tsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Box, Button, IconButton, Tooltip, Typography } from '@/gui/Atoms';
import Icon from '@/gui/Atoms/Icon/Icon';
import { useGuiTheme, useGuiMediaQuery } from '@/gui/Hooks';
import UsersTable from './Usernames/Usernames';
import { BlocksTable } from './Blocks/BlocksTable';
import QR from '../../me/QR';
import { buildCleakerNamespaceUrl, parseCleakerNamespaceExpression } from '../namespaceExpression';
import { deriveChildIdentityHash, deriveIdentityRootHash } from '../../me/identity';
import { type CleakerBootstrapInfo, readCleakerBootstrap } from '../runtimeUsername';
import { createSurfaceEntry, isLoopbackishHost, resolveSemanticRootName } from '../surfaceModel';

export interface BlockchainProps {
  endpoint?: string;
  defaultTab?: 'users' | 'blocks' | 'details' | 'surface';
  namespaceExpression?: string;
  namespaceHandle?: string;
  rootHostNamespace?: string;
  surfaceNamespace?: string;
  subjectSurfaceNamespace?: string;
  subjectHandleNamespace?: string;
  rootNamespaceHash?: string;
  surfaceNamespaceHash?: string;
  subjectNamespaceHash?: string;
  resolverHostName?: string;
  resolverDisplayName?: string;
  resolverSurfaceNamespace?: string;
  resolverSubjectSurfaceNamespace?: string;
  namespaceUrl?: string;
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

function formatSurfaceNamespace(host: string, port: number | null): string {
  const normalizedHost = String(host || '').trim().toLowerCase();
  if (!normalizedHost) return '';
  return port == null ? normalizedHost : `${normalizedHost}:${port}`;
}

export default function Blockchain({
  endpoint: endpointProp = 'http://localhost:8161',
  defaultTab = 'users',
  namespaceExpression = '',
  namespaceHandle = '',
  rootHostNamespace = '',
  surfaceNamespace = '',
  subjectSurfaceNamespace = '',
  subjectHandleNamespace = '',
  rootNamespaceHash = '',
  surfaceNamespaceHash = '',
  subjectNamespaceHash = '',
  resolverHostName: resolverHostNameProp = '',
  resolverDisplayName: resolverDisplayNameProp = '',
  resolverSurfaceNamespace: resolverSurfaceNamespaceProp = '',
  resolverSubjectSurfaceNamespace: resolverSubjectSurfaceNamespaceProp = '',
  namespaceUrl: namespaceUrlProp = '',
}: BlockchainProps) {
  const [endpoint, setEndpoint] = useState(endpointProp || 'http://localhost:8161');
  const [connected, setConnected] = useState(false);
  const [activeTab, setActiveTab] = useState<'users' | 'blocks' | 'details' | 'surface'>(defaultTab);
  const [showEndpointInput, setShowEndpointInput] = useState(false);
  const [bootstrapInfo, setBootstrapInfo] = useState<CleakerBootstrapInfo | null>(null);
  const theme = useGuiTheme();
  const isMobile = useGuiMediaQuery(theme.breakpoints.down('sm'));
  const debounceRef = useRef<number | null>(null);
  function normalizeEndpoint(raw: string) {
    const v = (raw ?? '').trim();
    if (!v) return null;
    // If user types a token like "Blockchain", don't treat as an endpoint.
    if (!v.includes('.') && !v.includes(':') && !v.startsWith('/')) return null;

    // Add protocol if missing.
    const withProto = /^https?:\/\//i.test(v) ? v : `http://${v}`;
    // Strip trailing slash for consistent concatenation.
    return withProto.replace(/\/+$/, '');
  }
  const safeEndpoint = normalizeEndpoint(endpoint) ?? '';
  const previewNamespace = useMemo(() => {
    const candidate = String(endpoint || namespaceExpression || endpointProp || '').trim();
    if (!candidate) return null;
    try {
      return parseCleakerNamespaceExpression(candidate);
    } catch {
      return null;
    }
  }, [endpoint, endpointProp, namespaceExpression]);

  const previewUsername = useMemo(() => {
    const fromPreview = String(previewNamespace?.prefix || '').trim().toLowerCase();
    if (fromPreview) return fromPreview;
    const handle = String(subjectHandleNamespace || '').trim().toLowerCase();
    if (handle.includes('.')) return handle.split('.')[0] || '';
    return '';
  }, [previewNamespace?.prefix, subjectHandleNamespace]);

  const resolvedRootHostNamespace = useMemo(() => {
    return String(previewNamespace?.transport.host || rootHostNamespace || '').trim().toLowerCase();
  }, [previewNamespace?.transport.host, rootHostNamespace]);

  const resolvedSurfaceNamespace = useMemo(() => {
    if (previewNamespace) {
      return formatSurfaceNamespace(previewNamespace.transport.host, previewNamespace.transport.port);
    }
    return String(surfaceNamespace || '').trim().toLowerCase();
  }, [previewNamespace, surfaceNamespace]);

  const resolvedNamespaceHandle = useMemo(() => {
    if (previewNamespace) return String(previewNamespace.constant || '').trim().toLowerCase();
    return String(namespaceHandle || '').trim().toLowerCase();
  }, [namespaceHandle, previewNamespace]);

  const resolvedSubjectHandleNamespace = useMemo(() => {
    if (!previewUsername) return String(subjectHandleNamespace || '').trim().toLowerCase();
    if (!resolvedNamespaceHandle) return '';
    return `${previewUsername}.${resolvedNamespaceHandle}`;
  }, [previewUsername, resolvedNamespaceHandle, subjectHandleNamespace]);

  const resolvedResolverHostName = useMemo(() => {
    return String(bootstrapInfo?.resolverHostName || resolverHostNameProp || '').trim().toLowerCase();
  }, [bootstrapInfo?.resolverHostName, resolverHostNameProp]);

  const resolvedResolverDisplayName = useMemo(() => {
    return String(bootstrapInfo?.resolverDisplayName || resolverDisplayNameProp || '').trim();
  }, [bootstrapInfo?.resolverDisplayName, resolverDisplayNameProp]);

  const resolvedResolverSurfaceNamespace = useMemo(() => {
    if (resolvedResolverHostName) {
      return formatSurfaceNamespace(resolvedResolverHostName, previewNamespace?.transport.port ?? null);
    }
    return String(resolverSurfaceNamespaceProp || '').trim().toLowerCase();
  }, [previewNamespace?.transport.port, resolvedResolverHostName, resolverSurfaceNamespaceProp]);

  const hostResolvedSurfaceEntry = useMemo(() => {
    const entry = bootstrapInfo?.surfaceEntry;
    if (!entry) return null;

    return {
      ...entry,
      status: {
        ...entry.status,
        availability: connected ? 'online' : entry.status.availability,
        syncState: connected ? 'current' : entry.status.syncState,
        lastSeen: connected ? Date.now() : entry.status.lastSeen,
      },
    };
  }, [bootstrapInfo?.surfaceEntry, connected]);

  const semanticRootName = useMemo(() => {
    const resolvedRoot = String(hostResolvedSurfaceEntry?.rootName || '').trim().toLowerCase();
    if (resolvedRoot) return resolvedRoot;
    return resolveSemanticRootName({
      namespaceHandle: resolvedNamespaceHandle,
      resolverHostName: resolvedResolverHostName,
      rootHostNamespace: resolvedRootHostNamespace,
    });
  }, [
    hostResolvedSurfaceEntry?.rootName,
    resolvedNamespaceHandle,
    resolvedResolverHostName,
    resolvedRootHostNamespace,
  ]);

  const resolvedRootNamespaceHash = useMemo(() => {
    if (!semanticRootName) return String(rootNamespaceHash || '').trim();
    return deriveIdentityRootHash('', semanticRootName);
  }, [rootNamespaceHash, semanticRootName]);

  const resolvedSurfaceNamespaceHash = useMemo(() => {
    return resolvedRootNamespaceHash || String(surfaceNamespaceHash || '').trim();
  }, [resolvedRootNamespaceHash, surfaceNamespaceHash]);

  const resolvedSubjectNamespaceHash = useMemo(() => {
    if (!previewUsername) return String(subjectNamespaceHash || resolvedRootNamespaceHash || '').trim();
    return deriveChildIdentityHash(resolvedRootNamespaceHash, previewUsername);
  }, [previewUsername, resolvedRootNamespaceHash, subjectNamespaceHash]);

  const localNamespaceUrl = useMemo(() => {
    if (!resolvedSurfaceNamespace || !previewNamespace) return '';
    const label = previewUsername ? `${previewUsername}.` : '';
    return `${previewNamespace.transport.protocol}://${label}${resolvedSurfaceNamespace}`;
  }, [previewNamespace, previewUsername, resolvedSurfaceNamespace]);

  const networkNamespaceUrl = useMemo(() => {
    if (!resolvedResolverSurfaceNamespace || !previewNamespace) return '';
    const label = previewUsername ? `${previewUsername}.` : '';
    return `${previewNamespace.transport.protocol}://${label}${resolvedResolverSurfaceNamespace}`;
  }, [previewNamespace, previewUsername, resolvedResolverSurfaceNamespace]);

  const surfaceEntry = useMemo(() => {
    if (hostResolvedSurfaceEntry) return hostResolvedSurfaceEntry;
    return createSurfaceEntry({
      namespaceUrl: networkNamespaceUrl || localNamespaceUrl || namespaceUrlProp || '',
      endpoint: safeEndpoint || endpointProp || '',
      namespaceHandle: resolvedNamespaceHandle,
      rootHostNamespace: resolvedRootHostNamespace,
      resolverHostName: resolvedResolverHostName,
      connected,
    });
  }, [
    connected,
    endpointProp,
    hostResolvedSurfaceEntry,
    localNamespaceUrl,
    networkNamespaceUrl,
    namespaceUrlProp,
    resolvedNamespaceHandle,
    resolvedResolverHostName,
    resolvedRootHostNamespace,
    safeEndpoint,
  ]);

  const previewQrValue = useMemo(() => {
    if (previewNamespace && isLoopbackishHost(previewNamespace.transport.host) && networkNamespaceUrl) {
      return networkNamespaceUrl;
    }
    if (localNamespaceUrl) return localNamespaceUrl;

    if (namespaceUrlProp) return String(namespaceUrlProp).trim();

    if (previewNamespace) {
      try {
        return buildCleakerNamespaceUrl(previewNamespace, previewUsername || undefined);
      } catch {
        // Fall through to the hash fallback below.
      }
    }

    return (
      String(resolvedSubjectNamespaceHash || '').trim() ||
      String(resolvedSurfaceNamespaceHash || '').trim() ||
      String(resolvedRootNamespaceHash || '').trim()
    );
  }, [
    namespaceUrlProp,
    localNamespaceUrl,
    networkNamespaceUrl,
    previewNamespace,
    previewUsername,
    resolvedRootNamespaceHash,
    resolvedSubjectNamespaceHash,
    resolvedSurfaceNamespaceHash,
  ]);

  const compactMonadLabel = useMemo(() => {
    return compactSurfaceLabel(resolvedSurfaceNamespace || safeEndpoint || endpointProp || 'unknown');
  }, [endpointProp, resolvedSurfaceNamespace, safeEndpoint]);

  const compactRootLabel = useMemo(() => {
    return compactNamespaceName(semanticRootName || resolvedRootHostNamespace || '—') || '—';
  }, [resolvedRootHostNamespace, semanticRootName]);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  async function handleConnect() {
    const base = safeEndpoint;
    if (!base) {
      setConnected(false);
      return;
    }
    try {
      const res = await fetch(`${base}/`, { method: 'GET' });
      if (!res.ok) throw new Error('Failed');
      setConnected(true);
    } catch {
      setConnected(false);
    }
  }

  function scheduleConnect(nextEndpoint: string) {
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    const nextBase = normalizeEndpoint(nextEndpoint) ?? '';
    if (!nextBase) {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
      setConnected(false);
      return;
    }

    debounceRef.current = window.setTimeout(() => {
      // noop: the [safeEndpoint] effect will connect using the latest endpoint value
    }, 450);
  }

  function onEndpointKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
      handleConnect();
    }
  }

  useEffect(() => {
    return () => {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
  }, []);

  useEffect(() => {
    // Auto-connect when we have a valid endpoint (on mount and whenever it changes)
    if (!safeEndpoint) return;
    handleConnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeEndpoint]);

  useEffect(() => {
    if (!safeEndpoint) {
      setBootstrapInfo(null);
      return;
    }

    let cancelled = false;
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;

    (async () => {
      const payload = await readCleakerBootstrap(safeEndpoint, controller?.signal);
      if (cancelled) return;
      setBootstrapInfo(payload);
    })();

    return () => {
      cancelled = true;
      controller?.abort();
    };
  }, [safeEndpoint]);

  const surfaceMetaRows = [
    ['Host ID', surfaceEntry.hostId],
    ['Type', surfaceEntry.type],
    ['Trust', surfaceEntry.trust],
    ['Root Name', surfaceEntry.rootName],
  ] as const;

  const surfaceAccessRows = [
    ['Namespace', surfaceEntry.namespace],
    ['Endpoint', surfaceEntry.endpoint],
  ] as const;

  const surfaceCapacityRows = [
    ['CPU Cores', surfaceEntry.capacity.cpuCores],
    ['RAM (GB)', surfaceEntry.capacity.ramGb],
    ['Storage (GB)', surfaceEntry.capacity.storageGb],
    ['Bandwidth (Mbps)', surfaceEntry.capacity.bandwidthMbps],
  ] as const;

  const surfaceStatusRows = [
    ['Availability', surfaceEntry.status.availability],
    ['Sync', surfaceEntry.status.syncState],
    ['Latency (ms)', surfaceEntry.status.latencyMs],
    [
      'Last Seen',
      surfaceEntry.status.lastSeen ? new Date(surfaceEntry.status.lastSeen).toLocaleString() : null,
    ],
  ] as const;

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        padding: '1.5rem',
        maxWidth: '900px',
        margin: '0 auto',
        background: 'background.paper',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
        }}
      >
        <Tooltip
          title={showEndpointInput ? 'Hide namespace input' : 'Show namespace input'}
          placement="bottom"
          arrow
        >
          <Box component="span" sx={{ display: 'inline-flex' }}>
            <IconButton
              aria-label={showEndpointInput ? 'Hide namespace input' : 'Show namespace input'}
              onClick={() => setShowEndpointInput((v) => !v)}
              size="small"
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
                color:
                  !safeEndpoint
                    ? 'divider'
                    : connected
                      ? 'success.main'
                      : 'error.main',
                '&:hover': {
                  bgcolor: 'background.nav',
                  color:
                    !safeEndpoint
                      ? 'text.secondary'
                      : connected
                        ? 'success.main'
                        : 'error.main',
                },
              }}
            >
              <Icon name="dns" fontSize={18} />
            </IconButton>
          </Box>
        </Tooltip>

        <Tooltip title="What is a namespace?" placement="bottom" arrow>
          <Box component="span" sx={{ display: 'inline-flex' }}>
            <IconButton
              aria-label="Namespace info"
              size="small"
              onClick={() => setActiveTab('details')}
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
                color: 'text.secondary',
                '&:hover': { bgcolor: 'background.nav', color: 'text.primary' },
              }}
            >
              <Icon name="info" />
            </IconButton>
          </Box>
        </Tooltip>
      </Box>
      {/* Connection Input */}
      {showEndpointInput && (
        <Box
          sx={{
            marginTop: '1rem',
            display: 'flex',
            gap: 0.75,
            alignItems: 'center',
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <Box
            sx={{
              flex: '0 0 auto',
              width: isMobile ? '100%' : '25%',
              minWidth: 240,
            }}
          >
            <Box
              component="fieldset"
              sx={{
                m: 0,
                p: 0,
                border: '1px solid',
                borderColor: connected ? 'success.main' : 'divider',
                borderRadius: 2,
                minHeight: 36,
                bgcolor: 'background.default',
                transition: 'border-color 120ms ease, box-shadow 120ms ease',
                '&:focus-within': {
                  borderColor: connected ? 'success.main' : 'primary.main',
                  boxShadow: (theme: any) =>
                    connected
                      ? `0 0 0 3px ${theme?.palette?.success?.main}22`
                      : `0 0 0 3px ${theme?.palette?.primary?.main}22`,
                },
              }}
            >
              <Box
                component="legend"
                sx={{
                  px: 0.75,
                  mx: 1,
                  fontSize: '0.75rem',
                  color: connected ? 'success.main' : 'text.secondary',
                lineHeight: 1,
                cursor: 'help',
              }}
              onClick={() => setActiveTab('details')}
              title="What is a namespace?"
            >
                Namespace
              </Box>

              <Box
                component="input"
                type="text"
                name="namespace"
                aria-label="Namespace"
                placeholder="localhost:8161"
                title="Example: localhost:8161 or cleaker.me"
                value={endpoint}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const next = e.target.value;
                  setEndpoint(next);
                  scheduleConnect(next);
                }}
                onKeyDown={onEndpointKeyDown}
                sx={{
                  width: '100%',
                  px: 1.25,
                  py: 0.75,
                  border: 0,
                  outline: 'none',
                  bgcolor: 'transparent',
                  color: 'text.primary',
                  fontSize: '0.85rem',
                  boxSizing: 'border-box',
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: isMobile ? '100%' : 'auto',
            }}
          >
            <IconButton
              aria-label={connected ? 'Connected' : 'Connect'}
              onClick={() => handleConnect()}
              size="small"
              disabled={!safeEndpoint}
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
                color: connected ? 'success.main' : 'text.secondary',
                '&:hover': {
                  bgcolor: 'background.nav',
                  color: connected ? 'success.main' : 'text.primary',
                },
              }}
            >
              <Icon name={connected ? 'check' : 'sync'} />
            </IconButton>
          </Box>
        </Box>
      )}
      {/* Tabs */}
      <Box
        sx={{
          display: 'flex',
          gap: '1rem',
          marginTop: '1.5rem',
          marginBottom: '1rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '0.5rem',
        }}
      >
        <Button
          variant={activeTab === 'users' ? 'outlined' : 'text'}
          size="small"
          sx={{ minHeight: 32, px: 1.25, fontSize: '0.8rem' }}
          onClick={() => setActiveTab('users')}
        >
          Users
        </Button>
        <Button
          variant={activeTab === 'blocks' ? 'outlined' : 'text'}
          size="small"
          sx={{ minHeight: 32, px: 1.25, fontSize: '0.8rem' }}
          onClick={() => setActiveTab('blocks')}
        >
          Blocks
        </Button>
        <Button
          variant={activeTab === 'details' ? 'outlined' : 'text'}
          size="small"
          sx={{ minHeight: 32, px: 1.25, fontSize: '0.8rem' }}
          onClick={() => setActiveTab('details')}
        >
          Details
        </Button>
        <Button
          variant={activeTab === 'surface' ? 'outlined' : 'text'}
          size="small"
          sx={{ minHeight: 32, px: 1.25, fontSize: '0.8rem' }}
          onClick={() => setActiveTab('surface')}
        >
          Surface
        </Button>
      </Box>
      {/* Render Only Child Components */}
      {activeTab === 'users' && safeEndpoint && (
        <UsersTable
          endpoint={safeEndpoint}
          namespaceLabel={resolvedSubjectHandleNamespace || resolvedNamespaceHandle || resolvedSurfaceNamespace || safeEndpoint}
        />
      )}
      {activeTab === 'blocks' && safeEndpoint && <BlocksTable endpoint={safeEndpoint} />}
      {activeTab === 'surface' && (
        <Box
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            p: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            Surface
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
            This is the current host/surface entry resolved by the monad node that answered the request.
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))',
              gap: 1.5,
            }}
          >
            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
              }}
            >
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Identity
              </Typography>
              {surfaceMetaRows.map(([label, value]) => (
                <Box key={label} sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, py: 0.35 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {label}
                  </Typography>
                  <Typography variant="body2" sx={{ textAlign: 'right' }}>
                    {String(value || '—')}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
              }}
            >
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Access
              </Typography>
              {surfaceAccessRows.map(([label, value]) => (
                <Box key={label} sx={{ py: 0.35 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {label}
                  </Typography>
                  <Typography variant="body2" sx={{ wordBreak: 'break-all', mt: 0.25 }}>
                    {String(value || '—')}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
              }}
            >
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Resources
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {surfaceEntry.resources.length ? (
                  surfaceEntry.resources.map((resource) => (
                    <Box
                      key={resource}
                      sx={{
                        px: 1,
                        py: 0.45,
                        borderRadius: 999,
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.default',
                      }}
                    >
                      <Typography variant="caption">{resource}</Typography>
                    </Box>
                  ))
                ) : (
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    No resources advertised yet.
                  </Typography>
                )}
              </Box>
            </Box>

            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
              }}
            >
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Capacity
              </Typography>
              {surfaceCapacityRows.map(([label, value]) => (
                <Box key={label} sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, py: 0.35 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {label}
                  </Typography>
                  <Typography variant="body2" sx={{ textAlign: 'right' }}>
                    {value == null ? '—' : String(value)}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
                gridColumn: isMobile ? 'auto' : '1 / -1',
              }}
            >
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Status
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))',
                  gap: 1,
                }}
              >
                {surfaceStatusRows.map(([label, value]) => (
                  <Box key={label} sx={{ py: 0.35 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {label}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 0.25 }}>
                      {value == null || value === '' ? '—' : String(value)}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      {activeTab === 'details' && (
        <Box
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            p: 2,
            bgcolor: 'background.default',
          }}
        >
          {(endpoint || namespaceExpression || resolvedRootHostNamespace || resolvedSurfaceNamespace || resolvedSubjectHandleNamespace || previewQrValue) ? (
            <Box
              sx={{
                mb: 2,
                pb: 2,
                borderBottom: '1px solid',
                borderColor: 'divider',
                display: 'grid',
                gridTemplateColumns: '96px minmax(0, 1fr)',
                gap: 1.25,
                alignItems: 'start',
              }}
            >
              <Box
                sx={{
                  width: 96,
                  height: 96,
                  borderRadius: 2,
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {previewQrValue ? (
                  <QR
                    value={previewQrValue}
                    size={96}
                    fg={theme.palette.primary.main}
                    ecc="H"
                    embedMode="positive-overlay"
                    embedScale={0.32}
                  />
                ) : null}
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.6, minWidth: 0 }}>
                <Typography variant="h6">Namespace Preview</Typography>
                <Typography
                  variant="body2"
                  title={`Expression: ${String(endpoint || namespaceExpression || '').trim() || '—'} · local=${localNamespaceUrl || '—'} · network=${networkNamespaceUrl || '—'} · node=${resolvedResolverDisplayName || '—'}`}
                  sx={{ color: 'text.secondary' }}
                >
                  Monad Node: <Box component="span" sx={{ color: 'text.primary', fontFamily: 'monospace', wordBreak: 'break-all' }}>{compactMonadLabel}</Box>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Namespace: <Box component="span" sx={{ color: 'text.primary', fontFamily: 'monospace' }}>{compactRootLabel}</Box>
                </Typography>
                {resolvedRootNamespaceHash ? (
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Root Hash: <Box component="span" sx={{ color: 'text.primary', fontFamily: 'monospace' }}>{maskHash(resolvedRootNamespaceHash)}</Box>
                  </Typography>
                ) : null}
              </Box>
            </Box>
          ) : null}

          <Typography variant="h6" sx={{ mb: 1 }}>
            Namespace
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
            This view connects to a monad/blockchain node through a namespace or surface address.
          </Typography>

          <Typography variant="body2" sx={{ mb: 1.25 }}>
            <strong>What is a namespace?</strong>
            <br />
            It is the address or handle you use to reach a node or namespace surface. Example:
            <br />
            <Typography component="span" sx={{ fontFamily: 'monospace' }}>
              localhost:8161
            </Typography>
          </Typography>

          <Typography variant="body2" sx={{ mb: 1.25 }}>
            <strong>What does this screen do?</strong>
            <br />
            When you enter a URL, this page tries to reach that node and then displays:
          </Typography>

          <Box component="ul" sx={{ m: 0, pl: 2.5, color: 'text.secondary' }}>
            <li>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <strong>Users</strong> — identities or usernames registered on that chain (if supported).
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <strong>Blocks</strong> — the latest blocks and their data from that chain (if supported).
              </Typography>
            </li>
          </Box>

          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.5 }}>
            Tip: <strong>localhost</strong> means the node is running on your own machine. A remote host or namespace means it is running somewhere else.
          </Typography>
        </Box>
      )}
    </Box>
  );
}
