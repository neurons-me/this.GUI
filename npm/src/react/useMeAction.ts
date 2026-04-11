import * as React from 'react';
import { writeMeValue } from '@/runtime/run-me';
import { useMe } from './useMe';

export function useMeAction(target: string) {
  const { me, runtime } = useMe();

  return React.useMemo(() => {
    const action = runtime?.action?.(target, undefined, { propKey: target });
    if (typeof action === 'function') return action;
    return (value?: any) => {
      const result = writeMeValue(me, target, value);
      runtime?.notify?.(target);
      return result;
    };
  }, [me, runtime, target]);
}
