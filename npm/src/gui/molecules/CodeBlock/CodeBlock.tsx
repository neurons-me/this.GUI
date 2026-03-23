import React, { useMemo, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useGuiTheme } from '@/gui/hooks';
export type CodeBlockVariant = 'dark' | 'light';
export type CodeBlockProps = {
  /** Code string to render */
  code: string;
  /** Language id (e.g., "ts", "tsx", "js", "json", "bash", "html") */
  language?: string;
  /** Theme variant */
  variant?: CodeBlockVariant;
  /** Optional label above the block (e.g., filename) */
  title?: string;
  /** Show line numbers */
  showLineNumbers?: boolean;
  /** Wrap long lines */
  wrapLongLines?: boolean;
  /** Show a copy-to-clipboard button (default: true) */
  showCopyButton?: boolean;
  /** Extra class name for outer wrapper */
  className?: string;
  /** Optional inline style for outer wrapper */
  style?: React.CSSProperties;
  /** Optional max height for the scrollable code area */
  maxHeight?: number | string;
};

/**
 * CodeBlock
 * ---------
 * Blog-style code block with syntax highlighting.
 * Uses `react-syntax-highlighter` (Prism) under the hood.
 */
export default function CodeBlock(props: CodeBlockProps) {
  const {
    code,
    language = 'tsx',
    variant,
    title,
    showLineNumbers = false,
    wrapLongLines = true,
    showCopyButton = true,
    className,
    style,
    maxHeight,
  } = props;
  const guiTheme = useGuiTheme();
  const resolvedVariant: CodeBlockVariant =
    variant ?? (guiTheme.palette.mode === 'dark' ? 'dark' : 'light');
  const theme = resolvedVariant === 'light' ? oneLight : oneDark;
  const isLight = resolvedVariant === 'light';

  const [copied, setCopied] = useState(false);

  const headerText = useMemo(() => {
    if (!showCopyButton) return title;
    // If copy is enabled but no title, still render a minimal header row.
    return title || '';
  }, [showCopyButton, title]);

  const canUseClipboard = typeof navigator !== 'undefined' && !!navigator.clipboard;

  const handleCopy = async () => {
    try {
      const text = String(code ?? '');
      if (canUseClipboard) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older environments
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        ta.style.top = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // no-op
    }
  };

  return (
    <div
      className={className}
      style={{
        width: '100%',
        boxSizing: 'border-box',
        borderRadius: 14,
        overflow: 'hidden',
        border:
          isLight
            ? '1px solid rgba(0,0,0,0.10)'
            : '1px solid rgba(255,255,255,0.10)',
        background:
          isLight ? 'rgba(255,255,255,0.95)' : 'rgba(10, 14, 22, 0.92)',
        color: isLight ? 'rgba(15,23,42,0.92)' : 'rgba(241,245,249,0.96)',
        ...style,
      }}
    >
      {title || showCopyButton ? (
        <div
          style={{
            padding: '10px 14px',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.2px',
            borderBottom:
              isLight
                ? '1px solid rgba(0,0,0,0.08)'
                : '1px solid rgba(255,255,255,0.08)',
            background:
              isLight ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.04)',
            color: isLight ? 'rgba(15,23,42,0.78)' : 'rgba(226,232,240,0.92)',
            opacity: 0.9,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
          }}
        >
          <div style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {headerText}
          </div>

          {showCopyButton ? (
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy code"
              title="Copy"
              style={{
                fontSize: 11,
                padding: '4px 10px',
                cursor: 'pointer',
                border: 'none',
                borderRadius: 10,
                background: isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.10)',
                color: isLight ? 'rgba(15,23,42,0.75)' : 'rgba(241,245,249,0.88)',
              }}
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          ) : null}
        </div>
      ) : null}

      <SyntaxHighlighter
        language={language}
        style={theme as any}
        showLineNumbers={showLineNumbers}
        wrapLongLines={wrapLongLines}
        customStyle={{
          margin: 0,
          padding: '14px',
          background: 'transparent',
          fontSize: 13,
          lineHeight: 1.55,
          maxHeight,
          overflow: maxHeight ? 'auto' : undefined,
        }}
        codeTagProps={{
          style: {
            fontFamily:
              'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          },
        }}
      >
        {String(code ?? '')}
      </SyntaxHighlighter>
    </div>
  );
}
