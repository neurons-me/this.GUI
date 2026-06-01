import * as React from 'react';
import type { RegistryEntry, ResolveCtx } from '@/Registry/types';
import type { SxProps, Theme } from '@mui/material/styles';
import { ensureNodeId } from '@/gui-internals/utils/nodeID';
import Input, { type InputProps } from './Input';

export type InputSpec = {
  type: 'Input';
  props?: InputProps & {
    id?: string;
    sx?: SxProps<Theme>;
    className?: string;
    'data-testid'?: string;
    [key: string]: any;
  };
};

export const meta = {
  id: 'atoms.input',
  type: 'Input',
  label: 'Input',
  group: 'Atoms',
  path: ['Input'],
  tags: ['input', 'field', 'text'],
  story: {
    title: 'Atoms/Input/Input',
  },
  demoSpec: {
    type: 'Input',
    props: {
      placeholder: 'Input',
    },
  },
} as const;

const InputResolver: RegistryEntry = {
  type: 'Input',
  resolve(spec: InputSpec, _ctx?: ResolveCtx) {
    const p = spec.props ?? {};
    const { id, className, ...rest } = p;

    return (
      <Input
        id={ensureNodeId('input', id)}
        className={className}
        data-testid={p['data-testid']}
        {...rest}
      />
    );
  },
};

export default InputResolver;
