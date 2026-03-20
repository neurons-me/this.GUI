import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import DomIcon from './DomIcon';

const meta: Meta<typeof DomIcon> = {
  title: 'GUI/Icons/DOM',
  component: DomIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A pixel-block SVG version of the DOM mark, rebuilt with rectangles so it stays editable and inherits theme color through \`currentColor\`.`,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'number', min: 32, max: 240, step: 4 },
      description: 'Rendered width of the icon. Height keeps the original aspect ratio.',
    },
    cellStrokeOpacity: {
      control: { type: 'number', min: 0, max: 0.4, step: 0.01 },
      description: 'Subtle internal block-line opacity used to keep the bitmap feel.',
    },
    title: {
      control: 'text',
      description: 'Accessible title for the SVG.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DomIcon>;

const frameStyle: React.CSSProperties = {
  padding: 28,
  borderRadius: 24,
  border: '1px solid rgba(255,255,255,0.12)',
  background:
    'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
};

export const BitmapFaithful: Story = {
  args: {
    size: 128,
    title: 'DOM',
    cellStrokeOpacity: 0.14,
  },
  render: (args) => (
    <div
      style={{
        padding: 28,
        display: 'grid',
        gap: 20,
        background:
          'radial-gradient(circle at top, rgba(246, 239, 194, 0.08), transparent 44%), #0c0f12',
      }}
    >
      <div style={frameStyle}>
        <div style={{ color: '#f6efc2' }}>
          <DomIcon {...args} />
        </div>
      </div>
      <div style={{ maxWidth: 760, fontSize: 14, lineHeight: 1.6, opacity: 0.86 }}>
        Rebuilt from block cells instead of font glyphs so the mark keeps the stepped bitmap look
        and still follows the active theme through <code>currentColor</code>.
      </div>
    </div>
  ),
};

export const ColorInheritance: Story = {
  args: {
    size: 104,
    title: 'DOM',
    cellStrokeOpacity: 0.14,
  },
  render: (args) => {
    const samples = [
      {
        label: 'Text Primary',
        color: 'var(--mui-palette-text-primary, #f5f7fb)',
        background: '#101722',
      },
      {
        label: 'Warning Accent',
        color: 'var(--mui-palette-warning-light, #f6efc2)',
        background: '#15120a',
      },
      {
        label: 'Success Accent',
        color: 'var(--mui-palette-success-light, #93d39a)',
        background: '#0f1712',
      },
    ];

    return (
      <div
        style={{
          padding: 28,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 18,
          background: '#0b1016',
        }}
      >
        {samples.map((sample) => (
          <div
            key={sample.label}
            style={{
              ...frameStyle,
              background: sample.background,
              color: sample.color,
              display: 'grid',
              gap: 16,
              justifyItems: 'start',
            }}
          >
            <DomIcon {...args} />
            <div style={{ fontSize: 13, opacity: 0.82 }}>{sample.label}</div>
          </div>
        ))}
      </div>
    );
  },
};
