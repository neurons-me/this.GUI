
import { HeroSection } from './HeroSection';

// Storybook configuration for HeroSection template
export default {
  title: 'Templates/LandingPages/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'This is a default HeroSection template.',
  },
};
