import * as React from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import Surface from './Surface';
import type { RegistryEntry } from '@/Registry/types';
import { ensureNodeId } from '@/gui/utils/nodeID';
import type { SurfaceResolverSpec as SurfaceSpec } from './Surface.types';

/**
 * SurfaceResolver
 * ---------------
 * - Maps a JSON-friendly spec to <Surface /> props.
 * - Preserves MUI styling (`sx`, `variant`, `elevation`).
 * - Adds IDs and classNames for runtime targeting.
 */
// =========================================
// Catalog meta (discoverability)
// - Used by CommandPalette / search ("google feel")
// - Kept next to the resolver so it stays self-registered.
// =========================================
export const meta = {
  id: 'atoms.surface',
  type: 'Surface',
  label: 'Surface',
  group: 'Atoms',
  path: ['Layout'],
  tags: ["surface"],
  story: {
    title: 'Atoms/Surface',
    primary: 'atoms-surface--elevation',
  },
  demoSpec: {
    type: 'Surface',
    props: {"children":"Surface"},
  },
} as const;

const SurfaceResolver: RegistryEntry = {
  type: 'Surface',
  resolve(spec: SurfaceSpec) {
    const p = spec.props ?? {};
    const rootProps: any = {
      variant: p.variant ?? 'elevation',
      elevation: p.elevation ?? 1,
      square: p.square ?? false,
      sx: p.sx,
      id: ensureNodeId('surface', p.id),
      className: p.className,
      'data-testid': p['data-testid'],
    };

    return (
      <Surface {...rootProps}>
        {p.children}
      </Surface>
    );
  },
};

export default SurfaceResolver;