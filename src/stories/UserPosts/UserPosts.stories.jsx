import React from "react";
import { ProfilePage } from "../Profile/ProfilePage";
import { UserPosts } from "./UserPosts";  // Correct named import
import { Normal as UserFriendsNormal } from "../UserFriends/UserFriends.stories";
import { ProfilePageProvider } from "../Profile/ProfilePageContext";  // Import context provider

export default {
  title: 'Users/UserPosts',
  component: ProfilePage,
};

const samplePosts = [
  { title: 'First Post', content: 'This is the content of the first post.' },
  { title: 'Second Post', content: 'This is the content of the second post.' },
  { title: 'Third Post', content: 'This is the content of the third post.' },
];

export const Default = () => (
  <ProfilePageProvider>
    <ProfilePage
      name="Jimi Hendrix"
      userId="1"
      posts={<UserPosts posts={samplePosts} />}
      friends={<UserFriendsNormal />}
    />
  </ProfilePageProvider>
);