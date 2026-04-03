import type { RegistryEntry } from '@/Registry/types';
import type { HeroProps } from './Hero.types';

type HeroResolverSpec = {
  type: 'Hero';
  props?: HeroProps & Record<string, any>;
};

const HERO_META: RegistryEntry['meta'] = {
  id: 'patterns.hero',
  label: 'Hero',
  kind: 'pattern',
  group: 'Molecules',
  path: ['Patterns', 'Display'],
  tags: ['hero', 'pattern', 'layout', 'resolve->GuiNode'],
  demoSpec: {
    type: 'Hero',
    props: {
      mode: 'left',
      header: '.GUI Runtime',
      subheader: 'Hero',
      subheaderVariant: 'overline',
      typography: 'Runtime overview and quick links for the GUI toolchain.',
    },
  },
};

function normalizeNodeList(value: any): any[] {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (value == null || value === false) return [];
  return [value];
}

function resolveModeConfig(mode?: HeroProps['mode']) {
  switch (mode) {
    case 'left':
      return { justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' };
    case 'right':
      return { justifyContent: 'flex-end', alignItems: 'center', textAlign: 'right' };
    case 'top-left':
      return { justifyContent: 'flex-start', alignItems: 'flex-start', textAlign: 'left' };
    case 'top-center':
      return { justifyContent: 'center', alignItems: 'flex-start', textAlign: 'center' };
    case 'top-right':
      return { justifyContent: 'flex-end', alignItems: 'flex-start', textAlign: 'right' };
    case 'bottom-left':
      return { justifyContent: 'flex-start', alignItems: 'flex-end', textAlign: 'left' };
    case 'bottom-center':
      return { justifyContent: 'center', alignItems: 'flex-end', textAlign: 'center' };
    case 'bottom-right':
      return { justifyContent: 'flex-end', alignItems: 'flex-end', textAlign: 'right' };
    case 'center':
    default:
      return { justifyContent: 'center', alignItems: 'center', textAlign: 'center' };
  }
}

function resolveMediaFilter(blur?: HeroProps['blur']) {
  if (!blur || blur === 'none') return 'none';
  return blur === 'all' ? 'saturate(1.05) brightness(0.96)' : 'none';
}

function resolveOverlayColor(customColor?: string, overlayColor?: string) {
  return customColor || overlayColor || 'transparent';
}

function buildStructuredChildren(props: HeroProps & Record<string, any>, children: any[]) {
  const brand = props.brand;
  const header = props.header;
  const subheader = props.subheader;
  const typography = props.typography;
  const optionsChildren = normalizeNodeList(props.options);
  const subheaderVariant = props.subheaderVariant || 'subtitle1';
  const headerVariant = props.headerVariant || 'h2';
  const typographyVariant = props.typographyVariant || 'body1';
  const subheaderIsOverline = subheaderVariant === 'overline';

  const structuredChildren: any[] = [];

  if (brand?.src) {
    structuredChildren.push({
      type: 'Box',
      props: {
        component: 'img',
        src: brand.src,
        alt: brand.alt || 'Brand',
        'data-gui-component': 'HeroBrand',
        sx: {
          width: brand.width ?? 220,
          maxWidth: brand.maxWidth ?? '70vw',
          height: brand.height ?? 'auto',
          objectFit: brand.fit ?? 'contain',
          display: 'block',
          mb: 2,
          ...(brand.sx || {}),
        },
      },
    });
  }

  const subheaderNode = subheader
    ? {
        type: 'Typography',
        props: {
          variant: subheaderVariant,
          'data-gui-component': 'HeroSubheader',
          sx: subheaderIsOverline
            ? { mb: header ? 0.5 : 0 }
            : { mt: header ? 0.5 : 0 },
        },
        children: [subheader],
      }
    : null;

  if (subheaderIsOverline && subheaderNode) structuredChildren.push(subheaderNode);

  if (header) {
    structuredChildren.push({
      type: 'Typography',
      props: {
        variant: headerVariant,
        'data-gui-component': 'HeroHeader',
        sx: { fontWeight: 800, letterSpacing: '-0.3px' },
      },
      children: [header],
    });
  }

  if (!subheaderIsOverline && subheaderNode) structuredChildren.push(subheaderNode);

  if (typography) {
    structuredChildren.push({
      type: 'Typography',
      props: {
        variant: typographyVariant,
        'data-gui-component': 'HeroBody',
        sx: { mt: subheader || header ? 0.75 : 0 },
      },
      children: [typography],
    });
  }

  if (optionsChildren.length) {
    structuredChildren.push({
      type: 'Box',
      props: {
        'data-gui-component': 'HeroOptions',
        sx: {
          mt: 1.5,
          display: 'flex',
          flexDirection: props.optionsDirection || 'row',
          gap: props.optionsGap ?? 1.5,
          justifyContent: props.optionsJustify || 'flex-start',
          flexWrap: 'wrap',
        },
      },
      children: optionsChildren,
    });
  }

  return [...structuredChildren, ...children];
}

const HeroResolver: RegistryEntry = {
  type: 'Hero',
  meta: HERO_META,
  resolve(spec: HeroResolverSpec) {
    const props = spec.props ?? {};
    const {
      backgroundSrc,
      backgroundType = 'image',
      backgroundColor,
      overlayColor,
      children,
      height = '100vh',
      padding = 4,
      blur,
      customColor,
      brand,
      header,
      subheader,
      typography,
      options,
      mode = 'center',
      contentMaxWidth = 640,
      contentPaddingY,
      contentPaddingTop,
      contentPaddingBottom,
      headerVariant,
      subheaderVariant,
      typographyVariant,
      optionsDirection,
      optionsGap,
      optionsJustify,
      layout = 'flow',
      sx,
      ...rest
    } = props;

    const contentChildren = normalizeNodeList(children);
    const hasStructuredContent = Boolean(brand || header || subheader || typography || options);
    const modeConfig = resolveModeConfig(mode);
    const isFixedLayout = layout === 'fixed';
    const mediaFilter = resolveMediaFilter(blur);
    const overlayBg = resolveOverlayColor(customColor, overlayColor);

    return {
      type: 'Box',
      props: {
        component: 'section',
        'data-gui-component': 'Hero',
        ...rest,
        sx: {
          position: isFixedLayout ? 'fixed' : 'relative',
          top: isFixedLayout ? 0 : 'auto',
          left: isFixedLayout ? 0 : 'auto',
          width: isFixedLayout ? '100vw' : '100%',
          height: isFixedLayout ? height : 'auto',
          minHeight: !isFixedLayout ? height : undefined,
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          display: 'flex',
          alignItems: modeConfig.alignItems,
          justifyContent: modeConfig.justifyContent,
          boxSizing: 'border-box',
          zIndex: 0,
          backgroundColor:
            backgroundType === 'color' ? (backgroundColor || 'transparent') : 'transparent',
          ...(sx || {}),
        },
      },
      children: [
        backgroundType === 'color' || !backgroundSrc
          ? null
          : {
              type: 'Box',
              props: {
                component: backgroundType === 'video' ? 'video' : 'img',
                src: backgroundSrc,
                alt: backgroundType === 'video' ? undefined : '',
                autoPlay: backgroundType === 'video' ? true : undefined,
                muted: backgroundType === 'video' ? true : undefined,
                loop: backgroundType === 'video' ? true : undefined,
                playsInline: backgroundType === 'video' ? true : undefined,
                'data-gui-component': 'HeroMedia',
                sx: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 0,
                  filter: mediaFilter,
                  willChange: 'transform, filter',
                  transform: 'translateZ(0)',
                },
              },
            },
        backgroundType === 'color' || !backgroundSrc
          ? null
          : {
              type: 'Box',
              props: {
                'data-gui-component': 'HeroOverlay',
                sx: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: overlayBg,
                  zIndex: 2,
                  transition: 'opacity 0.4s ease',
                },
              },
            },
        {
          type: 'Box',
          props: {
            'data-gui-component': 'HeroContent',
            sx: {
              position: 'relative',
              zIndex: 3,
              textAlign: modeConfig.textAlign,
              color: 'text.primary',
              px: padding,
              pt: contentPaddingTop ?? contentPaddingY ?? 0,
              pb: contentPaddingBottom ?? contentPaddingY ?? 0,
              maxWidth: contentMaxWidth,
            },
          },
          children: hasStructuredContent
            ? buildStructuredChildren(
                {
                  ...props,
                  headerVariant,
                  subheaderVariant,
                  typographyVariant,
                  optionsDirection,
                  optionsGap,
                  optionsJustify,
                },
                contentChildren
              )
            : contentChildren,
        },
      ].filter(Boolean),
    };
  },
};

export default HeroResolver;
