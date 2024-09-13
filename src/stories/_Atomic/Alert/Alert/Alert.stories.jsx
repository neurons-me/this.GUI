
import { Alert } from './Alert';

// Storybook configuration for Alert component
export default {
  title: '_Atomic/Alert',
  component: Alert,
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
    children: 'This is a primary Alert',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Alert',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Alert',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Alert',
  },
};
