import * as React from 'react';
import { createMonadDiscoveryStore } from './createMonadDiscoveryStore';
import type {
  CreateMonadDiscoveryOptions,
  MonadDiscovery,
  MonadDiscoveryState,
} from './monadDiscovery.types';

function isDiscovery(value: unknown): value is MonadDiscovery {
  const candidate = value as MonadDiscovery;
  return Boolean(
    candidate &&
    typeof candidate.start === 'function' &&
    typeof candidate.subscribe === 'function' &&
    typeof candidate.getState === 'function',
  );
}

export type UseMonadDiscoveryInput = CreateMonadDiscoveryOptions | MonadDiscovery;

export type UseMonadDiscoveryResult = MonadDiscoveryState & {
  discovery: MonadDiscovery;
  rescan: MonadDiscovery['rescan'];
  addEndpoint: MonadDiscovery['addEndpoint'];
  removeEndpoint: MonadDiscovery['removeEndpoint'];
};

export function useMonadDiscovery(input: UseMonadDiscoveryInput = {}): UseMonadDiscoveryResult {
  const external = isDiscovery(input);
  const discoveryRef = React.useRef<MonadDiscovery | null>(null);

  if (!discoveryRef.current) {
    discoveryRef.current = external ? input : createMonadDiscoveryStore(input);
  }

  const discovery = discoveryRef.current;
  const [state, setState] = React.useState<MonadDiscoveryState>(() => discovery.getState());

  React.useEffect(() => discovery.subscribe(setState), [discovery]);

  React.useEffect(() => {
    if (external) return undefined;
    discovery.start();
    return () => discovery.stop();
  }, [discovery, external]);

  return {
    ...state,
    discovery,
    rescan: discovery.rescan,
    addEndpoint: discovery.addEndpoint,
    removeEndpoint: discovery.removeEndpoint,
  };
}
