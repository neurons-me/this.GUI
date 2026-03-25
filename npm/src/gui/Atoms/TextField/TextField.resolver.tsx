import * as React from 'react';
import type { RegistryEntry, ResolveCtx } from '@/Registry/types';
import type { SxProps, Theme } from '@mui/material/styles';
import { ensureNodeId } from '@/gui/utils/nodeID';
import TextField, { type TextFieldProps } from './TextField';
// =========================================
// Catalog meta (discoverability)
// =========================================
export const meta = {
  id: 'atoms.textField',
  type: 'TextField',
  label: 'Text Field',
  group: 'Atoms',
  path: ['Input'],
  tags: ['input', 'text', 'form', 'field'],
  story: {
    title: 'Atoms/Input/TextField',
  },
  // A minimal demo spec for runtime mounting / previews
  demoSpec: {
    type: 'TextField',
    props: {
      label: 'Label',
      variant: 'outlined',
      placeholder: 'Placeholder text...',
    },
  },
} as const;

// =========================================
// Spec
// - The "schema" for the component in the registry
// =========================================
export type TextFieldSpec = {
  type: 'TextField';
  props?: TextFieldProps & {
    // Ensure common resolver props are included
    id?: string;
    sx?: SxProps<Theme>;
    className?: string;
    'data-testid'?: string;
    component?: React.ElementType;
    as?: React.ElementType;
    [key: string]: any;
  };
};

// =========================================
// Resolver
// - The logic that renders the spec
// =========================================
const TextFieldResolver: RegistryEntry = {
  type: 'TextField',
  resolve(spec: TextFieldSpec, _ctx?: ResolveCtx) {
    const p = spec.props ?? {};
    const {
      id,
      component,
      as,
      // Destructure other TextField specific props here
      ...rest
    } = p;

    const resolvedComponent = component ?? as;
    const textFieldId = ensureNodeId('textField', id);

    return (
      <TextField
        id={textFieldId}
        data-testid={p['data-testid']}
        {...(resolvedComponent ? { component: resolvedComponent } : {})}
        {...rest}
      />
    );
  },
};

export default TextFieldResolver;