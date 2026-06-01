// ExampleMolecule — replace with your first domain molecule.
//
// Pattern:
//   - Composes this.gui atoms + domain atoms into a named layout unit.
//   - May hold local display state (e.g. hover, expand) but NO data fetching.
//   - Think of molecules as "cards", "rows", "list items" — reusable domain views.

import * as React from 'react';
import { Card, Typography, Box } from 'this.gui/atoms';
import ExampleAtom from '../atoms/ExampleAtom/ExampleAtom';

export interface ExampleMoleculeProps {
  /** Primary title line */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Optional badge label (maps to ExampleAtom) */
  tag?: string;
  /** Badge variant */
  tagVariant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
}

export default function ExampleMolecule({
  title,
  subtitle,
  tag,
  tagVariant = 'default',
}: ExampleMoleculeProps) {
  return (
    <Card
      variant="outlined"
      sx={{ p: 2, minWidth: 240, display: 'flex', flexDirection: 'column', gap: 1 }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
        <Typography variant="subtitle1" fontWeight={600} noWrap>
          {title}
        </Typography>
        {tag && <ExampleAtom label={tag} variant={tagVariant} />}
      </Box>
      {subtitle && (
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          {subtitle}
        </Typography>
      )}
    </Card>
  );
}

ExampleMolecule.displayName = '__APP_NAME_PASCAL__.ExampleMolecule';
