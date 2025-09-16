// src/themes/icons/Icon.tsx
import * as React from 'react';
import { Suspense } from 'react';
import { useTheme } from '@mui/material/styles';
import { lazyIcon } from './registry';

/**
 * Icon
 * ----
 * Minimal, but smarter color handling so icons react to theme changes.
 *
 * Props:
 *  - name: string  → e.g. 'mui:Settings' | 'lucide:camera'
 *  - iconColor?: string | palette token
 *      * MUI: accepts palette keys ('primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit', 'action', 'disabled')
 *              OR palette paths like 'text.primary', 'action.active'
 *      * Lucide: accepts palette keys/paths too; we resolve to hex via theme and pass as `color`
 *  - color/htmlColor: still supported (if you pass these explicitly we won't override)
 *  - ...rest: forwarded to the underlying icon component
 *
 * Behavior:
 *  - If you pass `iconColor` (preferred) or `color` with a palette token, we map it to the right prop:
 *      * MUI → `color="primary"` for known keys; otherwise `htmlColor="#hex"`
 *      * Lucide → `color="#hex"`
 *  - If you pass a raw CSS color (e.g., "#4caf50"), we forward it directly:
 *      * MUI → `htmlColor`
 *      * Lucide → `color`
 *  - If no color provided, the icon inherits `currentColor` (theme-reactive by default).
 */

const MUI_COLOR_KEYS = new Set<string>([
  'inherit',
  'primary',
  'secondary',
  'error',
  'info',
  'success',
  'warning',
  'action',
  'disabled',
]);

function isCssColor(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  const v = value.trim().toLowerCase();
  return (
    v.startsWith('#') ||
    v.startsWith('rgb(') ||
    v.startsWith('rgba(') ||
    v.startsWith('hsl(') ||
    v.startsWith('hsla(')
  );
}

function getFromPath(obj: any, path: string): any {
  if (!obj || !path) return undefined;
  const parts = String(path).split('.');
  let cur: any = obj;
  for (const p of parts) {
    if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
      cur = cur[p];
    } else {
      return undefined;
    }
  }
  return cur;
}

export type IconProps = {
  name: string;
  fallback?: React.ReactNode;
  /**
   * Preferred way to specify color. Can be a CSS color ("#fff") or a palette token ("primary", "text.secondary").
   */
  iconColor?: string;
  /**
   * Any additional props are forwarded to the underlying icon component (MUI/Lucide).
   */
  [key: string]: any;
};

export default function Icon({ name, fallback = null, iconColor, ...rest }: IconProps) {
  const theme = useTheme();
  const Lazy: React.ComponentType<any> = lazyIcon(name);

  // If consumer already passed exact coloring props, don't interfere.
  const userSpecifiedHtmlColor = Object.prototype.hasOwnProperty.call(rest, 'htmlColor');
  const userSpecifiedColor = Object.prototype.hasOwnProperty.call(rest, 'color') && !iconColor;

  // Decide provider by prefix
  const pref = String(name || '').split(/[:/]/)[0].toLowerCase();
  const isMUI = pref === 'mui';
  const isLucide = pref === 'lucide';

  const desired = iconColor ?? (userSpecifiedColor ? (rest as any).color : undefined);

  let mappedColorProps: Record<string, any> = {};
  if (!userSpecifiedHtmlColor && !userSpecifiedColor && desired) {
    // 1) Raw CSS color → forward directly
    if (isCssColor(desired)) {
      mappedColorProps = isMUI ? { htmlColor: desired } : { color: desired };
    } else {
      // 2) Palette keys / paths
      if (isMUI && MUI_COLOR_KEYS.has(desired)) {
        // Use semantic MUI color prop for reactivity
        mappedColorProps = { color: desired };
      } else {
        // Resolve palette paths and top-level keys safely
        // e.g. 'text.secondary' -> string, 'primary' -> palette object -> use .main
        const candidate =
          getFromPath((theme as any)?.palette, desired) ??
          (((theme as any)?.palette?.[desired]) ? (theme as any).palette[desired] : undefined);

        const resolved =
          (candidate && typeof candidate === 'object' && (candidate.main || candidate.default)) ||
          (typeof candidate === 'string' ? candidate : undefined);

        if (resolved) {
          mappedColorProps = isMUI ? { htmlColor: resolved } : { color: resolved };
        } else {
          // Fallback: forward token as-is
          mappedColorProps = isMUI ? { htmlColor: String(desired) } : { color: String(desired) };
        }
      }
    }
  }

  return (
    <Suspense
      fallback={
        fallback ?? <span style={{ width: 1, height: 1, display: 'inline-block' }} />
      }
    >
      <Lazy {...rest} {...mappedColorProps} />
    </Suspense>
  );
}