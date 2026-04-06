import * as React from 'react';
import Checkbox from './Checkbox';
import { FormControlLabel } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { ensureNodeId } from '@/gui-internals/utils/nodeID';
import type { RegistryEntry } from '@/Registry/types';

export type CheckboxResolverProps = React.ComponentProps<typeof Checkbox> & {
  label?: React.ReactNode;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  sx?: SxProps<Theme>;
  guiId?: string;
};

export const meta = {
  id: 'atoms.checkbox',
  type: 'Checkbox',
  label: 'Checkbox',
  group: 'Atoms',
  path: ['Forms'],
  tags: ['checkbox'],
  story: {
    title: 'Atoms/Forms & Inputs/Checkbox',
    primary: 'atoms-forms-inputs-checkbox--playground',
  },
  demoSpec: {
    type: 'Checkbox',
    props: { label: 'Checkbox' },
  },
} as const;

const CheckboxResolver: RegistryEntry = {
  type: 'Checkbox',
  resolve(spec: { type: 'Checkbox'; props?: CheckboxResolverProps }) {
    const p = spec.props ?? ({} as CheckboxResolverProps);
    const { label, labelPlacement = 'end', guiId, sx, ...rest } = p;

    const nodeId = ensureNodeId('Checkbox', guiId);
    const control = <Checkbox id={nodeId} sx={sx} {...rest} />;

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

export default CheckboxResolver;
