// src/ComponentRegistry.js
import { Atoms, Molecules, Layouts, Templates } from './index'; // Assuming all components are exported from index

const ComponentRegistry = {
  // Atoms
  Button: Atoms.Button,
  Paragraph: Atoms.Paragraph,

  // Molecules
  Card: Molecules.Card,
  Navbar: Molecules.Navbar,
  Sidebar: Molecules.Sidebar,

  // Layouts
  Grid: Layouts.Grid,

  // Templates
  Section: Templates.Section,

  // Add more components as needed
};

export default ComponentRegistry;