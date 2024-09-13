
import { Toggle } from './Toggle';

// Storybook configuration for Toggle component
export default {
  title: '_Atomic/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Primary = {
  args: {
    primary: true,
    children: 'This is a primary Toggle',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Toggle',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Toggle',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Toggle',
  },
};
