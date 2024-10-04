A **TextInput component** in web and app development is a fundamental UI element that allows users to input and edit text. A complete and versatile **TextInput component** should offer several key features to accommodate different use cases, from simple single-line inputs to more complex scenarios like validation, accessibility, and customizability.

# TextInput Component Guide

### TextInput Component Usage Guide

The **TextInput** component is a versatile and customizable input field designed for various use cases in web applications. It allows users to input and edit text, with support for customization, validation, accessibility, and interactive features.

### Importing the Component

Before you can use the `TextInput` component, you need to import it into your React application:

```jsx
import { TextInput } from './TextInput'; // Adjust the path based on your file structure
```

### Basic Usage

To render a simple **TextInput**, you can use the following example:

```jsx
<TextInput
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  placeholder="Enter text here..."
/>
```

In this example:
- `value`: The current value of the input (controlled component).
- `onChange`: A function to handle value changes.
- `placeholder`: Placeholder text when the input is empty.

### Customizing Size and Color

You can customize the size and color of the **TextInput** using the `size` and `color` props.

```jsx
<TextInput
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  size="large"  // Options: 'small', 'medium', 'large'
  color="info"  // Available color options: 'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark', and others
  placeholder="Enter your info..."
/>
```

### Handling Clearable Input

If you want the **TextInput** to be clearable (with a button to remove the input), set the `clearable` prop to `true` and handle the `onClear` callback:

```jsx
<TextInput
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  clearable={true}
  onClear={() => setInputValue('')}  // Function to clear the input value
  placeholder="Enter text..."
/>
```

### Disabled and Read-Only States

You can disable the **TextInput** or set it as read-only using the `disabled` and `readOnly` props:

```jsx
<TextInput
  value="This field is disabled"
  disabled={true}
/>

<TextInput
  value="This field is read-only"
  readOnly={true}
/>
```

- `disabled`: Prevents any interaction with the input.
- `readOnly`: Allows the user to view but not edit the input.

### Customizing Styles

You can pass custom inline styles or use CSS classes to further customize the appearance of the **TextInput**:

```jsx
<TextInput
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  style={{ border: '2px solid #1F877D', borderRadius: '8px', fontSize: '18px' }}
  placeholder="Custom styled input"
/>
```

### Loading State

If you want to show a spinner to indicate that the input is loading (e.g., during async validation or data fetching), use the `loading` prop:

```jsx
<TextInput
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  loading={true}
  placeholder="Loading..."
/>
```

### Validation and Error States

The **TextInput** supports validation and error states. You can show helper text or error messages using the `helperText`, `error`, and `errorMessage` props:

```jsx
<TextInput
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={isEmailInvalid}
  errorMessage="Invalid email address"
  helperText="Please enter a valid email."
  placeholder="Enter your email..."
/>
```

- `error`: Boolean indicating whether the input has an error.
- `errorMessage`: Message displayed when an error occurs.
- `helperText`: Additional helper text displayed below the input.

### Accessibility Features

To improve accessibility, the **TextInput** includes support for ARIA attributes:

```jsx
<TextInput
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  aria-label="Enter your username"
  aria-describedby="helper-text"
/>
```

### Advanced Props

- **maxLength**: Limits the maximum number of characters.
- **minLength**: Enforces a minimum character length.
- **autoFocus**: Automatically focuses the input when it is rendered.
- **required**: Marks the input as required in a form.
- **spellCheck**: Enables or disables the browser's spell check feature.
- **autoComplete**: Controls browser auto-completion.

### Example: Interactive Usage in a Form

```jsx
const MyForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your name"
        size="medium"
        color="primary"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};
```

In this example, the **TextInput** is used in a form where the user is required to input their name. The form validates the input and prevents submission if the field is empty.

### Available Color Options

The **TextInput** supports a wide range of color options, allowing it to fit seamlessly into your theme:

- `primary`
- `secondary`
- `info`
- `warning`
- `alert`
- `success`
- `neutral`
- `dark`
- Custom colors: 'classy-color-1', 'classy-color-2', 'classy-color-3', and more.

### Conclusion

The **TextInput** component provides a flexible and customizable input field that can be adapted to various use cases. With support for custom colors, sizes, validation, error handling, and accessibility features, it can be used effectively in forms and other input-related components.