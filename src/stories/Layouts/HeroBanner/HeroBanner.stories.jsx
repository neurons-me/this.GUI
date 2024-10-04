
import { HeroBanner } from './HeroBanner';

// Storybook configuration for HeroBanner component
export default {
  title: 'Layouts/HeroSections/HeroBanner',
  component: HeroBanner,
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
    children: 'This is a primary HeroBanner layout.',
  },
};

export const Secondary = {
  args: {
    primary: false,
    children: 'This is a secondary HeroBanner layout.',
  },
};
