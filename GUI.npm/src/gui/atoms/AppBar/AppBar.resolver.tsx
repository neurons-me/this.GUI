import * as React from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import AppBar from './AppBar';
import type { RegistryEntry } from '@/registry/types';
import { ensureNodeId } from '@/gui/utils/nodeID';
import type { AppBarResolverSpec as AppBarSpec } from './AppBar.types';

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
    const rootProps: any = {
      position: p.position ?? 'fixed',
      color: p.color ?? 'default',
      elevation: p.elevation,
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