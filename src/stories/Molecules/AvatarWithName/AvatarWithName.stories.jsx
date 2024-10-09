//this.GUI/src/stories/Molecules/AvatarWithName/AvatarWithName.stories.jsx
import React from 'react';
import { AvatarWithName } from './AvatarWithName';

export default {
  title: 'Molecules/Display/AvatarWithName',
  component: AvatarWithName,
  argTypes: {
    imageSrc: { control: 'text', defaultValue: 'https://via.placeholder.com/150' },
    name: { control: 'text', defaultValue: 'John Doe' },
    namePosition: { control: 'select', options: ['below', 'side'], defaultValue: 'below' },
    size: { control: 'select', options: ['small', 'medium', 'large'], defaultValue: 'medium' },
  },
};

export const Default = (args) => <AvatarWithName {...args} />;

export const SideName = (args) => <AvatarWithName {...args} namePosition="side" />;
export const LargeAvatar = (args) => <AvatarWithName {...args} size="large" />;
export const SmallAvatar = (args) => <AvatarWithName {...args} size="small" />;