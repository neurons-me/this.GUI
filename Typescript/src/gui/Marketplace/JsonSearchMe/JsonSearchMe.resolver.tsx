import * as React from 'react';
import type { RegistryEntry, ResolveCtx } from '@/Registry/types';
import { ensureNodeId } from '@/gui-internals/utils/nodeID';
import type { JsonSearchMeResolverSpec } from './JsonSearchMe.types';

// Marketplace components are loaded on demand — the heavy component code only
// downloads when something actually resolves a `JsonSearchMe` node.
const JsonSearchMe = React.lazy(() => import('./JsonSearchMe'));

const JsonSearchMeResolver: RegistryEntry = {
  type: 'JsonSearchMe',
  resolve(spec: JsonSearchMeResolverSpec, _ctx?: ResolveCtx) {
    const p = spec.props ?? ({} as any);
    const { id, ...rest } = p;
    const jsonSearchBarId = ensureNodeId('jsonsearchbar', id);
    return (
      <React.Suspense fallback={null}>
        <JsonSearchMe id={jsonSearchBarId} data-testid={p['data-testid']} {...rest} />
      </React.Suspense>
    );
  },
};

export default JsonSearchMeResolver;
