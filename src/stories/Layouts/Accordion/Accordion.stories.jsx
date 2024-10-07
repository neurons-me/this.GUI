import React from 'react';
import { Accordion } from './Accordion';

export default {
  title: 'Molecules/Organization/Accordion',
  component: Accordion,
  argTypes: {
    allowMultipleOpen: { control: 'boolean', defaultValue: false },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
    color: {
      control: 'select',
      options: [
        'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
        'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
        'small-switch-color-1', 'small-switch-color-2',
        'natural-color-1', 'natural-color-2', 'natural-color-3',
        'grey-friend-1', 'grey-friend-2',
        'shade-1', 'shade-2', 'shade-3', 'shade-4'
      ],
      defaultValue: 'primary',
    },
    showArrow: { control: 'boolean', defaultValue: true },
    border: { control: 'boolean', defaultValue: false },
  },
};

const items = [
  { title: 'Section 1', content: 'Content for section 1' },
  { title: 'Section 2', content: 'Content for section 2' },
  { title: 'Section 3', content: 'Content for section 3' },
];

export const DefaultAccordion = (args) => <Accordion {...args} items={items} />;
export const MultipleOpenAccordion = (args) => <Accordion {...args} allowMultipleOpen={true} items={items} />;
export const AccordionWithBorder = (args) => <Accordion {...args} border={true} items={items} />;