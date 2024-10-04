// src/stories/Atoms/Audio/Audio.stories.jsx
import React from 'react';
import { Audio } from './Audio';
import './Audio.css';

export default {
  title: 'Atoms/Media/Audio',
  component: Audio,
  argTypes: {
    src: {
      control: 'text',
      description: 'Source URL of the audio file.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'required' },
      },
    },
    autoPlay: {
      control: 'boolean',
      description: 'Autoplay the audio on load.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loop: {
      control: 'boolean',
      description: 'Loop the audio playback.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    muted: {
      control: 'boolean',
      description: 'Mute the audio by default.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
      description: 'Size of the audio player.',
      table: {
        type: { summary: 'small | medium' },
        defaultValue: { summary: 'medium' },
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
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
      description: 'Color from the global palettes for control icons.',
      table: {
        type: { summary: 'classy-color-1 | classy-color-2 | classy-color-3 | classy-color-4 | classy-color-5 | small-switch-color-1 | small-switch-color-2 | natural-color-1 | natural-color-2 | natural-color-3 | grey-friend-1 | grey-friend-2 | shade-1 | shade-2 | shade-3 | shade-4' },
        defaultValue: { summary: 'classy-color-1' },
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
 * 
 * Medium size with Classy Palette Color 1.
 */
export const DefaultAudio = () => (
  <Audio
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    size="medium"
    color="classy-color-1"
  />
);

/**
 * 
 * Medium size, autoplay enabled with Classy Palette Color 3.
 */
export const AutoplayAudio = () => (
  <Audio
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    autoPlay
    size="medium"
    color="classy-color-3"
  />
);

/**
 * 
 * Small size with Classy Palette Color 2.
 */
export const SmallAudio = () => (
  <Audio
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    size="small"
    color="classy-color-2"
  />
);


/**
 * 
 * Medium size, looping enabled with Classy Palette Color 4.
 */
export const LoopingAudio = () => (
  <Audio
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    loop
    size="medium"
    color="classy-color-4"
  />
);

/**
 * 
 * Medium size, muted by default with Classy Palette Color 5.
 */
export const MutedAudio = () => (
  <Audio
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    muted
    size="medium"
    color="classy-color-5"
  />
);

/**
 * 
 * Medium size with custom styles and Classy Palette Color 1.
 */
export const CustomStyledAudio = () => (
  <Audio
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    size="medium"
    color="classy-color-1"
    style={{ border: '2px solid var(--classy-color-1)', borderRadius: '8px' }}
  />
);

/**
 * ### Interactive Playground
 * 
 * Allows dynamic interaction with the audio props via Storybook controls.
 */
const Template = (args) => <Audio {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
  autoPlay: false,
  loop: false,
  muted: false,
  size: 'medium',
  color: 'classy-color-1',
};
Playground.storyName = 'Interactive Playground';