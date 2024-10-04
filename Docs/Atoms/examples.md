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

-----

# Link Component

The **Link** component is a versatile and customizable element for navigating within and outside your application. It inherits its colors and font sizes from the global theme, ensuring consistency across your UI.

## Features

- **Underline Control**: Toggle underlined text for links.
- **Bold Control**: Toggle bold text for emphasis.
- **External Links**: Indicate external links with an icon.
- **Open in New Window**: Option to open links in a new browser tab.
- **Experimental Preview**: On press (mouse down), a preview of the link's content appears.

## Installation

Ensure you have the necessary dependencies installed. If you're using a component library setup, include the `Link` component files in your project.

```bash
# Example using npm
npm install react classnames prop-types
```

## Usage

Import the `Link` component and use it within your React application.

```jsx
import React from 'react';
import { Link } from './Link';

const App = () => (
  <div>
    <Link
      text="Visit Neurons.me"
      href="https://neurons.me"
      underline={true}
      bold={false}
      newWindow={false}
      external={false}
      experimentalPreview={false}
    />
  </div>
);

export default App;
```

### Props

| Prop                  | Type     | Default      | Description                                                  |
| --------------------- | -------- | ------------ | ------------------------------------------------------------ |
| `text`                | `string` | **Required** | The text content displayed inside the link.                  |
| `href`                | `string` | **Required** | The URL the link points to.                                  |
| `underline`           | `bool`   | `true`       | Whether the link is underlined.                              |
| `bold`                | `bool`   | `false`      | Whether the link text is bold.                               |
| `newWindow`           | `bool`   | `false`      | Whether the link opens in a new browser window/tab.          |
| `external`            | `bool`   | `false`      | Whether the link is external. Adds an external link icon if `true`. |
| `experimentalPreview` | `bool`   | `false`      | Enable experimental preview on press (mouse down). Shows a preview of the link's content. |
| `className`           | `string` | `''`         | Additional CSS classes for custom styling.                   |
| `style`               | `object` | `{}`         | Inline styles for additional customization.                  |

## Styling

The `Link` component inherits its colors and font sizes from the global theme defined in your CSS variables. Ensure the following CSS variables are defined in your global stylesheet to control the appearance:

```css
:root {
  --link-color: #1F877D; /* Neurons teal */
  --link-hover-color: #555555; /* Greyish color on hover */
  --font-family: 'Roboto', sans-serif;
  --font-size-base: 17px;
  --font-weight-bold: 600;
  --transition-speed: 0.3s;
  --box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  --z-index-modal: 1000;
}
```

### Link Styles

- **Underline**: Controlled via the `underline` prop.
- **Bold**: Controlled via the `bold` prop.
- **External Icon**: Displays an external link icon (`🔗`) when the `external` prop is `true`.
- **Hover Effects**: Changes color on hover based on CSS variables.

### Experimental Preview

When the `experimentalPreview` prop is enabled, pressing (mouse down) on the link will display a preview of the linked content in an iframe overlay. The preview is responsive and adapts to different screen sizes.

## Examples

### Underlined and Bold Link

```jsx
<Link
  text="Bold & Underlined Link"
  href="https://neurons.me"
  underline={true}
  bold={true}
  newWindow={false}
  external={false}
  experimentalPreview={false}
/>
```

### No Underline, Not Bold Link

```jsx
<Link
  text="Simple Link"
  href="https://neurons.me"
  underline={false}
  bold={false}
  newWindow={false}
  external={false}
  experimentalPreview={false}
/>
```

### Open in New Window Link

```jsx
<Link
  text="Open in New Window"
  href="https://neurons.me"
  underline={true}
  bold={false}
  newWindow={true}
  external={false}
  experimentalPreview={false}
/>
```

### External Link with Notification

```jsx
<Link
  text="External Link"
  href="https://external.com"
  underline={true}
  bold={false}
  newWindow={true}
  external={true}
  experimentalPreview={false}
/>
```

### Experimental Preview Link

```jsx
<Link
  text="Preview Link"
  href="https://neurons.me"
  underline={true}
  bold={false}
  newWindow={false}
  external={false}
  experimentalPreview={true}
/>
```

### Interactive Link

```jsx
<Link
  text="Interactive Link"
  href="https://neurons.me"
  underline={true}
  bold={true}
  newWindow={true}
  external={true}
  experimentalPreview={true}
/>
```

## Customization

You can further customize the `Link` component by overriding CSS variables or adding additional CSS classes.

### Overriding CSS Variables

```css
:root {
  --link-color: #FF5733; /* Custom link color */
  --link-hover-color: #C70039; /* Custom hover color */
}
```

### Adding Custom Classes

```jsx
<Link
  text="Custom Styled Link"
  href="https://neurons.me"
  underline={true}
  bold={false}
  newWindow={false}
  external={false}
  experimentalPreview={false}
  className="my-custom-link"
/>
```

```css
.my-custom-link {
  font-style: italic;
}
```



## License

MIT License. See LICENSE for more information.

-----

----



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



--------

# Image Component

A versatile and adaptable image component designed for web and app design. It supports various use cases such as thumbnails, avatars, expandable images, and more. The component ensures flexibility, responsiveness, and accessibility, making it suitable for diverse scenarios.

## Usage

Import the `Image` component into your React file:

```jsx
import { Image } from './Image';
```

Use it within your JSX to display images:

```jsx
<Image
  src="https://via.placeholder.com/300x200"
  alt="Sample Image"
  variant="thumbnail"
  caption="This is a thumbnail image."
/>
```

## Props

| Prop          | Type                                         | Default           | Description                                                  |
| ------------- | -------------------------------------------- | ----------------- | ------------------------------------------------------------ |
| src           | `string`                                     | **Required**      | Source URL of the image.                                     |
| alt           | `string`                                     | **Required**      | Alternative text for the image, crucial for accessibility and SEO. |
| width         | `string` \| `number`                         | `auto`            | Width of the image. Can be in pixels, percentages, or responsive units (e.g., `300`, `50%`, `10vw`). |
| height        | `string` \| `number`                         | `auto`            | Height of the image. Can be in pixels, percentages, or responsive units (e.g., `200`, `50%`, `10vh`). |
| loading       | `oneOf(['lazy', 'eager'])`                   | `'lazy'`          | Loading behavior. `'lazy'` defers loading until the image is near the viewport. `'eager'` loads immediately. |
| title         | `string`                                     | `undefined`       | Tooltip text that appears when hovering over the image.      |
| caption       | `string`                                     | `undefined`       | Caption text displayed below the image.                      |
| variant       | `oneOf(['thumbnail', 'avatar', 'expanded'])` | `'thumbnail'`     | Variant of the image. Determines styling and behavior.       |
| aspectRatio   | `oneOf(['16by9', '4by3', '1by1'])`           | `undefined`       | Aspect ratio of the image to maintain consistent dimensions. |
| crop          | `oneOf(['center', 'top', 'left'])`           | `'center'`        | Crop position of the image within its container.             |
| fallbackSrc   | `string`                                     | `'/fallback.jpg'` | Fallback image source if the main image fails to load.       |
| srcSet        | `string`                                     | `undefined`       | `srcSet` attribute for responsive images, allowing different image sizes for various screen resolutions. |
| sizes         | `string`                                     | `undefined`       | `sizes` attribute defining the display size of the image for different viewport conditions. |
| lazyLoad      | `bool`                                       | `true`            | Enables or disables lazy loading of the image.               |
| onClickExpand | `function`                                   | `undefined`       | Function to handle the expand action when the image is clicked. Useful for integrating with modals or lightboxes. |
| className     | `string`                                     | `''`              | Additional CSS classes for custom styling.                   |
| style         | `object`                                     | `{}`              | Inline styles for custom styling.                            |

## Examples

### Thumbnail Variant

```jsx
<Image
  src="https://via.placeholder.com/300x200"
  alt="Thumbnail Image"
  variant="thumbnail"
  caption="This is a thumbnail image."
/>
```

### Avatar Variant

```jsx
<Image
  src="https://via.placeholder.com/150"
  alt="User Avatar"
  variant="avatar"
  caption="User Avatar"
/>
```

### Expanded Variant

```jsx
<Image
  src="https://via.placeholder.com/800x600"
  alt="Expanded Image"
  variant="expanded"
  caption="This is an expanded image."
  onClickExpand={() => console.log('Image expanded')}
/>
```

### Image with Aspect Ratio

```jsx
<Image
  src="https://via.placeholder.com/400x300"
  alt="16 by 9 Image"
  variant="thumbnail"
  aspectRatio="16by9"
  caption="Image with 16:9 aspect ratio."
/>
```

### Image with Crop

```jsx
<Image
  src="https://via.placeholder.com/400x300"
  alt="Cropped Image"
  variant="thumbnail"
  crop="top"
  caption="Image cropped from the top."
/>
```

### Image with Fallback

```jsx
<Image
  src="https://invalid-url.com/image.jpg"
  alt="Image with fallback"
  variant="thumbnail"
  fallbackSrc="https://via.placeholder.com/300x200?text=Fallback+Image"
  caption="This image failed to load and shows a fallback."
/>
```

### Responsive Image

```jsx
<Image
  src="https://via.placeholder.com/800x600"
  alt="Responsive Image"
  variant="thumbnail"
  srcSet="
    https://via.placeholder.com/400x300 400w,
    https://via.placeholder.com/800x600 800w,
    https://via.placeholder.com/1200x900 1200w
  "
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
  caption="This image is responsive using srcSet and sizes."
/>
```

### Click to Expand Image

```jsx
<Image
  src="https://via.placeholder.com/600x400"
  alt="Clickable Image"
  variant="thumbnail"
  caption="Clicking this image will expand it."
  onClickExpand={() => alert('Image clicked to expand!')}
/>
```

## Notes

- **Variants**: The `variant` prop allows you to switch between different display modes such as `thumbnail`, `avatar`, and `expanded`, each catering to specific use cases.
- **Responsive Behavior**: Utilize the `srcSet` and `sizes` props to ensure images are optimized for various screen sizes and resolutions.
- **Loading States**: The component handles loading and error states gracefully, displaying placeholders or fallback images as needed.
- **Accessibility**: Always provide meaningful `alt` text for images to enhance accessibility and SEO. If the image is interactive, ensure it is focusable and operable via keyboard.
- **Interaction Effects**: The `onClickExpand` prop enables integration with modals or lightboxes, allowing users to view images in greater detail.
- **Customization**: Use the `className` and `style` props to apply additional custom styles beyond the predefined variants and colors.
- **Global Styles**: The component inherits typography and color styles from the global CSS variables defined in your theme, ensuring consistency across your application.


-------



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

----

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



------



# Divider Component

A simple horizontal line used to separate content within your application.

## Installation

Ensure you have the `Divider` component files (`Divider.jsx`, `Divider.css`) in your project directory.

## Usage

Import the `Divider` component into your React component:

```jsx
import { Divider } from './Divider';
```

Then use it within your JSX:

```jsx
<Divider />
```

## Props

| Prop      | Type                                  | Default   | Description                                                  |
| --------- | ------------------------------------- | --------- | ------------------------------------------------------------ |
| thickness | `oneOf(['thin', 'normal', 'bold'])`   | `normal`  | Thickness of the divider line.                               |
| width     | `oneOf(['small', 'medium', 'large'])` | `medium`  | Width of the divider: `small` (25%), `medium` (50%), `large` (75%). |
| align     | `oneOf(['left', 'center', 'right'])`  | `center`  | Alignment of the divider within its container.               |
| color     | `oneOf([...])`                        | `neutral` | Color of the divider line. Uses global CSS variables.        |
| className | `string`                              | `''`      | Additional CSS classes for custom styling.                   |
| style     | `object`                              | `{}`      | Inline styles for custom styling.                            |

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

### Thin Small Left Aligned Divider

```jsx
<Divider thickness="thin" width="small" align="left" color="info" />
```

### Normal Medium Center Aligned Divider

```jsx
<Divider thickness="normal" width="medium" align="center" color="warning" />
```

### Bold Large Right Aligned Divider

```jsx
<Divider thickness="bold" width="large" align="right" color="success" />
```

### Interactive Divider

Use the interactive story in Storybook to dynamically adjust the `Divider` props.

## Styling

The `Divider` component utilizes global CSS variables for colors and spacing. Ensure that the following variables are defined in your global CSS (`light.css`):

```css
:root {
  --neutral-color: #a4a4a4;
  --info-color: #008699;
  --warning-color: #FF6F61;
  --alert-color: #ffcc00;
  --success-color: #00B4B8;
  --dark-color: #2C2C2C;
  /* Add other color variables as needed */
  
  --spacing-md: 16px;
  --spacing-sm: 8px;
  --spacing-xs: 4px;
  
  --transition-speed: 0.3s;
}
```

## Responsive Design

The `Divider` component is responsive and adjusts its width on smaller screens:

- **Small Screens (`max-width: 768px`):**
  - `small`, `medium`, and `large` widths change to `100%`.
  - Padding is reduced for better spacing.

## Notes

- The `Divider` is a self-closing component (`<Divider />`) and does not contain any children.
- Combine props to achieve the desired appearance and alignment.
- Use the `className` and `style` props for additional customizations as needed.



-----



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



-------



# Checkbox Component

A customizable checkbox component for forms and interactive elements.

## Usage

Import the `Checkbox` component into your React file:

```jsx
import { Checkbox } from './Checkbox';
```

Use it within your JSX:

```jsx
<Checkbox
  label="Accept Terms and Conditions"
  checked={isChecked}
  onChange={handleCheckboxChange}
/>
```

## Props

| Prop      | Type                                  | Default      | Description                                              |
| --------- | ------------------------------------- | ------------ | -------------------------------------------------------- |
| label     | `string`                              | **Required** | Label text displayed next to the checkbox.               |
| checked   | `boolean`                             | `false`      | Controls the checked state of the checkbox.              |
| onChange  | `function`                            | `undefined`  | Handler function called when the checkbox state changes. |
| variant   | `oneOf(['primary', 'secondary'])`     | `primary`    | Style variant of the checkbox.                           |
| size      | `oneOf(['small', 'normal', 'large'])` | `normal`     | Size of the checkbox.                                    |
| color     | `oneOf([...])`                        | `info`       | Color of the checkbox, based on global CSS variables.    |
| rounded   | `boolean`                             | `false`      | If `true`, the checkbox will have rounded corners.       |
| disabled  | `boolean`                             | `false`      | If `true`, the checkbox is disabled.                     |
| className | `string`                              | `''`         | Additional CSS classes for custom styling.               |
| style     | `object`                              | `{}`         | Inline styles for custom styling.                        |

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

### Basic Checkbox

```jsx
<Checkbox
  label="Subscribe to newsletter"
  checked={isSubscribed}
  onChange={handleSubscriptionChange}
/>
```

### Small Secondary Rounded Checkbox

```jsx
<Checkbox
  label="Enable notifications"
  variant="secondary"
  size="small"
  color="success"
  rounded
  checked={isEnabled}
  onChange={handleEnableChange}
/>
```

### Large Disabled Checkbox

```jsx
<Checkbox
  label="I agree to the terms and conditions"
  size="large"
  color="warning"
  disabled
/>
```

### Interactive Checkbox

Use the interactive story in Storybook to dynamically adjust the `Checkbox` props.

## Notes

- Combine props to achieve the desired appearance and functionality.
- Utilize the `className` and `style` props for additional customizations as needed.
- Refer to Storybook for interactive examples and detailed prop options.







------



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

--------



# Button Component

A versatile button component with customizable variants, colors, sizes, and styles. Ideal for triggering actions and navigating users within your application.

## Usage

Import the `Button` component into your React file:

```jsx
import { Button } from './Button';
```

Use it within your JSX:

```jsx
<Button label="Click Me" />
```

## Props

| Prop      | Type                                                         | Default     | Description                                                  |
| --------- | ------------------------------------------------------------ | ----------- | ------------------------------------------------------------ |
| variant   | `oneOf(['primary', 'secondary'])`                            | `primary`   | Style variant of the button. `primary` for main actions, `secondary` for secondary actions. |
| color     | `oneOf(['info', 'warning', 'alert', 'success', 'neutral', 'dark'])` | `info`      | Color theme of the button based on global CSS variables.     |
| size      | `oneOf(['small', 'medium', 'large'])`                        | `medium`    | Size of the button. `small`, `medium`, or `large`.           |
| label     | `string`                                                     | `''`        | Text label displayed on the button.                          |
| noBorder  | `boolean`                                                    | `false`     | If `true`, the button will have no border.                   |
| children  | `node`                                                       | `undefined` | Content inside the button. Overrides the `label` prop if provided. |
| className | `string`                                                     | `''`        | Additional CSS classes for custom styling.                   |
| style     | `object`                                                     | `{}`        | Inline styles for custom styling.                            |

## Examples

### Primary Button

```jsx
<Button label="Submit" variant="primary" color="success" />
```

### Secondary Large Button with No Border

```jsx
<Button
  label="Cancel"
  variant="secondary"
  size="large"
  color="warning"
  noBorder
/>
```

### Small Info Button with Custom Content

```jsx
<Button size="small" color="info">
  <FaInfoCircle /> Info
</Button>
```

### Custom Styled Button

```jsx
<Button
  label="Custom"
  variant="primary"
  color="dark"
  style={{ backgroundColor: '#333', borderRadius: '8px' }}
/>
```

## Notes

- The `children` prop takes precedence over the `label` prop. Use `children` to include icons or other elements inside the button.
- Utilize the `className` and `style` props for additional customizations beyond the predefined variants and colors.
- Ensure that the global CSS variables for colors are defined to apply the correct color themes.
- Refer to Storybook for interactive examples and detailed prop options.



----



# Audio Component

A customizable audio player component with play/pause controls, volume adjustment, and seek functionality.

## Usage

Import the `Audio` component into your React file:

```jsx
import { Audio } from './Audio';
```

Use it within your JSX to embed an audio player:

```jsx
<Audio src="https://www.example.com/path-to-audio-file.mp3" />
```

## Props

| Prop      | Type                         | Default          | Description                                |
| --------- | ---------------------------- | ---------------- | ------------------------------------------ |
| src       | `string`                     | **Required**     | Source URL of the audio file.              |
| autoPlay  | `boolean`                    | `false`          | Automatically play the audio on load.      |
| loop      | `boolean`                    | `false`          | Loop the audio playback continuously.      |
| muted     | `boolean`                    | `false`          | Mute the audio by default.                 |
| size      | `oneOf(['small', 'medium'])` | `medium`         | Size of the audio player.                  |
| color     | `oneOf([...])`               | `classy-color-1` | Color theme for the control icons.         |
| className | `string`                     | `''`             | Additional CSS classes for custom styling. |
| style     | `object`                     | `{}`             | Inline styles for custom styling.          |

### `color` Options

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

### Basic Audio Player

```jsx
<Audio src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
```

### Autoplay and Looping Audio

```jsx
<Audio
  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  autoPlay
  loop
  color="classy-color-3"
/>
```

### Small Sized Muted Audio Player

```jsx
<Audio
  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  size="small"
  muted
  color="classy-color-2"
/>
```

### Customized Audio Player with Styles

```jsx
<Audio
  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  size="medium"
  color="classy-color-1"
  style={{ border: '2px solid var(--classy-color-1)', borderRadius: '8px' }}
/>
```

### Interactive Audio Player

Use the interactive story in Storybook to dynamically adjust the `Audio` props and see real-time changes.

## Notes

- The `Audio` component utilizes [react-icons](https://react-icons.github.io/react-icons/) for control icons. Ensure you have `react-icons` installed in your project:

  ```bash
  npm install react-icons
  # or
  yarn add react-icons
  ```

- Combine props to achieve the desired appearance and functionality.

- Use the `className` and `style` props for additional customizations as needed.

- Refer to Storybook for interactive examples and detailed prop options.

- 
