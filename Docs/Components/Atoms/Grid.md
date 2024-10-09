# **Grid Component Documentation**

The **Grid** component is a flexible layout component designed to organize content into responsive rows and columns. It automatically adapts to different screen sizes and can be customized using properties like gap, border, and color. It also provides support for various color variants from the theme.

### **Usage**

**Importing the Grid Component**

To use the **Grid** component in your project, import it as follows:

import { Grid } from 'your-library-path';

**Basic Example**

Here’s a simple example of how to use the **Grid** component to organize content:

```jsx
<Grid>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Grid>
```

This will render a grid with auto-adjusting columns and responsive behavior.

**Prop Usage Examples**

**Grid with Gap**

You can adjust the spacing between items by using the gap prop:

```jsx
<Grid gap="32px">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Grid>
```



**Grid with Border**

To add borders around each grid item, use the border prop:

```jsx
<Grid border={true} color="secondary">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Grid>
```

This will create a grid with borders around each item, and the border color will be set to the **secondary** theme color.



**Custom Colors**

You can choose different border colors by using the color prop in conjunction with the border prop:

```jsx
<Grid border={true} color="warning">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Grid>
```

This will apply a **warning** border color around the grid items.



**Color Variants**

The **Grid** component supports theme-based colors for borders. Here are the available colors:

​	•	**Primary**: primary-color

​	•	**Secondary**: secondary-color

​	•	**Info**: info-color

​	•	**Warning**: warning-color

​	•	**Alert**: alert-color

​	•	**Success**: success-color

​	•	**Neutral**: neutral-color

​	•	**Dark**: dark-color

​	•	**Classy Palette**: classy-color-1, classy-color-2, etc.

​	•	**Small Switch Palette**: small-switch-color-1, small-switch-color-2

​	•	**Natural Palette**: natural-color-1, natural-color-2, natural-color-3

​	•	**Grey Friends**: grey-friend-1, grey-friend-2

​	•	**Shades**: shade-1, shade-2, shade-3, shade-4



**Example Using Color Variants**

```jsx
<Grid border={true} color="info">
  <div>Info Item 1</div>
  <div>Info Item 2</div>
  <div>Info Item 3</div>
</Grid>

<Grid border={true} color="success">
  <div>Success Item 1</div>
  <div>Success Item 2</div>
  <div>Success Item 3</div>
</Grid>
```



**Responsive Behavior**

The **Grid** component automatically adjusts the number of columns based on the available width of the container, making it fully responsive. You can control the gap between items, but the layout will adapt dynamically without needing additional configuration.



For example

```jsx
<Grid>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
  <div>Item 7</div>
</Grid>
```

This will render a responsive grid layout that automatically adjusts to the screen size, ensuring that the grid items fit properly.



**Advanced Example**

Here’s a more complex example with custom colors, borders, and gaps:

```jsx
<Grid border={true} gap="24px" color="alert">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</Grid>
```

In this example:

​	•	Each grid item has a **24px** gap between them.

​	•	The grid items have a **border**.

​	•	The border color is set to **alert** (yellow from the theme).

**Conclusion**

The **Grid** component is a powerful and flexible tool for creating responsive layouts in your application. With easy-to-use props like gap, border, and color, you can create dynamic grids that adapt to various screen sizes and provide a visually appealing structure for your content.
