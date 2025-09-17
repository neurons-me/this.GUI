// src/gui/primitives/Button/Button.resolver.tsx
import * as React from 'react';
import Button from './Button';
import Link from '../Link/Link';
import type { RegistryEntry } from '@/registry/types';
/**
 * Declarative spec for Button.
 * This is the JSON-friendly shape your renderer/LLM can emit.
 */
type ButtonSpec = {
  type: 'Button';
  props?: {
    // Content
    label?: string;                  // convenience for children text
    children?: React.ReactNode;      // optional explicit children
    // Visual
    variant?: 'text' | 'outlined' | 'contained';
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';
    size?: 'small' | 'medium' | 'large';
    startIcon?: React.ReactNode | string;
    endIcon?: React.ReactNode | string;
    sx?: any;
    disabled?: boolean;
    fullWidth?: boolean;
    // Routing / polymorphism
    external?: boolean;              // if true → anchor + target/rel
    href?: string;                   // for anchors
    to?: string;                     // for routers
    component?: any;                 // override polymorphic target (e.g., your Link)
    type?: 'button' | 'submit' | 'reset';
    // You can extend with data-* attributes, id, className, etc.
    id?: string;
    className?: string;
    'data-testid'?: string;
  };
};

/**
 * ButtonResolver
 * - Maps JSON-friendly spec → real <Button /> props.
 * - Keeps MUI polymorphism intact. If `to` is provided and no `component`,
 *   it defaults to your primitives Link; if `external` is true, it uses an anchor safely.
 */
const ButtonResolver: RegistryEntry = {
  type: 'Button',
  resolve(spec: ButtonSpec) {
    const p = spec.props ?? {};
    // Decide routing polymorphism
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

    // Children precedence: explicit children > label > fallback
    const children = p.children ?? p.label ?? 'Button';
    return (
      <Button
        variant={p.variant ?? 'text'}
        color={p.color ?? 'inherit'}
        size={p.size ?? 'medium'}
        startIcon={p.startIcon}
        endIcon={p.endIcon}
        disabled={p.disabled}
        fullWidth={p.fullWidth}
        type={p.type}
        sx={p.sx}
        id={p.id}
        className={p.className}
        data-testid={p['data-testid']}
        {...routingProps}
      >
        {children}
      </Button>
    );
  },
};

export default ButtonResolver;