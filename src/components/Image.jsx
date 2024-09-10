// components/Image.jsx
import React from 'react';

const Image = ({ src, alt, width = '100%', height = 'auto', caption = '' }) => {
  return (
    <div style={styles.container}>
      <img src={src} alt={alt} style={{ ...styles.image, width, height }} />
      {caption && <p style={styles.caption}>{caption}</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '1rem 0',
  },
  image: {
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  caption: {
    marginTop: '0.5rem',
    fontSize: '0.9rem',
    color: '#888',
    fontFamily: 'Arial, sans-serif',
  },
};

export default Image;