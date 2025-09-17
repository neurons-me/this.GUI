// src/components/generics/AppBars/NavBar/NavBar.resolver.tsx
import * as React from 'react';
import NavBar from './NavBar';
import type { RegistryEntry, ResolveCtx } from '@/registry/types';

/** Declarative shape the renderer/LLM can emit for a NavBar */
type NavBarLinkChildSpec = {
  label: string;
  href?: string;
  external?: boolean;
  icon?: string;
  iconColor?: string;
};

type NavBarLinkSpec = {
  label: string;
  href?: string;
  external?: boolean;
  icon?: string;
  iconColor?: string;
  children?: NavBarLinkChildSpec[];
};

type NavBarSpec = {
  type: 'NavBar';
  props?: {
    title?: string;
    logo?: string;
    NavBarLinks?: NavBarLinkSpec[];
    showMenuButton?: boolean;
    showThemeToggle?: boolean;
    homeTo?: string;
    position?: 'fixed' | 'static' | 'sticky';

    /** Optional event id to resolve from ctx.actions (e.g., 'openLeftDrawer') */
    onMenuClickId?: string;

    /** Pass-through styling slot (sx forwarded to AppBar/Toolbar usage inside) */
    sx?: any;

    /** Misc passthroughs */
    id?: string;
    className?: string;
    'data-testid'?: string;
  };
};

/**
 * NavBarResolver
 * - Maps a JSON-friendly spec → real <NavBar />.
 * - Handlers can be injected from ResolveCtx via `onMenuClickId`.
 */
const NavBarResolver: RegistryEntry = {
  type: 'NavBar',
  resolve(spec: NavBarSpec, ctx?: ResolveCtx) {
    const p = spec.props ?? {};

    // Resolve optional handler from ctx if provided
    const onMenuClick =
      (p.onMenuClickId && ctx?.actions && typeof ctx.actions[p.onMenuClickId] === 'function')
        ? ctx.actions[p.onMenuClickId]
        : undefined;

    return (
      <NavBar
        title={p.title ?? 'neurons.me'}
        logo={p.logo ?? 'https://neurons.me/neurons.me.png'}
        NavBarLinks={p.NavBarLinks ?? []}
        showMenuButton={p.showMenuButton ?? false}
        onMenuClick={onMenuClick}
        showThemeToggle={p.showThemeToggle ?? true}
        homeTo={p.homeTo ?? '/'}
        position={p.position ?? 'fixed'}
        // passthroughs
        // @ts-expect-error: NavBar currently doesn't declare `sx` on its props; ignore if you don’t support it.
        sx={p.sx}
        id={p.id}
        className={p.className}
        data-testid={p['data-testid']}
      />
    );
  },
};

export default NavBarResolver;