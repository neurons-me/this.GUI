import * as React from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import type { RegistryEntry, ResolveCtx } from '@/registry/types';
import { ensureNodeId } from '@/gui/utils/nodeID';
import Grid from './Grid';
import type { GridResolverSpec } from './Grid.types';

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