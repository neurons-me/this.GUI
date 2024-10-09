import React from 'react';
import { ComparisonTable } from './ComparisonTable';

export default {
  title: 'Molecules/Data/ComparisonTable',
  component: ComparisonTable,
  argTypes: {
    headerBgColor: {
      control: {
        type: 'select',
        options: [
          'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
        ],
      },
    },
    rowHeaderBgColor: {
      control: {
        type: 'select',
        options: [
          'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
        ],
      },
    },
    highlightBgColor: {
      control: {
        type: 'select',
        options: [
          'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
        ],
      },
    },
    borderColor: {
      control: {
        type: 'select',
        options: [
          'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
        ],
      },
    },
  },
};

const headers = ['Feature', 'Product A', 'Product B', 'Product C'];
const rowHeaders = ['Price', 'Quality', 'Support', 'Features'];
const rows = [
  ['$10', '$15', '$20'],
  ['High', 'Medium', 'Low'],
  ['24/7', 'Business Hours', 'Email Only'],
  ['Basic', 'Advanced', 'Premium'],
];

export const DefaultTable = (args) => (
  <ComparisonTable
    {...args}
    headers={headers}
    rows={rows}
    rowHeaders={rowHeaders}
  />
);

export const HighlightedColumn = (args) => (
  <ComparisonTable
    {...args}
    headers={headers}
    rows={rows}
    rowHeaders={rowHeaders}
    highlightColumn={1}
  />
);