import React from 'react';
import UserFriends from './UserFriends';

export default {
  title: 'Users/UserFriends',
  component: UserFriends,
};

const sampleFriends = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Charlie' },
];

export const Normal = () => <UserFriends friends={sampleFriends} />;