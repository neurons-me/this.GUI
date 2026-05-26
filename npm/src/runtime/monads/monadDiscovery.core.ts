import {
  createEndpointCandidate,
  createLocalEndpointCandidates,
  normalizeMonadEndpointInput,
  uniqueEndpointCandidates,
} from './monadDiscovery.normalize';
import { probeMonadControl, probeMonadMesh, probeMonadSurface } from './monadDiscovery.fetch';
import { createMonadDiscoveryFingerprint } from './monadDiscovery.fingerprint';
import {
  mergeControlEndpoints,
  mergeDiscoveredMonads,
  mergeEndpointHealth,
} from './monadDiscovery.merge';
import type {
  EndpointCandidate,
  MonadControlEndpoint,
  MonadDiscoveryError,
  MonadDiscoveryFetch,
  MonadDiscoveryScanInput,
  MonadDiscoveryScanMode,
  MonadDiscoveryScanResult,
  MonadDiscoverySourceIndex,
} from './monadDiscovery.types';

export const DEFAULT_MONAD_DISCOVERY_PORTS = [8161, 8162, 8163, 8164, 8165];
export const DEFAULT_MONAD_DISCOVERY_SEEDS = [
  'http://127.0.0.1:8161',
  'http://localhost:8161',
];
export const DEFAULT_MONAD_DISCOVERY_STORAGE_KEY = 'this.gui.monadDiscovery.endpoints';

export type BuildMonadDiscoveryCandidatesInput = {
  endpoints?: string[];
  storedEndpoints?: string[];
  knownEndpoints?: string[];
  extendedPorts?: number[];
  mode?: MonadDiscoveryScanMode;
};

function collectControlAdvertisedEndpoints(controls: MonadControlEndpoint[]): EndpointCandidate[] {
  return controls.flatMap((control) =>
    control.records
      .map((record) => createEndpointCandidate(record.endpoint, ['registry']))
      .filter(Boolean) as EndpointCandidate[],
  );
}

function sourceIndex(input: {
  surfaceEndpoints: string[];
  controlEndpoints: string[];
  meshEndpoints: string[];
}): MonadDiscoverySourceIndex {
  return {
    surface: Array.from(new Set(input.surfaceEndpoints)).sort(),
    monads: Array.from(new Set(input.controlEndpoints)).sort(),
    mesh: Array.from(new Set(input.meshEndpoints)).sort(),
  };
}

export function buildMonadDiscoveryCandidates(input: BuildMonadDiscoveryCandidatesInput = {}): EndpointCandidate[] {
  const mode = input.mode || 'normal';
  const base = [
    ...DEFAULT_MONAD_DISCOVERY_SEEDS.map((endpoint) => createEndpointCandidate(endpoint, ['seed'])),
    ...(input.endpoints || []).map((endpoint) => createEndpointCandidate(endpoint, ['seed'])),
    ...(input.storedEndpoints || []).map((endpoint) => createEndpointCandidate(endpoint, ['stored'])),
    ...(input.knownEndpoints || []).map((endpoint) => createEndpointCandidate(endpoint, ['surface'])),
  ];

  const expanded = mode === 'normal'
    ? [
        ...createLocalEndpointCandidates(input.extendedPorts || DEFAULT_MONAD_DISCOVERY_PORTS, 'seed'),
        createEndpointCandidate('http://local.monad:8161', ['seed']),
      ]
    : [];

  return uniqueEndpointCandidates([...base, ...expanded]);
}

export async function scanMonadTopology(input: MonadDiscoveryScanInput): Promise<MonadDiscoveryScanResult> {
  const candidates = uniqueEndpointCandidates(input.candidates);
  const timeoutMs = Math.max(100, Number(input.timeoutMs || 650));
  const fetchImpl: MonadDiscoveryFetch | undefined = input.fetchImpl;
  const surfaceResults = await Promise.all(
    candidates.map((candidate) =>
      probeMonadSurface({
        endpoint: candidate.url,
        sources: candidate.sources,
        timeoutMs,
        fetchImpl,
      }),
    ),
  );

  const aliveSurfaceResults = surfaceResults.filter((result) => result.endpoint.status === 'alive');
  const aliveCandidates = aliveSurfaceResults.map((result) => ({
    url: result.endpoint.url,
    sources: result.endpoint.sources,
  }));

  const [controlResults, meshResults] = await Promise.all([
    Promise.all(aliveCandidates.map((candidate) =>
      probeMonadControl({
        endpoint: candidate.url,
        sources: candidate.sources,
        timeoutMs,
        fetchImpl,
      }),
    )),
    Promise.all(aliveCandidates.map((candidate) =>
      probeMonadMesh({
        endpoint: candidate.url,
        sources: candidate.sources,
        timeoutMs,
        fetchImpl,
      }),
    )),
  ]);

  const controls = mergeControlEndpoints(
    controlResults.map((result) => result.control).filter(Boolean) as MonadControlEndpoint[],
  );
  const controlAdvertisedCandidates = collectControlAdvertisedEndpoints(controls);
  const meshAdvertisedCandidates = meshResults.flatMap((result) =>
    result.monads
      .map((monad) => createEndpointCandidate(monad.endpoint, ['mesh']))
      .filter(Boolean) as EndpointCandidate[],
  );
  const seenInitial = new Set(candidates.map((candidate) => normalizeMonadEndpointInput(candidate.url)));
  const secondaryCandidates = uniqueEndpointCandidates([
    ...controlAdvertisedCandidates,
    ...meshAdvertisedCandidates,
  ]).filter((candidate) => !seenInitial.has(candidate.url));
  const secondarySurfaceResults = await Promise.all(
    secondaryCandidates.map((candidate) =>
      probeMonadSurface({
        endpoint: candidate.url,
        sources: candidate.sources,
        timeoutMs,
        fetchImpl,
      }),
    ),
  );

  const endpoints = mergeEndpointHealth([
    ...surfaceResults.map((result) => result.endpoint),
    ...secondarySurfaceResults.map((result) => result.endpoint),
  ]);
  const monads = mergeDiscoveredMonads([
    ...surfaceResults.map((result) => result.monad).filter(Boolean),
    ...secondarySurfaceResults.map((result) => result.monad).filter(Boolean),
    ...controlResults.flatMap((result) => result.monads),
    ...meshResults.flatMap((result) => result.monads),
  ] as any[], endpoints);
  const errors = [
    ...surfaceResults.map((result) => result.error).filter(Boolean),
    ...secondarySurfaceResults.map((result) => result.error).filter(Boolean),
    ...controlResults.map((result) => result.error).filter(Boolean),
    ...meshResults.map((result) => result.error).filter(Boolean),
  ] as MonadDiscoveryError[];
  const source = sourceIndex({
    surfaceEndpoints: endpoints.filter((endpoint) => endpoint.status === 'alive').map((endpoint) => endpoint.url),
    controlEndpoints: controls.map((control) => control.endpoint),
    meshEndpoints: aliveCandidates
      .filter((_candidate, index) => meshResults[index]?.monads.length)
      .map((candidate) => candidate.url),
  });

  return {
    monads,
    control: controls,
    endpoints,
    source,
    errors,
    fingerprint: createMonadDiscoveryFingerprint({ monads, control: controls, endpoints }),
  };
}
