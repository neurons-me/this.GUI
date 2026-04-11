import * as React from 'react';
import { readMeValue } from '@/runtime/run-me';
import { useMe } from './useMe';

export function useMeValue<T = any>(path: string): T {
  const { me, runtime } = useMe();

  const subscribe = React.useCallback(
    (callback: () => void) => {
      if (!runtime?.subscribe) return () => {};
      return runtime.subscribe(path, callback, undefined, { propKey: path }) || (() => {});
    },
    [runtime, path]
  );

  const getSnapshot = React.useCallback(
    () => readMeValue(me, path, { allowBarePath: true }) as T,
    [me, path]
  );

  return React.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
