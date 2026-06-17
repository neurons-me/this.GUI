import { defineConfig } from 'vitepress';

const base = process.env.VITEPRESS_BASE || '/GUI/Typescript/typedocs/';

export default defineConfig({
  title: 'this.gui',
  description: 'Composable React component library for the neurons.me stack. Declarative, imperative, and generative UI primitives.',
  base,
  outDir: '../typedocs',
  appearance: 'force-dark',
  head: [
    ['meta', { name: 'author', content: 'neurons.me' }],
    ['meta', { name: 'keywords', content: 'this.gui, react, components, UI, neurons.me, generative UI, composable' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'this.gui — Documentation' }],
    ['meta', { property: 'og:description', content: 'Composable React component library for the neurons.me stack.' }],
    ['meta', { property: 'og:url', content: 'https://neurons-me.github.io/GUI/Typescript/typedocs/' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'this.gui — Documentation' }],
    ['meta', { name: 'twitter:description', content: 'Composable React component library for the neurons.me stack.' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Storybook', link: 'https://neurons-me.github.io/GUI/docs/storybook/' },
      { text: 'Semantic Taxonomy', link: '/Semantic-Taxonomy' },
      { text: 'API', link: 'https://neurons-me.github.io/GUI/Typescript/docs/api/' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Semantic Taxonomy', link: '/Semantic-Taxonomy' },
          { text: 'Monad Discovery', link: '/Monad-Discovery' },
        ],
      },
      {
        text: 'Protocols',
        items: [
          { text: 'Cleaker Access Protocol', link: '/Cleaker-Access-Protocol' },
          { text: 'Implementation', link: '/Cleaker-Access-Protocol-Implementation' },
          { text: 'Molecule Laws', link: '/Molecule-Laws' },
        ],
      },
      {
        text: 'API Reference',
        items: [
          { text: 'Overview', link: 'https://neurons-me.github.io/GUI/Typescript/docs/api/' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/neurons-me/GUI' },
    ],
  },
});
