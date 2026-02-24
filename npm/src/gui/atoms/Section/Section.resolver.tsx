import Section from './Section';
import type { SectionProps } from './Section.types';

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

export const SectionResolver = {
  type: 'Section',
  component: Section,
  resolve: (props: SectionProps) => <Section {...props} />,
};

export default SectionResolver;