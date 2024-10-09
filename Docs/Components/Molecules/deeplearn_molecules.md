```jsx
// src/stories/Molecules/index.js
// Import all components as named exports
import { Navbar } from './Navbar/Navbar';
import { Sidebar } from './Sidebar/Sidebar';
import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';
import { Dropdown } from './Dropdown/Dropdown';
import { InputGroup } from './InputGroup/InputGroup';
import { InputWithLabel } from './InputWithLabel/InputWithLabel';
import { SearchBar } from './SearchBar/SearchBar';
import { FileUpload } from './FileUpload/FileUpload';
import { FormField } from './FormField/FormField';
import { IconButton } from './IconButton/IconButton';
import { ButtonGroup } from './ButtonGroup/ButtonGroup';
import { ImageWithCaption } from './ImageWithCaption/ImageWithCaption';
import { VideoWithDescription } from './VideoWithDescription/VideoWithDescription';
import { AvatarWithName } from './AvatarWithName/AvatarWithName';
import { AudioPlayer } from './AudioPlayer/AudioPlayer';
import { Card } from './Card/Card';
import { MediaCard } from './MediaCard/MediaCard';
import { List } from './List/List';
import { Accordion } from './Accordion/Accordion';
import { Notification } from './Notification/Notification';
import { Modal } from './Modal/Modal';
import { DataTable } from './DataTable/DataTable';
import { PricingTable } from './PricingTable/PricingTable';
import { ComparisonTable } from './ComparisonTable/ComparisonTable';
import { SelectTheme } from './SelectTheme/SelectTheme'; 

// Flattened export of all components
const Molecules = {
  Navbar,
  Sidebar,
  Dropdown,
  Breadcrumbs,
  InputGroup,
  InputWithLabel,
  SearchBar,
  SelectTheme,  
  FileUpload,
  FormField,
  IconButton,
  ButtonGroup,
  ImageWithCaption,
  VideoWithDescription,
  AvatarWithName,
  AudioPlayer,
  Card,
  MediaCard,
  List,
  Accordion,
  Notification,
  Modal,
  DataTable,
  PricingTable,
  ComparisonTable,
};

export default Molecules;
```

```js
const Molecules = {
  "Molecules": {
    "Navigation": [
      { name: "Navbar", paths: { css: "./Navbar/Navbar.css", globalCss: "styles/global.css", jsx: "./Navbar/Navbar.jsx", stories: "./Navbar/Navbar.stories.jsx" }},
      { name: "Sidebar", paths: { css: "./Sidebar/Sidebar.css", globalCss: "styles/global.css", jsx: "./Sidebar/Sidebar.jsx", stories: "./Sidebar/Sidebar.stories.jsx" }},
      { name: "Breadcrumbs", paths: { css: "./Breadcrumbs/Breadcrumbs.css", globalCss: "styles/global.css", jsx: "./Breadcrumbs/Breadcrumbs.jsx", stories: "./Breadcrumbs/Breadcrumbs.stories.jsx" }},
    ],
    "Menus": [
      { name: "Dropdown", paths: { css: "./Dropdown/Dropdown.css", globalCss: "styles/global.css", jsx: "./Layout/Dropdown/Dropdown.jsx", stories: "src/stories/Layout/Dropdown/Dropdown.stories.jsx" }},
    ],
    "FormElements": [
      { name: "InputGroup ", paths: { css: "./InputGroup/InputGroup.css", globalCss: "styles/global.css", jsx: "./InputGroup/InputGroup.jsx", stories: "src/stories/Molecules/InputGroup/InputGroup.stories.jsx" }},
      { name: "InputWithLabel", paths: { css: "./InputWithLabel/InputWithLabel.css", globalCss: "styles/global.css", jsx: "./InputWithLabel/InputWithLabel.jsx", stories: "src/stories/Molecules/InputWithLabel/InputWithLabel.stories.jsx" }},
      { name: "SearchBar", paths: { css: "./SearchBar/SearchBar.css", globalCss: "styles/global.css", jsx: "./SearchBar/SearchBar.jsx", stories: "src/stories/Molecules/SearchBar/SearchBar.stories.jsx" }},
      { name: "FileUpload", paths: { css: "./FileUpload/FileUpload.css", globalCss: "styles/global.css", jsx: "./FileUpload/FileUpload.jsx", stories: "src/stories/Molecules/FileUpload/FileUpload.stories.jsx" }},
      { name: "FormField", paths: { css: "./FormField/FormField.css", globalCss: "styles/global.css", jsx: "./FormField/FormField.jsx", stories: "src/stories/Molecules/FormField/FormField.stories.jsx" }},
    ],
    "ButtonsWithIcons": [
      { name: "IconButton", paths: { css: "./IconButton/IconButton.css", globalCss: "styles/global.css", jsx: "./IconButton/IconButton.jsx", stories: "src/stories/Molecules/IconButton/IconButton.stories.jsx" }},
      { name: "ButtonGroup", paths: { css: "./ButtonGroup/ButtonGroup.css", globalCss: "styles/global.css", jsx: "./ButtonGroup/ButtonGroup.jsx", stories: "src/stories/Molecules/ButtonGroup/ButtonGroup.stories.jsx" }},
    ],
    "Media": [
      { name: "ImageWithCaption", paths: { css: "./ImageWithCaption/ImageWithCaption.css", globalCss: "styles/global.css", jsx: "./ImageWithCaption/ImageWithCaption.jsx", stories: "src/stories/Molecules/ImageWithCaption/ImageWithCaption.stories.jsx" }},
      { name: "VideoWithDescription", paths: { css: "./VideoWithDescription/VideoWithDescription.css", globalCss: "styles/global.css", jsx: "./VideoWithDescription/VideoWithDescription.jsx", stories: "src/stories/Molecules/VideoWithDescription/VideoWithDescription.stories.jsx" }},
      { name: "AudioPlayer", paths: { css: "./AudioPlayer/AudioPlayer.css", globalCss: "styles/global.css", jsx: "./AudioPlayer/AudioPlayer.jsx", stories: "src/stories/Molecules/AudioPlayer/AudioPlayer.stories.jsx" }},
    ],
    "Display": [
      { name: "SelectTheme", paths: { css: "./SelectTheme/SelectTheme.css", globalCss: "styles/global.css", jsx: "./SelectTheme/SelectTheme.jsx", stories: "src/stories/Molecules/SelectTheme/SelectTheme.stories.jsx" }},
      { name: "Card", paths: { css: "./Card/Card.css", globalCss: "styles/global.css", jsx: "./Card/Card.jsx", stories: "./Card/Card.stories.jsx" }},
      { name: "MediaCard", paths: { css: "./MediaCard/MediaCard.css", globalCss: "styles/global.css", jsx: "./MediaCard/MediaCard.jsx", stories: "./MediaCard/MediaCard.stories.jsx" }},
      { name: "List", paths: { css: "./List/List.css", globalCss: "styles/global.css", jsx: "./List/List.jsx", stories: "./List/List.stories.jsx" }},
      { name: "Accordion", paths: { css: "./Accordion/Accordion.css", globalCss: "styles/global.css", jsx: "./Accordion/Accordion.jsx", stories: "./Accordion/Accordion.stories.jsx" }},
      { name: "AvatarWithName", paths: { css: "./AvatarWithName/AvatarWithName.css", globalCss: "styles/global.css", jsx: "./AvatarWithName/AvatarWithName.jsx", stories: "src/stories/Molecules/AvatarWithName/AvatarWithName.stories.jsx" }},
    ],
    "FeedbackMolecules": [
      { name: "Notification", paths: { css: "./Notification/Notification.css", globalCss: "styles/global.css", jsx: "./Notification/Notification.jsx", stories: "src/stories/Molecules/Notification/Notification.stories.jsx" }},
      { name: "Modal", paths: { css: "./Modal/Modal.css", globalCss: "styles/global.css", jsx: "./Modal/Modal.jsx", stories: "src/stories/Molecules/Modal/Modal.stories.jsx" }},
    ],
    "Tables": [
      { name: "DataTable", paths: { css: "./DataTable/DataTable.css", globalCss: "styles/global.css", jsx: "./DataTable/DataTable.jsx", stories: "./DataTable/DataTable.stories.jsx" }},
      { name: "PricingTable", paths: { css: "./PricingTable/PricingTable.css", globalCss: "styles/global.css", jsx: "./PricingTable/PricingTable.jsx", stories: "./PricingTable/PricingTable.stories.jsx" }},
      { name: "ComparisonTable", paths: { css: "./ComparisonTable/ComparisonTable.css", globalCss: "styles/global.css", jsx: "./ComparisonTable/ComparisonTable.jsx", stories: "./ComparisonTable/ComparisonTable.stories.jsx" }},
    ]
  }
}

export default Molecules;
```



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

| Prop                | Type      | Default   | Description                                                  |
| ------------------- | --------- | --------- | ------------------------------------------------------------ |
| `allowMultipleOpen` | `boolean` | `false`   | Allows multiple accordion sections to be open at once. If `false`, only one section is open at a time. |
| `items`             | `array`   | Required  | Array of accordion items, each containing `title` (string) and `content` (node) for the section. |
| `variant`           | `string`  | `primary` | Determines the visual style of the accordion. Options: `primary`, `secondary`. |
| `color`             | `string`  | `primary` | Applies color to the accordion header. Options include `primary`, `secondary`, `info`, `warning`, `alert`, `success`, `neutral`, `dark`, etc. |
| `showArrow`         | `boolean` | `true`    | Controls whether an arrow is displayed to indicate expandable sections. |
| `border`            | `boolean` | `false`   | If `true`, adds a border around the accordion content.       |

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



```css
 /*this.GUI/src/stories/Molecules/Accordion/Accordion.css*/
.accordion {
  /* Default styles for Accordion */
}
```

```jsx
//this.GUI/src/stories/Molecules/Accordion/Accordion.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Accordion.css';

/**
 * Accordion component
 */
export const Accordion = (props) => {
  return (
    <div className="accordion" {...props}>
      {/* Component implementation */}
    </div>
  );
};

Accordion.propTypes = {
  // Define prop types here
};

Accordion.defaultProps = {
  // Define default props here
};

export default Accordion;

```

```jsx
//this.GUI/src/stories/Molecules/Accordion/Accordion.stories.jsx
import { Accordion } from './Accordion';

// Storybook configuration for Accordion component
export default {
  title: 'Molecules/ContentDisplay/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // Define argTypes here
  },
};

export const Default = {
  args: {
    // Define default args here
  },
};
```

-----------

Here’s a detailed Markdown guide for the AvatarWithName component:

# AvatarWithName Component

The `AvatarWithName` component combines an avatar (image or default icon) with a name, offering different layout options and customizable styles. It also supports displaying a modal when the avatar is clicked, providing an enlarged view of the avatar and name.

##  Features

\- ***\*Default avatar icon\**** when no image is provided.

\- ***\*Name position variants\****: Below or to the side of the avatar.

\- ***\*Size variants\****: Small, medium, and large.

\- ***\*Modal view\****: Click on the avatar to display a larger version along with the name.

\- ***\*Responsive\****: Adapts to various screen sizes.

## Usage

######  Basic Example

```jsx
import React from 'react';
import { AvatarWithName } from './AvatarWithName';

const App = () => (
 <AvatarWithName
  name="John Doe"
  imageSrc="https://via.placeholder.com/150"
 />
);
export default App;
```

**Name Position**

You can position the name either **below** the avatar or **to the side** using the namePosition prop.

```jsx
<AvatarWithName
 name="John Doe"
 imageSrc="https://via.placeholder.com/150"
 namePosition="side"
/>
```

**Size Variants**

Control the size of the avatar using the size prop. Available options are 'small', 'medium', and 'large'.

```jsx
<AvatarWithName
 name="John Doe"
 imageSrc="https://via.placeholder.com/150"
 size="large"
/>
```

**Default Avatar**

If no image is provided via the imageSrc prop, a default avatar icon is displayed.

```jsx
<AvatarWithName name="Jane Smith" />
```

**Modal View on Click**

When you click on the avatar, a modal opens showing a larger version of the avatar and name. This functionality is built-in, but you can override it with your own click handler using the onClick prop.

```jsx
const handleClick = () => {
 alert('Avatar clicked!');
};
<AvatarWithName
 name="John Doe"
 imageSrc="https://via.placeholder.com/150"
 onClick={handleClick}
/>
```

**Example with All Props**

```jsx
<AvatarWithName
 name="John Doe"
 imageSrc="https://via.placeholder.com/150"
 namePosition="side"
 size="large"
 onClick={() => console.log('Avatar clicked!')}
/>
```

**Customization**

**CSS Variables**

You can customize the appearance of the AvatarWithName component by adjusting the following CSS variables in your theme:

​	•	--spacing-md: Adjusts the gap between the avatar and name.

​	•	--font-size-small, --font-size-medium, --font-size-large: Controls the font size of the name.

​	•	--border-radius: Adjusts the avatar’s border radius.

​	•	--text-color: Customizes the text color for the name.

**Modal Styles**

The modal that appears when clicking the avatar can be customized with the following CSS classes:

​	•	.avatar-modal: Styles for the modal backdrop.

​	•	.avatar-modal__content: Container for the modal content.

​	•	.avatar-modal__avatar: Styles for the enlarged avatar.

​	•	.avatar-modal__name: Styles for the name in the modal.

**Conclusion**

The AvatarWithName component is a versatile and customizable component for displaying an avatar with a name. Its built-in modal functionality and layout options make it easy to integrate into any user profile or contact section.

This guide provides a comprehensive explanation of the `AvatarWithName` component, covering its props, customization options, and practical usage examples. 

```css
/* this.GUI/src/stories/Molecules/AvatarWithName/AvatarWithName.css */
/* Base Styles */
.avatar-with-name {
  display: inline-flex; /* This ensures that it behaves like an inline element */
  align-items: center;
  gap: 8px; /* Reduced gap between the avatar and the name */
  cursor: pointer;
}

/* Ensure no auto-centering or alignment issues */
.avatar-with-name--below {
  flex-direction: column; /* Stack the name below the avatar */
  align-items: center; /* Keep the avatar and name centered with respect to each other */
  text-align: center;
}

.avatar-with-name--side {
  flex-direction: row; /* Place the name next to the avatar */
  text-align: left; /* Ensure text is aligned correctly when the name is to the side */
  align-items: center; /* Keep the avatar and name aligned vertically */
}

/* Size Variants */
.avatar-with-name--small .avatar-with-name__avatar img,
.avatar-with-name--small .avatar-with-name__avatar svg {
  width: 40px;
  height: 40px;
}

.avatar-with-name--medium .avatar-with-name__avatar img,
.avatar-with-name--medium .avatar-with-name__avatar svg {
  width: 80px;
  height: 80px;
}

.avatar-with-name--large .avatar-with-name__avatar img,
.avatar-with-name--large .avatar-with-name__avatar svg {
  width: 120px;
  height: 120px;
}

/* Name styling */
.avatar-with-name__name {
  font-size: 1.1rem;
  color: var(--text-color, #2C2C2C);
  margin-top: 2px;
}

/* Avatar styling */
.avatar-with-name__avatar {
  border-radius: 50%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  overflow: hidden;
}

.avatar__default-icon {
  width: 100%;
  height: 100%;
}

/* Modal Styles */
.avatar-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.avatar-modal__content {
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  position: relative;
  max-width: 300px;
  width: 100%;
}

.avatar-modal__avatar-container {
  display: flex;
  justify-content: center; /* Center the avatar in the modal */
  align-items: center;
}

.avatar-modal__avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.avatar-modal__name {
  margin-top: 16px;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-color, #2C2C2C);
}

.avatar-modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .avatar-with-name--large .avatar-with-name__avatar img,
  .avatar-with-name--large .avatar-with-name__avatar svg {
    width: 100px;
    height: 100px;
  }

  .avatar-modal__avatar {
    width: 120px;
    height: 120px;
  }
}
```

```jsx
//this.GUI/src/stories/Molecules/AvatarWithName/AvatarWithName.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AvatarWithName.css';

const defaultAvatar = (
  <svg
    className="avatar__default-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M14.5 9a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
    <path d="M12 14c-3.03 0-5.47 1.21-6 3h12c-.53-1.79-2.97-3-6-3z"></path>
  </svg>
);

export const AvatarWithName = ({ imageSrc, name, namePosition, size, onClick }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div
        className={`avatar-with-name avatar-with-name--${namePosition} avatar-with-name--${size}`}
        onClick={handleModalToggle}
      >
        <div className="avatar-with-name__avatar">
          {imageSrc ? (
            <img src={imageSrc} alt={name} />
          ) : (
            defaultAvatar /* Display the default avatar if no imageSrc is provided */
          )}
        </div>
        <div className="avatar-with-name__name">{name}</div>
      </div>

      {showModal && (
        <div className="avatar-modal" onClick={handleModalToggle}>
          <div className="avatar-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="avatar-modal__close" onClick={handleModalToggle}>
              &times;
            </button>
            <div className="avatar-modal__avatar-container">
              <div className="avatar-modal__avatar">
                {imageSrc ? (
                  <img src={imageSrc} alt={name} />
                ) : (
                  defaultAvatar /* Use the default avatar in the modal if no imageSrc is provided */
                )}
              </div>
            </div>
            <div className="avatar-modal__name">{name}</div>
          </div>
        </div>
      )}
    </>
  );
};

AvatarWithName.propTypes = {
  imageSrc: PropTypes.string, // Image URL for the avatar
  name: PropTypes.string.isRequired, // The name to display
  namePosition: PropTypes.oneOf(['below', 'side']), // Position of the name relative to the avatar
  size: PropTypes.oneOf(['small', 'medium', 'large']), // Size of the avatar
  onClick: PropTypes.func, // Function to execute on click
};

AvatarWithName.defaultProps = {
  namePosition: 'below',
  size: 'medium',
};
```

```jsx
//this.GUI/src/stories/Molecules/AvatarWithName/AvatarWithName.stories.jsx
import React from 'react';
import { AvatarWithName } from './AvatarWithName';

export default {
  title: 'Molecules/Display/AvatarWithName',
  component: AvatarWithName,
  argTypes: {
    imageSrc: { control: 'text', defaultValue: 'https://via.placeholder.com/150' },
    name: { control: 'text', defaultValue: 'John Doe' },
    namePosition: { control: 'select', options: ['below', 'side'], defaultValue: 'below' },
    size: { control: 'select', options: ['small', 'medium', 'large'], defaultValue: 'medium' },
  },
};

export const Default = (args) => <AvatarWithName {...args} />;

export const SideName = (args) => <AvatarWithName {...args} namePosition="side" />;
export const LargeAvatar = (args) => <AvatarWithName {...args} size="large" />;
export const SmallAvatar = (args) => <AvatarWithName {...args} size="small" />;
```

------

 Here’s a detailed Markdown file explaining how to use the Breadcrumbs component.

# Breadcrumbs Component

The `Breadcrumbs` component is a navigation aid that helps users understand and navigate the hierarchy of a site. It displays the current page's location within a navigational hierarchy, making it easier to backtrack or visit previous sections.

###  Features

***Customizable separator*** between breadcrumb items.

 **Color variants** for different themes and styles.

**Size variants** for adjusting the breadcrumb's text size.

\-Automatically highlights the ***\*active breadcrumb\**** with bold text.

\- Handles breadcrumb ***\*click events\**** with an `onItemClick` callback.

# Usage

###### Basic Example Usage

```jsx
import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
const breadcrumbItems = [
 { label: 'Home', link: '/' },
 { label: 'Products', link: '/products' },
 { label: 'Laptops', link: '/products/laptops', active: true }, // Mark this as active
 { label: 'MacBook Pro' }, // No link, represents the current page
];
const App = () => (
 <Breadcrumbs items={breadcrumbItems} />
);
export default App;
```

**Custom Separator**

You can change the separator between breadcrumbs using the separator prop.

```jsx
<Breadcrumbs items={breadcrumbItems} separator=">" />
```

**Color Variants**

Use the color prop to change the color of the breadcrumbs to match your theme.

```jsx
<Breadcrumbs items={breadcrumbItems} color="success" />
```

Available color options:

​	•	primary

​	•	secondary

​	•	info

​	•	warning

​	•	alert

​	•	success

​	•	neutral

​	•	dark

​	•	classy-color-1, classy-color-2, etc.

​	•	small-switch-color-1, small-switch-color-2

​	•	natural-color-1, natural-color-2, natural-color-3

​	•	grey-friend-1, grey-friend-2

​	•	shade-1, shade-2, shade-3, shade-4

**Size Variants**

Adjust the size of the breadcrumb text with the size prop. Available options are 'small', 'medium', and 'large'.

```jsx
<Breadcrumbs items={breadcrumbItems} size="large" />
```

**Handling Clicks**

You can capture click events for each breadcrumb by passing an onItemClick callback function. This can be useful for tracking user navigation or performing specific actions when breadcrumbs are clicked.

```jsx
const handleBreadcrumbClick = (item) => {
 console.log(`Breadcrumb clicked: ${item.label}`);
};

<Breadcrumbs items={breadcrumbItems} onItemClick={handleBreadcrumbClick} />
```

**Example with All Props**

```jsx
<Breadcrumbs
 items={breadcrumbItems}
 separator=">"
 color="info"
 size="large"
 onItemClick={handleBreadcrumbClick}
/>
```

**Customization**

The Breadcrumbs component uses CSS variables and classes for easy customization. You can modify the default styles by updating or overriding the corresponding CSS variables or classes in your theme.

**CSS Variables**

​	•	--font-size-small: Font size for small breadcrumbs.

​	•	--font-size-medium: Font size for medium breadcrumbs.

​	•	--font-size-large: Font size for large breadcrumbs.

​	•	--primary-color, --secondary-color, etc.: Theme colors that the component adapts to.

**Conclusion**

The Breadcrumbs component provides a flexible, customizable navigation tool for your web applications. With easy-to-use props for separators, colors, sizes, and click handlers, it’s a versatile component that can seamlessly integrate into any design.

This markdown document provides a clear and concise guide to using the `Breadcrumbs` component, including its props, customization options, and usage examples. 

```css
/*this.GUI/src/stories/Molecules/Breadcrumbs/Breadcrumbs.css*/ 
Base Styles */
.breadcrumbs {
  display: flex;
  align-items: center;
  font-size: var(--font-size-medium);
  color: var(--text-color);
}

.breadcrumbs__item {
  display: flex;
  align-items: center;
}

.breadcrumbs__link {
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  background: none;
  border: none;
  font-size: inherit;
  padding: 0;
}

.breadcrumbs__separator {
  margin: 0 8px;
}

/* Active State (Bold Text) */
.breadcrumbs__active {
  font-weight: bold;
}

/* Size Variants */
.breadcrumbs--small {
  font-size: 0.75rem;
}

.breadcrumbs--medium {
  font-size: 1rem;
}

.breadcrumbs--large {
  font-size: 1.25rem;
}

/* Color Variants for Breadcrumb Links */
.breadcrumbs--primary .breadcrumbs__link {
  color: var(--primary-color);
}

.breadcrumbs--secondary .breadcrumbs__link {
  color: var(--secondary-color);
}

.breadcrumbs--info .breadcrumbs__link {
  color: var(--info-color);
}

.breadcrumbs--warning .breadcrumbs__link {
  color: var(--warning-color);
}

.breadcrumbs--alert .breadcrumbs__link {
  color: var(--alert-color);
}

.breadcrumbs--success .breadcrumbs__link {
  color: var(--success-color);
}

.breadcrumbs--neutral .breadcrumbs__link {
  color: var(--neutral-color);
}

.breadcrumbs--dark .breadcrumbs__link {
  color: var(--dark-color);
}

/* Classy Palette */
.breadcrumbs--classy-color-1 .breadcrumbs__link {
  color: var(--classy-color-1);
}

.breadcrumbs--classy-color-2 .breadcrumbs__link {
  color: var(--classy-color-2);
}

.breadcrumbs--classy-color-3 .breadcrumbs__link {
  color: var(--classy-color-3);
}

.breadcrumbs--classy-color-4 .breadcrumbs__link {
  color: var(--classy-color-4);
}

.breadcrumbs--classy-color-5 .breadcrumbs__link {
  color: var(--classy-color-5);
}

/* Small Switch Palette */
.breadcrumbs--small-switch-color-1 .breadcrumbs__link {
  color: var(--small-switch-color-1);
}

.breadcrumbs--small-switch-color-2 .breadcrumbs__link {
  color: var(--small-switch-color-2);
}

/* Natural Palette */
.breadcrumbs--natural-color-1 .breadcrumbs__link {
  color: var(--natural-color-1);
}

.breadcrumbs--natural-color-2 .breadcrumbs__link {
  color: var(--natural-color-2);
}

.breadcrumbs--natural-color-3 .breadcrumbs__link {
  color: var(--natural-color-3);
}

/* Grey Friends */
.breadcrumbs--grey-friend-1 .breadcrumbs__link {
  color: var(--grey-friend-1);
}

.breadcrumbs--grey-friend-2 .breadcrumbs__link {
  color: var(--grey-friend-2);
}

/* Shades */
.breadcrumbs--shade-1 .breadcrumbs__link {
  color: var(--shade-1);
}

.breadcrumbs--shade-2 .breadcrumbs__link {
  color: var(--shade-2);
}

.breadcrumbs--shade-3 .breadcrumbs__link {
  color: var(--shade-3);
}

.breadcrumbs--shade-4 .breadcrumbs__link {
  color: var(--shade-4);
}
```

```jsx
//this.GUI/src/stories/Molecules/Breadcrumbs/Breadcrumbs.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrumbs.css';

export const Breadcrumbs = ({ items, separator, color, size, onItemClick }) => {
  return (
    <nav className={`breadcrumbs breadcrumbs--${color} breadcrumbs--${size}`}>
      {items.map((item, index) => (
        <span key={item.label} className="breadcrumbs__item">
          <button
            className={`breadcrumbs__link ${item.active ? 'breadcrumbs__active' : ''}`}
            onClick={() => onItemClick(item)}
          >
            {item.label}
          </button>
          {index < items.length - 1 && (
            <span className="breadcrumbs__separator">{separator}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      active: PropTypes.bool, // To mark the active breadcrumb
    })
  ).isRequired,
  separator: PropTypes.string,
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2',
    'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onItemClick: PropTypes.func,
};

Breadcrumbs.defaultProps = {
  separator: '/',
  color: 'primary',
  size: 'medium',
  onItemClick: () => {}, // Default click handler does nothing
};
```

```jsx
//this.GUI/src/stories/Molecules/Breadcrumbs/Breadcrumbs.stories.jsx
import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';

export default {
  title: 'Molecules/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    separator: { control: 'text', defaultValue: '>' },
    color: {
      control: {
        type: 'select',
        options: [
          'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2',
          'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2',
          'shade-1', 'shade-2', 'shade-3', 'shade-4'
        ],
      },
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'], defaultValue: 'medium' },
    },
  },
};

const items = [
  { label: 'Home', link: '/' },
  { label: 'Products', link: '/products' },
  { label: 'Laptops', link: '/products/laptops', active: true }, // Mark this breadcrumb as active
  { label: 'MacBook Pro' }, // No link, indicates the current page
];

export const DefaultBreadcrumbs = (args) => <Breadcrumbs {...args} items={items} />;
```

-----

# **ButtonGroup Quick Guide**

**How to Use**

​	1.	**Import the** ButtonGroup **Component**:

First, import the ButtonGroup component into your file:

```jsx
import { ButtonGroup } from './ButtonGroup';
```

​	2.	**Basic Usage**:

A basic ButtonGroup with default settings can be created as follows:

```jsx
<ButtonGroup buttons={['Button 1', 'Button 2', 'Button 3']} />
```

​	3.	**Solid Variant**:

To use the solid variant with specific colors:

```jsx
<ButtonGroup
 buttons={['Primary', 'Secondary', 'Alert']}
 variant="solid"
 color="primary"
/>
```

​	4.	**Outline Variant**:

To create an outlined button group:

```jsx
<ButtonGroup
 buttons={['Info', 'Success', 'Warning']}
 variant="outline"
 color="info"
/>
```

​	5.	**Different Sizes**:

You can also set the size of the buttons to small, medium, or large:

```jsx
<ButtonGroup
 buttons={['Small Button', 'Medium Button', 'Large Button']}
 size="large"
/>
```

​	6.	**Handling Click Events**:

Add onClick handlers for each button in the group:

```jsx
<ButtonGroup
 buttons={['Save', 'Cancel']}
 onButtonClick={(label) => alert(`You clicked ${label}`)}
/>
```

**Summary:**

​	•	Choose the **variant** (solid, outline).

​	•	Set the **color** to match your theme.

​	•	Adjust the **size** based on your needs.

​	•	Handle **click events** easily for each button.

For more details, like all prop options and controls, refer to Storybook.



```css
/* this.GUI/src/stories/Molecules/ButtonGroup/ButtonGroup.css */ 
/*Base Styles */
.button-group {
  display: inline-flex;
  gap: var(--spacing-sm);
}

.button-group__button {
  padding: var(--button-padding, 8px 16px);
  border-radius: var(--border-radius, 4px);
  cursor: pointer;
  transition: background-color var(--transition-speed, 0.3s), border-color var(--transition-speed, 0.3s), color var(--transition-speed, 0.3s);
  font-size: inherit;
  border: none;
}

.button-group__button:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--focus-outline-color, rgba(0, 0, 0, 0.2));
}

/* Solid Variant */
.button-group--solid .button-group__button {
  background-color: var(--primary-color);
  color: var(--text-color-inverse);
}

.button-group--solid .button-group__button:hover {
  background-color: var(--primary-color-hover);
}

/* Size Variants */
.button-group--small .button-group__button {
  font-size: 0.75rem;
  padding: 6px 12px;
}

.button-group--medium .button-group__button {
  font-size: 1rem;
  padding: 8px 16px;
}

.button-group--large .button-group__button {
  font-size: 1.25rem;
  padding: 12px 20px;
}

/* Solid Color Variants */
.button-group--primary .button-group__button {
  background-color: var(--primary-color);
  color: var(--text-color-inverse);
}

.button-group--primary .button-group__button:hover {
  background-color: var(--primary-color-hover);
}

.button-group--secondary .button-group__button {
  background-color: var(--secondary-color);
  color: var(--text-color-inverse);
}

.button-group--secondary .button-group__button:hover {
  background-color: var(--secondary-color-hover);
}

.button-group--info .button-group__button {
  background-color: var(--info-color);
  color: var(--text-color-inverse);
}

.button-group--info .button-group__button:hover {
  background-color: var(--info-color-hover);
}

.button-group--warning .button-group__button {
  background-color: var(--warning-color);
  color: var(--text-color-inverse);
}

.button-group--warning .button-group__button:hover {
  background-color: var(--warning-color-hover);
}

.button-group--alert .button-group__button {
  background-color: var(--alert-color);
  color: var(--text-color-inverse);
}

.button-group--alert .button-group__button:hover {
  background-color: var(--alert-color-hover);
}

.button-group--success .button-group__button {
  background-color: var(--success-color);
  color: var(--text-color-inverse);
}

.button-group--success .button-group__button:hover {
  background-color: var(--success-color-hover);
}

.button-group--neutral .button-group__button {
  background-color: var(--neutral-color);
  color: var(--text-color-inverse);
}

.button-group--neutral .button-group__button:hover {
  background-color: var(--neutral-color-hover);
}

.button-group--dark .button-group__button {
  background-color: var(--dark-color);
  color: var(--text-color-inverse);
}

.button-group--dark .button-group__button:hover {
  background-color: var(--dark-color-hover);
}

/* Classy Palette Solid Variants */
.button-group--classy-color-1 .button-group__button {
  background-color: var(--classy-color-1);
  color: var(--text-color-inverse);
}

.button-group--classy-color-1 .button-group__button:hover {
  background-color: var(--classy-color-1-hover);
}

.button-group--classy-color-2 .button-group__button {
  background-color: var(--classy-color-2);
  color: var(--text-color-inverse);
}

.button-group--classy-color-2 .button-group__button:hover {
  background-color: var(--classy-color-2-hover);
}

.button-group--classy-color-3 .button-group__button {
  background-color: var(--classy-color-3);
  color: var(--text-color-inverse);
}

.button-group--classy-color-3 .button-group__button:hover {
  background-color: var(--classy-color-3-hover);
}

.button-group--classy-color-4 .button-group__button {
  background-color: var(--classy-color-4);
  color: var(--text-color-inverse);
}

.button-group--classy-color-4 .button-group__button:hover {
  background-color: var(--classy-color-4-hover);
}

.button-group--classy-color-5 .button-group__button {
  background-color: var(--classy-color-5);
  color: var(--text-color-inverse);
}

.button-group--classy-color-5 .button-group__button:hover {
  background-color: var(--classy-color-5-hover);
}

/* Small Switch Palette Solid Variants */
.button-group--small-switch-color-1 .button-group__button {
  background-color: var(--small-switch-color-1);
  color: var(--text-color-inverse);
}

.button-group--small-switch-color-1 .button-group__button:hover {
  background-color: var(--small-switch-color-1-hover);
}

.button-group--small-switch-color-2 .button-group__button {
  background-color: var(--small-switch-color-2);
  color: var(--text-color-inverse);
}

.button-group--small-switch-color-2 .button-group__button:hover {
  background-color: var(--small-switch-color-2-hover);
}

/* Natural Palette Solid Variants */
.button-group--natural-color-1 .button-group__button {
  background-color: var(--natural-color-1);
  color: var(--text-color-inverse);
}

.button-group--natural-color-1 .button-group__button:hover {
  background-color: var(--natural-color-1-hover);
}

.button-group--natural-color-2 .button-group__button {
  background-color: var(--natural-color-2);
  color: var(--text-color-inverse);
}

.button-group--natural-color-2 .button-group__button:hover {
  background-color: var(--natural-color-2-hover);
}

.button-group--natural-color-3 .button-group__button {
  background-color: var(--natural-color-3);
  color: var(--text-color-inverse);
}

.button-group--natural-color-3 .button-group__button:hover {
  background-color: var(--natural-color-3-hover);
}

/* Grey Friends Solid Variants */
.button-group--grey-friend-1 .button-group__button {
  background-color: var(--grey-friend-1);
  color: var(--text-color-inverse);
}

.button-group--grey-friend-1 .button-group__button:hover {
  background-color: var(--grey-friend-1-hover);
}

.button-group--grey-friend-2 .button-group__button {
  background-color: var(--grey-friend-2);
  color: var(--text-color-inverse);
}

.button-group--grey-friend-2 .button-group__button:hover {
  background-color: var(--grey-friend-2-hover);
}

/* Shades Solid Variants */
.button-group--shade-1 .button-group__button {
  background-color: var(--shade-1);
  color: var(--text-color-inverse);
}

.button-group--shade-1 .button-group__button:hover {
  background-color: var(--shade-1-hover);
}

.button-group--shade-2 .button-group__button {
  background-color: var(--shade-2);
  color: var(--text-color-inverse);
}

.button-group--shade-2 .button-group__button:hover {
  background-color: var(--shade-2-hover);
}

.button-group--shade-3 .button-group__button {
  background-color: var(--shade-3);
  color: var(--text-color-inverse);
}

.button-group--shade-3 .button-group__button:hover {
  background-color: var(--shade-3-hover);
}

.button-group--shade-4 .button-group__button {
  background-color: var(--shade-4);
  color: var(--text-color-inverse);
}

.button-group--shade-4 .button-group__button:hover {
  background-color: var(--shade-4-hover);
}

/* Outline Variant */
.button-group--outline .button-group__button {
  background-color: transparent;
  border: 2px solid currentColor;
  color: var(--primary-color); /* Default to primary color */
}

.button-group--outline .button-group__button:hover {
  background-color: transparent;
  border-color: var(--primary-color-hover);
  color: var(--primary-color-hover);
}

/* Primary and Secondary Outline Variants */
.button-group--primary.button-group--outline .button-group__button {
  background-color: transparent;
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.button-group--secondary.button-group--outline .button-group__button {
  background-color: transparent;
  border-color: var(--secondary-color);
  color: var(--secondary-color);
}

.button-group--primary.button-group--outline .button-group__button:hover,
.button-group--secondary.button-group--outline .button-group__button:hover {
  background-color: transparent;
  color: var(--primary-color-hover);
  border-color: var(--primary-color-hover);
}

/* Size Variants */
.button-group--small .button-group__button {
  font-size: 0.75rem;
  padding: 6px 12px;
}

.button-group--medium .button-group__button {
  font-size: 1rem;
  padding: 8px 16px;
}

.button-group--large .button-group__button {
  font-size: 1.25rem;
  padding: 12px 20px;
}

/* Color Variants */
.button-group--primary .button-group__button {
  background-color: var(--primary-color);
  color: var(--text-color-inverse);
}

.button-group--secondary .button-group__button {
  background-color: var(--secondary-color);
  color: var(--text-color-inverse);
}

/* Outline Color Variants */
.button-group--primary.button-group--outline .button-group__button {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.button-group--secondary.button-group--outline .button-group__button {
  border-color: var(--secondary-color);
  color: var(--secondary-color);
}

.button-group--info.button-group--outline .button-group__button {
  border-color: var(--info-color);
  color: var(--info-color);
}

.button-group--warning.button-group--outline .button-group__button {
  border-color: var(--warning-color);
  color: var(--warning-color);
}

.button-group--alert.button-group--outline .button-group__button {
  border-color: var(--alert-color);
  color: var(--alert-color);
}

.button-group--success.button-group--outline .button-group__button {
  border-color: var(--success-color);
  color: var(--success-color);
}

.button-group--neutral.button-group--outline .button-group__button {
  border-color: var(--neutral-color);
  color: var(--neutral-color);
}

.button-group--dark.button-group--outline .button-group__button {
  border-color: var(--dark-color);
  color: var(--dark-color);
}

/* Classy Palette Outline Variants */
.button-group--classy-color-1.button-group--outline .button-group__button {
  border-color: var(--classy-color-1);
  color: var(--classy-color-1);
}

.button-group--classy-color-2.button-group--outline .button-group__button {
  border-color: var(--classy-color-2);
  color: var(--classy-color-2);
}

.button-group--classy-color-3.button-group--outline .button-group__button {
  border-color: var(--classy-color-3);
  color: var(--classy-color-3);
}

.button-group--classy-color-4.button-group--outline .button-group__button {
  border-color: var(--classy-color-4);
  color: var(--classy-color-4);
}

.button-group--classy-color-5.button-group--outline .button-group__button {
  border-color: var(--classy-color-5);
  color: var(--classy-color-5);
}

/* Small Switch Palette Outline Variants */
.button-group--small-switch-color-1.button-group--outline .button-group__button {
  border-color: var(--small-switch-color-1);
  color: var(--small-switch-color-1);
}

.button-group--small-switch-color-2.button-group--outline .button-group__button {
  border-color: var(--small-switch-color-2);
  color: var(--small-switch-color-2);
}

/* Natural Palette Outline Variants */
.button-group--natural-color-1.button-group--outline .button-group__button {
  border-color: var(--natural-color-1);
  color: var(--natural-color-1);
}

.button-group--natural-color-2.button-group--outline .button-group__button {
  border-color: var(--natural-color-2);
  color: var(--natural-color-2);
}

.button-group--natural-color-3.button-group--outline .button-group__button {
  border-color: var(--natural-color-3);
  color: var(--natural-color-3);
}

/* Grey Friends Outline Variants */
.button-group--grey-friend-1.button-group--outline .button-group__button {
  border-color: var(--grey-friend-1);
  color: var(--grey-friend-1);
}

.button-group--grey-friend-2.button-group--outline .button-group__button {
  border-color: var(--grey-friend-2);
  color: var(--grey-friend-2);
}

/* Shades Outline Variants */
.button-group--shade-1.button-group--outline .button-group__button {
  border-color: var(--shade-1);
  color: var(--shade-1);
}

.button-group--shade-2.button-group--outline .button-group__button {
  border-color: var(--shade-2);
  color: var(--shade-2);
}

.button-group--shade-3.button-group--outline .button-group__button {
  border-color: var(--shade-3);
  color: var (--shade-3);
}

.button-group--shade-4.button-group--outline .button-group__button {
  border-color: var(--shade-4);
  color: var(--shade-4);
}

/* Hover Effects */
.button-group__button:hover {
  background-color: var(--primary-color-hover);
}

.button-group--outline .button-group__button:hover {
  background-color: transparent;
  border-color: var(--primary-color-hover);
  color: var(--primary-color-hover);
}
```

```jsx
//this.GUI/src/stories/Molecules/ButtonGroup/ButtonGroup.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ButtonGroup.css';

export const ButtonGroup = ({ buttons, size, color, variant, onButtonClick }) => {
  return (
    <div className={`button-group button-group--${size} button-group--${color} button-group--${variant}`}>
      {buttons.map((button, index) => (
        <button
          key={index}
          className="button-group__button"
          onClick={() => onButtonClick(button.value)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired, // Label of the button
      value: PropTypes.any.isRequired,    // Value to return on button click
    })
  ).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']), // Size of the buttons
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2',
    'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]), // Button color based on theme
  variant: PropTypes.oneOf(['solid', 'outline']), // Solid or outline button styles
  onButtonClick: PropTypes.func, // Callback function when a button is clicked
};

ButtonGroup.defaultProps = {
  size: 'medium',
  color: 'primary',
  variant: 'solid',
  onButtonClick: () => {},
};
```

```jsx
//this.GUI/src/stories/Molecules/ButtonGroup/ButtonGroup.stories.jsx
import React from 'react';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Molecules/Actions/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2',
          'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2',
          'shade-1', 'shade-2', 'shade-3', 'shade-4'
        ],
      },
    },
    variant: {
      control: { type: 'select', options: ['solid', 'outline'] },
    },
  },
};

const buttonOptions = [
  { label: 'Button 1', value: 'button1' },
  { label: 'Button 2', value: 'button2' },
  { label: 'Button 3', value: 'button3' },
];

export const DefaultButtonGroup = (args) => <ButtonGroup {...args} buttons={buttonOptions} />;

DefaultButtonGroup.args = {
  size: 'medium',
  color: 'primary',
  variant: 'solid',
  onButtonClick: (value) => console.log('Clicked button:', value),
};
```

--------

# ComparisonTable QuickStart

###### **Usage Examples**

1. **Basic Table Example**

```jsx
<ComparisonTable
  headers={['Feature', 'Product A', 'Product B']}
  rowHeaders={['Price', 'Quality']}
  rows={[
    ['$10', '$15'],
    ['High', 'Low']
  ]}
/>
```

2. **Table with Custom Colors and Highlight**

```jsx
<ComparisonTable
  headers={['Feature', 'Product A', 'Product B']}
  rowHeaders={['Price', 'Quality']}
  rows={[
    ['$10', '$15'],
    ['High', 'Low']
  ]}
  highlightColumn={1}
  headerBgColor="info-color"
  rowHeaderBgColor="secondary-color"
  highlightBgColor="warning-color"
  borderColor="dark-color"
/>
```

This will allow you to dynamically change the colors for each part of the table using your defined theme colors.

**Quickstart Guide for ComparisonTable Component**

The ComparisonTable component allows you to create a table for comparing different items, products, or features. It supports customizable colors for the headers, row headers, highlighted columns, and borders, making it easy to integrate with your theme.

**Usage Examples**

​	1.	**Basic Comparison Table**

```jsx
<ComparisonTable
 headers={['Feature', 'Product A', 'Product B']}
 rowHeaders={['Price', 'Quality']}

 rows={[
  ['$10', '$15'],
  ['High', 'Medium']
 ]}
/>
```

This will render a basic comparison table with a list of features and corresponding values for two products.

​	2.	**Table with Highlighted Column**

```jsx
<ComparisonTable
 headers={['Feature', 'Product A', 'Product B']}
 rowHeaders={['Price', 'Quality', 'Support']}
 rows={[
  ['$10', '$15'],
  ['High', 'Medium'],
  ['24/7', 'Business Hours']
 ]}
 highlightColumn={1}
/>
```

This example highlights the second column (Product A) to make it stand out.

​	3.	**Customizing Colors**

```jsx
<ComparisonTable
 headers={['Feature', 'Product A', 'Product B']}
 rowHeaders={['Price', 'Quality']}
 rows={[
  ['$10', '$15'],
  ['High', 'Low']
 ]}
 highlightColumn={1}
 headerBgColor="info-color"
 rowHeaderBgColor="secondary-color"
 highlightBgColor="warning-color"
 borderColor="dark-color"
/>
```

In this example, custom colors are passed as props for the headers, row headers, highlighted column, and border.



**Available Props**

​	•	**headers**: An array of strings representing the column headers.

​	•	**rows**: A 2D array where each sub-array represents a row in the table.

​	•	**rowHeaders**: An array of strings representing the row headers.

​	•	**highlightColumn**: Index of the column to highlight (optional).

​	•	**headerBgColor**: Theme color for column headers (optional).

​	•	**rowHeaderBgColor**: Theme color for row headers (optional).

​	•	**highlightBgColor**: Theme color for the highlighted column (optional).

​	•	**borderColor**: Theme color for the table borders (optional).

For more details on prop types and customization, refer to the Storybook.



```css
/* this.GUI/src/stories/Molecules/ComparisonTable/ComparisonTable.css */
.comparison-table-container {
  overflow-x: auto;
  margin: 20px 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
  border: 1px solid var(--neutral-color);
}

.comparison-table th,
.comparison-table td {
  padding: 12px;
  text-align: center;
  border: 1px solid;
  font-size: 14px;
}

.comparison-table th {
  background-color: var(--neutral-color, #f9f9f9);
  font-weight: bold;
}

.comparison-table .row-header {
  background-color: var(--neutral-color, #f0f0f0);
  font-weight: bold;
}

.comparison-table .highlight {
  background-color: var(--primary-color, #1F877D);
  color: var(--text-color-inverse, white);
}
```

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ComparisonTable.css';

export const ComparisonTable = ({
  headers,
  rows,
  rowHeaders,
  highlightColumn,
  headerBgColor,
  rowHeaderBgColor,
  highlightBgColor,
  borderColor,
}) => {
  return (
    <div className="comparison-table-container">
      <table className="comparison-table" style={{ borderColor: `var(--${borderColor})` }}>
        <thead>
          <tr>
            <th></th>
            {headers.map((header, index) => (
              <th
                key={index}
                className={highlightColumn === index ? 'highlight' : ''}
                style={{
                  backgroundColor: `var(--${headerBgColor})`,
                  borderColor: `var(--${borderColor})`,
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td
                className="row-header"
                style={{
                  backgroundColor: `var(--${rowHeaderBgColor})`,
                  borderColor: `var(--${borderColor})`,
                }}
              >
                {rowHeaders[rowIndex]}
              </td>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={highlightColumn === cellIndex ? 'highlight' : ''}
                  style={{
                    backgroundColor: highlightColumn === cellIndex ? `var(--${highlightBgColor})` : 'inherit',
                    borderColor: `var(--${borderColor})`,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ComparisonTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.array).isRequired,
  rowHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  highlightColumn: PropTypes.number,
  headerBgColor: PropTypes.oneOf([
    'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  rowHeaderBgColor: PropTypes.oneOf([
    'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  highlightBgColor: PropTypes.oneOf([
    'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  borderColor: PropTypes.oneOf([
    'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
};

ComparisonTable.defaultProps = {
  highlightColumn: null,
  headerBgColor: 'neutral-color',
  rowHeaderBgColor: 'neutral-color',
  highlightBgColor: 'primary-color',
  borderColor: 'neutral-color',
};
```

```jsx
import React from 'react';
import { ComparisonTable } from './ComparisonTable';

export default {
  title: 'Molecules/Data/ComparisonTable',
  component: ComparisonTable,
  argTypes: {
    headerBgColor: {
      control: {
        type: 'select',
        options: [
          'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
        ],
      },
    },
    rowHeaderBgColor: {
      control: {
        type: 'select',
        options: [
          'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
        ],
      },
    },
    highlightBgColor: {
      control: {
        type: 'select',
        options: [
          'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
        ],
      },
    },
    borderColor: {
      control: {
        type: 'select',
        options: [
          'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
        ],
      },
    },
  },
};

const headers = ['Feature', 'Product A', 'Product B', 'Product C'];
const rowHeaders = ['Price', 'Quality', 'Support', 'Features'];
const rows = [
  ['$10', '$15', '$20'],
  ['High', 'Medium', 'Low'],
  ['24/7', 'Business Hours', 'Email Only'],
  ['Basic', 'Advanced', 'Premium'],
];

export const DefaultTable = (args) => (
  <ComparisonTable
    {...args}
    headers={headers}
    rows={rows}
    rowHeaders={rowHeaders}
  />
);

export const HighlightedColumn = (args) => (
  <ComparisonTable
    {...args}
    headers={headers}
    rows={rows}
    rowHeaders={rowHeaders}
    highlightColumn={1}
  />
);
```

-------



# **Quickstart Guide: How to Use the Card Component**

The Card component is a versatile UI element that can display various types of content such as text, images, and other components. It supports two variants: **solid** and **outline**, and it allows you to customize the color, text color, and add interactive features such as expandability and removability.

**Basic Usage:**

​	1.	**Import the** Card **component**:

```jsx
import { Card } from './Card';
```

​	2.	**Using the Solid Card**:

To create a solid card with customizable background and text colors, simply pass the variant, color, and textColor props.

```jsx
<Card variant="solid" color="primary-color" textColor="secondary-color">
 <h2>Solid Card Example</h2>
  <p>This is a solid card.</p>
</Card>
```

​	3.	**Using the Outlined Card**:

For an outlined card, where only the border is colored, pass the variant as outline. The color prop will define the border color.

```jsx
<Card variant="outline" color="info-color" textColor="dark-color">
 <h2>Outlined Card Example</h2>
  <p>This is an outlined card.</p>
</Card>
```

​	4.	**Expandable Card**:

You can make the card expandable by passing the isExpandable prop. This allows the card to show more content when expanded.

```jsx
<Card variant="solid" color="primary-color" textColor="secondary-color" isExpandable>
 <h2>Expandable Card</h2>
  <p>This is an expandable card. Click to see more content!</p>
</Card>
```

​	5.	**Removable Card**:

To make a card removable, pass the isRemovable prop. A close button will appear, allowing users to remove the card.

```jsx
<Card variant="outline" color="warning-color" textColor="dark-color" isRemovable>
 <h2>Removable Card</h2>
  <p>This card can be removed.</p>
</Card>
```

​	6.	**Hoverable Card**:

Add the hoverable prop to give the card a hover effect, making it slightly elevate when hovered.

```jsx
<Card variant="solid" color="success-color" textColor="neutral-color" hoverable>
 <h2>Hoverable Card</h2>
  <p>This card has a hover effect.</p>
</Card>
```



**Props Overview:**



​	•	variant: Determines the style of the card. Options: 'solid' (default) or 'outline'.

​	•	color: The background color for solid cards or border color for outlined cards.

​	•	textColor: The text color inside the card.

​	•	isExpandable: Adds an expand button that toggles additional content.

​	•	isRemovable: Adds a remove button that hides the card when clicked.

​	•	hoverable: Adds a hover effect to the card.

​	•	width: Sets the card’s width (default is '100%').



**Example:**

```jsx
<Card
 variant="solid"
 color="alert-color"
 textColor="dark-color"
 isExpandable
 isRemovable
 hoverable
 width="80%"
\>
 <h2>Full-featured Card</h2>
  <p>This card has all the features enabled: expandability, removability, and hover effect.</p>
</Card>
```



With these simple steps, you can easily create and customize cards in your application using the Card component. The rest of the customizable options can be explored through the Storybook UI.



```css
/*this.GUI/src/stories/Molecules/Card/Card.css*/
.card {
  padding: 16px;
  border-radius: var(--border-radius, 8px);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: inherit; /* Text color is inherited */
}

.card__content {
  color: inherit; /* Inherit text color from parent */
}

.card--hoverable:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.card__expand, .card__remove {
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

.card__remove {
  right: 12px;
}

.card__expand {
  right: 40px;
}

@media (max-width: 768px) {
  .card {
    padding: 12px;
  }
}
```

```jsx
//this.GUI/src/stories/Molecules/Card/Card.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = ({
  children,
  variant,
  color,
  textColor,
  isExpandable,
  isRemovable,
  hoverable,
  width,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleExpandToggle = () => setIsExpanded(!isExpanded);
  const handleRemove = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div
      className={`card card--${variant} ${hoverable ? 'card--hoverable' : ''}`}
      style={{
        backgroundColor: variant === 'solid' ? `var(--${color})` : 'transparent',
        border: variant === 'outline' ? `1px solid var(--${color})` : 'none',
        width: width,
      }}
      {...props}
    >
      {isExpandable && (
        <button className="card__expand" onClick={handleExpandToggle}>
          {isExpanded ? 'Close' : 'Expand'}
        </button>
      )}

      {isRemovable && (
        <button className="card__remove" onClick={handleRemove}>
          &times;
        </button>
      )}

      <div
        className="card__content"
        style={{
          color: `var(--${textColor})`, // Apply the text color using CSS variables
        }}
      >
        {children}
      </div>

      {isExpanded && (
        <div className="card__expanded-content">
          {children}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['solid', 'outline']), // Variant can be 'solid' or 'outline'
  color: PropTypes.oneOf([
    'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5', 'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3', 'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]).isRequired,
  textColor: PropTypes.oneOf([
    'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5', 'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3', 'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]), // Separate text color prop
  isExpandable: PropTypes.bool,
  isRemovable: PropTypes.bool,
  hoverable: PropTypes.bool,
  width: PropTypes.string, // Width of the card
};

Card.defaultProps = {
  variant: 'solid',
  color: 'neutral-color', // Default background/border color
  textColor: 'dark-color', // Default text color
  isExpandable: false,
  isRemovable: false,
  hoverable: false,
  width: '100%', // Default width
};
```

```jsx
//this.GUI/src/stories/Molecules/Card/Card.stories.jsx
import React from 'react';
import { Card } from './Card';

export default {
  title: 'Molecules/Display/Card',
  component: Card,
};

export const SolidCard = (args) => (
  <Card {...args}>
    <h2>Solid Card Example</h2>
    <p>This is a solid card.</p>
  </Card>
);

SolidCard.args = {
  variant: 'solid',
  color: 'primary-color',
  textColor: 'secondary-color',
};

export const OutlinedCard = (args) => (
  <Card {...args}>
    <h2>Outlined Card Example</h2>
    <p>This is an outlined card.</p>
  </Card>
);

OutlinedCard.args = {
  variant: 'outline',
  color: 'primary-color',
  textColor: 'secondary-color',
};
```

------

# **Quickstart Guide: How to Use the AudioPlayer Component**

The AudioPlayer component is a versatile, fully customizable audio player with features such as track control, volume adjustment, playlist navigation, and support for images and metadata. It includes options for autoplay, muting, looping, and more.



**Basic Usage**

​	1.	**Import the** AudioPlayer **component:**

```jsx
import { AudioPlayer } from './AudioPlayer';
```

​	2.	**Set up your playlist:**

You need to pass an array of track objects (playlist) to the AudioPlayer. Each track object should contain the src (URL of the audio file), title, and optionally an image (album cover or media thumbnail).

```jsx
const playlist = [
 { src: 'song1.mp3', title: 'Track 1', image: 'cover1.jpg' },
 { src: 'song2.mp3', title: 'Track 2', image: 'cover2.jpg' },
 { src: 'song3.mp3', title: 'Track 3', image: 'cover3.jpg' }
];
```

​	3.	**Create the audio player:**

You can render the AudioPlayer with the playlist and customize its behavior using available props.

```jsx
<AudioPlayer playlist={playlist} />
```

**Customization Options**

**1. AutoPlay (autoPlay)**

Automatically start playing the audio when the component is loaded.

```jsx
<AudioPlayer playlist={playlist} autoPlay={true} />
```

**2. Loop (loop)**

Play the current track on loop until manually changed.

```jsx
<AudioPlayer playlist={playlist} loop={true} />
```

**3. Muted (muted)**

Start the player in a muted state.

```jsx
<AudioPlayer playlist={playlist} muted={true} />
```

**4. Size (size)**

You can change the size of the audio player by setting the size prop to either small or medium (default).

```jsx
<AudioPlayer playlist={playlist} size="small" />
```

**5. Color (color)**

Choose from a predefined set of colors to style the player. This color will be applied to elements like the progress bar, buttons, and playlist highlights.

```jsx
<AudioPlayer playlist={playlist} color="classy-color-1" />
```

**6. Show Media (showMedia)**

By default, media (album cover) is shown if provided. You can hide this by setting showMedia to false.

```jsx
<AudioPlayer playlist={playlist} showMedia={false} />
```

**Example:**

```jsx
const playlist = [
 { src: 'song1.mp3', title: 'Track 1', image: 'cover1.jpg' },
 { src: 'song2.mp3', title: 'Track 2', image: 'cover2.jpg' },
 { src: 'song3.mp3', title: 'Track 3', image: 'cover3.jpg' }
];

<AudioPlayer
 playlist={playlist}
 autoPlay={false}
 loop={false}
 muted={false}
 size="medium"
 color="classy-color-1"
 showMedia={true}
/>
```



**Props Overview:**



​	•	playlist: An array of track objects, each containing src, title, and optionally image.

​	•	autoPlay: Automatically play the audio on load (true or false).

​	•	loop: Loop the current track.

​	•	muted: Start the audio player in a muted state.

​	•	size: The size of the player, either small or medium.

​	•	color: Color theme for the player.

​	•	showMedia: Show or hide media (album covers or images).



This quickstart guide helps you easily integrate and customize the AudioPlayer component in your project. For more advanced configurations, feel free to explore the Storybook UI for all the available options.

```css
/*this.GUI/src/stories/Molecules/AudioPlayer/AudioPlayer.css*/
.audio-player {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(245, 245, 245, 0.3); /* Subtle grey with low opacity */
  padding: var(--spacing-md, 16px);
  border-radius: var(--border-radius, 6px);
  gap: var(--spacing-sm, 8px);
  max-width: 400px;
  border: 1px solid var(--border-color, #dddddd);
  transition: background-color var(--transition-speed, 0.3s);
}

.audio-player__media img {
  width: 100%;
  border-radius: var(--border-radius, 6px);
}

.audio-player__track-name {
  font-weight: bold;
  font-size: var(--font-size-medium, 1.1rem);
  margin-bottom: var(--spacing-xs, 8px);
  color: var(--icon-color, #344b47);
}

.audio-player__controls {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm, 8px);
}

.audio-player__seek {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: var(--spacing-xs, 4px);
}

.audio-player__seek-slider {
  width: 100%;
  cursor: pointer;
  appearance: none;
  height: 4px;
  background: var(--grey-friend-2, #96b1ac);
  border-radius: 2px;
  outline: none;
  transition: background var(--transition-speed, 0.3s);
}

.audio-player__seek-slider::-webkit-slider-thumb {
  appearance: none;
  width: 12px;
  height: 12px;
  background: var(--icon-color, #344b47);
  border-radius: 50%;
  cursor: pointer;
  margin-top: -4px;
  transition: background var(--transition-speed, 0.3s);
}

.audio-player__time {
  font-size: var(--font-size-small, 0.9em);
  color: var(--icon-color, #344b47);
}

.audio-player__playlist {
  width: 100%;
  margin-top: var(--spacing-sm, 8px);
  border-top: 1px solid var(--border-color);
  padding-top: var(--spacing-xs, 8px);
}

.audio-player__track {
  padding: var(--spacing-sm, 8px);
  cursor: pointer;
  transition: background-color var(--transition-speed, 0.3s);
  text-align: center;
}

.audio-player__track:hover {
  background-color: var(--primary-color-hover, #16655C);
  color: var(--text-color-inverse, #ffffff);
}

.audio-player__track.active {
  background-color: var(--primary-color, #1F877D);
  color: var(--text-color-inverse, #ffffff);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .audio-player {
    max-width: 100%;
  }
}
```



```jsx
//this.GUI/src/stories/Molecules/AudioPlayer/AudioPlayer.jsx
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaStepForward, FaStepBackward } from 'react-icons/fa';
import './AudioPlayer.css';

export const AudioPlayer = ({
  playlist,
  autoPlay = false,
  loop = false,
  muted = false,
  size = 'medium',
  color = 'classy-color-1',
  className = '',
  style = {},
  showMedia = true,
  ...props
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [volume, setVolume] = useState(muted ? 0 : 1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(playlist[0]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.muted = isMuted;
      if (autoPlay) {
        audio.play().catch(() => setIsPlaying(false));
      }
    }
  }, [volume, isMuted, autoPlay, currentTrack]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => setIsPlaying(false));
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) {
      setDuration(audio.duration);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    setVolume(!isMuted ? 0 : 1);
  };

  const handleSeekChange = (e) => {
    const seekTime = parseFloat(e.target.value);
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${paddedSeconds}`;
  };

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIndex);
    setCurrentTrack(playlist[nextIndex]);
  };

  const prevTrack = () => {
    const prevIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrackIndex(prevIndex);
    setCurrentTrack(playlist[prevIndex]);
  };

  const handleTrackClick = (track, index) => {
    setCurrentTrack(track);
    setCurrentTrackIndex(index);
    setIsPlaying(false); // Reset play state to allow clicking a new track.
  };

  const variantClass = `audio-player--${size}`;
  const colorClass = `audio-player--${color}`;
  const combinedClassName = `audio-player ${variantClass} ${colorClass} ${className}`.trim();

  return (
    <div className={combinedClassName} style={style} {...props}>
      {showMedia && currentTrack.image && (
        <div className="audio-player__media">
          <img src={currentTrack.image} alt={currentTrack.title} />
        </div>
      )}

      {/* Display Track Name Above Timeline */}
      <div className="audio-player__track-name">{currentTrack.title}</div>

      <div className="audio-player__controls">
        <audio
          ref={audioRef}
          src={currentTrack.src}
          loop={loop}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={nextTrack}
        >
          Your browser does not support the audio element.
        </audio>
        <button
          className="audio-player__prev"
          onClick={prevTrack}
          aria-label="Previous Track"
        >
          <FaStepBackward />
        </button>
        <button
          className="audio-player__play-pause"
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button
          className="audio-player__next"
          onClick={nextTrack}
          aria-label="Next Track"
        >
          <FaStepForward />
        </button>
      </div>

      {/* Timeline with Seek and Time */}
      <div className="audio-player__seek">
        <input
          type="range"
          className="audio-player__seek-slider"
          min="0"
          max={duration}
          step="0.1"
          value={currentTime}
          onChange={handleSeekChange}
          aria-label="Seek Slider"
        />
        <div className="audio-player__time">{formatTime(currentTime)} / {formatTime(duration)}</div>
      </div>

      <div className="audio-player__volume-container">
        <button
          className="audio-player__mute"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <input
          type="range"
          className="audio-player__volume-slider"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          aria-label="Volume Slider"
        />
      </div>

      {/* Playlist with Border */}
      <div className="audio-player__playlist">
        <ul>
          {playlist.map((track, index) => (
            <li
              key={index}
              className={`audio-player__track ${index === currentTrackIndex ? 'active' : ''}`}
              onClick={() => handleTrackClick(track, index)}
            >
              {track.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

AudioPlayer.propTypes = {
  playlist: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string, // Optional album cover or media
    })
  ).isRequired,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium']),
  color: PropTypes.oneOf([
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2',
    'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  className: PropTypes.string,
  style: PropTypes.object,
  showMedia: PropTypes.bool,
};

AudioPlayer.defaultProps = {
  autoPlay: false,
  loop: false,
  muted: false,
  size: 'medium',
  color: 'classy-color-1',
  showMedia: true,
};
```

```jsx
//this.GUI/src/stories/Molecules/AudioPlayer/AudioPlayer.stories.jsx
import React from 'react';
import { AudioPlayer } from './AudioPlayer';
import './AudioPlayer.css';

export default {
  title: 'Molecules/Media/AudioPlayer',
  component: AudioPlayer,
  argTypes: {
    autoPlay: { control: 'boolean', defaultValue: false },
    loop: { control: 'boolean', defaultValue: false },
    muted: { control: 'boolean', defaultValue: false },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      defaultValue: 'medium',
    },
    color: {
      control: 'select',
      options: [
        'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
        'small-switch-color-1', 'small-switch-color-2',
        'natural-color-1', 'natural-color-2', 'natural-color-3',
        'grey-friend-1', 'grey-friend-2',
        'shade-1', 'shade-2', 'shade-3', 'shade-4',
      ],
      defaultValue: 'classy-color-1',
    },
    showMedia: { control: 'boolean', defaultValue: true },
  },
};

const playlist = [
  {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'Track 1',
    image: 'https://via.placeholder.com/150?text=Track+1',
  },
  {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    title: 'Track 2',
    image: 'https://via.placeholder.com/150?text=Track+2',
  },
  {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    title: 'Track 3',
    image: 'https://via.placeholder.com/150?text=Track+3',
  },
];

export const DefaultAudioPlayer = () => <AudioPlayer playlist={playlist} />;
export const SmallAudioPlayer = () => <AudioPlayer size="small" playlist={playlist} />;
export const AutoplayAudioPlayer = () => <AudioPlayer autoPlay playlist={playlist} />;
export const AudioPlayerWithoutMedia = () => <AudioPlayer showMedia={false} playlist={playlist} />;
export const LoopingAudioPlayer = () => <AudioPlayer loop playlist={playlist} />;
```

