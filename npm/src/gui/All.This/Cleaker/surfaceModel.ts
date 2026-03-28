export type CleakerSurfaceType = 'desktop' | 'mobile' | 'server' | 'browser-tab' | 'node';
export type CleakerSurfaceTrust = 'owner' | 'trusted-peer' | 'guest';
export type CleakerSurfaceAvailability = 'online' | 'offline' | 'sleep' | 'unknown';

export type CleakerSurfaceRequestEvent = {
  id: number;
  timestamp: number;
  method: string;
  url: string;
  status: number;
  durationMs: number;
  host: string;
  namespace: string;
  operation: string;
  nrp: string;
  lens: string;
  forwardedHost: string | null;
};

export type CleakerSurfaceEntry = {
  hostId: string;
  type: CleakerSurfaceType;
  trust: CleakerSurfaceTrust;
  resources: string[];
  capacity: {
    cpuCores: number | null;
    ramGb: number | null;
    storageGb: number | null;
    bandwidthMbps: number | null;
  };
  status: {
    availability: CleakerSurfaceAvailability;
    latencyMs: number | null;
    syncState: 'current' | 'stale' | 'unknown';
    lastSeen: number | null;
  };
  namespace: string;
  endpoint: string;
  rootName: string;
  usage?: {
    cpu: number;
    requestRatePer10s?: number;
  };
  pressure?: {
    cpu: number;
  };
  policy?: {
    gui?: {
      blockchain?: {
        limit?: number;
      };
    };
  };
  budget?: {
    gui?: {
      blockchain?: {
        rows?: number;
      };
    };
  };
  monitor?: {
    recentRequests?: CleakerSurfaceRequestEvent[];
  };
};

function normalizeToken(raw: string): string {
  return String(raw || '').trim().toLowerCase();
}

export function stripPortFromName(raw: string): string {
  const normalized = normalizeToken(raw);
  if (!normalized) return '';
  return normalized.replace(/:\d+$/, '');
}

export function isLoopbackishHost(host: string): boolean {
  const normalized = stripPortFromName(host);
  return /^(localhost|127(?:\.\d{1,3}){3}|0\.0\.0\.0)$/.test(normalized);
}

function isLikelyLocalHost(host: string): boolean {
  const normalized = stripPortFromName(host);
  return Boolean(normalized) && (isLoopbackishHost(normalized) || normalized.endsWith('.local'));
}

function inferSurfaceType(host: string): CleakerSurfaceType {
  const normalized = stripPortFromName(host);
  if (!normalized) return 'node';
  if (/(iphone|ipad|android|pixel|mobile)/.test(normalized)) return 'mobile';
  if (/(tab|browser)/.test(normalized)) return 'browser-tab';
  if (/(macbook|imac|desktop|laptop|notebook|pc|workstation|\.local$)/.test(normalized)) return 'desktop';
  if (isLoopbackishHost(normalized)) return 'desktop';
  return 'server';
}

function inferTrust(host: string): CleakerSurfaceTrust {
  return isLikelyLocalHost(host) ? 'owner' : 'trusted-peer';
}

function inferResources(type: CleakerSurfaceType, host: string): string[] {
  const resources = new Set<string>(['public_ingress', 'keychain']);

  if (type === 'desktop') {
    resources.add('filesystem');
    resources.add('gpu');
    resources.add('camera');
  } else if (type === 'mobile') {
    resources.add('camera');
  } else if (type === 'server') {
    resources.add('filesystem');
  }

  if (isLikelyLocalHost(host)) {
    resources.add('local_lan');
  }

  return Array.from(resources);
}

export function resolveSemanticRootName(input: {
  namespaceHandle?: string;
  resolverHostName?: string;
  rootHostNamespace?: string;
}): string {
  const handle = stripPortFromName(input.namespaceHandle || '');
  if (handle && !isLoopbackishHost(handle)) return handle;

  const resolver = stripPortFromName(input.resolverHostName || '');
  if (resolver && !isLoopbackishHost(resolver)) return resolver;

  const rootHost = stripPortFromName(input.rootHostNamespace || '');
  if (rootHost) return rootHost;

  return handle || resolver || rootHost;
}

export function createSurfaceEntry(input: {
  namespaceUrl: string;
  endpoint: string;
  namespaceHandle?: string;
  rootHostNamespace?: string;
  resolverHostName?: string;
  connected?: boolean;
}): CleakerSurfaceEntry {
  const hostId =
    stripPortFromName(input.resolverHostName || '') ||
    stripPortFromName(input.rootHostNamespace || '') ||
    stripPortFromName(input.namespaceHandle || '') ||
    'unknown-host';
  const type = inferSurfaceType(hostId);
  const trust = inferTrust(hostId);
  const availability: CleakerSurfaceAvailability = input.connected ? 'online' : 'offline';

  return {
    hostId,
    type,
    trust,
    resources: inferResources(type, hostId),
    capacity: {
      cpuCores: null,
      ramGb: null,
      storageGb: null,
      bandwidthMbps: null,
    },
    status: {
      availability,
      latencyMs: null,
      syncState: input.connected ? 'current' : 'unknown',
      lastSeen: input.connected ? Date.now() : null,
    },
    namespace: String(input.namespaceUrl || '').trim(),
    endpoint: String(input.endpoint || '').trim(),
    rootName: resolveSemanticRootName(input),
    usage: {
      cpu: 0,
      requestRatePer10s: 0,
    },
    pressure: {
      cpu: 0,
    },
    policy: {
      gui: {
        blockchain: {
          limit: 80,
        },
      },
    },
    budget: {
      gui: {
        blockchain: {
          rows: 50,
        },
      },
    },
    monitor: {
      recentRequests: [],
    },
  };
}
