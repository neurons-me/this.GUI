import { StoryFn } from "@storybook/react";
import React from "react";
import Layout from "@/gui/Layouts/ResponsiveUI/Layout/Layout";
import TopBar from "@/gui/Layouts/ResponsiveUI/TopBar/TopBar";
import LeftSidebar from "@/gui/Layouts/ResponsiveUI/Sidebars/LeftSidebar/LeftSidebar";
import ThemeModeToggle from "@/gui/components/molecules/Theme/ThemeModeToggle/ThemeModeToggle";

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
      {
        type: "action",
        props: {
          element: <ThemeModeToggle variant="minimal" show="icons" iconSize="small" />,
        },
      },
      { type: "action", props: { label: "Logout", icon: "logout", iconColor: "var(--gui-error)" } },
    ],
  },
  leftSidebarConfig: {
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
      { type: "action", props: { label: "Logout", icon: "logout", iconColor: "var(--gui-error)", action: "handleLogout" } },
    ],
  },
};

export const WithoutTopBar = Template.bind({});
WithoutTopBar.args = {
  leftSidebarConfig: {
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
      { type: "action", props: { label: "Logout", icon: "logout", iconColor: "var(--gui-error)", action: "handleLogout" } },
    ],
  },
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  leftSidebarConfig: {
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
      { type: "action", props: { label: "Logout", icon: "logout", iconColor: "var(--gui-error)", action: "handleLogout" } },
    ],
    footerElements: [
      { type: "link", props: { label: "Settings", icon: "settings", iconColor: "var(--gui-primary)" } },
      { type: "action", props: { label: "Help", icon: "help", iconColor: "var(--gui-success)" } },
    ],
  },
};
