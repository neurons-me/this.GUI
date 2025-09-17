import * as React from 'react';
import AppBar from './AppBar';
import type { RegistryEntry } from '@/registry/types';

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
    sx?: any;

    /** Polymorphism passthrough (AppBar extends Paper → supports `component`) */
    component?: any;

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

    return (
      <AppBar
        position={p.position ?? 'fixed'}
        color={p.color ?? 'default'}
        elevation={p.elevation}
        enableColorOnDark={p.enableColorOnDark}
        component={p.component as any}
        sx={p.sx}
        id={p.id}
        className={p.className}
        data-testid={p['data-testid']}
      >
        {p.children}
      </AppBar>
    );
  },
};

export default AppBarResolver;