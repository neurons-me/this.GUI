# Divider Component

A simple horizontal line used to separate content within your application.

## Installation

Ensure you have the `Divider` component files (`Divider.jsx`, `Divider.css`) in your project directory.

## Usage

Import the `Divider` component into your React component:

```jsx
import { Divider } from './Divider';
```

Then use it within your JSX:

```jsx
<Divider />
```

## Props

| Prop      | Type                                  | Default   | Description                                                  |
| --------- | ------------------------------------- | --------- | ------------------------------------------------------------ |
| thickness | `oneOf(['thin', 'normal', 'bold'])`   | `normal`  | Thickness of the divider line.                               |
| width     | `oneOf(['small', 'medium', 'large'])` | `medium`  | Width of the divider: `small` (25%), `medium` (50%), `large` (75%). |
| align     | `oneOf(['left', 'center', 'right'])`  | `center`  | Alignment of the divider within its container.               |
| color     | `oneOf([...])`                        | `neutral` | Color of the divider line. Uses global CSS variables.        |
| className | `string`                              | `''`      | Additional CSS classes for custom styling.                   |
| style     | `object`                              | `{}`      | Inline styles for custom styling.                            |

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

### Thin Small Left Aligned Divider

```jsx
<Divider thickness="thin" width="small" align="left" color="info" />
```

### Normal Medium Center Aligned Divider

```jsx
<Divider thickness="normal" width="medium" align="center" color="warning" />
```

### Bold Large Right Aligned Divider

```jsx
<Divider thickness="bold" width="large" align="right" color="success" />
```

### Interactive Divider

Use the interactive story in Storybook to dynamically adjust the `Divider` props.

## Styling

The `Divider` component utilizes global CSS variables for colors and spacing. Ensure that the following variables are defined in your global CSS (`light.css`):

```css
:root {
  --neutral-color: #a4a4a4;
  --info-color: #008699;
  --warning-color: #FF6F61;
  --alert-color: #ffcc00;
  --success-color: #00B4B8;
  --dark-color: #2C2C2C;
  /* Add other color variables as needed */
  
  --spacing-md: 16px;
  --spacing-sm: 8px;
  --spacing-xs: 4px;
  
  --transition-speed: 0.3s;
}
```

## Responsive Design

The `Divider` component is responsive and adjusts its width on smaller screens:

- **Small Screens (`max-width: 768px`):**
  - `small`, `medium`, and `large` widths change to `100%`.
  - Padding is reduced for better spacing.

## Notes

- The `Divider` is a self-closing component (`<Divider />`) and does not contain any children.
- Combine props to achieve the desired appearance and alignment.
- Use the `className` and `style` props for additional customizations as needed.

---
