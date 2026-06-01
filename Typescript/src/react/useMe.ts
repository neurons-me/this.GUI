import { useRuntimeEnvironment } from '@/runtime/runtimeContext';
import type { RuntimeAdapter } from '@/runtime/adapter';
import type { MeLike } from './types';
import { useOptionalMeRuntimeContext } from './MeRuntimeProvider';

export function useMe(): { me: MeLike; runtime: RuntimeAdapter | null } {
  const local = useOptionalMeRuntimeContext();
  const env = useRuntimeEnvironment();
  const runtime = (local?.runtime ?? env.runtime ?? null) as RuntimeAdapter | null;
  const runtimeMe = (runtime as any)?.__me ?? (runtime as any)?.me;
  const me = (local?.me ?? env.me ?? runtimeMe) as MeLike | undefined;

  if (!me) {
    throw new Error('useMe requires a MeRuntimeProvider or a mounted GUI runtime carrying `.me`.');
  }

  return { me, runtime };
}
