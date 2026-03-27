/* 
 * This.GUI — primitives
 * Thin wrappers around MUI components to present a stable, library-owned API.
 * Internally we use MUI, but components in the design system should import from
 * "@/gui/primitives" instead of "@mui/material".
 * This file is the atom slice behind that stable primitive surface.
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
// IconButton is polymorphic so we re-export it directly
import IconButton, { type IconButtonProps } from './IconButton/IconButton';
export { default as IconButton } from './IconButton/IconButton';
export type { IconButtonProps } from './IconButton/IconButton';
// Divider is not polymorphic so we wrap it with forwardRef
import Divider, { type DividerProps } from './Divider/Divider';
export { default as Divider } from './Divider/Divider';
export type { DividerProps } from './Divider/Divider';
// Link is polymorphic so we re-export it directly
import Link from './Link/Link';
export { default as Link } from './Link/Link';
export type { LinkProps } from './Link/Link';
import Input, { type InputProps } from './Input/Input';
export { default as Input } from './Input/Input';
export type { InputProps } from './Input/Input';
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
  Divider,
  Bar,
  IconButton,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Progress,
  Slider,
  Surface,
  Checkbox,
  Switch,
  Paper,
  Avatar,
  Section,
} as const;
