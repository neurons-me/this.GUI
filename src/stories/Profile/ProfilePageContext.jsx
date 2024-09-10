//this.GUI/src/stories/Profile/ProfilePageContext.jsx
import React, { createContext, useState, useMemo } from 'react';
import { UserPosts } from '../UserPosts/UserPosts';
import { Normal as UserFriendsNormal } from '../UserFriends/UserFriends.stories'; // Adjust path as necessary

const ProfilePageContext = createContext();

export const ProfilePageProvider = ({ children }) => {
  // Define state or any shared data if needed
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  });

  // Memoize context values to optimize re-renders
  const contextValue = useMemo(() => ({
    UserPostsContainer: ({ userId }) => <UserPosts userId={userId} />,
    UserFriendsContainer: UserFriendsNormal, // Make sure this is a valid component
    user,
    setUser,
  }), [user]);

  return (
    <ProfilePageContext.Provider value={contextValue}>
      {children}
    </ProfilePageContext.Provider>
  );
};

export default ProfilePageContext;