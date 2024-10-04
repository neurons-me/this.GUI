# Checkbox Component

A customizable checkbox component for forms and interactive elements.

## Usage

Import the `Checkbox` component into your React file:

```jsx
import { Checkbox } from './Checkbox';
```

Use it within your JSX:

```jsx
<Checkbox
  label="Accept Terms and Conditions"
  checked={isChecked}
  onChange={handleCheckboxChange}
/>
```

## Props

| Prop      | Type                                  | Default      | Description                                              |
| --------- | ------------------------------------- | ------------ | -------------------------------------------------------- |
| label     | `string`                              | **Required** | Label text displayed next to the checkbox.               |
| checked   | `boolean`                             | `false`      | Controls the checked state of the checkbox.              |
| onChange  | `function`                            | `undefined`  | Handler function called when the checkbox state changes. |
| variant   | `oneOf(['primary', 'secondary'])`     | `primary`    | Style variant of the checkbox.                           |
| size      | `oneOf(['small', 'normal', 'large'])` | `normal`     | Size of the checkbox.                                    |
| color     | `oneOf([...])`                        | `info`       | Color of the checkbox, based on global CSS variables.    |
| rounded   | `boolean`                             | `false`      | If `true`, the checkbox will have rounded corners.       |
| disabled  | `boolean`                             | `false`      | If `true`, the checkbox is disabled.                     |
| className | `string`                              | `''`         | Additional CSS classes for custom styling.               |
| style     | `object`                              | `{}`         | Inline styles for custom styling.                        |

### `color` Options

- `info`
- `warning`
- `alert`
- `success`
- `neutral`
- `dark`
- `classy-color-1`
- `classy-color-2`
- `classy-color-3`
- `classy-color-4`
- `classy-color-5`
- `small-switch-color-1`
- `small-switch-color-2`
- `natural-color-1`
- `natural-color-2`
- `natural-color-3`
- `grey-friend-1`
- `grey-friend-2`
- `shade-1`
- `shade-2`
- `shade-3`
- `shade-4`

## Examples

### Basic Checkbox

```jsx
<Checkbox
  label="Subscribe to newsletter"
  checked={isSubscribed}
  onChange={handleSubscriptionChange}
/>
```

### Small Secondary Rounded Checkbox

```jsx
<Checkbox
  label="Enable notifications"
  variant="secondary"
  size="small"
  color="success"
  rounded
  checked={isEnabled}
  onChange={handleEnableChange}
/>
```

### Large Disabled Checkbox

```jsx
<Checkbox
  label="I agree to the terms and conditions"
  size="large"
  color="warning"
  disabled
/>
```

### Interactive Checkbox

Use the interactive story in Storybook to dynamically adjust the `Checkbox` props.

## Notes

- Combine props to achieve the desired appearance and functionality.
- Utilize the `className` and `style` props for additional customizations as needed.
- Refer to Storybook for interactive examples and detailed prop options.

---
