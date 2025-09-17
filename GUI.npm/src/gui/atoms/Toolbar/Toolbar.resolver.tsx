// src/gui/atoms/Toolbar/Toolbar.resolver.tsx
import * as React from 'react';
import Toolbar from './Toolbar';
import type { RegistryEntry } from '@/registry/types';

type ToolbarSpec = {
  type: 'Toolbar';
  props?: {
    /** Children content (text or nodes) */
    children?: React.ReactNode;

    /** MUI props */
    variant?: 'regular' | 'dense';
    disableGutters?: boolean;

    /** Styling / misc */
    sx?: any;
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
const ToolbarResolver: RegistryEntry = {
  type: 'Toolbar',
  resolve(spec: ToolbarSpec) {
    const p = spec.props ?? {};
    const {
      children,
      variant,
      disableGutters,
      sx,
      id,
      className,
    } = p;

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