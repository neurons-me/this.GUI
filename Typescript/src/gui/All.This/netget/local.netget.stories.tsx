import type { Meta, StoryObj } from '@storybook/react';
import { Box, Typography } from '@/gui/Atoms';
import Layout from '@/gui/Layout/Layout';
import LocalNetGet from './local.netget';
import SurfaceAccessTable, { type Surface } from './SurfaceAccessTable';

const meta: Meta<typeof LocalNetGet> = {
  title: 'All.This/netget/local.netget',
  component: LocalNetGet,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof LocalNetGet>;

// The first 3 rows are exactly what createMeNetgetClient('http://local.netget')
// .addresses() returns (verified live this session -- it always includes these as
// 'netget' kind). addresses() itself only ever produces netget/public rows; the
// monad/direct rows below are added here so the story exercises the full legend.
const MOCK_SURFACES: Surface[] = [
  { namespace: 'localhost',     kind: 'netget', online: true },
  { namespace: '127.0.0.1',     kind: 'netget', online: true },
  { namespace: 'local.netget',  kind: 'netget', online: true },
  { namespace: 'suis-macbook-air.local', kind: 'monad', online: true, endpoint: 'http://127.0.0.1:4021', trust: 'owner' },
  { namespace: 'jabellae.suis-macbook-air.local', kind: 'monad', online: false, endpoint: 'http://127.0.0.1:4022' },
  { namespace: 'example.com', kind: 'public', online: true, endpoint: 'http://127.0.0.1:3000' },
  { namespace: 'raw-tcp-9090', kind: 'direct', online: true, endpoint: '127.0.0.1:9090' },
];

export const InSidebar: Story = {
  render: () => (
    <Layout
      TopBar={{ title: 'local.netget widget' }}
      LeftBar={{
        elements: [
          { type: 'link', props: { label: 'Dashboard', icon: 'dashboard' } },
          { type: 'link', props: { label: 'Domains',   icon: 'language'  } },
          { type: 'link', props: { label: 'Logs',      icon: 'article'   } },
        ],
        footerElements: [
          {
            type: 'action',
            props: { label: 'Gateway', element: <LocalNetGet /> },
          },
        ],
      }}
      RightBar={false}
      Footer={false}
    >
      <Box sx={{ p: 4, maxWidth: 720, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
            NetGet
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gateway to the web. Routes hostnames to monads via OpenResty.
          </Typography>
        </Box>
        <SurfaceAccessTable rows={MOCK_SURFACES} />
      </Box>
    </Layout>
  ),
};
