import { MemoryRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import CustomThemeProvider from '../../../../context/ThemeContext';
import LeftDrawer from './LeftDrawer';
// ---- Sample data (declarative tree) ---------------------
const nestedLinks = [
  {
    label: 'Documentation',
    children: [
      { label: 'Introduction', path: '/docs/intro' },
      {
        label: 'Getting Started',
        children: [
          { label: 'Install', path: '/docs/start/install' },
          { label: 'Configure', path: '/docs/start/configure' },
        ],
      },
      { label: 'API Reference', path: '/docs/api' },
    ],
  },
  {
    label: 'Guides',
    children: [
      { label: 'Theming', path: '/guides/theming' },
      {
        label: 'Routing',
        children: [
          { label: 'Nested Routes', path: '/guides/routing/nested' },
          { label: 'Data APIs', path: '/guides/routing/data' },
        ],
      },
    ],
  },
  { label: 'GitHub', path: 'https://github.com/neurons-me', external: true },
];

const simpleLinks = [
  { label: 'Home', path: '/' },
  { label: 'Docs', path: '/docs' },
  { label: 'GitHub', path: 'https://github.com/neurons-me', external: true },
];

const iconLinks = [
    { label: 'Dashboard', path: '/', icon: 'mui:Insights', iconColor: 'primary' },
      { label: 'Payments', path: '/pay', icon: 'mui:AttachMoney', iconColor: '#43a047' }, 
      { label: 'Compute', path: '/compute', icon: 'mui:Bolt', iconColor: 'text.secondary' },
];

// ---- Storybook meta -------------------------------------------------
export default {
  title: 'Components/AppBars/LeftDrawer',
  component: LeftDrawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Navigation drawer for hierarchical routes. Pass `drawerLinks` array with optional nested `children`. Handles external links, current-route highlighting, and responsive behavior (temporary on mobile, permanent on desktop). Works purely declaratively.',
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/docs/intro']}>
        <CustomThemeProvider initialTheme="neurons-dark">
          {/* Full-height canvas so the drawer looks realistic */}
          <Box sx={{ height: '100vh', display: 'flex', bgcolor: 'background.default' }}>
            <Story />
          </Box>
        </CustomThemeProvider>
      </MemoryRouter>
    ),
  ],
  argTypes: {
    open: { control: 'boolean', description: 'Controls temporary drawer (mobile). If omitted, component manages its own open state.' },
    onClose: { action: 'onClose', description: 'Close callback for temporary drawer (mobile).'},
    drawerWidth: { control: { type: 'number', min: 160, max: 400, step: 10 }, description: 'Width of the drawer in pixels.' },
    drawerLinks: { control: 'object', description: 'Declarative navigation tree. Each item: { label, path?, external?, children? }' },
  },
};

// ---- Stories --------------------------------------------------------
const Template = (args) => <LeftDrawer {...args} />;

export const NestedTree = Template.bind({});
NestedTree.args = {
  drawerWidth: 260,
  drawerLinks: nestedLinks,
  open: true,
};
NestedTree.parameters = {
  docs: {
    description: {
      story:
        'Declarative nested navigation tree with multiple levels. Click to navigate within the MemoryRouter. Parent nodes expand/collapse. On small screens, the drawer becomes temporary.',
    },
  },
};

export const SimpleLinks = Template.bind({});
SimpleLinks.args = {
  drawerWidth: 240,
  drawerLinks: simpleLinks,
  open: true,
};
SimpleLinks.parameters = {
  docs: {
    description: { story: 'Minimal flat list — no nested children.' },
  },
};

export const IconLinks = Template.bind({});
IconLinks.args = {
  drawerWidth: 240,
  drawerLinks: iconLinks,
  open: true,
};
IconLinks.parameters = {
  docs: {
    description: { story: 'Minimal flat list — no nested children.' },
  },
};