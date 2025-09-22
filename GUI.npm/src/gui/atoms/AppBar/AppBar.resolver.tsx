import * as React from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import AppBar from './AppBar';
import type { RegistryEntry } from '@/registry/types';
import { ensureNodeId } from '@/gui/utils/nodeID';

/**
 * Declarative spec for AppBar.
 * This is the JSON-friendly shape your renderer/LLM can emit.
 */
type AppBarSpec = {
  type: 'AppBar';
  props?: {
    /** Content inside the AppBar (text, Toolbar, actions, etc.) */
    children?: React.ReactNode;

    /** Visual props (passthrough to MUI AppBar) */
    position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
    color?:
      | 'inherit'
      | 'default'
      | 'primary'
      | 'secondary'
      | 'transparent'
      | 'info'
      | 'success'
      | 'warning'
      | 'error';
    elevation?: number;
    enableColorOnDark?: boolean;
    sx?: SxProps<Theme>;

    /** Polymorphism passthrough (AppBar extends Paper → supports `component`) */
    component?: React.ElementType;

    /** Common DOM props */
    id?: string;
    className?: string;
    'data-testid'?: string;
  };
};

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