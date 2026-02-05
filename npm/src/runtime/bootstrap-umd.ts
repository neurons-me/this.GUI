// src/runtime/bootstrap-umd.ts
// Minimal public bootstrap API for plain HTML usage.
// Exposes: window.bootGUI()

(() => {
  const CDN = {
    css: 'https://cdn.jsdelivr.net/npm/this.gui@latest/dist/styles.css',
    react: 'https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js',
    reactDom: 'https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js',
    gui: 'https://cdn.jsdelivr.net/npm/this.gui@latest/dist/this.gui.umd.js',
  };

  const ensureLink = (href: string) =>
    new Promise<void>((resolve, reject) => {
      const existing = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).some(
        (l) => (l as HTMLLinkElement).href === href
      );
      if (existing) return resolve();

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.crossOrigin = 'anonymous';
      link.onload = () => resolve();
      link.onerror = () => reject(new Error(`Failed to load css: ${href}`));
      document.head.appendChild(link);
    });

  const ensureScript = (src: string) =>
    new Promise<void>((resolve, reject) => {
      const existing = Array.from(document.querySelectorAll('script[src]')).some(
        (s) => (s as HTMLScriptElement).src === src
      );
      if (existing) return resolve();

      const script = document.createElement('script');
      script.src = src;
      script.async = false; // IMPORTANT: preserve execution order
      script.crossOrigin = 'anonymous';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      document.head.appendChild(script);
    });

  // Ensure a GUI object exists early (stub), so users can call: await window.GUI.bootstrap();
  const GUI: any = ((window as any).GUI = (window as any).GUI || {});

  type BootstrapOptions = {
    // future: allow overriding CDN endpoints, rootId, etc.
  };

  async function bootstrapGUI(_opts: BootstrapOptions = {}) {
    // Idempotent: if runtime already loaded (mount exists), do nothing.
    if ((window as any).GUI && typeof (window as any).GUI.mount === 'function') {
      // Optional: ensure CSS is present (best-effort)
      try {
        await ensureLink(CDN.css);
      } catch {}
      return (window as any).GUI;
    }

    // Load CSS first (best-effort)
    try {
      await ensureLink(CDN.css);
    } catch {}

    // Load React globals only if missing
    if (!(window as any).React) await ensureScript(CDN.react);
    if (!(window as any).ReactDOM) await ensureScript(CDN.reactDom);

    // Load this.GUI runtime if mount is missing
    if (!(window as any).GUI || typeof (window as any).GUI.mount !== 'function') {
      await ensureScript(CDN.gui);
    }

    // Validate
    if (!(window as any).GUI || typeof (window as any).GUI.mount !== 'function') {
      throw new Error('GUI bootstrap finished but window.GUI.mount is still missing');
    }

    return (window as any).GUI;
  }

  // Single-flight: prevent duplicate loads if bootstrap called multiple times concurrently
  GUI.bootstrap = function bootstrap() {
    if (!GUI.__bootstrapPromise) {
      GUI.__bootstrapPromise = bootstrapGUI().catch((e: any) => {
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
  GUI.bootstrap().catch((e: any) => console.warn('[this.gui bootstrap]', e));
})();