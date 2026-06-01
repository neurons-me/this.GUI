import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';
import { themes } from 'storybook/theming';

addons.setConfig({
  theme: create({
    theme: themes.dark,
    base: 'dark', // o 'light'
    brandTitle: '.GUI',
    brandUrl: 'https://neurons-me.github.io/GUI',
    brandImage: 'GUI.png',
    brandTarget: '_self',
  }),
  sidebar: {
    showRoots: true,
    // Root ids are kebab-case from first title segment.
    // Leave "getting-started" out so it stays open by default.
    collapsedRoots: ['docs', 'gui', 'atoms', 'molecules', 'components', 'identity-noise', 'namespace', 'widgets'],
  },
});
