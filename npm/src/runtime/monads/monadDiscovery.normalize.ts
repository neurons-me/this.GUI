import type {
  EndpointCandidate,
  MonadDiscoverySource,
  MonadDiscoveryStorage,
} from './monadDiscovery.types';

export type EndpointIdentity = {
  url: string;
  protocol: string;
  host: string;
  port: string;
  path: string;
  key: string;
};

const DEFAULT_LOCAL_HOSTS = ['127.0.0.1', 'localhost'];

function unique<T>(values: T[]): T[] {
  return Array.from(new Set(values));
}

export function normalizeMonadEndpointInput(value: unknown): string {
  const raw = String(value || '').trim();
  if (!raw) return '';
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `http://${raw}`;

  try {
    const url = new URL(withProtocol);
    url.hash = '';
    url.search = '';
    const pathname = url.pathname.replace(/\/+$/, '');
    url.pathname = pathname === '/' ? '' : pathname;
    return url.href.replace(/\/+$/, '');
  } catch {
    return '';
  }
}

export function endpointIdentity(value: unknown): EndpointIdentity {
  const normalized = normalizeMonadEndpointInput(value);
  if (!normalized) {
    return {
      url: '',
      protocol: '',
      host: '',
      port: '',
      path: '',
      key: '',
    };
  }

  try {
    const url = new URL(normalized);
    const protocol = url.protocol.replace(/:$/, '').toLowerCase();
    const host = url.hostname.toLowerCase();
    const port = url.port || (protocol === 'https' ? '443' : '80');
    const path = url.pathname.replace(/\/+$/, '') || '';
    return {
      url: normalized,
      protocol,
      host,
      port,
      path,
      key: `${protocol}://${host}:${port}${path}`,
    };
  } catch {
    return {
      url: normalized,
      protocol: '',
      host: '',
      port: '',
      path: '',
      key: normalized,
    };
  }
}

export function endpointToPath(endpoint: string, path: string): string {
  const base = `${normalizeMonadEndpointInput(endpoint).replace(/\/+$/, '')}/`;
  return new URL(path.replace(/^\/+/, ''), base).href;
}

export function mergeSources(...groups: Array<readonly MonadDiscoverySource[] | undefined>): MonadDiscoverySource[] {
  return unique(groups.flatMap((group) => (group ? Array.from(group) : []))).sort();
}

export function createEndpointCandidate(
  endpoint: unknown,
  sources: MonadDiscoverySource[] = ['seed'],
): EndpointCandidate | null {
  const url = normalizeMonadEndpointInput(endpoint);
  if (!url) return null;
  return { url, sources: mergeSources(sources) };
}

export function uniqueEndpointCandidates(candidates: Array<EndpointCandidate | null | undefined>): EndpointCandidate[] {
  const byUrl = new Map<string, EndpointCandidate>();
  for (const candidate of candidates) {
    if (!candidate?.url) continue;
    const normalized = normalizeMonadEndpointInput(candidate.url);
    if (!normalized) continue;
    const existing = byUrl.get(normalized);
    byUrl.set(normalized, {
      url: normalized,
      sources: mergeSources(existing?.sources, candidate.sources),
    });
  }
  return Array.from(byUrl.values()).sort((a, b) => a.url.localeCompare(b.url));
}

export function createLocalEndpointCandidates(
  ports: number[],
  source: MonadDiscoverySource = 'seed',
  hosts: string[] = DEFAULT_LOCAL_HOSTS,
): EndpointCandidate[] {
  return uniqueEndpointCandidates(
    ports.flatMap((port) =>
      hosts.map((host) => createEndpointCandidate(`http://${host}:${port}`, [source])),
    ),
  );
}

export function readStoredMonadEndpoints(
  storage: MonadDiscoveryStorage | null | undefined,
  storageKey: string,
): string[] {
  if (!storage || !storageKey) return [];
  try {
    const raw = storage.getItem(storageKey);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? unique(parsed.map(normalizeMonadEndpointInput).filter(Boolean))
      : [];
  } catch {
    return [];
  }
}

export function writeStoredMonadEndpoints(
  storage: MonadDiscoveryStorage | null | undefined,
  storageKey: string,
  endpoints: string[],
): void {
  if (!storage || !storageKey) return;
  const uniqueEndpoints = unique(endpoints.map(normalizeMonadEndpointInput).filter(Boolean));
  try {
    storage.setItem(storageKey, JSON.stringify(uniqueEndpoints));
  } catch {
    // Storage can be unavailable in private contexts or under file://.
  }
}
