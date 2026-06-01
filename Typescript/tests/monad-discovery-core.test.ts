import assert from 'node:assert/strict';
import {
  createEndpointCandidate,
  createMonadDiscoveryStore,
  mergeDiscoveredMonads,
  normalizeMonadEndpointInput,
  scanMonadTopology,
  type DiscoveredMonad,
  type MonadDiscoveryFetch,
} from '../src/runtime/monads';

function json(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

assert.equal(normalizeMonadEndpointInput('127.0.0.1:8161/'), 'http://127.0.0.1:8161');
assert.equal(normalizeMonadEndpointInput('http://localhost:8161//'), 'http://localhost:8161');

const monads = mergeDiscoveredMonads([
  {
    id: 'monad:one',
    name: 'local',
    endpoint: 'http://127.0.0.1:8161',
    endpoints: ['http://127.0.0.1:8161'],
    sources: ['surface'],
    healthy: true,
    capabilities: ['gui'],
  },
  {
    id: 'monad:one',
    name: 'local',
    endpoint: 'http://localhost:8161',
    endpoints: ['http://localhost:8161'],
    sources: ['registry'],
    healthy: true,
    capabilities: ['mesh'],
  },
] satisfies DiscoveredMonad[]);

assert.equal(monads.length, 1);
assert.deepEqual(monads[0].endpoints.sort(), ['http://127.0.0.1:8161', 'http://localhost:8161']);
assert.deepEqual(monads[0].capabilities.sort(), ['gui', 'mesh']);

const fetchCalls: string[] = [];
const fakeFetch: MonadDiscoveryFetch = async (input) => {
  const url = String(input);
  fetchCalls.push(url);
  const parsed = new URL(url);
  const origin = parsed.origin;

  if (origin === 'http://127.0.0.1:8161' && parsed.pathname === '/__surface') {
    return json({
      ok: true,
      monadId: 'monad:root',
      monadName: 'root',
      namespace: 'root.local',
      surfaceEntry: {
        endpoint: origin,
        resources: ['gui'],
        status: { availability: 'online' },
      },
    });
  }

  if (origin === 'http://127.0.0.1:8161' && parsed.pathname === '/__monads') {
    return json({
      ok: true,
      command: {
        name: 'monads',
        install: 'npm install -g monad.ai',
        start: 'monads start',
        actions: [
          { name: 'on', command: 'monads on <name>', method: 'POST', path: '/__monads/:name/on' },
          { name: 'pause', command: 'monads pause <name>', method: 'POST', path: '/__monads/:name/pause' },
          { name: 'delete', command: 'monads delete <name>', method: 'POST', path: '/__monads/:name/delete' },
        ],
      },
      monads: [
        {
          name: 'worker',
          endpoint: 'http://127.0.0.1:8163',
          status: 'online',
          healthy: true,
          namespace: 'root.local',
        },
      ],
    });
  }

  if (origin === 'http://127.0.0.1:8161' && parsed.pathname === '/.mesh/monads') {
    return json({
      ok: true,
      monads: [
        {
          monad_id: 'mesh:remote',
          name: 'remote',
          endpoint: 'http://127.0.0.1:8164',
          namespace: 'mesh.local',
          capabilities: ['mesh'],
        },
      ],
    });
  }

  if (origin === 'http://127.0.0.1:8163' && parsed.pathname === '/__surface') {
    return json({ ok: false }, 503);
  }

  if (origin === 'http://127.0.0.1:8164' && parsed.pathname === '/__surface') {
    return json({
      ok: true,
      monadId: 'mesh:remote',
      monadName: 'remote',
      namespace: 'mesh.local',
      surfaceEntry: {
        endpoint: origin,
        status: { availability: 'online' },
      },
    });
  }

  if (origin === 'http://local.netget' && parsed.pathname === '/apps') {
    return json({
      success: true,
      apps: [
        {
          id: 'monad-report-1',
          name: 'monad:files',
          kind: 'monad',
          port: 8170,
          protocol: 'http',
          host: '127.0.0.1',
          url: 'http://127.0.0.1:8170',
          tags: ['monad', 'surface'],
          status: 'running',
          health: { state: 'healthy' },
          metadata: {
            monadName: 'files',
            monadId: 'monad:files',
            namespace: 'files.local',
            capabilities: ['gui', 'control'],
          },
          exposure: {
            visibility: 'loopback',
            publishMode: 'path',
          },
        },
      ],
    });
  }

  if (origin === 'http://127.0.0.1:8170' && parsed.pathname === '/__surface') {
    return json({
      ok: true,
      monadId: 'monad:files',
      monadName: 'files',
      namespace: 'files.local',
      surfaceEntry: {
        endpoint: origin,
        status: { availability: 'online' },
      },
    });
  }

  return json({ ok: false }, 404);
};

const scan = await scanMonadTopology({
  candidates: [createEndpointCandidate('http://127.0.0.1:8161', ['seed'])!],
  timeoutMs: 50,
  fetchImpl: fakeFetch,
});

assert.equal(scan.control.length, 1);
assert.deepEqual(scan.control[0].command.actions?.map((action) => action.name), ['on', 'pause', 'delete']);
assert.equal(scan.source.surface.includes('http://127.0.0.1:8161'), true);
assert.equal(scan.source.mesh.includes('http://127.0.0.1:8161'), true);
assert.equal(scan.endpoints.find((endpoint) => endpoint.url === 'http://127.0.0.1:8163')?.status, 'dead');
assert.equal(scan.monads.find((monad) => monad.name === 'worker')?.healthy, false);
assert.equal(scan.monads.find((monad) => monad.name === 'remote')?.healthy, true);
assert.equal(fetchCalls.some((url) => url === 'http://127.0.0.1:8163/__surface'), true);

const netgetScan = await scanMonadTopology({
  candidates: [],
  registryCandidates: [createEndpointCandidate('http://local.netget', ['registry'])!],
  timeoutMs: 50,
  fetchImpl: fakeFetch,
});

assert.equal(netgetScan.source.registry.includes('http://local.netget'), true);
assert.equal(netgetScan.monads.find((monad) => monad.name === 'files')?.healthy, true);
assert.equal(netgetScan.monads.find((monad) => monad.name === 'files')?.metadata?.exposure && true, true);

let slowSurfaceResolver: ((response: Response) => void) | null = null;
let fastSurface = false;
const raceFetch: MonadDiscoveryFetch = async (input) => {
  const url = String(input);
  const parsed = new URL(url);
  if (parsed.origin !== 'http://127.0.0.1:8161') return json({ ok: false }, 404);
  if (url.endsWith('/__surface') && !fastSurface) {
    return new Promise<Response>((resolve) => {
      slowSurfaceResolver = resolve;
    });
  }
  if (url.endsWith('/__surface')) {
    return json({
      ok: true,
      monadId: 'monad:fast',
      monadName: 'fast',
      surfaceEntry: { endpoint: 'http://127.0.0.1:8161', status: { availability: 'online' } },
    });
  }
  return json({ ok: true, monads: [] });
};

const store = createMonadDiscoveryStore({
  endpoints: ['http://127.0.0.1:8161'],
  storage: null,
  fetchImpl: raceFetch,
  requestTimeoutMs: 500,
  stableIntervalMs: 60_000,
  enableSSE: false,
});

store.start();
await new Promise<void>((resolve) => {
  const tick = () => {
    if (slowSurfaceResolver) {
      resolve();
      return;
    }
    setTimeout(tick, 0);
  };
  tick();
});
store.rescan({ mode: 'fast', reason: 'queued' });
fastSurface = true;
slowSurfaceResolver?.(json({
  ok: true,
  monadId: 'monad:slow',
  monadName: 'slow',
  surfaceEntry: { endpoint: 'http://127.0.0.1:8161', status: { availability: 'online' } },
}));

await store.waitForChange({
  timeoutMs: 1000,
  predicate: (state) => state.monads.some((monad) => monad.id === 'monad:fast'),
});

assert.equal(store.getState().monads.some((monad) => monad.id === 'monad:fast'), true);
store.stop();

console.log('monad-discovery-core ok');
