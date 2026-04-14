import { useMemo } from 'react';

export type CleakerViewMode = 'login' | 'profile' | 'settings' | 'claim-surface';

export type UseCleakerViewOptions = {
  kernelViewMode?: string | null;
  pairingExpression?: string | null;
  hasClaimedIdentity: boolean;
};

export type UseCleakerViewResult = {
  isClaimSurfaceView: boolean;
  settingsOpen: boolean;
  currentViewMode: CleakerViewMode;
  semanticViewMode: CleakerViewMode;
  showProfileView: boolean;
  showClaimSurfaceView: boolean;
  showLoginView: boolean;
};

export function useCleakerView(
  options: UseCleakerViewOptions,
): UseCleakerViewResult {
  const {
    kernelViewMode = '',
    pairingExpression = '',
    hasClaimedIdentity,
  } = options;

  const normalizedKernelViewMode = useMemo(() => {
    const value = String(kernelViewMode || '').trim().toLowerCase();
    if (value === 'claim-surface') return 'claim-surface';
    if (value === 'settings') return 'settings';
    if (value === 'profile') return 'profile';
    if (value === 'login') return 'login';
    return '';
  }, [kernelViewMode]);

  const isClaimSurfaceView = useMemo(() => {
    return (
      normalizedKernelViewMode === 'claim-surface' &&
      Boolean(String(pairingExpression || '').trim())
    );
  }, [normalizedKernelViewMode, pairingExpression]);

  const settingsOpen = useMemo(() => {
    return normalizedKernelViewMode === 'settings';
  }, [normalizedKernelViewMode]);

  const currentViewMode = useMemo<CleakerViewMode>(() => {
    if (isClaimSurfaceView) return 'claim-surface';
    if (settingsOpen) return 'settings';
    if (normalizedKernelViewMode === 'profile') return 'profile';
    if (normalizedKernelViewMode === 'login') return 'login';
    if (hasClaimedIdentity) return 'profile';
    return 'login';
  }, [hasClaimedIdentity, isClaimSurfaceView, normalizedKernelViewMode, settingsOpen]);

  const semanticViewMode = useMemo<CleakerViewMode>(() => {
    if (isClaimSurfaceView) return 'claim-surface';
    if (settingsOpen) return 'settings';
    if (normalizedKernelViewMode === 'profile') return 'profile';
    if (normalizedKernelViewMode === 'login') return 'login';
    if (hasClaimedIdentity) return 'profile';
    return 'login';
  }, [hasClaimedIdentity, isClaimSurfaceView, normalizedKernelViewMode, settingsOpen]);

  const showProfileView = currentViewMode === 'profile';
  const showClaimSurfaceView = currentViewMode === 'claim-surface';
  const showLoginView = currentViewMode === 'login';

  return {
    isClaimSurfaceView,
    settingsOpen,
    currentViewMode,
    semanticViewMode,
    showProfileView,
    showClaimSurfaceView,
    showLoginView,
  };
}

export default useCleakerView;