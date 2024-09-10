import React from 'react';
import Navbar from './Navbar';  // Custom Navbar component
import Button from './Button';  // Custom Button component
import Section from './Section';  // Custom Section component

const componentMap = {
  navbar: Navbar,
  button: Button,
  section: Section,
};

const GUI = ({ instance }) => {
  const Component = componentMap[instance.type];

  if (!Component) {
    return <div>Unknown component type: {instance.type}</div>;
  }

  return <Component {...instance} />;
};

export default GUI;