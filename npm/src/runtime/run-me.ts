/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RuntimeAdapter } from './adapter';

export type RenderMeOptions = {
  /**
   * Prefix used to detect declarative path bindings in resolve().
   * Default: "me/"
   */
  pathPrefix?: string;
};

function normalizePath(value: string, prefix: string): string {
  return value.startsWith(prefix) ? value.slice(prefix.length) : value;
}

/**
 * Optional runtime connector for this.me.
 *
 * Usage:
 *   const me = new Me() as any;
 *   const runtime = render(me);
 *   GUI.mount(spec, '#root', { runtime, ctx });
 */
export function render(me: any, opts: RenderMeOptions = {}): RuntimeAdapter {
  const prefix = opts.pathPrefix ?? 'me/';

  return {
    action: (expression: string) => (...args: any[]) => {
      if (typeof me?.run === 'function') {
        return me.run(expression, { args });
      }
      if (typeof me === 'function') {
        return me(expression);
      }
      throw new Error('[render] No runnable .me interface found (expected me.run(...) or callable me(...)).');
    },

    resolve: (value: any) => {
      if (typeof value === 'string' && value.startsWith(prefix)) {
        const path = normalizePath(value, prefix);
        if (typeof me === 'function') {
          return me(path);
        }
        if (typeof me?.get === 'function') {
          return me.get(path);
        }
      }
      return value;
    },
  };
}

export const RunMe = render;

export default render;
