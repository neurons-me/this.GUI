import * as React from 'react';
import type { RuntimeAdapter } from './adapter';

export type RuntimeEnvironment = {
  gui?: any;
  runtime?: RuntimeAdapter;
  ctx?: any;
  me?: any;
};

const RuntimeEnvironmentContext = React.createContext<RuntimeEnvironment>({});

export function RuntimeEnvironmentProvider({
  value,
  children,
}: {
  value: RuntimeEnvironment;
  children: React.ReactNode;
}) {
  const contextValue = React.useMemo(
    () => ({
      gui: value?.gui,
      runtime: value?.runtime,
      ctx: value?.ctx,
      me: value?.me,
    }),
    [value?.gui, value?.runtime, value?.ctx, value?.me]
  );

  return (
    <RuntimeEnvironmentContext.Provider value={contextValue}>
      {children}
    </RuntimeEnvironmentContext.Provider>
  );
}

export function useRuntimeEnvironment(): RuntimeEnvironment {
  return React.useContext(RuntimeEnvironmentContext);
}
