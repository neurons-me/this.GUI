
import { Snackbar } from './Snackbar';

// Storybook configuration for Snackbar component
export default {
  title: 'Atoms/Feedback/Snackbar',
  component: Snackbar,
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
    children: 'This is a primary Snackbar',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Snackbar',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Snackbar',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Snackbar',
  },
};
