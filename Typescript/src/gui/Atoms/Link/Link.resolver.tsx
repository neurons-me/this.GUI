// src/gui/atoms/Link/Link.resolver.tsx
import * as React from 'react';
import type { RegistryEntry } from '@/Registry/types';
import Link, { LinkProps as GuiLinkProps } from './Link';
import type { SxProps, Theme } from '@mui/material/styles';
import { ensureNodeId } from '@/gui-internals/utils/nodeID';

/** Declarative spec for Link (JSON-friendly) */
type LinkSpec = {
  type: 'Link';
  props?: {
    label?: React.ReactNode;              // convenience: text content
    children?: React.ReactNode;           // explicit children (wins over label)
    href?: string;                        // external
    to?: string;                          // internal (react-router)
    external?: boolean;                   // force anchor + target/rel
    underline?: 'none' | 'hover' | 'always';
    // pass-through styling/attrs
    sx?: SxProps<Theme>;
    className?: string;
    id?: string;
    target?: string;
    rel?: string;
    color?: GuiLinkProps['color'];
    variant?: GuiLinkProps['variant'];
    // ...cualquier otro prop permitido por tu Link
    'data-testid'?: string;
    ariaLabel?: string;
  };
};

// =========================================
// Catalog meta (discoverability)
// - Used by CommandPalette / search ("google feel")
// - Kept next to the resolver so it stays self-registered.
// =========================================
export const meta = {
  id: 'atoms.link',
  type: 'Link',
  label: 'Link',
  group: 'Atoms',
  path: ['Navigation'],
  tags: ["link"],
  story: {
    title: 'Atoms/Navigation/Link',
    primary: 'atoms-navigation-link--playground',
  },
  demoSpec: {
    type: 'Link',
    props: {"children":"Link"},
  },
} as const;

const LinkResolver: RegistryEntry = {
  type: 'Link',
  resolve(spec: LinkSpec) {
    const p = spec.props ?? {};
    const nodeId = ensureNodeId('link', p.id as string | undefined);
    const externalHref = p.href ?? p.to;

    // Routing / destino
    const routingProps: Partial<GuiLinkProps> =
      p.external
        ? {
            href: externalHref,
            ...(p.target ? { target: p.target } : { target: '_blank' }),
            ...(p.rel ? { rel: p.rel } : { rel: 'noopener noreferrer' }),
          }
        : p.to
        ? { to: p.to }
        : p.href
        ? { href: p.href }
        : {};

    const children = p.children ?? p.label ?? null;

    return (
      <Link
        underline={p.underline ?? 'hover'}
        color={p.color}
        variant={p.variant}
        sx={p.sx}
        className={p.className}
        id={nodeId}
        data-testid={p['data-testid']}
        {...(p.ariaLabel ? { 'aria-label': p.ariaLabel } : {})}
        {...routingProps}
      >
        {children}
      </Link>
    );
  },
};

export default LinkResolver;
