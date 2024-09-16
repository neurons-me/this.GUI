
import React from 'react';
import UserProfile from './UserProfile';

export default {
  title: '_Organisms/UserProfile',
  component: UserProfile,
  parameters: {
    docs: {
      description: {
        component: 'UserProfile is a reusable component for the Profile category.'
      }
    }
  },
  argTypes: {
    exampleProp: {
      control: 'text',
      description: 'An example prop for the UserProfile component.'
    },
  }
};

export const Default = (args) => <UserProfile {...args} />;
Default.args = {
  exampleProp: 'Default Text'
};
