
import { Label } from './Label';

// Storybook configuration for Label component
export default {
  title: '_Atomic/Label',
  component: Label,
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
    children: 'This is a primary Label',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Label',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Label',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Label',
  },
};
