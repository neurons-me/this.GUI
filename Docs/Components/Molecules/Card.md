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