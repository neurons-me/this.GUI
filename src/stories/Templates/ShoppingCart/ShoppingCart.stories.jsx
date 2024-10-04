
import { ShoppingCart } from './ShoppingCart';

// Storybook configuration for ShoppingCart template
export default {
  title: 'Templates/ECommercePages/ShoppingCart',
  component: ShoppingCart,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'This is a default ShoppingCart template.',
  },
};
