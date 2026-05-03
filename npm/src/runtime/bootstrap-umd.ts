// src/runtime/bootstrap-umd.ts
// Minimal public bootstrap API for plain HTML usage.
// Exposes: window.bootGUI()

(() => {
  const LOCAL_ASSETS = {
    css: '/gui/styles.css',
    react: '/vendor/react/react.production.min.js',
    reactDom: '/vendor/react-dom/react-dom.production.min.js',
    gui: '/gui/this.gui.umd.js',
  };
  const BOOTSTRAP_ASSETS_KEY = '__THIS_GUI_BOOTSTRAP_ASSETS__';
  const AUTOBOOT_DISABLED_KEY = '__THIS_GUI_DISABLE_AUTOBOOT__';
  const LOADED_ATTR = 'data-runtime-loaded';
  const BOOTSTRAP_STATUS_KEY = '__THIS_GUI_BOOTSTRAP_STATUS__';

  type BootstrapOptions = Partial<typeof LOCAL_ASSETS>;

  type ResolvedAssets = typeof LOCAL_ASSETS & {
    localReact?: string;
    localReactDom?: string;
  };

  function setBootstrapStatus(step: string, detail?: string) {
    const payload = {
      step,
      detail: detail || '',
      at: Date.now(),
    };
    try {
      (window as any)[BOOTSTRAP_STATUS_KEY] = payload;
      const gui = (window as any).GUI;
      if (gui && typeof gui === 'object') {
        gui.__bootstrapStatus = payload;
      }
    } catch {}
  }

  function inferSiblingAssets(): Partial<ResolvedAssets> {
    const currentScriptSrc =
      (document.currentScript as HTMLScriptElement | null)?.src ||
      Array.from(document.querySelectorAll('script[src]'))
        .map((node) => (node as HTMLScriptElement).src)
        .reverse()
        .find((src) => /this\.gui\.bootstrap\.(umd|iife)\.js(?:$|\?)/.test(String(src || '')));

    if (!currentScriptSrc) return {};

    try {
      const bootstrapUrl = new URL(currentScriptSrc, document.baseURI);
      const guiFile = /this\.gui\.bootstrap\.iife\.js(?:$|\?)/.test(bootstrapUrl.pathname)
        ? 'this.gui.iife.js'
        : 'this.gui.umd.js';
      const propagatedSearch = bootstrapUrl.search || '';
      const cssUrl = new URL('./styles.css', bootstrapUrl);
      const guiUrl = new URL(`./${guiFile}`, bootstrapUrl);
      const localReactUrl = new URL('/vendor/react/react.production.min.js', bootstrapUrl);
      const localReactDomUrl = new URL('/vendor/react-dom/react-dom.production.min.js', bootstrapUrl);
      if (propagatedSearch) {
        cssUrl.search = propagatedSearch;
        guiUrl.search = propagatedSearch;
        localReactUrl.search = propagatedSearch;
        localReactDomUrl.search = propagatedSearch;
      }

      return {
        css: cssUrl.href,
        gui: guiUrl.href,
        localReact: localReactUrl.href,
        localReactDom: localReactDomUrl.href,
      };
    } catch {
      return {};
    }
  }

  function resolveAssets(overrides: BootstrapOptions = {}): ResolvedAssets {
    const globalOverrides = (((window as any)[BOOTSTRAP_ASSETS_KEY]) || {}) as BootstrapOptions;
    return {
      ...LOCAL_ASSETS,
      ...inferSiblingAssets(),
      ...globalOverrides,
      ...overrides,
    };
  }

  const ensureLink = (href: string) =>
    new Promise<void>((resolve, reject) => {
      const existing = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).find(
        (l) => (l as HTMLLinkElement).href === href
      ) as HTMLLinkElement | undefined;
      if (existing?.getAttribute(LOADED_ATTR) === 'true') return resolve();
      if (existing) {
        existing.addEventListener(
          'load',
          () => {
            existing.setAttribute(LOADED_ATTR, 'true');
            resolve();
          },
          { once: true }
        );
        existing.addEventListener(
          'error',
          () => reject(new Error(`Failed to load css: ${href}`)),
          { once: true }
        );
        return;
      }

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.crossOrigin = 'anonymous';
      link.onload = () => {
        link.setAttribute(LOADED_ATTR, 'true');
        resolve();
      };
      link.onerror = () => reject(new Error(`Failed to load css: ${href}`));
      document.head.appendChild(link);
    });

  const ensureScript = (src: string) =>
    new Promise<void>((resolve, reject) => {
      const existing = Array.from(document.querySelectorAll('script[src]')).find(
        (s) => (s as HTMLScriptElement).src === src
      ) as HTMLScriptElement | undefined;
      if (existing?.getAttribute(LOADED_ATTR) === 'true') return resolve();
      if (existing) {
        existing.addEventListener(
          'load',
          () => {
            existing.setAttribute(LOADED_ATTR, 'true');
            resolve();
          },
          { once: true }
        );
        existing.addEventListener(
          'error',
          () => reject(new Error(`Failed to load script: ${src}`)),
          { once: true }
        );
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = false; // IMPORTANT: preserve execution order
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        script.setAttribute(LOADED_ATTR, 'true');
        resolve();
      };
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      document.head.appendChild(script);
    });

  async function loadFirstScript(candidates: Array<string | undefined | null>) {
    let lastError: unknown = null;
    const seen = new Set<string>();
    for (const candidate of candidates) {
      const src = String(candidate || '').trim();
      if (!src || seen.has(src)) continue;
      seen.add(src);
      try {
        await ensureScript(src);
        return src;
      } catch (error) {
        lastError = error;
      }
    }
    throw lastError || new Error('Failed to load required script');
  }

  // Ensure a GUI object exists early (stub), so users can call: await window.GUI.bootstrap();
  const GUI: any = ((window as any).GUI = (window as any).GUI || {});

  async function bootstrapGUI(opts: BootstrapOptions = {}) {
    const assets = resolveAssets(opts);
    setBootstrapStatus('bootstrap:start');
    // Idempotent: if runtime already loaded (mount exists), do nothing.
    if ((window as any).GUI && typeof (window as any).GUI.mount === 'function') {
      // Optional: ensure CSS is present (best-effort)
      try {
        setBootstrapStatus('bootstrap:css', assets.css);
        await ensureLink(assets.css);
      } catch {}
      setBootstrapStatus('bootstrap:ready');
      return (window as any).GUI;
    }

    // Load CSS first (best-effort)
    try {
      setBootstrapStatus('bootstrap:css', assets.css);
      await ensureLink(assets.css);
    } catch {}

    // Load React globals only if missing
    if (!(window as any).React) {
      setBootstrapStatus('bootstrap:react', assets.localReact || assets.react);
      await loadFirstScript([assets.localReact, assets.react]);
    }
    if (!(window as any).ReactDOM) {
      setBootstrapStatus('bootstrap:react-dom', assets.localReactDom || assets.reactDom);
      await loadFirstScript([assets.localReactDom, assets.reactDom]);
    }

    // Load this.GUI runtime if mount is missing
    if (!(window as any).GUI || typeof (window as any).GUI.mount !== 'function') {
      setBootstrapStatus('bootstrap:gui', assets.gui);
      await ensureScript(assets.gui);
    }

    // Validate
    if (!(window as any).GUI || typeof (window as any).GUI.mount !== 'function') {
      throw new Error('GUI bootstrap finished but window.GUI.mount is still missing');
    }

    setBootstrapStatus('bootstrap:ready');
    return (window as any).GUI;
  }

  // Single-flight: prevent duplicate loads if bootstrap called multiple times concurrently
  GUI.bootstrap = function bootstrap(opts: BootstrapOptions = {}) {
    GUI.__bootstrapAssets = {
      ...(GUI.__bootstrapAssets || {}),
      ...opts,
    };
    if (!GUI.__bootstrapPromise) {
      GUI.__bootstrapPromise = bootstrapGUI(GUI.__bootstrapAssets).catch((e: any) => {
        // Allow retry after failure
        GUI.__bootstrapPromise = null;
        throw e;
      });
    }
    return GUI.__bootstrapPromise;
  };

  // Backward-compatible alias (old API)
  (window as any).bootGUI = GUI.bootstrap;

  // Optional: auto-run once so window.GUI is ready ASAP
  if (!(window as any)[AUTOBOOT_DISABLED_KEY]) {
    GUI.bootstrap().catch((e: any) => console.warn('[this.gui bootstrap]', e));
  }
})();
