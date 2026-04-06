import React from 'react';
import type { RegistryEntry } from '@/Registry/types';
import StickyOptionsTop from './StickyOptionsTop';
import type { StickyOptionsTopProps } from './StickyOptionsTop';

type StickyOptionsSpec = {
  type: 'StickyOptionsTop' | 'StickyOptions';
  props?: (StickyOptionsTopProps & {
    enabled?: boolean;
    items?: Array<{
      // Declarative resolver path uses the GUI icon registry, same as the rest of Layout.
      icon?: string;
      label?: string;
      href?: string;
      to?: string;
      variant?: 'primary' | 'neutral';
      trackId?: string;
      ariaLabel?: string;
      iconColor?: string;
    }>;
  }) | null;
  children?: any;
};

function normalizeStickyOptionsProps(input: StickyOptionsSpec['props']): StickyOptionsTopProps {
  const props = { ...(input ?? {}) } as any;
  const items = Array.isArray(props.items)
    ? props.items.map((item: any) => ({
        ...item,
        href: item?.href ?? item?.to,
      }))
    : props.items;

  const enabled = typeof props.enabled === 'boolean' ? props.enabled : undefined;

  return {
    ...props,
    items,
    visibility:
      enabled === undefined
        ? props.visibility
        : {
            ...(props.visibility ?? {}),
            enabled,
          },
  };
}

const StickyOptionsTopResolver: RegistryEntry = {
  type: 'StickyOptionsTop',
  meta: {
    id: 'layout-sticky-options-top',
    label: 'StickyOptionsTop',
    kind: 'layout',
    tags: ['layout', 'sticky', 'actions', 'cta'],
  },
  resolve(spec: StickyOptionsSpec) {
    return <StickyOptionsTop {...normalizeStickyOptionsProps(spec.props)} />;
  },
};

export const StickyOptionsResolver: RegistryEntry = {
  ...StickyOptionsTopResolver,
  type: 'StickyOptions',
  meta: {
    id: 'layout-sticky-options',
    label: 'StickyOptions',
    kind: 'layout',
    tags: ['layout', 'sticky', 'actions', 'cta', 'legacy'],
  },
};

export default StickyOptionsTopResolver;
