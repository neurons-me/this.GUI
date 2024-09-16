import{j as n}from"./jsx-runtime-2aae9559.js";import{u as i}from"./index-571eae1e.js";import"./index-ff614419.js";function o(t){const e={h1:"h1",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx("img",{src:"https://suign.github.io/assets/imgs/this_GUI.svg",alt:"Cleaker Me",width:"477",height:"477",align:"center",style:{marginBottom:"55px"}}),`
`,n.jsx(e.h1,{id:"welcome-to-thisgui",children:"Welcome to THIS.GUI"}),`
`,n.jsx(e.h3,{id:"explanation-of-grouping",children:n.jsx(e.strong,{children:"Explanation of Grouping:"})}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Atomic Design"}),` methodology defines organisms as complex structures built from smaller components, but how we perceive complexity can vary based on context.
Let’s break it down to align with your insight:`]}),`
`,n.jsxs(e.p,{children:["​	•	",n.jsx(e.strong,{children:"Atomic"}),`: Smallest components that are not broken down further.
Alert, Audio, Badge, Button, Caption, Checkbox, Container, Divider, Heading, Icon,  Image, Label, Link , Loader, Paragraph, ProgressBar, RadioButton, RangeInput, Select, Slider, Snackbar, Spacer, Spinner, Tag, TextArea, TextInput, Toggle, Tooltip, Video.`]}),`
`,n.jsxs(e.p,{children:["​	•	",n.jsx(e.strong,{children:"Molecules"}),`: Simple combinations of atomic components that together form a small UI feature.
Accordion, AudioPlayer, AvatarWithName, Breadcrumbs, ButtonGroup, Card, ComparisonTable, DataTable, FileUpload, FormField, Header, IconButton, ImageWithCaption, InputGroup, InputWithLabel, List, MediaCard, Modal, Navbar, Notification, PricingTable, SearchBar, Sidebar, VideoWithDescription.`]}),`
`,n.jsxs(e.p,{children:["​	•	",n.jsx(e.strong,{children:"Organisms"}),": More complex, combining molecules and atomic components to create larger, more detailed features."]}),`
`,n.jsxs(e.p,{children:["​	•	",n.jsx(e.strong,{children:"Layout"}),": Components related to structuring and organizing content across the page."]}),`
`,n.jsxs(e.p,{children:["​	•	",n.jsx(e.strong,{children:"Templates"}),": Layouts of full pages, combining organisms and layout components."]}),`
`,n.jsxs(e.p,{children:["​	•	",n.jsx(e.strong,{children:"Pages"}),": Complete and functional pages made up of templates and content."]}),`
`,n.jsxs(e.p,{children:["​	•	",n.jsx(e.strong,{children:"Miscellaneous"}),": Utility components that don’t fit into the above categories but provide important functions, such as popovers, overlays, and media controls."]}),`
`,n.jsx(e.h3,{id:"heres-how-it-breaks-down",children:"Here’s how it breaks down:"}),`
`,n.jsx(e.p,{children:`•	Pages combine multiple Organisms (like forms, media collections, and navigation elements) to create a full layout.
•	Organisms themselves are composed of Molecules (which could be form fields, buttons, etc.).
•	Molecules are built from Atoms (the smallest UI components like text, buttons, inputs).`}),`
`,n.jsx(e.h1,{id:"recap-of-hierarchy",children:"Recap of Hierarchy"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Atoms:"})," Basic building blocks (buttons, inputs)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Molecules:"})," Small functional units combining Atoms (input groups, button groups)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Organisms:"})," Larger functional blocks combining Molecules (forms, media cards)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Layouts:"})," Define structure and positioning (grids, sections, flexbox)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Pages:"})," Use Layouts, Organisms, Molecules, and Atoms to create entire pages."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"1-atomic-components-basicbuilding-blocks",children:"1. Atomic Components (Basic/Building Blocks)"}),`
`,n.jsx(e.p,{children:"Atomic components are the smallest building blocks and cannot be broken down further."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Text Components:"})}),`
`,n.jsx(e.p,{children:`•	Heading (H1, H2, H3, etc.)
•	Paragraph
•	Label
•	Caption`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Interactive Components:"})}),`
`,n.jsx(e.p,{children:`•	Button
•	Link (Anchor)
•	Icon (Clickable)
•	Checkbox
•	Radio Button
•	Toggle/Switch
•	Text Input
•	Text Area
•	Select/Dropdown
•	Slider
•	Range Input`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Media Components:"})}),`
`,n.jsx(e.p,{children:`•	Image
•	Video
•	Audio
•	Icon`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Visual Components:"})}),`
`,n.jsx(e.p,{children:`•	Divider
•	Spacer (For layout spacing)
•	Tooltip
•	Badge
•	Tag/Chip`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Feedback Components:"})}),`
`,n.jsx(e.p,{children:`•	Loader/Spinner
•	Progress Bar
•	Alert
•	Snackbar/Toast
•	Tooltip`}),`
`,n.jsx(e.h1,{id:"2-molecules-combining-atomic-components",children:"2. Molecules (Combining Atomic Components)"}),`
`,n.jsx(e.p,{children:"Molecules are combinations of atomic components that work together to form a functional unit."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Form Elements:"})}),`
`,n.jsx(e.p,{children:`•	Input Group (Input with Button)
•	Input with Label
•	Search Bar
•	File Upload
•	Form Field (Label + Input + Helper Text)`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Buttons with Icons or Text:"})}),`
`,n.jsx(e.p,{children:`•	Icon Button (Button with Icon)
•	Button Group (Multiple Buttons together)`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Media Molecules:"})}),`
`,n.jsx(e.p,{children:`•	Image with Caption
•	Video with Controls and Description
•	Avatar + Name
•	Audio Player`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Feedback Molecules:"})}),`
`,n.jsx(e.p,{children:`•	Notification (with Alert, Title, and Action)
•	Modal (Header, Body, Footer)`}),`
`,n.jsx(e.h1,{id:"3-organisms-combining-molecules",children:"3. Organisms (Combining Molecules)"}),`
`,n.jsx(e.p,{children:"Organisms are larger and more complex UI components formed by grouping together multiple molecules or simple components."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Forms and Form Layouts:"})}),`
`,n.jsx(e.p,{children:`•	Sign-In Form (Form fields + Submit Button)
•	Registration Form (Fields for name, email, password + Terms Checkbox + Submit)
•	Contact Form (Input fields + Message TextArea + Send Button)`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Content Display:"})}),`
`,n.jsx(e.p,{children:`•	Card (Image + Title + Description + Action Button)
•	Media Card (Image/Video + Title + Text)
•	List (Collection of items, e.g., a list of links or products)
•	Accordion (Expandable sections with content inside)`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Navigation:"})}),`
`,n.jsx(e.p,{children:`•	Navbar (Logo + Links + Search + Menu Toggle)
•	Sidebar (List of links for navigation)
•	Breadcrumbs (Links showing hierarchy)`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Media Collections:"})}),`
`,n.jsx(e.p,{children:`•	Image Gallery (Grid of images with captions)
•	Video Playlist (List of videos to watch)
•	Carousel/Slider (Image or Media Slider)`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tables:"})}),`
`,n.jsx(e.p,{children:`•	Data Table (Rows and Columns for displaying structured data)
•	Pricing Table (Different pricing options)
•	Comparison Table (Compares features/products)`}),`
`,n.jsx(e.h1,{id:"4-layout-components-page-level-components",children:"4. Layout Components (Page-Level Components)"}),`
`,n.jsx(e.p,{children:"Layout components are structural elements used to organize content on a page."}),`
`,n.jsxs(e.p,{children:["•	",n.jsx(e.strong,{children:"Grid/Section Layouts:"})]}),`
`,n.jsx(e.p,{children:`•	Grid (Arranges items in a structured layout with rows and columns)
•	Section (A part of the page with a header, content, and actions)
•	Flexbox Layout (Horizontally/Vertically aligned containers)`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Navigation & Menus:"})}),`
`,n.jsx(e.p,{children:`•	Header (Navbar + Search + Links)
•	Footer (Copyright + Links + Social Media Icons)
•	Dropdown Menu (Toggleable menu of options)
•	Pagination (Buttons for navigating multiple pages)`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Content Organization:"})}),`
`,n.jsx(e.p,{children:`•	Sidebar (For navigation or additional info)
•	Tabs (Switching between different content views)
•	Accordion (Collapsible sections)`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Hero Sections:"})}),`
`,n.jsx(e.p,{children:`•	Hero Banner (Large heading, subheading, image, and call to action)
•	Hero Image/Video Section (Introductory section at the top of a page)`}),`
`,n.jsx(e.h1,{id:"5-templates-combining-organisms-and-layout-components",children:"5. Templates (Combining Organisms and Layout Components)"}),`
`,n.jsx(e.p,{children:"Templates define the structure of entire pages by arranging multiple organisms and layout components."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Landing Pages:"})}),`
`,n.jsx(e.p,{children:`•	Hero Section + Features List + Call-to-Action Button + Testimonials
•	Product Landing Page (Hero, Features, Pricing, CTA)`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Dashboard Layouts:"})}),`
`,n.jsx(e.p,{children:`•	Sidebar + Top Navbar + Content Area
•	Admin Dashboard (Graphs, Lists, Cards, Notifications)`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"E-Commerce Pages:"})}),`
`,n.jsx(e.p,{children:`•	Product Page (Product Image, Description, Price, Add to Cart Button)
•	Shopping Cart (List of items, quantity, total, checkout button)`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Authentication Pages:"})}),`
`,n.jsx(e.p,{children:`•	Sign-In Page (Form + Link to Register)
•	Registration Page (Form + Link to Sign In)`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Contact Us Page:"})}),`
`,n.jsx(e.p,{children:"•	Form Section + Location Info + Social Media Links"}),`
`,n.jsx(e.h1,{id:"6-pages-final-composition-of-templates",children:"6. Pages (Final Composition of Templates)"}),`
`,n.jsx(e.p,{children:"Pages are final representations of the full UI, using templates to create entire sections with components."}),`
`,n.jsx(e.p,{children:`•	Home Page
•	About Us Page
•	Contact Us Page
•	User Profile Page
•	Product Detail Page
•	Checkout Page
•	Blog/Article Page
•	Admin Dashboard
•	Search Results Page`}),`
`,n.jsx(e.h1,{id:"7-miscellaneous--utility-components",children:"7. Miscellaneous / Utility Components"}),`
`,n.jsx(e.p,{children:"These components often serve specialized purposes and improve user interaction."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tooltips & Popovers:"})}),`
`,n.jsxs(e.p,{children:[`•	Pop-up information when hovering over or clicking an element.
`,n.jsx(e.strong,{children:"Overlays:"})]}),`
`,n.jsx(e.p,{children:`•	Modal/Popup Window
•	Drawer (Slide-in navigation or settings panel)`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Search Components:"})}),`
`,n.jsx(e.p,{children:`•	Search Box (Input field with search button)
•	Autocomplete/Typeahead`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Media and Content Controls:"})}),`
`,n.jsx(e.p,{children:`•	Audio/Video Controls (Play, Pause, Mute)
•	Filters (Search filters, Tag filters)`}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Interactive Maps:"})}),`
`,n.jsx(e.p,{children:"•	Map (With interactive markers, zoom, and pan)"})]})}function l(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{l as default};
