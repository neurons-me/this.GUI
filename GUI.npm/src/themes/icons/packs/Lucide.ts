// src/icons/packs/lucide.js
// Unified Lucide adapter for This.GUI icon registry.
// Usage:
//   import { getLucideIcon } from '../packs/lucide';
//   const Camera = getLucideIcon('Camera'); // or 'lucide:Camera'
//   <Camera size={18} />
import * as Lucide from 'lucide-react';
const LucideLib: Record<string, any> = ((Lucide as any)?.default ?? Lucide) as any;
import { FC } from 'react';

const iconCache = new Map<string, LucideIconComp>();

export const LUCIDE_PREFIX = 'lucide';
export type LucideIconComp = FC<any>;

/**
 * Normalize user-provided names to Lucide's PascalCase exports.
 * Accepts formats like:
 *  - "Camera", "lucide:Camera"
 *  - "video-off", "lucide/video-off"
 *  - "video off", "Lucide:videoOff"
 */
export function normalizeLucideName(name: string = ''): string {
  if (typeof name !== 'string') return '';
  // strip optional prefix and separators
  let n = name.trim();
  n = n.replace(/^lucide[:/.-]\s*/i, '');      // remove "lucide:" or "lucide/" etc
  n = n.replace(/[^a-zA-Z0-9]+/g, ' ');        // keep alnum, collapse others to spaces
  // PascalCase it (Video Off -> VideoOff)
  n = n
    .split(' ')
    .filter(Boolean)
    .map((seg) => seg.charAt(0).toUpperCase() + seg.slice(1))
    .join('');
  return n;
}

/**
 * Returns the Lucide React component for a given name. Falls back to HelpCircle.
 * The returned component can be used directly as a React component.
 */
export function getLucideIcon(name: string): LucideIconComp {
  const key = normalizeLucideName(name);
  if (!key) return LucideLib.HelpCircle;
  if (iconCache.has(key)) return iconCache.get(key)!;
  const Comp = typeof LucideLib[key] === 'function' ? LucideLib[key] : LucideLib.HelpCircle;
  iconCache.set(key, Comp);
  return Comp;
}

/**
 * Boolean helper: does this icon exist in the Lucide map?
 */
export function hasLucideIcon(name: string): boolean {
  const key = normalizeLucideName(name);
  return Boolean(key && typeof LucideLib[key] === 'function');
}

/**
 * List all available Lucide icon export names (PascalCase).
 * Useful for building pickers or debugging. Keep in mind it’s a big list.
 */
export const lucideIconNames: string[] = Object.keys(LucideLib).filter((k) => /^[A-Z]/.test(k));

const lucidePack = {
  prefix: LUCIDE_PREFIX,
  get: getLucideIcon,
  has: hasLucideIcon,
  names: lucideIconNames,
};

export default lucidePack;