import * as React from 'react';
import Switch from './Switch';
import { FormControlLabel } from '@mui/material';
import type { RegistryEntry, ResolveCtx } from '@/Registry/types';
import { SxProps, Theme } from '@mui/material/styles';
import { ensureNodeId } from '@/gui/utils/nodeID';

/**
 * Switch.resolver
 * ------------------------------------------------------------
 * Allows declarative usage of the Switch atom. You can pass any
 * MUI Switch prop through, plus optional `label` support. If
 * `label` is provided, we wrap the control in `FormControlLabel`.
 *
 * Examples (JSON-ish):
 *  {
 *    type: 'Switch',
 *    props: { checked: true, color: 'primary', size: 'small' }
 *  }
 *
 *  {
 *    type: 'Switch',
 *    props: { label: 'Enable feature', defaultChecked: true }
 *  }
 */

export type SwitchSpec = {
  type: 'Switch';
  props?: React.ComponentProps<typeof Switch> & {
    /** Optional text/element label to render alongside the switch */
    label?: React.ReactNode;
    /** Label position when `label` is provided */
    labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
    sx?: SxProps<Theme>;
    id?: string; // Allow passing id directly

    // Arbitrary passthrough
    [key: string]: any;
  };
};

// =========================================
// Catalog meta (discoverability)
// - Used by CommandPalette / search ("google feel")
// - Kept next to the resolver so it stays self-registered.
// =========================================
export const meta = {
  id: 'atoms.switch',
  type: 'Switch',
  label: 'Switch',
  group: 'Atoms',
  path: ['Forms'],
  tags: ["switch"],
  story: {
    title: 'Atoms/Forms & Inputs/Switch',
    primary: 'atoms-forms-inputs-switch--playground',
  },
  demoSpec: {
    type: 'Switch',
    props: {"label":"Switch"},
  },
} as const;

const SwitchResolver: RegistryEntry = {
  type: 'Switch',
  resolve(spec: SwitchSpec, _ctx?: ResolveCtx) {
    const { label, labelPlacement = 'end', id, sx, ...rest } = spec.props ?? {};
    const nodeId = ensureNodeId('Switch', id);

    const control = <Switch id={nodeId} sx={sx} {...rest} />;

    if (label != null) {
      return (
        <FormControlLabel
          control={control}
          label={label}
          labelPlacement={labelPlacement}
        />
      );
    }

    return control;
  },
};

export default SwitchResolver;