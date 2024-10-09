//this.GUI/src/stories/Atoms/TextArea/TextArea.stories.jsx
import React from 'react';
import { TextArea } from './TextArea';

export default {
  title: 'Atoms/Interactive/TextArea',
  component: TextArea,
  argTypes: {
    bold: { control: 'boolean', description: 'Bold text' },
    italic: { control: 'boolean', description: 'Italic text' },
    underline: { control: 'boolean', description: 'Underlined text' },
    color: {
      control: { type: 'select', options: ['primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark'] },
      description: 'Text color',
    },
    collapsible: { control: 'boolean', description: 'Enable collapsible text area' },
    collapseAt: { control: 'number', description: 'Collapse after N characters' },
  },
};

/** Interactive TextArea */
const Template = (args) => <TextArea {...args} />;

export const InteractiveTextArea = Template.bind({});
InteractiveTextArea.args = {
  value: 'Type here...',
  placeholder: 'Enter your text...',
  rows: 4,
  cols: 50,
  bold: false,
  italic: false,
  underline: false,
  color: 'primary',
  collapsible: false,
  collapseAt: 100,
};
