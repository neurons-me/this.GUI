//this.GUI/src/stories/Profile/ProfilePage.jsx
import { useContext } from 'react';
import ProfilePageContext from './ProfilePageContext';
import { UserPosts } from '../UserPosts/UserPosts';  // Ensure correct import

export const ProfilePage = ({ name, userId }) => {
  const { UserFriendsContainer } = useContext(ProfilePageContext);

  return (
    <div>
      <h1>{name}</h1>
      {/* Render posts */}
      <UserPosts posts={[
        { title: 'First Post', content: 'This is the content of the first post.' },
        { title: 'Second Post', content: 'This is the content of the second post.' },
      ]} />
      {/* Render friends */}
      <UserFriendsContainer userId={userId} />
    </div>
  );
};