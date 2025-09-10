import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import CustomThemeProvider from '../../../../context/ThemeContext';
import NavBar from './NavBar';

export default {
  title: 'Components/AppBars/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <CustomThemeProvider>
          <Story />
        </CustomThemeProvider>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **NavBar** component provides a responsive, application top bar for navigation, branding and other actions.

## Features
- **Branding:** Display a logo and title.
- **Navigation Links:** With optional icons and dropdown menus (nested children).
- **Custom actions:** Theme toggle, hamburger menu, etc.
- **Responsive:** Adapts to mobile layouts.
---

**Example:**
\`\`\`jsx
<NavBar
  title="neurons.me"
  logo="https://neurons.me/neurons.me.png"
  NavBarLinks={[
    { label: 'Home', path: '/', icon: 'mui:BarChart', iconColor: 'primary' },
    { label: 'Docs', path: '/docs', icon: 'mui:Insights', iconColor: 'secondary' },
    {
      label: 'More',
      icon: 'lucide:Info',
      iconColor: '#00aa96',
      children: [
        { label: 'About', path: '/about', icon: 'mui:Message', iconColor: 'info' },
        { label: 'Contact', path: '/contact', icon: 'lucide:Mail', iconColor: '#4caf50' },
      ],
    },
  ]}
  showThemeToggle
/>
\`\`\`

### NavBarLinks Prop. 
Each link can specify:
  - \`label\` (string): Displayed text.
  - \`path\` (string): Router path.
  - \`icon\` (string): Icon name, prefixed with \`mui:\` or \`lucide:\`.
  - \`iconColor\` (string): Icon color (theme key like \`primary\`, \`secondary\`, or any CSS color).
  - \`children\` (array): Nested links for dropdown menus.

#### Icon Usage
- **Material UI:** Use \`mui:IconName\` (e.g. \`mui:Insights\`). See [MUI Icons Catalog](https://mui.com/material-ui/material-icons/).
- **Lucide:** Use \`lucide:IconName\` (e.g. \`lucide:Mail\`). See [Lucide Icons Catalog](https://lucide.dev/icons/).
- **Color:** Use \`iconColor\` prop for theme colors (\`primary\`, \`secondary\`, \`info\`) or any CSS color (e.g. \`#4caf50\`).

#### Dropdown Menus
- To create a dropdown, provide a \`children\` array to any link.

---

### 2. React Component Mode (Advanced)
You may also use NavBar as a React component and manually import icons, passing them into \`NavBarLinks\`:

\`\`\`jsx
import NavBar from './NavBar';
import { BarChart, Insights } from '@mui/icons-material';
import { Mail, Info } from 'lucide-react';

<NavBar
  NavBarLinks={[
    { label: 'Home', path: '/', icon: <BarChart color="primary" /> },
    { label: 'Docs', path: '/docs', icon: <Insights htmlColor="#f50057" /> },
    {
      label: 'More',
      icon: <Info color="success" />,
      children: [
        { label: 'About', path: '/about', icon: <Mail htmlColor="#4caf50" /> },
      ],
    },
  ]}
/>
\`\`\`
- **Note:** When using this mode, you can pass any valid React element as the \`icon\` property. For Material UI icons, use the \`color\` or \`htmlColor\` prop to customize color. For Lucide icons, use the \`color\` prop.

---

## Props Reference

| Prop             | Type      | Description |
|------------------|-----------|-------------|
| \`title\`         | string    | Title text displayed next to the logo. |
| \`logo\`          | string    | Logo image URL shown in the top-left. |
| \`NavBarLinks\`   | array     | Array of navigation links. Each link: <br/>- \`label\` (string)<br/>- \`path\` (string)<br/>- \`icon\` (string or ReactNode)<br/>- \`iconColor\` (string)<br/>- \`children\` (array of links) |
| \`showMenuButton\`| boolean   | Show hamburger menu button on the left. |
| \`onMenuClick\`   | function  | Callback when the hamburger menu is clicked. |
| \`showThemeToggle\`| boolean  | Show light/dark mode toggle. |
| \`homeTo\`        | string    | Router path for clicking logo/title. |

---

## Icon Providers
- **Material UI:** \`mui:IconName\` (subset mapped in \`packs/Material.js\`). [Catalog](https://mui.com/material-ui/material-icons/)
- **Lucide:** \`lucide:IconName\`. [Catalog](https://lucide.dev/icons/)

---

## Notes
- NavBar uses \`react-router-dom\` internally. Stories wrap it in a \`MemoryRouter\` for demo purposes.
- Dropdown menus are created by providing a \`children\` array for any link.
- Icon colors can be set with theme color keys (\`primary\`, \`secondary\`, \`info\`, etc.) or any valid CSS color string.
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
      { label: 'Home', path: '/' },
      { label: 'Docs', path: '/docs' },
      {
        label: 'More',
        children: [
          { label: 'About', path: '/about' },
          { label: 'Contact', path: '/contact' },
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
  path: '/',
  icon: 'mui:BarChart',
  iconColor: 'primary'
},
{
  label: 'Docs',
  path: '/docs',
  icon: 'mui:Insights',
  iconColor: 'secondary'
},
{
  label: 'More',
  icon: 'lucide:Info',
  iconColor: '#00aa96',
  children: [
    { label: 'About', path: '/about', icon: 'mui:Message', iconColor: 'info' },
    { label: 'Contact', path: '/contact', icon: 'lucide:Mail', iconColor: '#4caf50' },
  ],
}
    ],
    showMenuButton: false,
    showThemeToggle: true,
    homeTo: '/',
  },
};