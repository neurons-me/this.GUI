import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ME from 'this.me';

import Theme from '@/gui/Theme/Theme';
import Cleaker from '@/gui/All.This/Cleaker/Cleaker';
import GeneratePairingQR from '@/gui/All.This/Cleaker/GeneratePairingQR';
import { MeRuntimeProvider } from '@/react/MeRuntimeProvider';
import { useMeValue } from '@/react/useMeValue';
import { Box, Paper, Typography } from '@/gui/Atoms';
import { Stack } from '@/gui/Molecules';
import { writeMeValue } from '@/runtime/run-me';

function MeshRuntimePanel() {
  const namespace = useMeValue<string>('identity.session.namespace') || '';
  const activeUrl = useMeValue<string>('runtime.cleaker.namespace.activeUrl') || '';
  const surfaces = useMeValue<Record<string, unknown>>('runtime.mesh.surfaces') || {};
  const currentExpression = useMeValue<string>('runtime.mesh.pairing.currentExpression') || '';
  const tokens = useMeValue<Record<string, unknown>>('runtime.mesh.pairing.tokens') || {};

  return (
    <Stack spacing={1.5}>
      <Paper variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.75 }}>
          Host Pairing Console
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5, lineHeight: 1.6 }}>
          Generate a sovereign QR from the host surface, then use the built-in simulate button to
          dispatch the same `me://...` expression into Cleaker.
        </Typography>
        <GeneratePairingQR
          namespace={namespace}
          origin={activeUrl}
          hostSurface="macbookair"
          rootName="cleaker.me"
        />
      </Paper>

      <Paper variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 0.75 }}>
          Mesh Debugger
        </Typography>
        <Box
          component="pre"
          sx={{
            m: 0,
            p: 1.5,
            borderRadius: 2,
            bgcolor: 'rgba(0,0,0,0.88)',
            color: '#75ffbe',
            fontSize: 12,
            lineHeight: 1.6,
            overflowX: 'auto',
            fontFamily:
              'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          }}
        >
          {JSON.stringify({
            namespace,
            activeUrl,
            currentExpression,
            tokens,
            surfaces,
          }, null, 2)}
        </Box>
      </Paper>
    </Stack>
  );
}

function MeshPairingStory() {
  const kernel = React.useMemo(() => {
    const me = new ME() as any;
    writeMeValue(me, 'username', 'jabellae');
    writeMeValue(me, 'name',     'Sui Abella');
    writeMeValue(me, 'email',    'sui@neurons.me');
    writeMeValue(me, 'phone',    '+52 228 123 4567');
    writeMeValue(me, 'auth.claimed_at', Date.now() - 120000);
    writeMeValue(me, 'identity.session.username', 'jabellae');
    writeMeValue(me, 'identity.session.namespace', 'jabellae.cleaker.me');
    writeMeValue(me, 'identity.session.authenticated', true);
    writeMeValue(me, 'identity.session.identityHash', 'test-hash-123');
    writeMeValue(me, 'identity.session.openedAt', Date.now() - 60000);
    writeMeValue(me, 'runtime.cleaker.namespace.activeUrl', 'http://jabellae.localhost:8161');
    writeMeValue(me, 'runtime.cleaker.namespace.expression', 'cleaker.me');
    writeMeValue(me, 'runtime.cleaker.namespace.previewQrValue', 'http://jabellae.localhost:8161');
    writeMeValue(me, 'runtime.mesh.surfaces', {});
    writeMeValue(me, 'runtime.mesh.pairing.tokens', {});
    writeMeValue(me, 'runtime.mesh.pairing.currentExpression', '');
    writeMeValue(me, 'ui.cleaker.viewMode', 'settings');
    return me;
  }, []);

  return (
    <Theme>
      <MeRuntimeProvider me={kernel}>
        <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              maxWidth: 1220,
              mx: 'auto',
              display: 'grid',
              gap: 3,
              gridTemplateColumns: { xs: '1fr', xl: '0.92fr 0.68fr' },
              alignItems: 'start',
            }}
          >
            <Paper variant="outlined" sx={{ p: { xs: 1.5, md: 2 }, borderRadius: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: '-0.04em', mb: 0.75 }}>
                Cleaker Mesh Pairing
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 740, mb: 2 }}>
                Host generates a one-time `me://namespace[claim:TOKEN]/new-surface` QR. Simulate
                the scan and Cleaker pivots into the sovereign claim screen, then writes the new
                surface into `runtime.mesh.surfaces`.
              </Typography>
              <Cleaker />
            </Paper>

            <MeshRuntimePanel />
          </Box>
        </Box>
      </MeRuntimeProvider>
    </Theme>
  );
}

const meta = {
  title: 'All.This/Cleaker/Mesh Pairing',
  component: Cleaker,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Cleaker>;

export default meta;

export const QRClaimFlow: StoryObj<typeof meta> = {
  render: () => <MeshPairingStory />,
};
