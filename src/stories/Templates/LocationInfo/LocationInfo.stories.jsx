
import { LocationInfo } from './LocationInfo';

// Storybook configuration for LocationInfo template
export default {
  title: 'Templates/ContactUsPages/LocationInfo',
  component: LocationInfo,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'This is a default LocationInfo template.',
  },
};
