
import { Flexbox } from './Flexbox';

// Storybook configuration for Flexbox component
export default {
  title: 'Layouts/FlexboxLayout/Flexbox',
  component: Flexbox,
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
    children: 'This is a primary Flexbox layout.',
  },
};

export const Secondary = {
  args: {
    primary: false,
    children: 'This is a secondary Flexbox layout.',
  },
};
