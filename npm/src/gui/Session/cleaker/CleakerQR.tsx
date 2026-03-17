import React, { useEffect, useMemo, useState } from 'react';
import QR, { type QREmbedMode } from '../me/QR';

const DEFAULT_ENDPOINT = 'https://cleaker.me';
const SESSION_USERNAME_STORAGE_KEY = 'cleaker.session.username.v1';
const SESSION_CREDENTIALS_EVENT = 'cleaker:session:credentials-changed';

export type CleakerQRProps = {
  /** Optional direct value override. If provided, it wins. */
  value?: string;
  /** Optional username to build https://<username>.cleaker.me */
  username?: string;
  /** Optional endpoint override (defaults to https://cleaker.me) */
  endpoint?: string;
  /** Overall rendered size in px */
  size?: number;
  /** Background color */
  bg?: string;
  /** Foreground color */
  fg?: string;
  /** Rounded corner radius (px) for modules (0 = square) */
  moduleRadius?: number;
  /** Quiet zone in modules */
  quietZone?: number;
  /** Error correction level */
  ecc?: 'L' | 'M' | 'Q' | 'H';
  /** Optional ASCII art label to show above the QR (not inside the QR) */
  asciiHeader?: string;
  /** Optional small caption to show under the QR */
  caption?: string;
  /** Embed mode */
  embedMode?: QREmbedMode;
  /** Embed scale */
  embedScale?: number;
  /** Embedded ASCII */
  embedAscii?: string;
  /** Embedded bitmap */
  embedBitmap?: string[];
  /** Additional className */
  className?: string;
  /** Inline style */
  style?: React.CSSProperties;
};

function sanitizeUsername(raw: string): string {
  return String(raw || '')
    .trim()
    .toLowerCase()
    .replace(/^me:\/\//, '')
    .replace(/\/+$/, '')
    .replace(/:\d+$/, '')
    .replace(/[^a-z0-9._-]/g, '');
}

function readUsernameFromWindow(): string {
  if (typeof window === 'undefined') return '';
  try {
    const meRef: any = (window as any).me;
    if (typeof meRef === 'function') {
      const v = meRef('@') || meRef('username') || '';
      return sanitizeUsername(String(v || ''));
    }
    if (meRef && typeof meRef.username === 'function') {
      return sanitizeUsername(String(meRef.username() || ''));
    }
  } catch {}
  return '';
}

function readUsernameFromStorage(): string {
  if (typeof window === 'undefined') return '';
  try {
    return sanitizeUsername(String(localStorage.getItem(SESSION_USERNAME_STORAGE_KEY) || ''));
  } catch {}
  return '';
}

function buildCleakerUrl(username: string, endpoint: string): string {
  const base = String(endpoint || DEFAULT_ENDPOINT).trim().replace(/\/+$/, '');
  if (!username) return base || DEFAULT_ENDPOINT;
  let host = base.replace(/^https?:\/\//i, '').replace(/\/.*$/, '').replace(/\/+$/, '');
  if (!host) return DEFAULT_ENDPOINT;
  const scheme = /^https:\/\//i.test(base) ? 'https://' : 'http://';
  return `${scheme}${username}.${host}`;
}

export default function CleakerQR({
  value,
  username,
  endpoint = DEFAULT_ENDPOINT,
  size = 136,
  bg = 'var(--qr-bg, transparent)',
  fg = 'var(--qr-fg, currentColor)',
  moduleRadius = 0,
  quietZone = 4,
  ecc = 'H',
  asciiHeader,
  caption,
  embedMode = 'positive-overlay',
  embedScale = 0.36,
  embedAscii,
  embedBitmap,
  className,
  style,
}: CleakerQRProps) {
  const [resolvedUsername, setResolvedUsername] = useState<string>(() => {
    const direct = sanitizeUsername(username || '');
    if (direct) return direct;
    const fromWindow = readUsernameFromWindow();
    if (fromWindow) return fromWindow;
    return readUsernameFromStorage();
  });

  useEffect(() => {
    const next = sanitizeUsername(username || '');
    if (next) setResolvedUsername(next);
  }, [username]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const sync = () => {
      const fromWindow = readUsernameFromWindow();
      const fromStorage = readUsernameFromStorage();
      const next = fromWindow || fromStorage || '';
      if (next && next !== resolvedUsername) setResolvedUsername(next);
      if (!next && resolvedUsername) setResolvedUsername('');
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key === SESSION_USERNAME_STORAGE_KEY) sync();
    };
    const onSession = () => sync();
    window.addEventListener('storage', onStorage);
    window.addEventListener(SESSION_CREDENTIALS_EVENT, onSession as any);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener(SESSION_CREDENTIALS_EVENT, onSession as any);
    };
  }, [resolvedUsername]);

  const qrValue = useMemo(() => {
    if (value) return String(value);
    return buildCleakerUrl(resolvedUsername, endpoint);
  }, [value, resolvedUsername, endpoint]);

  return (
    <QR
      value={qrValue}
      size={size}
      bg={bg}
      fg={fg}
      moduleRadius={moduleRadius}
      quietZone={quietZone}
      ecc={ecc}
      caption={caption}
      asciiHeader={asciiHeader}
      embedMode={embedMode}
      embedScale={embedScale}
      embedAscii={embedAscii}
      embedBitmap={embedBitmap}
      className={className}
      style={style}
    />
  );
}
