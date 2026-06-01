import type { GuiNode } from '../../../../types/gui.types';

export type MarkdownMoleculeKind = 'resolver' | 'shell' | 'component';

export type MarkdownAstNode = {
  type: string;
  value?: string;
  children?: MarkdownAstNode[];
  depth?: number;
  url?: string;
  alt?: string;
  title?: string;
  lang?: string;
  meta?: string;
  ordered?: boolean;
  start?: number;
  checked?: boolean | null;
  align?: Array<'left' | 'right' | 'center' | null>;
  [key: string]: any;
};

export type MarkdownRenderContext = {
  baseUrl?: string;
  documentBaseUrl?: string;
  depth: number;
  keyPath: string;
  policy: MarkdownPolicy;
};

export type MarkdownNext = (
  node: MarkdownAstNode,
  context: MarkdownRenderContext
) => GuiNode | GuiNode[] | null;

export type MarkdownNodeMapper = (
  node: MarkdownAstNode,
  context: MarkdownRenderContext,
  next: MarkdownNext
) => GuiNode | GuiNode[] | null | undefined;

export type MarkdownInlineMapper = MarkdownNodeMapper;

export type MarkdownHeadingRule = {
  variant: string;
  component: string;
};

export type MarkdownStyleSlot =
  | 'root'
  | 'content'
  | 'heading'
  | 'paragraph'
  | 'link'
  | 'inlineCode'
  | 'codeBlock'
  | 'list'
  | 'listItem'
  | 'blockquote'
  | 'tableWrap'
  | 'table'
  | 'image'
  | 'thematicBreak';

export type MarkdownStyleMap = Partial<Record<MarkdownStyleSlot, Record<string, any>>>;

export type MarkdownPolicy = {
  name?: string;
  headingRules?: Partial<Record<1 | 2 | 3 | 4 | 5 | 6, MarkdownHeadingRule>>;
  styles?: MarkdownStyleMap;
  mapNode?: MarkdownNodeMapper;
  mapInlineNode?: MarkdownInlineMapper;
  resolveUrl?: (url: string, context: MarkdownRenderContext) => string;
};

export type MarkdownDocumentProps = {
  src?: string;
  source?: string;
  baseUrl?: string;
  documentBaseUrl?: string;
  title?: string;
  subtitle?: string;
  maxWidth?: number | string;
  policy?: MarkdownPolicy;
  components?: MarkdownPolicy;
  loadingLabel?: string;
  errorTitle?: string;
  className?: string;
  sx?: Record<string, any>;
  contentSx?: Record<string, any>;
  showUnknown?: boolean;
  id?: string;
  'data-testid'?: string;
};

export type MarkdownToGuiNodesOptions = {
  baseUrl?: string;
  documentBaseUrl?: string;
  policy?: MarkdownPolicy;
};
