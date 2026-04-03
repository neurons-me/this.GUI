//src/runtime/renderer.ts
// this.GUI — runtime renderer
// Turns a small JSON-ish spec into React elements using a registry from window.GUI.
//
// Spec shape (minimal):
// {
//   type: string | React.ComponentType<any>,
//   props?: Record<string, any>,
//   children?: GuiNode | GuiNode[]
// }
// where GuiNode can also be a string/number/boolean/null.
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defaultAdapter, isPromiseLike, type RuntimeAdapter } from './adapter';
import type { GuiNode, GuiPrimitive, GuiSpecNode } from '@/types/gui.types';

export type { GuiNode, GuiPrimitive, GuiSpecNode } from '@/types/gui.types';
export type GuiRegistryLike = Record<string, any>;
export type ResolveResult = {
  Component: any | null;
  resolvedPath?: string;
};

export type ResolvedNodeRecord = {
  id: string;
  type?: string;
  spec: GuiSpecNode;
  resolvedProps?: Record<string, any>;
  path: string;
};

export type RendererOptions = {
  /** React namespace (UMD: window.React). If omitted, will attempt globalThis.React. */
  React?: any;
  /** Base registry for string `type` lookups. If omitted, tries to infer from `gui`. */
  registry?: GuiRegistryLike;
  /** Optional: window.GUI (UMD surface). Used to infer registries. */
  gui?: any;
  /**
   * If true, unknown string types render as <div>Unknown: {type}</div>.
   * If false, unknown types return null.
   */
  showUnknown?: boolean;
  /** Optional transform hook to rewrite nodes before render (e.g., inject keys, normalize props). */
  transformNode?: (node: GuiSpecNode) => GuiSpecNode;
  /** Passive runtime context (session, auth, preferences, etc.). */
  ctx?: any;
  /** Active runtime capabilities (bind/expr resolution, subscriptions, etc.). */
  runtime?: RuntimeAdapter;
  /** Optional node tap for inspector/runtime tooling. */
  onNodeResolved?: (record: ResolvedNodeRecord) => void;
  /** Optional allowlist for semantic expressions. Default: ['me/views/', 'me/public/'] */
  allowedExprRoots?: string[];
  /** If true, disable expression allowlist checks (use with care). */
  unsafeAllowAllExpressions?: boolean;
  /** Optional prefix to avoid nodeId collisions across multiple mounts. */
  idPrefix?: string;
};

function getReact(opt?: RendererOptions): any {
  return opt?.React || (globalThis as any)?.React;
}

function isSpecNode(v: any): v is GuiSpecNode {
  return (
    !!v &&
    typeof v === 'object' &&
    !Array.isArray(v) &&
    !('$$typeof' in v) &&
    'type' in v
  );
}

function isPrimitive(v: any): v is GuiPrimitive {
  const t = typeof v;
  return v == null || t === 'string' || t === 'number' || t === 'boolean';
}

function isGuiNode(value: any): value is GuiNode {
  return isPrimitive(value) || Array.isArray(value) || isSpecNode(value);
}

/**
 * Build a lookup registry from the GUI UMD surface.
 * Expected shape (single namespace, no `default` wrapper):
 * - root exports: GUI.Button, GUI.Layout, GUI.mount, ...
 * - registries: GUI.Atoms, GUI.Molecules, GUI.Compounds, GUI.Widgets
 * - lowercase aliases (optional): GUI.atoms / molecules / compounds / widgets / menus / hooks / contexts
 */
export function inferRegistryFromGUI(gui: any): GuiRegistryLike {
  const out: GuiRegistryLike = {};
  if (!gui || typeof gui !== 'object') return out;
  const semanticRegistries = ['Registry', 'registry'] as const;
  for (const key of semanticRegistries) {
    const reg = gui[key];
    if (reg && typeof reg === 'object') {
      for (const k of Object.keys(reg)) {
        out[k] = reg[k];
      }
    }
  }
  // 1) Root keys (prefer these first)
  for (const k of Object.keys(gui)) {
    if (out[k] == null) out[k] = gui[k];
  }
  // 2) Capital registries
  const caps = ['Atoms', 'Molecules', 'Compounds', 'Components', 'Widgets'] as const;
  for (const key of caps) {
    const reg = gui[key];
    if (reg && typeof reg === 'object') {
      for (const k of Object.keys(reg)) {
        // only fill gaps, root wins
        if (out[k] == null) out[k] = reg[k];
      }
    }
  }
  // 2.5) Root lowercase registries (UMD helpers)
  const lowers = ['atoms', 'molecules', 'compounds', 'components', 'widgets', 'theme', 'menus', 'hooks', 'contexts'] as const;
  for (const key of lowers) {
    const reg = gui[key];
    if (reg && typeof reg === 'object') {
      for (const k of Object.keys(reg)) {
        if (out[k] == null) out[k] = reg[k];
      }
    }
  }

  return out;
}

/**
 * Resolve a string type against:
 * - opt.registry
 * - inferred registry from opt.gui
 * - direct root GUI lookup
 */
export function resolveType(type: string, opt?: RendererOptions): ResolveResult {
  const gui = opt?.gui;
  const reg = opt?.registry; // prefer a precomputed registry

  // direct lookup
  if (reg && reg[type] != null) return { Component: reg[type], resolvedPath: `registry.${type}` };

  // allow dotted paths like "Atoms.Button" or "default.atoms.TextField" or "atoms.TextField"
  if (type.includes('.')) {
    const parts = type.split('.').filter(Boolean);

    // try through GUI first
    let cur: any = gui;
    for (const p of parts) {
      cur = cur?.[p];
      if (cur == null) break;
    }
    if (cur != null) return { Component: cur, resolvedPath: `GUI.${type}` };

    // then try through registry (in case someone passed a nested registry object)
    cur = reg;
    for (const p of parts) {
      cur = cur?.[p];
      if (cur == null) break;
    }
    if (cur != null) return { Component: cur, resolvedPath: `registry.${type}` };
  }

  // fallback root
  if (gui && gui[type] != null) return { Component: gui[type], resolvedPath: `GUI.${type}` };

  return { Component: null };
}

function normalizeChildren(children: any): any[] {
  if (children == null) return [];
  return Array.isArray(children) ? children : [children];
}

function withAutoKey(child: any, key: string): any {
  if (!isSpecNode(child)) return child;
  const props = child.props || {};
  if (props.key != null) return child;
  return { ...child, props: { ...props, key } };
}

function resolveProps(
  props: Record<string, any> | undefined,
  opt: RendererOptions,
  node: GuiSpecNode
): Record<string, any> | undefined {
  if (!props || typeof props !== 'object') return props;
  const runtime = opt.runtime ?? defaultAdapter;
  const metaBase = { type: typeof node.type === 'string' ? node.type : undefined, node };

  if (runtime.batchResolve) {
    try {
      const batch = runtime.batchResolve(props, opt.ctx, metaBase);
      if (!isPromiseLike(batch)) return batch;
      if (opt.showUnknown) {
        // eslint-disable-next-line no-console
        console.warn('[this.GUI runtime] runtime.batchResolve returned a Promise; async batch is ignored in sync renderer.');
      }
    } catch (err) {
      if (opt.showUnknown) {
        // eslint-disable-next-line no-console
        console.warn('[this.GUI runtime] runtime.batchResolve failed; falling back to per-prop resolve.', err);
      }
    }
  }

  function isPlainObject(value: any): value is Record<string, any> {
    return !!value && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype;
  }

  function getStringToken(
    value: Record<string, any>,
    legacyKey: '$expr' | '$action',
    aliasKey: 'read' | 'write'
  ): { expression: string; source: '$expr' | '$action' | 'read' | 'write' } | null {
    const legacy = typeof value[legacyKey] === 'string' ? value[legacyKey] : null;
    const alias = typeof value[aliasKey] === 'string' ? value[aliasKey] : null;

    if (legacy && alias && legacy !== alias && opt.showUnknown) {
      // eslint-disable-next-line no-console
      console.warn(
        `[this.GUI runtime] Conflicting token values for "${legacyKey}" and "${aliasKey}" at runtime; preferring "${legacyKey}".`
      );
    }

    if (legacy) return { expression: legacy, source: legacyKey };
    if (alias) return { expression: alias, source: aliasKey };
    return null;
  }

  function resolvePathValue(source: any, dottedPath: string): any {
    const parts = dottedPath.split('.').filter(Boolean);
    let cursor = source;
    for (const p of parts) {
      cursor = cursor?.[p];
      if (cursor === undefined) return undefined;
    }
    return cursor;
  }

  function interpolate(input: string): string {
    return input.replace(/\{\{(.+?)\}\}/g, (match, rawPath) => {
      const trimmed = String(rawPath ?? '').trim();
      if (!trimmed) return match;
      // support both {{ctx.params.id}} and {{params.id}}
      const cleanPath = trimmed.replace(/^ctx\./, '');
      const value = resolvePathValue(opt.ctx, cleanPath);
      if (value === undefined) {
        if (opt.showUnknown) {
          // eslint-disable-next-line no-console
          console.warn(`[this.GUI runtime] Missing context for interpolation: {{${cleanPath}}}`);
        }
        return match;
      }
      return String(value);
    });
  }

  function isAllowedExpression(expr: string): boolean {
    if (opt.unsafeAllowAllExpressions) return true;
    const roots = (opt.allowedExprRoots && opt.allowedExprRoots.length > 0)
      ? opt.allowedExprRoots
      : ['me/views/', 'me/public/'];
    return roots.some((root) => expr.startsWith(root));
  }

  function resolveLeaf(value: any, propKey: string): any {
    const readToken = isPlainObject(value) ? getStringToken(value, '$expr', 'read') : null;

    // Token mode: { $expr: "..." } or { read: "..." }
    if (readToken) {
      const expr = interpolate(readToken.expression);
      if (!isAllowedExpression(expr)) {
        // eslint-disable-next-line no-console
        console.error(`[Security] Blocked access to non-public expression: ${expr}`);
        return readToken.expression;
      }
      if (!runtime.resolve) {
        if (opt.showUnknown) {
          // eslint-disable-next-line no-console
          console.warn(
            `[this.GUI runtime] ${readToken.source} found at "${propKey}" but runtime.resolve is not configured.`
          );
        }
        return expr;
      }
      try {
        const resolved = runtime.resolve(expr, opt.ctx, { ...metaBase, propKey });
        if (isPromiseLike(resolved)) {
          if (opt.showUnknown) {
            // eslint-disable-next-line no-console
            console.warn(`[this.GUI runtime] runtime.resolve("${propKey}") returned a Promise; using raw expression.`);
          }
          return expr;
        }
        return resolved;
      } catch (err) {
        if (opt.showUnknown) {
          // eslint-disable-next-line no-console
          console.warn(
            `[this.GUI runtime] runtime.resolve("${propKey}") failed for ${readToken.source}; using raw expression.`,
            err
          );
        }
        return expr;
      }
    }

    const writeToken = isPlainObject(value) ? getStringToken(value, '$action', 'write') : null;

    // Token mode: { $action: "..." } or { write: "..." }
    if (writeToken) {
      const actionExpr = interpolate(writeToken.expression);
      if (!isAllowedExpression(actionExpr)) {
        // eslint-disable-next-line no-console
        console.error(`[Security] Blocked action for non-public expression: ${actionExpr}`);
        return () => {};
      }
      if (!runtime.action) {
        if (opt.showUnknown) {
          // eslint-disable-next-line no-console
          console.warn(
            `[this.GUI runtime] ${writeToken.source} found at "${propKey}" but runtime.action is not configured.`
          );
        }
        return () => {};
      }
      try {
        return runtime.action(actionExpr, opt.ctx, { ...metaBase, propKey });
      } catch (err) {
        if (opt.showUnknown) {
          // eslint-disable-next-line no-console
          console.warn(
            `[this.GUI runtime] runtime.action("${propKey}") failed for ${writeToken.source}; using noop.`,
            err
          );
        }
        return () => {};
      }
    }

    // Back-compat mode: on* with declarative string action
    if (propKey.startsWith('on') && typeof value === 'string') {
      const actionExpr = interpolate(value);
      if (!isAllowedExpression(actionExpr)) {
        // eslint-disable-next-line no-console
        console.error(`[Security] Blocked event action for non-public expression: ${actionExpr}`);
        return undefined;
      }
      if (!runtime.action) {
        if (opt.showUnknown) {
          // eslint-disable-next-line no-console
          console.warn(
            `[this.GUI runtime] event prop "${propKey}" received declarative action string but runtime.action is not configured.`
          );
        }
        return undefined;
      }
      try {
        return runtime.action(actionExpr, opt.ctx, { ...metaBase, propKey });
      } catch (err) {
        if (opt.showUnknown) {
          // eslint-disable-next-line no-console
          console.warn(`[this.GUI runtime] runtime.action("${propKey}") failed; dropping handler.`, err);
        }
        return undefined;
      }
    }

    if (!runtime.resolve) return value;
    try {
      const resolved = runtime.resolve(value, opt.ctx, { ...metaBase, propKey });
      if (isPromiseLike(resolved)) {
        if (opt.showUnknown) {
          // eslint-disable-next-line no-console
          console.warn(`[this.GUI runtime] runtime.resolve("${propKey}") returned a Promise; using original value in sync renderer.`);
        }
        return value;
      }
      return resolved;
    } catch (err) {
      if (opt.showUnknown) {
        // eslint-disable-next-line no-console
        console.warn(`[this.GUI runtime] runtime.resolve("${propKey}") failed; using original value.`, err);
      }
      return value;
    }
  }

  function resolveDynamicValue(value: any, propKey: string): any {
    if (Array.isArray(value)) {
      return value.map((item, i) => resolveDynamicValue(item, `${propKey}[${i}]`));
    }
    if (isPlainObject(value)) {
      // Token objects are leaf instructions and should not recurse into internals.
      if (
        typeof value.$expr === 'string' ||
        typeof value.read === 'string' ||
        typeof value.$action === 'string' ||
        typeof value.write === 'string'
      ) {
        return resolveLeaf(value, propKey);
      }
      const next: Record<string, any> = {};
      for (const [k, v] of Object.entries(value)) {
        next[k] = resolveDynamicValue(v, `${propKey}.${k}`);
      }
      return next;
    }
    return resolveLeaf(value, propKey);
  }

  const out: Record<string, any> = {};
  for (const [key, value] of Object.entries(props)) {
    out[key] = resolveDynamicValue(value, key);
  }
  return out;
}

function makeNodeId(node: GuiSpecNode, path: string, idPrefix?: string): string {
  const props = (node.props || {}) as Record<string, any>;
  const explicit =
    props['data-gui-node-id'] ??
    props['data-gui-id'] ??
    props.id;
  const base =
    explicit != null && String(explicit).trim()
      ? String(explicit)
      : `${typeof node.type === 'string' ? node.type : 'node'}:${path}`;
  if (idPrefix && String(idPrefix).trim()) {
    return `${idPrefix}:${base}`;
  }
  return base;
}

/**
 * Render a GuiNode to a React element (or primitive) using React.createElement.
 */
export function renderNode(node: GuiNode, opt?: RendererOptions, path = 'r'): any {
  const React = getReact(opt);
  if (!React) throw new Error('[this.GUI runtime] Missing React. Pass { React: window.React } in the renderer options.');

  // If caller provided gui but no registry, infer once and reuse for this call tree.
  // (This avoids recomputing inferRegistryFromGUI on every resolveType.)
  const nextOpt: RendererOptions = opt?.gui && !opt?.registry ? { ...opt, registry: inferRegistryFromGUI(opt.gui) } : (opt || {});

  // arrays (auto-key spec siblings) + ensure React keys for primitives
  if (Array.isArray(node)) {
    return node.map((n, i) =>
      React.createElement(
        React.Fragment,
        { key: `k${i}` },
        renderNode(withAutoKey(n, `k${i}`), nextOpt, `${path}.${i}`)
      )
    );
  }

  // primitives
  if (isPrimitive(node)) return node as any;

  // Allow passing React nodes directly.
  if (React.isValidElement?.(node)) return node;

  // spec
  if (isSpecNode(node)) {
    const next = nextOpt.transformNode ? nextOpt.transformNode(node) : node;
    const { type } = next;
    const resolvedProps = resolveProps(next.props, nextOpt, next);
    const nodeId = makeNodeId(next, path, nextOpt.idPrefix);
    const props = {
      ...(resolvedProps ?? {}),
      ...(resolvedProps?.['data-gui-node-id'] == null ? { 'data-gui-node-id': nodeId } : {}),
      ...(resolvedProps?.['data-gui-component'] == null && typeof type === 'string' ? { 'data-gui-component': type } : {}),
    };
    if (nextOpt.onNodeResolved) {
      const record = {
        id: nodeId,
        type: typeof type === 'string' ? type : undefined,
        spec: next,
        resolvedProps,
        path,
      };
      const schedule =
        (typeof queueMicrotask === 'function' && queueMicrotask) ||
        ((cb: () => void) => Promise.resolve().then(cb));
      schedule(() => nextOpt.onNodeResolved?.(record));
    }

    // children (auto-key spec siblings)
    const rawKids = normalizeChildren(next.children);
    const kids = rawKids.map((c, i) =>
      React.createElement(
        React.Fragment,
        { key: `${typeof type === 'string' ? type : 'node'}-${i}` },
        renderNode(
          withAutoKey(c, `${typeof type === 'string' ? type : 'node'}-${i}`),
          nextOpt,
          `${path}.${i}`
        )
      )
    );

    // If `type` is already a React element, clone it (so spec can override props/children)
    if (React.isValidElement?.(type)) {
      return React.cloneElement(type, props ?? null, ...kids);
    }

    // ComponentType directly provided
    if (typeof type === 'function' || (typeof type === 'object' && type != null)) {
      return React.createElement(type, props ?? null, ...kids);
    }

    // string lookup
    if (typeof type === 'string') {
      const { Component } = resolveType(type, nextOpt);
      if (!Component) {
        if (nextOpt.showUnknown) {
          return React.createElement(
            'div',
            {
              style: {
                padding: 10,
                border: '1px dashed rgba(255,255,255,0.25)',
                borderRadius: 10,
                opacity: 0.9,
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                fontSize: 12,
              },
            },
            `Unknown type: ${type}`
          );
        }
        return null;
      }
      if (Component && typeof Component === 'object' && typeof Component.resolve === 'function') {
        const resolverSpec = {
          ...next,
          props: {
            ...(props ?? {}),
            ...(kids.length > 0 ? { children: kids.length === 1 ? kids[0] : kids } : {}),
          },
        };
        const resolved = Component.resolve(resolverSpec, nextOpt.ctx);
        if (React.isValidElement?.(resolved)) return resolved;
        if (isGuiNode(resolved)) {
          return renderNode(resolved, nextOpt, `${path}.resolved`);
        }
        return resolved ?? null;
      }
      return React.createElement(Component, props ?? null, ...kids);
    }
  }

  // unsupported
  return null;
}

/**
 * Convenience: render an entire spec tree with a GUI UMD surface.
 */
export function renderWithGUI(tree: GuiNode, gui: any, opt?: Omit<RendererOptions, 'gui'>): any {
  const registry = opt?.registry || inferRegistryFromGUI(gui);
  return renderNode(tree, { ...opt, gui, registry });
}

export default renderNode;
