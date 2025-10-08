import type { Meta, StoryObj } from '@storybook/react';
import RightSidebar from './RightSidebar';
import NavBar from '../../TopBar/TopBar';

const meta = {
  title: 'Layouts/ResponsiveUI/Sidebars/RightSidebar',
  component: RightSidebar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
        <div style={{ minHeight: '100vh' }}>
          <Story />
        </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **RightSidebar** renders a contextual panel on the right side (persistent on desktop, temporary on mobile).
It supports a hierarchical list with optional **icons** (via the This.GUI icon registry) and **nested groups**.

### Two icon usage modes

**1) Declarative mode (recommended)** — pass icon **strings** using the registry prefixes (\`mui:\`, \`lucide:\`).

- Color: use \`iconColor\` with a theme key (\`primary\`, \`secondary\`, \`info\`, etc.) or any CSS color (e.g. \`#4caf50\`).
- The component internally resolves these strings through the registry.

**2) Direct React mode (advanced)** — pass a React element as the \`icon\` prop (you import icons yourself). 
This gives you full control, but skips the registry.

### Item shape (\`rightContext.items\`)

Each item supports:
- \`title\` (string) — 'label' or 'item'
- \`label\` (string)
- \`href\` (string, internal path or external URL)
- \`external\` (boolean) — opens external links in new tab
- \`icon\` (string | ReactNode | Component)
- \`iconColor\` (string) — theme key or CSS color
- \`children\` (array) — nested items

### Quick example (declarative)

\`\`\`js
const rightContext = {
  title: 'Quick actions',
  items: [
    { label: 'Inbox', href: '/inbox', icon: 'mui:Mail', iconColor: 'primary' },
    {
      label: 'Analytics',
      icon: 'lucide:bar-chart-3',
      children: [
        { label: 'Reports', href: '/reports', icon: 'mui:Insights', iconColor: '#ff9800' },
        { label: 'Trends', href: '/trends', icon: 'lucide:trending-up', iconColor: '#4caf50' },
      ],
    },
  ],
};
<RightSidebar rightContext={rightContext} />
\`\`\`

---

### Layout Insets (auto‑coordination)
On **desktop**, RightSidebar is **permanent** and automatically updates the UI insets so other components (e.g., \`Footer\`, page containers) can adapt:

- Sets **\`theme.insets.right = drawerWidth\`** when permanent.
- Sets **\`theme.insets.right = 0\`** on mobile (temporary drawer) or when unmounted.
- This is wired via the Theme Provider API **\`theme.updateInsets({ right })\`**.

**Why it matters:** Layouts or containers can read \`theme.layout.insets.right\` (exposed in the MUI theme) to add padding/margins so content doesn’t go under the drawer.

**Example (reading insets inside a component):**
\`\`\`jsx
import { useTheme, Box } from '@mui/material';

export default function PageContainer({ children }) {
  const theme = useTheme();
  const rightInset = theme?.layout?.insets?.right || 0; // number in px
  return (
    <Box sx={{ pr: rightInset, transition: 'padding 200ms ease' }}>
      {children}
    </Box>
  );
}
\`\`\`

**Notes**
- In mobile, the drawer overlays content (no reserved space).
- Changing \`drawerWidth\` on desktop will propagate to \`theme.insets.right\` automatically.
`,
      },
    },
  },
  argTypes: {
    rightContext: {
      description: 'Object with `title` and `items` describing the drawer content.',
      control: 'object',
    },
  },
} satisfies Meta<typeof RightSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Stories ---

const BASE_TITLE = 'Context';

export const Default: Story = {
  args: {
    rightContext: {
      title: BASE_TITLE,
      items: [
        { label: 'Overview', href: '/overview' },
        { label: 'Settings', href: '/settings' },
        {
          label: 'Resources',
          children: [
            { label: 'Docs', href: '/docs' },
            { label: 'API', href: '/api' },
          ],
        },
      ],
    },
  },
};

export const WithIcons: Story = {
  args: {
    rightContext: {
      title: BASE_TITLE,
      items: [
        { label: 'Inbox', href: '/inbox', icon: 'mui:Email' },
        { label: 'Reports', href: '/reports', icon: 'mui:Insights' },
        {
          label: 'More',
          icon: 'lucide:more-horizontal',
          children: [
            { label: 'Activity', href: '/activity', icon: 'lucide:activity' },
            { label: 'Security', href: '/security', icon: 'mui:Security' },
          ],
        },
      ],
    },
  },
};

export const WithColoredIcons: Story = {
  args: {
    rightContext: {
      title: BASE_TITLE,
      items: [
        { label: 'Inbox', href: '/inbox', icon: 'mui:Email', iconColor: 'primary' },
        { label: 'Billing', href: '/billing', icon: 'mui:AttachMoney', iconColor: '#2e7d32' },
        {
          label: 'Analytics',
          icon: 'lucide:bar-chart-3',
          iconColor: '#00aa96',
          children: [
            { label: 'Trends', href: '/trends', icon: 'lucide:trending-up', iconColor: '#4caf50' },
            { label: 'Dashboards', href: '/dashboards', icon: 'mui:Insights', iconColor: 'secondary' },
          ],
        },
      ],
    },
  },
};

export const Docs_UsageModes: Story = {
  render: () => (
    <div style={{ maxWidth: 920, padding: 24, lineHeight: 1.55 }}>
      <h2 style={{ marginTop: 0 }}>Using Icons in RightSidebar</h2>

      <h3>1. Declarative Mode (recommended)</h3>
      <p>
        Provide icon names as <code>strings</code> with the <code>mui:</code> or <code>lucide:</code> prefix.
        Colors can be theme keys (e.g. <code>primary</code>, <code>secondary</code>) or CSS colors (e.g. <code>#4caf50</code>).
      </p>
      <pre style={{ background: '#0f111a', color: '#e6e6e6', padding: 16, borderRadius: 8, overflow: 'auto' }}>
        <code>{`const rightContext = {
  title: 'Context',
  items: [
    { label: 'Inbox', href: '/inbox', icon: 'mui:Email', iconColor: 'primary' },
    { label: 'Reports', href: '/reports', icon: 'mui:Insights', iconColor: '#ff9800' },
    {
      label: 'More', icon: 'lucide:more-horizontal', children: [
        { label: 'Activity', href: '/activity', icon: 'lucide:activity', iconColor: '#00aa96' },
        { label: 'Security', href: '/security', icon: 'mui:Security', iconColor: 'info' },
      ]
    }
  ]
};
<RightSidebar rightContext={rightContext} />`}</code>
      </pre>

      <h3>2. Direct React Mode (advanced)</h3>
      <p>
        Import icon components yourself and pass them as React elements in <code>icon</code>. This bypasses the registry.
      </p>
      <pre style={{ background: '#0f111a', color: '#e6e6e6', padding: 16, borderRadius: 8, overflow: 'auto' }}>
        <code>{`import { Mail } from 'lucide-react';
import InsightsIcon from '@mui/icons-material/Insights';

const rightContext = {
  title: 'Context',
  items: [
    { label: 'Inbox', href: '/inbox', icon: <Mail color="#4caf50" /> },
    { label: 'Reports', href: '/reports', icon: <InsightsIcon htmlColor="#ff9800" /> },
  ]
};
<RightSidebar rightContext={rightContext} />`}</code>
      </pre>

      <p>
        In both modes, nested groups are declared via the <code>children</code> array of any item.
      </p>
    </div>
  ),
};

export const Docs_Insets: Story = {
  render: () => (
    <div style={{ maxWidth: 920, padding: 24, lineHeight: 1.55 }}>
      <h2 style={{ marginTop: 0 }}>RightSidebar & Layout Insets</h2>
      <p>
        On desktop, RightSidebar is permanent and reserves space by updating <code>theme.insets.right</code> via
        the Theme Provider API (<code>theme.updateInsets</code>). On mobile it is temporary and does not reserve space.
      </p>
      <pre style={{ background: '#0f111a', color: '#e6e6e6', padding: 16, borderRadius: 8, overflow: 'auto' }}>
        <code>{`// Inside RightSidebar (simplified)
useEffect(() => {
  if (isPermanent) theme.updateInsets?.({ right: drawerWidth });
  else theme.updateInsets?.({ right: 0 });
  return () => theme.updateInsets?.({ right: 0 });
}, [isPermanent, drawerWidth]);
`}</code>
      </pre>
      <p>
        Consumers can read the value from <code>theme.layout.insets.right</code> to pad containers or footers:
      </p>
      <pre style={{ background: '#0f111a', color: '#e6e6e6', padding: 16, borderRadius: 8, overflow: 'auto' }}>
        <code>{`const theme = useTheme();
const rightInset = theme.layout.insets.right || 0;
return <Box sx={{ pr: rightInset }}>Content</Box>;
`}</code>
      </pre>
    </div>
  ),
};

export const WithNavbar: Story = {
  args: {
    rightContext: {
      title: 'Context',
      items: [
        { label: 'Inbox', href: '/inbox', icon: 'mui:Email' },
        { label: 'Reports', href: '/reports', icon: 'mui:Insights' },
        {
          label: 'More',
          icon: 'lucide:more-horizontal',
          children: [
            { label: 'Activity', href: '/activity', icon: 'lucide:activity' },
            { label: 'Security', href: '/security', icon: 'mui:Security' },
          ],
        },
      ],
    },
  },
  render: (args) => (
    <>
      {/* Fixed AppBar that reports its height via ThemeContext */}
      <NavBar title="Demo" />
      <RightSidebar {...args} />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'RightSidebar with a fixed NavBar on top. The NavBar updates `theme.insets.nav` (and `--gui-nav-height`) in real time, so the drawer aligns its `top`/`height` accordingly. Compare this with the default stories (without NavBar).',
      },
    },
  },
};