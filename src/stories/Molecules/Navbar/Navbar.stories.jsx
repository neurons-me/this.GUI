import React from 'react';
import { Navbar } from './Navbar';
import { SearchBar } from '../SearchBar/SearchBar';
import { Logo } from '../../Atoms/Logo/Logo'; // Importing the Logo component

export default {
  title: 'Molecules/Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    logo: {
      control: false, // We use a React node, so control is not applicable
      description: 'Logo component or element to display in the navbar',
    },
    searchComponent: {
      control: false, // We use a React node, so control is not applicable
      description: 'Search component to display in the navbar',
    },
    leftItems: {
      control: 'object',
      description: 'Array of navigation items for the left side',
    },
    centerItems: {
      control: 'object',
      description: 'Array of navigation items for the center',
    },
    rightItems: {
      control: 'object',
      description: 'Array of navigation items for the right side',
    },
    styleOverrides: {
      control: 'object',
      description: 'Override default styles with CSS variables',
    },
  },
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: <Logo />,  // Using the Logo component here
  searchComponent: <SearchBar placeholder="Search..." />,
  leftItems: [
    { url: '#home', label: 'Home' },
    { url: '#about', label: 'About' },
  ],
  centerItems: [
    { url: '#services', label: 'Services' },
    { url: '#portfolio', label: 'Portfolio' },
  ],
  rightItems: [
    { url: '#login', label: 'Login' },
    { url: '#signup', label: 'Sign Up' },
  ],
};

export const CustomizedNavbar = Template.bind({});
CustomizedNavbar.args = {
  ...Default.args,
  styleOverrides: {
    navbarBackgroundColor: '#1F1F1F',
    navbarBorderColor: '#444444',
    navbarHeight: '70px',
    navbarLinkColor: '#FFFFFF',
    navbarLinkHoverBackground: 'rgba(255, 255, 255, 0.2)',
  },
};