import React from 'react';
import { Navbar } from './Navbar';

export default {
  title: 'Molecules/Navigation/Navbar',
  component: Navbar,
  argTypes: {
    logo: {
      control: 'text',
      description: 'Logo URL or image for the navbar. Use a logo with recommended dimensions for best appearance.',
    },
    siteName: {
      control: 'text',
      description: 'Name of the website to be displayed if no logo is provided.',
    },
    centerLinks: {
      control: 'array',
      description: 'Array of center navigation links with text and href.',
    },
    rightLinks: {
      control: 'array',
      description: 'Array of right-side navigation links with text and href.',
    },
    fixed: {
      control: 'boolean',
      description: 'Determines if the navbar is fixed at the top of the page.',
    },
  },
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: 'https://example.com/logo.png', // Replace with a real logo image
  siteName: 'My Site',
  centerLinks: [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Services', href: '/services' },
  ],
  rightLinks: [
    { text: 'Login', href: '/login' },
    { text: 'Sign Up', href: '/signup' },
  ],
  fixed: true,
};

export const WithoutLogo = Template.bind({});
WithoutLogo.args = {
  logo: '', // No logo, site name will be displayed
  siteName: 'My Awesome Site',
  centerLinks: [
    { text: 'Home', href: '/' },
    { text: 'Blog', href: '/blog' },
    { text: 'Contact', href: '/contact' },
  ],
  rightLinks: [
    { text: 'Login', href: '/login' },
    { text: 'Dashboard', href: '/dashboard' },
  ],
  fixed: false,
};

export const MobileVersion = Template.bind({});
MobileVersion.args = {
  logo: 'https://example.com/mobile-logo.png',
  siteName: 'Mobile View',
  centerLinks: [
    { text: 'Home', href: '/' },
    { text: 'Profile', href: '/profile' },
  ],
  rightLinks: [
    { text: 'Logout', href: '/logout' },
  ],
  fixed: true,
  // You can test this by resizing the Storybook window to a smaller width
};