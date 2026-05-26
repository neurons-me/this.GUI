import * as React from 'react';
import Box from '@/gui/Atoms/Box/Box';
import Button from '@/gui/Atoms/Button/Button';
import Divider from '@/gui/Atoms/Divider/Divider';
import Link from '@/gui/Atoms/Link/Link';
import Paper from '@/gui/Atoms/Paper/Paper';
import Progress from '@/gui/Atoms/Progress/Progress';
import Typography from '@/gui/Atoms/Typography/Typography';
import CodeBlock from '@/gui/Molecules/CodeBlock/CodeBlock';
import Table from '@/gui/Molecules/Table/Table';
import TableBody from '@/gui/Molecules/Table/Body/TableBody';
import TableCell from '@/gui/Molecules/Table/Cell/TableCell';
import TableHead from '@/gui/Molecules/Table/Head/TableHead';
import TableRow from '@/gui/Molecules/Table/Row/TableRow';
import { renderWithGUI } from '@/runtime/renderer';
import { useRuntimeEnvironment } from '@/runtime/runtimeContext';
import type { GuiNode } from '../../../../types/gui.types';
import type { MarkdownDocumentProps } from './MarkdownDocument.types';
import { markdownToGuiNodes } from './markdownToGuiNodes';
import { mergeMarkdownPolicy } from './markdownPolicy';

type LoadState =
  | { status: 'idle'; source: string; error: '' }
  | { status: 'loading'; source: string; error: '' }
  | { status: 'ready'; source: string; error: '' }
  | { status: 'error'; source: string; error: string };

const fallbackGui = {
  Box,
  Button,
  CodeBlock,
  Divider,
  Link,
  Paper,
  Progress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
};

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error ?? 'Unknown error');
}

function dirname(path: string): string {
  const value = String(path || '').trim();
  if (!value || value.endsWith('/')) return value;
  const index = value.lastIndexOf('/');
  return index >= 0 ? value.slice(0, index + 1) : '';
}

function resolveDocumentBaseUrl(explicit?: string): string | undefined {
  if (explicit) return explicit;
  if (typeof document !== 'undefined') return document.baseURI;
  return undefined;
}

export default function MarkdownDocument({
  src,
  source,
  baseUrl,
  documentBaseUrl,
  title,
  subtitle,
  maxWidth = 880,
  policy,
  components,
  loadingLabel = 'Loading document',
  errorTitle = 'Document unavailable',
  className,
  sx,
  contentSx,
  showUnknown,
  id,
  'data-testid': dataTestId,
}: MarkdownDocumentProps) {
  const runtimeEnvironment = useRuntimeEnvironment();
  const [loadState, setLoadState] = React.useState<LoadState>({
    status: source != null ? 'ready' : src ? 'loading' : 'idle',
    source: source || '',
    error: '',
  });

  React.useEffect(() => {
    if (source != null) {
      setLoadState({ status: 'ready', source, error: '' });
      return;
    }

    if (!src) {
      setLoadState({ status: 'idle', source: '', error: '' });
      return;
    }

    const controller = new AbortController();
    setLoadState({ status: 'loading', source: '', error: '' });

    fetch(src, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${src}: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        setLoadState({ status: 'ready', source: text, error: '' });
      })
      .catch((error) => {
        if (controller.signal.aborted) return;
        setLoadState({ status: 'error', source: '', error: errorMessage(error) });
      });

    return () => controller.abort();
  }, [src, source]);

  const resolvedPolicy = React.useMemo(
    () => mergeMarkdownPolicy(policy, components),
    [policy, components]
  );
  const resolvedBaseUrl = baseUrl ?? dirname(src || '');
  const resolvedDocumentBaseUrl = resolveDocumentBaseUrl(documentBaseUrl);
  const guiSurface = React.useMemo(
    () => ({
      ...fallbackGui,
      ...(runtimeEnvironment.gui || {}),
    }),
    [runtimeEnvironment.gui]
  );

  const contentNodes = React.useMemo<GuiNode[]>(() => {
    if (loadState.status !== 'ready') return [];
    return markdownToGuiNodes(loadState.source, {
      baseUrl: resolvedBaseUrl,
      documentBaseUrl: resolvedDocumentBaseUrl,
      policy: {
        ...resolvedPolicy,
        styles: {
          ...(resolvedPolicy.styles || {}),
          content: {
            ...(resolvedPolicy.styles?.content || {}),
            ...(contentSx || {}),
          },
        },
      },
    });
  }, [loadState, resolvedBaseUrl, resolvedDocumentBaseUrl, resolvedPolicy, contentSx]);

  const renderedContent = React.useMemo(() => {
    if (!contentNodes.length) return null;
    return renderWithGUI(contentNodes, guiSurface, {
      React,
      runtime: runtimeEnvironment.runtime,
      ctx: runtimeEnvironment.ctx,
      showUnknown,
    });
  }, [contentNodes, guiSurface, runtimeEnvironment.runtime, runtimeEnvironment.ctx, showUnknown]);

  return (
    <Box
      id={id}
      className={className}
      data-testid={dataTestId}
      data-gui-component="MarkdownDocument"
      sx={{
        width: '100%',
        maxWidth,
        mx: 'auto',
        display: 'grid',
        gap: 1.5,
        boxSizing: 'border-box',
        ...sx,
      }}
    >
      {title || subtitle ? (
        <Box sx={{ display: 'grid', gap: 0.5, mb: 0.5 }}>
          {title ? (
            <Typography variant="h4" component="h1" sx={{ fontWeight: 780, lineHeight: 1.15 }}>
              {title}
            </Typography>
          ) : null}
          {subtitle ? (
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
              {subtitle}
            </Typography>
          ) : null}
        </Box>
      ) : null}

      {loadState.status === 'loading' ? (
        <Paper variant="outlined" sx={{ p: 2, display: 'grid', gap: 1 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {loadingLabel}
          </Typography>
          <Progress />
        </Paper>
      ) : null}

      {loadState.status === 'error' ? (
        <Paper variant="outlined" sx={{ p: 2, display: 'grid', gap: 1.25 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {errorTitle}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
            {loadState.error}
          </Typography>
          {src ? (
            <Button component="a" href={src} variant="outlined" size="small">
              Open raw document
            </Button>
          ) : null}
        </Paper>
      ) : null}

      {loadState.status === 'idle' ? (
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            No markdown source provided.
          </Typography>
        </Paper>
      ) : null}

      {renderedContent}
    </Box>
  );
}
