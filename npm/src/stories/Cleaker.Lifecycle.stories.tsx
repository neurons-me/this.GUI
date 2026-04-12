import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ME from 'this.me';

import Theme from '@/gui/Theme/Theme';
import Cleaker from '@/gui/All.This/Cleaker/Cleaker';
import { MeRuntimeProvider } from '@/react/MeRuntimeProvider';
import { useMe } from '@/react/useMe';
import { useMeValue } from '@/react/useMeValue';
import { writeMeValue } from '@/runtime/run-me';
import { Box, Button, Paper, Typography } from '@/gui/Atoms';
import { Stack } from '@/gui/Molecules';

function KernelDebugger() {
  const username = useMeValue<string>('profile.username');
  const displayName = useMeValue<string>('profile.name');
  const email = useMeValue<string>('profile.email');
  const phone = useMeValue<string>('profile.phone');
  const avatar = useMeValue<string>('profile.avatar');
  const claimedAt = useMeValue<number | null>('auth.claimed_at');
  const activeNamespace = useMeValue<string>('identity.session.namespace');
  const runtimeAuthenticated = useMeValue<boolean>('runtime.cleaker.authenticated');
  const viewMode = useMeValue<string>('ui.cleaker.viewMode');

  const isClaimed = Boolean(username && claimedAt && activeNamespace);
  const claimedAtLabel =
    typeof claimedAt === 'number' && Number.isFinite(claimedAt)
      ? new Date(claimedAt).toLocaleString()
      : '(null)';

  return (
    <Paper variant="outlined" sx={{ p: 2.5, borderRadius: 3 }}>
      <Typography variant="h6" sx={{ mb: 1.25, fontWeight: 800 }}>
        Kernel Debugger
      </Typography>
      <Box
        component="pre"
        sx={{
          m: 0,
          p: 2,
          borderRadius: 2,
          bgcolor: 'rgba(0,0,0,0.88)',
          color: '#67ffb0',
          fontSize: 13,
          lineHeight: 1.65,
          overflowX: 'auto',
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        }}
      >
        {`isClaimed          : ${isClaimed}
username           : ${username || '(null)'}
profile.name       : ${displayName || '(null)'}
profile.email      : ${email || '(null)'}
profile.phone      : ${phone || '(null)'}
profile.avatar     : ${avatar || '(null)'}
claimed_at         : ${claimedAtLabel}
activeNamespace    : ${activeNamespace || '(null)'}
runtimeAuth        : ${runtimeAuthenticated ? 'true' : 'false'}
viewMode           : ${viewMode || '(null)'}

Tríada completa    : ${isClaimed ? '✓ OK' : '✗ Incompleta'}`}
      </Box>
    </Paper>
  );
}

function LifecycleHarness() {
  const { me, runtime } = useMe();

  const setKernel = React.useCallback(
    (path: string, value: any) => {
      writeMeValue(me, path, value, { allowBarePath: true });
      runtime?.notify?.(path);
    },
    [me, runtime]
  );

  const simulateClaim = React.useCallback(() => {
    setKernel('profile.username', 'jabellae');
    setKernel('profile.name', 'Sui Abella');
    setKernel('profile.email', 'sui@neurons.me');
    setKernel('profile.phone', '+52 228 123 4567');
    setKernel('profile.avatar', 'https://i.pravatar.cc/150?u=jabellae');
    setKernel('auth.claimed_at', Date.now());
    setKernel('identity.session.username', 'jabellae');
    setKernel('identity.session.namespace', 'jabellae.cleaker.me');
    setKernel('identity.session.authenticated', true);
    setKernel('runtime.cleaker.authenticated', true);
    setKernel('ui.cleaker.viewMode', 'profile');
  }, [setKernel]);

  const simulateLogout = React.useCallback(() => {
    setKernel('profile.username', null);
    setKernel('profile.name', null);
    setKernel('profile.avatar', null);
    setKernel('profile.bio', null);
    setKernel('profile.email', null);
    setKernel('profile.phone', null);
    setKernel('auth.claimed_at', null);
    setKernel('auth.keys', null);
    setKernel('identity.session.username', '');
    setKernel('identity.session.draftUsername', '');
    setKernel('identity.session.authenticated', false);
    setKernel('identity.session.hasSecret', false);
    setKernel('identity.session.namespace', '');
    setKernel('identity.session.note', '');
    setKernel('runtime.cleaker.auth.status', 'idle');
    setKernel('runtime.cleaker.auth.error', null);
    setKernel('runtime.cleaker.auth.successMessage', null);
    setKernel('runtime.cleaker.auth.progressMessage', null);
    setKernel('runtime.cleaker.auth.claimed', false);
    setKernel('runtime.cleaker.auth.claimResolution', 'idle');
    setKernel('runtime.cleaker.authenticated', false);
    setKernel('ui.cleaker.settingsOpen', false);
    setKernel('ui.cleaker.registerOpen', false);
    setKernel('ui.cleaker.avatarExpanded', false);
    setKernel('ui.cleaker.showSecret', false);
    setKernel('ui.cleaker.viewMode', 'login');
  }, [setKernel]);

  const resetTotal = React.useCallback(() => {
    simulateLogout();
  }, [setKernel, simulateLogout]);

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 3, md: 5 } }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
        <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 }, borderRadius: 4, mb: 3 }}>
          <Stack spacing={1.25}>
            <Typography variant="h3" sx={{ fontWeight: 800, letterSpacing: '-0.04em' }}>
              Cleaker Lifecycle Test
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.76, maxWidth: 780 }}>
              Corte 5 proof: the kernel is sovereign, identity is canonical, session is volatile,
              and the UI only projects what the semantic graph says is true.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} flexWrap="wrap">
              <Button variant="contained" onClick={simulateClaim}>
                1. Simulate Claim
              </Button>
              <Button variant="outlined" onClick={simulateLogout}>
                2. Logout
              </Button>
              <Button color="error" variant="outlined" onClick={resetTotal}>
                3. Reset Total
              </Button>
            </Stack>
          </Stack>
        </Paper>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', xl: '0.9fr 1.1fr' },
            gap: 3,
            alignItems: 'start',
          }}
        >
          <Paper
            variant="outlined"
            sx={{
              p: { xs: 2, md: 3 },
              borderRadius: 4,
              bgcolor: 'rgba(10,10,10,0.94)',
            }}
          >
            <Cleaker />
          </Paper>

          <KernelDebugger />
        </Box>
      </Box>
    </Box>
  );
}

function FullLifecycleStory() {
  const kernel = React.useMemo(() => {
    const me = new ME() as any;
    writeMeValue(me, 'profile.username', null);
    writeMeValue(me, 'profile.name', null);
    writeMeValue(me, 'profile.email', null);
    writeMeValue(me, 'profile.phone', null);
    writeMeValue(me, 'profile.avatar', null);
    writeMeValue(me, 'auth.claimed_at', null);
    writeMeValue(me, 'identity.session.username', '');
    writeMeValue(me, 'identity.session.namespace', '');
    writeMeValue(me, 'identity.session.authenticated', false);
    writeMeValue(me, 'runtime.cleaker.authenticated', false);
    writeMeValue(me, 'ui.cleaker.viewMode', 'login');
    return me;
  }, []);

  return (
    <Theme>
      <MeRuntimeProvider me={kernel}>
        <LifecycleHarness />
      </MeRuntimeProvider>
    </Theme>
  );
}

const meta = {
  title: 'All.This/Cleaker/Lifecycle',
  component: Cleaker,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Cleaker>;

export default meta;

export const FullLifecycleTest: StoryObj<typeof meta> = {
  render: () => <FullLifecycleStory />,
};
