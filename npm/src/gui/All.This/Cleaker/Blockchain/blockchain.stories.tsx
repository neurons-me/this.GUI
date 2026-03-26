import type { Meta, StoryObj } from "@storybook/react";
import Blockchain from "./blockchain";

const meta: Meta<typeof Blockchain> = {
  title: "All.This/Cleaker/Blockchain",
  component: Blockchain,
};

export default meta;
type Story = StoryObj<typeof Blockchain>;
export const Default: Story = {
  render: () => <Blockchain />,
};

export const Empty: Story = {
  render: () => <Blockchain />,
};
