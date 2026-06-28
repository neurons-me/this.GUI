import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import RubiksCube from './RubiksCube';

const meta: Meta<typeof RubiksCube> = {
  title: 'Widgets/RubiksCube',
  component: RubiksCube,
  tags: ['autodocs'],
  args: {
    height: 340,
    spin: true,
    orbit: true,
    borderRadius: 16,
    palette: 'classic',
  },
};

export default meta;
type Story = StoryObj<typeof RubiksCube>;

export const Default: Story = {
  name: 'Default (spinning, draggable)',
};

export const Themed: Story = {
  name: 'Themed (neurons.me palette)',
  args: { palette: 'themed' },
};

export const Static: Story = {
  name: 'No spin',
  args: { spin: false },
};

export const NoOrbitControls: Story = {
  name: 'Orbit disabled',
  args: { orbit: false },
};

const purpleTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#a855f7', dark: '#581c87' },
    info: { main: '#a855f7' },
    background: { default: '#1a0b2e' },
  },
});
const greenTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#16a34a', dark: '#14532d' },
    info: { main: '#16a34a' },
    background: { default: '#f0fdf4' },
  },
});

export const ThemeReactivity: Story = {
  name: 'Themed — reacts to whichever theme wraps it',
  args: { palette: 'themed', spin: false, orbit: false },
  render: (args) => (
    <div style={{ display: 'flex', gap: 16 }}>
      <ThemeProvider theme={purpleTheme}>
        <div style={{ flex: 1 }}>
          <RubiksCube {...args} />
        </div>
      </ThemeProvider>
      <ThemeProvider theme={greenTheme}>
        <div style={{ flex: 1 }}>
          <RubiksCube {...args} />
        </div>
      </ThemeProvider>
    </div>
  ),
};
