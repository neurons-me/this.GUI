# Select Component Guide

Here’s the **interactive example** for the `Select` component in Storybook. This will allow you to dynamically control the props such as `value`, `options`, `color`, and others from the Storybook interface.

---

### **Interactive Example for `Select.stories.jsx`**

```jsx
import React, { useState } from 'react';
import { Select } from './Select';

const MySelectComponent = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <h3>Select Your Favorite Color</h3>
      <Select
        options={[
          { label: 'Red', value: 'red' },
          { label: 'Green', value: 'green' },
          { label: 'Blue', value: 'blue' },
        ]}
        value={selectedValue}
        onChange={handleChange}
        placeholder="Choose a color"
        label="Favorite Color"
        color="info" // Dynamic color usage
        disabled={false}
      />
    </div>
  );
};

export default MySelectComponent;
```

### Key Features:
- **Fully Interactive**: You can adjust the `value`, `options`, `color`, `disabled`, and other props directly from the Storybook controls.
- **Dynamic Updates**: The `value` updates in real time when the user selects a new option from the dropdown.

---

### Example Usage in Storybook:
You can use the interactive example to:
1. Change the list of options dynamically.
2. Select different colors for the `Select` dropdown (e.g., `primary`, `secondary`, `warning`).
3. Test the disabled state by toggling the `disabled` prop.
4. Customize the placeholder text and the label.

This setup will give you a great playground for testing the `Select` component with various configurations and seeing the results in real time.

Let me know if you need further modifications!