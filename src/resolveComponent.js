// src/resolveComponent.js
import ComponentRegistry from './ComponentRegistry';

export function resolveComponent(type) {
  const Component = ComponentRegistry[type];
  if (!Component) {
    console.warn(`Component type "${type}" not found in the registry.`);
    return null;
  }
  return Component;
}