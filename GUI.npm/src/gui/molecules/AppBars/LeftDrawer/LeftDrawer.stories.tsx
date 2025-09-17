import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import GuiProvider from '@/context/GuiProvider';
import LeftDrawer, { type RouteItem, type LeftDrawerProps } from './LeftDrawer';
import NavBar from '../NavBar/NavBar';

// ---- Sample data (declarative tree) ---------------------
const nestedLinks: RouteItem[] = [
  {
    label: 'Documentation',
    children: [
      { label: 'Introduction', href: '/docs/intro' },
      {
        label: 'Getting Started',
        children: [
          { label: 'Install', href: '/docs/start/install' },
          { label: 'Configure', href: '/docs/start/configure' },
        ],
      },
      { label: 'API Reference', href: '/docs/api' },
    ],
  },
  {
    label: 'Guides',
    children: [
      { label: 'Theming', href: '/guides/theming' },
      {
        label: 'Routing',
        children: [
          { label: 'Nested Routes', href: '/guides/routing/nested' },
          { label: 'Data APIs', href: '/guides/routing/data' },
        ],
      },
    ],
  },
  { label: 'GitHub', href: 'https://github.com/neurons-me', external: true },
];

const simpleLinks: RouteItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Docs', href: '/docs' },
  { label: 'GitHub', href: 'https://github.com/neurons-me', external: true },
];

const iconLinks: RouteItem[] = [
  { label: 'Dashboard', href: '/', icon: 'mui:Insights', iconColor: 'primary' },
  { label: 'Payments', href: '/pay', icon: 'mui:AttachMoney', iconColor: '#43a047' },
  { label: 'Compute', href: '/compute', icon: 'mui:Bolt', iconColor: 'text.secondary' },
];

// ---- Storybook meta -------------------------------------------------
const meta = {
  title: 'Molecules/AppBars/Drawers/LeftDrawer',
  component: LeftDrawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The **LeftDrawer** component renders a responsive, hierarchical navigation sidebar (permanent on desktop, temporary on mobile).

## Features
- **Declarative tree** via \`drawerLinks\` with unlimited nesting using \`children\`.
- **Icons** per item using the This.GUI icon registry (\`mui:\` or \`lucide:\` prefixes).
- **External links** (\`external: true\`) open in a new tab.
- **Route awareness**: highlights the current route inside a router.
- **Responsive**: permanent on desktop, temporary overlay on mobile.

### Props (overview)
- **Header**
  - <code>header?: { title?: string; icon?: string | ReactNode; iconColor?: string }</code>
  - Declarative icon: <code>icon: 'mui:Home' | 'lucide:home'</code>  
    React icon: <code>icon: &lt;Home htmlColor="#00aa96" /&gt;</code>
- **Drawer links**
  - <code>drawerLinks: Array&lt;{ label: string; href?: string; external?: boolean; icon?: string | ReactNode; iconColor?: string; children?: Item[] }&gt;</code>
  - Declarative example: <code>{ label: 'Docs', href: '/docs', icon: 'mui:Description', iconColor: 'primary' }</code>  
    React example: <code>{ label: 'Mail', href: '/inbox', icon: &lt;Mail htmlColor="#fff" /&gt; }</code>  
    Color mapping: Lucide → <code>color</code>, MUI → <code>htmlColor</code> (handled by the registry via <code>iconColor</code>).
- **Behavior**
  - <code>open?: boolean</code> (controls temporary drawer on mobile)  
    <code>onClose?: (event) =&gt; void</code> (callback to close on mobile)
- **Layout / Insets**
  - Auto-syncs <code>theme.insets.left</code> (permanent desktop) and resets to <code>0</code> on mobile overlays.  
    Also updates CSS var <code>--gui-inset-left</code> for non-MUI consumers.
- **Extensibility**
  - <code>sx</code> for MUI style overrides.  
    Icons accept <code>iconColor</code> with theme keys (<code>primary</code>, <code>text.secondary</code>, etc.) or any CSS color (e.g., <code>#4caf50</code>).

### Granular styling (sx slots)
The LeftDrawer supports granular styling via several \`*Sx\` props that target specific slots:

- \`sx\` — root \`<Drawer>\`
- \`paperSx\` — the Drawer paper (\`& .MuiDrawer-paper\`)
- \`headerSx\` — container for the optional header area
- \`listSx\` — \`<List>\` wrapper
- \`itemSx\` — top-level \`<ListItemButton>\` rows
- \`nestedItemSx\` — nested \`<ListItemButton>\` rows (children)
- \`iconSx\` — \`<ListItemIcon>\`

Example usage:

~~~tsx
<LeftDrawer
  drawerWidth={240}
  drawerLinks={[{ label: 'Home', href: '/' }]}
  sx={{ bgcolor: 'background.paper' }}
  paperSx={{ boxShadow: 3 }}
  headerSx={{ px: 2, py: 1 }}
  itemSx={{ borderRadius: 1 }}
  nestedItemSx={{ pl: 4 }}
  iconSx={{ color: 'primary.main' }}
  open
/>
~~~

---

## 1) Using the Component.
Provide a plain JS array to \`drawerLinks\`. Each node supports:

- \`label\` (string) — visible text.
- \`href\` (string, optional) — internal route or external URL.
- \`external\` (boolean, optional) — open \`href\` in a new tab.
- \`icon\` (string, optional) — provider-prefixed icon name (\`mui:BarChart\`, \`lucide:home\`, etc.).
- \`iconColor\` (string, optional) — theme color key (\`primary\`, \`secondary\`, \`info\`, \`text.secondary\`) **or** any CSS color (e.g. \`#4caf50\`).
- \`children\` (array, optional) — nested items.

**Example:**
~~~jsx
<LeftDrawer
  drawerWidth={260}
  drawerLinks={[
    {
      label: 'Documentation',
      icon: 'lucide:book',
      children: [
        { label: 'Introduction', href: '/docs/intro', icon: 'mui:Help', iconColor: 'info' },
        {
          label: 'Getting Started',
          icon: 'lucide:play',
          children: [
            { label: 'Install', href: '/docs/start/install', icon: 'mui:Build' },
            { label: 'Configure', href: '/docs/start/configure', icon: 'mui:Settings', iconColor: 'secondary' },
          ],
        },
        { label: 'API Reference', href: '/docs/api', icon: 'mui:Code' },
      ],
    },
    {
      label: 'Guides',
      icon: 'lucide:book-open',
      children: [
        { label: 'Theming', href: '/guides/theming', icon: 'mui:Brush', iconColor: '#ff9800' },
        { label: 'Routing', href: '/guides/routing', icon: 'mui:DeveloperMode' },
      ],
    },
    { label: 'GitHub', href: 'https://github.com/neurons-me', external: true, icon: 'lucide:github' },
  ]}
  open
/>
~~~

---

## 2) Passing React Components as props.

You can bypass the registry and pass **React elements** as \`icon\`. Import and style them manually:

~~~jsx
import LeftDrawer from './LeftDrawer';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Home as HomeIcon } from 'lucide-react';

<LeftDrawer
  drawerWidth={240}
  drawerLinks={[
    { label: 'Home', href: '/', icon: <HomeIcon size={18} color="#00aa96" /> },
    { label: 'Media', href: '/media', icon: <CameraAltIcon htmlColor="#ff9800" /> },
  ]}
  open
/>
~~~

**Note:** In this mode, \`iconColor\` is ignored because you fully control the element props.

---

## Layout Insets (auto-sync)
The LeftDrawer **auto-updates layout insets** so your layout/footer can adapt without manual wiring:

- **Desktop (permanent)** → sets \`theme.insets.left = drawerWidth\` and updates the CSS variable \`--gui-inset-left\`.
- **Mobile (temporary overlay)** → keeps \`theme.insets.left = 0\` (no push).
- **On unmount / mode change** → resets back to \`0\`.

This allows other components (e.g. \`Footer\`, page containers) to read offsets and avoid being covered by permanent drawers.

**How to consume insets**
- From **CSS** (recommended for plain containers):
  ~~~css
  /* Example container that respects permanent left drawer */
  .page-shell {
    margin-left: var(--gui-inset-left, 0px);
  }
  ~~~
- From **MUI theme** (inside React/MUI components):
  \`\`\`jsx
  const theme = useTheme();
  const leftInset = theme.insets?.left ?? 0; // numeric px
  \`\`\`
The stories use a fullscreen layout so you can see the drawer space reservation in action.

---

### Icon Providers
- **Material UI:** \`mui:IconName\` — subset mapped in \`src/icons/packs/Material.js\`. Catalog: https://mui.com/material-ui/material-icons/
- **Lucide:** \`lucide:icon-name\`. Catalog: https://lucide.dev/icons

---

## Props
Props are auto-documented by Storybook's ArgsTable below.

The stories here wrap the component in a \`MemoryRouter\` and theme provider for demo purposes.

---

## Declarative JSON / Config usage

You can also use the LeftDrawer declaratively via JSON config, for example:

~~~json
{
  "type": "LeftDrawer",
  "props": {
    "drawerWidth": 260,
    "drawerLinks": [
      {
        "label": "Docs",
        "icon": "mui:Description",
        "children": [
          { "label": "Intro", "href": "/docs/intro" },
          { "label": "API", "href": "/docs/api" }
        ]
      },
      { "label": "GitHub", "href": "https://github.com/neurons-me", "external": true }
    ],
    "paperSx": { "bgcolor": "background.paper" },
    "itemSx": { "borderRadius": 1, "mb": 0.5 }
  }
}
~~~

**Resolver**

The \`LeftDrawerResolver\` maps this JSON spec to the \`<LeftDrawer />\` component props, converting \`icon\` strings via the This.GUI icon registry and handling anchors versus router links automatically. It also forwards the \`*Sx\` slot props (\`sx\`, \`paperSx\`, \`headerSx\`, etc.) to the appropriate internal elements for granular styling.

        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/docs/intro']}>
        <GuiProvider>
          {/* Full-height canvas so the drawer looks realistic */}
          <Box sx={{ height: '100vh', display: 'flex', bgcolor: 'background.default' }}>
            <Story />
          </Box>
        </GuiProvider>
      </MemoryRouter>
    ),
  ],
  argTypes: {
    open: { control: 'boolean', description: 'Controls temporary drawer (mobile). If omitted, the component manages its own open state.' },
    onClose: { action: 'onClose', description: 'Close callback for temporary drawer (mobile).' },
    drawerWidth: { control: { type: 'number', min: 160, max: 400, step: 10 }, description: 'Width of the drawer in pixels.' },
    drawerLinks: {
      control: 'object',
      description: 'Declarative navigation tree. Each item supports: { label, href?, external?, icon?, iconColor?, children? }',
    },
    sx: {
      control: 'object',
      description: 'MUI sx prop applied to the root <Drawer> component.',
    },
    paperSx: {
      control: 'object',
      description: 'MUI sx prop applied to the Drawer paper (the & .MuiDrawer-paper element).',
    },
    headerSx: {
      control: 'object',
      description: 'MUI sx prop applied to the container wrapping the optional header area.',
    },
    listSx: {
      control: 'object',
      description: 'MUI sx prop applied to the <List> wrapper element.',
    },
    itemSx: {
      control: 'object',
      description: 'MUI sx prop applied to top-level <ListItemButton> rows.',
    },
    nestedItemSx: {
      control: 'object',
      description: 'MUI sx prop applied to nested <ListItemButton> rows (children).',
    }
  },
} satisfies Meta<typeof LeftDrawer>;

export default meta;

type Story = StoryObj<typeof LeftDrawer>;

// ---- Stories --------------------------------------------------------
export const NestedTree: Story = {
  args: {
    drawerWidth: 260,
    drawerLinks: nestedLinks,
    open: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Declarative nested navigation tree with multiple levels. Click to navigate within the MemoryRouter. Parent nodes expand/collapse. On small screens, the drawer becomes temporary.',
      },
    },
  },
};

export const SimpleLinks: Story = {
  args: {
    drawerWidth: 240,
    drawerLinks: simpleLinks,
    open: true,
  },
  parameters: {
    docs: { description: { story: 'Minimal flat list — no nested children.' } },
  },
};

export const IconLinks: Story = {
  args: {
    drawerWidth: 240,
    drawerLinks: iconLinks,
    open: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Flat list with icons and per-item colors. Use `icon` with `mui:`/`lucide:` prefixes and `iconColor` with theme keys or CSS colors.',
      },
    },
  },
};

export const WithNavbar: Story = {
  args: {
    drawerWidth: 260,
    drawerLinks: nestedLinks,
    open: true,
  },
  render: (args) => (
    <>
      {/* Fixed AppBar that reports its height via ThemeContext */}
      <NavBar title="Demo" />
      <LeftDrawer {...args} />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'LeftDrawer with a fixed NavBar on top. The NavBar updates `theme.insets.nav` (and `--gui-nav-height`) in real time, so the drawer aligns its `top`/`height` accordingly. Useful to validate vertical spacing and sticky layouts.',
      },
    },
  },
};

export const WithHeader: Story = {
  args: {
    drawerWidth: 240,
    drawerLinks: simpleLinks,
    open: true,
  },
  render: (args) => (
    <LeftDrawer
      {...args}
      header={{ title: 'Neuroverse', icon: 'lucide:book-open', iconColor: 'primary' }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the new `header` prop with both a title and an icon. The drawer displays a custom header above the navigation links.',
      },
    },
  },
};

export const MobileTemporary: Story = {
  args: {
    drawerWidth: 240,
    drawerLinks: nestedLinks,
    open: true,
  },
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story:
          'Mobile viewport (iPhone 6/7/8). The drawer renders as a temporary overlay controlled by `open`/`onClose`. Use the Docs toolbar to close it or wire the `onClose` action.',
      },
    },
  },
  decorators: [
    (StoryFn) => {
      const MobileWrapper: React.FC = () => {
        const base = useTheme();
        // Force the component to consider widths < 480px as below `md` so it chooses temporary mode
        const forcedMobileTheme = createTheme({
          ...base,
          breakpoints: {
            ...base.breakpoints,
            values: { ...base.breakpoints?.values, md: 480, lg: 1024, xl: 1280 },
          },
        });
        return (
          <ThemeProvider theme={forcedMobileTheme}>
            <Box sx={{ width: 375, mx: 'auto', height: '100vh', display: 'flex', bgcolor: 'background.default' }}>
              <StoryFn />
            </Box>
          </ThemeProvider>
        );
      };
      return <MobileWrapper />;
    },
  ],
};