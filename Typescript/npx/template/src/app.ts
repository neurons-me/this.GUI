import Home from './views/Home';
import Spaces from './views/Spaces';
import type { AppDeclaration } from 'this.gui/runtime';

const app: AppDeclaration = {
  id: '__APP_ID__',
  namespace: 'apps.__APP_ID__',
  title: '__APP_TITLE__',
  theme: 'neurons.me',
  views: {
    home: Home,
    spaces: Spaces,
  },
};

export default app;
