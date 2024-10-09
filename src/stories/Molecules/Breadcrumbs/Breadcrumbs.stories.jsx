//this.GUI/src/stories/Molecules/Breadcrumbs/Breadcrumbs.stories.jsx
import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';

export default {
  title: 'Molecules/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    separator: { control: 'text', defaultValue: '>' },
    color: {
      control: {
        type: 'select',
        options: [
          'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2',
          'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2',
          'shade-1', 'shade-2', 'shade-3', 'shade-4'
        ],
      },
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'], defaultValue: 'medium' },
    },
  },
};

const items = [
  { label: 'Home', link: '/' },
  { label: 'Products', link: '/products' },
  { label: 'Laptops', link: '/products/laptops', active: true }, // Mark this breadcrumb as active
  { label: 'MacBook Pro' }, // No link, indicates the current page
];

export const DefaultBreadcrumbs = (args) => <Breadcrumbs {...args} items={items} />;