import React from 'react';
import { Tooltip } from './Tooltip';

export default {
  title: 'Atoms/Interactive/Tooltip',
  component: Tooltip,
  argTypes: {
    content: { control: 'text', defaultValue: 'Tooltip Content' },
    position: {
      control: { type: 'select', options: ['top', 'bottom', 'left', 'right', 'north', 'south', 'east', 'west'] },
      defaultValue: 'top'
    },
    color: {
      control: { type: 'select', options: [
        'primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
        'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5'
      ]},
      defaultValue: 'primary'
    },
    variant: { control: { type: 'select', options: ['primary', 'secondary'] }, defaultValue: 'primary' },
    showArrow: { control: 'boolean', defaultValue: true },
  },
};


export const ColorVariants = () => (
  <div style={{ padding: '50px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
    {['primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <Tooltip key={color} content={`This is ${color}`} color={color}>
        <button>Hover for {color}</button>
      </Tooltip>
    ))}
  </div>
);

export const InteractiveTooltip = (args) => (
  <div style={{ padding: '100px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    <Tooltip {...args} position="top">
      <button>Hover Top</button>
    </Tooltip>
    <Tooltip {...args} position="bottom">
      <button>Hover Bottom</button>
    </Tooltip>
    <Tooltip {...args} position="left">
      <button>Hover Left</button>
    </Tooltip>
    <Tooltip {...args} position="right">
      <button>Hover Right</button>
    </Tooltip>
  </div>
);