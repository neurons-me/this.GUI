import React from 'react';
import { SelectTheme } from './SelectTheme';  // Correct way to import a named export
export default {
  title: 'Molecules/ContentDisplay/SelectTheme',
  component: SelectTheme,
  parameters: {
    docs: {
      description: {
        component: 'SelectTheme allows the user to switch between different CSS themes dynamically.',
      },
    },
  },
};

const Template = (args) => <SelectTheme {...args} />;

export const Default = Template.bind({});
Default.args = {
  // You can pass default props here if needed, though SelectTheme doesn't take any props directly.
};

Default.story = {
  name: 'Default',
};