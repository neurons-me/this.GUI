//this.GUI/.storybook/Theme.js
import { create } from '@storybook/theming/create';

// Ensure that the environment variable is prefixed with VITE_ or VITE_APP_ for Vite to expose it
export default create({
  base: 'light',
  brandTitle: 'This.GUI',
  brandUrl: process.env.VITE_APP_BRAND_URL || 'http://localhost:7774', // Use the environment variable or fallback
  brandImage: 'https://suign.github.io/assets/imgs/this_GUI.svg',
  brandTarget: '_self',
});