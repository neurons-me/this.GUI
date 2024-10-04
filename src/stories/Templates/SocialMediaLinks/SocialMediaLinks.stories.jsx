
import { SocialMediaLinks } from './SocialMediaLinks';

// Storybook configuration for SocialMediaLinks template
export default {
  title: 'Templates/ContactUsPages/SocialMediaLinks',
  component: SocialMediaLinks,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'This is a default SocialMediaLinks template.',
  },
};
