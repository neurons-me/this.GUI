
import React from 'react';
import UserPosts from './UserPosts';

export default {
  title: '_Organisms/UserPosts',
  component: UserPosts,
  parameters: {
    docs: {
      description: {
        component: 'UserPosts is a reusable component for the Profile category.'
      }
    }
  },
  argTypes: {
    exampleProp: {
      control: 'text',
      description: 'An example prop for the UserPosts component.'
    },
  }
};

export const Default = (args) => <UserPosts {...args} />;
Default.args = {
  exampleProp: 'Default Text'
};
