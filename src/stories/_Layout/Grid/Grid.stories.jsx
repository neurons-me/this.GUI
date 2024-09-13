// src/stories/Layout/Grid/Grid.stories.jsx
import React from 'react';
import Grid from './Grid';

export default {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {
    columns: { control: 'number', defaultValue: 3 },
    gap: { control: 'text', defaultValue: '10px' },
  },
};

const Template = (args) => (
  <Grid {...args}>
    <div style={{ backgroundColor: '#FFDDC1', padding: '20px' }}>Item 1</div>
    <div style={{ backgroundColor: '#FEC8D8', padding: '20px' }}>Item 2</div>
    <div style={{ backgroundColor: '#D4A5A5', padding: '20px' }}>Item 3</div>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  columns: 3,
  gap: '10px',
};