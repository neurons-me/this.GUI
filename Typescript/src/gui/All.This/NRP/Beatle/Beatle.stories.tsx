import type { Meta, StoryObj } from '@storybook/react';
import { Box, Typography } from '@/gui/Atoms';
import Layout from '@/gui/Layout/Layout';
import SurfaceAccessTable from '@/gui/All.This/netget/SurfaceAccessTable';
import Beatle from './Beatle';

const meta: Meta<typeof Beatle> = {
  title: 'All.This/NRP/Beatle',
  component: Beatle,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Beatle>;

export const Bar: Story = {
  render: () => (
    <Box sx={{ maxWidth: 480, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        Type a .me expression and press Enter to open a WebSocket channel via NRP.
      </Typography>
      <Beatle defaultExpression="jabellae" />
      <Beatle defaultExpression="jabellae + alex" />
      <Beatle />
    </Box>
  ),
};

export const Bubble: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
      <Beatle variant="bubble" defaultExpression="jabellae" />
      <Beatle variant="bubble" />
    </Box>
  ),
};

export const InLayout: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <Layout
      TopBar={{
        title: 'NRP',
        elementsRight: [
          { type: 'action', props: { element: <Beatle sx={{ width: 320 }} /> } },
        ],
      }}
      LeftBar={{
        elements: [
          { type: 'link', props: { label: 'Namespaces', icon: 'hub' } },
          { type: 'link', props: { label: 'Channels',   icon: 'bolt' } },
          { type: 'link', props: { label: 'Mesh',       icon: 'polyline' } },
        ],
      }}
      RightBar={false}
      Footer={false}
    >
      <Box sx={{ p: 4, maxWidth: 680, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>Beatle</Typography>
          <Typography variant="body2" color="text.secondary">
            The NRP channel interface. Type any .me expression — a single namespace,
            a union, an intersection — and Beatle opens a bidirectional WebSocket
            to the resolved endpoint(s). The browser URL stays independent.
          </Typography>
        </Box>

        <Beatle defaultExpression="jabellae" />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
          {[
            'me://jabellae',
            'me://jabellae + alex',
            'me://jabellae ∩ team.acme',
            'me://jabellae @ wikipedia.com',
            'me://(jabellae + alex) @ "https://wikipedia.com/Scarab"',
          ].map(expr => (
            <Typography key={expr} variant="caption" sx={{ color: 'text.secondary', fontFamily: 'monospace', fontSize: '0.72rem' }}>
              {expr}
            </Typography>
          ))}
        </Box>

        <SurfaceAccessTable />
      </Box>
    </Layout>
  ),
};
