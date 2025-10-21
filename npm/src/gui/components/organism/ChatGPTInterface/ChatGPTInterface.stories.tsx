import type { Meta, StoryObj } from "@storybook/react";
import ChatGPTInterface from "./ChatGPTInterface";

const meta: Meta<typeof ChatGPTInterface> = {
  title: "Organisms/ChatGPTInterface",
  component: ChatGPTInterface,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ChatGPTInterface>;

export const Default: Story = {
  render: () => <ChatGPTInterface />,
};
