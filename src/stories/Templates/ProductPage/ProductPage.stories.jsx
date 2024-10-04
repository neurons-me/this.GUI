
import { ProductPage } from './ProductPage';

// Storybook configuration for ProductPage template
export default {
  title: 'Templates/ECommercePages/ProductPage',
  component: ProductPage,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'This is a default ProductPage template.',
  },
};
