import React from 'react';
import Theme from './components/Theme';  // Importing Theme instead of CustomThemeProvider
import Layout from './components/Layout';
import GUI from './components/GUI';

const App = () => {
  const config = [
    {
      type: 'navbar',
      title: 'My Awesome App',
      links: [
        { label: 'Home', url: '/' },
        { label: 'About', url: '/about' },
      ],
    },
    {
      type: 'section',
      title: 'Welcome to My Site',
      content: 'This is a dynamically generated landing page using this.gui.',
    },
    {
      type: 'button',
      label: 'Learn More',
      url: '/about',
    },
  ];

  return (
    <Theme>
      <Layout>
        {config.map((instance, index) => (
          <GUI key={index} instance={instance} />
        ))}
      </Layout>
    </Theme>
  );
};

export default App;