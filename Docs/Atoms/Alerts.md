# Alert Component

A versatile alert component to display important messages, warnings, or confirmations to users. Supports different variants, colors, and can be dismissible.

## Usage

Import the `Alert` component into your React file:

```jsx
import { Alert } from './Alert';
```

Use it within your JSX to display alert messages:

```jsx
<Alert color="success" variant="primary">
  This is a success alert — check it out!
</Alert>
```

## Props

| Prop        | Type                                                         | Default      | Description                                                  |
| ----------- | ------------------------------------------------------------ | ------------ | ------------------------------------------------------------ |
| variant     | `oneOf(['primary', 'secondary'])`                            | `primary`    | Style variant of the alert. `primary` for prominent alerts, `secondary` for subtle alerts. |
| color       | `oneOf(['info', 'warning', 'alert', 'success', 'neutral', 'dark'])` | `info`       | Color theme of the alert based on global CSS variables.      |
| children    | `node`                                                       | **Required** | Content inside the alert. Can include text, icons, or other elements. |
| className   | `string`                                                     | `''`         | Additional CSS classes for custom styling.                   |
| style       | `object`                                                     | `{}`         | Inline styles for custom styling.                            |
| onClose     | `function`                                                   | `undefined`  | Handler function called when the alert is dismissed.         |
| dismissible | `boolean`                                                    | `false`      | If `true`, shows a close button to allow users to dismiss the alert. |
| icon        | `node`                                                       | `undefined`  | Optional icon element to display alongside the alert content. |

## Examples

### Basic Primary Alert

```jsx
<Alert color="info" variant="primary">
  This is a primary info alert.
</Alert>
```

### Secondary Warning Alert

```jsx
<Alert color="warning" variant="secondary">
  This is a secondary warning alert.
</Alert>
```

### Dismissible Success Alert with Icon

```jsx
import { FaCheckCircle } from 'react-icons/fa';

<Alert
  color="success"
  variant="primary"
  dismissible
  onClose={() => alert('Alert dismissed!')}
  icon={<FaCheckCircle />}
>
  Your operation was successful!
</Alert>
```

### Dark Alert with Custom Styles

```jsx
<Alert
  color="dark"
  variant="secondary"
  style={{ borderRadius: '8px', padding: '20px' }}
>
  This is a dark alert with custom styles.
</Alert>
```

## Notes

- The `children` prop is required and can contain any React nodes, allowing for flexible content within the alert.
- When `dismissible` is set to `true`, ensure to provide an `onClose` handler to manage the alert's dismissal.
- Utilize the `icon` prop to include visual cues alongside the alert message.
- Combine `className` and `style` props for additional customizations beyond the predefined variants and colors.
- Ensure that the global CSS variables for colors are defined to apply the correct color themes.
- Refer to Storybook for interactive examples and detailed prop options.

---
