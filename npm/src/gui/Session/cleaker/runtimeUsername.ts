export const SESSION_USERNAME_STORAGE_KEY = 'cleaker.session.username.v1';
export const SESSION_SECRET_STORAGE_KEY = 'cleaker.session.secret.v1';
export const SESSION_CREDENTIALS_EVENT = 'cleaker:session:credentials-changed';

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
  const normalizedOrigin = String(origin || '').trim().replace(/\/+$/, '');
  if (!normalizedOrigin || typeof fetch !== 'function') return '';

  try {
    const response = await fetch(`${normalizedOrigin}/__bootstrap`, {
      method: 'GET',
      cache: 'no-store',
      signal,
    });
    const payload = await response.json().catch(() => null);
    const body = payload as
      | {
          namespace?: string;
          value?: { namespace?: string } | null;
        }
      | null;

    return extractUsernameFromNamespace(String(body?.namespace || body?.value?.namespace || ''));
  } catch {
    return '';
  }
}
