import { StoryFn } from "@storybook/react";
import React from "react";
import Layout from "@/gui/Layout/Layout";

export default {
  title: "GUI/Layout/LeftBar",
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
`The **LeftBar** is the left navigation bar.

## What it expects
- \`elements\`: main items shown in the sidebar.
- \`footerElements\`: optional items shown at the bottom.
- \`initialView\`: \`rail\` or \`expanded\`.
- \`header\`: optional title or icon shown at the top.

## Item types
- \`link\`: navigation item.
- \`menu\`: item with nested options.
- \`action\`: clickable action.

## Basic shape
~~~tsx
<LeftBar
  initialView="rail"
  header={{ title: 'Workspace', icon: 'apps' }}
  elements={[
    { type: 'link', props: { label: 'Dashboard', icon: 'dashboard' } },
    {
      type: 'menu',
      props: {
        label: 'Projects',
        icon: 'folder',
        items: [
          { label: 'Project A', icon: 'work' },
        ],
      },
    },
  ]}
  footerElements={[
    { type: 'link', props: { label: 'Settings', icon: 'settings' } },
    { type: 'action', props: { label: 'Help', icon: 'help' } },
  ]}
/>
~~~

## Views
- \`rail\`: compact icon view.
- \`expanded\`: full view with labels.
`,
      },
    },
  },
};

const Template: StoryFn<React.ComponentProps<typeof Layout>> = (args) => (
  <Layout {...args} />
);

export const RailView = Template.bind({});
RailView.args = {
  LeftBar: {
    initialView: "rail",
    header: { title: "Workspace", icon: "apps", iconColor: "var(--gui-primary)" },
    elements: [
      { type: "link", props: { label: "Dashboard", icon: "dashboard", iconColor: "var(--gui-primary)" } },
      { type: "link", props: { label: "Analytics", icon: "bar_chart", iconColor: "var(--gui-secondary)" } },
      {
        type: "menu",
        props: {
          label: "Projects",
          icon: "folder",
          iconColor: "var(--gui-warning)",
          items: [
            { label: "Project A", icon: "work", iconColor: "var(--gui-success)" },
            { label: "Project B", icon: "assignment", iconColor: "var(--gui-info)" },
          ],
        },
      },
    ],
    footerElements: [
      { type: "link", props: { label: "Settings", icon: "settings", iconColor: "var(--gui-primary)" } },
      { type: "action", props: { label: "Help", icon: "help", iconColor: "var(--gui-success)" } },
    ],
  },
};

export const ExpandedView = Template.bind({});
ExpandedView.args = {
  LeftBar: {
    ...(RailView.args?.LeftBar && typeof RailView.args.LeftBar === 'object' ? RailView.args.LeftBar : {}),
    initialView: "expanded",
  },
};
