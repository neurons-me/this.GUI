// =========================================
// this.gui public entry (root)
// Goal:
// - Provide *tree-shakeable* named exports for app bundlers.
// - Provide a *small* default surface for convenience.
//
// Rule 0 (API stability):
// - ❌ Do NOT use `export *` in the root entrypoint.
//   Root exports must be explicit so we control the public surface, avoid accidental leaks,
//   and prevent name collisions.
//
// Pattern:
//  1) constants
//  2) explicit named exports (tree-shakeable)
//  3) imports for the default surface
//  4) default surface export
//
// Usage examples:
//   // ✅ Recommended (tree-shakeable)
//   import { GuiProvider, ThemeModeToggle, Icon } from 'this.gui';
//
//   // ✅ Also supported (convenience default surface)
//   import GUI from 'this.gui';
//   const { GuiProvider, Layout } = GUI;
//   const { Button } = GUI;
//
//   // ✅ Subpath imports (more explicit boundaries)
//   // import { Button } from 'this.gui/atoms';
//   // import { useThemeContext } from 'this.gui/contexts';
//   // import { Hero } from 'this.gui/molecules';
//
// Notes:
// - Keep the default export SMALL (core primitives + a few top-level components) to protect tree-shaking.
// - Large aggregates (GUI.atoms / GUI.molecules / GUI.Components) should live in a separate
//   entrypoint (e.g. `this.gui/full`) if you decide to offer that convenience.
// =========================================
// 1) constants
export const version = '1.3.48';
// 2) named exports (tree-shakeable)
// Core primitives (ergonomic root exports)
// NOTE: Export from concrete modules (not barrels) to preserve tree-shaking and avoid pulling in the whole atoms surface.
export { default as Box } from '@/gui/atoms/Box/Box';
export { default as Button } from '@/gui/atoms/Button/Button';
export { default as Link } from '@/gui/atoms/Link/Link';
export { default as Paper } from '@/gui/atoms/Paper/Paper';
export { default as TextField } from '@/gui/atoms/TextField/TextField';
export { default as Typography } from '@/gui/atoms/Typography/Typography';
// Friendly aliases (optional ergonomics)
export { default as Text } from '@/gui/atoms/Typography/Typography';
export { default as Input } from '@/gui/atoms/TextField/TextField';
export { default as GuiProvider } from '@/gui/Theme/GuiProvider';
export { default as Layout } from '@/gui/Layout/Layout';
export { default as Icon } from '@/gui/Theme/Icon/Icon';
export { default as ThemeModeToggle } from '@/gui/Theme/ToggleMode/ToggleMode';
export { default as Blockchain } from '@/gui/components/Blockchain/blockchain';
export { default as HighLighter } from '@/gui/widgets/HighLighter/HighLighter';
export { default as CodeBlock } from '@/gui/molecules/CodeBlock/CodeBlock';
export { default as Modal } from '@/gui/molecules/Modal/Modal';
export { ThemesCatalog, Catalog } from '@/gui/Theme';
export {
  default as GUITools,
  guiToolsElements,
  guiToolsLeftSidebarConfig,
} from '@/gui/molecules/menus/GUI-Tools/GUI-Tools';
// 3) imports for the default surface
import GuiProvider from '@/gui/Theme/GuiProvider';
import Box from '@/gui/atoms/Box/Box';
import Button from '@/gui/atoms/Button/Button';
import Link from '@/gui/atoms/Link/Link';
import Paper from '@/gui/atoms/Paper/Paper';
import TextField from '@/gui/atoms/TextField/TextField';
import Typography from '@/gui/atoms/Typography/Typography';
import Layout from '@/gui/Layout/Layout';
import Icon from '@/gui/Theme/Icon/Icon';
import ThemeModeToggle from '@/gui/Theme/ToggleMode/ToggleMode';
import Blockchain from '@/gui/components/Blockchain/blockchain';
import HighLighter from '@/gui/widgets/HighLighter/HighLighter';
import HighLightsDrawer from '@/gui/widgets/HighLighter/HighLightsDrawer';
import CodeBlock from '@/gui/molecules/CodeBlock/CodeBlock';
import Dialog from '@/gui/molecules/Dialog/Dialog';
import { Hero } from '@/gui/molecules/Hero/Hero';
import Modal from '@/gui/molecules/Modal/Modal';
import Page from '@/gui/molecules/Page/Page';
import { ThemesCatalog } from '@/gui/Theme';
import GUITools, {
  guiToolsElements,
  guiToolsLeftSidebarConfig,
} from '@/gui/molecules/menus/GUI-Tools/GUI-Tools';
import IdentityNoise from '@/gui/components/IdentityNoise/IdentityNoise';
// 4) default surface export
// Runtime aggregates for UMD/introspection (avoid relying on directory barrels in the root entry)
// Keep these small and explicit.
const Atoms = {
  Box,
  Button,
  Link,
  Paper,
  TextField,
  Typography,
} as const;

const Molecules = {
  Dialog,
  Hero,
  Modal,
  Page,
  CodeBlock,
} as const;

const Widgets = {
  HighLighter,
  HighLightsDrawer,
} as const;

const Components = {
  Blockchain,
  IdentityNoise,
} as const;

const GUI = {
  version,
  Box,
  Button,
  Link,
  Paper,
  TextField,
  Typography,
  GuiProvider,
  Layout,
  Icon,
  ThemeModeToggle,
  Blockchain,
  HighLighter,
  CodeBlock,
  Modal,
  ThemesCatalog,
  Catalog: ThemesCatalog,
  Components,
  Widgets,
  Atoms,
  Molecules,
} as const;

// Attach GUI Tools to the default/UMD surface under: GUI.menus['GUI-Tools']
// (Use a string key because of the hyphen.)
const _GUI_ANY = GUI as any;

// Lowercase aliases for explorer/runtime conventions
_GUI_ANY.components = Components;
_GUI_ANY.widgets = Widgets;
_GUI_ANY.atoms = Atoms;
_GUI_ANY.molecules = Molecules;

_GUI_ANY.menus = _GUI_ANY.menus || {};
_GUI_ANY.menus['GUI-Tools'] = {
  GUITools,
  elements: guiToolsElements,
  leftSidebarConfig: guiToolsLeftSidebarConfig,
};

// Also attach CodeBlock under GUI.molecules for the UMD/global runtime.
// (If GUI.molecules is already an aggregate object elsewhere, we simply add the leaf.)
_GUI_ANY.molecules = _GUI_ANY.molecules || {};
_GUI_ANY.molecules.CodeBlock = CodeBlock;
_GUI_ANY.molecules.Modal = Modal;

export default GUI;
