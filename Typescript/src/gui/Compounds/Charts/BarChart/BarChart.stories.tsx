import type { Meta, StoryObj } from '@storybook/react';
import Theme from '@/gui/Theme/Theme';
import BarChart from './BarChart';

const meta: Meta<typeof BarChart> = {
  title: 'Compounds/Charts/BarChart',
  component: BarChart,
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
    title: 'Monthly conversions',
    subtitle: 'Current pipeline',
    data: [
      { label: 'Jan', value: 8 },
      { label: 'Feb', value: 12 },
      { label: 'Mar', value: 16 },
      { label: 'Apr', value: 22 },
      { label: 'May', value: 19 },
      { label: 'Jun', value: 27 },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof BarChart>;

export const Playground: Story = {};
