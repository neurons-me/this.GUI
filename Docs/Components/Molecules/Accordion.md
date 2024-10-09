# Accordion Component
The **Accordion** component is a UI element that allows users to toggle the visibility of sections of content. It is often used to condense information into smaller views that can be expanded and collapsed, making content more accessible and organized.

## Features
- **Variants**: Supports `primary` and `secondary` variants.
  - **Primary**: Background color is applied to the entire header.
  - **Secondary**: Only the border and text color are applied, keeping the background transparent.
- **Colors**: Can be customized using a wide range of colors from the design theme.
- **Responsive**: Works on all screen sizes, with font sizes adjusted for mobile views.
- **Arrow Indicator**: Displays an arrow to show expandable sections, with a rotation animation when the section is expanded.
- **Multiple Open Sections**: Allows multiple sections to be open simultaneously, or restricts to one section at a time.

## Props

| Prop              | Type       | Default  | Description                                                                                                                                 |
|-------------------|------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------|
| `allowMultipleOpen` | `boolean`  | `false`  | Allows multiple accordion sections to be open at once. If `false`, only one section is open at a time.                                        |
| `items`           | `array`    | Required | Array of accordion items, each containing `title` (string) and `content` (node) for the section.                                             |
| `variant`         | `string`   | `primary`| Determines the visual style of the accordion. Options: `primary`, `secondary`.                                                               |
| `color`           | `string`   | `primary`| Applies color to the accordion header. Options include `primary`, `secondary`, `info`, `warning`, `alert`, `success`, `neutral`, `dark`, etc.|
| `showArrow`       | `boolean`  | `true`   | Controls whether an arrow is displayed to indicate expandable sections.                                                                      |
| `border`          | `boolean`  | `false`  | If `true`, adds a border around the accordion content.                                                                                       |

## Color Options
The accordion supports a wide range of color options derived from the theme. Here are the available color options:

- **Primary Colors**: `primary`, `secondary`
- **Semantic Colors**: `info`, `warning`, `alert`, `success`, `neutral`, `dark`
- **Classy Palette**: `classy-color-1`, `classy-color-2`, `classy-color-3`, `classy-color-4`, `classy-color-5`
- **Small Switch Palette**: `small-switch-color-1`, `small-switch-color-2`
- **Natural Palette**: `natural-color-1`, `natural-color-2`, `natural-color-3`
- **Grey Friends**: `grey-friend-1`, `grey-friend-2`
- **Shades**: `shade-1`, `shade-2`, `shade-3`, `shade-4`

## Usage

### Basic Usage
Here's a simple example of how to use the Accordion component with a list of items:

```jsx
import { Accordion } from './Accordion';

const items = [
  { title: 'Section 1', content: 'Content for section 1' },
  { title: 'Section 2', content: 'Content for section 2' },
  { title: 'Section 3', content: 'Content for section 3' },
];

export const ExampleAccordion = () => (
  <Accordion items={items} />
);
```

### Using Color Variants
You can pass a specific color and variant to customize the appearance of the Accordion:

```jsx
<Accordion 
  items={items} 
  color="info" 
  variant="secondary" 
/>
```
In this example:

	•	The accordion uses the info color from the theme for the border and text.
	•	The secondary variant ensures only the border is colored, leaving the background transparent.

### Allowing Multiple Sections to Be Open

If you want multiple accordion sections to be open at once:
```jsx
<Accordion 
  items={items} 
  allowMultipleOpen={true} 
/>
```

### Adding Borders to the Content

To add a border around the content of each accordion section, set the border prop to true:
```jsx
<Accordion 
  items={items} 
  border={true} 
/>
```

This will add a border around the content area, matching the selected theme color.

### Example with All Props
```jsx
<Accordion 
  items={[
    { title: 'FAQ 1', content: 'This is the answer to FAQ 1.' },
    { title: 'FAQ 2', content: 'This is the answer to FAQ 2.' },
    { title: 'FAQ 3', content: 'This is the answer to FAQ 3.' }
  ]} 
  color="success" 
  variant="secondary" 
  showArrow={true}
  allowMultipleOpen={false}
  border={true}
/>
```

### Styling
The Accordion component uses theme-specific CSS variables, which are applied to the background, borders, and text color based on the variant and color props. The component is responsive and adjusts for mobile views using media queries.

## Conclusion
The Accordion component is a versatile and customizable UI element suitable for creating collapsible content sections. By leveraging the power of variants, colors, and props like allowMultipleOpen, you can adapt it to fit various design needs in your application.

----------

