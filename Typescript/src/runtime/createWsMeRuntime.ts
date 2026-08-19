// createWsMeRuntime.ts — a RuntimeAdapter backed by a live monad connection:
// reads/writes go over HTTP (this.gui's own monadClient), and subscribe()
// rides the monad's /nrp WebSocket channel for live updates, so useMeValue
// (and any declarative {read: ...} spec token) reflects server-side writes
// without polling — including writes made by OTHER connected clients.
//
// Composes the existing local-write helpers from run-me.ts (writeMeValue/
// readMeValue operate on the `me` object directly) rather than duplicating
// them: an incoming live value is applied to the local `me` object the same
// way a local action() write is, so useMeValue's getSnapshot (which reads
// straight from `me`, not from this adapter) picks it up for free.
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RuntimeAdapter } from './adapter';
import type { MeLike } from '@/react/types';
import {
  createInternalStore,
  normalizeActionPayload,
  normalizeReadTarget,
  normalizeWriteTarget,
  readMeValue,
  writeMeValue,
} from './run-me';
import { writeNamespace } from '@/core/session/monadClient';
import { parseNRPExpression } from '@/gui/All.This/NRP/Beatle/NRPExpression';

export type CreateWsMeRuntimeOptions = {
  /** The .me namespace this runtime talks to, e.g. "fulltrailer.mymac.local" */
  semanticNamespace: string;
  /** HTTP origin for writes, e.g. "http://fulltrailer.mymac.local". Defaults to window.location.origin. */
  transportOrigin?: string;
  /** WS URL. Defaults to ws(s)://<transportOrigin host>/nrp. */
  wsUrl?: string;
  pathPrefix?: string;
};

export type WsMeRuntime = RuntimeAdapter & {
  __me?: MeLike;
  me?: MeLike;
  /** Close the underlying WebSocket. Safe to call more than once. */
  disconnect: () => void;
};

function deriveWsUrl(transportOrigin: string | undefined): string {
  if (typeof window === 'undefined') return '';
  const originStr = transportOrigin || window.location.origin;
  try {
    const url = new URL(originStr);
    const wsProtocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
    // transportOrigin may carry a base path (netget's /monads/<name>
    // path-based proxy route — see monadClient.ts's requestEnvelope for the
    // matching HTTP-side fix) — preserve it so /nrp lands on the same
    // prefixed route the HTTP reads/writes use, not the bare origin.
    const basePath = url.pathname.replace(/\/+$/, '');
    return `${wsProtocol}//${url.host}${basePath}/nrp`;
  } catch {
    return '';
  }
}

export function createWsMeRuntime(me: MeLike, options: CreateWsMeRuntimeOptions): WsMeRuntime {
  const prefix = options.pathPrefix ?? 'me/';
  const namespace = options.semanticNamespace;
  const store = createInternalStore();
  const wsUrl = options.wsUrl || deriveWsUrl(options.transportOrigin);

  let ws: WebSocket | null = null;
  let connecting = false;
  let channelId: string | null = null;
  const queuedOutbound: string[] = [];
  // path -> number of active local subscribe() callers, so only one
  // 'subscribe'/'unsubscribe' round-trips to the server per path no matter
  // how many local components are watching it.
  const listenerCounts = new Map<string, number>();

  function applyIncomingValue(path: string, value: unknown) {
    writeMeValue(me, path, value, { pathPrefix: prefix });
    store.notify();
  }

  function flushQueue() {
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    while (queuedOutbound.length) {
      ws.send(queuedOutbound.shift()!);
    }
  }

  function sendOrQueue(msg: Record<string, unknown>): void {
    const raw = JSON.stringify(msg);
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(raw);
    } else {
      queuedOutbound.push(raw);
      ensureConnected();
    }
  }

  function ensureConnected(): void {
    if (ws || connecting || !wsUrl) return;
    connecting = true;
    const socket = new WebSocket(wsUrl);
    ws = socket;

    socket.addEventListener('open', () => {
      connecting = false;
      const expr = parseNRPExpression(namespace);
      socket.send(JSON.stringify({
        type: 'nrp.open',
        expression: namespace,
        canonical: expr.canonical,
        ast: expr.ast,
        client: { gui: 'this.gui/runtime' },
        timestamp: Date.now(),
      }));
    });

    socket.addEventListener('message', (event) => {
      let msg: any;
      try {
        msg = JSON.parse(String((event as MessageEvent).data));
      } catch {
        return;
      }
      if (msg.type === 'resolved') {
        channelId = typeof msg.channelId === 'string' ? msg.channelId : null;
        flushQueue();
        // Re-subscribe every path with an active local listener on this
        // fresh channel — covers the initial connect and any reconnect.
        for (const path of listenerCounts.keys()) {
          sendOrQueue({ type: 'subscribe', channelId, namespace, path, timestamp: Date.now() });
        }
      } else if (msg.type === 'data' || msg.type === 'stream') {
        const payload = msg.payload;
        if (payload && typeof payload === 'object' && typeof payload.path === 'string') {
          applyIncomingValue(payload.path, payload.value);
        }
      }
    });

    socket.addEventListener('close', () => {
      ws = null;
      channelId = null;
      connecting = false;
    });
    socket.addEventListener('error', () => { /* 'close' follows; nothing else to do here */ });
  }

  const adapter: WsMeRuntime = {
    me,
    resolve: (value: any) => {
      if (typeof value !== 'string') return value;
      const normalized = normalizeReadTarget(value, prefix, false);
      if (!normalized) return value;
      return readMeValue(me, value, { pathPrefix: prefix });
    },
    action: (expression: string) => {
      return (...args: any[]) => {
        const payload = normalizeActionPayload(args);
        const path = normalizeWriteTarget(expression, prefix);
        // Optimistic local write — the UI updates immediately rather than
        // waiting on the network round-trip. The live WS stream (if this
        // path is subscribed) reconciles with the server's own confirmation
        // shortly after, exactly like it would for any other connected
        // client's write to the same path.
        writeMeValue(me, expression, payload, { pathPrefix: prefix });
        store.notify();
        if (path && namespace) {
          void writeNamespace({
            semanticNamespace: namespace,
            transportOrigin: options.transportOrigin,
            expression: path,
            value: payload,
          }).catch((err) => {
            // eslint-disable-next-line no-console
            console.error('[this.GUI] createWsMeRuntime: remote write failed for', path, err);
          });
        }
        return undefined;
      };
    },
    subscribe: (path: string, callback: (nextValue: any) => void) => {
      const notify = () => callback(undefined);
      const unsubStore = store.subscribe(path, notify);

      const count = listenerCounts.get(path) ?? 0;
      listenerCounts.set(path, count + 1);
      if (count === 0) {
        ensureConnected();
        sendOrQueue({ type: 'subscribe', channelId, namespace, path, timestamp: Date.now() });
      }

      return () => {
        unsubStore();
        const remaining = (listenerCounts.get(path) ?? 1) - 1;
        if (remaining <= 0) {
          listenerCounts.delete(path);
          sendOrQueue({ type: 'unsubscribe', channelId, namespace, path, timestamp: Date.now() });
        } else {
          listenerCounts.set(path, remaining);
        }
      };
    },
    getSnapshot: () => store.getSnapshot(),
    notify: () => store.notify(),
    disconnect: () => {
      ws?.close();
      ws = null;
    },
  };

  return adapter;
}

export default createWsMeRuntime;
