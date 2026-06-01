import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Router, type RouterResolveContext } from '@/Router/Router';
import Theme from '@/gui/Theme/Theme';
import { Box, Button, Paper, Typography } from '@/gui/Atoms';
import { Stack } from '@/gui/Molecules';
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

const SHOP_ROUTE_DELAY_MS = 120;
const DOCS_ROUTE_DELAY_MS = 140;

function dashboardSpec() {
  return (
    <Page padding={3}>
      <Typography variant="h4">Dashboard</Typography>
      <Typography variant="body2" sx={{ opacity: 0.78, mt: 0.5 }}>
        Fast route. Good baseline before navigating into async screens.
      </Typography>
      <Paper sx={{ p: 2, borderRadius: 2, mt: 2 }}>
        <Typography variant="body1">Current status</Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Ready
        </Typography>
      </Paper>
    </Page>
  );
}

function shopSpec(id: string) {
  return (
    <Page padding={3}>
      <Typography variant="h4">{`Shop ${id}`}</Typography>
      <Typography variant="body2" sx={{ opacity: 0.78, mt: 0.5 }}>
        {`Async route resolved for id=${id}`}
      </Typography>
      <Paper sx={{ p: 2, borderRadius: 2, mt: 2 }}>
        <Typography variant="body1">{`Loaded record ${id}`}</Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          This route simulates a delayed factory before returning the final screen.
        </Typography>
      </Paper>
    </Page>
  );
}

function docsSpec(section: string) {
  return (
    <Page padding={3}>
      <Typography variant="h4">Docs</Typography>
      <Typography variant="body2" sx={{ opacity: 0.78, mt: 0.5 }}>
        {`Wildcard section=${section}`}
      </Typography>
      <Paper sx={{ p: 2, borderRadius: 2, mt: 2 }}>
        <Typography variant="body1">{`Showing ${section}`}</Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Wildcards are useful for docs trees, explorers, and nested knowledge spaces.
        </Typography>
      </Paper>
    </Page>
  );
}

function pendingShellSpec(nextPath: string) {
  return (
    <Page padding={3}>
      <Typography variant="h4">Loading next route...</Typography>
      <Typography variant="body2" sx={{ opacity: 0.78, mt: 0.5 }}>
        {`Preparing ${nextPath}`}
      </Typography>
      <Paper sx={{ p: 2, borderRadius: 2, mt: 2, borderStyle: 'dashed', borderWidth: 1, borderColor: 'divider' }}>
        <Typography variant="body1">Pending shell</Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Use this pattern when you want the route transition itself to communicate loading.
        </Typography>
      </Paper>
    </Page>
  );
}

type RecipeMode = 'overlay' | 'swap';

function RouterLoadingRecipe({ mode, title, subtitle }: { mode: RecipeMode; title: string; subtitle: string }) {
  const router = useMemo(() => new Router({ useHistory: false }), []);
  const [currentPath, setCurrentPath] = useState('/dashboard');
  const [currentSpec, setCurrentSpec] = useState<React.ReactNode>(() => dashboardSpec());
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const { isRunning, showLoader, run, cancel } = useDeferredPending({ threshold: 180, onCancelPrevious: 'abort' });

  useEffect(() => {
    router.set('/dashboard', () => dashboardSpec());
    router.set('/shops/:id', async ({ ctx }: RouterResolveContext) => shopSpec(ctx.params.id));
    router.set('/docs/*', async ({ ctx }: RouterResolveContext) => docsSpec(ctx.wildcard || 'index'));
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
      setCurrentSpec(pendingShellSpec(pendingPath));
    }
  }, [mode, pendingPath, showLoader]);

  const navigateTo = useCallback(
    async (path: string) => {
      setPendingPath(path);
      await run(async ({ signal }) => {
        if (path.startsWith('/shops/')) await sleep(SHOP_ROUTE_DELAY_MS, signal);
        else if (path.startsWith('/docs/')) await sleep(DOCS_ROUTE_DELAY_MS, signal);
        return router.navigate(path, { push: false });
      });
      setPendingPath(null);
    },
    [router, run]
  );

  return (
    <Theme initialThemeId="neurons.me" initialMode="dark">
      <Box sx={{ p: 3, display: 'grid', gap: 2 }}>
        <Box>
          <Typography sx={{ fontSize: 20, fontWeight: 800 }}>{title}</Typography>
          <Typography sx={{ opacity: 0.8, mt: 0.5 }}>{subtitle}</Typography>
        </Box>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5}>
          <Button variant="contained" onClick={() => void navigateTo('/dashboard')}>Dashboard</Button>
          <Button variant="outlined" onClick={() => void navigateTo('/shops/42')}>Async Param Route</Button>
          <Button variant="outlined" onClick={() => void navigateTo('/docs/getting-started')}>Async Wildcard Route</Button>
        </Stack>
        <Paper sx={{ p: 2 }}>
          <Typography variant="body2" sx={{ opacity: 0.78 }}>
            Current path: <Box component="span" sx={{ fontFamily: 'monospace' }}>{currentPath}</Box>
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.78, mt: 0.75 }}>
            {mode === 'overlay'
              ? 'Recipe: keep the previous screen visible while the next route resolves.'
              : 'Recipe: replace the current screen with a pending shell before the async route finishes.'}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.68, mt: 0.75 }}>
            Transition state: {isRunning ? (showLoader ? 'showing loader' : 'waiting below threshold') : 'idle'}
          </Typography>
        </Paper>
        <Box sx={{ position: 'relative', minHeight: 320, borderRadius: 2, overflow: 'hidden', border: '1px solid', borderColor: 'divider', backgroundColor: 'background.default' }}>
          <Box sx={{ minHeight: 320 }}>{currentSpec}</Box>
          {showLoader && mode === 'overlay' && (
            <Box sx={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', bgcolor: 'rgba(12,14,18,0.32)', backdropFilter: 'blur(6px)' }}>
              <Paper sx={{ px: 2, py: 1.5, borderRadius: 2 }}>
                <Typography sx={{ fontWeight: 700 }}>Loading next route...</Typography>
                <Typography variant="body2" sx={{ opacity: 0.78 }}>
                  Suspense-like overlay while the previous page stays mounted.
                </Typography>
              </Paper>
            </Box>
          )}
        </Box>
      </Box>
    </Theme>
  );
}

export function KeepPreviousScreenVisibleDemo() {
  return (
    <RouterLoadingRecipe
      mode="overlay"
      title="Recipe 1: Keep Previous Screen Visible"
      subtitle="Use this when the old screen still provides context and you want loading to feel light."
    />
  );
}

export function SwapToPendingShellDemo() {
  return (
    <RouterLoadingRecipe
      mode="swap"
      title="Recipe 2: Swap To Pending Shell"
      subtitle="Use this when route transitions should feel explicit, like entering a new workspace or document."
    />
  );
}
