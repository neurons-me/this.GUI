//this.GUI/src/stories/UserPosts/UserPosts.jsx
import React from 'react';
// Sample UserPosts component that renders a list of posts
export const UserPosts = ({ posts }) => {
  return (
    <div>
      <h2>User Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index} style={styles.post}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Basic styles for the posts
const styles = {
  post: {
    marginBottom: '1rem',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
};