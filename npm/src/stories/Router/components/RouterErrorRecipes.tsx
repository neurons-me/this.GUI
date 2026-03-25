import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Router } from '@/Router/Router';
import Theme from '@/gui/Theme/Theme';
import { Box, Button, Paper, Stack, Typography } from '@/gui/Atoms';
import { useDeferredPending } from '@/gui/Hooks';
import { Page } from '@/gui/Molecules';

function sleep(ms: number, signal?: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    const timeoutId = window.setTimeout(() => {
      cleanup();
      resolve();
    }, ms);
    const onAbort = () => {
      window.clearTimeout(timeoutId);
      cleanup();
      reject(new DOMException('Aborted', 'AbortError'));
    };
    const cleanup = () => {
      signal?.removeEventListener('abort', onAbort);
    };
    if (signal?.aborted) {
      onAbort();
      return;
    }
    signal?.addEventListener('abort', onAbort, { once: true });
  });
}

function dashboardScreen() {
  return (
    <Page padding={3}>
      <Typography variant="h4">Dashboard</Typography>
      <Typography variant="body2" sx={{ opacity: 0.78, mt: 0.5 }}>
        Stable home screen used as the fallback context.
      </Typography>
      <Paper sx={{ p: 2, borderRadius: 2, mt: 2 }}>
        <Typography variant="body1">Everything is healthy</Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Use this screen to test failed route transitions.
        </Typography>
      </Paper>
    </Page>
  );
}

function successScreen() {
  return (
    <Page padding={3}>
      <Typography variant="h4">Reports</Typography>
      <Typography variant="body2" sx={{ opacity: 0.78, mt: 0.5 }}>
        The route resolved successfully.
      </Typography>
      <Paper sx={{ p: 2, borderRadius: 2, mt: 2 }}>
        <Typography variant="body1">Loaded latest report data</Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          This is the successful version of the async route.
        </Typography>
      </Paper>
    </Page>
  );
}

function pendingScreen(target: string) {
  return (
    <Page padding={3}>
      <Typography variant="h4">Loading route...</Typography>
      <Typography variant="body2" sx={{ opacity: 0.78, mt: 0.5 }}>
        {`Preparing ${target}`}
      </Typography>
      <Paper sx={{ p: 2, borderRadius: 2, mt: 2, borderStyle: 'dashed', borderWidth: 1, borderColor: 'divider' }}>
        <Typography variant="body1">Pending shell</Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          The route transition is still in flight.
        </Typography>
      </Paper>
    </Page>
  );
}

function errorPanel(message: string, onRetry?: () => void) {
  return (
    <Paper sx={{ p: 2, borderRadius: 2, mt: 2, border: '1px solid', borderColor: 'error.main' }}>
      <Typography variant="body1" sx={{ color: 'error.main', fontWeight: 700 }}>Route failed</Typography>
      <Typography variant="body2" sx={{ opacity: 0.82, mt: 0.5 }}>{message}</Typography>
      {onRetry && (
        <Button sx={{ mt: 2 }} variant="outlined" color="error" onClick={onRetry}>Retry</Button>
      )}
    </Paper>
  );
}

function errorShell(message: string, onRetry?: () => void) {
  return (
    <Page padding={3}>
      <Typography variant="h4">Route failed</Typography>
      <Typography variant="body2" sx={{ opacity: 0.78, mt: 0.5 }}>
        The next route could not be resolved.
      </Typography>
      {errorPanel(message, onRetry)}
    </Page>
  );
}

type ErrorRecipeMode = 'keep' | 'swap' | 'retry';

function RouterErrorRecipe({ mode, title, subtitle }: { mode: ErrorRecipeMode; title: string; subtitle: string }) {
  const router = useMemo(
    () =>
      new Router({
        useHistory: false,
        notFound: (_context, error) => errorShell(error instanceof Error ? error.message : 'Unknown route failure'),
      }),
    []
  );
  const [currentSpec, setCurrentSpec] = useState<React.ReactNode>(() => dashboardScreen());
  const [currentPath, setCurrentPath] = useState('/dashboard');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const { isRunning, showLoader, run, cancel } = useDeferredPending({ threshold: 180, onCancelPrevious: 'abort' });

  useEffect(() => {
    router.set('/dashboard', () => dashboardScreen());
    router.set('/reports', () => successScreen());
    const unlisten = router.onChange((spec, meta) => {
      setCurrentSpec(spec);
      setCurrentPath(meta.path);
    });
    void router.navigate('/dashboard', { push: false });
    return () => {
      unlisten();
      cancel();
      router.destroy();
    };
  }, [cancel, router]);

  useEffect(() => {
    if (mode === 'swap' && showLoader && pendingPath) {
      setCurrentSpec(pendingScreen(pendingPath));
    }
  }, [mode, pendingPath, showLoader]);

  const attemptRoute = useCallback(
    async (path: string, shouldFail: boolean) => {
      setPendingPath(path);
      setErrorMessage(null);
      try {
        await run(async ({ signal }) => {
          await sleep(240, signal);
          if (shouldFail) throw new Error('The reports service is temporarily unavailable.');
          return router.navigate(path, { push: false });
        });
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown route failure';
        setErrorMessage(message);
        if (mode === 'swap') setCurrentSpec(errorShell(message, () => void attemptRoute(path, false)));
      } finally {
        setPendingPath(null);
      }
    },
    [mode, router, run]
  );

  const overlay = showLoader && mode !== 'swap';

  return (
    <Theme initialThemeId="neurons.me" initialMode="dark">
      <Box sx={{ p: 3, display: 'grid', gap: 2 }}>
        <Box>
          <Typography sx={{ fontSize: 20, fontWeight: 800 }}>{title}</Typography>
          <Typography sx={{ opacity: 0.8, mt: 0.5 }}>{subtitle}</Typography>
        </Box>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5}>
          <Button variant="contained" onClick={() => void attemptRoute('/dashboard', false)}>Dashboard</Button>
          <Button variant="outlined" color="success" onClick={() => void attemptRoute('/reports', false)}>Success Route</Button>
          <Button variant="outlined" color="error" onClick={() => void attemptRoute('/reports', true)}>Fail Route</Button>
        </Stack>
        <Paper sx={{ p: 2 }}>
          <Typography variant="body2" sx={{ opacity: 0.78 }}>
            Current path: <Box component="span" sx={{ fontFamily: 'monospace' }}>{currentPath}</Box>
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.78, mt: 0.75 }}>
            {mode === 'keep'
              ? 'Recipe: preserve the previous screen and attach an error panel if the next route fails.'
              : mode === 'swap'
                ? 'Recipe: move into a pending shell and then swap into an error shell if resolution fails.'
                : 'Recipe: show an inline error with a retry button that retries the same route.'}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.68, mt: 0.75 }}>
            Transition state: {isRunning ? (showLoader ? 'showing loader' : 'waiting below threshold') : 'idle'}
          </Typography>
        </Paper>
        <Box sx={{ position: 'relative', minHeight: 320, borderRadius: 2, overflow: 'hidden', border: '1px solid', borderColor: 'divider', backgroundColor: 'background.default' }}>
          <Box sx={{ minHeight: 320 }}>
            {currentSpec}
            {errorMessage && mode !== 'swap' && errorPanel(errorMessage, mode === 'retry' ? () => void attemptRoute('/reports', false) : undefined)}
          </Box>
          {overlay && (
            <Box sx={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', bgcolor: 'rgba(12,14,18,0.32)', backdropFilter: 'blur(6px)' }}>
              <Paper sx={{ px: 2, py: 1.5, borderRadius: 2 }}>
                <Typography sx={{ fontWeight: 700 }}>Resolving route...</Typography>
                <Typography variant="body2" sx={{ opacity: 0.78 }}>
                  The transition is still in flight.
                </Typography>
              </Paper>
            </Box>
          )}
        </Box>
      </Box>
    </Theme>
  );
}

export function KeepPreviousScreenOnErrorDemo() {
  return (
    <RouterErrorRecipe
      mode="keep"
      title="Recipe 1: Keep Previous Screen On Error"
      subtitle="When the next route fails, preserve the current screen and surface the failure locally."
    />
  );
}

export function SwapToErrorShellDemo() {
  return (
    <RouterErrorRecipe
      mode="swap"
      title="Recipe 2: Swap To Error Shell"
      subtitle="Use this when the route itself owns the error state and deserves a full-screen failure shell."
    />
  );
}

export function RetryFailedRouteDemo() {
  return (
    <RouterErrorRecipe
      mode="retry"
      title="Recipe 3: Retry Failed Route"
      subtitle="Inline retry works well when the user should stay anchored to the current screen."
    />
  );
}

