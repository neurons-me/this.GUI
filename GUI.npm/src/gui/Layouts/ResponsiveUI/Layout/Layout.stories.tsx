import React from "react";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import Layout from "./Layout";
import ThemeModeToggle from "@/gui/components/molecules/Theme/ThemeModeToggle/ThemeModeToggle";

const meta: Meta<typeof Layout> = {
  title: "Layouts/ResponsiveUI/Layout",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Layout** component wires the responsive shell used across This.GUI demos. It coordinates the TopBar, left/right sidebars, and Footer so their insets remain in sync while your application content renders inside.
---
## Features
- **Context wiring** – wraps children with the required providers (LeftSidebar, RightSidebar) so hooks and insets work automatically.
- **Composable regions** – optional \`topBarConfig\`, \`leftSidebarConfig\`, \`rightSidebarConfig\`, and \`footerConfig\` let you enable only what you need.
- **Inset aware** – whenever a sidebar expands or collapses, the layout updates theme insets so the TopBar/Footer and main content stay aligned.
- **Story-friendly** – serves as an orchestration helper in Storybook; in production you can lift the same pattern to your app shell.

---
## Declarative usage
~~~json
{
  "type": "Layout",
  "props": {
    "topBarConfig": {
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
    "leftSidebarConfig": {
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
    "footerConfig": {
      "brandLabel": "Neuroverse",
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
      topBarConfig={{
        title: "Analytics",
        elementsRight: [
          { type: "action", props: { element: <ThemeModeToggle variant="minimal" /> } },
        ],
      }}
      leftSidebarConfig={{
        elements: [
          { type: "link", props: { label: "Overview", icon: "home" } },
          { type: "link", props: { label: "Reports", icon: "insights" } },
        ],
      }}
      rightSidebarConfig={{
        elements: [
          { type: "link", props: { label: "Alerts", icon: "notifications" } },
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
- Config objects mirror the props of the individual components (TopBar, LeftSidebar, RightSidebar, Footer). Anything you can pass there can be forwarded through the layout.
- Set a config to \`false\` (or omit it) to exclude that region entirely.
- Children render in document order beneath any enabled sidebars/top bar – for sticky layouts remember to add padding or section containers as shown below.
`,
      },
    },
  },
};

export default meta;

const Template: StoryFn<React.ComponentProps<typeof Layout>> = (args) => (
  <Layout {...args}>
    <div
      style={{
        minHeight: "120vh",
        padding: "72px 24px 120px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <h2>Responsive Layout Demo</h2>
      <p>
        Resize the viewport or toggle sidebars to observe how insets are coordinated.
        The content block is intentionally tall to show how fixed bars interact with scrolling.
      </p>
    </div>
  </Layout>
);

type Story = StoryObj<typeof Layout>;

export const TopOnly: Story = {
  render: Template,
  args: {
    topBarConfig: {
      title: "Neuroverse",
      elementsRight: [
        {
          type: "action",
          props: {
            element: <ThemeModeToggle variant="minimal" show="icons" iconSize="small" />,
          },
        },
      ],
    },
    leftSidebarConfig: false,
    rightSidebarConfig: false,
    footerConfig: false,
  },
};

export const TopWithLeftSidebar: Story = {
  render: Template,
  args: {
    ...TopOnly.args,
    leftSidebarConfig: {
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

export const TopWithLeftAndRight: Story = {
  render: Template,
  args: {
    ...TopWithLeftSidebar.args,
    rightSidebarConfig: {
      elements: [
        { type: "link", props: { label: "Activity", icon: "history" } },
        { type: "action", props: { label: "Export", icon: "download" } },
      ],
    },
  },
};

export const FullShellWithFooter: Story = {
  render: Template,
  args: {
    ...TopWithLeftAndRight.args,
    footerConfig: {
      brandLabel: "Neuroverse",
      brandLogo: "https://neurons.me/neurons.me.png",
      centerElements: [
        { type: "link", props: { label: "Docs", href: "/docs", icon: "menu_book", iconColor: "var(--gui-primary)" } },
        { type: "link", props: { label: "API", href: "/api", icon: "code", iconColor: "var(--gui-secondary)" } },
      ],
      rightElements: [
        { type: "link", props: { label: "Community", href: "https://community.neuroverse.ai", icon: "forum", iconColor: "var(--gui-info)", external: true } },
        { type: "link", props: { label: "GitHub", href: "https://github.com", icon: "code", iconColor: "var(--gui-warning)", external: true } },
      ],
      position: "fixed",
    },
  },
};

export const ContentOnly: Story = {
  render: Template,
  args: {
    topBarConfig: false,
    leftSidebarConfig: false,
    rightSidebarConfig: false,
    footerConfig: false,
  },
};
