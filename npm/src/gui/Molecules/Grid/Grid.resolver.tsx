import type { RegistryEntry, ResolveCtx } from '@/Registry/types';
import { ensureNodeId } from '@/gui-internals/utils/nodeID';
import Grid from './Grid';
import type { GridResolverSpec } from './Grid.types';

// =========================================
// Catalog meta (discoverability)
// - Used by CommandPalette / search ("google feel")
// - Kept next to the resolver so it stays self-registered.
// =========================================
export const meta = {
  id: 'atoms.grid',
  type: 'Grid',
  label: 'Grid',
  group: 'Atoms',
  path: ['Layout'],
  tags: ["grid"],
  story: {
    title: 'Atoms/Containers/Grid',
    primary: 'atoms-containers-grid--playground',
  },
  demoSpec: {
    type: 'Grid',
    props: {"children":"Grid"},
  },
} as const;

const GridResolver: RegistryEntry = {
  type: 'Grid',
  resolve(spec: GridResolverSpec, _ctx?: ResolveCtx) {
    const p = spec.props ?? {};
    const {
      children,
      id,
      className,
      sx,
      ...rest
    } = p;

    const gridId = ensureNodeId('grid', id);

    return (
      <Grid
        id={gridId}
        className={className}
        sx={sx}
        {...rest}
      >
        {children}
      </Grid>
    );
  },
};

export default GridResolver;