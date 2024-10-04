// src/stories/Molecules/FormElements/SearchBar/SearchBar.stories.jsx

import React from 'react';
import { SearchBar } from './SearchBar';

export default {
  title: 'Molecules/FormElements/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
    },
    onSearch: {
      action: 'searched',
      description: 'Function to call when the search form is submitted',
    },
  },
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
};