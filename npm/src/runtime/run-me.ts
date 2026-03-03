/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RuntimeAdapter } from './adapter';

type RunMeOptions = {
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
 *   const runtime = RunMe(me);
 *   GUI.mount(spec, '#root', { runtime, ctx });
 */
export function RunMe(me: any, opts: RunMeOptions = {}): RuntimeAdapter {
  const prefix = opts.pathPrefix ?? 'me/';

  return {
    action: (expression: string) => (...args: any[]) => {
      if (typeof me?.run === 'function') {
        return me.run(expression, { args });
      }
      if (typeof me === 'function') {
        return me(expression);
      }
      throw new Error('[RunMe] No runnable .me interface found (expected me.run(...) or callable me(...)).');
    },

    resolve: (value: any) => {
      if (typeof value === 'string' && value.startsWith(prefix)) {
        const path = normalizePath(value, prefix);
        if (typeof me?.get === 'function') {
          return me.get(path);
        }
        if (typeof me === 'function') {
          return me(path);
        }
      }
      return value;
    },
  };
}

export default RunMe;

