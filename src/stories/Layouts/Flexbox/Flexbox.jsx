import React from 'react';
import './Flexbox.css'; 

export const Flexbox = ({ children, primary, ...props }) => {
  const mode = primary ? 'flexbox--primary' : 'flexbox--secondary';
  return (
    <div className={['flexbox', mode].join(' ')} {...props}>
      {children}
    </div>
  );
};