
import React from 'react';
import UserFriends from './UserFriends';

export default {
  title: '_Organisms/UserFriends',
  component: UserFriends,
  parameters: {
    docs: {
      description: {
        component: 'UserFriends is a reusable component for the Profile category.'
      }
    }
  },
  argTypes: {
    exampleProp: {
      control: 'text',
      description: 'An example prop for the UserFriends component.'
    },
  }
};

export const Default = (args) => <UserFriends {...args} />;
Default.args = {
  exampleProp: 'Default Text'
};
