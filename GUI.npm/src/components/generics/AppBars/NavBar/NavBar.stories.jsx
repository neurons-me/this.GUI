import { MemoryRouter } from 'react-router-dom';
import GuiProvider from '../../../../context/GuiProvider';
import NavBar from './NavBar';

export default {
  title: 'Components/AppBars/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <GuiProvider>
          <Story />
        </GuiProvider>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
      component: 
`The **NavBar** component provides a responsive, application top bar for navigation, branding and other actions.
---
## Features
- **Branding:** Display a logo and title.
- **Navigation Links:** With optional icons and dropdown menus (nested children).
- **Custom actions:** Theme toggle, hamburger menu, etc.
- **Responsive:** Adapts to mobile layouts.
- **Inset-aware:** Reads global left/right/nav insets from the theme to align with permanent drawers.
- **Icon support:** Via the This.GUI icon registry (declarative strings) or direct React elements.

---

### Props
Each link can specify:
  - \`label\` (string): Displayed text.
  - \`href\` (string): Navigation URL (internal or external).
  - \`icon\` (string): Icon name, prefixed with \`mui:\` or \`lucide:\`.
  - \`iconColor\` (string): Icon color (theme key like \`primary\`, \`secondary\`, or any CSS color).
  - \`children\` (array): Nested links for dropdown menus.
---

**Example:**
~~~jsx
<NavBar
  title="neurons.me"
  logo="https://neurons.me/neurons.me.png"
  NavBarLinks={[
    { label: 'Home', href: '/', icon: 'mui:BarChart', iconColor: 'primary' },
    { label: 'Docs', href: '/docs', icon: 'mui:Insights', iconColor: 'secondary' },
    {
      label: 'More',
      icon: 'lucide:Info',
      iconColor: '#00aa96',
      children: [
        { label: 'About', href: '/about', icon: 'mui:Message', iconColor: 'info' },
        { label: 'Contact', href: '/contact', icon: 'lucide:Mail', iconColor: '#4caf50' },
      ],
    },
  ]}
  showThemeToggle
  position="fixed"
/>
~~~

---

#### Dropdown Menus
- To create a dropdown, provide a \`children\` array to any link.

~~~jsx
<NavBar
  NavBarLinks={[
    {
      label: 'More',
      icon: 'lucide:Info',
      children: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ]}
/>
~~~

---

#### Icon Usage
- **Material UI:** Use \`mui:IconName\` (e.g. \`mui:Insights\`). See [MUI Icons Catalog](https://mui.com/material-ui/material-icons/).
- **Lucide:** Use \`lucide:IconName\` (e.g. \`lucide:Mail\`). See [Lucide Icons Catalog](https://lucide.dev/icons/).
- **Color:** Use \`iconColor\` prop for theme colors (\`primary\`, \`secondary\`, \`info\`) or any CSS color (e.g. \`#4caf50\`).

---

### React Component Mode (Advanced)
You may also use NavBar as a React component and manually import icons, passing them into \`NavBarLinks\`:

~~~jsx
import NavBar from './NavBar';
import { BarChart, Insights } from '@mui/icons-material';
import { Mail, Info } from 'lucide-react';

<NavBar
  NavBarLinks={[
    { label: 'Home', href: '/', icon: <BarChart color="primary" /> },
    { label: 'Docs', href: '/docs', icon: <Insights htmlColor="#f50057" /> },
    {
      label: 'More',
      icon: <Info color="success" />,
      children: [
        { label: 'About', href: '/about', icon: <Mail htmlColor="#4caf50" /> },
      ],
    },
  ]}
  position="static"
/>
~~~
- **Note:** When using this mode, you can pass any valid React element as the \`icon\` property. For Material UI icons, use the \`color\` or \`htmlColor\` prop to customize color. For Lucide icons, use the \`color\` prop.

---

## Notes
- NavBar uses \`react-router-dom\` internally. Stories wrap it in a \`MemoryRouter\` for demo purposes.
- Dropdown menus are created by providing a \`children\` array for any link.
- Icon colors can be set with theme color keys (\`primary\`, \`secondary\`, \`info\`, etc.) or any valid CSS color string.
- NavBarLinks accepts objects with label, href, external, icon (string for your registry), and iconColor, and also supports submenus via children.
- Toggles like showMenuButton, showThemeToggle, and homeTo/position.
Inset handling:
  - Measure Toolbar with toolbarRef, call theme.updateInsets({ nav: h }), and clean up in return → this updates theme.layout.insets.nav in GuiProvider and also the CSS vars (--gui-nav-height).
Theme integration:
  - Use useTheme()/useMediaQuery(). In GuiProvider, inject updateInsets and layout.insets into the memoized MUI theme, so NavBar sees them correctly.
  
        `,
      },
    },
  },
  argTypes: {
    title: {
      description: 'Title text displayed next to the logo.',
      control: 'text',
    },
    logo: {
      description: 'Logo image URL shown in the top-left.',
      control: 'text',
    },
    NavBarLinks: {
      description: 'Array of navigation links, supporting nested dropdown menus.',
      control: 'object',
    },
    showMenuButton: {
      description: 'Displays a hamburger menu button on the left.',
      control: 'boolean',
    },
    onMenuClick: {
      description: 'Callback executed when the hamburger menu is clicked.',
      action: 'menuClicked',
    },
    showThemeToggle: {
      description: 'Shows a dark/light mode toggle button.',
      control: 'boolean',
    },
    homeTo: {
      description: 'Router path for clicking on logo/title.',
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    title: 'neurons.me',
    logo: 'https://neurons.me/neurons.me.png',
    NavBarLinks: [
      { label: 'Home', href: '/' },
      { label: 'Docs', href: '/docs' },
      {
        label: 'More',
        children: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    showMenuButton: false,
    showThemeToggle: true,
    homeTo: '/',
  },
};

export const WithIcons = {
  args: {
    title: 'neurons.me',
    logo: 'https://neurons.me/neurons.me.png',
    NavBarLinks: [
     {
  label: 'Home',
  href: '/',
  icon: 'mui:BarChart',
  iconColor: 'primary'
},
{
  label: 'Docs',
  href: '/docs',
  icon: 'mui:Insights',
  iconColor: 'secondary'
},
{
  label: 'More',
  icon: 'lucide:Info',
  iconColor: '#00aa96',
  children: [
    { label: 'About', href: '/about', icon: 'mui:Message', iconColor: 'info' },
    { label: 'Contact', href: '/contact', icon: 'lucide:Mail', iconColor: '#4caf50' },
  ],
}
    ],
    showMenuButton: false,
    showThemeToggle: true,
    homeTo: '/',
  },
};

export const FixedNavBar = () => (
  <>
    <NavBar
      title="neurons.me"
      logo="https://neurons.me/neurons.me.png"
      NavBarLinks={[
        { label: 'Home', href: '/' },
        { label: 'Docs', href: '/docs' },
        {
          label: 'More',
          children: [
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ],
        },
      ]}
      showMenuButton={false}
      showThemeToggle={true}
      homeTo="/"
      position="fixed"
    />
    <div style={{ marginTop: 80, padding: 20, height: '200vh'}}>
      {Array(100).fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit. ').join('')}
    </div>
  </>
);

FixedNavBar.storyName = 'Fixed NavBar';
FixedNavBar.parameters = {
  docs: {
    description: {
      story: 'Demonstrates the NavBar with `position="fixed"`. Scroll down to see the NavBar stay fixed at the top.',
    },
  },
};

export const StaticNavBar = () => (
  <>
    <NavBar
      title="neurons.me"
      logo="https://neurons.me/neurons.me.png"
      NavBarLinks={[
        { label: 'Home', href: '/' },
        { label: 'Docs', href: '/docs' },
        {
          label: 'More',
          children: [
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ],
        },
      ]}
      showMenuButton={false}
      showThemeToggle={true}
      homeTo="/"
      position="static"
    />
    <div style={{ padding: 20, height: '200vh'}}>
      {Array(100).fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit. ').join('')}
    </div>
  </>
);

StaticNavBar.storyName = 'Static NavBar';
StaticNavBar.parameters = {
  docs: {
    description: {
      story: 'Demonstrates the NavBar with `position="static"`. Scroll down to see the NavBar scroll with the page.',
    },
  },
};