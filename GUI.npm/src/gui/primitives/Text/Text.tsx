
import * as React from 'react';
import { useGuiTheme, resolveColorToken } from '@/gui';

export type GuiTextProps = {
  as?: 'span' | 'p' | 'strong' | 'em' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'body' | 'caption' | 'label' | 'title' | 'subtitle' | 'overline';
  size?: 'sm' | 'md' | 'lg';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  color?: string;
  noWrap?: boolean;
  gutterBottom?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const pxToRem = (n: number): string => `${n / 16}rem`;

function computeFontSize(variant: GuiTextProps['variant']): number {
  switch (variant) {
    case 'title': return 21;
    case 'subtitle': return 16;
    case 'caption': return 14;
    case 'label': return 14;
    case 'overline': return 12;
    case 'body':
    default: return 16;
  }
}

function applySizeStep(px: number, size: GuiTextProps['size']): number {
  if (size === 'sm') return px - 2;
  if (size === 'lg') return px + 2;
  return px;
}

function weightToNumber(weight: GuiTextProps['weight']): number {
  switch (weight) {
    case 'medium': return 500;
    case 'semibold': return 600;
    case 'bold': return 700;
    case 'regular':
    default: return 400;
  }
}

export default function Text({
  as: Component = 'span',
  variant = 'body',
  size = 'md',
  weight = 'regular',
  align = 'left',
  color = 'text.primary',
  noWrap = false,
  gutterBottom = false,
  className,
  style,
  children,
}: GuiTextProps) {
  const theme = useGuiTheme();
  const basePx = computeFontSize(variant);
  const fontSize = applySizeStep(basePx, size);
  const resolvedColor = resolveColorToken(theme, color);

  const styles: React.CSSProperties = {
    margin: 0,
    fontSize: pxToRem(fontSize),
    fontWeight: weightToNumber(weight),
    textAlign: align,
    color: resolvedColor,
    whiteSpace: noWrap ? 'nowrap' : undefined,
    overflow: noWrap ? 'hidden' : undefined,
    textOverflow: noWrap ? 'ellipsis' : undefined,
    marginBottom: gutterBottom ? theme.spacing(1) : undefined,
    ...style,
  };

  return (
    <Component className={className} style={styles}>
      {children}
    </Component>
  );
}
