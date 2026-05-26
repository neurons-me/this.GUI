import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import type { GuiNode, GuiSpecNode } from '../../../../types/gui.types';
import type {
  MarkdownAstNode,
  MarkdownRenderContext,
  MarkdownToGuiNodesOptions,
} from './MarkdownDocument.types';
import {
  defaultHeadingRules,
  mergeMarkdownPolicy,
  mergeSx,
  resolveMarkdownUrl,
} from './markdownPolicy';

function guiNode(type: string, props: Record<string, any> = {}, children?: GuiNode | GuiNode[]): GuiSpecNode {
  const node: GuiSpecNode = { type, props };
  if (children !== undefined) node.children = children;
  return node;
}

function childrenOf(node: MarkdownAstNode): MarkdownAstNode[] {
  return Array.isArray(node.children) ? node.children : [];
}

function compact(nodes: Array<GuiNode | GuiNode[] | null | undefined>): GuiNode[] {
  const out: GuiNode[] = [];
  for (const node of nodes) {
    if (node == null || node === false) continue;
    if (Array.isArray(node)) {
      out.push(...compact(node as Array<GuiNode | GuiNode[] | null | undefined>));
      continue;
    }
    out.push(node);
  }
  return out;
}

function textOf(node: MarkdownAstNode): string {
  if (typeof node.value === 'string') return node.value;
  return childrenOf(node).map(textOf).join('');
}

function nextContext(context: MarkdownRenderContext, segment: string): MarkdownRenderContext {
  return {
    ...context,
    depth: context.depth + 1,
    keyPath: `${context.keyPath}.${segment}`,
  };
}

function renderInlineChildren(node: MarkdownAstNode, context: MarkdownRenderContext): GuiNode[] {
  return compact(
    childrenOf(node).map((child, index) =>
      renderInlineNode(child, nextContext(context, `i${index}`))
    )
  );
}

function renderBlockChildren(node: MarkdownAstNode, context: MarkdownRenderContext): GuiNode[] {
  return compact(
    childrenOf(node).map((child, index) =>
      renderBlockNode(child, nextContext(context, `b${index}`))
    )
  );
}

function readHtmlAttr(attrs: string, name: string): string {
  const m = attrs.match(new RegExp(`${name}=["']([^"']+)["']`, 'i'));
  return m?.[1] || '';
}

function renderHtmlPicture(value: string, context: MarkdownRenderContext): GuiNode | null {
  if (!/<picture[\s>]/i.test(value)) return null;
  const sourcePattern = /<source\b([^>]*)>/gi;
  const sources: GuiNode[] = [];
  let sourceMatch: RegExpExecArray | null;
  while ((sourceMatch = sourcePattern.exec(value)) !== null) {
    const sa = sourceMatch[1] || '';
    const srcset = readHtmlAttr(sa, 'srcset');
    if (srcset) {
      sources.push(guiNode('Box', {
        component: 'source',
        srcSet: srcset,
        media: readHtmlAttr(sa, 'media') || undefined,
      }));
    }
  }
  const imgMatch = value.match(/<img\b([^>]*)>/i);
  if (!imgMatch) return null;
  const ia = imgMatch[1] || '';
  const src = readHtmlAttr(ia, 'src');
  if (!src) return null;
  const width = readHtmlAttr(ia, 'width');
  const height = readHtmlAttr(ia, 'height');
  return guiNode('Box', { component: 'picture' }, [
    ...sources,
    guiNode('Box', {
      component: 'img',
      src: resolveMarkdownUrl(src, context),
      alt: readHtmlAttr(ia, 'alt'),
      sx: {
        ...context.policy.styles?.image,
        ...(width ? { width: /^\d+$/.test(width) ? `${width}px` : width } : {}),
        ...(height ? { height: /^\d+$/.test(height) ? `${height}px` : height } : {}),
      },
    }),
  ]);
}

function renderHtmlImage(value: string, context: MarkdownRenderContext): GuiNode | null {
  const imgMatch = value.match(/<img\b([^>]*)>/i);
  if (!imgMatch) return null;
  const attrs = imgMatch[1] || '';
  const src = readHtmlAttr(attrs, 'src');
  if (!src) return null;
  const width = readHtmlAttr(attrs, 'width');
  const height = readHtmlAttr(attrs, 'height');
  return guiNode('Box', {
    component: 'img',
    src: resolveMarkdownUrl(src, context),
    alt: readHtmlAttr(attrs, 'alt'),
    sx: {
      ...context.policy.styles?.image,
      ...(width ? { width: /^\d+$/.test(width) ? `${width}px` : width } : {}),
      ...(height ? { height: /^\d+$/.test(height) ? `${height}px` : height } : {}),
    },
  });
}

function renderInlineNode(node: MarkdownAstNode, context: MarkdownRenderContext): GuiNode | GuiNode[] | null {
  const overridden = context.policy.mapInlineNode?.(node, context, renderInlineNode);
  if (overridden !== undefined) return overridden;

  switch (node.type) {
    case 'text':
      return node.value || '';
    case 'inlineCode':
      return guiNode(
        'Box',
        {
          component: 'code',
          sx: context.policy.styles?.inlineCode,
        },
        node.value || ''
      );
    case 'emphasis':
      return guiNode('Box', { component: 'em', sx: { fontStyle: 'italic' } }, renderInlineChildren(node, context));
    case 'strong':
      return guiNode('Box', { component: 'strong', sx: { fontWeight: 700 } }, renderInlineChildren(node, context));
    case 'delete':
      return guiNode(
        'Box',
        { component: 'span', sx: { textDecoration: 'line-through' } },
        renderInlineChildren(node, context)
      );
    case 'break':
      return '\n';
    case 'link':
      return guiNode(
        'Link',
        {
          href: resolveMarkdownUrl(node.url || '', context),
          title: node.title,
          sx: context.policy.styles?.link,
        },
        renderInlineChildren(node, context)
      );
    case 'image':
      return guiNode('Box', {
        component: 'img',
        src: resolveMarkdownUrl(node.url || '', context),
        alt: node.alt || '',
        title: node.title,
        sx: context.policy.styles?.image,
      });
    case 'html': {
      const htmlVal = String(node.value || '');
      if (htmlVal.toLowerCase() === '<br>') return '\n';
      return renderHtmlPicture(htmlVal, context) ?? renderHtmlImage(htmlVal, context);
    }
    default:
      return renderInlineChildren(node, context);
  }
}

function renderListItem(node: MarkdownAstNode, context: MarkdownRenderContext): GuiNode {
  const rendered = renderBlockChildren(node, context);
  const first = rendered[0] as GuiSpecNode | undefined;
  const isParagraphOnly =
    rendered.length === 1 &&
    first &&
    typeof first === 'object' &&
    !Array.isArray(first) &&
    first.type === 'Typography';
  const children = isParagraphOnly ? first.children : rendered;
  const prefix =
    typeof node.checked === 'boolean'
      ? node.checked
        ? '[x] '
        : '[ ] '
      : '';

  return guiNode(
    'Box',
    {
      component: 'li',
      sx: context.policy.styles?.listItem,
    },
    prefix ? [prefix, ...(Array.isArray(children) ? children : [children])] : children
  );
}

function renderTable(node: MarkdownAstNode, context: MarkdownRenderContext): GuiNode {
  const rows = childrenOf(node);
  const align = Array.isArray(node.align) ? node.align : [];
  const renderRow = (row: MarkdownAstNode, rowIndex: number) =>
    guiNode(
      'TableRow',
      {},
      childrenOf(row).map((cell, cellIndex) =>
        guiNode(
          'TableCell',
          {
            component: rowIndex === 0 ? 'th' : undefined,
            align: align[cellIndex] || undefined,
            sx: rowIndex === 0 ? { fontWeight: 700 } : undefined,
          },
          renderInlineChildren(cell, nextContext(context, `table${rowIndex}.${cellIndex}`))
        )
      )
    );

  return guiNode(
    'Box',
    { sx: context.policy.styles?.tableWrap },
    guiNode('Table', { size: 'small', sx: context.policy.styles?.table }, [
      rows[0] ? guiNode('TableHead', {}, renderRow(rows[0], 0)) : null,
      rows.length > 1 ? guiNode('TableBody', {}, rows.slice(1).map((row, index) => renderRow(row, index + 1))) : null,
    ].filter(Boolean) as GuiNode[])
  );
}

function renderBlockNode(node: MarkdownAstNode, context: MarkdownRenderContext): GuiNode | GuiNode[] | null {
  const overridden = context.policy.mapNode?.(node, context, renderBlockNode);
  if (overridden !== undefined) return overridden;

  switch (node.type) {
    case 'root':
      return renderBlockChildren(node, context);
    case 'heading': {
      const depth = Math.min(6, Math.max(1, Number(node.depth) || 1)) as 1 | 2 | 3 | 4 | 5 | 6;
      const rule = context.policy.headingRules?.[depth] || defaultHeadingRules[depth];
      return guiNode(
        'Typography',
        {
          variant: rule.variant,
          component: rule.component,
          sx: context.policy.styles?.heading,
        },
        renderInlineChildren(node, context)
      );
    }
    case 'paragraph':
      return guiNode(
        'Typography',
        {
          component: 'p',
          variant: 'body1',
          sx: context.policy.styles?.paragraph,
        },
        renderInlineChildren(node, context)
      );
    case 'code':
      return guiNode('CodeBlock', {
        code: node.value || '',
        language: node.lang || 'text',
        title: node.lang ? String(node.lang).toUpperCase() : undefined,
        sx: context.policy.styles?.codeBlock,
      });
    case 'list':
      return guiNode(
        'Box',
        {
          component: node.ordered ? 'ol' : 'ul',
          start: node.ordered && node.start ? node.start : undefined,
          sx: context.policy.styles?.list,
        },
        childrenOf(node).map((child, index) => renderListItem(child, nextContext(context, `li${index}`)))
      );
    case 'blockquote':
      return guiNode(
        'Box',
        { component: 'blockquote', sx: context.policy.styles?.blockquote },
        renderBlockChildren(node, context)
      );
    case 'table':
      return renderTable(node, context);
    case 'thematicBreak':
      return guiNode('Divider', { sx: context.policy.styles?.thematicBreak });
    case 'html': {
      const htmlVal = String(node.value || '');
      return renderHtmlPicture(htmlVal, context) ?? renderHtmlImage(htmlVal, context);
    }
    case 'image':
      return renderInlineNode(node, context);
    default:
      return renderBlockChildren(node, context);
  }
}

export function parseMarkdown(source: string): MarkdownAstNode {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .parse(String(source || '')) as MarkdownAstNode;
}

export function markdownToGuiNodes(
  source: string,
  options: MarkdownToGuiNodesOptions = {}
): GuiNode[] {
  const policy = mergeMarkdownPolicy(options.policy);
  const root = parseMarkdown(source);
  const context: MarkdownRenderContext = {
    baseUrl: options.baseUrl,
    documentBaseUrl: options.documentBaseUrl,
    depth: 0,
    keyPath: 'markdown',
    policy,
  };

  return compact([
    guiNode(
      'Box',
      {
        'data-gui-component': 'MarkdownDocument.Content',
        sx: mergeSx(policy.styles?.content),
      },
      renderBlockChildren(root, context)
    ),
  ]);
}
