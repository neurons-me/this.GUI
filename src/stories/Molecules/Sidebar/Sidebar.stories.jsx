import { Sidebar } from './Sidebar';

export default {
  title: 'Molecules/Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // Define argTypes here for dynamic controls in Storybook
  },
};

export const Default = {
  args: {
    links: [
      { url: '#home', label: 'Home', isActive: true },
      { url: '#about', label: 'About', isActive: false },
      { url: '#services', label: 'Services', isActive: false },
    ],
    logo: <img src="https://example.com/logo.png" alt="Logo" style={{ width: '100px' }} />,
    userControls: (
      <>
        <button className="button">Control 1</button>
        <button className="button">Control 2</button>
      </>
    ),
    styleOverrides: {
      sidebarBackgroundColor: '#f5f5f5',
      sidebarBorderColor: '#ddd',
      sidebarPadding: '20px',
      sidebarWidth: '280px',
    },
  },
};