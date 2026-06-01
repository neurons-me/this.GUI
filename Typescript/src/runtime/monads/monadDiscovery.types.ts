export type MonadDiscoveryStatus =
  | 'idle'
  | 'scanning'
  | 'settling'
  | 'stable'
  | 'error';

export type MonadDiscoverySource =
  | 'seed'
  | 'surface'
  | 'registry'
  | 'mesh'
  | 'manual'
  | 'stored';

export type MonadEndpointStatus = 'unknown' | 'alive' | 'dead';

export type MonadDiscoveryScanMode = 'fast' | 'normal';

export type MonadDiscoveryRescanInput = {
  mode?: MonadDiscoveryScanMode;
  reason?: string;
};

export type MonadDiscoveryError = {
  endpoint?: string;
  stage: 'surface' | 'control' | 'mesh' | 'registry' | 'scan' | 'storage' | 'sse';
  message: string;
  at: number;
};

export type MonadSurfaceInfo = {
  endpoint: string;
  monadId?: string;
  monadName?: string;
  namespace?: string;
  status?: string;
  capabilities: string[];
  latencyMs?: number;
  raw?: unknown;
};

export type EndpointHealth = {
  url: string;
  identity: string;
  status: MonadEndpointStatus;
  sources: MonadDiscoverySource[];
  lastCheckedAt: number | null;
  lastSeenAt: number | null;
  latencyMs?: number;
  surface?: MonadSurfaceInfo;
  error?: string;
};

export type DiscoveredMonad = {
  id: string;
  name: string;
  namespace?: string;
  endpoint: string;
  endpoints: string[];
  controlEndpoint?: string;
  sources: MonadDiscoverySource[];
  healthy: boolean;
  status?: string;
  capabilities: string[];
  metadata?: Record<string, unknown>;
};

export type MonadControlRecord = {
  name: string;
  port?: number;
  status: string;
  namespace?: string;
  endpoint?: string;
  healthy?: boolean;
  error?: string;
  raw?: unknown;
};

export type MonadControlAction = {
  name: string;
  label?: string;
  command?: string;
  method?: string;
  path?: string;
  scope?: string;
};

export type MonadControlEndpoint = {
  endpoint: string;
  available: boolean;
  command: {
    name?: string;
    install?: string;
    start?: string;
    actions?: MonadControlAction[];
  };
  records: MonadControlRecord[];
  error?: string;
};

export type MonadDiscoverySourceIndex = {
  surface: string[];
  monads: string[];
  mesh: string[];
  registry: string[];
};

export type MonadDiscoveryState = {
  status: MonadDiscoveryStatus;
  monads: DiscoveredMonad[];
  control: MonadControlEndpoint[];
  endpoints: EndpointHealth[];
  lastUpdatedAt: number | null;
  lastChangeAt: number | null;
  activeScanId: number;
  pendingRescan: boolean;
  source: MonadDiscoverySourceIndex;
  errors: MonadDiscoveryError[];
  fingerprint: string;
};

export type MonadDiscoveryListener = (state: MonadDiscoveryState) => void;

export type MonadDiscoveryStorage = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem?(key: string): void;
};

export type MonadDiscoveryFetch = (
  input: RequestInfo | URL,
  init?: RequestInit,
) => Promise<Response>;

export type CreateMonadDiscoveryOptions = {
  endpoints?: string[];
  extendedPorts?: number[];
  storageKey?: string;
  fastIntervalMs?: number;
  stableIntervalMs?: number;
  requestTimeoutMs?: number;
  settlingWindowMs?: number;
  enableSSE?: boolean;
  netgetEndpoints?: string[];
  fetchImpl?: MonadDiscoveryFetch;
  storage?: MonadDiscoveryStorage | null;
};

export type MonadDiscoveryWaitOptions = {
  timeoutMs: number;
  predicate: (state: MonadDiscoveryState) => boolean;
};

export type MonadDiscovery = {
  start(): void;
  stop(): void;
  rescan(input?: MonadDiscoveryRescanInput): void;
  subscribe(listener: MonadDiscoveryListener): () => void;
  getState(): MonadDiscoveryState;
  addEndpoint(endpoint: string): void;
  removeEndpoint(endpoint: string): void;
  waitForChange(options: MonadDiscoveryWaitOptions): Promise<MonadDiscoveryState>;
  withSettling<T>(task: () => Promise<T>): Promise<T>;
};

export type EndpointCandidate = {
  url: string;
  sources: MonadDiscoverySource[];
};

export type MonadDiscoveryScanInput = {
  candidates: EndpointCandidate[];
  registryCandidates?: EndpointCandidate[];
  timeoutMs: number;
  fetchImpl?: MonadDiscoveryFetch;
};

export type MonadDiscoveryScanResult = {
  monads: DiscoveredMonad[];
  control: MonadControlEndpoint[];
  endpoints: EndpointHealth[];
  source: MonadDiscoverySourceIndex;
  errors: MonadDiscoveryError[];
  fingerprint: string;
};
