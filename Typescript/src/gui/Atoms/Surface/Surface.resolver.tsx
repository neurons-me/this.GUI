import * as React from 'react';
import Surface from './Surface';
import type { RegistryEntry } from '@/Registry/types';
import { ensureNodeId } from '@/gui-internals/utils/nodeID';
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
    const {
      children,
      id,
      className,
      ...rest
    } = p;

    return (
      <Surface
        {...rest}
        variant={p.variant ?? 'default'}
        elevation={p.elevation ?? 1}
        square={p.square ?? false}
        id={ensureNodeId('surface', id)}
        className={className}
        data-testid={p['data-testid']}
      >
        {children}
      </Surface>
    );
  },
};

export default SurfaceResolver;
