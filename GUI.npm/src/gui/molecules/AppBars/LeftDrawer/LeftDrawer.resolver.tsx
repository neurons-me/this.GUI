// src/components/generics/AppBars/LeftDrawer/LeftDrawer.resolver.tsx
import * as React from 'react';
import type { RegistryEntry, ResolveCtx } from '@/registry/types';
import LeftDrawer from './LeftDrawer';
/**
 * Declarative spec for LeftDrawer.
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

type LeftDrawerHeaderSpec = {
  title?: string;
  icon?: string | React.ReactNode | React.ComponentType<any>;
  iconColor?: string;
};

type LeftDrawerSpec = {
  type: 'LeftDrawer';
  props?: {
    // Behavior / layout
    drawerWidth?: number;             // px, default 240 (component default)
    open?: boolean;                   // controlled open (temporary/mobile)
    onCloseId?: string;               // resolves to a function from ctx.handlers[onCloseId]
    // Content
    header?: LeftDrawerHeaderSpec;    // optional header (title + icon)
    drawerLinks?: RouteItemSpec[];    // navigation tree
    // Style passthrough / misc
    sx?: any;
    id?: string;
    className?: string;
    'data-testid'?: string;
  };
};

/**
 * LeftDrawerResolver
 * - Maps a JSON-friendly spec into <LeftDrawer /> props.
 * - Doesn’t make layout decisions (permanent vs temporary): that logic lives in the component
 *   via breakpoints. We just pass data and optional controlled "open"/"onClose".
 * - `onCloseId` lets you bind to a handler from the outside world through the ResolveCtx.
 */
const LeftDrawerResolver: RegistryEntry = {
  type: 'LeftDrawer',
  resolve(spec: LeftDrawerSpec, ctx?: ResolveCtx) {
    const p = spec.props ?? {};
    // Resolve handler by id from ctx (optional)
    const onClose =
      (p.onCloseId && ctx?.handlers && typeof ctx.handlers[p.onCloseId] === 'function')
        ? ctx.handlers[p.onCloseId]
        : undefined;
    return (
      <LeftDrawer
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

export default LeftDrawerResolver;