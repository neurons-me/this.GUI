
import { Testimonials } from './Testimonials';

// Storybook configuration for Testimonials template
export default {
  title: 'Templates/LandingPages/Testimonials',
  component: Testimonials,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'This is a default Testimonials template.',
  },
};
