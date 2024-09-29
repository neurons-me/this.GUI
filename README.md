<img src="https://suign.github.io/assets/imgs/this_GUI.svg" alt="Cleaker Me" width="377" height="377">

# THIS.GUI
The goal is to automate the **GUI** generation process so users only pass data or configurations, and **this.GUI** handles the rest.
The package exports:
	•	Pre-defined components.
	•	MDX and Theme Providers.
	•	An MDX editor interface.

Install `this.gui` via **npm**:
```shell
npm install this.gui
```
Then run command:
```bash
npm start

```
a. Export Pre-built Components
Components are categorized (Atoms, Molecules, etc.) and are exportable so users can easily import them into their MDX files or directly in their React components.

## **Explanation of Grouping:**
​	•	**Atomic**: Smallest components that are not broken down further.
Alert, Audio, Badge, Button, Caption, Checkbox, Container, Divider, Heading, Icon,  Image, Label, Link , Loader, Paragraph, ProgressBar, RadioButton, RangeInput, Select, Slider, Snackbar, Spacer, Spinner, Tag, TextArea, TextInput, Toggle, Tooltip, Video.

​	•	**Molecules**: Simple combinations of atomic components that together form a small UI feature.
Accordion, AudioPlayer, AvatarWithName, Breadcrumbs, ButtonGroup, Card, ComparisonTable, DataTable, FileUpload, FormField, Header, IconButton, ImageWithCaption, InputGroup, InputWithLabel, List, MediaCard, Modal, Navbar, Notification, PricingTable, SearchBar, Sidebar, VideoWithDescription.

​	•	**Organisms**: More complex, combining molecules and atomic components to create larger, more detailed features.
​	•	**Layout**: Components related to structuring and organizing content across the page.
​	•	**Templates**: Layouts of full pages, combining organisms and layout components.
​	•	**Pages**: Complete and functional pages made up of templates and content.
​	•	**Miscellaneous**: Utility components that don’t fit into the above categories but provide important functions, such as popovers, overlays, and media controls.

On installation this.GUI will be setup as:


├── /GUI                # Dedicated directory for GUI components and MDX pages
│   ├── /components     # Custom components created by the user
│   ├── /mdx            # MDX files defining pages and content using components
│   └── /styles         # Custom styles for components (optional)

Breakdown of Each Subdirectory:
/components:
This is where users build their custom React components. They can create new components, extend existing ones from this.GUI, or modify them as needed. These components can then be used throughout the MDX files.

/mdx:
This folder is used to store MDX files that act as pages or sections of the application. Users can import and use components from the /components folder or from the generic set provided by this.GUI. This allows for a highly modular and customizable interface creation.

/styles:
This optional directory can be used for custom CSS or style files that modify the look and feel of the components and layouts. Users can define global styles, component-specific styles, or themes to match their brand.

Workflow for Users:
Install this.GUI:
npm install this.GUI will automatically set up the /GUI directory with the necessary subdirectories.

Create Components:
Users can start creating their own components in /components, using the provided components as a base or inspiration.

Build Pages with MDX:
MDX files in the /mdx folder can be used to assemble pages, where users can directly import and use the components they've created.

Style Customization:
Any additional styling or theming can be managed in the /styles directory, keeping design consistent and organized.

Run and Test:
Users run their main app using their existing development setup, and the MDX files will render the React components, effectively creating the desired GUI.

Build for Production:
Once development is complete, the GUI directory can be built into a dist folder, packaging the components, pages, and styles for deployment or distribution.

This approach keeps the GUI modular, maintainable, and focused on user experience design, while the backend and other logic remain separate and manageable.


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
