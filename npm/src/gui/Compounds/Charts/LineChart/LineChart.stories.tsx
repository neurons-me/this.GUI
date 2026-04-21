import type { Meta, StoryObj } from '@storybook/react';
import Theme from '@/gui/Theme/Theme';
import LineChart from './LineChart';

const meta: Meta<typeof LineChart> = {
  title: 'Compounds/Charts/LineChart',
  component: LineChart,
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <Theme>
        <div style={{ padding: 16, minHeight: 280, width: '100%' }}>
          <Story />
        </div>
      </Theme>
    ),
  ],
  args: {
    title: 'Weekly active users',
    subtitle: '7-day rolling snapshot',
    data: [
      { label: 'Mon', value: 12 },
      { label: 'Tue', value: 18 },
      { label: 'Wed', value: 15 },
      { label: 'Thu', value: 22 },
      { label: 'Fri', value: 26 },
      { label: 'Sat', value: 32 },
      { label: 'Sun', value: 28 },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof LineChart>;

export const Playground: Story = {};
