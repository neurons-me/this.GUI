/**
 * @deprecated Legacy compatibility surface.
 *
 * New development should prefer the React-first runtime from `this.gui`.
 * Import this entry only when you explicitly need the old browser/global facade.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import type { GuiRegistry as GuiRegistryType, RegistryEntry } from '@/Registry/types';
import { GuiRegistry as CORE_REGISTRY } from '@/Registry';
import { extendRegistry } from '@/Registry/factory';
import type { GuiNode, GuiSpecNode } from '@/types/gui.types';
import { renderNode } from '@/runtime';
import * as Modern from '../../index';
import { installLegacyBrowserSurface } from './auto-boot';
export * from '../../index';

export type { GuiNode, GuiSpecNode } from '@/types/gui.types';

export type GUIProps = {
  title?: string;
  children?: React.ReactNode;
  spec?: GuiSpecNode | GuiSpecNode[];
  resolvers?: RegistryEntry[];
  ctx?: any;
};

let legacyRegistry: GuiRegistryType = CORE_REGISTRY as unknown as GuiRegistryType;
let cachedLegacySurface: Record<string, any> | null = null;

function isPlainObject(value: any): value is Record<string, any> {
  return !!value && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype;
}

export function installResolvers(entries: RegistryEntry[]) {
  if (!Array.isArray(entries) || !entries.length) return;
  legacyRegistry = extendRegistry(legacyRegistry, entries);
  if (cachedLegacySurface) {
    cachedLegacySurface.Registry = legacyRegistry;
    cachedLegacySurface.registry = legacyRegistry;
  }
}

export function resetLegacyResolvers() {
  legacyRegistry = CORE_REGISTRY as unknown as GuiRegistryType;
  if (cachedLegacySurface) {
    cachedLegacySurface.Registry = legacyRegistry;
    cachedLegacySurface.registry = legacyRegistry;
  }
}

export function mountSpec(
  arg1: GuiNode | string | Element,
  arg2: string | Element | GuiNode,
  arg3: any = {}
) {
  const options = isPlainObject(arg3) ? { ...arg3 } : { ctx: arg3 };
  return Modern.mount(arg1 as any, arg2 as any, {
    ...options,
    gui: getLegacySurface(),
    React,
    ReactDOM,
  });
}

function renderSpec(spec: any, ctx?: any) {
  if (spec == null) return null;
  return renderNode(spec, {
    React,
    gui: getLegacySurface(),
    registry: legacyRegistry,
    ctx,
  });
}

export function GUI({
  title = 'this.GUI',
  children,
  spec,
  resolvers,
  ctx,
}: GUIProps) {
  if (resolvers && resolvers.length) installResolvers(resolvers);
  const fallbackSpec = { type: 'Home', props: {} };
  const content = spec ? renderSpec(spec, ctx) : children ?? renderSpec(fallbackSpec, ctx);

  return (
    <Modern.Theme>
      <Modern.RouterProvider>
        <main style={{ padding: '2rem' }}>
          <h1>{title}</h1>
          {content ?? <p>Ready to render declarative GUI components.</p>}
        </main>
      </Modern.RouterProvider>
    </Modern.Theme>
  );
}

function createLegacySurface() {
  return {
    ...Modern,
    Registry: legacyRegistry,
    registry: legacyRegistry,
    GUI,
    default: GUI,
    install: installResolvers,
    installResolvers,
    mount: mountSpec,
    mountSpec,
    version: Modern.version,
    VERSION: Modern.version,
  };
}

export function getLegacySurface() {
  if (!cachedLegacySurface) {
    cachedLegacySurface = createLegacySurface();
  }
  return cachedLegacySurface;
}

if (typeof window !== 'undefined') {
  installLegacyBrowserSurface({
    surface: getLegacySurface(),
    renderLegacyApp: (spec) => <GUI spec={spec} />,
  });
}

export default GUI;
