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