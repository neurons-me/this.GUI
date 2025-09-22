

import * as React from 'react';
import RightSidebar from './RightSidebar';
import type { RegistryEntry, ResolveCtx } from '@/registry/types';

/**
 * RightSidebar (resolver)
 * -----------------------
 * Declarative spec → React props mapper for the contextual right sidebar.
 *
 * Goals:
 * - Keep it faithful to the underlying component (no opinionated transforms).
 * - Allow JSON/registry usage with a minimal, stable surface.
 * - Leave room for granular styling slots as the component evolves.
 *
 * Notes:
 * - `rightContext` is passed through as-is (owner defines shape).
 * - `drawerWidth` controls the permanent width in desktop mode (if applicable).
 * - Any `*Sx` props are forwarded and may be ignored if the component doesn't implement them yet.
 */

export type RightSidebarSpec = {
  type: 'RightSidebar';
  props?: {
    // Core behavior
    rightContext?: any;
    drawerWidth?: number;

    // Optional control (future-friendly; forwarded if supported)
    open?: boolean;
    onClose?: (...args: any[]) => void;

    // Granular styling (passthrough; component may use or ignore)
    sx?: any;
    paperSx?: any;
    headerSx?: any;
    contentSx?: any;
    footerSx?: any;

    // Misc passthrough
    id?: string;
    className?: string;
    'data-testid'?: string;

    // Allow arbitrary passthrough for future props without changing the spec
    [key: string]: any;
  };
};

const RightSidebarResolver: RegistryEntry = {
  type: 'RightSidebar',
  resolve(spec: RightSidebarSpec, _ctx?: ResolveCtx) {
    const p = spec.props ?? {};

    // Extract known props and avoid leaking resolver-only keys if we add any
    const {
      rightContext,
      drawerWidth,

      open,
      onClose,

      sx,
      paperSx,
      headerSx,
      contentSx,
      footerSx,

      id,
      className,
      'data-testid': dataTestId,

      ...rest
    } = p;

    return (
      <RightSidebar
        rightContext={rightContext}
        drawerWidth={drawerWidth}
        open={open}
        onClose={onClose}
        sx={sx}
        paperSx={paperSx}
        headerSx={headerSx}
        contentSx={contentSx}
        footerSx={footerSx}
        id={id}
        className={className}
        data-testid={dataTestId}
        {...rest}
      />
    );
  },
};

export default RightSidebarResolver;