// =========================================
// this.gui public entry (root)
// Goal:
// - Provide *tree-shakeable* named exports for app bundlers.
// - Provide a *small* runtime aggregate for UMD/introspection (no default export).
//
// Rule 0 (API stability):
// - ❌ Do NOT use `export *` in the root entrypoint.
//   Root exports must be explicit so we control the public surface, avoid accidental leaks,
//   and prevent name collisions.
//
// Pattern:
//  1) constants
//  2) explicit named exports (tree-shakeable)
//  3) runtime aggregates (UMD/global convenience)
//
// Usage examples:
//   // ✅ Recommended (tree-shakeable)
//   import { Theme, ThemeModeToggle, Icon } from 'this.gui';
//
//   // ✅ UMD/global usage (browser)
//   // window.GUI.Button, window.GUI.mount, etc.
//
//   // ✅ Subpath imports (more explicit boundaries)
//   // import { Button } from 'this.gui/atoms';
//   // import { useThemeContext } from 'this.gui/contexts';
//   // import { Hero } from 'this.gui/molecules';
//
// Notes:
// - Keep the *root exports* SMALL (core primitives + a few top-level compounds) to protect tree-shaking.
// - Large aggregates (GUI.atoms / GUI.molecules / GUI.Compounds) should live in a separate
//   entrypoint (e.g. `this.gui/full`) if you decide to offer that convenience.
// =========================================
// 1) constants
declare const __GUI_VERSION__: string;
const injectedVersion = typeof __GUI_VERSION__ !== 'undefined' ? __GUI_VERSION__ : undefined;
export const version = injectedVersion || '0.0.0-dev';
export type { Theme as MuiTheme } from '@mui/material/styles';
// 2) named exports (tree-shakeable)
// Core primitives (ergonomic root exports)
// NOTE: Export from concrete modules (not barrels) to preserve tree-shaking and avoid pulling in the whole atoms surface.
export { default as Box } from '@/gui/Atoms/Box/Box';
export { default as Button } from '@/gui/Atoms/Button/Button';
export { default as Checkbox } from '@/gui/Atoms/Checkbox/Checkbox';
export { default as Link } from '@/gui/Atoms/Link/Link';
export { default as Paper } from '@/gui/Atoms/Paper/Paper';
export { default as TextField } from '@/gui/Atoms/TextField/TextField';
export { default as Typography } from '@/gui/Atoms/Typography/Typography';
// Friendly aliases (optional ergonomics)
export { default as Text } from '@/gui/Atoms/Typography/Typography';
export { default as Input } from '@/gui/Atoms/TextField/TextField';
export { default as Theme } from '@/gui/Theme/Theme';
export { default as Layout } from '@/gui/Layout/Layout';
export { default as Icon } from '@/gui/Atoms/Icon/Icon';
export { default as DomIcon } from '@/gui/Atoms/Icon/DomIcon';
export { default as ThemeModeToggle } from '@/gui/Theme/ToggleMode/ToggleMode';
export { default as AllThis } from '@/gui/All.This/All.This';
export { default as ModuleCard } from '@/gui/All.This/src/ModuleCard/ModuleCard';
export { default as ModuleRow } from '@/gui/All.This/src/ModuleRow/ModuleRow';
export { default as ModulesGrid } from '@/gui/All.This/src/ModulesGrid/ModulesGrid';
export { default as ModulesList } from '@/gui/All.This/src/ModulesList/ModulesList';
export { default as Cleaker } from '@/gui/All.This/Cleaker/Cleaker';
export { default as CleakerQR } from '@/gui/All.This/Cleaker/QR/CleakerQR';
export { default as Blockchain } from '@/gui/All.This/Cleaker/Blockchain/blockchain';
export { default as FaceRecognition } from '@/gui/widgets/FaceRecognition/FaceRecognition';
export { default as Monad } from '@/gui/All.This/monad.ai/monad.ai';
export type { MonadProps } from '@/gui/All.This/monad.ai/monad.ai';
export { default as HighLighter } from '@/gui/widgets/HighLighter/HighLighter';
export { default as CodeBlock } from '@/gui/Molecules/CodeBlock/CodeBlock';
export { default as Modal } from '@/gui/Molecules/Modal/Modal';
export { ThemesCatalog, Catalog } from '@/gui/Theme';
export {
  default as GUITools,
  guiToolsElements,
  guiToolsLeftSidebarConfig,
} from '@/gui/Molecules/menus/GUI-Tools/GUI-Tools';
// 3) runtime aggregates (UMD/global convenience)
// These are *named exports* so in UMD builds you can do:
//   window.GUI.mount(...)
//   window.GUI.Button
//   window.GUI.Atoms.Button
// without any `window.GUI.default` wrapper.
// NOTE: We still import concrete modules (not barrels) to preserve tree-shaking.
import ThemeComponent from '@/gui/Theme/Theme';
import { GuiRegistry as RegistryEntries } from '@/Registry';
import { atoms as AtomsBundle } from '@/gui/Atoms';
import Box from '@/gui/Atoms/Box/Box';
import Button from '@/gui/Atoms/Button/Button';
import Checkbox from '@/gui/Atoms/Checkbox/Checkbox';
import Link from '@/gui/Atoms/Link/Link';
import Paper from '@/gui/Atoms/Paper/Paper';
import TextField from '@/gui/Atoms/TextField/TextField';
import Typography from '@/gui/Atoms/Typography/Typography';
import Layout from '@/gui/Layout/Layout';
import Icon from '@/gui/Atoms/Icon/Icon';
import DomIcon from '@/gui/Atoms/Icon/DomIcon';
import ThemeModeToggle from '@/gui/Theme/ToggleMode/ToggleMode';
import AllThis from '@/gui/All.This/All.This';
import FaceRecognition from '@/gui/widgets/FaceRecognition/FaceRecognition';
import Monad from '@/gui/All.This/monad.ai/monad.ai';
import HighLighter from '@/gui/widgets/HighLighter/HighLighter';
import HighLightsDrawer from '@/gui/widgets/HighLighter/HighLightsDrawer';
import CodeBlock from '@/gui/Molecules/CodeBlock/CodeBlock';
import Dialog from '@/gui/Molecules/Dialog/Dialog';
import { Hero } from '@/gui/Molecules/Hero/Hero';
import MoleculesBundle from '@/gui/Molecules';
import Modal from '@/gui/Molecules/Modal/Modal';
import Page from '@/gui/Molecules/Page/Page';
import { ThemesCatalog } from '@/gui/Theme';
import GUITools, {
  guiToolsElements,
  guiToolsLeftSidebarConfig,
} from '@/gui/Molecules/menus/GUI-Tools/GUI-Tools';
import CompoundsBundle from '@/gui/Compounds';
import Cleaker from '@/gui/All.This/Cleaker/Cleaker';

export const Atoms = AtomsBundle;

export const Molecules = MoleculesBundle;

export const Widgets = {
  FaceRecognition,
  HighLighter,
  HighLightsDrawer,
  Monad,
} as const;

export const Compounds = {
  ...CompoundsBundle,
  Icon,
  DomIcon,
  ThemeModeToggle,
} as const;

// Legacy alias kept so older UMD consumers keep working.
export const Components = Compounds;

export const ThemeRuntime = {
  Theme: ThemeComponent,
  Layout,
  Icon,
  DomIcon,
  ThemeModeToggle,
} as const;

// Lowercase aliases for explorer/runtime conventions
export const atoms = Atoms;
export const molecules = Molecules;
export const widgets = Widgets;
export const compounds = Compounds;
// Legacy lowercase alias kept for compatibility.
export const components = compounds;
export const theme = ThemeRuntime;
export const Registry = RegistryEntries;
export const registry = RegistryEntries;
// Menus registry (kept explicit to avoid accidental surface growth)
export const menus = {
  'GUI-Tools': {
    GUITools,
    elements: guiToolsElements,
    leftSidebarConfig: guiToolsLeftSidebarConfig,
  },
} as const;
// Mount API (React runtime)
// GuiNode → renderer → ReactDOM, expects React/ReactDOM globals in UMD usage.
export { mount } from '@/runtime/mount';
export type { MountTarget } from '@/runtime/mount';
export {
  ensureRuntimeControlSurface,
  getAdminViewEnabled,
  getInspectorEnabled,
  setAdminViewEnabled,
  setInspectorEnabled,
  toggleAdminView,
  toggleInspector,
} from '@/runtime/controlSurface';
export { Router, RouterProvider } from '@/Router/Router';
export { RunMe } from '@/runtime/run-me';
