import type { Meta, StoryObj } from "@storybook/react";
import { AppShell } from "../App";

const meta = {
  title: "App/Home",
  component: AppShell,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AppShell>;

export default meta;

export const EmptyApp: StoryObj<typeof meta> = {
  render: () => <AppShell />,
};

