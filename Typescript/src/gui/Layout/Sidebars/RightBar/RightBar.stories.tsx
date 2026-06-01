import { StoryFn } from "@storybook/react";
import React from "react";
import Layout from "@/gui/Layout/Layout";

export default {
  title: "GUI/Layout/RightBar",
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
`The **RightBar** is the right navigation bar.

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
<RightBar
  initialView="rail"
  header={{ title: 'Inspector', icon: 'insights' }}
  elements={[
    { type: 'link', props: { label: 'Notifications', icon: 'notifications' } },
    {
      type: 'menu',
      props: {
        label: 'Views',
        icon: 'view_cozy',
        items: [
          { label: 'Timeline', icon: 'timeline' },
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
  RightBar: {
    initialView: "rail",
    header: { title: "Inspector", icon: "insights", iconColor: "var(--gui-primary)" },
    elements: [
      { type: "link", props: { label: "Notifications", icon: "notifications", iconColor: "var(--gui-warning)" } },
      { type: "link", props: { label: "Activity", icon: "history", iconColor: "var(--gui-secondary)" } },
      {
        type: "menu",
        props: {
          label: "Views",
          icon: "view_cozy",
          iconColor: "var(--gui-primary)",
          items: [
            { label: "Timeline", icon: "timeline", iconColor: "var(--gui-success)" },
            { label: "JSON", icon: "code", iconColor: "var(--gui-info)" },
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
  RightBar: {
    ...(RailView.args?.RightBar && typeof RailView.args.RightBar === 'object' ? RailView.args.RightBar : {}),
    initialView: "expanded",
  },
};
