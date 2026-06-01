// src/gui/atoms/Toolbar/Toolbar.resolver.tsx
import * as React from 'react';
import Toolbar from './Toolbar';
import type { RegistryEntry } from '@/Registry/types';
import type { SxProps, Theme } from '@mui/material/styles';
import { ensureNodeId } from '@/gui-internals/utils/nodeID';

type ToolbarSpec = {
  type: 'Toolbar';
  props?: {
    /** Children content (text or nodes) */
    children?: React.ReactNode;

    /** MUI props */
    variant?: 'regular' | 'dense';
    disableGutters?: boolean;

    /** Styling / misc */
    sx?: SxProps<Theme>;
    id?: string;
    className?: string;
    'data-testid'?: string;
  };
};

/**
 * ToolbarResolver
 * - Maps JSON-friendly spec → <Toolbar /> props.
 * - Accepts sx/id/className for styling and test hooks.
 */
// =========================================
// Catalog meta (discoverability)
// - Used by CommandPalette / search ("google feel")
// - Kept next to the resolver so it stays self-registered.
// =========================================
export const meta = {
  id: 'atoms.toolbar',
  type: 'Toolbar',
  label: 'Toolbar',
  group: 'Atoms',
  path: ['Navigation'],
  tags: ["toolbar"],
  story: {
    title: 'Atoms/Containers/Toolbar',
    primary: 'atoms-containers-toolbar--playground',
  },
  demoSpec: {
    type: 'Toolbar',
    props: {"children":"Toolbar"},
  },
} as const;

const ToolbarResolver: RegistryEntry = {
  type: 'Toolbar',
  resolve(spec: ToolbarSpec) {
    const p = spec.props ?? {};
    const {
      children,
      variant,
      disableGutters,
      sx,
      className,
    } = p;

    const id = ensureNodeId('Toolbar', p.id);

    return (
      <Toolbar
        variant={variant}
        disableGutters={disableGutters}
        sx={sx}
        id={id}
        className={className}
        data-testid={p['data-testid']}
      >
        {children}
      </Toolbar>
    );
  },
};

export default ToolbarResolver;