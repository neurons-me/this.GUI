
import { Grid } from './Grid';

// Storybook configuration for Grid component
export default {
  title: 'Layouts/Grid/Grid',
  component: Grid,
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
    children: 'This is a primary Grid layout.',
  },
};

export const Secondary = {
  args: {
    primary: false,
    children: 'This is a secondary Grid layout.',
  },
};
