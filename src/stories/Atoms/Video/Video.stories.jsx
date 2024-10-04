import React from 'react';
import { Video } from './Video';

export default {
  title: 'Atoms/Media/Video',
  component: Video,
  argTypes: {
    src: { control: 'text', defaultValue: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    poster: { control: 'text', defaultValue: 'https://www.w3schools.com/html/pic_trulli.jpg' },
    autoplay: { control: 'boolean', defaultValue: false },
    loop: { control: 'boolean', defaultValue: false },
    muted: { control: 'boolean', defaultValue: false },
    controls: { control: 'boolean', defaultValue: true },
    width: { control: 'text', defaultValue: '100%' },
    height: { control: 'text', defaultValue: 'auto' },
    showControlsOnHover: { control: 'boolean', defaultValue: true },
  },
};

export const DefaultVideo = (args) => (
  <Video {...args} />
);

export const VideoWithCustomDimensions = () => (
  <Video
    src="https://www.w3schools.com/html/mov_bbb.mp4"
    poster="https://www.w3schools.com/html/pic_trulli.jpg"
    width="640px"
    height="360px"
  />
);

export const VideoAutoplayLoop = () => (
  <Video
    src="https://www.w3schools.com/html/mov_bbb.mp4"
    autoplay
    loop
    muted
  />
);
