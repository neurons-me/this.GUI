# Tag Component Usage Guide

The **Tag** component is a versatile UI element used for labeling, categorizing, or displaying statuses in your web application. It supports various customization options such as color, size, interactivity, and removability. The Tag component is designed to be simple and reusable across your app while maintaining consistency in style and behavior.

## Installation

To use the Tag component, ensure that you have the necessary dependencies installed:

```bash
npm install # or yarn install
```

## Importing the Tag Component

To use the **Tag** component in your project, import it from its source:

```javascript
import { Tag } from './path/to/Tag'; // Adjust the path based on your project structure
```

## Basic Usage

You can use the **Tag** component by providing a label and optionally setting its color, size, and variant:

```jsx
<Tag label="Design" />
```

## Props

| Prop        | Type     | Default   | Description                                                  |
| ----------- | -------- | --------- | ------------------------------------------------------------ |
| `label`     | `string` | Required  | The text or content of the tag.                              |
| `color`     | `string` | `primary` | The color scheme of the tag. (See available colors below)    |
| `size`      | `string` | `medium`  | The size of the tag: `small`, `medium`, or `large`.          |
| `variant`   | `string` | `filled`  | The visual style of the tag: `filled` (background) or `outlined` (border). |
| `removable` | `bool`   | `false`   | If true, the tag will display a close icon to make it removable. |
| `onRemove`  | `func`   | -         | Function triggered when the tag is removed. Required if `removable` is true. |
| `onClick`   | `func`   | -         | Function triggered when the tag is clicked, making the tag interactive. |
| `icon`      | `node`   | -         | Adds an optional icon to the tag, useful for statuses or categories. |
| `disabled`  | `bool`   | `false`   | If true, disables the tag from being clickable or interactive. |
| `className` | `string` | -         | Adds custom CSS classes for additional styling.              |
| `style`     | `object` | -         | Inline styles for custom visual tweaks.                      |

## Available Colors

You can pass the following colors as the `color` prop:

- `primary`
- `secondary`
- `info`
- `warning`
- `alert`
- `success`
- `neutral`
- `dark`

Additionally, these extra color palettes are available:

- `classy-color-1`, `classy-color-2`, `classy-color-3`, `classy-color-4`, `classy-color-5`
- `small-switch-color-1`, `small-switch-color-2`
- `natural-color-1`, `natural-color-2`, `natural-color-3`
- `grey-friend-1`, `grey-friend-2`
- `shade-1`, `shade-2`, `shade-3`, `shade-4`

## Example Usages

### **1. Primary Filled Tag**

This will render a Tag with the primary color and filled background:

```jsx
<Tag label="Technology" color="primary" variant="filled" />
```

### **2. Secondary Outlined Tag**

This will render a Tag with an outlined border and text colored with the secondary color:

```jsx
<Tag label="Design" color="secondary" variant="outlined" />
```

### **3. Removable Tag**

The following tag is removable. You can handle the removal with the `onRemove` callback function:

```jsx
<Tag
  label="React"
  color="info"
  removable
  onRemove={() => console.log("Tag removed!")}
/>
```

### **4. Tag with Icon**

You can add an icon to the tag to provide additional context or visual appeal:

```jsx
<Tag
  label="Document"
  color="success"
  icon={<DocumentIcon />} // Your custom icon component
/>
```

### **5. Disabled Tag**

Tags can be disabled to prevent interactivity:

```jsx
<Tag label="Inactive" color="neutral" disabled />
```

### **6. Interactive Tag with Click Handler**

Make tags interactive by adding an `onClick` event handler:

```jsx
<Tag
  label="JavaScript"
  color="warning"
  onClick={() => console.log("Tag clicked!")}
/>
```

## Storybook Examples

### **1. Primary Tags with All Colors**

This example shows all available colors for the primary variant (filled background):

```jsx
<>
  {['primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
    <Tag key={color} label={`Tag ${color}`} color={color} variant="filled" style={{ marginRight: '8px' }} />
  ))}
</>
```

### **2. Secondary Tags with All Colors**

This example shows all available colors for the secondary variant (outlined):

```jsx
<>
  {['primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
    <Tag key={color} label={`Tag ${color}`} color={color} variant="outlined" style={{ marginRight: '8px' }} />
  ))}
</>
```

### **3. Interactive Tag Example**

An interactive tag that can be clicked and removed:

```jsx
<Tag
  label="Interactive Tag"
  color="primary"
  size="medium"
  variant="filled"
  removable
  onRemove={() => alert('Tag removed!')}
  onClick={() => alert('Tag clicked!')}
/>
```

## Customization

The Tag component provides full flexibility for customization using props like `size`, `variant`, `color`, and `style`. Additionally, you can add custom CSS classes through the `className` prop or inline styles with the `style` prop.

## Accessibility

- For removable tags, ensure you include an accessible label on the remove button using `aria-label` or similar attributes.
- Interactive tags should include `role="button"` and appropriate focus states for keyboard navigation.

This Markdown document provides a comprehensive guide on how to use the **Tag** component in your project with various customization options and usage examples.