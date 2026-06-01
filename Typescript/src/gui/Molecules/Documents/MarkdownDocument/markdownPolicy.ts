import type {
  MarkdownHeadingRule,
  MarkdownPolicy,
  MarkdownRenderContext,
  MarkdownStyleMap,
} from './MarkdownDocument.types';

export const defaultHeadingRules: Record<1 | 2 | 3 | 4 | 5 | 6, MarkdownHeadingRule> = {
  1: { variant: 'h3', component: 'h1' },
  2: { variant: 'h4', component: 'h2' },
  3: { variant: 'h5', component: 'h3' },
  4: { variant: 'h6', component: 'h4' },
  5: { variant: 'subtitle1', component: 'h5' },
  6: { variant: 'subtitle2', component: 'h6' },
};

export const defaultMarkdownStyles: MarkdownStyleMap = {
  content: {
    display: 'grid',
    gap: 1.35,
    color: 'text.primary',
    '& > *:first-of-type': { mt: 0 },
    '& > *:last-child': { mb: 0 },
  },
  heading: {
    mt: 2.25,
    mb: 0.5,
    fontWeight: 760,
    lineHeight: 1.18,
    letterSpacing: 0,
  },
  paragraph: {
    my: 0,
    color: 'text.primary',
    lineHeight: 1.72,
  },
  link: {
    color: 'primary.main',
    textDecorationColor: 'currentColor',
    textUnderlineOffset: '0.16em',
  },
  inlineCode: {
    display: 'inline',
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: '0.88em',
    px: 0.55,
    py: 0.15,
    borderRadius: 0.75,
    bgcolor: 'action.hover',
    color: 'text.primary',
  },
  codeBlock: {
    my: 0.5,
  },
  list: {
    my: 0,
    pl: 3,
    color: 'text.primary',
    display: 'grid',
    gap: 0.55,
  },
  listItem: {
    pl: 0.35,
    lineHeight: 1.65,
  },
  blockquote: {
    my: 0.5,
    pl: 2,
    py: 0.5,
    borderLeft: '3px solid',
    borderColor: 'primary.main',
    color: 'text.secondary',
    bgcolor: 'action.hover',
  },
  tableWrap: {
    width: '100%',
    overflowX: 'auto',
    my: 0.75,
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 1,
  },
  table: {
    minWidth: 480,
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: 1,
    display: 'block',
  },
  thematicBreak: {
    my: 1,
  },
};

export const defaultMarkdownPolicy: MarkdownPolicy = {
  name: 'defaultMarkdownPolicy',
  headingRules: defaultHeadingRules,
  styles: defaultMarkdownStyles,
};

export function mergeMarkdownPolicy(
  policy?: MarkdownPolicy,
  components?: MarkdownPolicy
): MarkdownPolicy {
  const merged: MarkdownPolicy = {
    ...defaultMarkdownPolicy,
    ...(policy || {}),
    ...(components || {}),
    headingRules: {
      ...defaultHeadingRules,
      ...(policy?.headingRules || {}),
      ...(components?.headingRules || {}),
    },
    styles: {
      ...defaultMarkdownStyles,
      ...(policy?.styles || {}),
      ...(components?.styles || {}),
    },
  };

  if (components?.mapNode) merged.mapNode = components.mapNode;
  if (components?.mapInlineNode) merged.mapInlineNode = components.mapInlineNode;
  if (components?.resolveUrl) merged.resolveUrl = components.resolveUrl;

  return merged;
}

export function mergeSx(...parts: Array<Record<string, any> | undefined>) {
  return Object.assign({}, ...parts.filter(Boolean));
}

function isExternalUrl(url: string): boolean {
  return /^(?:[a-z][a-z0-9+.-]*:|#)/i.test(url);
}

function joinRelativePath(base: string, value: string): string {
  const normalizedBase = base.endsWith('/') ? base : base.replace(/[^/]*$/, '');
  return `${normalizedBase}${value}`.replace(/\/{2,}/g, '/');
}

export function resolveMarkdownUrl(url: string, context: MarkdownRenderContext): string {
  const raw = String(url || '').trim();
  if (!raw || isExternalUrl(raw)) return raw;

  if (context.policy.resolveUrl) {
    return context.policy.resolveUrl(raw, context);
  }

  const baseUrl = String(context.baseUrl || '').trim();
  if (!baseUrl) return raw;

  try {
    return new URL(raw, new URL(baseUrl, context.documentBaseUrl || 'http://localhost/')).href;
  } catch {
    return joinRelativePath(baseUrl, raw);
  }
}
