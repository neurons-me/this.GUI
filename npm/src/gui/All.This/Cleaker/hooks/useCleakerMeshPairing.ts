import { useCallback, useEffect, useState } from 'react';
import type { MeLike } from '@/react/types';
import {
  CLEAKER_OPEN_MESH_LINK_EVENT,
  parseMeshExpression,
  readIncomingMeshExpression,
  resolveMeshLinkAction,
  writeMeshRuntimeValue,
} from '../meshPairing';

type UseCleakerMeshPairingOptions = {
  me: MeLike;
  runtime: any;
  runtimeAuthenticated: boolean;
  setKernelViewMode: (mode: string) => void;
};

export type UseCleakerMeshPairingResult = {
  pairingExpression: string;
  pairingLinkError: string | null;
  setPairingExpression: React.Dispatch<React.SetStateAction<string>>;
  setPairingLinkError: React.Dispatch<React.SetStateAction<string | null>>;
  handleMeshExpressionOpen: (incomingExpression: string) => boolean;
  clearPairingState: () => void;
};

export function useCleakerMeshPairing({
  me,
  runtime,
  runtimeAuthenticated,
  setKernelViewMode,
}: UseCleakerMeshPairingOptions): UseCleakerMeshPairingResult {
  const [pairingExpression, setPairingExpression] = useState<string>('');
  const [pairingLinkError, setPairingLinkError] = useState<string | null>(null);

  const clearPairingState = useCallback(() => {
    setPairingExpression('');
    setPairingLinkError(null);
    writeMeshRuntimeValue(me, runtime, 'runtime.mesh.pairing.currentExpression', '');
  }, [me, runtime]);

  const handleMeshExpressionOpen = useCallback((incomingExpression: string): boolean => {
    const raw = String(incomingExpression || '').trim();
    if (!raw) return false;

    try {
      const parsed = parseMeshExpression(raw);
      const action = resolveMeshLinkAction(parsed);
      const receivedAt = Date.now();

      writeMeshRuntimeValue(me, runtime, 'runtime.mesh.deepLink.lastExpression', raw);
      writeMeshRuntimeValue(me, runtime, 'runtime.mesh.deepLink.lastReceivedAt', receivedAt);
      setPairingLinkError(null);

      if (action.kind === 'claim-surface') {
        setPairingExpression(raw);
        writeMeshRuntimeValue(me, runtime, 'runtime.mesh.pairing.currentExpression', raw);
        setKernelViewMode('claim-surface');
        return true;
      }

      if (action.kind === 'profile') {
        setKernelViewMode('profile');
        return true;
      }

      if (action.kind === 'broadcast') {
        setKernelViewMode(runtimeAuthenticated ? 'profile' : 'login');
        return true;
      }

      writeMeshRuntimeValue(me, runtime, 'runtime.mesh.deepLink.lastUnhandled', raw);
      return false;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setPairingLinkError(message);
      writeMeshRuntimeValue(me, runtime, 'runtime.mesh.deepLink.lastError', message);
      return false;
    }
  }, [me, runtime, runtimeAuthenticated, setKernelViewMode]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const bootExpression = readIncomingMeshExpression();
    if (bootExpression) {
      handleMeshExpressionOpen(bootExpression);
    }

    const handleOpenMeshLink = (event: Event) => {
      const customEvent = event as CustomEvent<{ expression?: string }>;
      const nextExpression = String(customEvent.detail?.expression || '').trim();
      if (!nextExpression) return;
      handleMeshExpressionOpen(nextExpression);
    };

    window.addEventListener(CLEAKER_OPEN_MESH_LINK_EVENT, handleOpenMeshLink as EventListener);

    return () => {
      window.removeEventListener(CLEAKER_OPEN_MESH_LINK_EVENT, handleOpenMeshLink as EventListener);
    };
  }, [handleMeshExpressionOpen]);

  return {
    pairingExpression,
    pairingLinkError,
    setPairingExpression,
    setPairingLinkError,
    handleMeshExpressionOpen,
    clearPairingState,
  };
}

export default useCleakerMeshPairing;