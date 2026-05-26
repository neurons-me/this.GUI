import {
  DEFAULT_MONAD_DISCOVERY_PORTS,
  DEFAULT_MONAD_DISCOVERY_STORAGE_KEY,
  buildMonadDiscoveryCandidates,
  scanMonadTopology,
} from './monadDiscovery.core';
import {
  normalizeMonadEndpointInput,
  readStoredMonadEndpoints,
  writeStoredMonadEndpoints,
} from './monadDiscovery.normalize';
import type {
  CreateMonadDiscoveryOptions,
  EndpointCandidate,
  MonadDiscovery,
  MonadDiscoveryError,
  MonadDiscoveryListener,
  MonadDiscoveryRescanInput,
  MonadDiscoveryScanMode,
  MonadDiscoveryState,
  MonadDiscoveryStorage,
  MonadDiscoveryWaitOptions,
} from './monadDiscovery.types';

function now() {
  return Date.now();
}

function resolveStorage(explicit: MonadDiscoveryStorage | null | undefined): MonadDiscoveryStorage | null {
  if (explicit !== undefined) return explicit;
  try {
    if (typeof window !== 'undefined' && window.localStorage) return window.localStorage;
  } catch {
    return null;
  }
  return null;
}

function emptyState(): MonadDiscoveryState {
  return {
    status: 'idle',
    monads: [],
    control: [],
    endpoints: [],
    lastUpdatedAt: null,
    lastChangeAt: null,
    activeScanId: 0,
    pendingRescan: false,
    source: { surface: [], monads: [], mesh: [] },
    errors: [],
    fingerprint: '',
  };
}

function isEventSourceAvailable() {
  return typeof EventSource !== 'undefined';
}

export function createMonadDiscoveryStore(options: CreateMonadDiscoveryOptions = {}): MonadDiscovery {
  const listeners = new Set<MonadDiscoveryListener>();
  const storageKey = options.storageKey || DEFAULT_MONAD_DISCOVERY_STORAGE_KEY;
  const storage = resolveStorage(options.storage);
  const extendedPorts = options.extendedPorts?.length ? options.extendedPorts : DEFAULT_MONAD_DISCOVERY_PORTS;
  const fastIntervalMs = Math.max(250, Number(options.fastIntervalMs || 1_000));
  const stableIntervalMs = Math.max(1_000, Number(options.stableIntervalMs || 15_000));
  const requestTimeoutMs = Math.max(100, Number(options.requestTimeoutMs || 650));
  const settlingWindowMs = Math.max(1_000, Number(options.settlingWindowMs || 10_000));
  const enableSSE = options.enableSSE !== false;
  const manualEndpoints = new Set<string>();
  const sseSources = new Map<string, EventSource>();
  for (const endpoint of readStoredMonadEndpoints(storage, storageKey)) {
    manualEndpoints.add(endpoint);
  }

  let state = emptyState();
  let running = false;
  let scanning = false;
  let pendingRescan: MonadDiscoveryRescanInput | null = null;
  let timer: ReturnType<typeof setTimeout> | null = null;
  let settlingUntil = 0;

  function emit() {
    for (const listener of listeners) listener(state);
  }

  function setState(next: MonadDiscoveryState, force = false) {
    const shouldEmit = force ||
      next.fingerprint !== state.fingerprint ||
      next.status !== state.status ||
      next.pendingRescan !== state.pendingRescan ||
      next.activeScanId !== state.activeScanId;
    state = next;
    if (shouldEmit) emit();
  }

  function setStatus(status: MonadDiscoveryState['status'], force = false) {
    setState({ ...state, status }, force);
  }

  function getStoredEndpoints() {
    return readStoredMonadEndpoints(storage, storageKey);
  }

  function writeManualEndpoints() {
    writeStoredMonadEndpoints(storage, storageKey, Array.from(manualEndpoints));
  }

  function knownEndpoints(): string[] {
    return Array.from(new Set([
      ...state.endpoints.map((endpoint) => endpoint.url),
      ...state.monads.flatMap((monad) => monad.endpoints),
    ].map(normalizeMonadEndpointInput).filter(Boolean)));
  }

  function candidatesFor(mode: MonadDiscoveryScanMode): EndpointCandidate[] {
    return buildMonadDiscoveryCandidates({
      endpoints: options.endpoints,
      storedEndpoints: [...getStoredEndpoints(), ...manualEndpoints],
      knownEndpoints: knownEndpoints(),
      extendedPorts,
      mode,
    });
  }

  function closeSse(endpoint: string) {
    const source = sseSources.get(endpoint);
    if (!source) return;
    source.close();
    sseSources.delete(endpoint);
  }

  function reconcileSseSources() {
    if (!enableSSE || !isEventSourceAvailable()) return;
    const alive = new Set(
      state.endpoints
        .filter((endpoint) => endpoint.status === 'alive')
        .map((endpoint) => endpoint.url),
    );
    for (const endpoint of Array.from(sseSources.keys())) {
      if (!alive.has(endpoint)) closeSse(endpoint);
    }
    for (const endpoint of alive) {
      if (sseSources.has(endpoint)) continue;
      try {
        const source = new EventSource(`${endpoint.replace(/\/+$/, '')}/__surface/events`);
        const hint = () => rescan({ mode: 'fast', reason: 'surface:event' });
        source.addEventListener('surface', hint as EventListener);
        source.addEventListener('request', hint as EventListener);
        source.onerror = () => {
          // EventSource owns reconnects. Polling remains the source of truth.
        };
        sseSources.set(endpoint, source);
      } catch (error) {
        const discoveryError: MonadDiscoveryError = {
          endpoint,
          stage: 'sse',
          message: error instanceof Error ? error.message : String(error),
          at: now(),
        };
        setState({ ...state, errors: [discoveryError, ...state.errors].slice(0, 20) }, true);
      }
    }
  }

  function scheduleNext() {
    if (!running) return;
    if (timer) clearTimeout(timer);
    const isSettling = settlingUntil > now();
    const delay = isSettling ? fastIntervalMs : stableIntervalMs;
    timer = setTimeout(() => {
      timer = null;
      rescan({ mode: isSettling ? 'fast' : 'normal', reason: isSettling ? 'settling' : 'steady' });
    }, delay);
  }

  async function runScan(mode: MonadDiscoveryScanMode, reason = 'rescan') {
    if (!running && reason !== 'manual') return;
    if (scanning) {
      pendingRescan = { mode, reason };
      setState({ ...state, pendingRescan: true }, true);
      return;
    }

    scanning = true;
    const activeScanId = state.activeScanId + 1;
    const scanStartedAt = now();
    const nextStatus = settlingUntil > scanStartedAt ? 'settling' : 'scanning';
    setState({
      ...state,
      status: nextStatus,
      activeScanId,
      pendingRescan: false,
    }, true);

    try {
      const result = await scanMonadTopology({
        candidates: candidatesFor(mode),
        timeoutMs: requestTimeoutMs,
        fetchImpl: options.fetchImpl,
      });
      const changed = result.fingerprint !== state.fingerprint;
      const status = settlingUntil > now() ? 'settling' : 'stable';
      setState({
        ...state,
        status,
        monads: result.monads,
        control: result.control,
        endpoints: result.endpoints,
        source: result.source,
        errors: result.errors.slice(0, 20),
        lastUpdatedAt: now(),
        lastChangeAt: changed ? now() : state.lastChangeAt,
        fingerprint: result.fingerprint,
        activeScanId,
        pendingRescan: Boolean(pendingRescan),
      }, changed);
      reconcileSseSources();
    } catch (error) {
      const discoveryError: MonadDiscoveryError = {
        stage: 'scan',
        message: error instanceof Error ? error.message : String(error),
        at: now(),
      };
      setState({
        ...state,
        status: 'error',
        errors: [discoveryError, ...state.errors].slice(0, 20),
        lastUpdatedAt: now(),
        activeScanId,
        pendingRescan: Boolean(pendingRescan),
      }, true);
    } finally {
      scanning = false;
      const nextPending = pendingRescan;
      pendingRescan = null;
      if (nextPending) {
        void runScan(nextPending.mode || 'fast', nextPending.reason || 'pending');
      } else {
        scheduleNext();
      }
    }
  }

  function start() {
    if (running) return;
    running = true;
    rescan({ mode: 'fast', reason: 'start' });
  }

  function stop() {
    running = false;
    scanning = false;
    pendingRescan = null;
    if (timer) clearTimeout(timer);
    timer = null;
    for (const endpoint of Array.from(sseSources.keys())) closeSse(endpoint);
    setStatus('idle', true);
  }

  function rescan(input: MonadDiscoveryRescanInput = {}) {
    const mode = input.mode || 'normal';
    void runScan(mode, input.reason || 'rescan');
  }

  function subscribe(listener: MonadDiscoveryListener) {
    listeners.add(listener);
    listener(state);
    return () => {
      listeners.delete(listener);
    };
  }

  function getState() {
    return state;
  }

  function addEndpoint(endpoint: string) {
    const normalized = normalizeMonadEndpointInput(endpoint);
    if (!normalized) return;
    manualEndpoints.add(normalized);
    writeManualEndpoints();
    rescan({ mode: 'fast', reason: 'endpoint:add' });
  }

  function removeEndpoint(endpoint: string) {
    const normalized = normalizeMonadEndpointInput(endpoint);
    if (!normalized) return;
    manualEndpoints.delete(normalized);
    const stored = getStoredEndpoints().filter((value) => value !== normalized);
    writeStoredMonadEndpoints(storage, storageKey, stored);
    closeSse(normalized);
    rescan({ mode: 'fast', reason: 'endpoint:remove' });
  }

  function waitForChange(options: MonadDiscoveryWaitOptions): Promise<MonadDiscoveryState> {
    if (options.predicate(state)) return Promise.resolve(state);
    return new Promise((resolve, reject) => {
      let unsubscribe = () => {};
      const timer = setTimeout(() => {
        unsubscribe();
        reject(new Error('[this.gui] Monad discovery waitForChange timed out.'));
      }, Math.max(1, options.timeoutMs));
      unsubscribe = subscribe((nextState) => {
        if (!options.predicate(nextState)) return;
        clearTimeout(timer);
        unsubscribe();
        resolve(nextState);
      });
    });
  }

  async function withSettling<T>(task: () => Promise<T>): Promise<T> {
    settlingUntil = Math.max(settlingUntil, now() + settlingWindowMs);
    setStatus('settling', true);
    try {
      return await task();
    } finally {
      rescan({ mode: 'fast', reason: 'settling' });
    }
  }

  return {
    start,
    stop,
    rescan,
    subscribe,
    getState,
    addEndpoint,
    removeEndpoint,
    waitForChange,
    withSettling,
  };
}

export const createMonadDiscovery = createMonadDiscoveryStore;
