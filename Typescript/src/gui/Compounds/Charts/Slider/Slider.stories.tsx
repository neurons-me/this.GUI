import type { Meta, StoryObj } from '@storybook/react';
import Theme from '@/gui/Theme/Theme';
import Slider from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Compounds/Charts/Slider',
  component: Slider,
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <Theme>
        <div style={{ padding: 16, minHeight: 220, width: '100%', maxWidth: 520 }}>
          <Story />
        </div>
      </Theme>
    ),
  ],
  args: {
    label: 'Window size',
    caption: 'Use this to adjust the aggregation window.',
    defaultValue: 30,
    min: 0,
    max: 100,
    unit: '%',
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Playground: Story = {};
