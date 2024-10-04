
import { HeroImageVideo } from './HeroImageVideo';

// Storybook configuration for HeroImageVideo component
export default {
  title: 'Layouts/HeroSections/HeroImageVideo',
  component: HeroImageVideo,
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
    children: 'This is a primary HeroImageVideo layout.',
  },
};

export const Secondary = {
  args: {
    primary: false,
    children: 'This is a secondary HeroImageVideo layout.',
  },
};
