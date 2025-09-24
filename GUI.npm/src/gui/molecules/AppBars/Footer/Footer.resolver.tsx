// src/gui/molecules/AppBars/Footer/Footer.resolver.tsx
import Footer from './Footer';
import type { RegistryEntry, ResolveCtx } from '@/registry/types';
import { Link as GuiLink } from '@/gui/atoms';
export type FooterSpec = {
  type: 'Footer';
  props?: {
    // Branding
    title?: string;
    logoSrc?: string;
    homeHref?: string;
    // SPA routing for Brand
    brandComponent?: string; // e.g., "Link" (string token resolved by resolver)
    brandTo?: string;        // router destination (e.g., "/")
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
    // Added renderIcon prop to allow override
    renderIcon?: (item: any) => React.ReactNode;
  };
};

const FooterResolver: RegistryEntry = {
  type: 'Footer',
  resolve(spec: FooterSpec, ctx?: ResolveCtx) {
    const p = spec.props ?? {};
    const startSlot = p.startSlotId && ctx?.slots ? ctx.slots[p.startSlotId] : undefined;
    const endSlot   = p.endSlotId   && ctx?.slots ? ctx.slots[p.endSlotId]   : undefined;
    // Resolve brand component for SPA routing
    let brandComponent: any | undefined = undefined;
    if (p.brandComponent === 'Link') {
      brandComponent = GuiLink;
    } else if (!p.brandComponent && p.brandTo) {
      // If a brandTo is provided without an explicit component token, default to This.GUI Link
      brandComponent = GuiLink;
    }

    return (
      <Footer
        title={p.title ?? 'neurons.me'}
        logoSrc={p.logoSrc}
        homeHref={p.homeHref}
        brandComponent={brandComponent}
        brandTo={p.brandTo}
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