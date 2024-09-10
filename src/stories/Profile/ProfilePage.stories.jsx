//this.GUI/src/stories/Profile/ProfilePage.stories.jsx
import React from 'react';
import { ProfilePage } from './ProfilePage';
import { ProfilePageProvider } from './ProfilePageContext'; // Import Provider

export default {
  component: ProfilePage,
};

const ProfilePageProps = {
  name: 'Jimi Hendrix',
  userId: '1',
};

export const Normal = {
  render: () => (
    <ProfilePageProvider>
      <ProfilePage {...ProfilePageProps} />
    </ProfilePageProvider>
  ),
};