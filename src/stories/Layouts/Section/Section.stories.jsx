
import { Section } from './Section';

// Storybook configuration for Section component
export default {
  title: 'Layouts/Section/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Primary = {
  args: {
    primary: true,
    children: 'This is a primary Section layout.',
  },
};

export const Secondary = {
  args: {
    primary: false,
    children: 'This is a secondary Section layout.',
  },
};
