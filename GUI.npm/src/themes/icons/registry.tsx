//src/themes/icons/registry.tsx
import * as React from 'react';
import lucidePack, { LUCIDE_PREFIX, getLucideIcon, normalizeLucideName } from './packs/Lucide';
import muiPack, { MUI_PREFIX } from './packs/Material';

export type LazyIconComp = React.LazyExoticComponent<React.ComponentType<any>>;

export interface IconProvider {
  key: string;
  resolve: (name: string) => LazyIconComp;
  exists?: (name: string) => boolean;
}

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
function emptyIconFactory(name: string = 'unknown'): LazyIconComp {
  type PlaceholderProps = {
    size?: number;
    color?: string;
    style?: React.CSSProperties;
    title?: string;
    [key: string]: any;
  };
  const Placeholder: React.FC<PlaceholderProps> = ({ size = 20, color = 'currentColor', style, title, ...rest }) => (
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
  const Lazy = React.lazy(() => Promise.resolve({ default: Placeholder }));
  return Lazy as LazyIconComp;
}

// ---------- helpers ----------
const hasPrefix = (raw: string, prefix: string): boolean =>
  raw.toLowerCase().startsWith(prefix.toLowerCase() + ':') ||
  raw.toLowerCase().startsWith(prefix.toLowerCase() + '/');

const stripPrefix = (raw: string, prefix: string): string =>
  raw.replace(new RegExp(`^${prefix}[:/.-]\\s*`, 'i'), '');

// ---------- built-in providers ----------
/**
 * Lucide provider adapter
 *  - Dynamically import lucide-react and resolve the named export at runtime.
 */
const lucideProvider: IconProvider = {
  key: LUCIDE_PREFIX,
  resolve: (rawName: string) => {
    const key = stripPrefix(rawName, LUCIDE_PREFIX);
    const pascal = normalizeLucideName(key);
    const Lazy = React.lazy(async () => {
      const mod: any = await import('lucide-react');
      const lib: Record<string, any> = (typeof mod.default === 'object' && mod.default) ? mod.default : mod;
      const Comp = lib[pascal] ?? lib.HelpCircle;
      return { default: Comp };
    });
    return Lazy as LazyIconComp;
  },
  exists: (name: string) => {
    // Best-effort check using the already-imported pack (fast path)
    try {
      const Comp = getLucideIcon(stripPrefix(name, LUCIDE_PREFIX));
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
const muiProvider: IconProvider = {
  key: MUI_PREFIX,
  resolve: (rawName: string) => {
    const Comp = muiPack.get(rawName) as LazyIconComp | undefined;
    return Comp ?? emptyIconFactory(rawName);
  },
  exists: (name: string) => Boolean(muiPack.has?.(name)),
};

// ---------- pluggable registry ----------
const _providers: Map<string, IconProvider> = new Map([
  [lucideProvider.key, lucideProvider],
  [muiProvider.key, muiProvider],
]);

export function registerIconProvider(key: string, provider: IconProvider): void {
  if (!key || !provider || typeof provider.resolve !== 'function') {
    throw new Error('[icons/registry] registerIconProvider(key, { resolve }) requires a valid resolver');
  }
  _providers.set(String(key).toLowerCase(), { ...provider, key });
}

export function getRegisteredProviders(): string[] {
  return Array.from(_providers.keys());
}

// ---------- main resolver ----------
export function lazyIcon(name: string): LazyIconComp {
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

export const PROVIDERS: { lucide: string; mui: string } = {
  lucide: lucideProvider.key,
  mui: muiProvider.key,
};

export { lucidePack, muiPack };
export default { lazyIcon, registerIconProvider, getRegisteredProviders, PROVIDERS };