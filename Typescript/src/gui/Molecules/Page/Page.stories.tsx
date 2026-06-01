import { Hero } from '@/gui/Molecules/Hero/Hero';
import { InsetsProvider } from '@/gui-internals/Contexts/InsetsContext';
import Layout from '@/gui/Layout/Layout';
import type { Meta, StoryObj } from '@storybook/react';
import Page from './Page';

const meta: Meta<typeof Page> = {
  title: 'Molecules/Content/Page',
  component: Page,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Page** is a layout container used to render content inside a layout or route.

---
## Features
- Acts as a flexible container for layout content.
- Supports padding, background color, and custom \`sx\` overrides.
- Centers and spaces content using responsive defaults.
- Works seamlessly inside \`Layout\` components.

---
## Props
- \`children\`: React nodes to render within the page.
- \`padding\`: Number or string for inner spacing.
- \`background\`: Background color or gradient.
- \`head\`: Optional page-level metadata such as title, favicon, social image and custom meta tags.
- \`sx\`: MUI style overrides.
- \`insets\`: Optional positioning insets (top, right, bottom, left) for dynamic positioning.
        `,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '40vh' }}>
        This is a default Page.
      </div>
    ),
  },
};

export const WithPadding: Story = {
  args: {
    padding: 6,
    children: (
      <div style={{ textAlign: 'center', fontSize: '1.5rem' }}>
        Page with custom padding (6)
      </div>
    ),
  },
};

export const WithBackground: Story = {
  args: {
    background: 'linear-gradient(135deg, #00bcd4, #006064)',
    children: (
      <div style={{ color: 'white', fontSize: '1.5rem', textAlign: 'center', marginTop: '40vh' }}>
        Page with gradient background
      </div>
    ),
  },
};

export const CustomSx: Story = {
  args: {
    sx: {
      border: '2px dashed #29b6f6',
      borderRadius: '16px',
      backgroundColor: '#e3f2fd',
    },
    children: (
      <div style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '40vh' }}>
        Page with custom sx styles
      </div>
    ),
  },
};

export const WithHeadMetadata: Story = {
  args: {
    background: 'linear-gradient(135deg, rgba(13, 27, 42, 0.92), rgba(27, 38, 59, 0.96))',
    padding: 5,
    head: {
      title: 'this.GUI Metadata Demo',
      description: 'Per-page head metadata managed by this.GUI Page.',
      favicon: 'https://res.cloudinary.com/dkwnxf6gm/image/upload/v1761276578/this.gui.npm.png',
      socialImage: 'https://res.cloudinary.com/dkwnxf6gm/image/upload/v1760629119/this.gui.neurons.me_mkapde.png',
      canonical: 'https://neurons-me.github.io/GUI/',
      siteName: 'this.GUI',
      type: 'website',
      meta: [
        { name: 'keywords', content: 'this.gui, metadata, og:image, favicon' },
      ],
    },
    children: (
      <div style={{ color: 'white', maxWidth: 720 }}>
        <h2 style={{ marginTop: 0 }}>Page-level metadata</h2>
        <p>
          This story updates <code>document.title</code>, favicon, Open Graph tags and custom meta
          entries while the Page is mounted.
        </p>
        <p>
          Use <code>Page.props.head</code> in declarative specs to control social previews and page
          metadata without editing <code>index.html</code>.
        </p>
      </div>
    ),
  },
};

export const InsetsAwarePage: Story = {
  render: (args) => (
    <InsetsProvider>
      <Page {...args}>
        <div style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '40vh' }}>
          Page with padding that adapts to layout insets.
        </div>
      </Page>
    </InsetsProvider>
  ),
  args: {
    background: "rgba(0, 188, 212, 0.15)",
    padding: 24,
    insetsAware: true,
  },
};

export const LayoutWithPageAndHero: Story = {
  render: () => (
    <InsetsProvider>
      <Layout
        topBarConfig={{ title: 'Neuroverse Layout' }}
        leftSidebarConfig={{ initialView: 'expanded' }}
        rightSidebarConfig={{ initialView: 'expanded' }}
      >
        <Page background="linear-gradient(135deg, #0a192f, #172a45)" padding={4}>
          <Hero
            backgroundSrc="https://images.unsplash.com/photo-1522202195463-8f34a5fa1d15"
            backgroundType="image"
            overlayColor="rgba(10, 25, 47, 0.6)"
            blur="light"
          >
            <div
              style={{
                color: 'white',
                fontSize: '2rem',
                fontWeight: 600,
                textAlign: 'center',
                marginTop: '40vh',
              }}
            >
              Layout with TopBar, LeftSidebar and a HeroSection inside Page
            </div>
          </Hero>
        </Page>
      </Layout>
    </InsetsProvider>
  ),
};
