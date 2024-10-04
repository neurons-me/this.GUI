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

---
