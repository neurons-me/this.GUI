import type { CleakerSurfaceEntry } from './surfaceModel';

export const SESSION_USERNAME_STORAGE_KEY = 'cleaker.session.username.v1';
export const SESSION_SECRET_STORAGE_KEY = 'cleaker.session.secret.v1';
export const SESSION_CREDENTIALS_EVENT = 'cleaker:session:credentials-changed';

export type CleakerBootstrapInfo = {
  namespace: string;
  host: string;
  apiOrigin: string;
  resolverHostName: string;
  resolverDisplayName: string;
  surfaceEntry: CleakerSurfaceEntry | null;
};

function isNetworkOrigin(origin: string): boolean {
  return /^https?:\/\//i.test(String(origin || '').trim());
}

function trimRuntimeValue(raw: string): string {
  return String(raw || '')
    .trim()
    .toLowerCase()
    .replace(/^@+/, '')
    .replace(/^me:\/\//, '')
    .replace(/\/+$/, '')
    .replace(/:\d+$/, '');
}

export function sanitizeCleakerUsername(raw: string): string {
  return trimRuntimeValue(raw).replace(/\/.*$/, '');
}

export function extractUsernameFromNamespace(namespace: string): string {
  const normalized = trimRuntimeValue(namespace).replace(/\/.*$/, '');
  if (!normalized) return '';

  const labels = normalized.split('.').filter(Boolean);
  if (labels.length >= 3) return labels[0] || '';
  if (normalized.endsWith('.cleaker.me')) {
    return normalized.slice(0, -'.cleaker.me'.length).replace(/\.+$/, '');
  }
  if (normalized.endsWith('.localhost')) {
    return normalized.slice(0, -'.localhost'.length).replace(/\.+$/, '');
  }
  return '';
}

export function extractUsernameFromHost(host: string): string {
  const normalized = trimRuntimeValue(host);
  if (!normalized) return '';

  if (normalized === 'cleaker.me' || normalized === 'localhost') return '';
  return extractUsernameFromNamespace(normalized);
}

export function readUsernameFromWindow(): string {
  if (typeof window === 'undefined') return '';

  try {
    const meRef: any = (window as any).me;
    if (typeof meRef === 'function') {
      const value = meRef('@') || meRef('username') || '';
      return sanitizeCleakerUsername(String(value || ''));
    }

    if (meRef && typeof meRef.username === 'function') {
      return sanitizeCleakerUsername(String(meRef.username() || ''));
    }

    if (meRef && typeof meRef.getMe === 'function') {
      const identity = meRef.getMe();
      return sanitizeCleakerUsername(String(identity?.username || ''));
    }
  } catch {
    // Ignore runtime integration failures.
  }

  return '';
}

export function readUsernameFromLocation(): string {
  if (typeof window === 'undefined') return '';
  return extractUsernameFromHost(window.location.hostname || window.location.host || '');
}

export function readUsernameFromStorage(): string {
  if (typeof window === 'undefined') return '';

  try {
    return sanitizeCleakerUsername(String(localStorage.getItem(SESSION_USERNAME_STORAGE_KEY) || ''));
  } catch {
    return '';
  }
}

export async function readUsernameFromBootstrap(origin: string, signal?: AbortSignal): Promise<string> {
  const payload = await readCleakerBootstrap(origin, signal);
  return extractUsernameFromNamespace(String(payload?.namespace || ''));
}

export async function readCleakerBootstrap(origin: string, signal?: AbortSignal): Promise<CleakerBootstrapInfo | null> {
  const normalizedOrigin = String(origin || '').trim().replace(/\/+$/, '');
  if (!normalizedOrigin || !isNetworkOrigin(normalizedOrigin) || typeof fetch !== 'function') return null;

  try {
    const response = await fetch(`${normalizedOrigin}/__bootstrap`, {
      method: 'GET',
      cache: 'no-store',
      signal,
    });
    const payload = await response.json().catch(() => null);
    const body = payload as
      | {
          namespace?: string | { me?: string; host?: string } | null;
          host?: string;
          apiOrigin?: string;
          resolverHostName?: string;
          resolverDisplayName?: string;
          surfaceEntry?: CleakerSurfaceEntry | null;
          target?: {
            namespace?: { me?: string; host?: string } | null;
          } | null;
          value?: { namespace?: string } | null;
        }
      | null;

    const namespace =
      String(
        body?.namespace && typeof body.namespace === 'object'
          ? body.namespace.me
          : body?.namespace || body?.target?.namespace?.me || body?.value?.namespace || ''
      ).trim();

    return {
      namespace,
      host: String(body?.host || body?.target?.namespace?.host || '').trim(),
      apiOrigin: String(body?.apiOrigin || normalizedOrigin).trim(),
      resolverHostName: String(body?.resolverHostName || '').trim(),
      resolverDisplayName: String(body?.resolverDisplayName || '').trim(),
      surfaceEntry: body?.surfaceEntry || null,
    };
  } catch {
    return null;
  }
}
