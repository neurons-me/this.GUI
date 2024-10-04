---

## Tooltip Component Guide

The `Tooltip` component is an interactive UI element that provides contextual information or guidance when users hover, click, or focus on a target element. It is highly customizable in terms of content, appearance, and behavior.

### Importing the Tooltip Component

```jsx
import { Tooltip } from './Tooltip';
```

### Basic Usage

To create a simple tooltip, wrap the target element (such as a button or icon) with the `Tooltip` component, passing in the `content` prop.

```jsx
<Tooltip content="This is a tooltip">
  <button>Hover me</button>
</Tooltip>
```

### Props

| Prop        | Type      | Default     | Description                                                  |
| ----------- | --------- | ----------- | ------------------------------------------------------------ |
| `content`   | `node`    | (required)  | The content that will be displayed inside the tooltip (text, HTML, or a React component). |
| `position`  | `string`  | `'top'`     | The position of the tooltip relative to the target. Options: `top`, `bottom`, `left`, `right`, `north`, `south`, `east`, `west`. |
| `variant`   | `string`  | `'primary'` | Determines the style of the tooltip: `'primary'` (solid background) or `'secondary'` (outlined). |
| `color`     | `string`  | `'primary'` | Specifies the color scheme from the theme. Available options are listed below. |
| `showArrow` | `boolean` | `true`      | Whether to show an arrow connecting the tooltip to the target element. |
| `children`  | `node`    | (required)  | The target element that will trigger the tooltip when hovered or clicked. |

### Available Colors

You can choose from the following colors for both `primary` and `secondary` variants:

- **Primary Colors**:
  - `primary`, `secondary`, `info`, `warning`, `alert`, `success`, `neutral`, `dark`
  
- **Classy Palette**:
  - `classy-color-1`, `classy-color-2`, `classy-color-3`, `classy-color-4`, `classy-color-5`
  
- **Small Switch Palette**:
  - `small-switch-color-1`, `small-switch-color-2`
  
- **Natural Palette**:
  - `natural-color-1`, `natural-color-2`, `natural-color-3`
  
- **Grey Friends**:
  - `grey-friend-1`, `grey-friend-2`
  
- **Shades**:
  - `shade-1`, `shade-2`, `shade-3`, `shade-4`

### Example with Custom Position and Color

```jsx
<Tooltip content="This is an info tooltip" position="bottom" color="info">
  <button>Hover me</button>
</Tooltip>
```

### Secondary Variant (Outlined Tooltip)

For a tooltip with only a colored border and text, use the `variant="secondary"` prop.

```jsx
<Tooltip content="Outlined Tooltip" variant="secondary" color="warning">
  <button>Hover me</button>
</Tooltip>
```

### Tooltip with Arrow and Custom Delay

You can delay when the tooltip appears or hides by customizing the `delayShow` and `delayHide` props (available in the `stories` but not directly in the base component in this example).

```jsx
<Tooltip content="This is a delayed tooltip" delayShow={300} delayHide={200}>
  <button>Hover me (delayed)</button>
</Tooltip>
```

### Positioning Examples

The `position` prop allows you to control where the tooltip will appear relative to the target element.

```jsx
<Tooltip content="Top Tooltip" position="top">
  <button>Top</button>
</Tooltip>

<Tooltip content="Bottom Tooltip" position="bottom">
  <button>Bottom</button>
</Tooltip>

<Tooltip content="Left Tooltip" position="left">
  <button>Left</button>
</Tooltip>

<Tooltip content="Right Tooltip" position="right">
  <button>Right</button>
</Tooltip>
```

### Full Example: Customizing Tooltip with Variants and Colors

```jsx
<div style={{ padding: '50px', display: 'grid', gap: '20px' }}>
  <Tooltip content="Primary Success Tooltip" variant="primary" color="success">
    <button>Hover for Success</button>
  </Tooltip>
  
  <Tooltip content="Secondary Warning Tooltip" variant="secondary" color="warning">
    <button>Hover for Warning</button>
  </Tooltip>
  
  <Tooltip content="Classy Tooltip" variant="primary" color="classy-color-3">
    <button>Hover for Classy Color</button>
  </Tooltip>
</div>
```

### Advanced Customization Options

- **Arrow Visibility**: You can toggle the visibility of the arrow by setting `showArrow` to `true` or `false`.
- **Manual Triggering**: The tooltip can be manually triggered by programmatically controlling its visibility (e.g., on click or focus).

---

This guide provides all the necessary information to effectively use the `Tooltip` component, customize it with different color themes, position it, and apply different variants.