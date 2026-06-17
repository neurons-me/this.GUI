import Home from './views/Home';

const app = {
  id: '__APP_ID__',
  namespace: 'apps.__APP_ID__',
  title: '__APP_TITLE__',
  theme: 'neurons.me',
  views: {
    home: Home,
  },
};

export default app;
