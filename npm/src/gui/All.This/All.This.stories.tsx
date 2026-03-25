import type { Meta, StoryObj } from '@storybook/react';
import AllThis from './All.This';

const meta: Meta<typeof AllThis> = {
  title: 'All.This/Overview',
  component: AllThis,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Overview of the generic module UI primitives used to build package-specific surfaces.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AllThis>;

export const Default: Story = {};
