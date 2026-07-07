import type { Meta, StoryObj } from '@storybook/react';
import { Box, Typography } from '@/gui/Atoms';
import Layout from '@/gui/Layout/Layout';
import LocalNetGet from './local.netget';
import SurfaceAccessTable from './SurfaceAccessTable';

const meta: Meta<typeof LocalNetGet> = {
  title: 'All.This/netget/local.netget',
  component: LocalNetGet,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof LocalNetGet>;

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
        <SurfaceAccessTable />
      </Box>
    </Layout>
  ),
};
