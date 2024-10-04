
import { SignInPage } from './SignInPage';

// Storybook configuration for SignInPage template
export default {
  title: 'Templates/AuthenticationPages/SignInPage',
  component: SignInPage,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'This is a default SignInPage template.',
  },
};
