# Snackbars Guide

### **How to Use the Snackbar**

```jsx
import React from 'react';
import { Snackbar } from './Snackbar';

const MyComponent = () => {
  const handleClose = () => {
    console.log('Snackbar closed');
  };

  return (
    <div>
      <Snackbar
        message="File uploaded successfully."
        duration={3000}
        actionLabel="Undo"
        onActionClick={() => console.log('Undo clicked')}
        onClose={handleClose}
        variant="primary"
        color="success" // Custom color for the primary variant
      />
    </div>
  );
};

export default MyComponent;

```

A **Snackbar** in web development is a **brief notification** that appears at the bottom of the screen to provide **feedback** to users about an operation or event. Snackbars are typically non-intrusive, meaning they don’t block the user from interacting with the rest of the page or application, and they automatically disappear after a short period.

Snackbars are commonly used in **Material Design**, and they are a widely adopted UI pattern in modern web and mobile applications.

### **Key Features of a Snackbar:**

1. **Temporary**:

​	• Snackbars are meant to display **short, concise messages** for a limited duration (usually a few seconds) and then disappear automatically.

​	• Users can continue interacting with the app while the snackbar is displayed.

2. **Position**:

​	• **Bottom of the screen** is the most common position, though it can appear at the top or center depen**Snackbar vs. Toast Notifications:**



While similar, **snackbars** are typically more specific to **Material Design** and often include an action, while **toasts** are more general notifications and may not always provide actions. Toasts tend to be more passive, providing simple feedback without interaction.



**Conclusion:**



Snackbars are effective for showing **brief, non-intrusive notifications** that provide feedback or confirmation to users in web applications. They are typically used in scenarios where the message can be acknowledged without requiring user action, but they can also offer simple actions like “Undo”. When building a snackbar component, it’s important to prioritize **accessibility**, **design consistency**, and **clarity** in the message.ding on the design. It’s typically shown as a bar or small container that slides in and out.

3. **Content**:

​	• **Simple text** that provides feedback about an operation (e.g., “Message sent”, “File uploaded successfully”).

​	• Snackbars can include an **optional action** like “Undo” or “Retry”, which the user can interact with before it disappears.

4. **Non-intrusive**:

​	• Unlike modal dialogs or alerts, snackbars don’t interrupt the user’s flow. They fade in, provide feedback, and fade out automatically without requiring interaction unless a user action is needed (e.g., an undo button).

5. **Short-Lived**:

​	• Snackbars typically disappear after a short duration, usually between 2 and 5 seconds.

6. **Actions**:

​	• Snackbars can have **one action button** (e.g., “Dismiss”, “Undo”). The action must be something simple and optional, not critical to the core functionality.

#### **Example Use Cases:**

​	• Confirming an action: “File uploaded successfully.”

​	• Error feedback: “Failed to send the message. Try again.”

​	• Warnings or notifications: “Your connection is unstable.”

​	• Success feedback: “Settings have been saved.”

### **Key Considerations for Snackbar Design:**

​	1. **Message Length**:

​	• Keep snackbar messages **short and actionable** (e.g., “File uploaded”, “Message sent”, or “Failed to save settings”).

​	2. **Accessibility**:

​	• Snackbars should be **accessible** to screen readers. Use appropriate **ARIA roles** (e.g., role="alert" for important messages).

​	• Ensure that any actions within the snackbar (like “Undo”) are keyboard navigable.

​	3. **Duration**:

​	• Snackbars should be shown long enough to read but short enough not to interrupt the user’s flow.

​	• Avoid showing snackbars for more than 5 seconds unless the user needs to take action.

​	4. **Interactivity**:

​	• If a snackbar includes an action (like “Undo”), make sure the button is easy to interact with and disappears only after the action or a timeout.

​	5. **Responsiveness**:

​	• Snackbars should be responsive and well-positioned on different screen sizes (desktop, tablet, mobile). They often appear at the bottom of the screen on mobile and web apps but can be adjusted based on the design needs.

​	6. **Color and Contrast**:

​	• Ensure snackbars are **visually distinct** from the rest of the UI. Use contrasting colors for the background and text to ensure visibility.

​	7. **Interaction Guidelines**:

​	• Avoid using snackbars for **high-priority actions** (like critical warnings or confirmations), where a more prominent UI element like a dialog or toast is more appropriate.



### **Snackbar vs. Toast Notifications:**

While similar, **snackbars** are typically more specific to **Material Design** and often include an action, while **toasts** are more general notifications and may not always provide actions. Toasts tend to be more passive, providing simple feedback without interaction.

### **Conclusion:**

Snackbars are effective for showing **brief, non-intrusive notifications** that provide feedback or confirmation to users in web applications. They are typically used in scenarios where the message can be acknowledged without requiring user action, but they can also offer simple actions like “Undo”. When building a snackbar component, it’s important to prioritize **accessibility**, **design consistency**, and **clarity** in the message.