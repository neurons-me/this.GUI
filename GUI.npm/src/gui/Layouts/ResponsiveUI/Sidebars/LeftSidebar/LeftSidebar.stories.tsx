import { StoryFn } from "@storybook/react";
import Layout from "@/gui/Layouts/ResponsiveUI/Layout/Layout";
import TopBar from "@/gui/Layouts/ResponsiveUI/TopBar/TopBar";
import LeftSidebar from "@/gui/Layouts/ResponsiveUI/Sidebars/LeftSidebar/LeftSidebar";

export default {
  title: "Layouts/ResponsiveUI/Sidebars/LeftSidebar",
  component: Layout,
};

const Template: StoryFn<React.ComponentProps<typeof Layout>> = (args) => (
  <Layout {...args} />
);

export const Default = Template.bind({});
Default.args = {
  topBarConfig: {
    title: "My Application",
    elementsRight: [
      { type: "link", props: { label: "Profile", icon: "account_circle" } },
      { type: "action", props: { label: "Logout", icon: "logout" } },
    ],
  },
  leftSidebarConfig: {
    elements: [
      { type: "link", props: { label: "Dashboard", icon: "dashboard" } },
      { type: "link", props: { label: "Analytics", icon: "bar_chart" } },
      {
        type: "menu",
        props: {
          label: "Projects",
          icon: "folder",
          items: [
            { label: "Project A", icon: "work" },
            { label: "Project B", icon: "assignment" },
          ],
        },
      },
      { type: "action", props: { label: "Logout", icon: "logout", action: "handleLogout" } },
    ],
  },
};

export const WithoutTopBar = Template.bind({});
WithoutTopBar.args = {
  leftSidebarConfig: {
    elements: [
      { type: "link", props: { label: "Dashboard", icon: "dashboard" } },
      { type: "link", props: { label: "Analytics", icon: "bar_chart" } },
      {
        type: "menu",
        props: {
          label: "Projects",
          icon: "folder",
          items: [
            { label: "Project A", icon: "work" },
            { label: "Project B", icon: "assignment" },
          ],
        },
      },
      { type: "action", props: { label: "Logout", icon: "logout", action: "handleLogout" } },
    ],
  },
};