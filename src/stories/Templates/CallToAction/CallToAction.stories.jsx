
import { CallToAction } from './CallToAction';

// Storybook configuration for CallToAction template
export default {
  title: 'Templates/LandingPages/CallToAction',
  component: CallToAction,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'This is a default CallToAction template.',
  },
};
