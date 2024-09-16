
import { Container } from './Container';

// Storybook configuration for Container component
export default {
  title: 'Atoms/Interactive/Container',
  component: Container,
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
    children: 'This is a primary Container',
  },
};

export const Secondary = {
  args: {
    children: 'This is a secondary Container',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'This is a large Container',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'This is a small Container',
  },
};
