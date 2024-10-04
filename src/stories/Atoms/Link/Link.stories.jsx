// src/stories/Atoms/Link/Link.stories.jsx
import React from 'react';
import { Link } from './Link';
import './Link.css';

export default {
  title: 'Atoms/Text/Link',
  component: Link,
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content of the link.',
    },
    href: {
      control: 'text',
      description: 'URL the link points to.',
    },
    underline: {
      control: 'boolean',
      description: 'Whether the link is underlined.',
    },
    bold: {
      control: 'boolean',
      description: 'Whether the link text is bold.',
    },
    newWindow: {
      control: 'boolean',
      description: 'Whether the link opens in a new window.',
    },
    external: {
      control: 'boolean',
      description: 'Whether the link is external.',
    },
    experimentalPreview: {
      control: 'boolean',
      description: 'Enable experimental preview on press.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
    },
    style: {
      control: 'object',
      description: 'Inline styles.',
    },
  },
};

/**
 * Default Link
 */
export const DefaultLink = () => (
  <Link
    text="Visit Neurons.me"
    href="https://neurons.me"
    underline={true}
    bold={false}
    newWindow={false}
    external={false}
    experimentalPreview={false}
  />
);

/**
 * Underlined and Bold Link
 */
export const UnderlinedBoldLink = () => (
  <Link
    text="Bold & Underlined Link"
    href="https://neurons.me"
    underline={true}
    bold={true}
    newWindow={false}
    external={false}
    experimentalPreview={false}
  />
);

/**
 * No Underline, Not Bold Link
 */
export const NoUnderlineNotBoldLink = () => (
  <Link
    text="Simple Link"
    href="https://neurons.me"
    underline={false}
    bold={false}
    newWindow={false}
    external={false}
    experimentalPreview={false}
  />
);

/**
 * Open in New Window Link
 */
export const OpenInNewWindow = () => (
  <Link
    text="Open in New Window"
    href="https://neurons.me"
    underline={true}
    bold={false}
    newWindow={true}
    external={false}
    experimentalPreview={false}
  />
);

/**
 * External Link with Notification
 */
export const ExternalLink = () => (
  <Link
    text="External Link"
    href="https://external.com"
    underline={true}
    bold={false}
    newWindow={true}
    external={true}
    experimentalPreview={false}
  />
);

/**
 * Experimental Preview Link
 */
export const ExperimentalPreview = () => (
  <Link
    text="Preview Link"
    href="https://neurons.me"
    underline={true}
    bold={false}
    newWindow={false}
    external={false}
    experimentalPreview={true}
  />
);

/**
 * Interactive Link
 */
const Template = (args) => <Link {...args} />;

export const InteractiveLink = Template.bind({});
InteractiveLink.args = {
  text: 'Interactive Link',
  href: 'https://neurons.me',
  underline: true,
  bold: true,
  newWindow: true,
  external: true,
  experimentalPreview: true,
};
