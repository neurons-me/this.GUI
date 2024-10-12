//this.GUI/src/SiteBuilder.jsx
import React, { useState } from 'react';
import { renderComponent } from './scripts/renderComponents';
import ComponentRegistry from './scripts/ComponentRegistry'; // Import the component registry

const SiteBuilder = () => {
  const [pageContent, setPageContent] = useState([]); // Stores the components added to the page
  const [selectedComponent, setSelectedComponent] = useState(null); // Currently selected component for configuration

  // Generate available components from the ComponentRegistry
  const availableComponents = Object.keys(ComponentRegistry).map((key) => ({
    type: key,
    label: key,
  }));

  // Add a new component to the page
  const addComponent = (componentType) => {
    setPageContent([...pageContent, { type: componentType, props: {} }]);
  };

  // Update a component's properties
  const updateComponentProps = (index, newProps) => {
    const updatedPage = [...pageContent];
    updatedPage[index].props = newProps;
    setPageContent(updatedPage);
  };

  // Render components on the page
  const renderPageContent = () => {
    return pageContent.map((component, index) => {
      const Component = renderComponent(component.type);
      return (
        <div
          key={index}
          onClick={() => setSelectedComponent(index)} // Select component for editing
          style={{ border: selectedComponent === index ? '2px solid blue' : 'none' }}
        >
          {Component ? <Component {...component.props} /> : <p>Component not found</p>}
        </div>
      );
    });
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar with available components */}
      <div style={{ width: '20%', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <h4>Available Components</h4>
        <ul>
          {availableComponents.map((comp, index) => (
            <li key={index}>
              <button onClick={() => addComponent(comp.type)}>{comp.label}</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main canvas area for dragging and arranging components */}
      <div style={{ width: '60%', padding: '10px' }}>
        <h4>Canvas</h4>
        {renderPageContent()}
      </div>

      {/* Configuration panel for the selected component */}
      <div style={{ width: '20%', padding: '10px', backgroundColor: '#f9f9f9' }}>
        <h4>Component Properties</h4>
        {selectedComponent !== null && (
          <ComponentConfigPanel
            component={pageContent[selectedComponent]}
            onUpdate={(newProps) => updateComponentProps(selectedComponent, newProps)}
          />
        )}
      </div>
    </div>
  );
};

// A simple panel to edit component properties
const ComponentConfigPanel = ({ component, onUpdate }) => {
  const [props, setProps] = useState(component.props);

  const handleInputChange = (key, value) => {
    setProps({ ...props, [key]: value });
  };

  const handleSave = () => {
    onUpdate(props); // Send the updated props to the SiteBuilder
  };

  return (
    <div>
      <h5>Edit {component.type} Properties</h5>
      {Object.keys(props).map((key) => (
        <div key={key}>
          <label>{key}</label>
          <input
            type="text"
            value={props[key]}
            onChange={(e) => handleInputChange(key, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default SiteBuilder;