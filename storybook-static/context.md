<img src="https://suign.github.io/assets/imgs/this_GUI.svg" alt="Cleaker Me" width="377" height="377" align="right">

# THIS.GUI

Install `this.gui` via **npm**:
```shell
npm install this.gui
```
The goal is to automate the UI generation process so users only pass data or configurations, and **this.GUI** handles the rest.

1.	React is still required in the user’s project because the UI components provided are React components that need to be rendered by React.

The Key Value of this.gui:

•	**Simplifies UI creation:** Users only pass configurations or data; they don’t need to deal with the intricacies of React.
•	**Dynamic generation:** The components adapt and render based on the input you give them.
**•	Automation:** You handle all the complexity of component creation, leaving users with a simplified interface to generate UIs.



# About All.This
###### Modular Data Structures
**[this.me](https://suign.github.io/this.me)  - [this.audio](https://suign.github.io/this.audio) - [this.text](https://suign.github.io/this.text) - [this.wallet](https://suign.github.io/this.wallet) - [this.img](https://suign.github.io/this.img) - [this.pixel](https://suign.github.io/Pixels) - [be.this](https://suign.github.io/be.this) - [this.DOM](https://suign.github.io/this.DOM) - [this.env](https://suign.github.io/this.env/) - [this.GUI](https://suign.github.io/this.GUI) - [this.be](https://suign.github.io/this.be) - [this.video](https://suign.github.io/this.video) - [this.atom](https://suign.github.io/this.atom) - [this.dictionaries](https://suign.github.io/this.dictionaries/)**

These classes encapsulate the functionalities to **domain-specific data.**

## Neurons.me
### License & Policies
- **License**: MIT License (see LICENSE for details).

- **Privacy Policy**: Respects user privacy; no collection/storage of personal data.

- **Terms of Usage**: Use responsibly. No guarantees/warranties provided. 
  [Terms](https://www.neurons.me/terms-of-use) | [Privacy](https://www.neurons.me/privacy-policy)
  [neurons.me](https://neurons.me)

  <img src="https://suign.github.io/assets/imgs/neurons_me_logo.png" alt="neurons.me logo" width="89">
---

/*this.GUI/index.js
ⓝⓔⓤⓡⓞⓝⓢ.ⓜⓔ
🆂🆄🅸🅶🅽 */
console.log("this.GUI loaded.");

---

<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>This.GUI</title>
  </head>
  <body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
  </body>
</html> 

---

{
  "name": "this.gui",
  "version": "0.0.57",
  "description": "This Graphic User Interface.",
  "main": "dist/this-gui.umd.js",
  "module": "dist/this-gui.es.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/neurons-me/GUI.git"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "prepublishOnly": "npm run build",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "type": "module",
  "author": "suiGn",
  "license": "MIT",
  "dependencies": {
    "@storybook/addons": "^7.6.17",
    "@storybook/builder-vite": "^8.2.9",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "fs": "^0.0.1-security",
    "postcss": "^8.4.45",
    "tailwindcss": "^3.4.10"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "^1.8.0",
    "@storybook/addon-docs": "^8.3.0",
    "@storybook/addon-essentials": "^8.2.9",
    "@storybook/addon-interactions": "^8.2.9",
    "@storybook/addon-links": "^8.2.9",
    "@storybook/addon-onboarding": "^8.2.9",
    "@storybook/blocks": "^8.2.9",
    "@storybook/manager-api": "^8.2.9",
    "@storybook/react": "^8.2.9",
    "@storybook/react-vite": "^8.2.9",
    "@storybook/test": "^8.2.9",
    "@storybook/theming": "^8.2.9",
    "prop-types": "^15.8.1",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "storybook": "^8.2.9",
    "vite": "^4.5.3"
  },
  "files": [
    "dist"
  ]
}

---

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // Enable class-based dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Scan your src files
    './.storybook/**/*.{js,jsx}',  // Include Storybook stories
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#1E3A8A',  // Primary color
        secondary: '#FFDD67',  // Secondary color
        // Text colors for light and dark mode
        text: {
          light: '#333',  // Light mode text
          dark: '#fff',  // Dark mode text
        },
        // Background colors for light and dark mode
        background: {
          light: '#f0f0f0',  // Light mode background
          dark: '#121212',  // Dark mode background
        },
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
};
---

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Ensure the defineConfig function is correctly used here
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'index.js',  // Entry point now in the root directory
      name: 'GUI',        // Global variable name is now 'GUI'
      sourcemap: false,   // Disable sourcemaps
      fileName: (format) => `this-gui.${format}.js`,  // Output filenames
    },
    rollupOptions: {
      external: ['react', 'react-dom'],  // Externalize React and ReactDOM
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});

---

Now I will share whats on src/

stories/

<img src="https://suign.github.io/assets/imgs/this_GUI.svg" alt="Cleaker Me" width="477" height="477" align="center" style={{marginBottom: '55px'}}/>



# Welcome to THIS.GUI

### **Explanation of Grouping:**
The **Atomic Design** methodology defines organisms as complex structures built from smaller components, but how we perceive complexity can vary based on context.
 Let’s break it down to align with your insight:

​	•	**Atomic**: Smallest components that are not broken down further.

​	•	**Molecules**: Simple combinations of atomic components that together form a small UI feature.

​	•	**Organisms**: More complex, combining molecules and atomic components to create larger, more detailed features.

​	•	**Layout**: Components related to structuring and organizing content across the page.

​	•	**Templates**: Layouts of full pages, combining organisms and layout components.

​	•	**Pages**: Complete and functional pages made up of templates and content.

​	•	**Miscellaneous**: Utility components that don’t fit into the above categories but provide important functions, such as popovers, overlays, and media controls.

### Here’s how it breaks down:

	•	Pages combine multiple Organisms (like forms, media collections, and navigation elements) to create a full layout.
	•	Organisms themselves are composed of Molecules (which could be form fields, buttons, etc.).
	•	Molecules are built from Atoms (the smallest UI components like text, buttons, inputs).
	
# Recap of Hierarchy

	1.	**Atoms:** Basic building blocks (buttons, inputs).
	2.	**Molecules:** Small functional units combining Atoms (input groups, button groups).
	3.	**Organisms:** Larger functional blocks combining Molecules (forms, media cards).
	4.	**Layouts:** Define structure and positioning (grids, sections, flexbox).
	5.	**Pages:** Use Layouts, Organisms, Molecules, and Atoms to create entire pages.


-------------------
# 1. Atomic Components (Basic/Building Blocks)
Atomic components are the smallest building blocks and cannot be broken down further.

		**Text Components:**
	
	•	Heading (H1, H2, H3, etc.)
	•	Paragraph
	•	Label
	•	Caption

		**Interactive Components:**

	•	Button
	•	Link (Anchor)
	•	Icon (Clickable)
	•	Checkbox
	•	Radio Button
	•	Toggle/Switch
	•	Text Input
	•	Text Area
	•	Select/Dropdown
	•	Slider
	•	Range Input

		**Media Components:**
	
	•	Image
	•	Video
	•	Audio
	•	Icon

		**Visual Components:**

	•	Divider
	•	Spacer (For layout spacing)
	•	Tooltip
	•	Badge
	•	Tag/Chip

		**Feedback Components:**

	•	Loader/Spinner
	•	Progress Bar
	•	Alert
	•	Snackbar/Toast
	•	Tooltip

# 2. Molecules (Combining Atomic Components)
Molecules are combinations of atomic components that work together to form a functional unit.

		**Form Elements:**

	•	Input Group (Input with Button)
	•	Input with Label
	•	Search Bar
	•	File Upload
	•	Form Field (Label + Input + Helper Text)

		**Buttons with Icons or Text:**

	•	Icon Button (Button with Icon)
	•	Button Group (Multiple Buttons together)

		**Media Molecules:**

	•	Image with Caption
	•	Video with Controls and Description
	•	Avatar + Name
	•	Audio Player

		**Feedback Molecules:**

	•	Notification (with Alert, Title, and Action)
	•	Modal (Header, Body, Footer)

# 3. Organisms (Combining Molecules)
Organisms are larger and more complex UI components formed by grouping together multiple molecules or simple components.

		**Forms and Form Layouts:**

	•	Sign-In Form (Form fields + Submit Button)
	•	Registration Form (Fields for name, email, password + Terms Checkbox + Submit)
	•	Contact Form (Input fields + Message TextArea + Send Button)

		**Content Display:**

	•	Card (Image + Title + Description + Action Button)
	•	Media Card (Image/Video + Title + Text)
	•	List (Collection of items, e.g., a list of links or products)
	•	Accordion (Expandable sections with content inside)

		**Navigation:**

	•	Navbar (Logo + Links + Search + Menu Toggle)
	•	Sidebar (List of links for navigation)
	•	Breadcrumbs (Links showing hierarchy)
	
		**Media Collections:**

	•	Image Gallery (Grid of images with captions)
	•	Video Playlist (List of videos to watch)
	•	Carousel/Slider (Image or Media Slider)

		**Tables:**

	•	Data Table (Rows and Columns for displaying structured data)
	•	Pricing Table (Different pricing options)
	•	Comparison Table (Compares features/products)

# 4. Layout Components (Page-Level Components)
Layout components are structural elements used to organize content on a page.

	•	**Grid/Section Layouts:**

	•	Grid (Arranges items in a structured layout with rows and columns)
	•	Section (A part of the page with a header, content, and actions)
	•	Flexbox Layout (Horizontally/Vertically aligned containers)

		**Navigation & Menus:**

	•	Header (Navbar + Search + Links)
	•	Footer (Copyright + Links + Social Media Icons)
	•	Dropdown Menu (Toggleable menu of options)
	•	Pagination (Buttons for navigating multiple pages)

		**Content Organization:**

	•	Sidebar (For navigation or additional info)
	•	Tabs (Switching between different content views)
	•	Accordion (Collapsible sections)

		**Hero Sections:**

	•	Hero Banner (Large heading, subheading, image, and call to action)
	•	Hero Image/Video Section (Introductory section at the top of a page)

# 5. Templates (Combining Organisms and Layout Components)
Templates define the structure of entire pages by arranging multiple organisms and layout components.

		**Landing Pages:**

	•	Hero Section + Features List + Call-to-Action Button + Testimonials
	•	Product Landing Page (Hero, Features, Pricing, CTA)

		**Dashboard Layouts:**

	•	Sidebar + Top Navbar + Content Area
	•	Admin Dashboard (Graphs, Lists, Cards, Notifications)

		**E-Commerce Pages:**

	•	Product Page (Product Image, Description, Price, Add to Cart Button)
	•	Shopping Cart (List of items, quantity, total, checkout button)

		**Authentication Pages:**

	•	Sign-In Page (Form + Link to Register)
	•	Registration Page (Form + Link to Sign In)

		**Contact Us Page:**

	•	Form Section + Location Info + Social Media Links

# 6. Pages (Final Composition of Templates)
Pages are final representations of the full UI, using templates to create entire sections with components.

	•	Home Page
	•	About Us Page
	•	Contact Us Page
	•	User Profile Page
	•	Product Detail Page
	•	Checkout Page
	•	Blog/Article Page
	•	Admin Dashboard
	•	Search Results Page

# 7. Miscellaneous / Utility Components
These components often serve specialized purposes and improve user interaction.

		**Tooltips & Popovers:**

	•	Pop-up information when hovering over or clicking an element.
		**Overlays:**

	•	Modal/Popup Window
	•	Drawer (Slide-in navigation or settings panel)

		**Search Components:**

	•	Search Box (Input field with search button)
	•	Autocomplete/Typeahead

		**Media and Content Controls:**

	•	Audio/Video Controls (Play, Pause, Mute)
	•	Filters (Search filters, Tag filters)
	
		**Interactive Maps:**

	•	Map (With interactive markers, zoom, and pan)

---

# This.GUI
**MDX** is a powerful format because it allows you to combine the simplicity of **Markdown** with the flexibility of **React components**. This means you can write documentation, content, or pages using normal Markdown syntax and sprinkle in **React components** wherever needed.

Here’s a breakdown of how it works:

### 1. **Markdown + JSX**
MDX lets you write Markdown like usual, but when you need interactive or dynamic content, you can directly insert React components. It merges **Markdown** and **JSX** seamlessly in the same file.

Example:

```mdx
# Welcome to My Site

This is a simple introduction written in Markdown.

## Here’s a custom button:

<Button label="Click Me" />

Here is more markdown text below the button!
```

In this example:
- The heading `# Welcome to My Site` and the paragraph are standard **Markdown**.
- The `<Button />` component is a **React component** that you import and use directly in the MDX file.

### 2. **Passing Props to Components**
You can pass props to React components just like you would in a React project. This allows you to create dynamic, reusable content.

```mdx
## Example with Props

Here’s a button with dynamic props:

<Button label="Submit" color="primary" />
```

### 3. **Reusability with Components**
Since you can use any React component, you can integrate complex UI elements, such as forms, charts, or interactive widgets, into your content.

For example:

```mdx
# User Statistics

<Chart data={userData} />

This chart is embedded directly into the documentation!
```

### 4. **How to Set It Up**
To use **MDX** in your project, you’ll typically configure a tool like **Storybook**, **Next.js**, or a custom React setup.

#### With **Storybook**:
MDX is perfect for writing component documentation in **Storybook**. You can write documentation for your components and render the components directly in the docs.

```mdx
import { Button } from './Button';

<Meta title="Button" component={Button} />

# Button Component

This is the `Button` component with different styles.

<Canvas>
  <Story name="Primary Button">
    <Button label="Primary" color="primary" />
  </Story>
</Canvas>
```

#### With **Next.js**:
Next.js makes it easy to integrate MDX for static pages or blogs.

1. Install MDX support for Next.js:
   ```bash
   npm install @next/mdx @mdx-js/loader
   ```

2. Configure Next.js in `next.config.js`:
   ```js
   const withMDX = require('@next/mdx')({
     extension: /\.mdx?$/
   });
   
   module.exports = withMDX({
     pageExtensions: ['js', 'jsx', 'md', 'mdx'],
   });
   ```

3. Create an `.mdx` file and use React components inside:
   ```mdx
   # Hello World

   <Button label="Click Me" />
   ```

#### With **Gatsby**:
MDX can also be used in **Gatsby** to create rich blog posts or pages by embedding React components within Markdown.

### 5. **Where to Use MDX**
MDX is often used for:
- **Technical documentation** (with live component previews).
- **Component libraries** (Storybook).
- **Blogs or content management systems** (Next.js/Gatsby).
- **Interactive tutorials**.

### Key Advantages of MDX:
- **Markdown simplicity**: Use the same syntax you’re used to for writing docs or blog posts.
- **React components**: Dynamically enhance content with interactivity, custom UI, or reusable components.
- **Reusable content**: Leverage the power of React to make your content dynamic and interactive.

---

MDX gives you the **best of both worlds**: you can write content in **Markdown**, and whenever you need dynamic or interactive elements, you simply drop in a React component. It’s ideal for use cases where you want content and code to live together seamlessly.

Let me know if you'd like help with setting up or using MDX further!

---

const components = {
    "Atomic": {
      "Text": [
        { name: "Heading", paths: { css: "styles/Atomic/Heading/Heading.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Heading/Heading.jsx", stories: "src/stories/Atomic/Heading/Heading.stories.jsx" }},
        { name: "Paragraph", paths: { css: "styles/Atomic/Paragraph/Paragraph.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Paragraph/Paragraph.jsx", stories: "src/stories/Atomic/Paragraph/Paragraph.stories.jsx" }},
        { name: "Label", paths: { css: "styles/Atomic/Label/Label.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Label/Label.jsx", stories: "src/stories/Atomic/Label/Label.stories.jsx" }},
        { name: "Caption", paths: { css: "styles/Atomic/Caption/Caption.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Caption/Caption.jsx", stories: "src/stories/Atomic/Caption/Caption.stories.jsx" }},
      ],
      "Interactive": [
        { name: "Button", paths: { css: "styles/Atomic/Button/Button.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Button/Button.jsx", stories: "src/stories/Atomic/Button/Button.stories.jsx" }},
        { name: "Link", paths: { css: "styles/Atomic/Link/Link.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Link/Link.jsx", stories: "src/stories/Atomic/Link/Link.stories.jsx" }},
        { name: "Icon", paths: { css: "styles/Atomic/Icon/Icon.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Icon/Icon.jsx", stories: "src/stories/Atomic/Icon/Icon.stories.jsx" }},
        { name: "Checkbox", paths: { css: "styles/Atomic/Checkbox/Checkbox.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Checkbox/Checkbox.jsx", stories: "src/stories/Atomic/Checkbox/Checkbox.stories.jsx" }},
        { name: "RadioButton", paths: { css: "styles/Atomic/RadioButton/RadioButton.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/RadioButton/RadioButton.jsx", stories: "src/stories/Atomic/RadioButton/RadioButton.stories.jsx" }},
        { name: "Toggle", paths: { css: "styles/Atomic/Toggle/Toggle.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Toggle/Toggle.jsx", stories: "src/stories/Atomic/Toggle/Toggle.stories.jsx" }},
        { name: "TextInput", paths: { css: "styles/Atomic/TextInput/TextInput.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/TextInput/TextInput.jsx", stories: "src/stories/Atomic/TextInput/TextInput.stories.jsx" }},
        { name: "TextArea", paths: { css: "styles/Atomic/TextArea/TextArea.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/TextArea/TextArea.jsx", stories: "src/stories/Atomic/TextArea/TextArea.stories.jsx" }},
        { name: "Select", paths: { css: "styles/Atomic/Select/Select.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Select/Select.jsx", stories: "src/stories/Atomic/Select/Select.stories.jsx" }},
        { name: "Slider", paths: { css: "styles/Atomic/Slider/Slider.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Slider/Slider.jsx", stories: "src/stories/Atomic/Slider/Slider.stories.jsx" }},
        { name: "RangeInput", paths: { css: "styles/Atomic/RangeInput/RangeInput.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/RangeInput/RangeInput.jsx", stories: "src/stories/Atomic/RangeInput/RangeInput.stories.jsx" }},
      ],
      "Media": [
        { name: "Image", paths: { css: "styles/Atomic/Image/Image.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Image/Image.jsx", stories: "src/stories/Atomic/Image/Image.stories.jsx" }},
        { name: "Video", paths: { css: "styles/Atomic/Video/Video.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Video/Video.jsx", stories: "src/stories/Atomic/Video/Video.stories.jsx" }},
        { name: "Audio", paths: { css: "styles/Atomic/Audio/Audio.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Audio/Audio.jsx", stories: "src/stories/Atomic/Audio/Audio.stories.jsx" }},
        { name: "Icon", paths: { css: "styles/Atomic/Icon/Icon.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Icon/Icon.jsx", stories: "src/stories/Atomic/Icon/Icon.stories.jsx" }},
      ],
      "Visual": [
        { name: "Divider", paths: { css: "styles/Atomic/Divider/Divider.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Divider/Divider.jsx", stories: "src/stories/Atomic/Divider/Divider.stories.jsx" }},
        { name: "Spacer", paths: { css: "styles/Atomic/Spacer/Spacer.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Spacer/Spacer.jsx", stories: "src/stories/Atomic/Spacer/Spacer.stories.jsx" }},
        { name: "Tooltip", paths: { css: "styles/Atomic/Tooltip/Tooltip.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Tooltip/Tooltip.jsx", stories: "src/stories/Atomic/Tooltip/Tooltip.stories.jsx" }},
        { name: "Badge", paths: { css: "styles/Atomic/Badge/Badge.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Badge/Badge.jsx", stories: "src/stories/Atomic/Badge/Badge.stories.jsx" }},
        { name: "Tag", paths: { css: "styles/Atomic/Tag/Tag.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Tag/Tag.jsx", stories: "src/stories/Atomic/Tag/Tag.stories.jsx" }},
      ],
      "Feedback": [
        { name: "Loader", paths: { css: "styles/Atomic/Loader/Loader.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Loader/Loader.jsx", stories: "src/stories/Atomic/Loader/Loader.stories.jsx" }},
        { name: "Spinner", paths: { css: "styles/Atomic/Spinner/Spinner.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Spinner/Spinner.jsx", stories: "src/stories/Atomic/Spinner/Spinner.stories.jsx" }},
        { name: "ProgressBar", paths: { css: "styles/Atomic/ProgressBar/ProgressBar.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/ProgressBar/ProgressBar.jsx", stories: "src/stories/Atomic/ProgressBar/ProgressBar.stories.jsx" }},
        { name: "Alert", paths: { css: "styles/Atomic/Alert/Alert.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Alert/Alert.jsx", stories: "src/stories/Atomic/Alert/Alert.stories.jsx" }},
        { name: "Snackbar", paths: { css: "styles/Atomic/Snackbar/Snackbar.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Snackbar/Snackbar.jsx", stories: "src/stories/Atomic/Snackbar/Snackbar.stories.jsx" }},
      ]
    },
    "Molecules": {
      "FormElements": [
        { name: "InputGroup", paths: { css: "styles/Molecules/InputGroup/InputGroup.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/InputGroup/InputGroup.jsx", stories: "src/stories/Molecules/InputGroup/InputGroup.stories.jsx" }},
        { name: "InputWithLabel", paths: { css: "styles/Molecules/InputWithLabel/InputWithLabel.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/InputWithLabel/InputWithLabel.jsx", stories: "src/stories/Molecules/InputWithLabel/InputWithLabel.stories.jsx" }},
        { name: "SearchBar", paths: { css: "styles/Molecules/SearchBar/SearchBar.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/SearchBar/SearchBar.jsx", stories: "src/stories/Molecules/SearchBar/SearchBar.stories.jsx" }},
        { name: "FileUpload", paths: { css: "styles/Molecules/FileUpload/FileUpload.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/FileUpload/FileUpload.jsx", stories: "src/stories/Molecules/FileUpload/FileUpload.stories.jsx" }},
        { name: "FormField", paths: { css: "styles/Molecules/FormField/FormField.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/FormField/FormField.jsx", stories: "src/stories/Molecules/FormField/FormField.stories.jsx" }},
      ],
      "ButtonsWithIcons": [
        { name: "IconButton", paths: { css: "styles/Molecules/IconButton/IconButton.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/IconButton/IconButton.jsx", stories: "src/stories/Molecules/IconButton/IconButton.stories.jsx" }},
        { name: "ButtonGroup", paths: { css: "styles/Molecules/ButtonGroup/ButtonGroup.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/ButtonGroup/ButtonGroup.jsx", stories: "src/stories/Molecules/ButtonGroup/ButtonGroup.stories.jsx" }},
      ],
      "MediaMolecules": [
        { name: "ImageWithCaption", paths: { css: "styles/Molecules/ImageWithCaption/ImageWithCaption.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/ImageWithCaption/ImageWithCaption.jsx", stories: "src/stories/Molecules/ImageWithCaption/ImageWithCaption.stories.jsx" }},
        { name: "VideoWithDescription", paths: { css: "styles/Molecules/VideoWithDescription/VideoWithDescription.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/VideoWithDescription/VideoWithDescription.jsx", stories: "src/stories/Molecules/VideoWithDescription/VideoWithDescription.stories.jsx" }},
        { name: "AvatarWithName", paths: { css: "styles/Molecules/AvatarWithName/AvatarWithName.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/AvatarWithName/AvatarWithName.jsx", stories: "src/stories/Molecules/AvatarWithName/AvatarWithName.stories.jsx" }},
        { name: "AudioPlayer", paths: { css: "styles/Molecules/AudioPlayer/AudioPlayer.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/AudioPlayer/AudioPlayer.jsx", stories: "src/stories/Molecules/AudioPlayer/AudioPlayer.stories.jsx" }},
      ],
      "FeedbackMolecules": [
        { name: "Notification", paths: { css: "styles/Molecules/Notification/Notification.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/Notification/Notification.jsx", stories: "src/stories/Molecules/Notification/Notification.stories.jsx" }},
        { name: "Modal", paths: { css: "styles/Molecules/Modal/Modal.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/Modal/Modal.jsx", stories: "src/stories/Molecules/Modal/Modal.stories.jsx" }},
      ]
    },
    "Organisms": {
      "Forms": [
        { name: "SignInForm", paths: { css: "styles/Organisms/SignInForm/SignInForm.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/SignInForm/SignInForm.jsx", stories: "src/stories/Organisms/SignInForm/SignInForm.stories.jsx" }},
        { name: "RegistrationForm", paths: { css: "styles/Organisms/RegistrationForm/RegistrationForm.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/RegistrationForm/RegistrationForm.jsx", stories: "src/stories/Organisms/RegistrationForm/RegistrationForm.stories.jsx" }},
        { name: "ContactForm", paths: { css: "styles/Organisms/ContactForm/ContactForm.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/ContactForm/ContactForm.jsx", stories: "src/stories/Organisms/ContactForm/ContactForm.stories.jsx" }},
      ],
      "ContentDisplay": [
        { name: "Card", paths: { css: "styles/Organisms/Card/Card.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/Card/Card.jsx", stories: "src/stories/Organisms/Card/Card.stories.jsx" }},
        { name: "MediaCard", paths: { css: "styles/Organisms/MediaCard/MediaCard.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/MediaCard/MediaCard.jsx", stories: "src/stories/Organisms/MediaCard/MediaCard.stories.jsx" }},
        { name: "List", paths: { css: "styles/Organisms/List/List.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/List/List.jsx", stories: "src/stories/Organisms/List/List.stories.jsx" }},
        { name: "Accordion", paths: { css: "styles/Organisms/Accordion/Accordion.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/Accordion/Accordion.jsx", stories: "src/stories/Organisms/Accordion/Accordion.stories.jsx" }},
      ],
      "Navigation": [
        { name: "Navbar", paths: { css: "styles/Organisms/Navbar/Navbar.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/Navbar/Navbar.jsx", stories: "src/stories/Organisms/Navbar/Navbar.stories.jsx" }},
        { name: "Sidebar", paths: { css: "styles/Organisms/Sidebar/Sidebar.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/Sidebar/Sidebar.jsx", stories: "src/stories/Organisms/Sidebar/Sidebar.stories.jsx" }},
        { name: "Breadcrumbs", paths: { css: "styles/Organisms/Breadcrumbs/Breadcrumbs.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/Breadcrumbs/Breadcrumbs.jsx", stories: "src/stories/Organisms/Breadcrumbs/Breadcrumbs.stories.jsx" }},
      ],
      "MediaCollections": [
        { name: "ImageGallery", paths: { css: "styles/Organisms/ImageGallery/ImageGallery.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/ImageGallery/ImageGallery.jsx", stories: "src/stories/Organisms/ImageGallery/ImageGallery.stories.jsx" }},
        { name: "VideoPlaylist", paths: { css: "styles/Organisms/VideoPlaylist/VideoPlaylist.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/VideoPlaylist/VideoPlaylist.jsx", stories: "src/stories/Organisms/VideoPlaylist/VideoPlaylist.stories.jsx" }},
        { name: "Carousel", paths: { css: "styles/Organisms/Carousel/Carousel.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/Carousel/Carousel.jsx", stories: "src/stories/Organisms/Carousel/Carousel.stories.jsx" }},
      ],
      "Tables": [
        { name: "DataTable", paths: { css: "styles/Organisms/DataTable/DataTable.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/DataTable/DataTable.jsx", stories: "src/stories/Organisms/DataTable/DataTable.stories.jsx" }},
        { name: "PricingTable", paths: { css: "styles/Organisms/PricingTable/PricingTable.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/PricingTable/PricingTable.jsx", stories: "src/stories/Organisms/PricingTable/PricingTable.stories.jsx" }},
        { name: "ComparisonTable", paths: { css: "styles/Organisms/ComparisonTable/ComparisonTable.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/ComparisonTable/ComparisonTable.jsx", stories: "src/stories/Organisms/ComparisonTable/ComparisonTable.stories.jsx" }},
      ]
    },
    "Layout": {
      "Grid": [
        { name: "Grid", paths: { css: "styles/Layout/Grid/Grid.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Grid/Grid.jsx", stories: "src/stories/Layout/Grid/Grid.stories.jsx" }},
      ],
      "Section": [
        { name: "Section", paths: { css: "styles/Layout/Section/Section.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Section/Section.jsx", stories: "src/stories/Layout/Section/Section.stories.jsx" }},
      ],
      "FlexboxLayout": [
        { name: "Flexbox", paths: { css: "styles/Layout/Flexbox/Flexbox.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Flexbox/Flexbox.jsx", stories: "src/stories/Layout/Flexbox/Flexbox.stories.jsx" }},
      ],
      "NavigationAndMenus": [
        { name: "Header", paths: { css: "styles/Layout/Header/Header.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Header/Header.jsx", stories: "src/stories/Layout/Header/Header.stories.jsx" }},
        { name: "Footer", paths: { css: "styles/Layout/Footer/Footer.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Footer/Footer.jsx", stories: "src/stories/Layout/Footer/Footer.stories.jsx" }},
        { name: "DropdownMenu", paths: { css: "styles/Layout/DropdownMenu/DropdownMenu.css", globalCss: "styles/global.css", jsx: "src/components/Layout/DropdownMenu/DropdownMenu.jsx", stories: "src/stories/Layout/DropdownMenu/DropdownMenu.stories.jsx" }},
        { name: "Pagination", paths: { css: "styles/Layout/Pagination/Pagination.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Pagination/Pagination.jsx", stories: "src/stories/Layout/Pagination/Pagination.stories.jsx" }},
      ],
      "ContentOrganization": [
        { name: "Sidebar", paths: { css: "styles/Layout/Sidebar/Sidebar.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Sidebar/Sidebar.jsx", stories: "src/stories/Layout/Sidebar/Sidebar.stories.jsx" }},
        { name: "Tabs", paths: { css: "styles/Layout/Tabs/Tabs.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Tabs/Tabs.jsx", stories: "src/stories/Layout/Tabs/Tabs.stories.jsx" }},
        { name: "Accordion", paths: { css: "styles/Layout/Accordion/Accordion.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Accordion/Accordion.jsx", stories: "src/stories/Layout/Accordion/Accordion.stories.jsx" }},
      ],
      "HeroSections": [
        { name: "HeroBanner", paths: { css: "styles/Layout/HeroBanner/HeroBanner.css", globalCss: "styles/global.css", jsx: "src/components/Layout/HeroBanner/HeroBanner.jsx", stories: "src/stories/Layout/HeroBanner/HeroBanner.stories.jsx" }},
        { name: "HeroImageVideo", paths: { css: "styles/Layout/HeroImageVideo/HeroImageVideo.css", globalCss: "styles/global.css", jsx: "src/components/Layout/HeroImageVideo/HeroImageVideo.jsx", stories: "src/stories/Layout/HeroImageVideo/HeroImageVideo.stories.jsx" }},
      ]
    },
    "Templates": {
        "LandingPages": [
          { name: "HeroSection", paths: { css: "styles/Templates/LandingPages/HeroSection.css", globalCss: "styles/global.css", jsx: "src/components/Templates/LandingPages/HeroSection.jsx", stories: "src/stories/Templates/LandingPages/HeroSection.stories.jsx" }},
          { name: "FeaturesList", paths: { css: "styles/Templates/LandingPages/FeaturesList.css", globalCss: "styles/global.css", jsx: "src/components/Templates/LandingPages/FeaturesList.jsx", stories: "src/stories/Templates/LandingPages/FeaturesList.stories.jsx" }},
          { name: "CallToAction", paths: { css: "styles/Templates/LandingPages/CallToAction.css", globalCss: "styles/global.css", jsx: "src/components/Templates/LandingPages/CallToAction.jsx", stories: "src/stories/Templates/LandingPages/CallToAction.stories.jsx" }},
          { name: "Testimonials", paths: { css: "styles/Templates/LandingPages/Testimonials.css", globalCss: "styles/global.css", jsx: "src/components/Templates/LandingPages/Testimonials.jsx", stories: "src/stories/Templates/LandingPages/Testimonials.stories.jsx" }},
        ],
        "DashboardLayouts": [
          { name: "AdminDashboard", paths: { css: "styles/Templates/DashboardLayouts/AdminDashboard.css", globalCss: "styles/global.css", jsx: "src/components/Templates/DashboardLayouts/AdminDashboard.jsx", stories: "src/stories/Templates/DashboardLayouts/AdminDashboard.stories.jsx" }},
          { name: "SidebarTopNav", paths: { css: "styles/Templates/DashboardLayouts/SidebarTopNav.css", globalCss: "styles/global.css", jsx: "src/components/Templates/DashboardLayouts/SidebarTopNav.jsx", stories: "src/stories/Templates/DashboardLayouts/SidebarTopNav.stories.jsx" }},
        ],
        "ECommercePages": [
          { name: "ProductPage", paths: { css: "styles/Templates/ECommercePages/ProductPage.css", globalCss: "styles/global.css", jsx: "src/components/Templates/ECommercePages/ProductPage.jsx", stories: "src/stories/Templates/ECommercePages/ProductPage.stories.jsx" }},
          { name: "ShoppingCart", paths: { css: "styles/Templates/ECommercePages/ShoppingCart.css", globalCss: "styles/global.css", jsx: "src/components/Templates/ECommercePages/ShoppingCart.jsx", stories: "src/stories/Templates/ECommercePages/ShoppingCart.stories.jsx" }},
        ],
        "AuthenticationPages": [
          { name: "SignInPage", paths: { css: "styles/Templates/AuthenticationPages/SignInPage.css", globalCss: "styles/global.css", jsx: "src/components/Templates/AuthenticationPages/SignInPage.jsx", stories: "src/stories/Templates/AuthenticationPages/SignInPage.stories.jsx" }},
          { name: "RegistrationPage", paths: { css: "styles/Templates/AuthenticationPages/RegistrationPage.css", globalCss: "styles/global.css", jsx: "src/components/Templates/AuthenticationPages/RegistrationPage.jsx", stories: "src/stories/Templates/AuthenticationPages/RegistrationPage.stories.jsx" }},
        ],
        "ContactUsPages": [
          { name: "FormSection", paths: { css: "styles/Templates/ContactUsPages/FormSection.css", globalCss: "styles/global.css", jsx: "src/components/Templates/ContactUsPages/FormSection.jsx", stories: "src/stories/Templates/ContactUsPages/FormSection.stories.jsx" }},
          { name: "LocationInfo", paths: { css: "styles/Templates/ContactUsPages/LocationInfo.css", globalCss: "styles/global.css", jsx: "src/components/Templates/ContactUsPages/LocationInfo.jsx", stories: "src/stories/Templates/ContactUsPages/LocationInfo.stories.jsx" }},
          { name: "SocialMediaLinks", paths: { css: "styles/Templates/ContactUsPages/SocialMediaLinks.css", globalCss: "styles/global.css", jsx: "src/components/Templates/ContactUsPages/SocialMediaLinks.jsx", stories: "src/stories/Templates/ContactUsPages/SocialMediaLinks.stories.jsx" }},
        ]
      },
      "Pages": {
        "HomePage": [
          { name: "HomePage", paths: { css: "styles/Pages/HomePage/HomePage.css", globalCss: "styles/global.css", jsx: "src/components/Pages/HomePage/HomePage.jsx", stories: "src/stories/Pages/HomePage/HomePage.stories.jsx" }},
        ],
        "AboutUsPage": [
          { name: "AboutUsPage", paths: { css: "styles/Pages/AboutUsPage/AboutUsPage.css", globalCss: "styles/global.css", jsx: "src/components/Pages/AboutUsPage/AboutUsPage.jsx", stories: "src/stories/Pages/AboutUsPage/AboutUsPage.stories.jsx" }},
        ],
        "ContactUsPage": [
          { name: "ContactUsPage", paths: { css: "styles/Pages/ContactUsPage/ContactUsPage.css", globalCss: "styles/global.css", jsx: "src/components/Pages/ContactUsPage/ContactUsPage.jsx", stories: "src/stories/Pages/ContactUsPage/ContactUsPage.stories.jsx" }},
        ],
        "UserProfilePage": [
          { name: "UserProfilePage", paths: { css: "styles/Pages/UserProfilePage/UserProfilePage.css", globalCss: "styles/global.css", jsx: "src/components/Pages/UserProfilePage/UserProfilePage.jsx", stories: "src/stories/Pages/UserProfilePage/UserProfilePage.stories.jsx" }},
        ],
        "ProductDetailPage": [
          { name: "ProductDetailPage", paths: { css: "styles/Pages/ProductDetailPage/ProductDetailPage.css", globalCss: "styles/global.css", jsx: "src/components/Pages/ProductDetailPage/ProductDetailPage.jsx", stories: "src/stories/Pages/ProductDetailPage/ProductDetailPage.stories.jsx" }},
        ],
        "CheckoutPage": [
          { name: "CheckoutPage", paths: { css: "styles/Pages/CheckoutPage/CheckoutPage.css", globalCss: "styles/global.css", jsx: "src/components/Pages/CheckoutPage/CheckoutPage.jsx", stories: "src/stories/Pages/CheckoutPage/CheckoutPage.stories.jsx" }},
        ],
        "BlogPage": [
          { name: "BlogPage", paths: { css: "styles/Pages/BlogPage/BlogPage.css", globalCss: "styles/global.css", jsx: "src/components/Pages/BlogPage/BlogPage.jsx", stories: "src/stories/Pages/BlogPage/BlogPage.stories.jsx" }},
        ],
        "AdminDashboard": [
          { name: "AdminDashboard", paths: { css: "styles/Pages/AdminDashboard/AdminDashboard.css", globalCss: "styles/global.css", jsx: "src/components/Pages/AdminDashboard/AdminDashboard.jsx", stories: "src/stories/Pages/AdminDashboard/AdminDashboard.stories.jsx" }},
        ],
        "SearchResultsPage": [
          { name: "SearchResultsPage", paths: { css: "styles/Pages/SearchResultsPage/SearchResultsPage.css", globalCss: "styles/global.css", jsx: "src/components/Pages/SearchResultsPage/SearchResultsPage.jsx", stories: "src/stories/Pages/SearchResultsPage/SearchResultsPage.stories.jsx" }},
        ]
      },
      "Miscellaneous": {
        "TooltipsPopovers": [
          { name: "Tooltip", paths: { css: "styles/Miscellaneous/Tooltip/Tooltip.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/Tooltip/Tooltip.jsx", stories: "src/stories/Miscellaneous/Tooltip/Tooltip.stories.jsx" }},
          { name: "Popover", paths: { css: "styles/Miscellaneous/Popover/Popover.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/Popover/Popover.jsx", stories: "src/stories/Miscellaneous/Popover/Popover.stories.jsx" }},
        ],
        "Overlays": [
          { name: "ModalWindow", paths: { css: "styles/Miscellaneous/ModalWindow/ModalWindow.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/ModalWindow/ModalWindow.jsx", stories: "src/stories/Miscellaneous/ModalWindow/ModalWindow.stories.jsx" }},
          { name: "Drawer", paths: { css: "styles/Miscellaneous/Drawer/Drawer.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/Drawer/Drawer.jsx", stories: "src/stories/Miscellaneous/Drawer/Drawer.stories.jsx" }},
        ],
        "SearchComponents": [
          { name: "SearchBox", paths: { css: "styles/Miscellaneous/SearchBox/SearchBox.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/SearchBox/SearchBox.jsx", stories: "src/stories/Miscellaneous/SearchBox/SearchBox.stories.jsx" }},
          { name: "Autocomplete", paths: { css: "styles/Miscellaneous/Autocomplete/Autocomplete.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/Autocomplete/Autocomplete.jsx", stories: "src/stories/Miscellaneous/Autocomplete/Autocomplete.stories.jsx" }},
        ],
        "MediaAndContentControls": [
          { name: "AudioControls", paths: { css: "styles/Miscellaneous/MediaAndContentControls/AudioControls.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/MediaAndContentControls/AudioControls.jsx", stories: "src/stories/Miscellaneous/MediaAndContentControls/AudioControls.stories.jsx" }},
          { name: "VideoControls", paths: { css: "styles/Miscellaneous/MediaAndContentControls/VideoControls.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/MediaAndContentControls/VideoControls.jsx", stories: "src/stories/Miscellaneous/MediaAndContentControls/VideoControls.stories.jsx" }},
          { name: "Filters", paths: { css: "styles/Miscellaneous/MediaAndContentControls/Filters.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/MediaAndContentControls/Filters.jsx", stories: "src/stories/Miscellaneous/MediaAndContentControls/Filters.stories.jsx" }},
        ],
        "InteractiveMaps": [
          { name: "Map", paths: { css: "styles/Miscellaneous/InteractiveMaps/Map.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/InteractiveMaps/Map.jsx", stories: "src/stories/Miscellaneous/InteractiveMaps/Map.stories.jsx" }},
        ]
      }
    };

---

example of a _Atomic component:

import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Keep custom styles

export const Button = ({ primary, size, label, noBorder, children, ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  const buttonSize = size === 'small' ? 'button--small' : size === 'large' ? 'button--large' : 'button--medium';
  const borderClass = noBorder ? 'button--no-border' : '';

  return (
    <button
      type="button"
      className={`button ${mode} ${buttonSize} ${borderClass} rounded px-4 py-2`}
      {...props}
    >
      {children || label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  noBorder: PropTypes.bool, // New prop for no border button
  children: PropTypes.node,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  label: '',
  noBorder: false, // Default no border to false
};

export default Button;

---

import { Button } from './Button';

export default {
  title: '_Atomic/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A customizable button component for various user interactions.',
      },
    },
  },
  argTypes: {
    primary: { control: 'boolean', description: 'Is this the primary button?' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] }, description: 'Size of the button' },
    noborder: { control: 'boolean', description: 'No border button style' },
    label: { control: 'text', description: 'Text label for the button' },
    children: { control: 'text', description: 'Content inside the button' },
  },
};

export const Primary = {
  args: {
    primary: true,
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    children: 'Secondary Button',
  },
};

export const NoBorder = {
  args: {
    noborder: true,
    children: 'No Border Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

--

/* Base styles */
.button {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  text-align: center;
  border: 1px solid transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Primary button */
.button--primary {
  background-color: #00695c; /* Green color matching your theme */
  color: #fff;
  border-color: #004d40; /* Darker green for border */
}

.button--primary:hover {
  background-color: #004d40;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Secondary button (white with green text and border) */
.button--secondary {
  background-color: #fff;
  color: #00695c;
  border-color: #00695c;
}

.button--secondary:hover {
  background-color: #f0f0f0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

/* Sizes */
.button--small {
  font-size: 12px;
  padding: 6px 12px;
}

.button--medium {
  font-size: 14px;
  padding: 10px 20px;
}

.button--large {
  font-size: 16px;
  padding: 14px 28px;
}

/* No Border Button Style */
.button--no-border {
  background-color: transparent; /* No background */
  color: #00695c; /* Text color */
  border: none; /* Remove the border */
  border-bottom: 2px solid #00695c; /* Add only the underline */
  border-radius: 0; /* Remove rounded corners */
  padding: 0; /* Adjust padding */
}

.button--no-border:hover {
  border-bottom: 2px solid #004d40; /* Darker underline on hover */
  background-color: transparent;
  box-shadow: none; /* No shadow on hover */
}

---