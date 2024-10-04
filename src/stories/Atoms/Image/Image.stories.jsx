// src/stories/Atoms/Image/Image.stories.jsx
import React from 'react';
import { Image } from './Image';
import { FaHeart, FaShare, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import './Image.css';

export default {
  title: 'Atoms/Media/Image',
  component: Image,
  argTypes: {
    src: {
      control: 'text',
      description: 'Source URL of the image.',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image.',
    },
    width: {
      control: 'text',
      description: 'Width of the image.',
    },
    height: {
      control: 'text',
      description: 'Height of the image.',
    },
    loading: {
      control: {
        type: 'select',
        options: ['lazy', 'eager'],
      },
      description: 'Loading behavior.',
    },
    title: {
      control: 'text',
      description: 'Tooltip text.',
    },
    caption: {
      control: 'text',
      description: 'Caption for the image.',
    },
    variant: {
      control: {
        type: 'select',
        options: ['thumbnail', 'avatar', 'expanded', 'flat'],
      },
      description: 'Variant of the image.',
    },
    aspectRatio: {
      control: {
        type: 'select',
        options: ['16by9', '4by3', '1by1'],
      },
      description: 'Aspect ratio of the image.',
    },
    crop: {
      control: {
        type: 'select',
        options: ['center', 'top', 'left'],
      },
      description: 'Crop position of the image.',
    },
    fallbackSrc: {
      control: 'text',
      description: 'Fallback image source if the main image fails to load.',
    },
    srcSet: {
      control: 'text',
      description: 'srcSet for responsive images.',
    },
    sizes: {
      control: 'text',
      description: 'Sizes attribute for responsive images.',
    },
    lazyLoad: {
      control: 'boolean',
      description: 'Enable lazy loading.',
    },
    onClickExpand: {
      action: 'clicked',
      description: 'Function to handle expand action.',
    },
    hoverIcons: {
      control: 'object',
      description: 'Icons to display on hover.',
    },
    hoverCaption: {
      control: 'text',
      description: 'Caption to display on hover.',
    },
    hoverIconPosition: {
      control: {
        type: 'select',
        options: ['center', 'top-right'],
      },
      description: 'Position of hover icons.',
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      description: 'Size of the image.',
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
 * Thumbnail Variant
 */
export const Thumbnail = () => (
  <Image
    src="https://via.placeholder.com/300x200"
    alt="Thumbnail Image"
    variant="thumbnail"
    caption="This is a thumbnail image."
    size="md"
  />
);

/**
 * Avatar Variant - 5 Sizes
 */
export const AvatarSizes = () => (
  <div className="avatar-sizes" style={{ display: 'flex', gap: '16px' }}>
    <Image
      src="https://via.placeholder.com/30"
      alt="Avatar XS"
      variant="avatar"
      size="xs"
      caption="XS Avatar"
    />
    <Image
      src="https://via.placeholder.com/50"
      alt="Avatar SM"
      variant="avatar"
      size="sm"
      caption="SM Avatar"
    />
    <Image
      src="https://via.placeholder.com/70"
      alt="Avatar MD"
      variant="avatar"
      size="md"
      caption="MD Avatar"
    />
    <Image
      src="https://via.placeholder.com/90"
      alt="Avatar LG"
      variant="avatar"
      size="lg"
      caption="LG Avatar"
    />
    <Image
      src="https://via.placeholder.com/110"
      alt="Avatar XL"
      variant="avatar"
      size="xl"
      caption="XL Avatar"
    />
  </div>
);

/**
 * Expanded Variant
 */
export const Expanded = () => (
  <Image
    src="https://via.placeholder.com/800x600"
    alt="Expanded Image"
    variant="expanded"
    caption="This is an expanded image."
    onClickExpand={() => console.log('Image expanded')}
  />
);

/**
 * Flat Variant
 */
export const Flat = () => (
  <Image
    src="https://via.placeholder.com/400x300"
    alt="Flat Image"
    variant="flat"
    caption="This is a flat image with no overlay."
  />
);

/**
 * Image with Aspect Ratio
 */
export const ImageWithAspectRatio = () => (
  <Image
    src="https://via.placeholder.com/400x300"
    alt="16 by 9 Image"
    variant="thumbnail"
    aspectRatio="16by9"
    caption="Image with 16:9 aspect ratio."
    size="lg"
  />
);

/**
 * Image with Crop
 */
export const ImageWithCrop = () => (
  <Image
    src="https://via.placeholder.com/400x300"
    alt="Cropped Image"
    variant="thumbnail"
    crop="top"
    caption="Image cropped from the top."
    size="md"
  />
);

/**
 * Image with Fallback
 */
export const ImageWithFallback = () => (
  <Image
    src="https://invalid-url.com/image.jpg"
    alt="Image with fallback"
    variant="thumbnail"
    fallbackSrc="https://via.placeholder.com/300x200?text=Fallback+Image"
    caption="This image failed to load and shows a fallback."
    size="md"
  />
);

/**
 * Responsive Image
 */
export const ResponsiveImage = () => (
  <Image
    src="https://via.placeholder.com/800x600"
    alt="Responsive Image"
    variant="thumbnail"
    srcSet="
      https://via.placeholder.com/400x300 400w,
      https://via.placeholder.com/800x600 800w,
      https://via.placeholder.com/1200x900 1200w
    "
    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
    caption="This image is responsive using srcSet and sizes."
    size="lg"
  />
);

/**
 * Click to Expand Image
 */
export const ClickToExpand = () => (
  <Image
    src="https://via.placeholder.com/600x400"
    alt="Clickable Image"
    variant="thumbnail"
    caption="Clicking this image will expand it."
    onClickExpand={() => alert('Image clicked to expand!')}
    size="md"
  />
);

/**
 * On Hover Show Icons at Center
 */
export const HoverIconsCenter = () => (
  <Image
    src="https://via.placeholder.com/300x200"
    alt="Hover Icons Center"
    variant="thumbnail"
    caption="Hover to see icons at center."
    hoverIcons={[FaHeart, FaShare]}
    hoverIconPosition="center"
    size="md"
  />
);

/**
 * On Hover Show Caption Overlay
 */
export const HoverCaptionOverlay = () => (
  <Image
    src="https://via.placeholder.com/300x200"
    alt="Hover Caption"
    variant="thumbnail"
    hoverCaption="This is an overlay caption."
    size="md"
  />
);

/**
 * On Hover Show Icons at Top Right
 */
export const HoverIconsTopRight = () => (
  <Image
    src="https://via.placeholder.com/300x200"
    alt="Hover Icons Top Right"
    variant="thumbnail"
    hoverIcons={[FaEdit, FaTrash]}
    hoverIconPosition="top-right"
    caption="Hover to see icons at top right."
    size="md"
  />
);

/**
 * Interactive Image
 */
const Template = (args) => <Image {...args} />;

export const InteractiveImage = Template.bind({});
InteractiveImage.args = {
  src: 'https://via.placeholder.com/500x300',
  alt: 'Interactive Image',
  variant: 'thumbnail',
  caption: 'This is an interactive image.',
  aspectRatio: '4by3',
  crop: 'center',
  hoverIcons: [FaSearch],
  hoverCaption: 'Search this image',
  hoverIconPosition: 'center',
  size: 'md',
};
