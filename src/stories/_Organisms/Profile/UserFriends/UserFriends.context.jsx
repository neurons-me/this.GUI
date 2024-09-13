
import React, { createContext, useContext, useState } from 'react';

const UserFriendsContext = createContext();

export const UserFriendsProvider = ({ children }) => {
  const [state, setState] = useState(null);
  return (
    <UserFriendsContext.Provider value={[state, setState]}>
      {children}
    </UserFriendsContext.Provider>
  );
};

export const useUserFriends = () => useContext(UserFriendsContext);
