import type { RegistryEntry } from '@/Registry/types';
import Me, { type MeProps } from './me';

type MeSpec = {
  type: 'Me';
  props?: MeProps;
};

export const meta = {
  id: 'components.identity-noise.me-command',
  type: 'Me',
  label: '.me',
  group: 'Components',
  path: ['Identity Noise', '.me'],
  tags: ['me', 'terminal', 'command', 'identity'],
  demoSpec: {
    type: 'Me',
    props: {},
  },
} as const;

const MeResolver: RegistryEntry = {
  type: 'Me',
  resolve(spec: MeSpec) {
    const props = spec.props ?? {};
    return <Me {...props} />;
  },
};

export default MeResolver;
