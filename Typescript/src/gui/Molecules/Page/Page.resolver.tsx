import React from 'react';
import Page from './Page';
import type { RegistryEntry } from '@/Registry/types';
import type { PageProps } from './Page.types';

type PageResolverSpec = {
  type: 'Page';
  props?: (PageProps & Record<string, any>) | null;
  children?: any;
};

const PageResolver: RegistryEntry = {
  type: 'Page',
  meta: {
    id: 'page',
    label: 'Page',
    kind: 'pattern',
    tags: ['page', 'layout', 'container'],
  },
  resolve(spec: PageResolverSpec) {
    const props = spec.props ?? {};
    const resolvedChildren =
      props.children !== undefined ? props.children : spec.children;

    return (
      <Page {...props}>
        {resolvedChildren}
      </Page>
    );
  },
};

export default PageResolver;
