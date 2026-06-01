import type { Meta, StoryObj } from "@storybook/react";
import Namespace from "./namespace";

const meta: Meta<typeof Namespace> = {
  title: "All.This/Cleaker/Namespace",
  component: Namespace,
};

export default meta;
type Story = StoryObj<typeof Namespace>;
export const Default: Story = {
  render: () => <Namespace />,
};

export const Empty: Story = {
  render: () => <Namespace />,
};
