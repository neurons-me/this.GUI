import type { Meta } from '@storybook/react';
import TopBarMenu from './TopBarMenu';
const meta: Meta<typeof TopBarMenu> = {
  component: TopBarMenu,
  title: 'Layouts/ResponsiveUI/TopBar/TopBarMenu',
};

export default meta;
export const ReactUsage = () => (
  <TopBarMenu
    label="More"
    items={[
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'External', href: 'https://external.com', external: true },
    ]}
  />
);

export const DeclarativeUsage = {
  type: 'menu',
  props: {
    label: 'More',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'External', href: 'https://external.com', external: true },
    ],
  },
};