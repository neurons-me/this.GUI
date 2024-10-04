# Range Component Guide

The `Range` component allows users to select a numeric value within a specified range by dragging a slider. It is customizable in terms of appearance, colors, and functionality, making it suitable for different use cases like adjusting volume, brightness, or selecting a price range.

### Key Props
- **`min`**: Minimum value (default: `0`).
- **`max`**: Maximum value (default: `100`).
- **`step`**: Incremental step between values (default: `1`).
- **`value`**: Current value of the slider (default: `50`).
- **`onChange`**: Function triggered when the value changes.
- **`color`**: Color of the filled part of the range track (default: `primary`).
- **`thumbColor`**: Color of the thumb (controller) (default: `primary`).
- **`showValue`**: Whether to display the current value next to the slider (default: `true`).
- **`label`**: Label to describe the slider (default: `''`).
- **`disabled`**: Disable the slider (default: `false`).
- **`width`**: Custom width of the range component (default: `100%`).

---

## Basic Usage

### Example 1: Simple Volume Control
```jsx
import React, { useState } from 'react';
import { Range } from './Range';

const VolumeControl = () => {
  const [volume, setVolume] = useState(50);

  return (
    <div>
      <h3>Volume Control</h3>
      <Range
        min={0}
        max={100}
        step={1}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        color="primary"
        thumbColor="info"
        showValue={true}
        label="Volume"
      />
    </div>
  );
};

export default VolumeControl;
```
**Key points**:
- Sets the volume between `0` and `100`.
- Displays the value beside the slider (`showValue` is `true`).
- Uses the `primary` color for the filled range and `info` color for the thumb.

---

### Example 2: Custom Width and Disabled State
```jsx
import React, { useState } from 'react';
import { Range } from './Range';

const BrightnessControl = () => {
  const [brightness, setBrightness] = useState(30);

  return (
    <div>
      <h3>Brightness Control</h3>
      <Range
        min={0}
        max={100}
        step={5}
        value={brightness}
        onChange={(e) => setBrightness(Number(e.target.value))}
        color="success"
        thumbColor="warning"
        showValue={true}
        label="Brightness"
        disabled={false}
        width="300px"  // Custom width
      />
    </div>
  );
};

export default BrightnessControl;
```
**Key points**:
- Custom width set to `300px`.
- Uses `success` color for the range and `warning` for the thumb.
- Step size set to `5` for more granular control.

---

### Example 3: Interactive Range in a Form
```jsx
import React, { useState } from 'react';
import { Range } from './Range';

const PriceRangeSelector = () => {
  const [price, setPrice] = useState(250);

  return (
    <div>
      <h3>Price Range</h3>
      <Range
        min={100}
        max={500}
        step={10}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        color="alert"
        thumbColor="dark"
        showValue={true}
        label="Select Price"
      />
      <p>Selected Price: ${price}</p>
    </div>
  );
};

export default PriceRangeSelector;
```
**Key points**:
- A price range between `100` and `500` with a step of `10`.
- The filled part of the range is `alert` color and the thumb is `dark`.
- Dynamically displays the selected price.

---

## Prop Summary

| Prop         | Type       | Default   | Description                                              |
| ------------ | ---------- | --------- | -------------------------------------------------------- |
| `min`        | `number`   | `0`       | Minimum value of the range.                              |
| `max`        | `number`   | `100`     | Maximum value of the range.                              |
| `step`       | `number`   | `1`       | Step size between values.                                |
| `value`      | `number`   | `50`      | Current value of the range.                              |
| `onChange`   | `function` | `null`    | Function triggered on value change.                      |
| `color`      | `string`   | `primary` | Color of the filled portion of the range.                |
| `thumbColor` | `string`   | `primary` | Color of the thumb (controller).                         |
| `showValue`  | `boolean`  | `true`    | Whether to display the current value next to the slider. |
| `label`      | `string`   | `''`      | Label to describe the range input.                       |
| `disabled`   | `boolean`  | `false`   | Whether the slider is disabled.                          |
| `width`      | `string`   | `100%`    | Custom width for the range component.                    |

---

## Responsive Design

The `Range` component is fully responsive, adapting to its container's width. You can further customize its width using the `width` prop or CSS.

### Example: Responsive Behavior
```jsx
<Range width="100%" />
```
By default, the width of the range will be `100%`, but you can adjust it with CSS or directly via the `width` prop.

---

A **range input** is a type of user interface element in web and app development that allows users to select a value or range of values by **moving a slider along a track**. The input element represents a numeric value, and it typically shows a continuous or discrete range of values. It’s commonly used for setting values like volume, brightness, price ranges, or other parameters where users need to choose a value within a specified range.

Here’s a brief markdown guide on how to use the `Range` component, including usage examples with key props like `color`, `thumbColor`, `width`, and more.