// src/components/ComponentRegistry.js
import { Button } from '../stories/_Atomic/Button/Button';
import { Input } from '../stories/_Atomic/Input/Input';
// Import the Navbar component
import { Navbar } from '../stories/_Molecules/Navbar/Navbar';
// ... import other components

const ComponentRegistry = {
  _Atomic: {
    Button,
    Input,
    // ... other atomic components
  },
  _Molecules: {
    Navbar,
    // ... other molecule components
  },
  // ... other categories
};

export default ComponentRegistry;