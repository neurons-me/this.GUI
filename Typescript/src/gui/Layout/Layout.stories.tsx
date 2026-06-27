import React from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import Layout from './Layout';
import Page from '@/gui/Molecules/Page/Page';
import { Box, Typography } from '@/gui/Atoms';
import ThemeModeToggle from '@/gui/Theme/ToggleMode/ToggleMode';
const meta: Meta<typeof Layout> = {
  title: "Getting Started/Layout",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Responsive shell used across ***.GUI***

It coordinates the TopBar left/right sidebars, and Footer so their insets remain in sync while content renders inside.

- Inset-aware shell — provides the layout context and automatically keeps TopBar/Footer/content aligned as sidebars open/close.
- **Composable regions** – optional \`TopBar\`, \`LeftBar\`, \`RightBar\`, and \`Footer\` let you enable only what you need.
- **Sticky actions** – \`stickyOptions\` uses the same GUI icon registry pattern as the rest of the shell, so config-driven quick actions stay consistent with sidebars and nav links.

## Declarative usage
~~~json
{
  "type": "Layout",
  "props": {
    "TopBar": {
      "title": "Workspace",
      "elementsRight": [
        {
          "type": "action",
          "props": {
            "element": "ThemeModeToggle"
          }
        }
      ]
    },
    "LeftBar": {
      "elements": [
        {
          "type": "link",
          "props": {
            "label": "Dashboard",
            "icon": "dashboard"
          }
        },
        {
          "type": "menu",
          "props": {
            "label": "Projects",
            "icon": "folder",
            "items": [
              {
                "label": "Project A",
                "icon": "work"
              },
              {
                "label": "Project B",
                "icon": "assignment"
              }
            ]
          }
        }
      ]
    },
    "RightBar": { "elements": [] },
    "stickyOptions": {
      "items": [
        { "icon": "insights", "label": "Insights", "href": "/insights" },
        { "icon": "menu_book", "label": "Docs", "href": "/docs" },
        { "icon": "help", "label": "Support", "href": "/support" }
      ]
    },
    "Footer": {
      "brandLabel": "neurons.me",
      "centerElements": [
        {
          "type": "link",
          "props": {
            "label": "Docs",
            "href": "/docs",
            "icon": "menu_book"
          }
        }
      ]
    }
  },
  "Content": [
    {
      "children": [
        {
          "type": "Section",
          "props": {
            "title": "Overview"
          }
        },
        {
          "type": "Card",
          "props": {
            "title": "AI Metrics"
          }
        }
      ]
    }
  ]
}
~~~

---
## React usage
Use the layout as a shell around your routes or dashboard pages. Pass config objects when you need a region; use \`false\` to omit it.
~~~tsx
function DashboardPage() {
  return (
    <Layout
      TopBar={{
        title: "Analytics",
        elementsRight: [
          { type: "action", props: { element: <ThemeModeToggle variant="minimal" /> } },
        ],
      }}
      LeftBar={{
        elements: [
          { type: "link", props: { label: "Overview", icon: "home" } },
          { type: "link", props: { label: "Reports", icon: "insights" } },
        ],
      }}
      RightBar={{
        elements: [
          { type: "link", props: { label: "Alerts", icon: "notifications" } },
        ],
      }}
      stickyOptions={{
        items: [
          { icon: "insights", label: "Insights", href: "/insights" },
          { icon: "menu_book", label: "Docs", href: "/docs" },
          { icon: "help", label: "Support", href: "/support" },
        ],
      }}
    >
      <Outlet />
    </Layout>
  );
}
~~~

---
## Notes
- Props objects mirror the props of the individual components (TopBar, LeftBar, RightBar, Footer). (Legacy \`*Config\` props are still supported.)
- \`stickyOptions.items\` should use GUI icon token strings, matching the registry pattern used by \`TopBar\`, \`LeftBar\`, \`RightBar\`, and \`Footer\`.
- Set a config to \`false\` (or omit it) to exclude that region entirely.
- Children render in document order beneath any enabled sidebars/top bar – for sticky layouts remember to add padding or section containers as shown below.
`,
      },
    },
  },
  argTypes: {
    TopBar: { control: 'object' },
    LeftBar: { control: 'object' },
    RightBar: { control: 'object' },
    Footer: { control: 'object' },
  },
};

export default meta;

const Template: StoryFn<React.ComponentProps<typeof Layout>> = (args) => (
  <Layout {...args}>
    <Box
      sx={{
        minHeight: '120vh',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        Responsive Layout Demo
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 720 }}>
        Resize the viewport or toggle sidebars to observe how insets are coordinated.
        This content is intentionally tall to show how fixed bars interact with scrolling.
      </Typography>

      <Box
        sx={{
          mt: 1,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
          gap: 2,
        }}
      >
        <Box sx={{ p: 2, borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
            Insets-aware
          </Typography>
          <Typography variant="caption" color="text.secondary">
            This block uses theme tokens and lets Layout/Content handle spacing.
          </Typography>
        </Box>
        <Box sx={{ p: 2, borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
            Sidebar coordination
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Expand/collapse sidebars and confirm content stays aligned.
          </Typography>
        </Box>
        <Box sx={{ p: 2, borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
            Scroll behavior
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Layout keeps the main area scrollable without manual padding hacks.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        {Array.from({ length: 18 }).map((_, i) => (
          <Typography key={i} variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Row {i + 1} — filler content to demonstrate scrolling within the Layout content area.
          </Typography>
        ))}
      </Box>
    </Box>
  </Layout>
);

type Story = StoryObj<typeof Layout>;

export const TopBar: Story = {
  render: Template,
  args: {
    TopBar: {
      title: "neurons.me",
      elementsRight: [
        {
          type: "action",
          props: {
            element: <ThemeModeToggle variant="minimal" show="icons" iconSize="small" />,
          },
        },
      ],
    },
    LeftBar: false,
    RightBar: false,
    Footer: false
  },
};


export const TopAndLeftBar: Story = {
  render: Template,
  args: {
    ...TopBar.args,
    LeftBar: {
      elements: [
        { type: "link", props: { label: "Overview", icon: "dashboard" } },
        {
          type: "menu",
          props: {
            label: "Projects",
            icon: "folder",
            items: [
              { label: "Project Alpha", icon: "work" },
              { label: "Project Beta", icon: "assignment" },
            ],
          },
        },
      ],
      footerElements: [
        { type: "link", props: { label: "Settings", icon: "settings" } },
      ],
    },
  },
};

export const TopLeftAndRightBar: Story = {
  render: Template,
  args: {
    ...TopAndLeftBar.args,
    RightBar: {
      elements: [
        { type: "link", props: { label: "Activity", icon: "history" } },
        { type: "action", props: { label: "Export", icon: "download" } },
      ],
    },
  },
};

export const FullShell: Story = {
  render: Template,
  args: {
    ...TopLeftAndRightBar.args,
    Footer: {
      brandLabel: "neurons.me",
      brandLogo: "https://neurons.me/neurons.me.png",
      centerElements: [
        { type: "link", props: { label: "Docs", href: "neurons-me.github.io/GUI/", icon: "menu_book", iconColor: "var(--gui-primary)" } },
        { type: "link", props: { label: "API", href: "/api", icon: "code", iconColor: "var(--gui-secondary)" } },
      ],
      rightElements: [
        { type: "link", props: { label: "Community", href: "https://neurons.me", icon: "forum", iconColor: "var(--gui-info)", external: true } },
        { type: "link", props: { label: "GitHub", href: "https://github.com", icon: "code", iconColor: "var(--gui-warning)", external: true } },
      ],
      position: "fixed",
    },
  },
};

export const WithStickyOptions: Story = {
  render: Template,
  args: {
    ...TopLeftAndRightBar.args,
    stickyOptions: {
      items: [
        { icon: 'insights', label: 'Insights', href: '/insights', iconColor: 'primary' },
        { icon: 'menu_book', label: 'Docs', href: '/docs', iconColor: 'info' },
        { icon: 'help', label: 'Support', href: '/support', iconColor: 'success' },
      ],
      positioning: { mode: 'sticky', topOffset: '0.55rem' },
      behavior: { iconOnlyOnMobile: false },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Shell-level sticky actions using **GUI registry tokens** only. This is the recommended `Layout` configuration path for sticky quick actions.',
      },
    },
  },
};

export const ContentOnly: Story = {
  render: Template,
  args: {
    TopBar: false,
    LeftBar: false,
    RightBar: false,
    Footer: false,
  },
};


export const LayoutWithPage: Story = {
  render: () => (
    <Layout
      TopBar={{ title: 'neurons.me' }}
      LeftBar={{
        elements: [
          { type: 'link', props: { label: 'Home', icon: 'home' } },
          { type: 'link', props: { label: 'Analytics', icon: 'insights' } },
        ],
      }}
      RightBar={{
        elements: [
          { type: 'link', props: { label: 'Chat', icon: 'chat' } },
        ],
      }}
      stickyOptions={{
        items: [
          { icon: 'insights', label: 'Insights', href: '/insights', iconColor: 'primary' },
          { icon: 'menu_book', label: 'Docs', href: '/docs', iconColor: 'info' },
          { icon: 'help', label: 'Support', href: '/support', iconColor: 'success' },
        ],
        positioning: { mode: 'sticky', topOffset: '0.55rem' },
      }}
      Footer={{
        brandLabel: 'neurons.me',
        centerElements: [
          { type: 'link', props: { label: 'Docs', icon: 'menu_book' } },
        ],
      }}
    >
      <Page padding={4}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          Page inside Layout
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 720 }}>
          This example shows how a Page component can be used inside the responsive Layout,
          automatically adapting to inset updates from the TopBar, sidebars, Footer, and the sticky quick-actions bar.
        </Typography>
      </Page>
    </Layout>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Preferred full-page example: `Layout` + `Page` + `stickyOptions`, all configured with the same declarative GUI icon tokens used across the rest of the shell.',
      },
    },
  },
};
