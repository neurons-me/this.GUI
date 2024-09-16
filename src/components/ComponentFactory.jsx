// src/components/ComponentFactory.jsx
import React from 'react';
import GUI from '../../index';

const ComponentFactory = ({ category, subcategory, componentName, ...props }) => {
  const Category = GUI[category];

  if (!Category) {
    console.error(`Category "${category}" not found.`);
    return null;
  }

  let Component;

  if (subcategory) {
    const Subcategory = Category[subcategory];

    if (!Subcategory) {
      console.error(`Subcategory "${subcategory}" not found in category "${category}".`);
      return null;
    }

    Component = Subcategory[componentName];
  } else {
    Component = Category[componentName];
  }

  if (!Component) {
    console.error(`Component "${componentName}" not found in category "${category}"${subcategory ? ` and subcategory "${subcategory}"` : ''}.`);
    return null;
  }

  return <Component {...props} />;
};

export default ComponentFactory;