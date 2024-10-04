
import { RegistrationPage } from './RegistrationPage';

// Storybook configuration for RegistrationPage template
export default {
  title: 'Templates/AuthenticationPages/RegistrationPage',
  component: RegistrationPage,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'This is a default RegistrationPage template.',
  },
};
