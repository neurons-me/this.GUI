import { useCallback, useEffect, useRef, useState } from 'react';

export type DeferredPendingOptions = {
  threshold?: number;
  onCancelPrevious?: 'abort' | 'ignore';
};

export type DeferredTaskArgs = {
  signal: AbortSignal;
  taskId: number;
};

export type DeferredPendingResult = {
  isRunning: boolean;
  showLoader: boolean;
  run: <T>(task: (args: DeferredTaskArgs) => Promise<T>) => Promise<T | undefined>;
  cancel: () => void;
};

const DEFAULT_THRESHOLD = 180;

export function useDeferredPending(options: DeferredPendingOptions = {}): DeferredPendingResult {
  const { threshold = DEFAULT_THRESHOLD, onCancelPrevious = 'abort' } = options;

  const [isRunning, setIsRunning] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const activeTaskIdRef = useRef(0);
  const timerIdRef = useRef<number | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const clearTimer = useCallback(() => {
    if (timerIdRef.current != null) {
      window.clearTimeout(timerIdRef.current);
      timerIdRef.current = null;
    }
  }, []);

  const cancel = useCallback(() => {
    clearTimer();
    abortControllerRef.current?.abort();
    abortControllerRef.current = null;
    activeTaskIdRef.current += 1;
    setIsRunning(false);
    setShowLoader(false);
  }, [clearTimer]);

  const run = useCallback(
    async <T,>(task: (args: DeferredTaskArgs) => Promise<T>): Promise<T | undefined> => {
      clearTimer();

      if (onCancelPrevious === 'abort') {
        abortControllerRef.current?.abort();
      }

      const taskId = activeTaskIdRef.current + 1;
      activeTaskIdRef.current = taskId;

      const controller = new AbortController();
      abortControllerRef.current = controller;

      setIsRunning(true);
      setShowLoader(false);

      timerIdRef.current = window.setTimeout(() => {
        if (activeTaskIdRef.current === taskId && !controller.signal.aborted) {
          setShowLoader(true);
        }
      }, threshold);

      try {
        const result = await task({ signal: controller.signal, taskId });
        if (activeTaskIdRef.current !== taskId || controller.signal.aborted) {
          return undefined;
        }
        return result;
      } catch (error) {
        if (controller.signal.aborted || activeTaskIdRef.current !== taskId) {
          return undefined;
        }
        throw error;
      } finally {
        clearTimer();

        if (activeTaskIdRef.current === taskId) {
          abortControllerRef.current = null;
          setIsRunning(false);
          setShowLoader(false);
        }
      }
    },
    [clearTimer, onCancelPrevious, threshold]
  );

  useEffect(() => {
    return () => {
      clearTimer();
      abortControllerRef.current?.abort();
      abortControllerRef.current = null;
    };
  }, [clearTimer]);

  return { isRunning, showLoader, run, cancel };
}

export default useDeferredPending;
