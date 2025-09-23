import React from 'react';
import Footer from './Footer';
import type { Meta, StoryObj } from '@storybook/react';
import { useTheme } from '@mui/material/styles';
import LeftDrawer, { type RouteItem } from '../LeftSidebar/LeftSidebar';
import { Box, Drawer } from '@mui/material';
import NavBar from '../TopBar/TopBar';

const demoLinks: RouteItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Docs', href: '/docs' },
  { label: 'GitHub', href: 'https://github.com/neurons-me', external: true },
];

const WithInsetsProvider: React.FC<{ left?: number; right?: number; children?: React.ReactNode }> = ({ left, right, children }) => {
  const theme = useTheme() as any;
  React.useEffect(() => {
    if (typeof (theme as any)?.updateInsets === 'function') {
      (theme as any).updateInsets({ left: left ?? 0, right: right ?? 0 });
    }
    // Cleanup only on unmount — do NOT depend on `theme` to avoid re-running
    return () => {
      if (typeof (theme as any)?.updateInsets === 'function') {
        (theme as any).updateInsets({ left: 0, right: 0 });
      }
    };
  // Only re-run when the numeric insets change
  }, [left, right]);
  return <>{children}</>;
};

const meta = {
  title: 'Molecules/AppBars/Footer',
  component: Footer,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
        <div style={{ minHeight: 240 }}>
          <Story />
        </div>
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
  - <code>brandComponent?: ElementType</code> and <code>brandTo?: string</code> for SPA routing (e.g. This.GUI Link)
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

**Granular styling (fine control)**
Use the provided props to tweak visuals without forking the component:

- \`linkProps\` — forwarded to each footer \`<Link>\`. Ideal for typography, spacing and states via \`sx\`.
- \`iconProps\` — forwarded to our Icon **only when** you pass string tokens in \`socialLinks[].icon\` (e.g. \`"lucide:twitter"\`). Great for \`size\`, \`strokeWidth\`, inline \`style\`, etc.
- \`startSlot\` / \`endSlot\` — inject any React node (badges, build info, counters) and style it freely.

Example:

~~~jsx
<Footer
  links={[
    { label: 'Docs', href: '/docs' },
    { label: 'Changelog', href: '/changelog' },
  ]}
  socialLinks={[
    { icon: 'lucide:twitter', href: 'https://twitter.com/neurons_me', iconColor: '#1DA1F2' },
    { icon: 'mui:GitHub', href: 'https://github.com/neurons-me', iconColor: 'primary' },
  ]}
  linkProps={{
    sx: {
      fontSize: 13,
      letterSpacing: 0.2,
      color: 'text.secondary',
      '&:hover': { color: 'text.primary', textDecoration: 'underline' },
    },
  }}
  iconProps={{ size: 18, style: { opacity: 0.9 } }}
  startSlot={<span style={{ opacity: 0.8, fontSize: 12 }}>© 2025 Neuroverse</span>}
  endSlot={<span style={{ opacity: 0.8, fontSize: 12 }}>v1.2.3</span>}
/>
~~~

---

**JSON / Resolver overview**
When using the registry-driven renderer, a Footer spec like this:

~~~json
{
  "type": "Footer",
  "props": {
    "title": "neurons.me",
    "links": [
      { "label": "Docs", "href": "/docs" },
      { "label": "Contact", "href": "/contact" }
    ],
    "socialLinks": [
      { "icon": "lucide:twitter", "href": "https://twitter.com/neurons_me", "iconColor": "#1DA1F2" },
      { "icon": "mui:GitHub", "href": "https://github.com/neurons-me", "iconColor": "primary" }
    ],
    "leftInset": 240,
    "rightInset": 280,
    "iconProps": { "size": 18 },
    "linkProps": { "sx": { "fontSize": 13 } }
  }
}
~~~

**SPA routing (declarative)**

~~~json
{
  "type": "Footer",
  "props": {
    "title": "neurons.me",
    "brandTo": "/",
    "brandComponent": "Link"
  }
}
~~~

…is mapped by the Footer resolver to \`<Footer />\` props. The resolver:
- Passes \`links\` straight to the component; if a link has \`external: true\`, it adds \`target="_blank"\` and safe \`rel\`.
- For each \`socialLinks[]\`, if \`icon\` is a **string token**, it renders through the icon registry (\`<Icon name=... />\`) and merges \`iconProps\`. If \`icon\` is a **React node**, it renders as-is and ignores \`iconProps\` for that item.
- Applies \`leftInset\` / \`rightInset\` (otherwise they come from the theme’s permanent drawers).
- Forwards \`linkProps\` to every rendered footer \`<Link>\`.

---

**Automatic insets**
By default, the footer reads <code>theme.insets.left</code> and <code>theme.insets.right</code> set by permanent drawers like <code>LeftDrawer</code> and <code>RightDrawer</code>.<br/>
To override manually, pass <code>leftInset</code> and/or <code>rightInset</code>.

You can simulate permanent drawers in Storybook using \`theme.updateInsets({ left, right })\` as shown in the stories below.

There's also a story that mounts a real LeftDrawer next to the Footer to verify layout push end-to-end.
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
      { icon: 'github', href: 'https://github.com/neurons-me' },
      { icon: 'instagram', href: 'https://instagram.com/neurons' },
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
      { icon: 'x', href: 'https://twitter.com/neurons_me' },
      { icon: 'mail', href: 'mailto:hi@neurons.me' },
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
      { icon: 'github', href: 'https://github.com/neurons-me', iconColor: '#fff' },
      { icon: 'twitter', href: 'https://twitter.com/neurons_me', iconColor: '#1DA1F2' },
      { icon: 'mail', href: 'mailto:hi@neurons.me', iconColor: '#00aa96' },
      { icon: 'instagram', href: 'https://instagram.com/neurons', iconColor: '#E1306C' },
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

export const WithLeftDrawer: Story = {
  name: 'With Left Drawer (insets via theme.updateInsets)',
  render: (args) => (
    <WithInsetsProvider left={240}>
      <Footer {...args} />
    </WithInsetsProvider>
  ),
  args: {
    title: 'neurons.me',
    links: [
      { label: 'Docs', href: '/docs' },
      { label: 'About', href: '/about' },
    ],
    socialLinks: [
      { icon: 'mui:GitHub', href: 'https://github.com/neurons-me', iconColor: 'primary' },
      { icon: 'lucide:twitter', href: 'https://twitter.com/neurons_me', iconColor: '#1DA1F2' },
    ],
  },
};

export const WithRightDrawer: Story = {
  name: 'With Right Drawer (insets via theme.updateInsets)',
  render: (args) => (
    <WithInsetsProvider right={280}>
      <Footer {...args} />
    </WithInsetsProvider>
  ),
  args: {
    title: 'neurons.me',
    links: [
      { label: 'Status', href: '/status' },
      { label: 'Changelog', href: '/changelog' },
    ],
    socialLinks: [
      { icon: 'mui:GitHub', href: 'https://github.com/neurons-me', iconColor: 'primary' },
      { icon: 'lucide:twitter', href: 'https://twitter.com/neurons_me', iconColor: '#1DA1F2' },
    ],
  },
};

export const WithBothDrawers: Story = {
  name: 'With Left & Right Drawers (combined insets)',
  render: (args) => (
    <WithInsetsProvider left={240} right={280}>
      <Footer {...args} />
    </WithInsetsProvider>
  ),
  args: {
    title: 'neurons.me',
    links: [
      { label: 'Docs', href: '/docs' },
      { label: 'Contact', href: '/contact' },
    ],
    socialLinks: [
      { icon: 'mui:GitHub', href: 'https://github.com/neurons-me', iconColor: 'primary' },
      { icon: 'lucide:twitter', href: 'https://twitter.com/neurons_me', iconColor: '#1DA1F2' },
    ],
  },
};

export const WithLeftDrawerLayout: Story = {
  name: 'Layout with LeftDrawer (real component)',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <>
      <NavBar title="Demo" />
      <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column', bgcolor: 'background.default' }}>
        <Box sx={{ display: 'flex', flex: 1, width: '100%' }}>
          {/* Permanent left drawer updates theme.insets.left automatically */}
          <LeftDrawer collapsedWidth={240} drawerLinks={demoLinks} open />
          {/* Main content area that would scroll */}
          <Box sx={{ flex: 1, p: 3, overflow: 'auto' }}>
            <Box sx={{ height: 600, border: '1px dashed', borderColor: 'divider', borderRadius: 1, bgcolor: 'background.paper' }} />
          </Box>
        </Box>
        <Footer
          title="neurons.me"
          links={[{ label: 'Docs', href: '/docs' }, { label: 'Contact', href: '/contact' }]}
          socialLinks={[
            { icon: 'mui:GitHub', href: 'https://github.com/neurons-me', iconColor: 'primary' },
            { icon: 'lucide:twitter', href: 'https://twitter.com/neurons_me', iconColor: '#1DA1F2' },
          ]}
        />
      </Box>
    </>
  ),
};

const RightDrawerPermanent: React.FC<{ width?: number; children?: React.ReactNode }> = ({ width = 280, children }) => {
  const theme = useTheme() as any;
  React.useEffect(() => {
    if (typeof theme?.updateInsets === 'function') theme.updateInsets({ right: width });
    return () => { if (typeof theme?.updateInsets === 'function') theme.updateInsets({ right: 0 }); };
  }, [width]);
  return (
    <Drawer variant="permanent" anchor="right" open PaperProps={{ sx: { width, boxSizing: 'border-box' } }}>
      {children}
    </Drawer>
  );
};

export const WithRightDrawerLayout: Story = {
  name: 'Layout with Right Drawer (real component)',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <>
      <NavBar title="Demo" />
      <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column', bgcolor: 'background.default' }}>
        <Box sx={{ display: 'flex', flex: 1, width: '100%' }}>
          {/* Main content area */}
          <Box sx={{ flex: 1, p: 3, overflow: 'auto' }}>
            <Box sx={{ height: 600, border: '1px dashed', borderColor: 'divider', borderRadius: 1, bgcolor: 'background.paper' }} />
          </Box>
          {/* Permanent right drawer updates theme.insets.right via effect */}
          <RightDrawerPermanent width={280} />
        </Box>
        <Footer
          title="neurons.me"
          links={[{ label: 'Docs', href: '/docs' }, { label: 'Contact', href: '/contact' }]}
          socialLinks={[
            { icon: 'mui:GitHub', href: 'https://github.com/neurons-me', iconColor: 'primary' },
            { icon: 'lucide:twitter', href: 'https://twitter.com/neurons_me', iconColor: '#1DA1F2' },
          ]}
        />
      </Box>
    </>
  ),
};

export const WithBothDrawersLayout: Story = {
  name: 'Layout with Left & Right Drawers (real components)',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <>
      <NavBar title="Demo" />
      <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column', bgcolor: 'background.default' }}>
        <Box sx={{ display: 'flex', flex: 1, width: '100%' }}>
          <LeftDrawer collapsedWidth={240} drawerLinks={demoLinks} open />
          <Box sx={{ flex: 1, p: 3, overflow: 'auto' }}>
            <Box sx={{ flex:1, p:3, overflow:'auto', bgcolor: 'background.default' }} />
          </Box>
          <RightDrawerPermanent width={280} />
        </Box>
        <Footer
          title="neurons.me"
          links={[{ label: 'Docs', href: '/docs' }, { label: 'Contact', href: '/contact' }]}
          socialLinks={[
            { icon: 'lucide:facebook', href: 'https://github.com/neurons-me', iconColor: 'primary' },
            { icon: 'lucide:twitter', href: 'https://twitter.com/neurons_me', iconColor: '#1DA1F2' },
          ]}
        />
      </Box>
    </>
  ),
};