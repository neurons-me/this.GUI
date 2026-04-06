// src/GUI.tsx
/**
 * @deprecated Compatibility surface for the legacy app/router bootstrap path.
 * New development should mount specs through `runtime/mount.ts`.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Theme from '@/gui/Theme/Theme';
import ThemeModeToggle from '@/gui/Theme/ToggleMode/ToggleMode';
import { RouterProvider } from '@/Router/Router';
import { GuiRegistry as CORE_REGISTRY, extendRegistry } from '@/Registry';
import type { GuiRegistry as GuiRegistryType } from '@/Registry/types';
import type { GuiNode, GuiSpecNode } from '@/types/gui.types';
import { GUISettings } from '@/gui/Layout/Sidebars/Collections';
import { createHttpNamespaceProvider } from '@/runtime/provider';
import { deriveRouteState, normalizeRoutePath, startApp } from '@/runtime/start-app';
export type { GuiNode, GuiSpecNode } from '@/types/gui.types';
export type GUIProps = {
  title?: string;
  children?: React.ReactNode;
  /** Optional declarative spec to render (schema/AST). */
  spec?: GuiSpecNode | GuiSpecNode[];
  /** Optional extra resolvers to extend/override the core registry. */
  resolvers?: any[];
  /** Optional ctx passed to resolvers (handlers/actions/etc.). */
  ctx?: any;
};

let __GUI_REGISTRY__: GuiRegistryType = CORE_REGISTRY as unknown as GuiRegistryType;
/** @deprecated Prefer the runtime registry + `mount()` for new work. */
export function installResolvers(entries: any[]) {
  if (!Array.isArray(entries) || !entries.length) return;
  __GUI_REGISTRY__ = extendRegistry(__GUI_REGISTRY__, entries);
}

function isPrimitive(value: any): value is string | number | boolean | null | undefined {
  const t = typeof value;
  return value == null || t === 'string' || t === 'number' || t === 'boolean';
}

function isGuiSpec(value: any): value is GuiSpecNode {
  return (
    !!value &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    !('$$typeof' in value) &&
    'type' in value
  );
}

function isGuiNode(value: any): value is GuiNode {
  return isPrimitive(value) || Array.isArray(value) || isGuiSpec(value);
}

function renderSpec(registry: GuiRegistryType, spec: any, ctx?: any): any {
  if (spec == null) return null;
  const normalizeResolved = (resolved: any) => {
    if (!Array.isArray(resolved)) return resolved;
    return resolved.map((child, i) => {
      const key =
        (React.isValidElement(child) && child.key != null) ? child.key : i;
      return <React.Fragment key={key as any}>{child}</React.Fragment>;
    });
  };
  // Arrays are treated as fragments
  if (Array.isArray(spec)) {
    return (
      <>
        {spec.map((node, i) => (
          <React.Fragment key={i}>{renderSpec(registry, node, ctx)}</React.Fragment>
        ))}
      </>
    );
  }

  if (isPrimitive(spec)) return spec;
  // Allow passing React nodes directly
  if (React.isValidElement(spec)) return spec;
  if (!isGuiSpec(spec)) return null;
  const type = (spec as any).type;
  const entry = type ? registry[type] : undefined;
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(`[GUI] Unknown spec type: ${String(type)}`);
    }
    return null;
  }

  const resolved = entry.resolve(spec, ctx);
  if (React.isValidElement(resolved)) return resolved;
  if (isGuiNode(resolved)) return renderSpec(registry, resolved, ctx);
  return normalizeResolved(resolved);
}

/** @deprecated Prefer `mount(spec, target, options)` from `runtime/mount.ts`. */
export function mountSpec(target: Element | string, spec: any, ctx?: any) {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;
  const defaultSpec = { type: 'Home', props: {} };
  const finalSpec = (spec === undefined || spec === null) ? defaultSpec : spec;
  const mount = document.createElement('div');
  el.appendChild(mount);
  const reactRoot = ReactDOM.createRoot(mount);
  reactRoot.render(
    <Theme>
      <RouterProvider>
        {renderSpec(__GUI_REGISTRY__, finalSpec, ctx)}
      </RouterProvider>
    </Theme>
  );
  return () => {
    try {
      // best-effort unmount
      reactRoot.unmount();
    } catch {}
    mount.remove();
  };
}

/** @deprecated Legacy facade kept for UMD/backward compatibility. */
export const GUI = ({ title = 'this.GUI', children, spec, resolvers, ctx }: GUIProps) => {
  if (resolvers && resolvers.length) installResolvers(resolvers);
  const fallbackSpec = { type: 'Home', props: {} };
  const content = spec ? renderSpec(__GUI_REGISTRY__, spec, ctx) : (children ?? renderSpec(__GUI_REGISTRY__, fallbackSpec, ctx));
  return (
    <Theme>
      <RouterProvider>
        <main style={{ padding: '2rem' }}>
          <h1>{title}</h1>
          {content ?? <p>Ready to render declarative GUI components.</p>}
        </main>
      </RouterProvider>
    </Theme>
  );
};

// ✅ Register as a Web Component for HTML usage
if (typeof window !== 'undefined' && !customElements.get('gui-app')) {
  customElements.define(
    'gui-app',
    class extends HTMLElement {
      connectedCallback() {
        const mount = document.createElement('div');
        this.appendChild(mount);
        const raw = this.getAttribute('spec');
        let parsed: any = undefined;
        if (raw) {
          try { parsed = JSON.parse(raw); } catch {}
        }
        ReactDOM.createRoot(mount).render(<GUI spec={parsed ?? { type: 'Home', props: {} }} />);
        console.log('[GUI] <gui-app> mounted');
      }
    }
  );
}

// ✅ Auto-bootstrap if loaded directly (e.g., via <script src="this.gui.umd.js">)
if (typeof window !== 'undefined') {
  (window as any).GUI = (window as any).GUI || {};
  (window as any).GUI.install = (entries: any[]) => installResolvers(entries);
  (window as any).GUI.mount = (selector: string, spec?: any, ctx?: any) => mountSpec(selector, spec, ctx);
  (window as any).GUI.startApp = startApp;
  (window as any).GUI.deriveRouteState = deriveRouteState;
  (window as any).GUI.normalizeRoutePath = normalizeRoutePath;
  (window as any).GUI.createHttpNamespaceProvider = createHttpNamespaceProvider;
  // Expose version on the global (UMD) surface
  const injectedVersion =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof __GUI_VERSION__ !== 'undefined' ? __GUI_VERSION__ : undefined;
  const v = injectedVersion || (typeof process !== 'undefined' ? process.env?.npm_package_version : undefined) || '0.0.0-dev';
  (window as any).GUI.version = v;
  (window as any).GUI.VERSION = v;
  (window as any).GUI.ThemeModeToggle = ThemeModeToggle;
  (window as any).GUI.GUISettings = GUISettings;
  (window as any).GUI.SideBarsCollections = {
    ...((window as any).GUI.SideBarsCollections || {}),
    GUISettings,
  };

  window.addEventListener('DOMContentLoaded', () => {
    if ((window as any).__THIS_GUI_DISABLE_AUTOBOOT__) return;
    const rootTag = document.querySelector('gui-app');
    if (rootTag) return; // already handled by custom element
    const auto = document.getElementById('root');
    if (auto) {
      ReactDOM.createRoot(auto).render(<GUI />);
      console.log('[GUI] Auto-booted inside #root');
    }
  });
}
