
import { FeaturesList } from './FeaturesList';

// Storybook configuration for FeaturesList template
export default {
  title: 'Templates/LandingPages/FeaturesList',
  component: FeaturesList,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'This is a default FeaturesList template.',
  },
};
