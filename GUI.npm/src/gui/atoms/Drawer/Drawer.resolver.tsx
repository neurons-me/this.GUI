// src/gui/primitives/Drawer/Drawer.resolver.tsx
import * as React from 'react';
import { Drawer } from '@/gui/atoms';
import type { RegistryEntry } from '@/registry/types';
type DrawerSpec = {
  type: 'Drawer';
  props?: {
    // Behavior & placement
    variant?: 'temporary' | 'persistent' | 'permanent';
    anchor?: 'left' | 'right' | 'top' | 'bottom';
    open?: boolean;
    onClose?: () => void;
    // Styling
    width?: number;            // shortcut → merged into PaperProps.sx.width
    sx?: any;                  // root sx
    PaperProps?: any;          // will be merged; sx merged with width/paperSx
    paperSx?: any;             // optional convenience to add to Paper sx
    // Container for the drawer (temporary/persistent)
    // Modal tweaks (temporary/persistent)
    ModalProps?: any;
    keepMounted?: boolean;     // shorthand → ModalProps.keepMounted = true
    // Content
    children?: React.ReactNode;
    content?: React.ReactNode;
    // Misc
    id?: string;
    className?: string;
    'data-testid'?: string;
  };
};

const DrawerResolver: RegistryEntry = {
  type: 'Drawer',
  resolve(spec: DrawerSpec) {
    const p = spec.props ?? {};
    // Merge Paper sx with `width` and optional `paperSx`
    const mergedPaperSx = {
      ...(typeof p.width === 'number' ? { width: p.width } : {}),
      ...(p.paperSx ?? {}),
      ...(p.PaperProps?.sx ?? {}),
    };

    const PaperProps = {
      ...(p.PaperProps ?? {}),
      ...(Object.keys(mergedPaperSx).length ? { sx: mergedPaperSx } : {}),
    };

    // ModalProps (support keepMounted shorthand)
    const ModalProps =
      p.ModalProps ??
      (p.keepMounted ? { keepMounted: true } : undefined);
    const children = p.children ?? p.content ?? null;

    return (
      <Drawer
        variant={p.variant ?? 'temporary'}
        anchor={p.anchor ?? 'left'}
        open={p.open}
        onClose={p.onClose}
        PaperProps={PaperProps}
        ModalProps={ModalProps}
        sx={p.sx}
        id={p.id}
        className={p.className}
        data-testid={p['data-testid']}
      >
        {children}
      </Drawer>
    );
  },
};

export default DrawerResolver;