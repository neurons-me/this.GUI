import { MemoryRouter } from 'react-router-dom';
import GuiProvider from '../../../../context/GuiProvider';
import Footer from './Footer';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Mail, Instagram } from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/AppBars/Footer',
  component: Footer,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <GuiProvider>
          <div style={{ minHeight: 240 }}>
            <Story />
          </div>
        </GuiProvider>
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The <code>Footer</code>
component provides a standardized footer layout for your application, ensuring consistent styling and functionality across different pages. It supports branding, navigation links, social media icons, and responsive design.
---

## Features
- Standardizes footer layout and styling across the app.
- Supports optional branding with logo and title.
- Renders navigation links and social icons.
- Responsive design that adapts to screen size.
- Easy to use with declarative props or custom React nodes.
- Aligns with permanent left/right drawers automatically by reading global insets from the theme.
- Supports both **declarative** icon strings (via the registry) and **direct React** icon nodes.
- Stays compact on mobile, with links stacking vertically.

---

### Props
- **Branding**
  - <code>title?: string</code>
  - <code>logoSrc?: string</code> (fallbacks to <strong>https://www.neurons.me/media/neurons-grey.png</strong> when omitted)
  - <code>homeHref?: string</code> and/or <code>onBrandClick?: () =&gt; void</code>
- **Social links**
  - <code>Array&lt;{ icon: string | ReactNode; href: string; iconColor?: string }&gt;</code>  
    Declarative example: <code>{ icon: 'mui:GitHub', href: '…', iconColor: 'primary' }</code>  
    React example: <code>{ icon: &lt;GitHubIcon htmlColor="#fff" /&gt;, href: '…' }</code>  
    Color mapping: Lucide → <code>color</code>, MUI → <code>htmlColor</code> (handled by the registry)
- **Footer links**
  - <code>links: Array&lt;{ label: string; href: string; external?: boolean }&gt;</code>
- **Layout / Insets**
  - Uses global <code>theme.insets.left</code> / <code>theme.insets.right</code> by default  
    You can override with <code>leftInset</code> / <code>rightInset</code> props if needed
- **Extensibility**
  - <code>startSlot?: ReactNode</code>, <code>endSlot?: ReactNode</code>
  - <code>linkProps?: object</code>, <code>iconProps?: object</code>
  - <code>sx</code> for MUI styling overrides

---
### Examples
**Declarative (recommended for JSON-driven UIs)**

~~~jsx
<Footer
  title="neurons.me"
  logoSrc="https://neurons.me/neurons.me.png"
  homeHref="/"
  socialLinks={[
    { icon: 'mui:GitHub', href: 'https://github.com/neurons-me', iconColor: 'primary' },
    { icon: 'lucide:instagram', href: 'https://instagram.com/neurons', iconColor: '#E1306C' },
  ]}
  links={[
    { label: 'Docs', href: '/docs' },
    { label: 'Contact', href: '/contact' },
  ]}
/>
~~~

**React (advanced)**
~~~jsx
import GitHubIcon from '@mui/icons-material/GitHub';
import { Mail } from 'lucide-react';

<Footer
  socialLinks={[
    { icon: <GitHubIcon htmlColor="#fff" />, href: 'https://github.com/neurons-me' },
    { icon: <Mail color="#00aa96" />, href: 'mailto:hi@neurons.me' },
  ]}
/>
~~~

**Automatic insets**
By default, the footer reads <code>theme.insets.left</code> and <code>theme.insets.right</code> set by permanent drawers like <code>LeftDrawer</code> and <code>RightDrawer</code>.<br/>
To override manually, pass <code>leftInset</code> and/or <code>rightInset</code>.
        `,
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    title: 'neurons.me',
    logoSrc: 'https://neurons.me/neurons.me.png',
    homeHref: '/',
    links: [
      { label: 'Docs', href: '/docs' },
      { label: 'Contact', href: '/contact' },
    ],
    socialLinks: [
      { icon: 'lucide:facebook', href: 'https://github.com/neurons-me', iconColor: 'primary' },
      { icon: 'lucide:instagram', href: 'https://instagram.com/neurons', iconColor: '#E1306C' },
    ],
  },
};

export const DeclarativeSocial: Story = {
  name: 'Social (Declarative)',
  args: {
    title: 'neurons.me',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
    socialLinks: [
      { icon: 'lucide:Twitter', href: 'https://twitter.com/neurons_me', iconColor: '#1DA1F2' },
      { icon: 'lucide:mail', href: 'mailto:hi@neurons.me', iconColor: '#00aa96' },
    ],
  },
};

export const ReactSocial: Story = {
  name: 'Social (React components)',
  args: {
    title: 'neurons.me',
    links: [
      { label: 'Docs', href: '/docs' },
      { label: 'Blog', href: '/blog' },
    ],
    socialLinks: [
      { icon: <GitHubIcon htmlColor="#fff" />, href: 'https://github.com/neurons-me' },
      { icon: <TwitterIcon htmlColor="#1DA1F2" />, href: 'https://twitter.com/neurons_me' },
      { icon: <Mail color="#00aa96" />, href: 'mailto:hi@neurons.me' },
      { icon: <Instagram color="#E1306C" />, href: 'https://instagram.com/neurons' },
    ],
  },
};

export const WithSlots: Story = {
  args: {
    title: 'neurons.me',
    links: [
      { label: 'Docs', href: '/docs' },
      { label: 'Support', href: '/support' },
    ],
    startSlot: <span style={{ opacity: 0.8, fontSize: 12 }}>© {new Date().getFullYear()} Neuroverse</span>,
    endSlot: <span style={{ opacity: 0.8, fontSize: 12 }}>v1.0.0</span>,
  },
};

export const WithInsets: Story = {
  name: 'With manual insets override',
  args: {
    title: 'neurons.me',
    links: [
      { label: 'Docs', href: '/docs' },
      { label: 'Status', href: '/status' },
    ],
    leftInset: 240,
    rightInset: 280,
    socialLinks: [
      { icon: 'mui:GitHub', href: 'https://github.com/neurons-me', iconColor: 'primary' },
    ],
  },
};

export const MinimalBranding: Story = {
  name: 'Branding fallback (no logoSrc)',
  args: {
    title: 'neurons.me',
    homeHref: '/',
    // omit logoSrc -> uses neurons grey fallback
    links: [
      { label: 'Docs', href: '/docs' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

export const LinksOnly: Story = {
  args: {
    links: [
      { label: 'Docs', href: '/docs' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
};

export const AutoInsets: Story = {
  name: 'Automatic insets from theme',
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates the <code>Footer</code> automatically using <code>theme.insets.left</code> and <code>theme.insets.right</code> values set by permanent drawers such as <code>LeftDrawer</code> and <code>RightDrawer</code>. No manual insets need to be provided.
        `,
      },
    },
  },
  args: {
    title: 'neurons.me',
    links: [
      { label: 'Docs', href: '/docs' },
      { label: 'About', href: '/about' },
    ],
    socialLinks: [
      { icon: 'lucide:Twitter', href: 'https://twitter.com/neurons_me', iconColor: '#1DA1F2' },
    ],
  },
};