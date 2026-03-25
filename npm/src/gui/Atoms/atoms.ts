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

import type { SxProps, Theme } from '@mui/material/styles';
// Bars are not polymorphic so we wrap it with forwardRef
import Bar from './AppBar/AppBar';
export { default as Bar } from './AppBar/AppBar';
// Box is polymorphic so we re-export it directly
import Box, { type BoxProps } from './Box/Box';
export { default as Box } from './Box/Box';
export type { BoxProps } from './Box/Box';
// Avatar is not polymorphic so we wrap it with forwardRef
import Avatar, { type AvatarProps } from './Avatar/Avatar';
export { default as Avatar } from './Avatar/Avatar';
export type { AvatarProps } from './Avatar/Avatar';
import Badge, { type BadgeProps } from './Badge/Badge';
export { default as Badge } from './Badge/Badge';
export type { BadgeProps } from './Badge/Badge';
// Checkbox is not polymorphic so we wrap it with forwardRef
import Checkbox, { type CheckboxProps } from './Checkbox/Checkbox';
export { default as Checkbox } from './Checkbox/Checkbox';
export type { CheckboxProps } from './Checkbox/Checkbox';
// Button is polymorphic so we re-export it directly
import Button from './Button/Button';
export { default as Button } from './Button/Button';
export type { GuiButtonProps as ButtonProps } from './Button/Button';
import Card, { type CardProps } from './Card/Card';
export { default as Card } from './Card/Card';
export type { CardProps } from './Card/Card';
import CardActions, { type CardActionsProps } from './Card/CardActions/CardActions';
export { default as CardActions } from './Card/CardActions/CardActions';
export type { CardActionsProps } from './Card/CardActions/CardActions';
import CardContent, { type CardContentProps } from './Card/CardContent/CardContent';
export { default as CardContent } from './Card/CardContent/CardContent';
export type { CardContentProps } from './Card/CardContent/CardContent';
import CardHeader, { type CardHeaderProps } from './Card/CardHeader/CardHeader';
export { default as CardHeader } from './Card/CardHeader/CardHeader';
export type { CardHeaderProps } from './Card/CardHeader/CardHeader';
import Chip, { type ChipProps } from './Chip/Chip';
export { default as Chip } from './Chip/Chip';
export type { ChipProps } from './Chip/Chip';
// Grid is polymorphic so we re-export it directly
import Grid from '../Molecules/Grid/Grid';
export { default as Grid } from '../Molecules/Grid/Grid';
export type { GridProps } from '../Molecules/Grid/Grid.types';
// Collapse is not polymorphic so we wrap it with forwardRef
import Collapse, { type CollapseProps } from '../Molecules/Collapse/Collapse';
export { default as Collapse } from '../Molecules/Collapse/Collapse';
export type { CollapseProps } from '../Molecules/Collapse/Collapse';
// IconButton is polymorphic so we re-export it directly
import IconButton, { type IconButtonProps } from './IconButton/IconButton';
export { default as IconButton } from './IconButton/IconButton';
export type { IconButtonProps } from './IconButton/IconButton';
// Divider is not polymorphic so we wrap it with forwardRef
import Divider, { type DividerProps } from './Divider/Divider';
export { default as Divider } from './Divider/Divider';
export type { DividerProps } from './Divider/Divider';
// Drawer is not polymorphic so we wrap it with forwardRef
import Drawer, { type DrawerProps } from '../Molecules/Drawer/Drawer';
export { default as Drawer } from '../Molecules/Drawer/Drawer';
export type { DrawerProps } from '../Molecules/Drawer/Drawer';
// Link is polymorphic so we re-export it directly
import Link from './Link/Link';
export { default as Link } from './Link/Link';
export type { LinkProps } from './Link/Link';
import Input, { type InputProps } from './Input/Input';
export { default as Input } from './Input/Input';
export type { InputProps } from './Input/Input';
// Menu and related are polymorphic so we re-export them directly
import Menu, { type MenuProps } from '../Molecules/Menu/Menu';
export { default as Menu } from '../Molecules/Menu/Menu';
export type { MenuProps } from '../Molecules/Menu/Menu';
import MenuItem, { type MenuItemProps } from '../Molecules/Menu/MenuItem/MenuItem';
export { default as MenuItem } from '../Molecules/Menu/MenuItem/MenuItem';
export type { MenuItemProps } from '../Molecules/Menu/MenuItem/MenuItem';
// Paper is not polymorphic so we wrap it with forwardRef
import Paper, { type PaperProps } from './Paper/Paper';
export { default as Paper } from './Paper/Paper';
export type { PaperProps } from './Paper/Paper';
import Progress, { type ProgressProps } from './Progress/Progress';
export { default as Progress } from './Progress/Progress';
export type { ProgressProps } from './Progress/Progress';
// TextField is not polymorphic so we wrap it with forwardRef
import TextField, { type TextFieldProps } from './TextField/TextField';
export { default as TextField } from './TextField/TextField';
export type { TextFieldProps } from './TextField/TextField';
// Stack is not polymorphic so we wrap it with forwardRef
import Stack, { type StackProps } from '../Molecules/Stack/Stack';
export { default as Stack } from '../Molecules/Stack/Stack';
export type { StackProps } from '../Molecules/Stack/Stack';
// Switch is not polymorphic so we wrap it with forwardRef
import Switch, { type SwitchProps } from './Switch/Switch';
export { default as Switch } from './Switch/Switch';
export type { SwitchProps } from './Switch/Switch';
import Slider, { type SliderProps } from './Slider/Slider';
export { default as Slider } from './Slider/Slider';
export type { SliderProps } from './Slider/Slider';
import Surface, { type SurfaceProps } from './Surface/Surface';
export { default as Surface } from './Surface/Surface';
export type { SurfaceProps } from './Surface/Surface';
// Tables
import Table from '../Molecules/Table/Table';
export { default as Table } from '../Molecules/Table/Table';
export type { TableProps } from '../Molecules/Table/Table';
import TableBody from '../Molecules/Table/Body/TableBody';
export { default as TableBody } from '../Molecules/Table/Body/TableBody';
export type { TableBodyProps } from '../Molecules/Table/Body/TableBody';
import TableCell from '../Molecules/Table/Cell/TableCell';
export { default as TableCell } from '../Molecules/Table/Cell/TableCell';
export type { TableCellProps } from '../Molecules/Table/Cell/TableCell';
import TableHead from '../Molecules/Table/Head/TableHead';
export { default as TableHead } from '../Molecules/Table/Head/TableHead';
export type { TableHeadProps } from '../Molecules/Table/Head/TableHead';
import TableRow from '../Molecules/Table/Row/TableRow';
export { default as TableRow } from '../Molecules/Table/Row/TableRow';
export type { TableRowProps } from '../Molecules/Table/Row/TableRow';
// Toolbar is not polymorphic so we wrap it with forwardRef
import Toolbar from '../Molecules/Toolbar/Toolbar';
export { default as Toolbar } from '../Molecules/Toolbar/Toolbar';
export type { ToolbarProps } from '../Molecules/Toolbar/Toolbar';
// Tooltip is not polymorphic so we wrap it with forwardRef
import Tooltip from '../Molecules/Tooltip/Tooltip';
export { default as Tooltip } from '../Molecules/Tooltip/Tooltip';
export type { TooltipProps } from '../Molecules/Tooltip/Tooltip';
// Typography is polymorphic so we re-export it directly
import Typography, { type TypographyProps } from './Typography/Typography';
export { default as Typography } from './Typography/Typography';
export type { TypographyProps } from './Typography/Typography';
import Section from './Section/Section';
export { default as Section } from './Section/Section';
export type { SectionProps } from './Section/Section.types';
/* -------------------------------------------------------------------------------------------------
 * GuiSx — re-export of MUI’s SxProps<Theme>
 * -------------------------------------------------------------------------------------------------*/
/** Public sx type (kept for now to ease migration). */
export type GuiSx = SxProps<Theme>;
/* -------------------------------------------------------------------------------------------------
 * Namespace bundle export (optional ergonomic import)
 * -------------------------------------------------------------------------------------------------
 * Examples:
 *   import { Box } from "this.gui";   // best tree-shaking
 *   import { atoms } from "this.gui"; // grouped namespace: atoms.Box, atoms.Button, ...
 */
export const atoms = {
  Box,
  Badge,
  Typography,
  TextField,
  Input,
  Link,
  Stack,
  Divider,
  Bar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  Collapse,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Progress,
  Slider,
  Surface,
  Tooltip,
  Checkbox,
  Switch,
  Paper,
  Avatar,
  Section,
    Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} as const;
