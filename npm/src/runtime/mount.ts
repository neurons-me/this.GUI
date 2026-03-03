//src/runtime/mount.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import type { GuiNode, RendererOptions } from './renderer';
import { renderWithGUI } from './renderer';
import { SelectionProvider, useSelection } from './selection';
import { RuntimeInspector } from './inspector';

export type MountTarget = string | Element;
export type MountOptions = Omit<RendererOptions, 'gui' | 'React'> & {
  gui?: any;
  React?: any;
  ReactDOM?: any;
  inspectorEnabled?: boolean;
};

// Cache React roots by host element so repeated `mount()` calls update instead of re-creating roots.
// Use a WeakMap to avoid memory leaks when elements are removed.
const ROOTS_KEY = '__THIS_GUI_RUNTIME_ROOTS__';

type ReactRoot = {
  render: (el: any) => void;
  unmount: () => void;
};

function getRootCache(): WeakMap<Element, ReactRoot> {
  const g = globalThis as any;
  if (!g[ROOTS_KEY]) g[ROOTS_KEY] = new WeakMap<Element, ReactRoot>();
  return g[ROOTS_KEY] as WeakMap<Element, ReactRoot>;
}

function resolveTarget(target: MountTarget): Element {
  if (typeof target === 'string') {
    const el = document.querySelector(target);
    if (!el) throw new Error(`[this.GUI] mount target not found: ${target}`);
    return el;
  }
  return target;
}

function isTargetLike(value: any): value is MountTarget {
  return (
    typeof value === 'string' ||
    (typeof Element !== 'undefined' && value instanceof Element)
  );
}

function isPlainObject(value: any): value is Record<string, any> {
  return !!value && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype;
}

const LEGACY_WARN_KEY = '__THIS_GUI_MOUNT_LEGACY_WARNED__';

function warnLegacySignature() {
  const g = globalThis as any;
  if (g[LEGACY_WARN_KEY]) return;
  g[LEGACY_WARN_KEY] = true;
  // eslint-disable-next-line no-console
  console.warn(
    '[this.gui] DEPRECATED: mount(target, spec, ctx) will be removed in the next major version. ' +
      'Use mount(spec, target, { ctx, ...options }).'
  );
}

function getReactGlobals(opt?: any) {
  const g = globalThis as any;
  return {
    gui: opt?.gui ?? g.GUI,
    React: opt?.React ?? g.React,
    ReactDOM: opt?.ReactDOM ?? g.ReactDOM,
  };
}

function RuntimeRoot({
  spec,
  gui,
  options,
  ReactNS,
}: {
  spec: GuiNode;
  gui: any;
  options: MountOptions;
  ReactNS: any;
}) {
  const selection = useSelection();
  const renderOptions = React.useMemo(
    () => ({
      ...options,
      React: ReactNS,
      onNodeResolved: selection.registerNode,
    }),
    [options, ReactNS, selection.registerNode]
  );
  const rendered = React.useMemo(
    () => renderWithGUI(spec, gui, renderOptions),
    [spec, gui, renderOptions]
  );
  return React.createElement(
    React.Fragment,
    null,
    rendered,
    React.createElement(RuntimeInspector, null)
  );
}

/**
 * Mount (or update) a GUI tree into a DOM host.
 * - Repeated calls with the same host element will *update* the existing React root.
 * - Returns a handle with `root` and `unmount()`.
 */
export function mount(
  arg1: GuiNode | MountTarget,
  arg2: MountTarget | GuiNode,
  arg3: MountOptions | any = {}
) {
  let finalSpec = arg1 as GuiNode;
  let finalTarget = arg2 as MountTarget;
  let finalOptions = (arg3 ?? {}) as MountOptions;

  // Backward compatibility:
  // mount(target, spec, ctx) -> mount(spec, target, { ctx })
  if (isTargetLike(arg1) && !isTargetLike(arg2)) {
    warnLegacySignature();
    finalSpec = arg2 as GuiNode;
    finalTarget = arg1 as MountTarget;

    if (isPlainObject(arg3)) {
      finalOptions = { ...arg3 } as MountOptions;
      if (!('ctx' in finalOptions)) {
        (finalOptions as any).ctx = arg3;
      }
    } else {
      finalOptions = { ctx: arg3 } as MountOptions;
    }
  }

  const { gui, React, ReactDOM } = getReactGlobals(finalOptions);

  if (!gui) throw new Error('[this.GUI] Missing window.GUI (UMD surface).');
  if (!React) throw new Error('[this.GUI] Missing window.React.');
  if (!ReactDOM?.createRoot) throw new Error('[this.GUI] Missing ReactDOM.createRoot.');

  const host = resolveTarget(finalTarget);
  const cache = getRootCache();

  let root = cache.get(host);
  if (!root) {
    root = ReactDOM.createRoot(host) as ReactRoot;
    cache.set(host, root);
  }

  let el = React.createElement(
    SelectionProvider,
    { initialInspectorEnabled: Boolean(finalOptions.inspectorEnabled) },
    React.createElement(RuntimeRoot, {
      spec: finalSpec,
      gui,
      options: finalOptions,
      ReactNS: React,
    })
  );

  // Some components rely on `useInsetsContext`, which requires an `InsetsProvider` above.
  // In UMD mode we try to discover providers from the exposed `window.GUI` surface.
  const InsetsProvider =
    (gui && (gui.InsetsProvider || gui.insetsProvider)) ||
    (gui?.Contexts && (gui.Contexts.InsetsProvider || gui.Contexts.insetsProvider)) ||
    (gui?.contexts && (gui.contexts.InsetsProvider || gui.contexts.insetsProvider)) ||
    (gui?.Theme && (gui.Theme.InsetsProvider || gui.Theme.insetsProvider)) ||
    (gui?.theme && (gui.theme.InsetsProvider || gui.theme.insetsProvider));

  // If your GUI has a top-level theme/provider (common in this.GUI), wrap with it as well.
  const ThemeProvider =
    gui?.Theme ||
    gui?.theme?.Theme ||
    (gui?.Theme && gui.Theme.Theme);

  if (InsetsProvider) {
    el = React.createElement(InsetsProvider as any, null, el);
  }
  if (ThemeProvider) {
    el = React.createElement(ThemeProvider as any, null, el);
  }

  root.render(el);

  return {
    root,
    host,
    unmount: () => {
      try {
        root?.unmount?.();
      } finally {
        // Ensure future mounts recreate a fresh root.
        cache.delete(host);
      }
    },
  };
}
