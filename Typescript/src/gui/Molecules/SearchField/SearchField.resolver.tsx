import * as React from 'react';
import type { RegistryEntry } from '@/Registry/types';
import { ensureNodeId } from '@/gui-internals/utils/nodeID';
import SearchField from './SearchField';
import type { SearchFieldResolverSpec } from './SearchField.types';

export const meta = {
  id: 'molecules.search-field',
  type: 'SearchField',
  label: 'Search Field',
  group: 'Molecules',
  path: ['Search'],
  tags: ['search', 'input', 'collapsible'],
  demoSpec: {
    type: 'SearchField',
    props: {
      placeholder: 'Search',
      query: '',
      results: [],
    },
  },
} as const;

const SearchFieldResolver: RegistryEntry = {
  type: 'SearchField',
  resolve(spec: SearchFieldResolverSpec) {
    const props = spec.props ?? ({} as SearchFieldResolverSpec['props']);
    return (
      <SearchField
        query=""
        onQueryChange={() => {}}
        results={[]}
        onSelectResult={() => {}}
        {...props}
        data-gui-node-id={ensureNodeId('search-field', (props as any)?.['data-gui-node-id'])}
      />
    );
  },
};

export default SearchFieldResolver;
