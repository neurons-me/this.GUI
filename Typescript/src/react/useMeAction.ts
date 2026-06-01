import * as React from 'react';
import { writeMeValue } from '@/runtime/run-me';
import { useMe } from './useMe';

export type UseMeActionOptions = {
  allowCanonicalWrite?: boolean;
};

function normalizeActionTarget(value: string): string {
  return String(value || '')
    .trim()
    .replace(/^me:\/\//, '')
    .replace(/^self:(?:read|write)\//, '')
    .replace(/^me[/.]/, '')
    .replace(/^\/+|\/+$/g, '')
    .replace(/\//g, '.');
}

function isCanonicalWriteTarget(value: string): boolean {
  const normalized = normalizeActionTarget(value);
  return normalized === 'profile'
    || normalized.startsWith('profile.')
    || normalized === 'auth'
    || normalized.startsWith('auth.');
}

export function useMeAction(target: string, options: UseMeActionOptions = {}) {
  const { me, runtime } = useMe();
  const { allowCanonicalWrite = false } = options;

  return React.useMemo(() => {
    if (!String(target || '').trim()) {
      return () => undefined;
    }

    if (isCanonicalWriteTarget(target) && !allowCanonicalWrite) {
      return () => {
        throw new Error(
          `[this.GUI] Refusing to write canonical path "${target}" without allowCanonicalWrite: true.`
        );
      };
    }

    const action = runtime?.action?.(target, undefined, { propKey: target });
    if (typeof action === 'function') return action;
    return (value?: any) => {
      const result = writeMeValue(me, target, value);
      runtime?.notify?.(target);
      return result;
    };
  }, [allowCanonicalWrite, me, runtime, target]);
}
