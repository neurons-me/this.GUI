# Caption Component

A versatile text component used to provide supplementary information, such as image captions, table descriptions, or form hints.

## Usage

Import the `Caption` component into your React file:

```jsx
import { Caption } from './Caption';
```

Use it within your JSX to display captions or descriptive text:

```jsx
<Caption text="This is a caption for the image." />
```

## Props

| Prop      | Type                                                         | Default      | Description                                        |
| --------- | ------------------------------------------------------------ | ------------ | -------------------------------------------------- |
| text      | `string`                                                     | **Required** | The caption text to display.                       |
| variant   | `oneOf(['image', 'table', 'form', 'chart', 'audio', 'content', 'interactive'])` | `image`      | Specifies the context or style of the caption.     |
| size      | `oneOf(['small', 'normal', 'large'])`                        | `normal`     | Controls the font size of the caption.             |
| color     | `oneOf(['info', 'warning', 'alert', 'success', 'neutral', 'dark', 'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5', 'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3', 'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'])` | `info`       | Sets the color of the caption text.                |
| round     | `boolean`                                                    | `false`      | If `true`, applies rounded styling to the caption. |
| className | `string`                                                     | `''`         | Additional CSS classes for custom styling.         |
| style     | `object`                                                     | `{}`         | Inline styles for custom styling.                  |

## Examples

### Basic Image Caption

```jsx
<Caption text="Figure 1: Overview of the project timeline." variant="image" />
```

### Small Warning Caption

```jsx
<Caption text="Please ensure all fields are filled out correctly." size="small" color="warning" />
```

### Large Success Caption with Rounded Corners

```jsx
<Caption text="Operation completed successfully!" size="large" color="success" round />
```

### Interactive Caption

Use the interactive story in Storybook to dynamically adjust the `Caption` props and see real-time changes.

## Notes

- The `Caption` component is primarily used for providing additional context or information related to other elements like images, tables, or forms.
- Combine props to achieve the desired appearance and functionality.
- Utilize the `className` and `style` props for further customizations as needed.
- Refer to Storybook for interactive examples and detailed prop options.

---
