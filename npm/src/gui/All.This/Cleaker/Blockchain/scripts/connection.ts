import React from "react";

export type ConnectionStatus = 'idle' | 'connecting' | 'online' | 'offline' | 'declined';
export type UsernameStatus = 'idle' | 'checking' | 'exists' | 'available' | 'error';

export function normalizeBlockchain(raw: string): string {
  return String(raw || '').trim()
    .replace(/^https?:\/\//i, '')
    .replace(/\/$/, '');
}

export function getBlockchainProtocol(host: string): 'http' | 'https' {
  const normalized = String(host || '').trim().toLowerCase();
  const isLocalhost = /^(localhost|127(?:\.\d{1,3}){3}|0\.0\.0\.0)(:\d+)?$/.test(normalized);
  const isLocalDomain = /\.local(:\d+)?$/.test(normalized);
  return isLocalhost || isLocalDomain ? 'http' : 'https';
}

export function toBlockchainBaseUrl(raw: string): string {
  const host = normalizeBlockchain(raw);
  if (!host) return '';
  return `${getBlockchainProtocol(host)}://${host}`;
}

function classifyConnectionError(error: unknown): ConnectionStatus {
  const message = error instanceof Error ? error.message.toLowerCase() : String(error || '').toLowerCase();
  if (message.includes('cors') || message.includes('failed to fetch')) {
    return 'declined';
  }
  return 'offline';
}

function useEndpointPresence(origin: string, debounceMs: number) {
  const host = normalizeBlockchain(origin);
  const baseUrl = toBlockchainBaseUrl(origin);
  const [status, setStatus] = React.useState<ConnectionStatus>('idle');

  React.useEffect(() => {
    if (!host || !baseUrl) {
      setStatus('idle');
      return;
    }

    let cancelled = false;
    setStatus('connecting');

    const handle = window.setTimeout(() => {
      fetch(`${baseUrl}/`)
        .then((response) => {
          if (cancelled) return;
          setStatus(response.ok ? 'online' : 'offline');
        })
        .catch((error) => {
          if (cancelled) return;
          setStatus(classifyConnectionError(error));
        });
    }, debounceMs);

    return () => {
      cancelled = true;
      window.clearTimeout(handle);
    };
  }, [baseUrl, debounceMs, host]);

  return {
    host,
    baseUrl,
    status,
  };
}

export function useSovereignPresence(params: {
  parent: string;
  local: string;
  debouncePingMs?: number;
}): {
  parentHost: string;
  parentBaseUrl: string;
  parentStatus: ConnectionStatus;
  localHost: string;
  localBaseUrl: string;
  localStatus: ConnectionStatus;
} {
  const { parent, local, debouncePingMs = 400 } = params;
  const parentPresence = useEndpointPresence(parent, debouncePingMs);
  const localPresence = useEndpointPresence(local, debouncePingMs);

  return {
    parentHost: parentPresence.host,
    parentBaseUrl: parentPresence.baseUrl,
    parentStatus: parentPresence.status,
    localHost: localPresence.host,
    localBaseUrl: localPresence.baseUrl,
    localStatus: localPresence.status,
  };
}

export function useBlockchainConnection(params: {
  blockchain: string;
  username: string;
  me: any;
  debouncePingMs?: number;
  debounceUserMs?: number;
}): {
  blockchainHost: string;
  blockchainBaseUrl: string;
  connectionStatus: ConnectionStatus;
  usernameStatus: UsernameStatus;
} {
  const {
    blockchain,
    username,
    debouncePingMs = 400,
    debounceUserMs = 350,
  } = params;

  const presence = useEndpointPresence(blockchain, debouncePingMs);
  const [usernameStatus, setUsernameStatus] = React.useState<UsernameStatus>('idle');

  React.useEffect(() => {
    if (presence.status !== 'online' || !username || !presence.baseUrl) {
      setUsernameStatus('idle');
      return;
    }

    let cancelled = false;
    setUsernameStatus('checking');

    try {
      params.me?.['@']?.(username);
    } catch {
      // Ignore validation errors while the UI is still typing.
    }

    const handle = window.setTimeout(() => {
      fetch(`${presence.baseUrl}/users/${encodeURIComponent(username)}`)
        .then((response) => {
          if (cancelled) return;
          if (response.status === 200) setUsernameStatus('exists');
          else if (response.status === 404) setUsernameStatus('available');
          else setUsernameStatus('error');
        })
        .catch(() => {
          if (!cancelled) setUsernameStatus('error');
        });
    }, debounceUserMs);

    return () => {
      cancelled = true;
      window.clearTimeout(handle);
    };
  }, [debounceUserMs, params.me, presence.baseUrl, presence.status, username]);

  return {
    blockchainHost: presence.host,
    blockchainBaseUrl: presence.baseUrl,
    connectionStatus: presence.status,
    usernameStatus,
  };
}
