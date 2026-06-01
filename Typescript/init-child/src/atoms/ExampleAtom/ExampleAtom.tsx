// ExampleAtom — replace this with your first domain atom.
//
// Pattern:
//   - Wraps or composes this.gui atoms with domain-specific semantics.
//   - Stateless, pure display.
//   - Export as default + named type.
//
// Example (replace with domain variant like TrustBadge, StatusChip, etc.):

import * as React from 'react';
import { Chip } from 'this.gui/atoms';
import type { ChipProps } from 'this.gui/atoms';

export interface ExampleAtomProps {
  /** The label to display */
  label: string;
  /** Domain-specific variant — map to MUI color semantics */
  variant?: 'default' | 'primary' | 'secondary' | 'warning' | 'error' | 'success';
  size?: ChipProps['size'];
}

const VARIANT_COLOR: Record<NonNullable<ExampleAtomProps['variant']>, ChipProps['color']> = {
  default:   'default',
  primary:   'primary',
  secondary: 'secondary',
  warning:   'warning',
  error:     'error',
  success:   'success',
};

export default function ExampleAtom({
  label,
  variant = 'default',
  size = 'small',
}: ExampleAtomProps) {
  return (
    <Chip
      label={label}
      color={VARIANT_COLOR[variant]}
      size={size}
      variant="outlined"
    />
  );
}

ExampleAtom.displayName = '__APP_NAME_PASCAL__.ExampleAtom';
