
import { ProgressBar } from './ProgressBar';

// Storybook configuration for ProgressBar component
export default {
  title: 'Atoms/Feedback/ProgressBar',
  component: ProgressBar,
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
    children: 'This is a primary ProgressBar',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary ProgressBar',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large ProgressBar',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small ProgressBar',
  },
};
