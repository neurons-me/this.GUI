import { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Layouts/ResponsiveUI/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Footer

The \`Footer\` atom is a layout component that displays a footer with a title, optional links, and social media icons. It is styled using This.GUI theme tokens and supports full customization via props.

---

### Features

- Displays a title and homepage link
- Supports an array of social icons with custom colors and links
- Optional navigation links for quick access
- Fully stylable via sx and theming
- Responsive layout

---

### Key Props

- \`title?: string\` — Main title or brand label shown in the footer.
- \`homeHref?: string\` — Optional link for the main title.
- \`socialLinks?: Array<{ icon: string; href: string; iconColor?: string }>\` — Icons linking to social platforms or other external resources.
- \`links?: Array<{ label: string; href: string }>\` — Navigation links displayed inline.
- \`sx?: object\` — Custom styles via the MUI system.

---

### Basic Usage (React)

\`\`\`tsx
<Footer
  title="neurons.me"
  homeHref="/"
  socialLinks={[
    { icon: 'home', href: 'https://neurons.me' },
    { icon: 'favorite', href: 'https://instagram.com/neurons', iconColor: '#E1306C' },
  ]}
  links={[
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]}
/>
\`\`\`

---

### Declarative JSON / Config Usage

This.GUI's resolver supports config-based usage. Example payload:

\`\`\`json
{
  "type": "Footer",
  "props": {
    "title": "neurons.me",
    "homeHref": "/",
    "socialLinks": [
      { "icon": "home", "href": "https://neurons.me" },
      { "icon": "favorite", "href": "https://instagram.com/neurons", "iconColor": "#E1306C" }
    ],
    "links": [
      { "label": "About", "href": "/about" },
      { "label": "Projects", "href": "/projects" }
    ]
  }
}
\`\`\`

The resolver maps this configuration into a React Footer element with all props applied.
        `
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Playground: Story = {
  args: {
    title: 'neurons.me',
    homeHref: '/',
    socialLinks: [
      {
        icon: 'home',
        href: 'https://neurons.me',
      },
      {
        icon: 'favorite',
        href: 'https://instagram.com/neurons',
        iconColor: '#E1306C',
      },
      {
        icon: 'public',
        href: 'https://twitter.com/neurons',
        iconColor: '#1DA1F2',
      },
    ],
    links: [
      { label: 'About', href: '/about' },
      { label: 'Projects', href: '/projects' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};