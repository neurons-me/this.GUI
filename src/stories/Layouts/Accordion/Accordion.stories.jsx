
import { Accordion } from './Accordion';

// Storybook configuration for Accordion component
export default {
  title: 'Layouts/ContentOrganization/Accordion',
  component: Accordion,
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
    children: 'This is a primary Accordion layout.',
  },
};

export const Secondary = {
  args: {
    primary: false,
    children: 'This is a secondary Accordion layout.',
  },
};
