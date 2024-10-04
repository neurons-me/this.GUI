
import { FormSection } from './FormSection';

// Storybook configuration for FormSection template
export default {
  title: 'Templates/ContactUsPages/FormSection',
  component: FormSection,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'This is a default FormSection template.',
  },
};
