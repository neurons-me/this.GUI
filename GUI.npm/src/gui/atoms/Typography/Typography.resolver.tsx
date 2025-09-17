// src/gui/primitives/Typography/Typography.resolver.tsx
import * as React from 'react';
import Typography from './Typography';
import Link from '../Link/Link';
import type { RegistryEntry } from '@/registry/types';
/**
 * Declarative spec for Typography.
 * Keep this loose enough for JSON, but helpful for DX.
 */
type TypographySpec = {
  type: 'Typography';
  props?: {
    // Content
    text?: React.ReactNode;            // convenience for simple text
    children?: React.ReactNode;        // explicit children wins over `text`

    // Core MUI props most folks use
    variant?:
      | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
      | 'subtitle1' | 'subtitle2'
      | 'body1' | 'body2'
      | 'caption' | 'overline'
      | 'button';
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    paragraph?: boolean;
    gutterBottom?: boolean;
    noWrap?: boolean;
    color?: any; // keep permissive; palette keys, css color, etc.
    variantMapping?: Record<string, React.ElementType>;
    // Polymorphism / routing
    component?: any;                   // override target element/component
    to?: string;                       // if provided and no component, defaults to your Link
    href?: string;                     // for anchors
    external?: boolean;                // if true → anchor + target/rel
    // Styling / misc
    sx?: any;
    className?: string;
    id?: string;
    'data-testid'?: string;
  };
};

/**
 * TypographyResolver
 * - Maps JSON-friendly spec → real <Typography /> props.
 * - If `to` is present and no `component`, it defaults to your primitives Link.
 * - If `external` is true, renders an anchor with safe target/rel.
 */
const TypographyResolver: RegistryEntry = {
  type: 'Typography',
  resolve(spec: TypographySpec) {
    const p = spec.props ?? {};
    // Routing polymorphism
    const routingProps = p.external
      ? {
          component: 'a' as const,
          href: p.href,
          target: '_blank',
          rel: 'noopener noreferrer',
        }
      : {
          component: p.component ?? (p.to ? Link : undefined),
          to: p.to,
          href: p.href,
        };
    // Children precedence: explicit children > text > empty
    const children = p.children ?? p.text ?? null;
    return (
      <Typography
        variant={p.variant}
        align={p.align}
        paragraph={p.paragraph}
        gutterBottom={p.gutterBottom}
        noWrap={p.noWrap}
        color={p.color}
        variantMapping={p.variantMapping}
        sx={p.sx}
        className={p.className}
        id={p.id}
        data-testid={p['data-testid']}
        {...routingProps}
      >
        {children}
      </Typography>
    );
  },
};

export default TypographyResolver;