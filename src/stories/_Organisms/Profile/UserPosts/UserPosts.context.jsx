
import React, { createContext, useContext, useState } from 'react';

const UserPostsContext = createContext();

export const UserPostsProvider = ({ children }) => {
  const [state, setState] = useState(null);
  return (
    <UserPostsContext.Provider value={[state, setState]}>
      {children}
    </UserPostsContext.Provider>
  );
};

export const useUserPosts = () => useContext(UserPostsContext);
