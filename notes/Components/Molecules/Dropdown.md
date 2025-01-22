# **Dropdown Component Usage Guide**

The Dropdown component is a versatile and customizable component that allows users to select from a list of options. It comes with full support for theme-based colors and can be customized using various props to suit your needs. The dropdown also supports an interactive search feature, where users can type and filter through the options as they type.

**Key Features**

​	•	**Fully customizable**: Adjust border and text colors using theme-based color variants.

​	•	**Interactive Search**: Option to filter the list as you type.

​	•	**Icon Indicator**: Displays an arrow icon to indicate that the dropdown is expandable.

​	•	**Theme Support**: Includes support for all colors from the provided theme.

**Dropdown Props**

​	•	options: Array of options to display in the dropdown.

​	•	color: Color of the dropdown’s border and text. Supports all theme colors such as primary, secondary, info, warning, alert, success, neutral, dark, and more.

​	•	searchable: Enables the interactive search feature within the dropdown.

​	•	placeholder: Placeholder text for the dropdown’s search input.

​	•	onSelect: Callback function that triggers when an item is selected.

​	•	defaultSelected: The option selected by default.

​	•	disabled: If true, the dropdown will be disabled and non-interactive.

**Default Props:**

```jsx
Dropdown.defaultProps = {
 color: 'primary',
 options: [],
 searchable: false,
 placeholder: 'Select an option...',
 onSelect: () => {},
 defaultSelected: null,
 disabled: false,
};
```

**Usage Example**

```jsx
import React from 'react';
import { Dropdown } from './Dropdown';
export default {
 title: 'Molecules/Interactive/Dropdown',
 component: Dropdown,
 argTypes: {
  color: {
   control: 'select',
   options: [
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2',
    'shade-1', 'shade-2', 'shade-3', 'shade-4'
   ],
   defaultValue: 'primary',
  },
  searchable: { control: 'boolean', defaultValue: false },
  disabled: { control: 'boolean', defaultValue: false },
 },
};

const options = [
 { label: 'Option 1', value: 1 },
 { label: 'Option 2', value: 2 },
 { label: 'Option 3', value: 3 },
 { label: 'Option 4', value: 4 },
];

export const DefaultDropdown = (args) => <Dropdown {...args} options={options} />;
export const SearchableDropdown = (args) => <Dropdown {...args} searchable={true} options={options} />;
```

# **How to Use**

**Basic Dropdown**

To use the basic Dropdown component, you only need to pass an array of options and optionally customize the color, placeholder, or selection callback.

```jsx
<Dropdown
 options={[
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
 ]}

 color="primary" *// You can select from available colors*
 onSelect={(value) => console.log(value)} *// Callback when an option is selected*
/>
```

**Searchable Dropdown**

If you want to enable the search feature, you can set the searchable prop to true. The user will be able to filter through the dropdown options by typing into the input field.

```jsx
<Dropdown
 options={[
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' }
 ]}

 color="info" *// You can select any theme color*
 searchable={true}
 placeholder="Search fruits..."
 onSelect={(value) => console.log(value)}
/>
```

**Theming and Colors**

The Dropdown component supports a wide range of theme colors. You can select a color from the theme to customize the dropdown’s border and text color. By default, it uses the primary color (primary).

**Available color options:**

​	•	primary

​	•	secondary

​	•	info

​	•	warning

​	•	alert

​	•	success

​	•	neutral

​	•	dark

​	•	classy-color-1, classy-color-2, classy-color-3, classy-color-4, classy-color-5

​	•	small-switch-color-1, small-switch-color-2

​	•	natural-color-1, natural-color-2, natural-color-3

​	•	grey-friend-1, grey-friend-2

​	•	shade-1, shade-2, shade-3, shade-4

**Disabled Dropdown**

To disable the dropdown, you can set the disabled prop to true. This will render the dropdown in a non-interactive state.

```jsx
<Dropdown
 options={[
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' }
 ]}
 color="neutral"
 disabled={true}
/>
```

**Customizing Dropdown Styles**

The Dropdown component also allows you to customize its styles via theme variables or custom CSS. You can change the border radius, padding, shadow, and more through your theme’s CSS variables or by overriding specific styles.

**Summary**

The Dropdown component is a flexible and powerful UI element that provides users with a simple way to select items from a list. Its support for theming, color variants, and interactive search makes it a valuable component for a variety of use cases in modern web applications.