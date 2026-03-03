/* eslint-disable @typescript-eslint/no-explicit-any */

export type UnsubscribeFn = () => void;

export type NodeMeta = {
  type?: string;
  node?: any;
  propKey?: string;
};

export interface RuntimeAdapter {
  /**
   * Resolve an individual prop value.
   * Can be identity, expression resolution, binding resolution, etc.
   */
  resolve?: (value: any, ctx: any, meta?: NodeMeta) => any;

  /**
   * Transform a declarative action expression into an executable function.
   * Example: "perfil.save()" -> () => ...
   */
  action?: (
    expression: string,
    ctx: any,
    meta?: NodeMeta
  ) => (...args: any[]) => any;

  /**
   * Optional live binding channel (used by reactive wrappers).
   * Not consumed by the base renderer yet.
   */
  subscribe?: (
    path: string,
    callback: (nextValue: any) => void,
    ctx: any,
    meta?: NodeMeta
  ) => UnsubscribeFn;

  /**
   * Optional batch resolver for perf. May return sync or async payloads.
   * Base renderer currently consumes sync payloads; async payloads are ignored with warning.
   */
  batchResolve?: (
    props: Record<string, any>,
    ctx: any,
    meta?: NodeMeta
  ) => Record<string, any> | Promise<Record<string, any>>;
}

export const defaultAdapter: RuntimeAdapter = {
  resolve: (value) => value,
  action: (expression) => (...args: any[]) => {
    // eslint-disable-next-line no-console
    console.log('[this.GUI] Action triggered:', expression, args);
  },
};

export function isPromiseLike<T = unknown>(value: any): value is PromiseLike<T> {
  return !!value && (typeof value === 'object' || typeof value === 'function') && typeof value.then === 'function';
}
