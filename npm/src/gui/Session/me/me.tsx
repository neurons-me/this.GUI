import React, { useEffect, useRef, useState } from 'react';
import ME from 'this.me';
import Box from '@/gui/atoms/Box/Box';
import TextField from '@/gui/atoms/TextField/TextField';
import Typography from '@/gui/atoms/Typography/Typography';
import { useGuiTheme } from '@/gui/hooks';

const MONO_FONT =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace';

type CommandAction =
  | { kind: 'empty' }
  | { kind: 'error'; message: string }
  | { kind: 'write'; path: string; value: string; push?: boolean }
  | { kind: 'read'; path: string }
  | { kind: 'me_target'; namespace: string; selector: string; path: string; value?: string };

export type MeProps = {
  me?: any;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  prompt?: string;
  title?: string;
  motto?: string;
  greeting?: string;
  animatePlaceholder?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  showOutput?: boolean;
  showLog?: boolean;
  maxLogLines?: number;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  onExecute?: (value: string, output: string, me: any) => void;
  'data-gui-node-id'?: string;
  'data-gui-component'?: string;
};

function isValidUsername(value: string): boolean {
  if (!value) return false;
  if (value.length < 3 || value.length > 63) return false;
  if (value.startsWith('.') || value.endsWith('.') || value.includes('..')) return false;
  const labelRe = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;
  const labels = value.toLowerCase().split('.');
  for (let i = 0; i < labels.length; i += 1) {
    if (!labelRe.test(labels[i])) return false;
  }
  return true;
}

function formatValue(value: any): string {
  if (Array.isArray(value)) {
    if (!value.length) return '- (empty)';
    return (
      '- ' +
      value
        .map((item) => {
          if (typeof item === 'string') return item;
          if (typeof item === 'undefined') return 'undefined';
          try {
            return JSON.stringify(item);
          } catch (_) {
            return String(item);
          }
        })
        .join(', ')
    );
  }
  if (typeof value === 'undefined') return 'undefined';
  try {
    const serialized = JSON.stringify(value);
    return typeof serialized === 'string' ? serialized : String(value);
  } catch (_) {
    return String(value);
  }
}

function normalizeListPath(path: string): string {
  return path.endsWith('[]') ? path.slice(0, -2) : path;
}

function readKernelIdentity(me: any): string {
  try {
    return String(me?.inspect?.().index?.['']?.__id || '').trim();
  } catch (_) {
    return '';
  }
}

function readKernelIndex(me: any): Record<string, any> {
  try {
    const index = me?.inspect?.().index;
    return index && typeof index === 'object' ? index : {};
  } catch (_) {
    return {};
  }
}

function getNumericChildren(me: any, path: string): any[] {
  const index = readKernelIndex(me);
  const prefix = path ? `${path}.` : '';
  const seen: Record<string, true> = {};
  const keys = Object.keys(index);

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (key.indexOf(prefix) !== 0) continue;
    const rest = key.slice(prefix.length);
    const segment = rest.split('.')[0];
    if (/^\d+$/.test(segment)) seen[segment] = true;
  }

  const numbers = Object.keys(seen)
    .map((entry) => Number(entry))
    .sort((a, b) => a - b);

  return numbers.map((entry) => readByPath(me, `${path}.${entry}`));
}

function getNextNumericIndex(me: any, path: string): number {
  const list = getNumericChildren(me, path);
  return list.length + 1;
}

function toTargetPath(path: string): string {
  return String(path || '').trim().replace(/^\/+/, '');
}

function executeTarget(me: any, target: string, body?: any): any {
  if (!me || typeof me.execute !== 'function') {
    throw new Error('.me kernel does not expose execute(...).');
  }
  return typeof body === 'undefined' ? me.execute(target) : me.execute(target, body);
}

function readByPath(me: any, path: string): any {
  return executeTarget(me, `me://self:read/${toTargetPath(path)}`);
}

function writeByPath(me: any, path: string, value: any): any {
  return executeTarget(me, `me://self:write/${toTargetPath(path)}`, value);
}

function parseCommand(text: string): CommandAction {
  let cmd = String(text || '').trim();
  if (!cmd) return { kind: 'empty' };

  const protocolIndex = cmd.indexOf('://');
  if (protocolIndex > -1) {
    cmd = cmd.slice(protocolIndex + 3).trim();
  }
  if (cmd.toLowerCase().startsWith('nrp ')) cmd = cmd.slice(4).trim();

  const lower = cmd.toLowerCase();
  const eqIndex = cmd.indexOf('=');
  const leftSide = eqIndex > -1 ? cmd.slice(0, eqIndex).trim() : cmd;
  const rightSide = eqIndex > -1 ? cmd.slice(eqIndex + 1).trim() : '';

  if (leftSide.startsWith('#')) {
    const hashSpec = leftSide.slice(1).trim();
    if (!hashSpec) return { kind: 'error', message: 'No path provided.' };
    const hashParts = hashSpec.split(/\s+/);
    const path = hashParts.shift() || '';
    let value = hashParts.join(' ');
    if (rightSide && !value) value = rightSide;
    if (!path) return { kind: 'error', message: 'No path provided.' };
    if (!value) return { kind: 'error', message: 'No value provided for write.' };
    return { kind: 'write', path, value, push: true };
  }

  if (leftSide.startsWith('?')) {
    const path = leftSide.slice(1).trim();
    if (!path) return { kind: 'error', message: 'No path provided.' };
    return { kind: 'read', path };
  }

  if (leftSide.startsWith('$')) {
    const writeSpec = leftSide.slice(1).trim();
    if (!writeSpec) return { kind: 'error', message: 'No path provided.' };
    const parts = writeSpec.split(/\s+/);
    const path = parts.shift() || '';
    let value = parts.join(' ');
    if (rightSide && !value) value = rightSide;
    if (!value) return { kind: 'error', message: 'No value provided for write.' };
    return { kind: 'write', path, value };
  }

  if (leftSide.startsWith(':/')) {
    return {
      kind: 'me_target',
      namespace: 'local',
      selector: rightSide ? 'write' : 'read',
      path: leftSide.slice(2),
      value: rightSide || undefined,
    };
  }

  const schemeMatch = leftSide.match(/^([a-z]+):(.+)$/i);
  if (schemeMatch) {
    const scheme = schemeMatch[1].toLowerCase();
    let rest = String(schemeMatch[2] || '');
    if (['http', 'https', 'ftp', 'ssh'].indexOf(scheme) > -1) {
      if (rest.startsWith('//')) rest = rest.slice(2);
      const slashIndex = rest.indexOf('/');
      if (slashIndex > -1) {
        return {
          kind: 'me_target',
          namespace: rest.slice(0, slashIndex) || scheme,
          selector: rightSide ? 'write' : 'read',
          path: rest.slice(slashIndex + 1),
          value: rightSide || undefined,
        };
      }
    }
  }

  const targetRe = /^([a-z0-9_-]+(?:\.[a-z0-9_-]+)*):([a-z0-9_-]+)\/(.+)$/i;
  const shortTargetRe = /^([a-z0-9_-]+(?:\.[a-z0-9_-]+)*)\/(.+)$/i;
  const targetMatch = leftSide.match(targetRe);
  if (targetMatch) {
    return {
      kind: 'me_target',
      namespace: targetMatch[1],
      selector: String(targetMatch[2] || '').toLowerCase(),
      path: targetMatch[3],
      value: rightSide || undefined,
    };
  }

  const shortMatch = leftSide.match(shortTargetRe);
  if (shortMatch) {
    return {
      kind: 'me_target',
      namespace: shortMatch[1],
      selector: rightSide ? 'write' : 'read',
      path: shortMatch[2],
      value: rightSide || undefined,
    };
  }

  if (lower.startsWith('me(')) {
    const inner = cmd.slice(3, -1).trim().replace(/^['"]|['"]$/g, '');
    if (!inner) return { kind: 'error', message: 'No read path provided.' };
    return { kind: 'read', path: inner };
  }

  if (lower.startsWith('me.')) {
    const open = cmd.indexOf('(');
    const close = cmd.lastIndexOf(')');
    if (open > 0 && close > open) {
      const path = cmd.slice(3, open).trim();
      const rawValue = cmd
        .slice(open + 1, close)
        .trim()
        .replace(/^['"]|['"]$/g, '');
      if (!rawValue) return { kind: 'read', path };
      return { kind: 'write', path, value: rawValue };
    }

    const parts = cmd.slice(3).trim().split(/\s+/);
    const path = parts.shift() || '';
    const value = parts.join(' ');
    if (!value) return { kind: 'read', path };
    return { kind: 'write', path, value };
  }

  if (lower.startsWith('me ')) {
    const rest = cmd.slice(3).trim();
    if (!rest) return { kind: 'error', message: 'No path provided.' };
    const parts = rest.split(/\s+/);
    const path = parts.shift() || '';
    const value = parts.join(' ');
    if (!value) return { kind: 'read', path };
    return { kind: 'write', path, value };
  }

  if (lower.startsWith('what')) {
    const question = cmd
      .replace(/^what(?:'s| is)?(?: the)?/i, '')
      .replace(/\?+$/, '')
      .replace(/\s+of\s*$/i, '')
      .trim();
    const path = question.replace(/\s+/g, '.');
    if (!path) return { kind: 'error', message: 'No query path.' };
    return { kind: 'read', path };
  }

  const parts = cmd.split(/\s+/);
  let path = parts.shift() || '';
  if (path.startsWith('/')) path = path.slice(1);
  if (path) return { kind: 'read', path };

  return {
    kind: 'error',
    message: 'Unknown command. Try: me.name("jose"), me("name"), or me://local:read/name',
  };
}

function looksLikeDirectRuntimeCommand(value: string, me: any): boolean {
  const trimmed = String(value || '').trim();
  if (/^me\s*\[/.test(trimmed)) return true;

  const methodMatch = trimmed.match(/^me\.([A-Za-z_$][\w$]*)\s*\(/);
  if (!methodMatch) return false;
  const methodName = methodMatch[1];
  return typeof me?.[methodName] === 'function';
}

function shouldAutoSetIdentity(value: string, identitySet: boolean): boolean {
  if (identitySet) return false;
  const trimmed = String(value || '').trim();
  if (!trimmed) return false;
  if (!/^[a-z0-9-]+$/i.test(trimmed)) return false;
  return isValidUsername(trimmed);
}

function formatLogLine(responseLine: string, identityValue: string): string {
  let line = String(responseLine || '').trim();
  if (!line) return '';
  if (line.indexOf('ok -> ') === 0) line = line.slice(6);
  if (line.indexOf('ok → ') === 0) line = line.slice(5);
  return identityValue ? `${identityValue}.${line}` : line;
}

async function runDirectRuntimeCommand(me: any, command: string): Promise<string> {
  const trimmed = String(command || '').trim();
  try {
    let result: any;
    try {
      result = Function('me', `"use strict"; return (${trimmed});`)(me);
    } catch (_) {
      result = Function('me', `"use strict"; ${trimmed}`)(me);
    }
    const resolved = await Promise.resolve(result);
    if (typeof resolved === 'undefined') return `ok → ${trimmed}`;
    return `${trimmed} → ${formatValue(resolved)}`;
  } catch (error) {
    return `error → ${error instanceof Error ? error.message : String(error)}`;
  }
}

export default function Me({
  me: providedMe,
  value,
  defaultValue = '',
  placeholder = '.|...',
  prompt,
  title = '.me',
  motto = 'Minimal and Expressive.',
  greeting = 'Hello, I am',
  animatePlaceholder = true,
  autoFocus = false,
  disabled = false,
  showOutput = true,
  showLog = true,
  maxLogLines = 200,
  onChange,
  onSubmit,
  onExecute,
  'data-gui-node-id': nodeId = 'Me',
  'data-gui-component': componentName = 'Me',
}: MeProps) {
  const theme = useGuiTheme();
  const localKernelRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isControlled = value != null;
  const [draft, setDraft] = useState(String(value ?? defaultValue));
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState(String(placeholder || ''));
  const [identityValue, setIdentityValue] = useState('');
  const [output, setOutput] = useState('');
  const [logHistory, setLogHistory] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  if (!localKernelRef.current) {
    localKernelRef.current = new ME();
  }

  const kernel = providedMe ?? localKernelRef.current;
  const identitySet = identityValue.length > 0;
  const currentValue = isControlled ? String(value ?? '') : draft;
  const placeholderText = identitySet ? '' : String(placeholder || '');

  useEffect(() => {
    if (!isControlled) return;
    setDraft(String(value ?? ''));
  }, [isControlled, value]);

  useEffect(() => {
    const existingIdentity = readKernelIdentity(kernel);
    if (!existingIdentity) return;
    setIdentityValue(existingIdentity);
    setOutput((prev) => prev || `@ identity set → ${existingIdentity}`);
  }, [kernel]);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    input.setAttribute('aria-label', 'Enter .me commands');
    if (!autoFocus) return;
    const frame = window.requestAnimationFrame(() => {
      input.focus();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [autoFocus]);

  useEffect(() => {
    if (!animatePlaceholder || !placeholderText || currentValue || disabled) {
      setAnimatedPlaceholder(placeholderText);
      return;
    }

    let index = 0;
    let blinkOn = true;
    setAnimatedPlaceholder(placeholderText);

    const interval = window.setInterval(() => {
      const nextChar = placeholderText[index % placeholderText.length];
      if (nextChar === '|') {
        setAnimatedPlaceholder(
          placeholderText.slice(0, index % placeholderText.length) +
            (blinkOn ? '|' : ' ') +
            placeholderText.slice((index % placeholderText.length) + 1),
        );
        blinkOn = !blinkOn;
        return;
      }
      setAnimatedPlaceholder(placeholderText);
      index += 1;
    }, 260);

    return () => window.clearInterval(interval);
  }, [animatePlaceholder, currentValue, disabled, placeholderText]);

  const setInputValue = (nextValue: string) => {
    if (!isControlled) setDraft(nextValue);
    onChange?.(nextValue);
  };

  const focusInput = () => {
    window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  };

  const pushLogLine = (responseLine: string, useIdentityPrefix = true) => {
    const line = formatLogLine(responseLine, useIdentityPrefix ? identityValue : '');
    if (!line) return;
    setLogHistory((prev) => [line, ...prev].slice(0, maxLogLines));
  };

  const handleCommand = async (submittedValue: string) => {
    const trimmed = String(submittedValue || '').trim();
    if (!trimmed || isRunning) return;

    onSubmit?.(trimmed);
    setIsRunning(true);

    let responseLine = '';

    try {
      if (shouldAutoSetIdentity(trimmed, identitySet)) {
        await Promise.resolve(writeByPath(kernel, 'name', trimmed));
        if (typeof kernel?.['@'] === 'function') {
          await Promise.resolve(kernel['@'](trimmed));
        }
        setIdentityValue(trimmed);
        responseLine = `@ identity set → ${trimmed}`;
        setOutput(responseLine);
        pushLogLine(responseLine, false);
      } else if (looksLikeDirectRuntimeCommand(trimmed, kernel)) {
        responseLine = await runDirectRuntimeCommand(kernel, trimmed);
        setOutput(responseLine);
        pushLogLine(responseLine);
      } else {
        const action = parseCommand(trimmed);
        if (action.kind === 'empty') {
          responseLine = '';
        } else if (action.kind === 'error') {
          responseLine = `error → ${action.message}`;
        } else if (action.kind === 'me_target') {
          const namespace = String(action.namespace || '').toLowerCase();
          const selector = String(action.selector || '').toLowerCase();
          const targetNamespace = namespace === 'local' ? 'self' : namespace;

          if (targetNamespace !== 'self' && targetNamespace !== 'kernel') {
            responseLine = `error → remote namespace not supported here: ${action.namespace}`;
          } else {
            const target = `me://${targetNamespace}:${selector}/${toTargetPath(action.path)}`;
            if (selector === 'write' || selector === 'set' || selector === 'import' || selector === 'rehydrate' || selector === 'replay') {
              if (!action.value) {
                responseLine = 'error → write requires value (use = value)';
              } else {
                const nextValue = await Promise.resolve(executeTarget(kernel, target, action.value));
                responseLine = `${target} → ${formatValue(nextValue)}`;
              }
            } else {
              const nextValue = await Promise.resolve(executeTarget(kernel, target));
              responseLine = `${target} → ${formatValue(nextValue)}`;
            }
          }
        } else if (action.kind === 'write') {
          const targetPath = action.push
            ? `${action.path}.${String(getNextNumericIndex(kernel, action.path))}`
            : action.path;
          await Promise.resolve(writeByPath(kernel, targetPath, action.value));
          responseLine = `ok → ${targetPath} = ${action.value}`;
        } else if (action.kind === 'read') {
          const wantsList = action.path.endsWith('[]');
          const basePath = normalizeListPath(action.path);
          const result = wantsList
            ? getNumericChildren(kernel, basePath)
            : await Promise.resolve(readByPath(kernel, basePath));
          responseLine = `${action.path} → ${formatValue(result)}`;
        }

        if (responseLine) {
          setOutput(responseLine);
          pushLogLine(responseLine);
        }
      }
    } catch (error) {
      responseLine = `error → ${error instanceof Error ? error.message : String(error)}`;
      setOutput(responseLine);
      pushLogLine(responseLine);
    } finally {
      setInputValue('');
      focusInput();
      setIsRunning(false);
    }

    if (responseLine) {
      onExecute?.(trimmed, responseLine, kernel);
    }
  };

  return (
    <Box
      component="form"
      data-gui-node-id={nodeId}
      data-gui-component={componentName}
      onSubmit={(event: React.FormEvent) => {
        event.preventDefault();
        void handleCommand(currentValue);
      }}
      sx={{
        width: '100%',
        display: 'grid',
        gap: 0.4,
      }}
    >
      {!identitySet ? (
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          {title}
        </Typography>
      ) : null}

      {!identitySet ? (
        <Typography
          variant="subtitle1"
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.35,
          }}
        >
          {motto}
        </Typography>
      ) : null}

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          flexWrap: 'wrap',
          minWidth: 0,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            lineHeight: 1.15,
            whiteSpace: 'nowrap',
          }}
        >
          {identitySet ? `${identityValue}.` : greeting}
        </Typography>

        {prompt ? (
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.primary.main,
              fontFamily: MONO_FONT,
              whiteSpace: 'nowrap',
            }}
          >
            {prompt}
          </Typography>
        ) : null}

        <TextField
          id="me-typewriter"
          variant="standard"
          type="text"
          value={currentValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
          placeholder={animatedPlaceholder}
          disabled={disabled || isRunning}
          autoFocus={autoFocus}
          inputRef={inputRef}
          InputProps={{ disableUnderline: true }}
          inputProps={{
            id: 'me-typewriter-input',
            spellCheck: false,
            autoCapitalize: 'none',
            autoCorrect: 'off',
            'aria-label': 'Enter .me commands',
          }}
          sx={{
            ml: prompt ? 0 : 1,
            minWidth: 120,
            maxWidth: 320,
            flex: '1 1 180px',
            '& .MuiInputBase-root': {
              display: 'flex',
              alignItems: 'center',
            },
            '& .MuiInputBase-input': {
              padding: 0,
              fontFamily: MONO_FONT,
              fontSize: '1rem',
              lineHeight: 1.5,
              color: theme.palette.text.primary,
              caretColor: theme.palette.primary.main,
              '&::placeholder': {
                color: theme.palette.text.secondary,
                opacity: 0.86,
              },
              '&:disabled': {
                cursor: 'not-allowed',
                opacity: 0.6,
              },
            },
          }}
        />
      </Box>

      {showOutput ? (
        <Typography
          id="me-output"
          variant="caption"
          sx={{
            minHeight: '1.2em',
            color: theme.palette.text.secondary,
            opacity: 0.82,
            whiteSpace: 'pre-wrap',
          }}
        >
          {output}
        </Typography>
      ) : null}

      {showLog ? (
        <Typography
          id="me-log"
          variant="body2"
          sx={{
            mt: 1,
            minHeight: logHistory.length ? undefined : '1.4em',
            color: theme.palette.text.secondary,
            opacity: 0.88,
            whiteSpace: 'pre-wrap',
            fontFamily: MONO_FONT,
          }}
        >
          {logHistory.join('\n')}
        </Typography>
      ) : null}
    </Box>
  );
}
