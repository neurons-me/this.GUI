import TopBar from './TopBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Layouts/ResponsiveUI/TopBar',
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
- **Custom actions:** Theme toggle, etc.
- **Responsive:** Adapts to mobile layouts.
- **Inset-aware:** Reads global left/right/nav insets from the theme to align with permanent drawers.
- **Icon support:** Via the This.GUI icon registry (declarative strings).

---

### Position Modes
- \`position="static"\`: The TopBar scrolls with the content, part of the normal document flow.
- \`position="fixed"\`: The TopBar stays pinned to the top of the viewport, remaining visible during scrolling.
- Ergonomically, \`static\` feels fluid and natural for reading layouts, while \`fixed\` provides stability and quick access to main navigation.

---

### Props
Each element can specify:
  - \`type\` (string): Element type, e.g. 'link' or 'menu'.
  - \`props\` (object): Properties for the element.
    - For \`link\`: \`label\` (string), \`href\` (string), \`icon\` (string), \`iconColor\` (string).
    - For \`menu\`: \`label\` (string), \`icon\` (string), \`iconColor\` (string), \`children\` (array of elements).
---

**Example:**
~~~jsx
<TopBar
  logo="https://neurons.me/neurons.me.png"
  elements={[
    {  'Home', href: '/', icon: 'home', iconColor: 'primary' },
    { 'Docs', href: '/docs', icon: 'insights', iconColor: 'secondary' },
    {
      type: 'menu',
      props: {
        label: 'More',
        icon: 'info',
        iconColor: '#00aa96',
        items: [
          { label: 'About', href: '/about', icon: 'message', iconColor: 'info' },
          { label: 'Contact', href: '/contact', icon: 'mail', iconColor: '#4caf50' },
        ],
      },
    },
  ]}
  showThemeToggle
  position="fixed"
/>
~~~

---

#### Dropdown Menus
- To create a dropdown, provide a \`children\` array with elements of type \`link\` inside a \`menu\` element.

~~~jsx
<TopBar
  elements={[
    {
      type: 'menu',
      props: {
        label: 'More',
        icon: 'info',
        items: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    },
  ]}
/>
~~~

---

#### Icon Usage
- **Material Symbols:** Use icon names directly (e.g. \`bar_chart\`, \`mail\`, \`insights\`). See [Material Symbols Catalog](https://fonts.google.com/icons?icon.set=Material+Symbols).
- Icon rendering is handled by the \`<Icon />\` component, which supports font variation settings like \`weight\`, \`fill\`, \`grade\`, \`opticalSize\`, and standard props like \`iconColor\` and \`fontSize\`.

---
### React Component Mode (Advanced)
You may also use TopBar as a React component and pass elements as an array of objects with \`type\` and \`props\`:

~~~jsx
import TopBar from './TopBar';

<TopBar
  elements={[
    { label: 'Home', href: '/', icon: 'bar_chart', iconColor: 'primary' },
    { label: 'Docs', href: '/docs', icon: 'insights', iconColor: '#f50057' },
    {
      type: 'menu',
      props: {
        label: 'More',
        icon: 'info',
       items: [
          { label: 'About', href: '/about', icon: 'mail', iconColor: '#4caf50' },
        ],
      },
    },
  ]}
  position="static"
/>
~~~
- **Note:** The \`props.icon\` property accepts icon names as strings. Color and style are controlled via \`iconColor\` and other props handled by the \`<Icon />\` component.

---

## Notes
- TopBar uses \`react-router-dom\` internally. Stories wrap it in a \`MemoryRouter\` for demo purposes.
- Dropdown menus are created by providing a \`children\` array for any menu element.
- Icon colors can be set with theme color keys (\`primary\`, \`secondary\`, \`info\`, etc.) or any valid CSS color string.
- \`elements\` accepts objects with \`type\` and \`props\`, supporting nested menus.
- Toggles like showThemeToggle and homeTo/position.
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
    elements: {
      description: 'Array of navigation elements, e.g. [{ type: "link", props: { label: string, href?: string, icon?: string, iconColor?: string } }, { type: "menu", props: { label: string, icon?: string, iconColor?: string, children: elements[] } }]. Supports nested dropdown menus.',
      control: 'object',
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
    elements: [
      { type: 'link', props: { label: 'Home', href: '/', icon: 'home' } },
      { type: 'link', props: { label: 'Docs', href: '/docs', icon: 'insights' } },
      {
        type: 'menu',
        props: {
          label: 'More',
          icon: 'info',
          items: [
            { label: 'About', href: '/about', icon: 'message' },
            { label: 'Contact', href: '/contact', icon: 'mail' },
          ],
        },
      },
    ],
    homeTo: '/',
  },
};

export const WithIcons: Story = {
  args: {
    title: 'neurons.me',
    logo: 'https://neurons.me/neurons.me.png',
    elements: [
      {
        type: 'link',
        props: { label: 'Home', href: '/', icon: 'bar_chart', iconColor: 'primary' },
      },
      {
        type: 'link',
        props: { label: 'Docs', href: '/docs', icon: 'insights', iconColor: 'secondary' },
      },
      {
        type: 'menu',
        props: {
          label: 'More',
          icon: 'info',
          iconColor: '#00aa96',
          items: [
            { label: 'About', href: '/about', icon: 'message', iconColor: 'info'  },
            {  label: 'Contact', href: '/contact', icon: 'mail', iconColor: '#4caf50' },
          ],
        },
      },
    ],
    homeTo: '/',
  },
};

export const FixedTopBar = () => (
  <>
    <TopBar
      title="neurons.me"
      logo="https://neurons.me/neurons.me.png"
      elements={[
        { type: 'link', props: { label: 'Home', href: '/', icon: 'home' } },
        { type: 'link', props: { label: 'Docs', href: '/docs', icon: 'insights' } },
        {
          type: 'menu',
          props: {
            label: 'More',
            icon: 'info',
            items: [
              { label: 'About', href: '/about', icon: 'message' },
              { label: 'Contact', href: '/contact', icon: 'mail' },
            ],
          },
        },
      ]}
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
      elements={[
        { type: 'link', props: { label: 'Home', href: '/', icon: 'home' } },
        { type: 'link', props: { label: 'Docs', href: '/docs', icon: 'insights' } },
        {
          type: 'menu',
          props: {
            label: 'More',
            icon: 'info',
            items: [
              { label: 'About', href: '/about', icon: 'message' },
              { label: 'Contact', href: '/contact', icon: 'mail' },
            ],
          },
        },
      ]}
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