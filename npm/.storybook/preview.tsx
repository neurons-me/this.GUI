// .storybook/preview.tsx
import React from 'react'
import 'material-symbols/rounded.css';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { MemoryRouter } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { Theme } from '../src/gui/Theme/Theme';
import CodeBlock from '../src/gui/molecules/CodeBlock/CodeBlock';
import Typography from '../src/gui/atoms/Typography/Typography';
import Link from '../src/gui/atoms/Link/Link';
import Box from '../src/gui/atoms/Box/Box';

const routerFuture = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
} as const;

const mdxComponents = {
  h1: (props: any) => <Typography variant="h3" sx={{ mt: 3, mb: 1.5, color: 'text.primary' }} {...props} />,
  h2: (props: any) => <Typography variant="h4" sx={{ mt: 3, mb: 1.5, color: 'text.primary' }} {...props} />,
  h3: (props: any) => <Typography variant="h5" sx={{ mt: 2.5, mb: 1.25, color: 'text.primary' }} {...props} />,
  h4: (props: any) => <Typography variant="h6" sx={{ mt: 2, mb: 1, color: 'text.primary' }} {...props} />,
  h5: (props: any) => <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.75, color: 'text.primary' }} {...props} />,
  h6: (props: any) => <Typography variant="subtitle2" sx={{ mt: 2, mb: 0.5, color: 'text.primary' }} {...props} />,
  p: (props: any) => <Typography variant="body1" sx={{ mb: 1.5, color: 'text.primary' }} {...props} />,
  a: (props: any) => <Link {...props} />,
  ul: (props: any) => <Box component="ul" sx={{ pl: 3, mb: 2, color: 'text.primary' }} {...props} />,
  ol: (props: any) => <Box component="ol" sx={{ pl: 3, mb: 2, color: 'text.primary' }} {...props} />,
  li: (props: any) => (
    <Box component="li" sx={{ mb: 0.5, color: 'text.primary' }}>
      <Typography variant="body1" sx={{ color: 'text.primary' }} {...props} />
    </Box>
  ),
  code: (props: any) => (
    <Box
      component="code"
      sx={{
        fontFamily: 'monospace',
        fontSize: '0.9em',
        color: 'text.primary',
        backgroundColor: 'rgba(255,255,255,0.08)',
        padding: '2px 6px',
        borderRadius: 6,
      }}
      {...props}
    />
  ),
  pre: (props: any) => {
    const child = props?.children;
    const codeNode = Array.isArray(child) ? child[0] : child;
    const rawCode =
      codeNode && typeof codeNode === 'object'
        ? codeNode.props?.children
        : codeNode ?? '';
    const code = Array.isArray(rawCode) ? rawCode.join('') : String(rawCode ?? '');
    const language =
      (codeNode && codeNode.props?.className?.replace('language-', '')) ||
      props?.className?.replace('language-', '') ||
      'text';
    return (
      <CodeBlock
        language={language}
        title={language !== 'text' ? language.toUpperCase() : 'TEXT'}
        code={code.trimEnd()}
      />
    );
  },
};
export const decorators = [
  (Story: React.FC) => (
    <Theme initialThemeId="neurons.me" initialMode="light">
      <MemoryRouter initialEntries={['/']} future={routerFuture}>
        <MDXProvider components={mdxComponents}>
          <Story />
        </MDXProvider>
      </MemoryRouter>
    </Theme>
  ),
];

export const parameters = {
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  backgrounds: { disable: true },
  docs: {
    page: null,
    container: ({ children, context }: any) => (
      <Theme initialThemeId="neurons.me" initialMode="light">
        <div
          style={{
            minHeight: '100vh',
            background: 'var(--mui-palette-background-default, #0f1115)',
            color: 'var(--mui-palette-text-primary, #e6e6e6)',
            fontFamily: 'var(--mui-typography-fontFamily, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif)',
          }}
        >
          <MDXProvider components={mdxComponents}>
            <DocsContainer context={context}>{children}</DocsContainer>
          </MDXProvider>
        </div>
      </Theme>
    ),
  },
  // Sidebar ordering
  options: {
    storySort: {
      order: [
        'Docs',
        'Getting Started',
        ['Quick Start', 'GUI Overview', 'Using This Docs'],
        'Router',
        ['Router', 'Examples & Recipes'],
        'Users',
        ['Users', '.me', ['cleaker', 'monad.ai']],
        'gui',
        'Layout',
        'Theme',
        'atoms',
        'molecules',
        'components',
      ],
    },
  },

  a11y: {
    // 'todo' - show a11y violations in the test UI only
    // 'error' - fail CI on a11y violations
    // 'off' - skip a11y checks entirely
    test: 'todo'
  }
};
