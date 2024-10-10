// this.GUI/src/renderComponent.js
import ComponentRegistry from './ComponentRegistry';

export function renderComponent(type) {
  const Component = ComponentRegistry[type];
  if (!Component) {
    console.warn(`Component type "${type}" not found in the registry.`);
    return null;
  }
  return Component;
}