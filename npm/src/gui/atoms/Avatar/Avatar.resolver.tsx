import * as React from 'react';
import type { RegistryEntry, ResolveCtx } from '@/Registry/types';
import type { SxProps, Theme } from '@mui/material/styles';
import { ensureNodeId } from '@/gui/utils/nodeID';
import Avatar from './Avatar';
// =========================================
// Catalog meta (discoverability)
// - Used by CommandPalette / search ("google feel")
// - Kept next to the resolver so it stays self-registered.
// - Keep this small + structured; docs live in Storybook.
// =========================================
export const meta = {
  id: 'atoms.avatar',
  type: 'Avatar',
  label: 'Avatar',
  group: 'Atoms',
  path: ['Identity'],
  tags: ['avatar', 'profile', 'image', 'initials'],
  // Storybook linkage (fill with real ids when you know them)
  story: {
    title: 'Atoms/Elements/Avatar',
    primary: 'atoms-elements-avatar--initialsavatar',
  },
  // A minimal demo spec for runtime mounting / previews
  demoSpec: {
    type: 'Avatar',
    props: {
      children: 'A',
      variant: 'circular',
    },
  },
} as const;
export type AvatarSpec = {
  type: 'Avatar';
  props?: {
    children?: React.ReactNode;
    alt?: string;
    src?: string;
    variant?: 'circular' | 'rounded' | 'square';
    sx?: SxProps<Theme>;
    className?: string;
    id?: string;
    'data-testid'?: string;
    component?: React.ElementType;
    as?: React.ElementType;
    [key: string]: any;
  };
};

const AvatarResolver: RegistryEntry = {
  type: 'Avatar',
  resolve(spec: AvatarSpec, _ctx?: ResolveCtx) {
    const p = spec.props ?? {};
    const {
      children,
      alt,
      src,
      variant,
      sx,
      className,
      id,
      component,
      as,
      ...rest
    } = p;

    const resolvedComponent = component ?? as;
    const avatarId = ensureNodeId('avatar', id);

    return (
      <Avatar
        src={src}
        alt={alt}
        variant={variant}
        sx={sx}
        className={className}
        id={avatarId}
        data-testid={p['data-testid']}
        {...(resolvedComponent ? { component: resolvedComponent } : {})}
        {...rest}
      >
        {children}
      </Avatar>
    );
  },
};

export default AvatarResolver;