Documentation for the Slider component. This will describe the component's functionality, usage, and examples for integrating it into projects.

NOT STABLE

---

# Slider Component

The `Slider` component is a customizable slider that allows users to select a single value or a range of values by moving a thumb (or thumbs) along a track. It supports single and dual handle sliders, color customization, and dynamic display of values.

## Key Features

- **Customizable Colors**: The `Slider` component supports custom colors for both the track and thumb using the `color` and `thumbColor` props.
- **Dual Handle Support**: The component supports dual handles for selecting a range of values, useful for scenarios like price range filters.
- **Dynamic Value Display**: It can display the current value(s) above the slider for better user feedback.
- **Step, Min, and Max Values**: The `Slider` allows customization of the minimum, maximum, and step values.
- **Responsive Design**: The component is responsive and adjusts the size of the thumbs on smaller screens.
- **Disabled State**: The slider can be disabled to prevent user interaction.
  
## Props

| Prop         | Type           | Default   | Description                                                  |
| ------------ | -------------- | --------- | ------------------------------------------------------------ |
| `min`        | `number`       | `0`       | The minimum value the slider can have.                       |
| `max`        | `number`       | `100`     | The maximum value the slider can have.                       |
| `step`       | `number`       | `1`       | The interval between selectable values.                      |
| `value`      | `array/number` | `[20,80]` | The current value(s) of the slider. If dual is true, provide an array of two values. |
| `onChange`   | `function`     | `null`    | Function called when the slider value changes. Passes the new value(s) as an argument. |
| `color`      | `string`       | `primary` | The color of the slider track. Can be any of the available color options from the design system. |
| `thumbColor` | `string`       | `primary` | The color of the thumb(s). Can be any of the available color options from the design system. |
| `showValue`  | `bool`         | `true`    | Whether to show the current value(s) above the slider.       |
| `label`      | `string`       | `''`      | Label for the slider, displayed above it.                    |
| `dual`       | `bool`         | `false`   | Enables dual handles for selecting a range of values.        |
| `disabled`   | `bool`         | `false`   | Disables the slider, making it non-interactive.              |
| `className`  | `string`       | `''`      | Additional CSS class names for custom styling.               |

## Color Options

The following color options are available for the `color` and `thumbColor` props:

- `primary`
- `secondary`
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

## Usage

### Basic Slider

```jsx
import React, { useState } from 'react';
import { Slider } from './Slider'; // Import the slider component

const BasicSliderExample = () => {
  const [value, setValue] = useState(50);

  return (
    <Slider
      value={value}
      onChange={(val) => setValue(val)}
      min={0}
      max={100}
      step={1}
      color="primary"
      thumbColor="secondary"
      label="Volume"
      showValue
    />
  );
};

export default BasicSliderExample;
```

### Dual Handle Slider (Range Slider)

```jsx
import React, { useState } from 'react';
import { Slider } from './Slider';

const RangeSliderExample = () => {
  const [range, setRange] = useState([20, 80]);

  return (
    <Slider
      value={range}
      onChange={(val) => setRange(val)}
      min={0}
      max={100}
      step={5}
      dual={true}
      color="success"
      thumbColor="warning"
      label="Select Price Range"
      showValue
    />
  );
};

export default RangeSliderExample;
```

### Disabled Slider

```jsx
import React from 'react';
import { Slider } from './Slider';

const DisabledSliderExample = () => {
  return (
    <Slider
      value={50}
      min={0}
      max={100}
      step={1}
      color="neutral"
      thumbColor="neutral"
      label="Brightness"
      disabled
    />
  );
};

export default DisabledSliderExample;
```

### Customizing with Colors

```jsx
import React, { useState } from 'react';
import { Slider } from './Slider';

const CustomColorSliderExample = () => {
  const [value, setValue] = useState(30);

  return (
    <Slider
      value={value}
      onChange={(val) => setValue(val)}
      min={0}
      max={100}
      step={1}
      color="shade-3" // Custom track color
      thumbColor="shade-1" // Custom thumb color
      label="Custom Styled Slider"
      showValue
    />
  );
};

export default CustomColorSliderExample;
```

## Notes on Usage

- **Dual Handle Slider**: If you need a slider that allows selecting a range of values, set the `dual` prop to `true` and pass an array of two numbers as the `value` prop.
- **Color Customization**: Use the `color` and `thumbColor` props to adjust the slider’s appearance. These props accept any of the available color options listed above.
- **Responsiveness**: The slider automatically adjusts the size of the thumbs on smaller screens, making it mobile-friendly.
- **Disabled State**: You can disable the slider by setting the `disabled` prop to `true`, making it non-interactive while retaining the visual state.

---

This markdown provides an overview of the `Slider` component, how it works, and how to implement it with different configurations and use cases. 