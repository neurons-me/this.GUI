/* 
 * This.GUI — primitives
 * Thin wrappers around MUI components to present a stable, library-owned API.
 * Internally we use MUI, but components in the design system should import from
 * "@/gui/primitives" instead of "@mui/material". This lets us swap engines later.
 * 
 * La regla estándar en tu wrapper
 *   • Si MUI lo declaró polimórfico → usa OverridableComponent en tu wrapper.
 *   • Si no lo es → usa forwardRef normal.
 *
 * Así garantizas dos cosas:
 * ✅ Tu wrapper no pierde nada de lo que MUI ofrece.
 * ✅ No te complicas agregando polimorfismo donde MUI no lo soporta.
 */
import * as React from 'react';
import type { ElementType } from 'react';
import {
  Box as MuiBox,
  type BoxProps as MuiBoxProps,
  Paper as MuiPaper,
  type PaperProps as MuiPaperProps,
  Stack as MuiStack,
  type StackProps as MuiStackProps,
  Divider as MuiDivider,
  type DividerProps as MuiDividerProps,
} from '@mui/material';
import MuiList from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import MuiListItemButton from '@mui/material/ListItemButton';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import MuiListItemText from '@mui/material/ListItemText';
import MuiCollapse from '@mui/material/Collapse';
import MuiIconButton from '@mui/material/IconButton';
import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import type { SxProps, Theme } from '@mui/material/styles';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import type { ListItemButtonTypeMap } from '@mui/material/ListItemButton';
import type { MenuItemTypeMap } from '@mui/material/MenuItem';
import Button from './atoms/Button/Button';
import Link from './atoms/Link/Link';
import Typography, { type TypographyProps } from './atoms/Typography/Typography';
import Drawer, { type DrawerProps } from './atoms/Drawer/Drawer';
import Box, { type BoxProps } from './atoms/Box/Box';
import Toolbar from './atoms/Toolbar/Toolbar';
import AppBar from './atoms/AppBar/AppBar';
import Tooltip from './atoms/Tooltip/Tooltip';
import Divider from './atoms/Divider/Divider';
/** Public sx type (kept for now to ease migration). */
export type GuiSx = SxProps<Theme>;
/* -------------------------------------------------------------------------------------------------
 * Surface (Paper) — POLYMORPHIC
 * -------------------------------------------------------------------------------------------------*/
export type SurfaceProps = Omit<MuiPaperProps, 'component'> & {
  component?: ElementType | string;
  as?: ElementType | string;
};

export const Surface = React.forwardRef<HTMLElement, SurfaceProps>(function Surface(
  { as, component, ...rest },
  ref
) {
  const comp = (component ?? as) as any;
  return <MuiPaper ref={ref as any} component={comp} {...rest} />;
});

/* -------------------------------------------------------------------------------------------------
 * Stack — NON-POLYMORPHIC (forwardRef)
 * -------------------------------------------------------------------------------------------------*/
export type StackProps = MuiStackProps;
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(function Stack(props, ref) {
  return <MuiStack ref={ref} {...props} />;});
/* -------------------------------------------------------------------------------------------------
 * Divider — NON-POLYMORPHIC (forwardRef)
 * -------------------------------------------------------------------------------------------------*/
export type SeparatorProps = MuiDividerProps;
export const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(function Separator(props, ref) {
  return <MuiDivider ref={ref} {...props} />;});
/* -------------------------------------------------------------------------------------------------
 * AppBar — NON-POLYMORPHIC (forwardRef)
 * IconButton — NON-POLYMORPHIC (forwardRef)
 * Menu — NON-POLYMORPHIC (forwardRef)
 * MenuItem — POLYMORPHIC (OverridableComponent)
 * -------------------------------------------------------------------------------------------------*/
export type IconButtonProps = React.ComponentProps<typeof MuiIconButton>;
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(props, ref) {
  return <MuiIconButton ref={ref} {...props} />;});
export type MenuProps = React.ComponentProps<typeof MuiMenu>;
export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(function Menu(props, ref) {
  return <MuiMenu ref={ref} {...props} />;});
export const MenuItem = MuiMenuItem as unknown as OverridableComponent<MenuItemTypeMap<{}, 'li'>>;
export type MenuItemProps = React.ComponentProps<typeof MenuItem>;
/* -------------------------------------------------------------------------------------------------
 * List — NON-POLYMORPHIC (forwardRef)
 * ListItem — NON-POLYMORPHIC (forwardRef)
 * ListItemButton — POLYMORPHIC (OverridableComponent)
 * ListItemIcon — NON-POLYMORPHIC (forwardRef)
 * ListItemText — NON-POLYMORPHIC (forwardRef)
 * Collapse — NON-POLYMORPHIC (forwardRef)
 * -------------------------------------------------------------------------------------------------*/
export type ListProps = React.ComponentProps<typeof MuiList>;
export const List = React.forwardRef<HTMLUListElement, ListProps>(function List(props, ref) {
  return <MuiList ref={ref} {...props} />;});
export type ListItemProps = React.ComponentProps<typeof MuiListItem>;
export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(function ListItem(props, ref) {
  return <MuiListItem ref={ref} {...props} />;});
// Preserve MUI’s polymorphic typing so `component={RouterLink}` + `to` work.
export const ListItemButton = MuiListItemButton as OverridableComponent<ListItemButtonTypeMap<{}, 'div'>>;
export type ListItemButtonProps = React.ComponentProps<typeof ListItemButton>;
export type ListItemIconProps = React.ComponentProps<typeof MuiListItemIcon>;
export const ListItemIcon = React.forwardRef<HTMLDivElement, ListItemIconProps>(function ListItemIcon(props, ref) {
  return <MuiListItemIcon ref={ref} {...props} />;});
export type ListItemTextProps = React.ComponentProps<typeof MuiListItemText>;
export const ListItemText = React.forwardRef<HTMLSpanElement, ListItemTextProps>(function ListItemText(props, ref) {
  return <MuiListItemText ref={ref} {...props} />;});
export type CollapseProps = React.ComponentProps<typeof MuiCollapse>;
export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(function Collapse(props, ref) {
  return <MuiCollapse ref={ref} {...props} />;});
/* -------------------------------------------------------------------------------------------------
 * Spacer — convenience primitive (no dependency on MUI)
 * -------------------------------------------------------------------------------------------------*/
export type SpacerProps = {
  size?: number | string;
  vertical?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

/**
 * Spacer renders an empty block with width/height set from `size`.
 * When `vertical` is true, it sets height; otherwise width.
 */
export const Spacer = React.forwardRef<HTMLSpanElement, SpacerProps>(function Spacer(
  { size = 8, vertical = false, style, className },
  ref
) {
  const v = typeof size === 'number' ? `${size}px` : String(size);
  const s: React.CSSProperties = vertical
    ? { display: 'block', height: v, width: 1, flex: '0 0 auto' }
    : { display: 'inline-block', width: v, height: 1, flex: '0 0 auto' };
  return <span ref={ref} className={className} style={{ ...s, ...style }} />;
});

/* -------------------------------------------------------------------------------------------------
 * Named bundle export (optional ergonomic import)
 * -------------------------------------------------------------------------------------------------*/
export const Primitives = {
  Box,
  Surface,
  Typography,
  Link,
  Stack,
  Separator,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Spacer,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Button,
  Tooltip,
} as const;
export default Primitives;
export { default as Button } from './atoms/Button/Button';
export type { GuiButtonProps as ButtonProps } from './atoms/Button/Button';
export { default as Link } from './atoms/Link/Link';
export type { LinkProps } from './atoms/Link/Link';
export { default as Typography } from './atoms/Typography/Typography';
export type { TypographyProps } from './atoms/Typography/Typography';
export { default as Drawer } from './atoms/Drawer/Drawer';
export type { DrawerProps } from './atoms/Drawer/Drawer';
export { default as Box } from './atoms/Box/Box';
export type { BoxProps } from './atoms/Box/Box';
export { default as Toolbar } from './atoms/Toolbar/Toolbar';
export type { ToolbarProps } from './atoms/Toolbar/Toolbar';
export { default as AppBar } from './atoms/AppBar/AppBar';
export { default as Tooltip } from './atoms/Tooltip/Tooltip';
export type { TooltipProps } from './atoms/Tooltip/Tooltip';
export { default as Divider } from './atoms/Divider/Divider';
export type { DividerProps } from './atoms/Divider/Divider';
export { default as Switch } from './atoms/Switch/Switch';
export type { SwitchProps } from './atoms/Switch/Switch';
