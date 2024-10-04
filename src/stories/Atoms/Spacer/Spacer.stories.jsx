// src/stories/Atoms/Spacer/Spacer.stories.jsx
import React from 'react';
import { Spacer } from './Spacer';

export default {
  title: 'Atoms/Layout/Spacer',
  component: Spacer,
  argTypes: {
    size: {
      control: { type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
      description: 'Controls the size of the space (width or height)',
      defaultValue: 'md',
    },
    direction: {
      control: { type: 'select', options: ['vertical', 'horizontal'] },
      description: 'Direction of the spacer (vertical or horizontal)',
      defaultValue: 'vertical',
    },
    responsive: {
      control: { type: 'boolean' },
      description: 'Make the spacer responsive to screen sizes',
      defaultValue: true,
    },
    className: {
      control: 'text',
      description: 'Custom CSS class for additional styling',
    },
  },
};

const Template = (args) => (
  <div>
    {/* Vertical Spacer Example */}
    <div style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>
      Content Before Vertical Spacer
    </div>
    <Spacer {...args} />
    <div style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>
      Content After Vertical Spacer
    </div>

    {/* Horizontal Spacer Example */}
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
      <div style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>
        Left Content
      </div>
      <Spacer {...args} direction="horizontal" />
      <div style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>
        Right Content
      </div>
    </div>
  </div>
);

export const InteractiveSpacer = Template.bind({});
InteractiveSpacer.args = {
  size: 'md',
  direction: 'vertical',
  responsive: true,
};
InteractiveSpacer.storyName = 'Interactive Spacer';
