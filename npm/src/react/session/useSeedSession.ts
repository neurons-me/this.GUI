import { useOptionalSeedSessionContext } from './SeedSessionProvider';

export function useSeedSession() {
  const context = useOptionalSeedSessionContext();

  if (!context) {
    throw new Error(
      'useSeedSession must be used inside SeedSessionProvider.',
    );
  }

  return context;
}

export function useOptionalSeedSession() {
  return useOptionalSeedSessionContext();
}
