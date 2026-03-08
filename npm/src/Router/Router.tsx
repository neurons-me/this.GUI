import React, { ReactNode } from "react";
import { BrowserRouter, useInRouterContext } from "react-router-dom";

export type RouteSpec = any;
export type RouterRuntime = {
  resolve?: (value: any, context?: RouterResolveContext) => any | Promise<any>;
  action?: (expression: string, context?: RouterResolveContext) => (...args: any[]) => any;
};

export type RouteHandler =
  | string
  | RouteSpec
  | ((context: RouterResolveContext) => RouteSpec | Promise<RouteSpec>);

export type RouterResolveContext = {
  path: string;
  router: Router;
  runtime: RouterRuntime | null;
  ctx: Record<string, any>;
};

export type RouterNavigateOptions = {
  push?: boolean;
  ctx?: Record<string, any>;
};

type RouterChangeListener = (spec: RouteSpec, meta: { path: string; ctx: Record<string, any> }) => void;
type NotFoundHandler = (context: RouterResolveContext, error?: unknown) => RouteSpec;

const defaultNotFound: NotFoundHandler = () => ({ type: "Page", children: ["404 Not Found"] });

type CompiledRoute = {
  path: string;
  handler: RouteHandler;
  regex?: RegExp;
  keys?: string[];
  score: number;
};

/**
 * SPA navigation kernel for declarative specs.
 * - Runtime is optional (semantic pointers only resolve when runtime.resolve exists).
 * - Supports sync/async route factories.
 * - Emits `onChange` notifications to decoupled renderers.
 */
export class Router {
  private routes = new Map<string, CompiledRoute>();
  private listeners = new Set<RouterChangeListener>();
  private popstateHandler?: () => void;
  public runtime: RouterRuntime | null;
  public notFound: NotFoundHandler;
  public currentPath: string | null = null;

  constructor({
    runtime = null,
    notFound = defaultNotFound,
    useHistory = true,
  }: {
    runtime?: RouterRuntime | null;
    notFound?: NotFoundHandler;
    useHistory?: boolean;
  } = {}) {
    this.runtime = runtime;
    this.notFound = notFound;

    if (useHistory && typeof window !== "undefined") {
      this.popstateHandler = () => {
        void this.navigate(window.location.pathname, { push: false });
      };
      window.addEventListener("popstate", this.popstateHandler);
    }
  }

  destroy(): void {
    if (this.popstateHandler && typeof window !== "undefined") {
      window.removeEventListener("popstate", this.popstateHandler);
    }
    this.listeners.clear();
  }

  private normalize(path: string): string {
    const input = String(path ?? "").trim();
    if (!input || input === "/") return "/";
    const first = input.startsWith("/") ? input : `/${input}`;
    const noQuery = first.split("?")[0]?.split("#")[0] ?? "/";
    const collapsed = noQuery.replace(/\/{2,}/g, "/");
    if (collapsed !== "/" && collapsed.endsWith("/")) return collapsed.replace(/\/+$/, "");
    return collapsed;
  }

  private hasDynamicSegments(path: string): boolean {
    return path.includes(":") || path.includes("*");
  }

  private escapeRegex(input: string): string {
    return input.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
  }

  private buildPattern(path: string): { regex: RegExp; keys: string[]; score: number } {
    const keys: string[] = [];
    const segments = path.split("/").filter(Boolean);
    const parts: string[] = [];
    let staticCount = 0;

    for (const seg of segments) {
      if (seg === "*") {
        const wKey = `wildcard_${keys.filter((k) => k.startsWith("wildcard_")).length + 1}`;
        keys.push(wKey);
        parts.push("(.*)");
        continue;
      }
      if (seg.startsWith(":") && seg.length > 1) {
        keys.push(seg.slice(1));
        parts.push("([^/]+)");
        continue;
      }
      staticCount += 1;
      parts.push(this.escapeRegex(seg));
    }

    const pattern = `^/${parts.join("/")}$`;
    return { regex: new RegExp(pattern), keys, score: staticCount };
  }

  private safeDecode(value: string, key: string): string {
    try {
      return decodeURIComponent(value);
    } catch {
      // eslint-disable-next-line no-console
      console.warn(`[Router] Failed to decode param "${key}": ${value}`);
      return value;
    }
  }

  private findRoute(path: string): { route: CompiledRoute; params: Record<string, string> } | null {
    const exact = this.routes.get(path);
    if (exact && !exact.regex) return { route: exact, params: {} };

    let best: { route: CompiledRoute; params: Record<string, string> } | null = null;
    for (const [, route] of this.routes) {
      if (!route.regex) continue;
      const match = path.match(route.regex);
      if (!match) continue;

      const params: Record<string, string> = {};
      route.keys?.forEach((key, i) => {
        const raw = match[i + 1] ?? "";
        params[key] = this.safeDecode(raw, key);
      });

      if (!best) {
        best = { route, params };
        continue;
      }

      // Higher score = more specific static segments.
      if (route.score > best.route.score) {
        best = { route, params };
      }
    }
    return best;
  }

  set(path: string, handler: RouteHandler): this {
    const normalized = this.normalize(path);
    const kind = typeof handler;
    const valid = kind === "function" || kind === "string" || kind === "object";
    if (!valid || handler == null) {
      throw new Error(`[Router] Invalid handler for ${path}. Expected function, string pointer, or spec object.`);
    }
    if (!this.hasDynamicSegments(normalized)) {
      this.routes.set(normalized, { path: normalized, handler, score: Number.MAX_SAFE_INTEGER });
      return this;
    }

    const { regex, keys, score } = this.buildPattern(normalized);
    this.routes.set(normalized, { path: normalized, handler, regex, keys, score });
    return this;
  }

  async resolve(path: string, ctx: Record<string, any> = {}): Promise<RouteSpec> {
    const normalized = this.normalize(path);
    const found = this.findRoute(normalized);
    const handler = found?.route?.handler ?? this.notFound;
    const params = found?.params ?? {};
    const enrichedCtx = {
      ...ctx,
      params,
      wildcard: params.wildcard_1,
    };
    const context: RouterResolveContext = { path: normalized, router: this, runtime: this.runtime, ctx: enrichedCtx };

    try {
      if (typeof handler === "string") {
        // Semantic pointer mode (optional)
        if (handler.startsWith("me/") && this.runtime?.resolve) {
          return await this.runtime.resolve(handler, context);
        }
        return { type: "Text", children: [handler] };
      }

      if (typeof handler === "function") {
        return await handler(context);
      }

      return handler;
    } catch (error) {
      // Keep the SPA alive on route failures.
      // eslint-disable-next-line no-console
      console.error(`[Router] Error resolving ${normalized}:`, error);
      return this.notFound(context, error);
    }
  }

  async navigate(path: string, { push = true, ctx = {} }: RouterNavigateOptions = {}): Promise<RouteSpec> {
    const normalized = this.normalize(path);
    this.currentPath = normalized;
    const spec = await this.resolve(normalized, ctx);

    if (push && typeof window !== "undefined" && window.location.pathname !== normalized) {
      window.history.pushState(null, "", normalized);
    }

    const found = this.findRoute(normalized);
    const params = found?.params ?? {};
    const enrichedCtx = {
      ...ctx,
      params,
      wildcard: params.wildcard_1,
    };
    for (const listener of this.listeners) listener(spec, { path: normalized, ctx: enrichedCtx });
    return spec;
  }

  onChange(listener: RouterChangeListener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }
}

/**
 * React wrapper to ensure Link components can work with router context.
 * This is intentionally separate from the navigation kernel class above.
 */
export const RouterProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const inRouter = useInRouterContext();
  return inRouter ? <>{children}</> : <BrowserRouter>{children}</BrowserRouter>;
};

export default RouterProvider;
