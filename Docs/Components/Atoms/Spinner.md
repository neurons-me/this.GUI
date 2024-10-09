# Spinner Guide

A **Spinner** (or loader) in web and app development is a **visual indicator** used to represent the **loading state** of an application or component. It informs users that a task is in progress (like data loading or processing), and they need to wait for completion. Spinners are commonly used in forms, API requests, image or file loading, and various other asynchronous operations.

### **How to Use the Spinner Component**

```jsx
import React from 'react';
import { Spinner } from './Spinner';

const ExampleComponent = () => {
  return (
    <div>
      <Spinner
        size="large"
        color="primary"
        text="Loading data..."
        speed="2s"
        fullScreen={true}
      />
    </div>
  );
};

export default ExampleComponent;
```

------

### **Key Features of the Spinner Component**:

- **Size**: Choose between `small`, `medium`, and `large`.
- **Color**: Select from a variety of colors based on the available design tokens (e.g., `primary`, `success`, `warning`).
- **Variant**: Supports different types of spinners like `circle`, `dots`, and `bars`.
- **Speed**: Customize the speed of the spinner animation (e.g., "1s" or "2s").
- **Full-Screen**: Toggle full-screen mode, useful for loading screens.
- **Text**: Display an optional loading message below the spinner.

This setup allows for maximum flexibility, responsiveness, and customization, making the `Spinner` component adaptable to various use cases in your application.

**Characteristics of a Spinner:**

1. **Indicates Progress**: A spinner is typically a circular animation that rotates continuously, signaling that a process is ongoing.

2. **Asynchronous Indicator**: It’s used in situations where an action (e.g., form submission, content fetching) takes time, letting users know that the app is responsive and working.

3. **Non-blocking UI**: While the spinner is visible, users are still aware that their action is being processed without freezing the interface.

4. **Common UI Pattern**: Spinners are often implemented in loading screens, data-fetching scenarios, or inline components where loading is needed.



**Types of Spinners:**

1. **Indeterminate Spinner**: Spins indefinitely without indicating how much time is left (e.g., a circle loader). It’s commonly used when the time to completion is unknown.

2. **Determinate Progress Indicator**: Shows specific progress completion (e.g., a progress bar or ring showing percentage), usually for file uploads or downloads.

**Conclusion:**

A well-designed **Spinner component** should be **customizable**, **responsive**, and **theming-friendly**. By providing props for size, color, speed, and more, the spinner can be adapted for different scenarios like loading screens, inline components, or form submissions. Accessibility and performance are also crucial for making