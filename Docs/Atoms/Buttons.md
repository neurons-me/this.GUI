# Button Component

A versatile button component with customizable variants, colors, sizes, and styles. Ideal for triggering actions and navigating users within your application.

## Usage

Import the `Button` component into your React file:

```jsx
import { Button } from './Button';
```

Use it within your JSX:

```jsx
<Button label="Click Me" />
```

## Props

| Prop      | Type                                                         | Default     | Description                                                  |
| --------- | ------------------------------------------------------------ | ----------- | ------------------------------------------------------------ |
| variant   | `oneOf(['primary', 'secondary'])`                            | `primary`   | Style variant of the button. `primary` for main actions, `secondary` for secondary actions. |
| color     | `oneOf(['info', 'warning', 'alert', 'success', 'neutral', 'dark'])` | `info`      | Color theme of the button based on global CSS variables.     |
| size      | `oneOf(['small', 'medium', 'large'])`                        | `medium`    | Size of the button. `small`, `medium`, or `large`.           |
| label     | `string`                                                     | `''`        | Text label displayed on the button.                          |
| noBorder  | `boolean`                                                    | `false`     | If `true`, the button will have no border.                   |
| children  | `node`                                                       | `undefined` | Content inside the button. Overrides the `label` prop if provided. |
| className | `string`                                                     | `''`        | Additional CSS classes for custom styling.                   |
| style     | `object`                                                     | `{}`        | Inline styles for custom styling.                            |

## Examples

### Primary Button

```jsx
<Button label="Submit" variant="primary" color="success" />
```

### Secondary Large Button with No Border

```jsx
<Button
  label="Cancel"
  variant="secondary"
  size="large"
  color="warning"
  noBorder
/>
```

### Small Info Button with Custom Content

```jsx
<Button size="small" color="info">
  <FaInfoCircle /> Info
</Button>
```

### Custom Styled Button

```jsx
<Button
  label="Custom"
  variant="primary"
  color="dark"
  style={{ backgroundColor: '#333', borderRadius: '8px' }}
/>
```

## Notes

- The `children` prop takes precedence over the `label` prop. Use `children` to include icons or other elements inside the button.
- Utilize the `className` and `style` props for additional customizations beyond the predefined variants and colors.
- Ensure that the global CSS variables for colors are defined to apply the correct color themes.
- Refer to Storybook for interactive examples and detailed prop options.

---
