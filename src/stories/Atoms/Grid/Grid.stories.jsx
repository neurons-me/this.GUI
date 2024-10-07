import React from 'react';
import { Grid } from './Grid';

export default {
  title: 'Atoms/Layout/Grid',
  component: Grid,
  argTypes: {
    gap: { control: 'text', defaultValue: '16px' },
    border: { control: 'boolean', defaultValue: false },
    rounded: { control: 'boolean', defaultValue: false },
    shadow: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      defaultValue: 'none',
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
  },
};

export const ResponsiveGrid = (args) => (
  <Grid {...args}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
  </Grid>
);

export const GridWithRoundedAndShadow = (args) => (
  <Grid {...args} border={true} rounded={true} shadow="medium" color="primary">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
  </Grid>
);

export const ColorfulGrid = (args) => (
  <Grid {...args} color="alert">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
    <div>Item 10</div>
    <div>Item 11</div>
    <div>Item 12</div>
    <div>Item 13</div>
    <div>Item 14</div>
    <div>Item 15</div>
    <div>Item 16</div>
    <div>Item 17</div>
    <div>Item 18</div>
    <div>Item 19</div>
    <div>Item 20</div>
    <div>Item 21</div>
  </Grid>
);