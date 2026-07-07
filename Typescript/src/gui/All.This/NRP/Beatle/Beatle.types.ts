import type { NRPExpression, NRPNode } from './NRPExpression';

/**
 * NRP disclosure levels (mirrors monad pathResolver contract).
 *   public    — value is readable by anyone
 *   closed    — namespace exists but this caller has no access
 *   stealth   — namespace does not reveal its own existence (A0/A2 axioms)
 *   contested — Total Monad Synthesis found multiple conflicting monads;
 *               channel is open but resolution authority is ambiguous
 */
export type NRPDisclosure = 'public' | 'closed' | 'stealth' | 'contested';

/** Typed payload from the server's 'resolved' message */
export type ResolvedPayload = {
  endpoints: string[];
  audience?: string[];
  capabilities?: string[];
  /**
   * Projection/overlay surface the channel is overlaid on (from @ operator).
   * This is distinct from an NRP [monad] selector.
   */
  surface?: string;
  disclosure: NRPDisclosure;
};

export type ResolutionState =
  | 'idle'
  | 'parsing'
  | 'connecting'
  | 'resolving'
  | 'connected'
  | 'streaming'
  | 'error'
  | 'disconnected';

export type NamespaceChannel = {
  expression: NRPExpression | null;
  resolved: string[];
  state: ResolutionState;
  channelId?: string;
  audience?: string[];
  /** Overlay/projection surface, not the NRP technical monad selector. */
  surface?: string;
  capabilities?: string[];
  /** Disclosure level reported by the NRP server for this channel */
  disclosure?: NRPDisclosure;
  error?: string;
};

// ── Discriminated union wire messages ──────────────────────────────────────

type ClientContext = {
  /** Current browser/projection surface, not the NRP [monad] selector. */
  surface?: string;
  userAgent?: string;
  gui?: string;
};

/** Client → server: open a channel */
export type MsgNrpOpen = {
  type: 'nrp.open';
  expression: string;
  canonical: string;
  ast: NRPNode;
  client: ClientContext;
  timestamp: number;
};

/** Server → client: channel confirmed */
export type MsgResolved = {
  type: 'resolved';
  channelId: string;
  payload: ResolvedPayload;
  timestamp: number;
};

/** Bidirectional: application data on open channel */
export type MsgData = {
  type: 'data';
  channelId?: string;
  payload: unknown;
  timestamp: number;
};

/** Server → client: live update stream started */
export type MsgStream = {
  type: 'stream';
  channelId?: string;
  payload?: unknown;
  timestamp: number;
};

/** Server → client: resolution or channel error */
export type MsgError = {
  type: 'error';
  channelId?: string;
  payload: string;
  timestamp: number;
};

export type MsgPing = { type: 'ping'; timestamp: number };
export type MsgPong = { type: 'pong'; timestamp: number };

export type BeatleMessage =
  | MsgNrpOpen
  | MsgResolved
  | MsgData
  | MsgStream
  | MsgError
  | MsgPing
  | MsgPong;

// ── NRP resolver endpoints (the "via" dropdown) ────────────────────────────

export type NRPResolver = {
  /** Display label — the namespace identity of the resolver, e.g. "mymac.local" or "cleaker.me" */
  label: string;
  /** WebSocket URL for nrp.open */
  ws: string;
  kind: 'local' | 'public';
};

/**
 * Build the default resolver list.
 * The local entry uses the actual browser hostname so the user sees
 * their real machine name rather than a generic alias.
 */
export function makeDefaultResolvers(localHostname?: string): NRPResolver[] {
  const host = localHostname ?? (typeof window !== 'undefined' ? window.location.hostname : 'localhost');
  return [
    { label: host,        ws: `ws://${host}/nrp`,    kind: 'local'  },
    { label: 'cleaker.me', ws: 'wss://cleaker.me/nrp', kind: 'public' },
  ];
}

// ── Component props ────────────────────────────────────────────────────────

export type BeatleProps = {
  defaultExpression?: string;
  /** Override the list of NRP resolver endpoints shown in the dropdown */
  resolvers?: NRPResolver[];
  /** Pre-select a resolver by ws URL */
  nrpEndpoint?: string;
  onConnect?: (channel: NamespaceChannel) => void;
  onMessage?: (msg: BeatleMessage) => void;
  onDisconnect?: () => void;
  variant?: 'bar' | 'bubble';
  sx?: any;
};
