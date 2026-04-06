import { router as createRouter, type Router, type RouterRuntime } from '@/Router/Router';
import { render } from '@/runtime/run-me';

export type GuiRouteState = {
  path: string;
  usedLegacyQuery: boolean;
};

type InstallHook = (gui: any) => void | Promise<void>;

export type StartAppOptions = {
  target?: Element | string | null;
  root?: Element | string | null;
  rootId?: string;
  basePath?: string;
  useHistory?: boolean;
  inputUrl?: string | URL;
  legacyRouteQueryKey?: string | false;
  runtime?: RouterRuntime | null;
  me?: any;
  createMe?: () => any | Promise<any>;
  registerRoutes?: (router: Router) => void | Promise<void>;
  install?: InstallHook | InstallHook[];
  ctx?: Record<string, any>;
  gui?: any;
};

const APP_BOOT_STATUS_KEY = '__THIS_GUI_APP_BOOT_STATUS__';

function setAppBootStatus(step: string, detail?: string) {
  try {
    (globalThis as any)[APP_BOOT_STATUS_KEY] = {
      step,
      detail: detail || '',
      at: Date.now(),
    };
  } catch {}
}

function isNativePromise<T = unknown>(value: unknown): value is Promise<T> {
  return value instanceof Promise || Object.prototype.toString.call(value) === '[object Promise]';
}

function resolveTarget({ target, root, rootId = 'root' }: StartAppOptions): Element | null {
  const candidate = target ?? root ?? (typeof document !== 'undefined' ? document.getElementById(rootId) : null);
  if (!candidate) return null;
  return typeof candidate === 'string' ? document.querySelector(candidate) : candidate;
}

function resolveGuiSurface(explicitGui?: any): any {
  if (explicitGui) return explicitGui;
  if (typeof window !== 'undefined' && (window as any).GUI) return (window as any).GUI;
  if (typeof globalThis !== 'undefined' && (globalThis as any).GUI) return (globalThis as any).GUI;
  return null;
}

function normalizeBasePath(basePath?: string): string {
  const input = String(basePath ?? '').trim();
  if (!input || input === '/') return '';
  const first = input.startsWith('/') ? input : `/${input}`;
  const collapsed = first.replace(/\/{2,}/g, '/');
  return collapsed !== '/' && collapsed.endsWith('/') ? collapsed.replace(/\/+$/, '') : collapsed;
}

export function normalizeRoutePath(route: string): string {
  const value = String(route ?? '').trim();
  if (!value) return '/';

  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`;
  const withoutQuery = withLeadingSlash.split('?')[0]?.split('#')[0] ?? '/';
  let normalized = withoutQuery.replace(/\/{2,}/g, '/');

  if (normalized === '/index.html') return '/';
  if (normalized.endsWith('/index.html')) {
    normalized = normalized.slice(0, -'/index.html'.length) || '/';
  }

  if (normalized !== '/' && normalized.endsWith('/')) {
    normalized = normalized.replace(/\/+$/, '');
  }

  return normalized || '/';
}

export function deriveRouteState(
  inputUrl: string | URL,
  basePath = '/',
  legacyRouteQueryKey: string | false = 'route'
): GuiRouteState {
  const url =
    inputUrl instanceof URL
      ? inputUrl
      : new URL(String(inputUrl ?? '/'), 'http://localhost');

  if (legacyRouteQueryKey) {
    const legacyRoute = url.searchParams.get(legacyRouteQueryKey);
    if (legacyRoute) {
      return {
        path: normalizeRoutePath(legacyRoute),
        usedLegacyQuery: true,
      };
    }
  }

  const normalizedBase = normalizeBasePath(basePath);
  const pathname = url.pathname || '/';

  if (normalizedBase && pathname.startsWith(normalizedBase)) {
    return {
      path: normalizeRoutePath(pathname.slice(normalizedBase.length) || '/'),
      usedLegacyQuery: false,
    };
  }

  return {
    path: normalizeRoutePath(pathname),
    usedLegacyQuery: false,
  };
}

export async function startApp(options: StartAppOptions = {}) {
  const target = resolveTarget(options);
  if (!target) {
    throw new Error('[this.gui] startApp could not resolve a mount target.');
  }
  setAppBootStatus('start-app:target-ready');

  const gui = resolveGuiSurface(options.gui);
  const routerFactory = gui?.router || createRouter;
  if (typeof routerFactory !== 'function') {
    throw new Error('[this.gui] startApp requires a router factory.');
  }
  setAppBootStatus('start-app:gui-ready');

  const basePath = normalizeBasePath(options.basePath);
  const currentUrl =
    options.inputUrl ||
    (typeof window !== 'undefined' ? window.location.href : '/');
  const routeState = deriveRouteState(currentUrl, basePath, options.legacyRouteQueryKey ?? 'route');
  setAppBootStatus('start-app:route-derived', routeState.path);

  const installers = Array.isArray(options.install)
    ? options.install
    : options.install
      ? [options.install]
      : [];

  for (const install of installers) {
    setAppBootStatus('start-app:install');
    await install(gui);
  }

  let runtime = options.runtime ?? null;
  if (!runtime) {
    let me = options.me;
    if (me == null && typeof options.createMe === 'function') {
      setAppBootStatus('start-app:create-me:start');
      const created = options.createMe();
      me = isNativePromise(created) ? await created : created;
      setAppBootStatus('start-app:create-me:done');
    }

    if (me == null && typeof window !== 'undefined') {
      const MeCtor = (window as any).Me || (globalThis as any).Me;
      if (typeof MeCtor === 'function') {
        me = new MeCtor();
      }
    }

    if (me != null) {
      setAppBootStatus('start-app:runtime:create');
      const runtimeFactory =
        gui && typeof gui.render === 'function'
          ? gui.render
          : render;
      runtime = runtimeFactory(me);
      setAppBootStatus('start-app:runtime:ready');
    }
  }

  setAppBootStatus('start-app:router:create');
  const appRouter = routerFactory(target, {
    runtime,
    useHistory: options.useHistory ?? true,
    basePath,
  });
  setAppBootStatus('start-app:router:ready');

  if (typeof window !== 'undefined') {
    (window as any).__GUI_APP_ROUTER__ = appRouter;
  }

  if (typeof options.registerRoutes === 'function') {
    setAppBootStatus('start-app:register-routes:start');
    await options.registerRoutes(appRouter);
    setAppBootStatus('start-app:register-routes:done');
  }

  setAppBootStatus('start-app:router:start', routeState.path);
  await appRouter.start(routeState.path, options.ctx ?? {});
  setAppBootStatus('start-app:router:start:done', routeState.path);

  if (
    routeState.usedLegacyQuery &&
    typeof window !== 'undefined' &&
    typeof window.history?.replaceState === 'function' &&
    typeof appRouter.href === 'function'
  ) {
    window.history.replaceState(null, '', appRouter.href(routeState.path));
  }

  return {
    gui,
    router: appRouter,
    runtime,
    routeState,
    basePath,
  };
}
