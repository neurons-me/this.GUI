**Section Component Documentation**

The **Section** component is a basic layout component designed to organize and structure content within an application. It provides an easy way to create sections with customizable margins, paddings, and other layout properties. Additionally, you can customize the appearance with background colors, borders, shadows, and more.


 <h2>Section Title</h2>

  <p>This is the content inside the section.</p>

This will render a section with default margins, paddings, and a simple content layout.

**Props**

The **Section** component comes with several props that allow you to customize its appearance and behavior.

**Background Color**

You can apply a background color using the color prop and set background to true:

```jsx
<Section color="primary" background={true}>
 <h2>Section with Primary Background</h2>
  <p>This section has a primary background color.</p>
</Section>
```

**Full Width Section**

To create a full-width section, set the fullWidth prop to true:

```jsx
<Section fullWidth={true} color="secondary" background={true}>
 <h2>Full Width Section</h2>
  <p>This section spans the full width of the viewport.</p>
</Section>
```



**Section with a Title**

You can pass a title prop to provide a heading for the section:

```jsx
<Section title="Section Title" border={true}>
  <p>This section has a title for easy navigation and structure.</p>
</Section>
```

**Color Variants**

The **Section** component supports all theme-based colors for both borders and backgrounds. The following colors are available:

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
<Section border={true} color="warning">
 <h2>Warning Section</h2>
  <p>This section has a warning border color.</p>
</Section>

<Section background={true} color="success">
 <h2>Success Section</h2>
  <p>This section has a success background color.</p>
</Section>
```

**Conclusion**

The **Section** component is highly customizable and serves as an essential building block for organizing layouts and content within an application. You can use it to create well-structured, responsive sections that adapt to various screen sizes and layout requirements.