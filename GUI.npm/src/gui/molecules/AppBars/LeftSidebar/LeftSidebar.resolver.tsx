// src/components/generics/AppBars/LeftSidebar/LeftSidebar.resolver.tsx
import * as React from 'react';
import type { RegistryEntry, ResolveCtx } from '@/registry/types';
import LeftSidebar from './LeftSidebar';
/**
 * Declarative spec for LeftSidebar.
 * This is the JSON-friendly shape your renderer/LLM can emit.
 */
type RouteItemSpec = {
  label: string;
  href?: string;
  external?: boolean;
  icon?: string | React.ReactNode | React.ComponentType<any>;
  iconColor?: string;
  children?: RouteItemSpec[];
};

type LeftSidebarHeaderSpec = {
  title?: string;
  icon?: string | React.ReactNode | React.ComponentType<any>;
  iconColor?: string;
};

type LeftSidebarSpec = {
  type: 'LeftSidebar';
  props?: {
    // Behavior / layout
    drawerWidth?: number;             // px, default 240 (component default)
    open?: boolean;                   // controlled open (temporary/mobile)
    onCloseId?: string;               // resolves to a function from ctx.handlers[onCloseId]
    // Content
    header?: LeftSidebarHeaderSpec;    // optional header (title + icon)
    drawerLinks?: RouteItemSpec[];    // navigation tree
    // Style passthrough / misc
    sx?: any;
    id?: string;
    className?: string;
    'data-testid'?: string;
  };
};

/**
 * LeftSidebarResolver
 * - Maps a JSON-friendly spec into <LeftSidebar /> props.
 * - Doesn’t make layout decisions (permanent vs temporary): that logic lives in the component
 *   via breakpoints. We just pass data and optional controlled "open"/"onClose".
 * - `onCloseId` lets you bind to a handler from the outside world through the ResolveCtx.
 */
const LeftSidebarResolver: RegistryEntry = {
  type: 'LeftSidebar',
  resolve(spec: LeftSidebarSpec, ctx?: ResolveCtx) {
    const p = spec.props ?? {};
    // Resolve handler by id from ctx (optional)
    const onClose =
      (p.onCloseId && ctx?.handlers && typeof ctx.handlers[p.onCloseId] === 'function')
        ? ctx.handlers[p.onCloseId]
        : undefined;
    return (
      <LeftSidebar
        drawerWidth={p.drawerWidth}
        open={p.open}
        onClose={onClose}
        header={p.header}
        drawerLinks={p.drawerLinks ?? []}
        // style/misc passthrough
        sx={p.sx as any}
        id={p.id}
        className={p.className}
        data-testid={p['data-testid']}
      />
    );
  },
};

export default LeftSidebarResolver;