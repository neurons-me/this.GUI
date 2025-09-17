

import * as React from 'react';
import Box from './Box';
import Link from '../Link/Link';
import type { RegistryEntry, ResolveCtx } from '@/registry/types';

/**
 * Declarative spec for Box (polymorphic container)
 *
 * Notes
 * - You can choose the rendered element via `component` (e.g. 'div', 'section', 'a', 'img')
 * - If `to` is provided (and no explicit component), the resolver will default to This.GUI `Link`.
 * - If `external` is true (and no explicit component), it will default to an anchor (`'a'`) and apply
 *   safe `target`/`rel` defaults.
 * - When `component="img"`, common image attributes like `src`, `alt`, `width`, `height`, etc. are passed through.
 */
export type BoxSpec = {
  type: 'Box';
  props?: {
    children?: React.ReactNode;

    // Polymorphism / routing
    component?: any; // 'div' | 'section' | 'span' | 'a' | 'img' | Link | custom
    as?: any;        // alias for component
    to?: string;     // router target (when component={Link})
    href?: string;   // anchor target (when component='a')
    external?: boolean; // force external anchor
    target?: React.HTMLAttributeAnchorTarget;
    rel?: string;

    // IMG-specific (when component='img')
    src?: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
    loading?: 'eager' | 'lazy';
    decoding?: 'auto' | 'sync' | 'async';
    referrerPolicy?: React.HTMLAttributeReferrerPolicy;
    sizes?: string;
    srcSet?: string;

    // Styling & misc
    sx?: any;
    className?: string;
    id?: string;
    'data-testid'?: string;

    // Allow system props / arbitrary passthrough (gap, p, m, display, etc.)
    [key: string]: any;
  };
};

const BoxResolver: RegistryEntry = {
  type: 'Box',
  resolve(spec: BoxSpec, _ctx?: ResolveCtx) {
    const p = spec.props ?? {};

    // Decide polymorphic target
    const component = p.component ?? p.as ?? (p.to ? Link : p.external ? 'a' : undefined);

    // Routing/anchor props
    const routingProps = component === 'a' || p.external
      ? {
          href: p.href,
          target: p.target ?? (p.external ? '_blank' : undefined),
          rel: p.rel ?? (p.external ? 'noopener noreferrer' : undefined),
        }
      : component === Link || (p.to && !p.component)
      ? { to: p.to }
      : {};

    // IMG specific passthrough (only when explicitly rendering an <img>)
    const imgProps = component === 'img'
      ? {
          src: p.src,
          alt: p.alt,
          width: p.width,
          height: p.height,
          loading: p.loading,
          decoding: p.decoding,
          referrerPolicy: p.referrerPolicy,
          sizes: p.sizes,
          srcSet: p.srcSet,
        }
      : {};

    // Collect common props and avoid leaking resolver-only keys
    const {
      children,
      // remove resolver-only keys so they don't end up as DOM attributes
      as: _as,
      external: _external,
      to: _to,
      href: _href,
      target: _target,
      rel: _rel,
      src: _src,
      alt: _alt,
      width: _width,
      height: _height,
      loading: _loading,
      decoding: _decoding,
      referrerPolicy: _referrerPolicy,
      sizes: _sizes,
      srcSet: _srcSet,
      ...rest
    } = p;

    return (
      <Box
        component={component}
        sx={p.sx}
        id={p.id}
        className={p.className}
        data-testid={p['data-testid']}
        {...routingProps}
        {...imgProps}
        {...rest}
      >
        {children}
      </Box>
    );
  },
};

export default BoxResolver;