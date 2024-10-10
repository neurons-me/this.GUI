import React from 'react';
import { renderComponent } from './scripts/renderComponents';

const Page = ({ config }) => {
  return (
    <div>
      {config.layout.map((item, index) => {
        const Component = renderComponent(item.type);
        return Component ? (
          <Component key={index} {...item.props}>
            {item.children && item.children.map((child, childIndex) => {
              const ChildComponent = renderComponent(child.type);
              return ChildComponent ? (
                <ChildComponent key={childIndex} {...child.props} />
              ) : (
                <p key={childIndex}>Component "{child.type}" not found</p>
              );
            })}
          </Component>
        ) : (
          <p key={index}>Component "{item.type}" not found</p>
        );
      })}
    </div>
  );
};

export default Page;