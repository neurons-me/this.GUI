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

const LauncherPopoverContext = React.createContext<LauncherPopoverContextValue | undefined>(undefined);

export function LauncherPopoverProvider({ children }: { children: React.ReactNode }) {
  const [openId, setOpenId] = React.useState<string | null>(null);
  const value = React.useMemo(() => ({ openId, setOpenId }), [openId]);
  return <LauncherPopoverContext.Provider value={value}>{children}</LauncherPopoverContext.Provider>;
}

type OpenUpdater = boolean | ((prev: boolean) => boolean);

export function useLauncherPopover(id: string): [boolean, (updater: OpenUpdater) => void] {
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
