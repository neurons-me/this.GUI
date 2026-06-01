import assert from 'node:assert/strict';
import { markdownToGuiNodes } from '../src/gui/Molecules/Documents/MarkdownDocument/markdownToGuiNodes';
import { resolveMarkdownUrl } from '../src/gui/Molecules/Documents/MarkdownDocument/markdownPolicy';
import type { MarkdownRenderContext } from '../src/gui/Molecules/Documents/MarkdownDocument/MarkdownDocument.types';

const documentNodes = markdownToGuiNodes(
  [
    '# Title',
    '',
    'A paragraph with `inline` and [a link](guide.md).',
    '',
    '```bash',
    'npm install monad.ai',
    '```',
    '',
    '- one',
    '- two',
    '',
    '| Name | Value |',
    '| --- | ---: |',
    '| port | 8161 |',
  ].join('\n'),
  {
    baseUrl: 'docs/',
    documentBaseUrl: 'https://example.test/root/',
  }
);

const content = documentNodes[0] as any;
const blocks = content.children as any[];

assert.equal(content.type, 'Box');
assert.equal(blocks[0].type, 'Typography');
assert.equal(blocks[0].props.component, 'h1');
assert.equal(blocks[0].props.variant, 'h3');
assert.deepEqual(blocks[0].children, ['Title']);

assert.equal(blocks[1].type, 'Typography');
assert.equal(blocks[1].children[1].type, 'Box');
assert.equal(blocks[1].children[1].props.component, 'code');
assert.equal(blocks[1].children[3].type, 'Link');
assert.equal(blocks[1].children[3].props.href, 'https://example.test/root/docs/guide.md');

assert.equal(blocks[2].type, 'CodeBlock');
assert.equal(blocks[2].props.language, 'bash');
assert.match(blocks[2].props.code, /npm install/);

assert.equal(blocks[3].type, 'Box');
assert.equal(blocks[3].props.component, 'ul');
assert.equal(blocks[3].children.length, 2);

assert.equal(blocks[4].type, 'Box');
assert.equal(blocks[4].children.type, 'Table');

const context: MarkdownRenderContext = {
  baseUrl: 'modules/monad/npm/',
  documentBaseUrl: 'https://example.test/all.this/',
  depth: 0,
  keyPath: 'test',
  policy: {},
};

assert.equal(
  resolveMarkdownUrl('README.md', context),
  'https://example.test/all.this/modules/monad/npm/README.md'
);
assert.equal(resolveMarkdownUrl('https://example.test/x', context), 'https://example.test/x');

console.log('markdown-document-core ok');
