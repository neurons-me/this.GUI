// runtime/launcherPopover.tsx
//
// ThemeLauncher/MeLauncher/DevToolsLauncher each own a hover-opened Popper
// and, until this file existed, each tracked its own `open` state with a
// private useState — nothing stopped two of them from being open at once.
// Sitting in the same LeftBar footer rail, hovering one after another (or
// even just moving the mouse across the rail) left their poppers stacked on
// top of each other. LauncherPopoverProvider gives sibling launchers one
// shared "which one is open" slot instead: opening any of them closes
// whichever other one was open.
//
// useLauncherPopover(id) mirrors useState's `[value, setValue]` shape on
// purpose, so a launcher's existing `const [open, setOpen] = useState(false)`
// becomes `useLauncherPopover('id')` with no other changes to its openMenu
// logic. Outside a LauncherPopoverProvider it falls back to true local
// state (same no-provider-doesn't-crash stance as useOptionalSelection) —
// a launcher used standalone, without its sibling launchers, still works.
import * as React from 'react';

type LauncherPopoverContextValue = {
  openId: string | null;
  setOpenId: (id: string | null) => void;
};

// This module ends up bundled into multiple separate chunks — this.gui
// ships runtime/react/devtools as SEPARATE entry points
// (this.gui/this.gui/react/this.gui/devtools), and a launcher component
// pulled from each one drags its own copy of this file along with it,
// since Vite doesn't dedupe a shared internal module across entry-point
// boundaries by default. Each copy calling React.createContext() at module
// scope produces a DIFFERENT context object — same React runtime (React is
// a peer dependency, genuinely shared), but createContext() still returns
// a new object every call. A Provider from one copy is invisible to
// useContext() reading a different copy's context object, so every
// launcher silently falls back to independent local state — confirmed
// live: DevToolsLauncher and MeLauncher popovers both rendered open
// simultaneously, and the built dist literally contains this module 3x
// (DevToolsLauncher-*.js, MeLauncher-*.js, index-*.js). Same failure class
// as the MUI ThemeContext duplication fixed earlier via externalizing
// @mui/material/@mui/system (vite.config.js) — this module is this.gui's
// own source, not an external dep, so it can't be externalized the same
// way. Fix instead: key the actual Context object off `globalThis`, so
// every bundled copy of this file resolves to the exact same object no
// matter how many chunks it got duplicated into.
const GLOBAL_KEY = '__THIS_GUI_LAUNCHER_POPOVER_CONTEXT__';

function getLauncherPopoverContext(): React.Context<LauncherPopoverContextValue | undefined> {
  const g = globalThis as unknown as Record<string, React.Context<LauncherPopoverContextValue | undefined>>;
  if (!g[GLOBAL_KEY]) {
    g[GLOBAL_KEY] = React.createContext<LauncherPopoverContextValue | undefined>(undefined);
  }
  return g[GLOBAL_KEY];
}

export function LauncherPopoverProvider({ children }: { children: React.ReactNode }) {
  const [openId, setOpenId] = React.useState<string | null>(null);
  const value = React.useMemo(() => ({ openId, setOpenId }), [openId]);
  const LauncherPopoverContext = getLauncherPopoverContext();
  return <LauncherPopoverContext.Provider value={value}>{children}</LauncherPopoverContext.Provider>;
}

type OpenUpdater = boolean | ((prev: boolean) => boolean);

export function useLauncherPopover(id: string): [boolean, (updater: OpenUpdater) => void] {
  const LauncherPopoverContext = getLauncherPopoverContext();
  const ctx = React.useContext(LauncherPopoverContext);
  const [localOpen, setLocalOpen] = React.useState(false);

  if (ctx) {
    const open = ctx.openId === id;
    const setOpen = (updater: OpenUpdater) => {
      const next = typeof updater === 'function' ? (updater as (prev: boolean) => boolean)(open) : updater;
      ctx.setOpenId(next ? id : null);
    };
    return [open, setOpen];
  }

  return [localOpen, setLocalOpen];
}
