//this.GUI/src/stories/Molecules/AudioPlayer/AudioPlayer.stories.jsx
import React from 'react';
import { AudioPlayer } from './AudioPlayer';
import './AudioPlayer.css';

export default {
  title: 'Molecules/Media/AudioPlayer',
  component: AudioPlayer,
  argTypes: {
    autoPlay: { control: 'boolean', defaultValue: false },
    loop: { control: 'boolean', defaultValue: false },
    muted: { control: 'boolean', defaultValue: false },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      defaultValue: 'medium',
    },
    color: {
      control: 'select',
      options: [
        'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
        'small-switch-color-1', 'small-switch-color-2',
        'natural-color-1', 'natural-color-2', 'natural-color-3',
        'grey-friend-1', 'grey-friend-2',
        'shade-1', 'shade-2', 'shade-3', 'shade-4',
      ],
      defaultValue: 'classy-color-1',
    },
    showMedia: { control: 'boolean', defaultValue: true },
  },
};

const playlist = [
  {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'Track 1',
    image: 'https://via.placeholder.com/150?text=Track+1',
  },
  {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    title: 'Track 2',
    image: 'https://via.placeholder.com/150?text=Track+2',
  },
  {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    title: 'Track 3',
    image: 'https://via.placeholder.com/150?text=Track+3',
  },
];

export const DefaultAudioPlayer = () => <AudioPlayer playlist={playlist} />;
export const SmallAudioPlayer = () => <AudioPlayer size="small" playlist={playlist} />;
export const AutoplayAudioPlayer = () => <AudioPlayer autoPlay playlist={playlist} />;
export const AudioPlayerWithoutMedia = () => <AudioPlayer showMedia={false} playlist={playlist} />;
export const LoopingAudioPlayer = () => <AudioPlayer loop playlist={playlist} />;