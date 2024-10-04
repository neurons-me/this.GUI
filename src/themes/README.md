A **complete global CSS** should establish the foundational design rules and visual consistency across an application. It should cover general aspects like colors, typography, spacing, layout, forms, buttons, and interactions. The component-specific styles will then build on top of this global foundation.

Here’s a **meta description** of the key sections and properties that should be included in any global CSS file:

---

### **Meta Description of a Complete Global CSS**

#### 1. **CSS Variables (Design Tokens)**
Define **CSS variables** at the root level (`:root`) to store your design tokens. This ensures flexibility and consistency across the application.

##### Key Design Tokens:
- **Primary and Secondary Colors**:
  - `--primary-color`: Main action color (e.g., for buttons, links).
  - `--secondary-color`: Supportive action color (e.g., for secondary buttons or highlights).
  - `--background-color`: Global background color.
  - `--text-color`: Main text color.
  - `--border-color`: Default color for borders.
  - `--link-color`: Color for links.

  Example:
  ```css
  :root {
    --primary-color: #0366d6;
    --secondary-color: #586069;
    --background-color: #ffffff;
    --text-color: #333333;
    --border-color: #e1e4e8;
    --link-color: #0366d6;
  }
  ```

- **Typography**:
  - `--font-family`: Base font family for all text.
  - `--font-size-base`: Base font size (e.g., 16px).
  - `--line-height`: Global line height (e.g., 1.6).
  - `--font-weight-regular`: Regular font weight.
  - `--font-weight-bold`: Bold font weight.
  
  Example:
  ```css
  :root {
    --font-family: 'Open Sans', sans-serif;
    --font-size-base: 16px;
    --line-height: 1.6;
    --font-weight-regular: 400;
    --font-weight-bold: 700;
  }
  ```

- **Spacing**:
  - `--spacing-xs`: Extra small spacing (e.g., padding, margins).
  - `--spacing-sm`: Small spacing.
  - `--spacing-md`: Medium spacing.
  - `--spacing-lg`: Large spacing.
  
  Example:
  ```css
  :root {
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 32px;
  }
  ```

- **Borders**:
  - `--border-radius`: Default radius for rounded elements.
  - `--border-width`: Default border width.
  
  Example:
  ```css
  :root {
    --border-radius: 4px;
    --border-width: 1px;
  }
  ```

- **Z-index**:
  - `--z-index-modal`: Z-index for modals.
  - `--z-index-tooltip`: Z-index for tooltips.
  
  Example:
  ```css
  :root {
    --z-index-modal: 1000;
    --z-index-tooltip: 1050;
  }
  ```

#### 2. **Global Resets and Base Styles**
Implement styles to reset common browser inconsistencies and define the base font, color, and layout properties.

##### Example:
```css
/* Global Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Base Styles */
body {
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  line-height: var(--line-height);
  color: var(--text-color);
  background-color: var(--background-color);
}

a {
  color: var(--link-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

#### 3. **Typography**
Define global typography rules to ensure a consistent appearance for all headings, paragraphs, and text elements.

##### Example:
```css
h1, h2, h3, h4, h5, h6 {
  color: var(--text-color);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
}

h1 { font-size: 2.25em; }
h2 { font-size: 1.75em; }
h3 { font-size: 1.5em; }
h4 { font-size: 1.25em; }
h5, h6 { font-size: 1em; color: var(--secondary-color); }

p {
  margin-bottom: var(--spacing-md);
  color: var(--text-color);
}
```

#### 4. **Buttons**
Global button styles that cover primary, secondary, and disabled states.

##### Example:
```css
.button {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.button--primary {
  background-color: var(--primary-color);
  color: #ffffff;
}

.button--secondary {
  background-color: var(--secondary-color);
  color: #ffffff;
}

.button--disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
```

#### 5. **Form Elements**
Global styles for form elements like `input`, `textarea`, and `select`.

##### Example:
```css
input, textarea, select {
  padding: var(--spacing-sm);
  border-radius: var(--border-radius);
  border: var(--border-width) solid var(--border-color);
  font-size: var(--font-size-base);
  font-family: var(--font-family);
}

input:focus, textarea:focus, select:focus {
  border-color: var(--primary-color);
  outline: none;
}
```

#### 6. **Containers and Layout**
Define a layout system with containers, grid systems, and common utilities.

##### Example (Container):
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-md);
}

/* Responsive Grid */
.grid {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.grid__item {
  flex: 1;
  min-width: 200px;
}
```

#### 7. **Spacing and Utility Classes**
Define utility classes for common spacing, alignment, and display patterns.

##### Example:
```css
/* Margin utilities */
.mt-sm { margin-top: var(--spacing-sm); }
.mb-md { margin-bottom: var(--spacing-md); }

/* Text alignment */
.text-center { text-align: center; }

/* Flex utilities */
.d-flex { display: flex; }
.flex-column { flex-direction: column; }
```

#### 8. **Media Queries**
Define breakpoints for responsive design and apply styles accordingly.

##### Example:
```css
@media (max-width: 768px) {
  .container {
    padding: var(--spacing-sm);
  }

  h1 {
    font-size: 1.75em;
  }
}
```

#### 9. **Dark Mode and Light Mode (Theming)**
Define rules for light and dark themes. Switch the theme by changing the root variables.

##### Example:
```css
/* Light Mode */
.light-theme {
  --background-color: #ffffff;
  --text-color: #333333;
  --primary-color: #0366d6;
}

/* Dark Mode */
.dark-theme {
  --background-color: #181818;
  --text-color: #eaeaea;
  --primary-color: #539bf5;
}
```

#### 10. **Accessibility**
Ensure accessibility by focusing on contrasts, keyboard focus states, and screen reader support.

##### Example:
```css
a:focus, button:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none;
    transition: none;
  }
}
```

---

### **Key Elements to Include in Each CSS**

1. **Colors**: Primary, secondary, background, text, border colors.
2. **Typography**: Font family, font sizes, line heights, weights.
3. **Spacing**: Padding, margins, grid, and layout utilities.
4. **Components**: Buttons, forms, links, containers.
5. **Theming**: Light mode, dark mode, and accessible states.
6. **Accessibility**: Focus states, reduced motion, high contrast.
7. **Responsive**: Media queries for different screen sizes.
8. **Utility Classes**: For common patterns like alignment, display, spacing.

By following this structure, you ensure that your global CSS provides a robust, consistent, and easily customizable foundation for your application’s design.