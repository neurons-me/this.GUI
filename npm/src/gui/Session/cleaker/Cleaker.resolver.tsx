import * as React from 'react';
import type { RegistryEntry } from '@/Registry/types';
import Cleaker, { type CleakerProps } from './Cleaker';

type CleakerSpec = {
  type: 'Cleaker';
  props?: CleakerProps;
};

export const meta = {
  id: 'components.identity-noise.cleaker',
  type: 'Cleaker',
  label: 'Cleaker',
  group: 'Components',
  path: ['Identity Noise', 'Cleaker'],
  tags: ['cleaker', 'identity', 'session', 'qr'],
  demoSpec: {
    type: 'Cleaker',
    props: {},
  },
} as const;

const CleakerResolver: RegistryEntry = {
  type: 'Cleaker',
  resolve(spec: CleakerSpec) {
    const props = spec.props ?? {};
    return <Cleaker {...props} />;
  },
};

export default CleakerResolver;
