import * as React from 'react';
import { RuntimeEnvironmentProvider, useRuntimeEnvironment } from '@/runtime/runtimeContext';
import { createMeRuntime } from '@/runtime/run-me';
import type { RuntimeAdapter } from '@/runtime/adapter';
import type { MeLike, MeRuntimeContextValue, MeSubscribeBridge } from './types';

const MeRuntimeContext = React.createContext<MeRuntimeContextValue | null>(null);

export function MeRuntimeProvider({
  me,
  runtime,
  subscribe,
  children,
}: {
  me: MeLike;
  runtime?: RuntimeAdapter | null;
  subscribe?: MeSubscribeBridge | null;
  children: React.ReactNode;
}) {
  const env = useRuntimeEnvironment();
  const runtimeValue = React.useMemo(
    () => runtime ?? createMeRuntime(me, { subscribe }),
    [me, runtime, subscribe]
  );

  const contextValue = React.useMemo<MeRuntimeContextValue>(
    () => ({
      me,
      runtime: runtimeValue,
      subscribe: subscribe ?? null,
    }),
    [me, runtimeValue, subscribe]
  );

  const mergedEnvironment = React.useMemo(
    () => ({
      gui: env.gui,
      ctx: env.ctx,
      runtime: runtimeValue ?? env.runtime,
      me,
    }),
    [env.gui, env.ctx, env.runtime, runtimeValue, me]
  );

  return (
    <MeRuntimeContext.Provider value={contextValue}>
      <RuntimeEnvironmentProvider value={mergedEnvironment}>
        {children}
      </RuntimeEnvironmentProvider>
    </MeRuntimeContext.Provider>
  );
}

export function useOptionalMeRuntimeContext(): MeRuntimeContextValue | null {
  return React.useContext(MeRuntimeContext);
}

export function useMeRuntime(): MeLike {
  const local = React.useContext(MeRuntimeContext);
  const env = useRuntimeEnvironment();
  const runtimeMe = (env.runtime as any)?.__me ?? (env.runtime as any)?.me;
  const me = local?.me ?? (env.me as MeLike | undefined) ?? (runtimeMe as MeLike | undefined);

  if (!me) {
    throw new Error('useMeRuntime must be used inside MeRuntimeProvider or a GUI runtime environment with me.');
  }

  return me;
}
