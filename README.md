<img src="https://suign.github.io/assets/imgs/this_GUI.svg" alt="Cleaker Me" width="377" height="377">



# **THIS.GUI**

**this.GUI** aims to automate the **GUI** generation process by allowing users to pass data or configurations. It then dynamically builds the UI based on these inputs. This package exports pre-defined components, theme providers, MDX integration, and a Site/App builder for rapid prototyping and deployment.

#### **Installation & Setup**

Install this.gui via **npm**:

```bash
npm install this.gui
```

After installation, you can start the development server using:

```bas
npm start
```

This command will initialize the app, allowing you to use the **Site Builder** and **Component Library**.

#### **Key Features**

**1. Pre-built Components**

​	•	**Atoms**: Smallest building blocks like buttons, inputs, text elements, etc.

​	•	**Molecules**: Combinations of atoms to form reusable UI elements like cards, forms, tables, etc.

​	•	**Organisms**: More complex components that combine multiple molecules.

​	•	**Layouts & Templates**: Predefined page structures that can be customized using the JSON configuration.

#### **2. MDX & Theme Providers**

​	•	MDX integration for dynamic content rendering.

​	•	Easy-to-use theme providers for switching between light and dark modes.

#### **3. Site & App Builder**

​	•	Drag-and-drop interface for building entire pages or applications.

​	•	Generates JSON configuration that maps to your UI structure.

​	•	The JSON-based UI renderer automatically handles rendering of components based on the passed configuration.

**Getting Started**

Here’s a quick overview of how to use **this.GUI** in your project.

**1. Direct JSX Usage**

The **index.js** file allows you to import and use pre-built components directly in your JSX/JS files.

```jsx
import { Button, TextInput } from 'this.gui/Atoms';

function MyComponent() {
 return (
    <div>
   <Button label="Click Me" color="primary" />
   <TextInput placeholder="Enter text" />
  </div>
 );
}
```

**2. Dynamic UI via JSON**

Use the **ComponentRegistry** and **renderComponent** function to build dynamic UIs from JSON configurations.

Example JSON:

```json
{
 "layout": [
  {
   "type": "Button",
   "props": { "label": "Click Me", "color": "primary" }
  },
  {
   "type": "Heading",
   "props": { "text": "Welcome to Our Site", "level": 1 }
  }
 ]
}
```

Rendering the above JSON with **this.GUI**:

```jsx
import React from 'react';
import { Page } from 'this.gui/Page';

const config = {
 layout: [
  { type: 'Button', props: { label: 'Click Me', color: 'primary' } },
  { type: 'Heading', props: { text: 'Welcome to Our Site', level: 1 } }
 ]
};

function App() {
 return <Page config={config} />;
}
```

**3. Component Registry & JSON Mapping**

**ComponentRegistry** maps JSON keys to the corresponding React components. This allows dynamic rendering of components via JSON without directly importing each component.

```jsx
const ComponentRegistry = {
 Button: Atoms.Button,
 Heading: Atoms.Heading,
 Paragraph: Atoms.Paragraph,
 *// More mappings...*
};
```

**Component Categories**

​	•	**Atoms**: Small, reusable components like Buttons, Inputs, Paragraphs.

​	•	Examples: Button, TextInput, Paragraph, Image, Icon, etc.

​	•	**Molecules**: Components that combine multiple atoms.

​	•	Examples: Card, Navbar, Breadcrumbs, FormField, AudioPlayer, etc.

​	•	**Organisms**: More complex components combining multiple molecules.

​	•	Examples: LoginForm, SidebarLayout, etc.

​	•	**Layouts & Templates**: Complete page structures.

​	•	Examples: TwoColumnLayout, LandingPageTemplate, etc.



**Key Components**

1. **Component Registry**

•	Maps JSON keys to components for dynamic rendering.

2. **JSON Configuration Files**

•	Define the layout and structure of your UI in JSON.

3. **Rendering Engine**

•	Reads the JSON configuration and renders the appropriate components dynamically.



**Example Usage**

Here’s an example that showcases how to use the JSON configuration for rendering a dynamic UI.

```json
{
 "layout": [
  {
   "type": "Card",
   "props": { "variant": "solid", "color": "primary-color", "width": "300px" },
   "children": [
    {
     "type": "Paragraph",
     "props": { "text": "Welcome to our site!" }
    }
   ]
  }
 ]
}
```



You can pass this JSON configuration to the Page component to render the UI dynamically:

```jsx
import { Page } from 'this.gui/Page';
import config from './config.json'; *// Import the JSON configuration*

function App() {
 return <Page config={config} />;
}
```

**Additional Resources**

​	•	**Storybook**: For browsing and testing all pre-built components. Launch Storybook with:

npm run storybook

​	•**MDX Editor**: Edit and visualize MDX content in real time.

**this.GUI** is part of the **Neurons.me** ecosystem, a set of modular data structures designed to work together across multiple domains.

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
