import type { RuntimeAdapter } from '@/runtime/adapter';
import { readMeValue, writeMeValue } from '@/runtime/run-me';
import type { MeLike } from '@/react/types';
import { isLoopbackishHost } from './surfaceModel';

export const CLEAKER_OPEN_MESH_LINK_EVENT = 'cleaker:open-mesh-link';
export const DEFAULT_PAIRING_TTL_MS = 1000 * 60 * 10;

export type MeshSelectorType = 'none' | 'current' | 'broadcast' | 'specific';

export type ParsedMeshExpression = {
  raw: string;
  namespace: string | null;
  selectorType: MeshSelectorType;
  selectorKey: string | null;
  selectorValue: string | null;
  path: string;
  semanticPath: string;
  query: Record<string, string>;
};

export type MeshLinkAction =
  | { kind: 'claim-surface'; token: string }
  | { kind: 'profile' }
  | { kind: 'broadcast' }
  | { kind: 'unknown' };

export type MeshPairingTokenRecord = {
  token: string;
  namespace: string;
  expression: string;
  origin: string;
  hostSurface: string;
  issuedAt: number;
  expiresAt: number;
  usedAt: number | null;
  usedBy: string | null;
  localOnly: boolean;
  transport: 'mdns' | 'lan' | 'https';
  rootName: string | null;
};

export type MeshSurfaceRecord = {
  hostId: string;
  displayName: string;
  type: 'desktop' | 'mobile' | 'server' | 'browser-tab' | 'node';
  platform: string;
  note: string | null;
  namespace: string;
  status: 'online' | 'offline' | 'sleep' | 'unknown';
  confidence: number;
  lastSeen: number;
  pairedAt: number;
  origin: string | null;
  localNetwork: boolean;
  claimToken: string | null;
  transport: 'mdns' | 'lan' | 'https' | 'unknown';
  trust: 'owner' | 'trusted-peer' | 'guest';
  metadata: {
    userAgent: string;
    hostSurface: string | null;
  };
};

function normalizeString(value: unknown): string {
  return String(value || '').trim();
}

function normalizeQueryValue(value: string): string {
  return decodeURIComponent(String(value || '').trim());
}

function splitRawExpression(input: string): { target: string; query: Record<string, string> } {
  const [targetPart, queryPart = ''] = String(input || '').split('?');
  const params = new URLSearchParams(queryPart);
  const query: Record<string, string> = {};

  params.forEach((value, key) => {
    const normalizedKey = normalizeString(key);
    if (!normalizedKey) return;
    query[normalizedKey] = normalizeQueryValue(value);
  });

  return {
    target: targetPart,
    query,
  };
}

export function parseMeshExpression(input: string): ParsedMeshExpression {
  const raw = normalizeString(input);
  if (!raw) {
    throw new Error('.me[parse_error]: Input must be a non-empty string');
  }

  const normalized = raw.startsWith('me://') ? raw.slice('me://'.length) : raw;
  const { target, query } = splitRawExpression(normalized);

  if (!target.includes('[') && !target.includes('/')) {
    return {
      raw,
      namespace: null,
      selectorType: 'current',
      selectorKey: null,
      selectorValue: null,
      path: target,
      semanticPath: target.replace(/\//g, '.'),
      query,
    };
  }

  const slashIndex = target.indexOf('/');
  const head = slashIndex >= 0 ? target.slice(0, slashIndex).trim() : target.trim();
  const path = slashIndex >= 0 ? target.slice(slashIndex + 1).trim().replace(/^\/+|\/+$/g, '') : '';
  const semanticPath = path.replace(/\//g, '.');

  let namespace: string | null = null;
  let selectorType: MeshSelectorType = 'none';
  let selectorKey: string | null = null;
  let selectorValue: string | null = null;

  const bracketStart = head.indexOf('[');
  const bracketEnd = head.lastIndexOf(']');

  if (bracketStart !== -1) {
    if (bracketEnd <= bracketStart) {
      throw new Error(`.me[parse_error]: Unclosed or malformed selector -> ${raw}`);
    }

    namespace = normalizeString(head.slice(0, bracketStart)) || null;
    const selectorContent = normalizeString(head.slice(bracketStart + 1, bracketEnd));

    if (!selectorContent) {
      selectorType = 'broadcast';
    } else if (selectorContent.toLowerCase() === 'current') {
      selectorType = 'current';
    } else {
      const colonIndex = selectorContent.indexOf(':');
      if (colonIndex < 0) {
        throw new Error(`.me[parse_error]: Unknown selector -> [${selectorContent}]`);
      }

      selectorType = 'specific';
      selectorKey = normalizeString(selectorContent.slice(0, colonIndex)).toLowerCase();
      selectorValue = normalizeString(selectorContent.slice(colonIndex + 1));

      if (!selectorKey || !selectorValue) {
        throw new Error(`.me[parse_error]: Empty selector value -> [${selectorContent}]`);
      }
    }
  } else if (!head || head.toLowerCase() === 'me') {
    namespace = head || null;
    selectorType = 'current';
  } else {
    namespace = head;
  }

  return {
    raw,
    namespace,
    selectorType,
    selectorKey,
    selectorValue,
    path,
    semanticPath,
    query,
  };
}

export function resolveMeshLinkAction(parsed: ParsedMeshExpression): MeshLinkAction {
  if (
    parsed.selectorType === 'specific'
    && parsed.selectorKey === 'claim'
    && parsed.selectorValue
    && parsed.path === 'new-surface'
  ) {
    return {
      kind: 'claim-surface',
      token: parsed.selectorValue,
    };
  }

  if (parsed.selectorType === 'broadcast') {
    return { kind: 'broadcast' };
  }

  if (parsed.path === 'profile' || parsed.semanticPath === 'profile') {
    return { kind: 'profile' };
  }

  return { kind: 'unknown' };
}

function slugify(raw: string, fallback = 'surface'): string {
  const value = normalizeString(raw)
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');

  return value || fallback;
}

function classifyDeviceType(userAgent: string, platform: string): MeshSurfaceRecord['type'] {
  const fingerprint = `${userAgent} ${platform}`.toLowerCase();
  if (/(iphone|ipad|android|pixel|mobile)/.test(fingerprint)) return 'mobile';
  if (/(macintosh|mac os|windows|linux|desktop|laptop)/.test(fingerprint)) return 'desktop';
  return 'node';
}

function inferDeviceLabel(userAgent: string, platform: string): string {
  const fingerprint = `${userAgent} ${platform}`.toLowerCase();
  if (fingerprint.includes('iphone')) return 'iPhone';
  if (fingerprint.includes('ipad')) return 'iPad';
  if (fingerprint.includes('android')) return 'Android';
  if (fingerprint.includes('macintosh') || fingerprint.includes('mac os')) return 'MacBook';
  if (fingerprint.includes('windows')) return 'Windows PC';
  if (fingerprint.includes('linux')) return 'Linux Device';
  return platform || 'New Surface';
}

function isPrivateIPv4(host: string): boolean {
  const value = normalizeString(host);
  if (!/^(\d{1,3}\.){3}\d{1,3}$/.test(value)) return false;
  const [a, b] = value.split('.').map((part) => Number(part));
  return a === 10 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168);
}

function extractHostname(value: string): string {
  const raw = normalizeString(value);
  if (!raw) return '';

  try {
    return normalizeString(new URL(raw).hostname).toLowerCase();
  } catch {
    return raw.replace(/^https?:\/\//i, '').split('/')[0]?.split(':')[0]?.toLowerCase() || '';
  }
}

export function isProbablyLocalOrigin(origin: string): boolean {
  const host = extractHostname(origin);
  return Boolean(host) && (isLoopbackishHost(host) || host.endsWith('.local') || isPrivateIPv4(host));
}

export function isLikelySameLocalNetwork(origin: string): boolean {
  if (typeof window === 'undefined') return false;
  const currentHost = normalizeString(window.location.hostname).toLowerCase();
  const originHost = extractHostname(origin);
  if (!currentHost || !originHost) return false;
  if (currentHost === originHost) return true;
  if (isProbablyLocalOrigin(origin) && (isLoopbackishHost(currentHost) || currentHost.endsWith('.local') || isPrivateIPv4(currentHost))) {
    return true;
  }
  return false;
}

export function detectLocalSurfaceProfile(): {
  suggestedName: string;
  surfaceId: string;
  type: MeshSurfaceRecord['type'];
  platform: string;
  note: string;
} {
  if (typeof navigator === 'undefined') {
    return {
      suggestedName: 'New Surface',
      surfaceId: 'new-surface',
      type: 'node',
      platform: 'unknown',
      note: 'Claimed from a runtime without navigator metadata.',
    };
  }

  const uaData = (navigator as any).userAgentData;
  const platform = normalizeString(uaData?.platform || navigator.platform || 'unknown');
  const userAgent = normalizeString(navigator.userAgent || '');
  const type = classifyDeviceType(userAgent, platform);
  const label = inferDeviceLabel(userAgent, platform);

  return {
    suggestedName: label,
    surfaceId: slugify(label, 'surface'),
    type,
    platform: platform || 'unknown',
    note: `Claimed from ${label} via Cleaker QR pairing.`,
  };
}

export function createPairingToken(): string {
  if (typeof globalThis.crypto?.getRandomValues === 'function') {
    const bytes = new Uint8Array(18);
    globalThis.crypto.getRandomValues(bytes);
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
  }

  return `${Date.now().toString(16)}${Math.random().toString(16).slice(2, 18)}`;
}

export function buildClaimQrExpression(input: {
  namespace: string;
  token: string;
  origin: string;
  hostSurface: string;
  expiresAt: number;
  rootName?: string | null;
  transport?: 'mdns' | 'lan' | 'https';
  localOnly?: boolean;
}): string {
  const namespace = normalizeString(input.namespace);
  const token = normalizeString(input.token);
  const query = new URLSearchParams({
    origin: normalizeString(input.origin),
    surface: normalizeString(input.hostSurface),
    expiresAt: String(Number(input.expiresAt) || Date.now()),
    transport: input.transport || (isProbablyLocalOrigin(input.origin) ? 'mdns' : 'https'),
    local: input.localOnly === false ? '0' : '1',
  });

  if (input.rootName) query.set('root', normalizeString(input.rootName));

  return `me://${namespace}[claim:${token}]/new-surface?${query.toString()}`;
}

export function readIncomingMeshExpression(): string {
  if (typeof window === 'undefined') return '';

  const params = new URLSearchParams(window.location.search);
  const fromSearch =
    params.get('me') ||
    params.get('qr') ||
    params.get('mesh') ||
    params.get('claim') ||
    '';

  if (normalizeString(fromSearch)) return normalizeString(fromSearch);

  const hash = normalizeString(window.location.hash).replace(/^#/, '');
  if (hash.startsWith('me://')) return hash;

  const injected = normalizeString((window as any).__CLEAKER_MESH_LINK__);
  return injected;
}

export function dispatchMeshExpression(expression: string): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(CLEAKER_OPEN_MESH_LINK_EVENT, {
    detail: {
      expression,
    },
  }));
}

export function readMeshPairingTokens(me: MeLike): Record<string, MeshPairingTokenRecord> {
  const value = readMeValue(me, 'runtime.mesh.pairing.tokens', { allowBarePath: true }) as Record<string, MeshPairingTokenRecord> | undefined;
  if (!value || typeof value !== 'object') return {};
  return value;
}

export function writeMeshRuntimeValue(
  me: MeLike,
  runtime: RuntimeAdapter | null | undefined,
  path: string,
  value: unknown,
): void {
  writeMeValue(me, path, value, { allowBarePath: true });
  runtime?.notify?.(path);
}

export function writeMeshPairingTokens(
  me: MeLike,
  runtime: RuntimeAdapter | null | undefined,
  tokens: Record<string, MeshPairingTokenRecord>,
): void {
  writeMeshRuntimeValue(me, runtime, 'runtime.mesh.pairing.tokens', tokens);
}

export function registerMeshSurface(
  me: MeLike,
  runtime: RuntimeAdapter | null | undefined,
  surfaceId: string,
  record: MeshSurfaceRecord,
): Record<string, MeshSurfaceRecord> {
  const current = readMeValue(me, 'runtime.mesh.surfaces', { allowBarePath: true }) as Record<string, MeshSurfaceRecord> | undefined;
  const next = {
    ...(current && typeof current === 'object' ? current : {}),
    [surfaceId]: record,
  };

  writeMeshRuntimeValue(me, runtime, 'runtime.mesh.surfaces', next);
  writeMeshRuntimeValue(me, runtime, 'runtime.mesh.currentSurface', surfaceId);
  return next;
}

export function formatPairingExpiry(expiresAt: number, now = Date.now()): string {
  const diff = Math.max(0, Number(expiresAt || 0) - now);
  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return `${minutes}m ${seconds.toString().padStart(2, '0')}s`;
}

export function createTokenRecord(input: {
  namespace: string;
  token: string;
  expression: string;
  origin: string;
  hostSurface: string;
  issuedAt: number;
  expiresAt: number;
  rootName?: string | null;
}): MeshPairingTokenRecord {
  return {
    token: input.token,
    namespace: input.namespace,
    expression: input.expression,
    origin: input.origin,
    hostSurface: input.hostSurface,
    issuedAt: input.issuedAt,
    expiresAt: input.expiresAt,
    usedAt: null,
    usedBy: null,
    localOnly: true,
    transport: isProbablyLocalOrigin(input.origin) ? 'mdns' : 'https',
    rootName: input.rootName || null,
  };
}

export function slugifySurfaceName(raw: string, fallback = 'surface'): string {
  return slugify(raw, fallback);
}
