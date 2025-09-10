// src/icons/packs/lucide.js
// Unified Lucide adapter for This.GUI icon registry.
// Usage:
//   import { getLucideIcon } from '../packs/lucide';
//   const Camera = getLucideIcon('Camera'); // or 'lucide:Camera'
//   <Camera size={18} />
import * as Lucide from 'lucide-react';
export const LUCIDE_PREFIX = 'lucide';

/**
 * Normalize user-provided names to Lucide's PascalCase exports.
 * Accepts formats like:
 *  - "Camera", "lucide:Camera"
 *  - "video-off", "lucide/video-off"
 *  - "video off", "Lucide:videoOff"
 */
export function normalizeLucideName(name = '') {
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
export function getLucideIcon(name) {
  const key = normalizeLucideName(name);
  // Prefer exact match; otherwise fallback to HelpCircle
  return (key && Lucide[key]) || Lucide.HelpCircle || (() => null);
}

/**
 * Boolean helper: does this icon exist in the Lucide map?
 */
export function hasLucideIcon(name) {
  const key = normalizeLucideName(name);
  return Boolean(key && Lucide[key]);
}

/**
 * List all available Lucide icon export names (PascalCase).
 * Useful for building pickers or debugging. Keep in mind it’s a big list.
 */
export const lucideIconNames = Object.keys(Lucide).filter((k) => /^[A-Z]/.test(k));
export default {
  prefix: LUCIDE_PREFIX,
  get: getLucideIcon,
  has: hasLucideIcon,
  names: lucideIconNames,
};