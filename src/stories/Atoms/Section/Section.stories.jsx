import React from 'react';
import { Section } from './Section';

export default {
  title: 'Atoms/Layout/Section',
  component: Section,
  argTypes: {
    title: { control: 'text', defaultValue: 'Section Title' },
    margin: { control: 'text', defaultValue: '20px 0' },
    padding: { control: 'text', defaultValue: '20px' },
    backgroundColor: { control: 'color', defaultValue: 'transparent' },
    border: { control: 'boolean', defaultValue: false },
    borderColor: {
      control: 'select',
      options: ['primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark'],
      defaultValue: 'neutral',
    },
    fullWidth: { control: 'boolean', defaultValue: false },
    shadow: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      defaultValue: 'none',
    },
    id: { control: 'text', defaultValue: 'section-1' },
    ariaLabel: { control: 'text', defaultValue: 'Main Section' },
  },
};

export const DefaultSection = (args) => (
  <Section {...args}>
    <p>This is a section with some default content.</p>
  </Section>
);

export const SectionWithBorder = (args) => (
  <Section {...args} border={true} borderColor="primary">
    <p>This section has a border.</p>
  </Section>
);

export const FullWidthSection = (args) => (
  <Section {...args} fullWidth={true} shadow="medium">
    <p>This is a full-width section with a medium shadow.</p>
  </Section>
);