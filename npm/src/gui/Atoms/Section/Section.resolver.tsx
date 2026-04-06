import * as React from 'react';
import type { RegistryEntry, ResolveCtx } from '@/Registry/types';
import { ensureNodeId } from '@/gui-internals/utils/nodeID';
import Section from './Section';
import type { SectionSpec } from './Section.types';

// =========================================
// Catalog meta (discoverability)
// - Used by CommandPalette / search ("google feel")
// - Kept next to the resolver so it stays self-registered.
// =========================================
export const meta = {
  id: 'atoms.section',
  type: 'Section',
  label: 'Section',
  group: 'Atoms',
  path: ['Layout'],
  tags: ["section"],
  story: {
    title: 'Atoms/Containers/Section',
    primary: 'atoms-containers-section--playground',
  },
  demoSpec: {
    type: 'Section',
    props: {"children":"Section"},
  },
} as const;

export const SectionResolver: RegistryEntry = {
  type: 'Section',
  resolve(spec: SectionSpec, _ctx?: ResolveCtx) {
    const p = spec.props ?? {};
    return (
      <Section
        {...p}
        id={ensureNodeId('section', p.id)}
      />
    );
  },
};

export default SectionResolver;
