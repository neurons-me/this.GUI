// components/Divider.jsx
import React from 'react';

const Divider = ({ color = '#44475a', thickness = '2px', margin = '1rem 0' }) => {
  return (
    <hr style={{ ...styles.divider, backgroundColor: color, height: thickness, margin }} />
  );
};

const styles = {
  divider: {
    border: 'none',
    width: '100%',
  },
};

export default Divider;