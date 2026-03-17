import * as React from 'react';
import type { RegistryEntry } from '@/Registry/types';
import Cleaker from './Cleaker';

type CleakerSpec = {
  type: 'Cleaker';
  props?: Record<string, never>;
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
  resolve(_spec: CleakerSpec) {
    return <Cleaker />;
  },
};

export default CleakerResolver;
