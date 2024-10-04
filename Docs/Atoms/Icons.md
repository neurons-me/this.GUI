# Heading Component

A flexible heading component that supports different levels, alignments, boldness, and colors. It inherits typography styles from the global theme to ensure consistency across your application.

## Usage

Import the `Heading` component into your React file:

```jsx
import { Heading } from './Heading';
```

Use it within your JSX to display headings:

```jsx
<Heading level={1} align="center" bold color="success">
  This is a Center Aligned Bold H1 Heading
</Heading>
```

## Props

| Prop      | Type                                 | Default      | Description                  |
| --------- | ------------------------------------ | ------------ | ---------------------------- |
| level     | `oneOf([1, 2, 3, 4, 5])`             | `1`          | Heading level from H1 to H5. |
| align     | `oneOf(['left', 'center', 'right'])` | `left`       | Text alignment.              |
| bold      | `bool`                               | `false`      | If `true`, text is bold.     |
| color     | `oneOf([...])`                       | `neutral`    | Color of the heading text.   |
| children  | `node`                               | **Required** | Content of the heading.      |
| className | `string`                             | `''`         | Additional CSS classes.      |
| style     | `object`                             | `{}`         | Inline styles.               |

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

### Basic Center Aligned Bold H1 Heading

```jsx
<Heading level={1} align="center" bold color="success">
  This is a Center Aligned Bold H1 Heading
</Heading>
```

### Left Aligned Normal H2 Heading

```jsx
<Heading level={2} align="left" color="info">
  This is a Left Aligned Normal H2 Heading
</Heading>
```

### Right Aligned Bold H3 Heading

```jsx
<Heading level={3} align="right" bold color="warning">
  This is a Right Aligned Bold H3 Heading
</Heading>
```

### Interactive Heading

Use the interactive story in Storybook to dynamically adjust the `Heading` props and see real-time changes.

## Notes

- The `Heading` component inherits typography styles from the global CSS, ensuring consistency with your design system.
- Combine props to achieve the desired heading level, alignment, boldness, and color.
- Utilize the `className` and `style` props for additional customizations as needed.
- Refer to Storybook for interactive examples and detailed prop options.