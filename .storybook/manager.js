//this.GUI/src/manager.js
import { addons } from '@storybook/manager-api';
import Theme from './Theme';

addons.setConfig({
  theme: Theme, // Or 'themes.light'
});