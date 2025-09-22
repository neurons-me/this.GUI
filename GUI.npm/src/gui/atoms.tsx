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
import type { SxProps, Theme } from '@mui/material/styles';
// AppBar is not polymorphic so we wrap it with forwardRef
import AppBar from './atoms/AppBar/AppBar';
export { default as AppBar } from './atoms/AppBar/AppBar';
// Box is polymorphic so we re-export it directly
import Box, { type BoxProps } from './atoms/Box/Box';
export { default as Box } from './atoms/Box/Box';
export type { BoxProps } from './atoms/Box/Box';
//Button is polymorphic so we re-export it directly
import Button from './atoms/Button/Button';
export { default as Button } from './atoms/Button/Button';
export type { GuiButtonProps as ButtonProps } from './atoms/Button/Button';
//Collapse is not polymorphic so we wrap it with forwardRef
import Collapse, { type CollapseProps } from './atoms/Collapse/Collapse';
export { default as Collapse } from './atoms/Collapse/Collapse';
export type { CollapseProps } from './atoms/Collapse/Collapse';
//IconButton is polymorphic so we re-export it directly
import IconButton, { type IconButtonProps } from './atoms/IconButton/IconButton';
export { default as IconButton } from './atoms/IconButton/IconButton';
export type { IconButtonProps } from './atoms/IconButton/IconButton';
//Divider is not polymorphic so we wrap it with forwardRef
import Divider, { type DividerProps } from './atoms/Divider/Divider';
export { default as Divider } from './atoms/Divider/Divider';
export type { DividerProps } from './atoms/Divider/Divider';
//Drawer is not polymorphic so we wrap it with forwardRef
import Drawer, { type DrawerProps } from './atoms/Drawer/Drawer';
export { default as Drawer } from './atoms/Drawer/Drawer';
export type { DrawerProps } from './atoms/Drawer/Drawer';
//Link is polymorphic so we re-export it directly
import Link from './atoms/Link/Link';
export { default as Link } from './atoms/Link/Link';
export type { LinkProps } from './atoms/Link/Link';
// List and related are not polymorphic so we wrap them with forwardRef
import List, { type ListProps } from './atoms/List/List';
export { default as List } from './atoms/List/List';
export type { ListProps } from './atoms/List/List';
import ListItem, { type ListItemProps } from './atoms/ListItem/ListItem';
export { default as ListItem } from './atoms/ListItem/ListItem';
export type { ListItemProps } from './atoms/ListItem/ListItem';
import ListItemButton, { type ListItemButtonProps } from './atoms/ListItemButton/ListItemButton';
export { default as ListItemButton } from './atoms/ListItemButton/ListItemButton';
export type { ListItemButtonProps } from './atoms/ListItemButton/ListItemButton';
import ListItemIcon, { type ListItemIconProps } from './atoms/ListItemIcon/ListItemIcon';
export { default as ListItemIcon } from './atoms/ListItemIcon/ListItemIcon';
export type { ListItemIconProps } from './atoms/ListItemIcon/ListItemIcon';
import ListItemText, { type ListItemTextProps } from './atoms/ListItemText/ListItemText';
export { default as ListItemText } from './atoms/ListItemText/ListItemText';
export type { ListItemTextProps } from './atoms/ListItemText/ListItemText';
//Menu and related are polymorphic so we re-export them directly
import Menu, { type MenuProps } from './atoms/Menu/Menu';
export { default as Menu } from './atoms/Menu/Menu';
export type { MenuProps } from './atoms/Menu/Menu';
import MenuItem, { type MenuItemProps } from './atoms/MenuItem/MenuItem';
export { default as MenuItem } from './atoms/MenuItem/MenuItem';
export type { MenuItemProps } from './atoms/MenuItem/MenuItem';
//Paper is not polymorphic so we wrap it with forwardRef
import Paper, { type PaperProps } from './atoms/Paper/Paper';
export { default as Paper } from './atoms/Paper/Paper';
export type { PaperProps } from './atoms/Paper/Paper';
//Stack is not polymorphic so we wrap it with forwardRef
import Stack, { type StackProps } from './atoms/Stack/Stack';
export { default as Stack } from './atoms/Stack/Stack';
export type { StackProps } from './atoms/Stack/Stack';
//Switch is not polymorphic so we wrap it with forwardRef
import Switch, { type SwitchProps } from './atoms/Switch/Switch';
export { default as Switch } from './atoms/Switch/Switch';
export type { SwitchProps } from './atoms/Switch/Switch';
//Toolbar is not polymorphic so we wrap it with forwardRef
import Toolbar from './atoms/Toolbar/Toolbar';
export { default as Toolbar } from './atoms/Toolbar/Toolbar';
export type { ToolbarProps } from './atoms/Toolbar/Toolbar';
//Tooltip is not polymorphic so we wrap it with forwardRef
import Tooltip from './atoms/Tooltip/Tooltip';
export { default as Tooltip } from './atoms/Tooltip/Tooltip';
export type { TooltipProps } from './atoms/Tooltip/Tooltip';
//Typography is polymorphic so we re-export it directly
import Typography, { type TypographyProps } from './atoms/Typography/Typography';
export { default as Typography } from './atoms/Typography/Typography';
export type { TypographyProps } from './atoms/Typography/Typography';

/* -------------------------------------------------------------------------------------------------
 * GuiSx — re-export of MUI’s SxProps<Theme>
 * -------------------------------------------------------------------------------------------------*/

/** Public sx type (kept for now to ease migration). */
export type GuiSx = SxProps<Theme>;

/* -------------------------------------------------------------------------------------------------
 * Named bundle export (optional ergonomic import)
 * -------------------------------------------------------------------------------------------------*/
export const Atoms = {
  Box,
  Typography,
  Link,
  Stack,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Button,
  Tooltip,
  Switch,
  Paper,
} as const;
export default Atoms;
