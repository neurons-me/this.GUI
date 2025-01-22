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