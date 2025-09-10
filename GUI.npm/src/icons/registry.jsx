// src/icons/registry.jsx
import React from 'react';
import lucidePack, { LUCIDE_PREFIX, getLucideIcon } from './packs/lucide';
import muiPack, { MUI_PREFIX } from './packs/Material';

/**
 * Icon registry (pluggable)
 * -------------------------
 * Providers supported out of the box:
 *  - lucide:*  → lucide-react (tree-shakable, lightweight)
 *  - mui:*     → @mui/icons-material (richer set; heavier)
 *
 * You can register more providers from your app:
 *   import { registerIconProvider } from '@this-gui/icons/registry';
 *   registerIconProvider('custom', {
 *     resolve: (name) => React.lazy(() => import('./MyIcon').then(m => ({ default: m.MyIcon }))),
 *     // optional: exists(name): boolean
 *   });
 *
 * All resolvers return a React element type (via React.lazy) so consumers can
 * render them in a Suspense boundary uniformly.
 */

// ---------- fallback / placeholder ----------
function emptyIconFactory(name = 'unknown') {
  const Placeholder = ({ size = 20, color = 'currentColor', style, title, ...rest }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title || undefined}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <circle cx="12" cy="12" r="9" opacity="0.25" />
      <path d="M9.5 9a3 3 0 0 1 5 2c0 2-3 2-3 4" />
      <circle cx="12" cy="17" r="0.75" />
    </svg>
  );
  Placeholder.displayName = `IconPlaceholder(${String(name)})`;
  return React.lazy(() => Promise.resolve({ default: Placeholder }));
}

// ---------- helpers ----------
const hasPrefix = (raw, prefix) => raw.toLowerCase().startsWith(prefix.toLowerCase() + ':')
  || raw.toLowerCase().startsWith(prefix.toLowerCase() + '/');

const stripPrefix = (raw, prefix) =>
  raw.replace(new RegExp(`^${prefix}[:/.-]\\s*`, 'i'), '');

// ---------- built-in providers ----------
/**
 * Lucide provider adapter
 *  - getLucideIcon(name) returns a *component* (not lazy), so wrap it.
 */
const lucideProvider = {
  key: LUCIDE_PREFIX,
  resolve: (rawName) => {
    const Comp = getLucideIcon(stripPrefix(rawName, LUCIDE_PREFIX));
    if (!Comp) return emptyIconFactory(rawName);
    return React.lazy(() => Promise.resolve({ default: Comp }));
  },
  exists: (name) => {
    const key = stripPrefix(name, LUCIDE_PREFIX);
    try {
      const Comp = getLucideIcon(key);
      return Boolean(Comp);
    } catch {
      return false;
    }
  },
};

/**
 * MUI provider adapter
 *  - Material pack already returns React.lazy components via get(name)
 */
const muiProvider = {
  key: MUI_PREFIX,
  resolve: (rawName) => {
    const Comp = muiPack.get(rawName);
    return Comp || emptyIconFactory(rawName);
  },
  exists: (name) => !!muiPack.has?.(name),
};

// ---------- pluggable registry ----------
const _providers = new Map([
  [lucideProvider.key, lucideProvider],
  [muiProvider.key, muiProvider],
]);

export function registerIconProvider(key, provider) {
  if (!key || !provider || typeof provider.resolve !== 'function') {
    throw new Error('[icons/registry] registerIconProvider(key, { resolve }) requires a valid resolver');
  }
  _providers.set(String(key).toLowerCase(), { key, ...provider });
}

export function getRegisteredProviders() {
  return Array.from(_providers.keys());
}

// ---------- main resolver ----------
export function lazyIcon(name) {
  const raw = String(name || '');
  if (!raw) return emptyIconFactory('empty');

  // Try prefixed first (e.g., mui:CameraAlt, lucide:home)
  for (const [key, provider] of _providers) {
    if (hasPrefix(raw, key)) {
      try {
        return provider.resolve(raw);
      } catch {
        return emptyIconFactory(raw);
      }
    }
  }

  // No prefix → choose a default order: prefer MUI (richer set), then Lucide
  try {
    return muiProvider.resolve(raw);
  } catch {
    try {
      return lucideProvider.resolve(raw);
    } catch {
      return emptyIconFactory(raw);
    }
  }
}

export const PROVIDERS = {
  lucide: lucideProvider.key,
  mui: muiProvider.key,
};

export { lucidePack, muiPack };
export default { lazyIcon, registerIconProvider, getRegisteredProviders, PROVIDERS };