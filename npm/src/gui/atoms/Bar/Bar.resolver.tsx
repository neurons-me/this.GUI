import * as React from 'react';
// (types not needed in resolver)
import AppBar from './Bar';
import type { RegistryEntry } from '@/Registry/types';
import { ensureNodeId } from '@/gui/utils/nodeID';
import type { AppBarResolverSpec as AppBarSpec } from './Bar.types';

// =========================================
// Catalog meta (discoverability)
// - Used by CommandPalette / search ("google feel")
// - Kept next to the resolver so it stays self-registered.
// =========================================
export const meta = {
  id: 'atoms.appbar',
  type: 'AppBar',
  label: 'AppBar',
  group: 'Atoms',
  path: ['Navigation'],
  tags: ['appbar', 'bar', 'topbar', 'navigation', 'header', 'mui'],
  story: {
    title: 'Atoms/Containers/Bar',
    primary: 'atoms-containers-bar--playground',
  },
  demoSpec: {
    type: 'AppBar',
    props: {
      variant: 'mui',
      position: 'fixed',
      children: 'AppBar',
    },
  },
} as const;

/**
 * AppBarResolver
 * - Maps a JSON-friendly spec to <AppBar /> props.
 * - Keeps MUI polymorphism intact (`component` passthrough).
 * - Allows `sx`, ids and className for styling & targeting.
 */
const AppBarResolver: RegistryEntry = {
  type: 'AppBar',
  resolve(spec: AppBarSpec) {
    const p = spec.props ?? {};
    const variant = typeof (p as any).variant === 'string' ? (p as any).variant : 'mui';
    const rootProps: any = {
      // semantic preset
      variant,

      // defaults depend on variant
      position: p.position ?? (variant === 'glass' ? 'fixed' : 'fixed'),
      color: p.color ?? (variant === 'glass' ? 'transparent' : 'default'),
      elevation: p.elevation ?? (variant === 'glass' ? 0 : undefined),
      enableColorOnDark: p.enableColorOnDark,
      sx: p.sx,
      id: ensureNodeId('appbar', p.id),
      className: p.className,
      'data-testid': p['data-testid'],
    };

    if (p.component) {
      rootProps.component = p.component;
    }

    return (
      <AppBar {...rootProps}>
        {p.children}
      </AppBar>
    );
  },
};

export default AppBarResolver;