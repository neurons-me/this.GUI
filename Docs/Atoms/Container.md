# Container Component

A flexible wrapper that centers its content and controls its width. Ideal for structuring layouts by containing other components or HTML elements.

## Usage

Import the `Container` component into your React file:

```jsx
import { Container } from './Container';
```

Use it in your JSX to wrap content:

```jsx
<Container>
  <p>Your content goes here.</p>
</Container>
```

## Props

| Prop      | Type                                                         | Default  | Description                             |
| --------- | ------------------------------------------------------------ | -------- | --------------------------------------- |
| border    | `boolean`                                                    | `false`  | Adds a border to the container.         |
| size      | `oneOf(['small', 'medium', 'large'])`                        | `medium` | Controls the width of the container.    |
| rounded   | `boolean`                                                    | `false`  | Applies rounded corners.                |
| fluid     | `boolean`                                                    | `false`  | Makes the container full-width.         |
| align     | `oneOf(['left', 'center', 'right'])`                         | `left`   | Aligns the container within its parent. |
| position  | `oneOf(['static', 'relative', 'absolute', 'fixed', 'sticky'])` | `static` | Sets the CSS position property.         |
| className | `string`                                                     | `''`     | Additional CSS classes.                 |
| style     | `object`                                                     | `{}`     | Inline styles.                          |

## Examples

### Basic Container

```jsx
<Container>
  <p>This is a basic container.</p>
</Container>
```

### Small Container with Border

```jsx
<Container size="small" border>
  <p>This is a small container with a border.</p>
</Container>
```

### Large Fluid Container Centered and Rounded

```jsx
<Container size="large" fluid align="center" rounded>
  <p>This is a large, fluid container with center alignment and rounded corners.</p>
</Container>
```

### Positioned Container

```jsx
<Container position="absolute" style={{ top: '20px', left: '20px' }}>
  <p>This container is absolutely positioned.</p>
</Container>
```

## Notes

- Combine props to achieve the desired layout and styling.
- Use the `className` and `style` props for additional customizations.
- Refer to Storybook for interactive examples and detailed prop options.

---
