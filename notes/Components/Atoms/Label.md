# Label Component

The **Label** component is a versatile UI element designed to display categorized information with various styles and configurations. It supports different colors, shapes, sizes, and background options, making it suitable for tagging, status indicators, and more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Primary Label](#primary-label)
  - [Secondary Label](#secondary-label)
  - [Color Variations](#color-variations)
  - [Shape Variations](#shape-variations)
  - [Size Variations](#size-variations)
- [Props](#props)
- [Styling](#styling)
- [Examples](#examples)
- [Customization](#customization)
- [License](#license)

## Installation

Ensure you have the necessary dependencies installed. If you're using a component library setup, include the `Label` component files in your project.

```bash
# Example using npm
npm install react classnames prop-types
```

## Usage

Import the `Label` component and use it within your React application.

### Basic Usage

```jsx
import React from 'react';
import { Label } from './Label';

const App = () => (
  <div>
    <Label text="Default Label" />
  </div>
);

export default App;
```

### Primary Label

The primary label utilizes the primary color from the global theme and includes a background.

```jsx
<Label
  text="Primary Label"
  color="primary"
  background={true}
  shape="pill"
  size="md"
/>
```

### Secondary Label

The secondary label uses the secondary color, featuring only a border without a background.

```jsx
<Label
  text="Secondary Label"
  color="secondary"
  background={false}
  shape="rounded"
  size="md"
/>
```

### Color Variations

The `Label` component supports a wide range of colors. Here's how to apply different colors:

```jsx
<Label text="Info" color="info" background={true} />
<Label text="Warning" color="warning" background={true} />
<Label text="Alert" color="alert" background={true} />
<Label text="Success" color="success" background={true} />
<Label text="Neutral" color="neutral" background={true} />
<Label text="Dark" color="dark" background={true} />
```

### Shape Variations

You can adjust the shape of the label to be rounded, square, or pill-shaped.

```jsx
<Label text="Rounded" color="info" background={true} shape="rounded" />
<Label text="Square" color="warning" background={true} shape="square" />
<Label text="Pill" color="success" background={true} shape="pill" />
```

### Size Variations

The `Label` component comes in various sizes to fit different UI needs.

```jsx
<Label text="XS" color="neutral" background={true} size="xs" />
<Label text="SM" color="neutral" background={true} size="sm" />
<Label text="MD" color="neutral" background={true} size="md" />
<Label text="LG" color="neutral" background={true} size="lg" />
<Label text="XL" color="neutral" background={true} size="xl" />
```

## Props

| Prop         | Type                                    | Default      | Description                                                  |
| ------------ | --------------------------------------- | ------------ | ------------------------------------------------------------ |
| `text`       | `string`                                | **Required** | The text content displayed inside the label.                 |
| `color`      | `string`                                | `'neutral'`  | The color theme of the label. Options include `'primary'`, `'secondary'`, `'info'`, `'warning'`, `'alert'`, `'success'`, `'neutral'`, `'dark'`, and more custom colors. |
| `background` | `bool`                                  | `true`       | Determines if the label has a background color. If `false` and `color` is `'secondary'`, only a border is displayed. |
| `shape`      | `oneOf(['rounded', 'square', 'pill'])`  | `'rounded'`  | The shape of the label. `'rounded'` for slight curvature, `'square'` for sharp edges, and `'pill'` for fully rounded ends. |
| `size`       | `oneOf(['xs', 'sm', 'md', 'lg', 'xl'])` | `'md'`       | The size of the label, affecting font size and padding.      |
| `className`  | `string`                                | `''`         | Additional CSS classes for custom styling.                   |
| `style`      | `object`                                | `{}`         | Inline styles for additional customization.                  |

## Styling

The `Label` component is styled using CSS classes that correspond to its props. You can customize the appearance by modifying the `Label.css` file or by overriding the CSS variables in your global styles.

### CSS Variables

Ensure the following CSS variables are defined in your global stylesheet to control the colors and spacing:

```css
:root {
  --primary-color: #3490dc;
  --secondary-color: #ffed4a;
  --info-color: #17a2b8;
  --warning-color: #ffc107;
  --alert-color: #dc3545;
  --success-color: #28a745;
  --neutral-color: #6c757d;
  --dark-color: #343a40;
  /* Add other custom colors as needed */
  
  --spacing-md: 1rem;
  --spacing-sm: 0.5rem;
  --spacing-xs: 0.25rem;
  
  --rounded-box: 0.25rem;
  --rounded-btn: 0.25rem;
  
  --font-size-small: 0.875rem;
  --font-size-base: 1rem;
}
```

## Examples

### Primary and Secondary Labels

```jsx
import React from 'react';
import { Label } from './Label';

const App = () => (
  <div>
    <Label
      text="Primary Label"
      color="primary"
      background={true}
      shape="pill"
      size="md"
    />
    <Label
      text="Secondary Label"
      color="secondary"
      background={false}
      shape="rounded"
      size="md"
    />
  </div>
);

export default App;
```

### All Colors

```jsx
import React from 'react';
import { Label } from './Label';

const AllColorsExample = () => (
  <div className="label-colors">
    {[
      'primary',
      'secondary',
      'info',
      'warning',
      'alert',
      'success',
      'neutral',
      'dark',
      'classy-color-1',
      'classy-color-2',
      'classy-color-3',
      'classy-color-4',
      'classy-color-5',
      'small-switch-color-1',
      'small-switch-color-2',
      'natural-color-1',
      'natural-color-2',
      'natural-color-3',
      'grey-friend-1',
      'grey-friend-2',
      'shade-1',
      'shade-2',
      'shade-3',
      'shade-4',
    ].map((color) => (
      <Label
        key={color}
        text={color}
        color={color}
        background={color !== 'secondary'}
        shape="rounded"
        size="sm"
      />
    ))}
  </div>
);

export default AllColorsExample;
```

### Shape and Size Variations

```jsx
import React from 'react';
import { Label } from './Label';

const ShapeSizeExample = () => (
  <div>
    <div className="label-shapes">
      <Label text="Rounded" color="info" background={true} shape="rounded" size="md" />
      <Label text="Square" color="warning" background={true} shape="square" size="md" />
      <Label text="Pill" color="success" background={true} shape="pill" size="md" />
    </div>
    <div className="label-sizes">
      <Label text="XS" color="neutral" background={true} shape="rounded" size="xs" />
      <Label text="SM" color="neutral" background={true} shape="rounded" size="sm" />
      <Label text="MD" color="neutral" background={true} shape="rounded" size="md" />
      <Label text="LG" color="neutral" background={true} shape="rounded" size="lg" />
      <Label text="XL" color="neutral" background={true} shape="rounded" size="xl" />
    </div>
  </div>
);

export default ShapeSizeExample;
```

## Customization

You can further customize the `Label` component by overriding CSS variables or adding additional CSS classes.

### Overriding CSS Variables

```css
:root {
  --primary-color: #1c64f2;
  --secondary-color: #fbbf24;
  /* Customize other colors as needed */
}
```

### Adding Custom Classes

```jsx
<Label
  text="Custom Label"
  color="custom-color"
  background={true}
  shape="rounded"
  size="md"
  className="my-custom-class"
/>
```

```css
.my-custom-class {
  /* Custom styles */
  font-weight: bold;
}
```

## License

MIT License. See [LICENSE](LICENSE) for more information.
