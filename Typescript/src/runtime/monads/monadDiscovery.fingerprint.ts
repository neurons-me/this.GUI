import type {
  DiscoveredMonad,
  EndpointHealth,
  MonadControlEndpoint,
  MonadDiscoveryScanResult,
  MonadDiscoveryState,
} from './monadDiscovery.types';

function sorted<T>(values: T[], select: (value: T) => string): T[] {
  return [...values].sort((a, b) => select(a).localeCompare(select(b)));
}

function stableMonads(monads: DiscoveredMonad[]) {
  return sorted(monads, (monad) => monad.id || monad.endpoint).map((monad) => ({
    id: monad.id,
    name: monad.name,
    namespace: monad.namespace || '',
    endpoint: monad.endpoint,
    endpoints: [...monad.endpoints].sort(),
    controlEndpoint: monad.controlEndpoint || '',
    sources: [...monad.sources].sort(),
    healthy: monad.healthy,
    status: monad.status || '',
    capabilities: [...monad.capabilities].sort(),
  }));
}

function stableControls(controls: MonadControlEndpoint[]) {
  return sorted(controls, (control) => control.endpoint).map((control) => ({
    endpoint: control.endpoint,
    available: control.available,
    command: {
      name: control.command.name || '',
      install: control.command.install || '',
      start: control.command.start || '',
      actions: sorted(control.command.actions || [], (action) => action.name).map((action) => ({
        name: action.name,
        command: action.command || '',
        method: action.method || '',
        path: action.path || '',
        scope: action.scope || '',
      })),
    },
    records: sorted(control.records, (record) => record.name || record.endpoint || '').map((record) => ({
      name: record.name,
      port: record.port || null,
      status: record.status,
      namespace: record.namespace || '',
      endpoint: record.endpoint || '',
      healthy: Boolean(record.healthy),
      error: record.error || '',
    })),
  }));
}

function stableEndpoints(endpoints: EndpointHealth[]) {
  return sorted(endpoints, (endpoint) => endpoint.url).map((endpoint) => ({
    url: endpoint.url,
    identity: endpoint.identity,
    status: endpoint.status,
    sources: [...endpoint.sources].sort(),
    monadId: endpoint.surface?.monadId || '',
    namespace: endpoint.surface?.namespace || '',
  }));
}

export function createMonadDiscoveryFingerprint(input: {
  monads: DiscoveredMonad[];
  control: MonadControlEndpoint[];
  endpoints: EndpointHealth[];
}): string {
  return JSON.stringify({
    monads: stableMonads(input.monads),
    control: stableControls(input.control),
    endpoints: stableEndpoints(input.endpoints),
  });
}

export function fingerprintMonadDiscoveryState(
  input: MonadDiscoveryState | MonadDiscoveryScanResult,
): string {
  return createMonadDiscoveryFingerprint({
    monads: input.monads,
    control: input.control,
    endpoints: input.endpoints,
  });
}
