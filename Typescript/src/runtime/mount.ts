//src/runtime/mount.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import type { GuiNode, RendererOptions, ResolvedNodeRecord } from './renderer';
import { renderWithGUI } from './renderer';
import { SelectionProvider, useSelection } from './selection';
import { RuntimeEnvironmentProvider } from './runtimeContext';
import {
  ensureRuntimeControlSurface,
  readAdminViewPreference,
  readInspectorPreference,
} from './controlSurface';

export type MountTarget = string | Element;
export type MountDevtoolsOptions = {
  /**
   * Enable the runtime devtools surface.
   * When true, initial inspector/admin states are read from persisted preferences.
   */
  enabled?: boolean;
  /**
   * Mount the inspector panel runtime.
   * Even when false initially, the inspector can still be mounted if `enabled` is true
   * so it can react to later control-surface toggles.
   */
  inspector?: boolean;
  /**
   * Mount the admin view runtime.
   * Even when false initially, the admin view can still be mounted if `enabled` is true
   * so it can react to later control-surface toggles.
   */
  adminView?: boolean;
  /**
   * Show the floating inspector toggle chip.
   */
  inspectorToggleVisible?: boolean;
};

export type MountOptions = Omit<RendererOptions, 'gui' | 'React'> & {
  gui?: any;
  React?: any;
  ReactDOM?: any;
  /** Optional .me instance; if provided, mount() will derive runtime via GUI.render(me). */
  me?: any;
  /**
   * Explicit devtools configuration.
   * When omitted, mount() renders only the runtime core.
   */
  devtools?: boolean | MountDevtoolsOptions;
  /** @deprecated Use `devtools.inspector`. */
  inspectorEnabled?: boolean;
  /** @deprecated Use `devtools.adminView`. */
  adminViewEnabled?: boolean;
  /** @deprecated Use `devtools.inspectorToggleVisible`. */
  inspectorToggleVisible?: boolean;
};

type NormalizedMountDevtools = {
  requested: boolean;
  inspectorRequested: boolean;
  adminViewRequested: boolean;
  inspectorEnabled: boolean;
  adminViewEnabled: boolean;
  inspectorToggleVisible: boolean;
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

function resolveMountedKernel(options: MountOptions | any): any {
  const explicit = options?.me;
  if (explicit) return explicit;

  const runtime = options?.runtime as any;
  if (runtime?.__me) return runtime.__me;
  if (runtime?.me) return runtime.me;

  const ctx = options?.ctx as any;
  if (ctx?.me) return ctx.me;
  if (ctx?.runtime?.__me) return ctx.runtime.__me;
  if (ctx?.runtime?.me) return ctx.runtime.me;

  return undefined;
}

const LazyRuntimeInspector = React.lazy(async () => {
  const mod = await import('./inspector');
  return { default: mod.RuntimeInspector };
});

const LazyRuntimeAdminView = React.lazy(async () => {
  const mod = await import('./adminView');
  return { default: mod.RuntimeAdminView };
});

function normalizeMountDevtools(options: MountOptions): NormalizedMountDevtools {
  const legacyInspectorSet = typeof options.inspectorEnabled === 'boolean';
  const legacyAdminViewSet = typeof options.adminViewEnabled === 'boolean';
  const legacyToggleSet = typeof options.inspectorToggleVisible === 'boolean';

  const rawDevtools: MountDevtoolsOptions =
    typeof options.devtools === 'object' && options.devtools
      ? options.devtools
      : {};
  const devtoolsEnabled = options.devtools === true || rawDevtools.enabled === true;

  const inspectorRequested =
    devtoolsEnabled ||
    legacyInspectorSet ||
    typeof rawDevtools.inspector === 'boolean' ||
    legacyToggleSet ||
    typeof rawDevtools.inspectorToggleVisible === 'boolean';

  const adminViewRequested =
    devtoolsEnabled ||
    legacyAdminViewSet ||
    typeof rawDevtools.adminView === 'boolean';

  const requested = inspectorRequested || adminViewRequested;
  if (!requested) {
    return {
      requested: false,
      inspectorRequested: false,
      adminViewRequested: false,
      inspectorEnabled: false,
      adminViewEnabled: false,
      inspectorToggleVisible: false,
    };
  }

  ensureRuntimeControlSurface();

  return {
    requested,
    inspectorRequested,
    adminViewRequested,
    inspectorEnabled: legacyInspectorSet
      ? Boolean(options.inspectorEnabled)
      : typeof rawDevtools.inspector === 'boolean'
        ? Boolean(rawDevtools.inspector)
        : devtoolsEnabled
          ? readInspectorPreference()
          : false,
    adminViewEnabled: legacyAdminViewSet
      ? Boolean(options.adminViewEnabled)
      : typeof rawDevtools.adminView === 'boolean'
        ? Boolean(rawDevtools.adminView)
        : devtoolsEnabled
          ? readAdminViewPreference()
          : false,
    inspectorToggleVisible: legacyToggleSet
      ? Boolean(options.inspectorToggleVisible)
      : Boolean(rawDevtools.inspectorToggleVisible),
  };
}

function RuntimeCoreRoot({
  spec,
  gui,
  options,
  ReactNS,
  onNodeResolved,
}: {
  spec: GuiNode;
  gui: any;
  options: MountOptions;
  ReactNS: any;
  onNodeResolved?: (record: ResolvedNodeRecord) => void;
}) {
  const renderOptions = React.useMemo(
    () => ({
      ...options,
      React: ReactNS,
      onNodeResolved,
    }),
    [options, ReactNS, onNodeResolved]
  );
  const rendered = React.useMemo(
    () => renderWithGUI(spec, gui, renderOptions),
    [spec, gui, renderOptions]
  );

  return React.createElement(React.Fragment, null, rendered);
}

function RuntimeDevtoolsLayer({
  devtools,
}: {
  devtools: NormalizedMountDevtools;
}) {
  if (!devtools.requested) return null;

  return React.createElement(
    React.Suspense,
    { fallback: null },
    devtools.inspectorRequested
      ? React.createElement(LazyRuntimeInspector, {
          toggleVisible: Boolean(devtools.inspectorToggleVisible),
        })
      : null,
    devtools.adminViewRequested
      ? React.createElement(LazyRuntimeAdminView, {
          enabled:
            typeof devtools.adminViewEnabled === 'boolean'
              ? Boolean(devtools.adminViewEnabled)
              : undefined,
        })
      : null
  );
}

function RuntimeSelectionRoot({
  spec,
  gui,
  options,
  ReactNS,
  devtools,
}: {
  spec: GuiNode;
  gui: any;
  options: MountOptions;
  ReactNS: any;
  devtools: NormalizedMountDevtools;
}) {
  const selection = useSelection();
  const registerNode = selection.registerNode;
  const unregisterNode = selection.unregisterNode;
  const pendingResolved = React.useRef<ResolvedNodeRecord[]>([]);
  const lastResolvedIds = React.useRef<Set<string>>(new Set());
  const collectResolved = React.useCallback((record: ResolvedNodeRecord) => {
    pendingResolved.current.push(record);
  }, []);

  React.useLayoutEffect(() => {
    if (!pendingResolved.current.length) return;
    const batch = pendingResolved.current.slice();
    pendingResolved.current = [];
    const deduped = new Map<string, ResolvedNodeRecord>();
    batch.forEach((record) => deduped.set(record.id, record));
    const nextIds = new Set(deduped.keys());

    lastResolvedIds.current.forEach((id) => {
      if (!nextIds.has(id)) {
        unregisterNode(id);
      }
    });

    deduped.forEach((record) => registerNode(record));
    lastResolvedIds.current = nextIds;
  }, [registerNode, unregisterNode]);

  React.useEffect(() => {
    return () => {
      lastResolvedIds.current.forEach((id) => unregisterNode(id));
      lastResolvedIds.current = new Set();
    };
  }, [unregisterNode]);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(RuntimeCoreRoot, {
      spec,
      gui,
      options,
      ReactNS,
      onNodeResolved: collectResolved,
    }),
    React.createElement(RuntimeDevtoolsLayer, {
      devtools,
    })
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
  const devtools = normalizeMountDevtools(finalOptions);
  const resolvedMe = resolveMountedKernel(finalOptions);
  if (!finalOptions.runtime && resolvedMe) {
    const runtimeFactory =
      typeof gui?.render === 'function'
        ? gui.render
        : typeof gui?.RunMe === 'function'
          ? gui.RunMe
          : null;
    if (runtimeFactory) {
      finalOptions = { ...finalOptions, runtime: runtimeFactory(resolvedMe) };
    }
  }

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
    RuntimeEnvironmentProvider,
    {
      value: {
        gui,
        runtime: finalOptions.runtime,
        ctx: finalOptions.ctx,
        me: resolvedMe,
      },
    },
    devtools.requested
      ? React.createElement(
          SelectionProvider,
          { initialInspectorEnabled: Boolean(devtools.inspectorEnabled) },
          React.createElement(RuntimeSelectionRoot, {
            spec: finalSpec,
            gui,
            options: finalOptions,
            ReactNS: React,
            devtools,
          })
        )
      : React.createElement(RuntimeCoreRoot, {
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
