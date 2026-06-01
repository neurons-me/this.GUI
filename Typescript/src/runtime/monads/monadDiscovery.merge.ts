import {
  endpointIdentity,
  mergeSources,
  normalizeMonadEndpointInput,
} from './monadDiscovery.normalize';
import type {
  DiscoveredMonad,
  EndpointHealth,
  MonadControlEndpoint,
} from './monadDiscovery.types';

function readString(...values: unknown[]): string {
  for (const value of values) {
    const text = String(value ?? '').trim();
    if (text) return text;
  }
  return '';
}

function uniqueSorted(values: Array<string | undefined | null>): string[] {
  return Array.from(new Set(values.map((value) => String(value ?? '').trim()).filter(Boolean))).sort();
}

function endpointKeys(endpoints: string[]): string[] {
  return endpoints
    .map((endpoint) => endpointIdentity(endpoint).key)
    .filter(Boolean)
    .map((key) => `endpoint:${key}`);
}

function monadKeys(monad: DiscoveredMonad): string[] {
  const endpoints = uniqueSorted([monad.endpoint, ...(monad.endpoints || [])]);
  const keys = [
    monad.id ? `id:${monad.id.toLowerCase()}` : '',
    monad.name && monad.namespace ? `name:${monad.name.toLowerCase()}:${monad.namespace.toLowerCase()}` : '',
    ...endpointKeys(endpoints),
  ].filter(Boolean);
  return keys.length ? keys : [`anon:${JSON.stringify(monad)}`];
}

function chooseEndpoint(endpoints: string[], healthByEndpoint: Map<string, EndpointHealth>): string {
  const normalized = uniqueSorted(endpoints.map(normalizeMonadEndpointInput));
  if (!normalized.length) return '';
  const alive = normalized.find((endpoint) => healthByEndpoint.get(endpoint)?.status === 'alive');
  if (alive) return alive;
  return normalized[0];
}

function mergeMonad(
  a: DiscoveredMonad,
  b: DiscoveredMonad,
  healthByEndpoint: Map<string, EndpointHealth>,
): DiscoveredMonad {
  const endpoints = uniqueSorted([a.endpoint, b.endpoint, ...(a.endpoints || []), ...(b.endpoints || [])]);
  const endpoint = chooseEndpoint(endpoints, healthByEndpoint);
  const endpointHealthKnown = endpoints.some((value) => healthByEndpoint.has(value));
  const endpointHealthy = endpoints.some((value) => healthByEndpoint.get(value)?.status === 'alive');
  const capabilities = uniqueSorted([...(a.capabilities || []), ...(b.capabilities || [])]);
  const id = readString(
    a.id && !a.id.startsWith('cli:') ? a.id : '',
    b.id && !b.id.startsWith('cli:') ? b.id : '',
    a.id,
    b.id,
    endpoint,
  );

  return {
    id,
    name: readString(a.name, b.name, id, endpoint),
    namespace: readString(a.namespace, b.namespace) || undefined,
    endpoint,
    endpoints,
    controlEndpoint: readString(a.controlEndpoint, b.controlEndpoint) || undefined,
    sources: mergeSources(a.sources, b.sources),
    healthy: endpointHealthKnown ? endpointHealthy : Boolean(a.healthy || b.healthy),
    status: endpointHealthy ? 'online' : readString(a.status, b.status) || undefined,
    capabilities,
    metadata: {
      ...(a.metadata || {}),
      ...(b.metadata || {}),
    },
  };
}

export function mergeEndpointHealth(items: EndpointHealth[]): EndpointHealth[] {
  const byUrl = new Map<string, EndpointHealth>();
  for (const item of items) {
    const url = normalizeMonadEndpointInput(item.url);
    if (!url) continue;
    const existing = byUrl.get(url);
    if (!existing) {
      byUrl.set(url, { ...item, url, sources: mergeSources(item.sources) });
      continue;
    }

    const alive = existing.status === 'alive' || item.status === 'alive';
    byUrl.set(url, {
      ...existing,
      ...item,
      url,
      identity: existing.identity || item.identity,
      status: alive ? 'alive' : item.status === 'dead' || existing.status === 'dead' ? 'dead' : 'unknown',
      sources: mergeSources(existing.sources, item.sources),
      lastCheckedAt: Math.max(existing.lastCheckedAt || 0, item.lastCheckedAt || 0) || null,
      lastSeenAt: Math.max(existing.lastSeenAt || 0, item.lastSeenAt || 0) || null,
      latencyMs: item.latencyMs ?? existing.latencyMs,
      surface: item.surface || existing.surface,
      error: alive ? undefined : item.error || existing.error,
    });
  }
  return Array.from(byUrl.values()).sort((a, b) => a.url.localeCompare(b.url));
}

export function mergeDiscoveredMonads(
  monads: DiscoveredMonad[],
  endpoints: EndpointHealth[] = [],
): DiscoveredMonad[] {
  const healthByEndpoint = new Map(endpoints.map((endpoint) => [endpoint.url, endpoint]));
  const keyIndex = new Map<string, DiscoveredMonad>();
  const output = new Set<DiscoveredMonad>();

  for (const monad of monads) {
    const normalizedEndpoints = uniqueSorted([monad.endpoint, ...(monad.endpoints || [])].map(normalizeMonadEndpointInput));
    const normalizedMonad: DiscoveredMonad = {
      ...monad,
      endpoint: chooseEndpoint(normalizedEndpoints, healthByEndpoint),
      endpoints: normalizedEndpoints,
      sources: mergeSources(monad.sources),
      capabilities: uniqueSorted(monad.capabilities || []),
    };
    const keys = monadKeys(normalizedMonad);
    const existing = keys.map((key) => keyIndex.get(key)).find(Boolean);

    if (!existing) {
      output.add(normalizedMonad);
      for (const key of keys) keyIndex.set(key, normalizedMonad);
      continue;
    }

    const merged = mergeMonad(existing, normalizedMonad, healthByEndpoint);
    output.delete(existing);
    output.add(merged);
    for (const key of [...monadKeys(existing), ...keys, ...monadKeys(merged)]) {
      keyIndex.set(key, merged);
    }
  }

  const finalOutput = new Set<DiscoveredMonad>();
  const finalIndex = new Map<string, DiscoveredMonad>();
  const rebuildFinalIndex = () => {
    finalIndex.clear();
    for (const monad of finalOutput) {
      for (const key of monadKeys(monad)) finalIndex.set(key, monad);
    }
  };

  for (const monad of output) {
    const keys = monadKeys(monad);
    const existing = keys.map((key) => finalIndex.get(key)).find(Boolean);
    if (!existing) {
      finalOutput.add(monad);
      rebuildFinalIndex();
      continue;
    }
    const merged = mergeMonad(existing, monad, healthByEndpoint);
    finalOutput.delete(existing);
    finalOutput.add(merged);
    rebuildFinalIndex();
  }

  return Array.from(finalOutput).map((monad) => {
    const endpointHealthKnown = monad.endpoints.some((value) => healthByEndpoint.has(value));
    const endpointHealthy = monad.endpoints.some((value) => healthByEndpoint.get(value)?.status === 'alive');
    return {
      ...monad,
      healthy: endpointHealthKnown ? endpointHealthy : monad.healthy,
      status: endpointHealthKnown ? (endpointHealthy ? 'online' : 'offline') : monad.status,
    };
  }).sort((a, b) => {
    const health = Number(b.healthy) - Number(a.healthy);
    if (health !== 0) return health;
    return (a.name || a.endpoint).localeCompare(b.name || b.endpoint);
  });
}

export function mergeControlEndpoints(controls: MonadControlEndpoint[]): MonadControlEndpoint[] {
  const byEndpoint = new Map<string, MonadControlEndpoint>();
  for (const control of controls) {
    const endpoint = normalizeMonadEndpointInput(control.endpoint);
    if (!endpoint) continue;
    const existing = byEndpoint.get(endpoint);
    if (!existing) {
      byEndpoint.set(endpoint, { ...control, endpoint });
      continue;
    }
    byEndpoint.set(endpoint, {
      ...existing,
      ...control,
      endpoint,
      available: existing.available || control.available,
      command: { ...existing.command, ...control.command },
      records: [...existing.records, ...control.records],
      error: control.error || existing.error,
    });
  }
  return Array.from(byEndpoint.values()).sort((a, b) => a.endpoint.localeCompare(b.endpoint));
}
