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