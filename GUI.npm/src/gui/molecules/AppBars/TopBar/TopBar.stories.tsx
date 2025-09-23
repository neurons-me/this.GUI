import TopBar from './TopBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/AppBars/TopBar',
  component: TopBar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
`The **TopBar** component provides a responsive, application top bar for navigation, branding and other actions.
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
<TopBar
  logo="https://neurons.me/neurons.me.png"
  TopBarLinks={[
    { label: 'Home', href: '/', icon: 'BarChart', iconColor: 'primary' },
    { label: 'Docs', href: '/docs', icon: 'Insights', iconColor: 'secondary' },
    {
      label: 'More',
      icon: 'lucide:Info',
      iconColor: '#00aa96',
      children: [
        { label: 'About', href: '/about', icon: 'Message', iconColor: 'info' },
        { label: 'Contact', href: '/contact', icon: 'Mail', iconColor: '#4caf50' },
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
<TopBar
  TopBarLinks={[
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
- **Material UI:** Use \`IconName\` (e.g. \`Insights\`). See [MUI Icons Catalog](https://mui.com/material-ui/material-icons/).
- **Lucide:** Use \`IconName\` (e.g. \`Mail\`). See [Lucide Icons Catalog](https://lucide.dev/icons/).
- **Color:** Use \`iconColor\` prop for theme colors (\`primary\`, \`secondary\`, \`info\`) or any CSS color (e.g. \`#4caf50\`).

---

### React Component Mode (Advanced)
You may also use TopBar as a React component and manually import icons, passing them into \`TopBarLinks\`:

~~~jsx
import TopBar from './TopBar';
import { BarChart, Insights } from '@mui/icons-material';
import { Mail, Info } from 'lucide-react';

<TopBar
  TopBarLinks={[
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
- TopBar uses \`react-router-dom\` internally. Stories wrap it in a \`MemoryRouter\` for demo purposes.
- Dropdown menus are created by providing a \`children\` array for any link.
- Icon colors can be set with theme color keys (\`primary\`, \`secondary\`, \`info\`, etc.) or any valid CSS color string.
- TopBarLinks accepts objects with label, href, external, icon (string for your registry), and iconColor, and also supports submenus via children.
- Toggles like showMenuButton, showThemeToggle, and homeTo/position.
Inset handling:
  - Measure Toolbar with toolbarRef, call theme.updateInsets({ nav: h }), and clean up in return → this updates theme.layout.insets.nav in GuiProvider and also the CSS vars (--gui-nav-height).
Theme integration:
  - Use useTheme()/useMediaQuery(). In GuiProvider, inject updateInsets and layout.insets into the memoized MUI theme, so TopBar sees them correctly.
  
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
    TopBarLinks: {
      description: 'Array of navigation link objects, e.g. [{ label: string, href?: string, icon?: string | ReactElement, iconColor?: string, children?: TopBarLinks[] }]. Supports nested dropdown menus.',
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
} satisfies Meta<typeof TopBar>;
export default meta;

export type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
  args: {
    title: 'neurons.me',
    logo: 'https://neurons.me/neurons.me.png',
    TopBarLinks: [
      { label: 'Home', href: '/', icon: 'BarChart' },
      { label: 'Docs', href: '/docs', icon: 'Insights' },
      {
        label: 'More',
        icon: 'Info',
        children: [
          { label: 'About', href: '/about', icon: 'Message' },
          { label: 'Contact', href: '/contact', icon: 'Mail' },
        ],
      },
    ],
    showMenuButton: false,
    showThemeToggle: true,
    homeTo: '/',
  },
};

export const WithIcons: Story = {
  args: {
    title: 'neurons.me',
    logo: 'https://neurons.me/neurons.me.png',
    TopBarLinks: [
      {
        label: 'Home',
        href: '/',
        icon: 'bar_chart',
        iconColor: 'primary',
      },
      {
        label: 'Docs',
        href: '/docs',
        icon: 'Insights',
        iconColor: 'secondary',
      },
      {
        label: 'More',
        icon: 'Info',
        iconColor: '#00aa96',
        children: [
          { label: 'About', href: '/about', icon: 'Message', iconColor: 'info' },
          { label: 'Contact', href: '/contact', icon: 'Mail', iconColor: '#4caf50' },
        ],
      },
    ],
    showMenuButton: false,
    showThemeToggle: true,
    homeTo: '/',
  },
};

export const FixedTopBar = () => (
  <>
    <TopBar
      title="neurons.me"
      logo="https://neurons.me/neurons.me.png"
      TopBarLinks={[
        { label: 'Home', href: '/', icon: 'BarChart' },
        { label: 'Docs', href: '/docs', icon: 'Insights' },
        {
          label: 'More',
          icon: 'Info',
          children: [
            { label: 'About', href: '/about', icon: 'Message' },
            { label: 'Contact', href: '/contact', icon: 'Mail' },
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

FixedTopBar.storyName = 'Fixed TopBar';
FixedTopBar.parameters = {
  docs: {
    description: {
      story: 'Demonstrates the TopBar with `position="fixed"`. Scroll down to see the TopBar stay fixed at the top.',
    },
  },
};

export const StaticTopBar = () => (
  <>
    <TopBar
      title="neurons.me"
      logo="https://neurons.me/neurons.me.png"
      TopBarLinks={[
        { label: 'Home', href: '/', icon: 'BarChart' },
        { label: 'Docs', href: '/docs', icon: 'Insights' },
        {
          label: 'More',
          icon: 'Info',
          children: [
            { label: 'About', href: '/about', icon: 'Message' },
            { label: 'Contact', href: '/contact', icon: 'Mail' },
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

StaticTopBar.storyName = 'Static TopBar';
StaticTopBar.parameters = {
  docs: {
    description: {
      story: 'Demonstrates the TopBar with `position="static"`. Scroll down to see the TopBar scroll with the page.',
    },
  },
};