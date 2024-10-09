A **TextArea component** is a multi-line text input field that allows users to input longer pieces of text, such as comments, descriptions, or feedback. To be **complete** and **versatile**, a TextArea component should support a variety of props and features that cater to both functionality and customization needs.

---

# TextArea Component Guide

The `TextArea` component is a customizable multi-line text input field that supports various styling, behavior, and validation options. This component is perfect for use in forms, comment sections, feedback areas, or any interface requiring longer text inputs.

## Installation

To use the `TextArea` component in your project, import it as follows:

```jsx
import { TextArea } from './TextArea';
```

## Basic Usage

```jsx
<TextArea
  value={textValue}
  placeholder="Enter your comments..."
  onChange={(e) => setTextValue(e.target.value)}
/>
```

## Props

### Core Props

- `value` (string): The current value of the TextArea (controlled component).
  - **Example:** `<TextArea value={textValue} onChange={handleChange} />`
  
- `defaultValue` (string): The default value of the TextArea (uncontrolled component).
  - **Example:** `<TextArea defaultValue="Enter your comment..." />`
  
- `placeholder` (string): Placeholder text when the TextArea is empty.
  - **Default:** `"Enter text here..."`

- `onChange` (function): Callback function triggered when the text changes.
  - **Example:** `<TextArea onChange={(e) => setText(e.target.value)} />`

- `name` (string): Name attribute for form handling.
  - **Example:** `<TextArea name="comment" />`

### Size and Dimensions

- `rows` (number): Specifies the visible number of text lines.
  - **Default:** `4`

- `cols` (number): Specifies the visible width of the TextArea in characters.
  - **Default:** `50`

- `resize` (string): Controls resizing behavior. Options are `'none'`, `'vertical'`, `'horizontal'`, or `'both'`.
  - **Default:** `"vertical"`

- `width` & `height` (string or number): Inline width and height styling.
  - **Example:** `<TextArea width="300px" height="150px" />`

### Styling and Text Formatting

- `bold` (boolean): Toggles bold text.
  - **Default:** `false`
  
- `italic` (boolean): Toggles italic text.
  - **Default:** `false`

- `underline` (boolean): Toggles underlined text.
  - **Default:** `false`

- `fontSize` (string): Sets the font size.
  - **Default:** `"16px"`

- `color` (string): The text color. Options include:
  - `'primary'`, `'info'`, `'warning'`, `'alert'`, `'success'`, `'neutral'`, `'dark'`
  - **Default:** `'primary'`

- `backgroundColor` (string): Sets the background color of the TextArea.
  - **Default:** `"transparent"`

### States and Validation

- `disabled` (boolean): Disables the TextArea.
  - **Default:** `false`

- `readOnly` (boolean): Makes the TextArea read-only.
  - **Default:** `false`

- `required` (boolean): Marks the field as required.
  - **Default:** `false`

- `maxLength` (number): Maximum number of characters allowed.
  - **Example:** `<TextArea maxLength={500} />`

- `error` (boolean): Displays the error state.
  - **Default:** `false`

- `errorMessage` (string): Text to display when there's an error.
  - **Example:** `<TextArea error={true} errorMessage="This field is required." />`

### Collapsible Feature

- `collapsible` (boolean): Enables the collapsible TextArea, which collapses after a certain character count.
  - **Default:** `false`

- `collapseAt` (number): The number of characters after which the TextArea collapses.
  - **Default:** `100`

- **Example:**
  ```jsx
  <TextArea
    value={longText}
    collapsible={true}
    collapseAt={200}
  />
  ```

### Helper Text and Accessibility

- `helperText` (string): Displays helper text below the TextArea.
  - **Example:** `<TextArea helperText="Max 500 characters" />`

- `aria-label` (string): ARIA label for accessibility.
  - **Example:** `<TextArea aria-label="Comment input field" />`

### Customization

- `className` (string): Adds custom CSS classes.
  - **Example:** `<TextArea className="custom-textarea" />`

- `style` (object): Inline styles for additional control.
  - **Example:** `<TextArea style={{ border: '2px solid #1F877D' }} />`

## Interactive Example

Here's an interactive example of the `TextArea` component with various customization options:

```jsx
<TextArea
  value="Type here..."
  placeholder="Enter your text..."
  rows={4}
  cols={50}
  bold={true}
  italic={false}
  underline={false}
  color="primary"
  collapsible={true}
  collapseAt={100}
  maxLength={500}
  onChange={(e) => console.log(e.target.value)}
  error={false}
  helperText="Max 500 characters"
/>
```

## Features

- **Text Formatting:** Easily toggle bold, italic, and underlined text.
- **Collapsible:** Collapse the TextArea after a certain character count for better UX on large text inputs.
- **Error Handling:** Visual feedback for errors with custom error messages.
- **Helper Text:** Add instructional or contextual helper text below the TextArea.

## Conclusion

The `TextArea` component is highly flexible and customizable, offering all the core features necessary for a rich text input field, along with additional props for controlling appearance, size, and behavior. It can be easily integrated into any form or user input area, ensuring a smooth and responsive experience.

---

This document provides clear examples and usage instructions for your **TextArea** component with all its customizable props and behavior.