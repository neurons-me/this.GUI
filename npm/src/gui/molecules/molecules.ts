/*
 * This.GUI — Molecules registry
 * Mid-level components composed from atoms and basic primitives.
 *
 * Export rules (consistency + ergonomics):
 *  - Keep a `Theme` namespace for theme-related molecules.
 *  - Theme molecules are exported only under `Theme` (no top-level named exports).
 *  - Avoid `export *` patterns here; be explicit to keep the public API stable.
 *
 * Ordering convention:
 *  1) component imports
 *  2) type imports
 *  3) nested namespaces (e.g. Theme)
 *  4) registry object
 *  5) named exports
 *  6) type exports
 *  7) default export
 * 
Atoms:
“I can do X”
Molecules:
“Use these atoms to achieve Y”

Configurations emerge from constraints.*/

// Components
import Dialog from '@/gui/Molecules/Dialog/Dialog';
import { Hero } from '@/gui/Molecules/Hero/Hero';
import Modal from '@/gui/Molecules/Modal/Modal';
import type { ModalProps } from '@/gui/Molecules/Modal/Modal.types';
import Page from '@/gui/Molecules/Page/Page';
import CodeBlock from '@/gui/Molecules/CodeBlock/CodeBlock';

// Types
import type { ComponentType } from 'react';
import type { DialogProps } from '@/gui/Molecules/Dialog/Dialog';
import type { HeroProps } from '@/gui/Molecules/Hero/Hero.types';
import type PageProps from '@/gui/Molecules/Page/Page';
import type { CodeBlockProps } from '@/gui/Molecules/CodeBlock/CodeBlock';

//List
// List and related are not polymorphic so we wrap them with forwardRef
import List, { type ListProps } from '@/gui/Molecules/List/List';
export type { ListProps } from '@/gui/Molecules/List/List';
import ListItem, { type ListItemProps } from '@/gui/Molecules/List/ListItem/ListItem';
export type { ListItemProps } from '@/gui/Molecules/List/ListItem/ListItem';
import ListItemButton, { type ListItemButtonProps } from '@/gui/Molecules/List/ListItemButton/ListItemButton';
export type { ListItemButtonProps } from '@/gui/Molecules/List/ListItemButton/ListItemButton';
import ListItemIcon, { type ListItemIconProps } from '@/gui/Molecules/List/ListItemIcon/ListItemIcon';
export type { ListItemIconProps } from '@/gui/Molecules/List/ListItemIcon/ListItemIcon';
import ListItemText, { type ListItemTextProps } from '@/gui/Molecules/List/ListItemText/ListItemText';
export type { ListItemTextProps } from '@/gui/Molecules/List/ListItemText/ListItemText';

type MoleculesRegistry = {
  Dialog: typeof Dialog;
  Hero: typeof Hero;
  // NOTE: We intentionally widen Modal here to avoid TS4023 (`ModalProps` cannot be named)
  // when generating .d.ts for the registry object.
  Modal: ComponentType<ModalProps>;
  Page: typeof Page;
  CodeBlock: typeof CodeBlock;
  List: typeof List;
  ListItem: typeof ListItem;
  ListItemButton: typeof ListItemButton;
  ListItemIcon: typeof ListItemIcon;
  ListItemText: typeof ListItemText;
};

const Molecules: MoleculesRegistry = {
  Dialog,
  Hero,
  Modal,
  Page,
  CodeBlock,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
};

export {
  Dialog,
  Hero,
  Modal,
  Page,
  CodeBlock,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
};

export type {
  DialogProps,
  PageProps,
  HeroProps,
  CodeBlockProps,
  ModalProps
};

export default Molecules;
