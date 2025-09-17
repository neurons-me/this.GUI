// src/gui/molecules/AppBars/Footer/Footer.resolver.tsx
import * as React from 'react';
import Footer from './Footer';
import type { RegistryEntry, ResolveCtx } from '@/registry/types';

export type FooterSpec = {
  type: 'Footer';
  props?: {
    // Branding
    title?: string;
    logoSrc?: string;
    homeHref?: string;

    // Links
    links?: Array<{ label: string; href: string; external?: boolean }>;

    // Social icons
    socialLinks?: Array<{ icon: string; href: string; iconColor?: string }>;

    // Insets
    leftInset?: number;
    rightInset?: number;

    // Slots via ctx.slots
    startSlotId?: string;
    endSlotId?: string;

    // Granular styling (deben existir en FooterProps)
    sx?: any;
    leftSx?: any;
    centerSx?: any;
    rightSx?: any;
    brandSx?: any;
    logoSx?: any;
    titleSx?: any;
    socialLinkSx?: any;
    navLinkSx?: any;

    // Passthrough adicionales
    linkProps?: Record<string, any>;
    iconProps?: Record<string, any>;
    id?: string;
    className?: string;
    'data-testid'?: string;
  };
};

const FooterResolver: RegistryEntry = {
  type: 'Footer',
  resolve(spec: FooterSpec, ctx?: ResolveCtx) {
    const p = spec.props ?? {};

    const startSlot = p.startSlotId && ctx?.slots ? ctx.slots[p.startSlotId] : undefined;
    const endSlot   = p.endSlotId   && ctx?.slots ? ctx.slots[p.endSlotId]   : undefined;

    return (
      <Footer
        title={p.title ?? 'neurons.me'}
        logoSrc={p.logoSrc}
        homeHref={p.homeHref}
        links={p.links ?? []}
        socialLinks={p.socialLinks ?? []}
        leftInset={p.leftInset}
        rightInset={p.rightInset}
        startSlot={startSlot}
        endSlot={endSlot}
        linkProps={p.linkProps as any}
        iconProps={p.iconProps}

        // granular styling (sin ts-expect-error)
        sx={p.sx}
        leftSx={p.leftSx}
        centerSx={p.centerSx}
        rightSx={p.rightSx}
        brandSx={p.brandSx}
        logoSx={p.logoSx}
        titleSx={p.titleSx}
        socialLinkSx={p.socialLinkSx}
        navLinkSx={p.navLinkSx}
        id={p.id}
        className={p.className}
        data-testid={p['data-testid']}
      />
    );
  },
};

export default FooterResolver;