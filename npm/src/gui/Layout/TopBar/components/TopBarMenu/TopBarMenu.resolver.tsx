import type { TopBarMenuProps } from './TopBarMenu.types';

const resolver: { type: string; props: TopBarMenuProps } = {
  type: 'TopBarMenu',
  props: {
    label: 'Menu',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

export default resolver;