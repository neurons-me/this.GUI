import * as React from 'react';
import type { RegistryEntry, RegistryMeta, ResolveCtx } from '@/Registry/types';
import MarkdownDocument from './MarkdownDocument';
import type { MarkdownDocumentProps } from './MarkdownDocument.types';

export type MarkdownDocumentSpec = {
  type: 'MarkdownDocument';
  props?: MarkdownDocumentProps & Record<string, any>;
};

export const meta: RegistryMeta = {
  id: 'molecules.documents.markdown-document',
  type: 'MarkdownDocument',
  label: 'Markdown Document',
  group: 'Molecules/Documents',
  kind: 'molecule',
  moleculeKind: 'shell',
  path: ['Documents'],
  tags: ['markdown', 'document', 'readme', 'docs'],
  demoSpec: {
    type: 'MarkdownDocument',
    props: {
      source: '# MarkdownDocument\n\nRender markdown as GUI.',
    },
  },
};

const MarkdownDocumentRegistration: RegistryEntry = {
  type: 'MarkdownDocument',
  meta,
  resolve(spec: MarkdownDocumentSpec, _ctx?: ResolveCtx) {
    return <MarkdownDocument {...(spec.props || {})} />;
  },
};

export default MarkdownDocumentRegistration;
