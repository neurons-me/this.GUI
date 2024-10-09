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