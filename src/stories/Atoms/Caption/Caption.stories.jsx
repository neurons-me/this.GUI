// src/stories/Atoms/Caption/Caption.stories.jsx
import React from 'react';
import { Caption } from './Caption';
import './Caption.css';

export default {
  title: 'Atoms/Text/Caption',
  component: Caption,
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content of the caption.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'required' },
      },
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'image',
          'table',
          'form',
          'chart',
          'transcription',
          'description',
          'interactive',
        ],
      },
      description: 'Variant/type of the caption.',
      table: {
        type: { summary: `'image' | 'table' | 'form' | 'chart' | 'transcription' | 'description' | 'interactive'` },
        defaultValue: { summary: 'image' },
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'normal', 'large'],
      },
      description: 'Size of the caption.',
      table: {
        type: { summary: `'small' | 'normal' | 'large'` },
        defaultValue: { summary: 'normal' },
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'info',
          'warning',
          'alert',
          'success',
          'neutral',
          'dark',
          'classy-color-1',
          'classy-color-2',
          'classy-color-3',
          'classy-color-4',
          'classy-color-5',
          'small-switch-color-1',
          'small-switch-color-2',
          'natural-color-1',
          'natural-color-2',
          'natural-color-3',
          'grey-friend-1',
          'grey-friend-2',
          'shade-1',
          'shade-2',
          'shade-3',
          'shade-4',
        ],
      },
      description: 'Color of the caption (matches global theme colors).',
      table: {
        type: { summary: `'info' | 'warning' | 'alert' | 'success' | 'neutral' | 'dark' | 'classy-color-1' | 'classy-color-2' | 'classy-color-3' | 'classy-color-4' | 'classy-color-5' | 'small-switch-color-1' | 'small-switch-color-2' | 'natural-color-1' | 'natural-color-2' | 'natural-color-3' | 'grey-friend-1' | 'grey-friend-2' | 'shade-1' | 'shade-2' | 'shade-3' | 'shade-4'` },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'object',
      description: 'Inline styles.',
      table: {
        type: { summary: 'object' },
      },
    },
  },
};

/**
 * Image or Video Captions
 */
export const ImageCaption = () => (
  <figure style={{ textAlign: 'center' }}>
    <img src="https://via.placeholder.com/150" alt="Sample Image" />
    <Caption text="CEO delivering the keynote at the annual conference." variant="image" />
  </figure>
);

/**
 * Table Captions
 */
export const TableCaption = () => (
  <figure>
    <table>
      <caption>Quarterly financial results for Q3 2024</caption>
      <thead>
        <tr>
          <th>Revenue</th>
          <th>Expenses</th>
          <th>Profit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>$1,000,000</td>
          <td>$750,000</td>
          <td>$250,000</td>
        </tr>
      </tbody>
    </table>
    {/* Alternatively, using Caption component */}
    {/* <Caption text="Quarterly financial results for Q3 2024" variant="table" /> */}
  </figure>
);

/**
 * Form Element Captions
 */
export const FormCaption = () => (
  <div>
    <label htmlFor="meeting-date">Meeting Date</label>
    <input type="date" id="meeting-date" name="meeting-date" />
    <Caption text="Select your preferred meeting date." variant="form" />
  </div>
);

/**
 * Chart or Graph Captions
 */
export const ChartCaption = () => (
  <div style={{ position: 'relative' }}>
    <img src="https://via.placeholder.com/300x200" alt="Sample Chart" />
    <Caption text="Annual growth rate comparison between 2020 and 2024." variant="chart" />
  </div>
);

/**
 * Audio or Video Transcriptions (Subtitles or Captions)
 */
export const TranscriptionCaption = () => (
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <video width="300" controls>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <Caption
      text="[Music playing in the background]."
      variant="transcription"
      size="small"
      color="neutral"
      style={{ position: 'absolute', bottom: '10px', left: '50%' }}
    />
  </div>
);

/**
 * Content Descriptions or Explanations
 */
export const DescriptionCaption = () => (
  <div>
    <img src="https://via.placeholder.com/300x200" alt="Sample Data" />
    <Caption text="Data collected from a sample size of 1000 users." variant="description" />
  </div>
);

/**
 * Captions for Elements
 */
export const ElementCaption = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <button>🔊</button>
    <Caption text="Adjust volume level." variant="interactive" />
  </div>
);

/**
 * Interactive Playground
 */
const Template = (args) => <Caption {...args} />;

export const InteractiveCaptionStory = Template.bind({});
InteractiveCaptionStory.args = {
  text: 'Interactive Caption',
  variant: 'image',
  size: 'normal',
  color: 'info',
};
InteractiveCaptionStory.storyName = 'Interactive Caption';
