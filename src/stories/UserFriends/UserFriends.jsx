import React from 'react';

// Simple UserFriends component that renders a list of friends
const UserFriends = ({ friends }) => {
  return (
    <div>
      <h2>User Friends</h2>
      <ul>
        {friends.map((friend, index) => (
          <li key={index} style={styles.friend}>
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Basic styles for the friends list
const styles = {
  friend: {
    marginBottom: '0.5rem',
    padding: '0.5rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
};

export default UserFriends;