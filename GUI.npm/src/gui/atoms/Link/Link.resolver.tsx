// src/gui/primitives/Link/Link.resolver.tsx
import * as React from 'react';
import type { RegistryEntry } from '@/registry/types';
import Link, { LinkProps as GuiLinkProps } from './Link';

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
    sx?: any;
    className?: string;
    id?: string;
    target?: string;
    rel?: string;
    color?: GuiLinkProps['color'];
    variant?: GuiLinkProps['variant'];
    // ...cualquier otro prop permitido por tu Link
  };
};

const LinkResolver: RegistryEntry = {
  type: 'Link',
  resolve(spec: LinkSpec) {
    const p = spec.props ?? {};

    // Routing / destino
    const routingProps: Partial<GuiLinkProps> =
      p.external
        ? {
            href: p.href,
            target: p.target ?? '_blank',
            rel: p.rel ?? 'noopener noreferrer',
          }
        : p.to
        ? { to: p.to }
        : { href: p.href };

    const children = p.children ?? p.label ?? null;

    return (
      <Link
        underline={p.underline ?? 'hover'}
        color={p.color}
        variant={p.variant}
        sx={p.sx}
        className={p.className}
        id={p.id}
        {...routingProps}
      >
        {children}
      </Link>
    );
  },
};

export default LinkResolver;