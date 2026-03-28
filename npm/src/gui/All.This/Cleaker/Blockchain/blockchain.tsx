// this.GUI — Blockchain Container (Clean Version)
// This component ONLY manages:
//  ✔ Endpoint URL
//  ✔ Connection state
//  ✔ Tabs (Users / Blocks)
//  ✔ Passing endpoint prop downward
// No fetching, no table markup.
//@/gui/Session/Session.tsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Box, Button, IconButton, Typography } from '@/gui/Atoms';
import { Tooltip } from '@/gui/Molecules';
import Icon from '@/gui/Atoms/Icon/Icon';
import { useGuiTheme, useGuiMediaQuery } from '@/gui/Hooks';
import UsersTable from './Usernames/Usernames';
import { BlocksTable as BlockchainTable } from './Blocks/BlocksTable';
import QR from '../../me/QR';
import { buildCleakerNamespaceUrl, parseCleakerNamespaceExpression } from '../namespaceExpression';
import { deriveChildIdentityHash, deriveIdentityRootHash } from '../../me/identity';
import { type CleakerBootstrapInfo, readCleakerBootstrap } from '../runtimeUsername';
import {
  type CleakerSurfaceEntry,
  type CleakerSurfaceRequestEvent,
  createSurfaceEntry,
  isLoopbackishHost,
  resolveSemanticRootName,
} from '../surfaceModel';

export interface BlockchainProps {
  endpoint?: string;
  defaultTab?: 'users' | 'blocks' | 'details' | 'surface';
  blockRowsLimit?: number;
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

function stripPort(raw: string): string {
  return String(raw || '').trim().toLowerCase().replace(/:\d+$/, '');
}

type BlockchainLimitSnapshot = {
  meLimit: number;
  policyLimit: number;
  budgetRows: number;
  pressureCpu: number;
  baseLimit: number;
  effectiveLimit: number;
};

function normalizePositiveNumber(raw: unknown, fallback: number): number {
  const value = Number(raw);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function normalizePressure(raw: unknown, fallback: number): number {
  const value = Number(raw);
  if (!Number.isFinite(value)) return fallback;
  if (value < 0) return 0;
  if (value > 1) return 1;
  return value;
}

function getSurfaceBlockchainDefaults(surface: {
  type?: string | null;
  status?: { availability?: string | null; syncState?: string | null } | null;
}) {
  const type = String(surface?.type || '').trim().toLowerCase();
  const availability = String(surface?.status?.availability || '').trim().toLowerCase();
  const syncState = String(surface?.status?.syncState || '').trim().toLowerCase();
  const online = availability === 'online' || syncState === 'current';

  if (type === 'mobile' || type === 'browser-tab') {
    return {
      policyLimit: 48,
      budgetRows: 24,
      pressureCpu: online ? 0.4 : 0.65,
    };
  }

  if (type === 'server' || type === 'node') {
    return {
      policyLimit: 100,
      budgetRows: 60,
      pressureCpu: online ? 0.2 : 0.45,
    };
  }

  return {
    policyLimit: 80,
    budgetRows: 50,
    pressureCpu: online ? 0.3 : 0.55,
  };
}

function computeBlockchainLimit(input: {
  meLimit?: number | null;
  surface?: {
    type?: string | null;
    status?: { availability?: string | null; syncState?: string | null } | null;
    policy?: { gui?: { blockchain?: { limit?: number | null } | null } | null } | null;
    budget?: { gui?: { blockchain?: { rows?: number | null } | null } | null } | null;
    pressure?: { cpu?: number | null } | null;
  } | null;
}): BlockchainLimitSnapshot {
  const surface = input.surface || null;
  const defaults = getSurfaceBlockchainDefaults(surface || {});
  const meLimit = normalizePositiveNumber(input.meLimit, 120);
  const policyLimit = normalizePositiveNumber(
    surface?.policy?.gui?.blockchain?.limit,
    defaults.policyLimit,
  );
  const budgetRows = normalizePositiveNumber(
    surface?.budget?.gui?.blockchain?.rows,
    defaults.budgetRows,
  );
  const pressureCpu = normalizePressure(surface?.pressure?.cpu, defaults.pressureCpu);
  const baseLimit = Math.min(meLimit, policyLimit, budgetRows);
  const effectiveLimit = Math.max(5, Math.floor(baseLimit * (1 - pressureCpu)));

  return {
    meLimit,
    policyLimit,
    budgetRows,
    pressureCpu,
    baseLimit,
    effectiveLimit,
  };
}

function mergeSurfaceEntry(
  base: CleakerSurfaceEntry,
  overlay: Partial<CleakerSurfaceEntry> | null,
  requestEvents: CleakerSurfaceRequestEvent[],
): CleakerSurfaceEntry {
  if (!overlay) {
    return {
      ...base,
      monitor: {
        recentRequests: requestEvents,
      },
    };
  }

  return {
    ...base,
    ...overlay,
    capacity: {
      ...base.capacity,
      ...(overlay.capacity || {}),
    },
    status: {
      ...base.status,
      ...(overlay.status || {}),
    },
    usage: {
      cpu: overlay.usage?.cpu ?? base.usage?.cpu ?? 0,
      requestRatePer10s:
        overlay.usage?.requestRatePer10s ??
        base.usage?.requestRatePer10s ??
        0,
    },
    pressure: {
      cpu: overlay.pressure?.cpu ?? base.pressure?.cpu ?? 0,
    },
    policy: {
      ...(base.policy || {}),
      ...(overlay.policy || {}),
      gui: {
        ...(base.policy?.gui || {}),
        ...(overlay.policy?.gui || {}),
        blockchain: {
          ...(base.policy?.gui?.blockchain || {}),
          ...(overlay.policy?.gui?.blockchain || {}),
        },
      },
    },
    budget: {
      ...(base.budget || {}),
      ...(overlay.budget || {}),
      gui: {
        ...(base.budget?.gui || {}),
        ...(overlay.budget?.gui || {}),
        blockchain: {
          ...(base.budget?.gui?.blockchain || {}),
          ...(overlay.budget?.gui?.blockchain || {}),
        },
      },
    },
    monitor: {
      recentRequests:
        overlay.monitor?.recentRequests && overlay.monitor.recentRequests.length > 0
          ? overlay.monitor.recentRequests
          : requestEvents,
    },
  };
}

export default function Blockchain({
  endpoint: endpointProp = 'http://localhost:8161',
  defaultTab = 'users',
  blockRowsLimit = 120,
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
  const [showNamespaceTip, setShowNamespaceTip] = useState(false);
  const [bootstrapInfo, setBootstrapInfo] = useState<CleakerBootstrapInfo | null>(null);
  const [surfaceTelemetry, setSurfaceTelemetry] = useState<Partial<CleakerSurfaceEntry> | null>(null);
  const [surfaceRequestEvents, setSurfaceRequestEvents] = useState<CleakerSurfaceRequestEvent[]>([]);
  const [stressMode, setStressMode] = useState(false);
  const theme = useGuiTheme();
  const isMobile = useGuiMediaQuery(theme.breakpoints.down('sm'));
  const debounceRef = useRef<number | null>(null);
  const stressTimerRef = useRef<number | null>(null);
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

  const semanticNamespaceHandle = useMemo(() => {
    return String(semanticRootName || stripPort(resolvedNamespaceHandle) || '').trim().toLowerCase();
  }, [resolvedNamespaceHandle, semanticRootName]);

  const resolvedRootNamespaceHash = useMemo(() => {
    if (!semanticNamespaceHandle) return String(rootNamespaceHash || '').trim();
    return deriveIdentityRootHash('', semanticNamespaceHandle);
  }, [rootNamespaceHash, semanticNamespaceHandle]);

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

  const localRootNamespaceUrl = useMemo(() => {
    if (!resolvedSurfaceNamespace || !previewNamespace) return '';
    return `${previewNamespace.transport.protocol}://${resolvedSurfaceNamespace}`;
  }, [previewNamespace, resolvedSurfaceNamespace]);

  const networkNamespaceUrl = useMemo(() => {
    if (!resolvedResolverSurfaceNamespace || !previewNamespace) return '';
    const label = previewUsername ? `${previewUsername}.` : '';
    return `${previewNamespace.transport.protocol}://${label}${resolvedResolverSurfaceNamespace}`;
  }, [previewNamespace, previewUsername, resolvedResolverSurfaceNamespace]);

  const networkRootNamespaceUrl = useMemo(() => {
    if (!resolvedResolverSurfaceNamespace || !previewNamespace) return '';
    return `${previewNamespace.transport.protocol}://${resolvedResolverSurfaceNamespace}`;
  }, [previewNamespace, resolvedResolverSurfaceNamespace]);

  const surfaceEntryBase = useMemo(() => {
    if (hostResolvedSurfaceEntry) return hostResolvedSurfaceEntry as CleakerSurfaceEntry;
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

  const surfaceEntry = useMemo(() => {
    return mergeSurfaceEntry(surfaceEntryBase, surfaceTelemetry, surfaceRequestEvents);
  }, [surfaceEntryBase, surfaceTelemetry, surfaceRequestEvents]);

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
    return compactNamespaceName(semanticNamespaceHandle || resolvedRootHostNamespace || '—') || '—';
  }, [resolvedRootHostNamespace, semanticNamespaceHandle]);

  const namespaceDisplayTitle = useMemo(() => {
    return compactRootLabel || semanticNamespaceHandle || '—';
  }, [compactRootLabel, semanticNamespaceHandle]);

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
      if (stressTimerRef.current) window.clearInterval(stressTimerRef.current);
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

  useEffect(() => {
    if (!safeEndpoint || typeof window === 'undefined' || typeof EventSource === 'undefined') {
      setSurfaceTelemetry(null);
      setSurfaceRequestEvents([]);
      return;
    }

    const source = new EventSource(`${safeEndpoint}/__surface/events`);

    const mergeTelemetry = (payload: any) => {
      const telemetry = payload && typeof payload === 'object' && payload.telemetry ? payload.telemetry : payload;
      if (!telemetry || typeof telemetry !== 'object') return;

      setSurfaceTelemetry((current) => ({
        ...(current || {}),
        ...telemetry,
      }));

      const recentRequests = Array.isArray((telemetry as any)?.monitor?.recentRequests)
        ? ((telemetry as any).monitor.recentRequests as CleakerSurfaceRequestEvent[])
        : null;
      if (recentRequests) {
        setSurfaceRequestEvents(recentRequests);
      }
    };

    const onSurface = (event: MessageEvent) => {
      try {
        mergeTelemetry(JSON.parse(String(event.data || 'null')));
      } catch {
        // Ignore malformed surface payloads.
      }
    };

    const onRequest = (event: MessageEvent) => {
      try {
        const payload = JSON.parse(String(event.data || 'null'));
        mergeTelemetry(payload);
        const request = payload?.request;
        if (request && typeof request === 'object') {
          setSurfaceRequestEvents((current) => {
            const next = [request as CleakerSurfaceRequestEvent, ...current.filter((item) => item.id !== request.id)];
            return next.slice(0, 24);
          });
        }
      } catch {
        // Ignore malformed request payloads.
      }
    };

    source.addEventListener('surface', onSurface as EventListener);
    source.addEventListener('request', onRequest as EventListener);
    source.onerror = () => {
      // Let EventSource handle its own reconnect cycle.
    };

    return () => {
      source.removeEventListener('surface', onSurface as EventListener);
      source.removeEventListener('request', onRequest as EventListener);
      source.close();
    };
  }, [safeEndpoint]);

  useEffect(() => {
    if (stressTimerRef.current) {
      window.clearInterval(stressTimerRef.current);
      stressTimerRef.current = null;
    }

    if (!stressMode || !safeEndpoint || typeof window === 'undefined' || typeof fetch !== 'function') {
      return;
    }

    const fireBurst = () => {
      const base = `${safeEndpoint.replace(/\/+$/, '')}/__surface`;
      for (let index = 0; index < 3; index += 1) {
        const marker = `${Date.now()}-${index}`;
        void fetch(`${base}?stress=${encodeURIComponent(marker)}`, {
          method: 'GET',
          cache: 'no-store',
        }).catch(() => {
          // Ignore stress burst transport failures.
        });
      }
    };

    fireBurst();
    stressTimerRef.current = window.setInterval(fireBurst, 650);

    return () => {
      if (stressTimerRef.current) {
        window.clearInterval(stressTimerRef.current);
        stressTimerRef.current = null;
      }
    };
  }, [safeEndpoint, stressMode]);

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

  const blockchainLimit = useMemo(() => {
    return computeBlockchainLimit({
      meLimit: blockRowsLimit,
      surface: surfaceEntry as any,
    });
  }, [blockRowsLimit, surfaceEntry]);

  const [appliedBlockchainRowsLimit, setAppliedBlockchainRowsLimit] = useState(blockchainLimit.effectiveLimit);

  useEffect(() => {
    setAppliedBlockchainRowsLimit((current) => {
      if (!Number.isFinite(current) || current <= 0) return blockchainLimit.effectiveLimit;
      return current;
    });
  }, [blockchainLimit.effectiveLimit]);

  useEffect(() => {
    if (appliedBlockchainRowsLimit === blockchainLimit.effectiveLimit) return;

    const timeoutId = window.setTimeout(() => {
      setAppliedBlockchainRowsLimit((current) => {
        const target = blockchainLimit.effectiveLimit;
        if (current === target) return current;
        const delta = target - current;
        const step = Math.max(1, Math.ceil(Math.abs(delta) / 3));
        if (delta > 0) return Math.min(target, current + step);
        return Math.max(target, current - step);
      });
    }, 140);

    return () => window.clearTimeout(timeoutId);
  }, [appliedBlockchainRowsLimit, blockchainLimit.effectiveLimit]);

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

        <Tooltip title={showNamespaceTip ? 'Hide namespace tip' : 'Show namespace tip'} placement="bottom" arrow>
          <Box component="span" sx={{ display: 'inline-flex' }}>
            <IconButton
              aria-label="Namespace info"
              size="small"
              onClick={() => setShowNamespaceTip((value) => !value)}
              sx={{
                border: '1px solid',
                borderColor: showNamespaceTip ? 'primary.main' : 'divider',
                bgcolor: showNamespaceTip ? 'background.nav' : 'background.paper',
                color: showNamespaceTip ? 'primary.main' : 'text.secondary',
                '&:hover': {
                  bgcolor: 'background.nav',
                  borderColor: showNamespaceTip ? 'primary.main' : 'divider',
                  color: showNamespaceTip ? 'primary.main' : 'text.primary',
                },
              }}
            >
              <Icon name="info" />
            </IconButton>
          </Box>
        </Tooltip>
      </Box>
      {showNamespaceTip ? (
        <Box
          sx={{
            mt: 0.25,
            mb: 1.25,
            mr: isMobile ? 0 : 7.5,
            p: 1.25,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'primary.main',
            bgcolor: 'background.default',
            boxShadow: () => `0 0 0 1px ${theme?.palette?.primary?.main ?? 'currentColor'}22`,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'text.primary',
              lineHeight: 1.5,
            }}
          >
            Tip: <strong>localhost</strong> is only a local access alias. The real namespace comes from
            the node identity that answered the request.
          </Typography>
        </Box>
      ) : null}
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
      <Box
        sx={{
          mt: 1.5,
          mb: 1.25,
          display: 'flex',
          flexDirection: 'column',
          gap: 0.25,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
          Namespace:
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            wordBreak: 'break-all',
          }}
          title={namespaceDisplayTitle}
        >
          {namespaceDisplayTitle}
        </Typography>
      </Box>
      {/* Tabs */}
      <Box
        sx={{
          display: 'flex',
          gap: '1rem',
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
          Blockchain
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
          namespaceLabel={namespaceDisplayTitle}
          namespaceRootUrl={
            networkRootNamespaceUrl ||
            localRootNamespaceUrl ||
            namespaceUrlProp ||
            ''
          }
        />
      )}
      {activeTab === 'blocks' && safeEndpoint && (
        <BlockchainTable
          endpoint={safeEndpoint}
          namespaceLabel={namespaceDisplayTitle}
          rowsLimit={appliedBlockchainRowsLimit}
          namespaceRootUrl={
            networkRootNamespaceUrl ||
            localRootNamespaceUrl ||
            namespaceUrlProp ||
            ''
          }
        />
      )}
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
            This is the current host/surface entry resolved by the monad.ai surface that answered the request.
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
                  monad.ai: <Box component="span" sx={{ color: 'text.primary', fontFamily: 'monospace', wordBreak: 'break-all' }}>{compactMonadLabel}</Box>
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
                Effective Budget
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.25 }}>
                Blockchain render is negotiated from `.me` intent, `surface` policy, assigned budget, and current CPU pressure.
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.75, mb: 1.25, flexWrap: 'wrap' }}>
                <Button
                  size="small"
                  variant={stressMode ? 'outlined' : 'text'}
                  color={stressMode ? 'warning' : 'primary'}
                  onClick={() => setStressMode((value) => !value)}
                  sx={{ minHeight: 30, px: 1.1, fontSize: '0.78rem' }}
                >
                  {stressMode ? 'Stop Stress' : 'Stress Test'}
                </Button>
                <Typography variant="caption" sx={{ color: 'text.secondary', alignSelf: 'center' }}>
                  {stressMode ? 'Injecting request bursts into monad.ai' : 'Run a burst loop to watch budget collapse'}
                </Typography>
              </Box>
              {[
                ['.me limit', blockchainLimit.meLimit],
                ['Surface policy', blockchainLimit.policyLimit],
                ['Surface budget', blockchainLimit.budgetRows],
                ['CPU pressure', blockchainLimit.pressureCpu.toFixed(2)],
                ['Base', blockchainLimit.baseLimit],
                ['Target', blockchainLimit.effectiveLimit],
                ['Applied', appliedBlockchainRowsLimit],
              ].map(([label, value]) => (
                <Box
                  key={label}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 1,
                    py: 0.35,
                  }}
                >
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: 'right',
                      fontFamily: label === 'CPU pressure' ? 'monospace' : 'inherit',
                      fontWeight: label === 'Effective' ? 700 : 500,
                    }}
                  >
                    {String(value)}
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
                Runtime Inputs
              </Typography>
              {[
                ['Surface Type', surfaceEntry.type],
                ['Availability', surfaceEntry.status.availability],
                ['Sync State', surfaceEntry.status.syncState],
                ['monad.ai', compactMonadLabel],
                ['Namespace', namespaceDisplayTitle],
              ].map(([label, value]) => (
                <Box key={label} sx={{ py: 0.35 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 0.2,
                      fontFamily:
                        label === 'monad.ai' || label === 'Namespace' ? 'monospace' : 'inherit',
                      wordBreak: 'break-word',
                    }}
                  >
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
                gridColumn: isMobile ? 'auto' : '1 / -1',
              }}
            >
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Monad Ledger Monitor
              </Typography>
              {surfaceRequestEvents.length === 0 ? (
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Waiting for request traffic...
                </Typography>
              ) : (
                <Box
                  sx={{
                    mt: 0.25,
                    p: 1,
                    borderRadius: 1.5,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.default',
                    height: 220,
                    minHeight: 140,
                    resize: 'vertical',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    fontFamily: 'monospace',
                    fontSize: '0.76rem',
                    lineHeight: 1.45,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {surfaceRequestEvents.slice(0, 40).map((event) => (
                    <Typography
                      key={event.id}
                      variant="caption"
                      title={`${event.method} ${event.status} ${event.durationMs}ms ${event.url} ${new Date(event.timestamp).toLocaleTimeString()} · ${event.namespace || '—'} · ${event.operation || 'read'}`}
                      sx={{
                        display: 'block',
                        color: 'text.primary',
                        fontFamily: 'inherit',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        '&:not(:last-child)': {
                          mb: 0.45,
                        },
                      }}
                    >
                      <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                        {event.method} {event.status}
                      </Box>{' '}
                      <Box component="span" sx={{ color: 'text.secondary' }}>
                        {event.durationMs}ms
                      </Box>{' '}
                      <Box component="span" sx={{ color: 'text.primary' }}>
                        {event.url}
                      </Box>{' '}
                      <Box component="span" sx={{ color: 'text.secondary' }}>
                        {new Date(event.timestamp).toLocaleTimeString()} · {event.namespace || '—'} · {event.operation || 'read'}
                      </Box>
                    </Typography>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
