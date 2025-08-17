import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Paper, TextField, IconButton, Avatar, Divider } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';

/**
 * FullChatBot (this.GUI)
 * A full-page, theme-aware chat surface.
 *
 * Props (all optional):
 *  - title: string (header title)
 *  - initialMessages: Array<{ id?: string, role: 'user'|'bot', text: string }>
 *  - onSend: async (text, history) => Promise<string | { text: string } | Array<{ text: string }>> (required to produce replies).
 *  - onError: function (error) => void
 *  - placeholder: string
 *  - headerIcon: ReactNode (defaults to SmartToy)
 *  - heightOffset: number|string  // extra space to subtract besides navbar height
 *  - maxWidth: number|string      // container max width
 *  - bleedTop: number|string       // optionally pull the chat upward (compensate parent padding)
 */
export default function FullChatBot({
  title = 'SupportBot Example',
  initialMessages = [ { id: 'b1', role: 'bot', text: "Hi! I'm your Support Bot. How can I help today?" } ],
  onSend,
  onError,
  placeholder = 'Type your message…',
  headerIcon,
  heightOffset = 0,
  maxWidth = 1400,
  bleedTop = 0,
}) {
  const theme = useTheme();

  // Colors and surfaces from theme
  const mode = theme?.palette?.mode || 'dark';
  const linkMain = theme?.palette?.link?.main || 'rgb(0,170,150)';
  const borderColor = theme?.custom?.border || (mode === 'dark' ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.12)');
  const surface = theme?.palette?.background?.paper || (mode === 'dark' ? 'rgb(24,26,28)' : '#ffffff');
  const textPrimary = theme?.palette?.text?.primary || (mode === 'dark' ? '#fff' : '#111');
  const bubbleUserBg = alpha(linkMain, 0.14);
  const bubbleUserBorder = alpha(linkMain, 0.35);
  const bubbleBotBg = mode === 'dark' ? alpha('#ffffff', 0.06) : alpha('#000000', 0.04);
  const bubbleBotBorder = mode === 'dark' ? alpha('#ffffff', 0.12) : alpha('#000000', 0.08);

  const [messages, setMessages] = useState(() => initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const listRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isTyping]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg = { id: `u-${Date.now()}`, role: 'user', text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput('');

    setIsTyping(true);
    try {
      if (typeof onSend !== 'function') {
        console.warn('[FullChatBot] onSend prop is required to generate replies.');
        setIsTyping(false);
        return;
      }
      let next = await onSend(trimmed, [...messages, userMsg]);
      const toArray = Array.isArray(next) ? next : [next];
      const prepared = toArray
        .filter(Boolean)
        .map((n, idx) => ({ id: `b-${Date.now()}-${idx}`, role: 'bot', text: typeof n === 'string' ? n : (n?.text || '') }));
      // small UX delay
      setTimeout(() => {
        setMessages((m) => [...m, ...prepared]);
        setIsTyping(false);
      }, 200);
    } catch (e) {
      if (typeof onError === 'function') try { onError(e); } catch (_) {}
      setMessages((m) => [...m, { id: `b-${Date.now()}`, role: 'bot', text: 'Sorry, something went wrong. Please try again.' }]);
      setIsTyping(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const bubbleStyles = (role) => {
    const isUser = role === 'user';
    return {
      alignSelf: isUser ? 'flex-end' : 'flex-start',
      maxWidth: '78%',
      padding: '10px 12px',
      borderRadius: 12,
      background: isUser ? bubbleUserBg : bubbleBotBg,
      border: `1px solid ${isUser ? bubbleUserBorder : bubbleBotBorder}`,
      color: 'inherit',
      wordBreak: 'break-word'
    };
  };

  const HeaderIcon = headerIcon || <SmartToyIcon sx={{ color: linkMain }} />;

  // Full height relative to viewport minus navbar and optional offset
  const topCalc = `calc(97vh - var(--nav-height, 56px) - ${typeof heightOffset === 'number' ? `${heightOffset}px` : String(heightOffset)})`;
  const mtBleed = bleedTop ? (typeof bleedTop === 'number' ? `${-bleedTop}px` : `calc(0px - ${String(bleedTop)})`) : 0;

  return (
    <Box sx={{ width: '100%', maxWidth, mx: 'auto', height: topCalc, mt: mtBleed, display: 'flex', flexDirection: 'column', color: textPrimary, colorScheme: mode }}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          px: 2,
          py: 1,
          border: '1px solid',
          borderColor: borderColor,
          borderBottom: 'none',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          background: surface,
        }}
      >
        {HeaderIcon}
        <Typography variant="h6" sx={{ fontWeight: 700 }}>{title}</Typography>
      </Box>

      {/* Chat container fills remaining space */}
      <Paper elevation={0} sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        borderColor: borderColor,
        borderRadius: 2,
        background: surface,
        minHeight: 360
      }}>
        {/* Conversation */}
        <Box ref={listRef} sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.2
        }}>
          {messages.map((m) => (
            <Box key={m.id} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start', flexDirection: m.role === 'user' ? 'row-reverse' : 'row' }}>
              <Avatar sx={{ width: 28, height: 28, bgcolor: m.role === 'user' ? 'rgba(0,170,150,0.18)' : 'rgba(255,255,255,0.08)', border: '1px solid', borderColor: m.role === 'user' ? 'rgba(0,170,150,0.4)' : 'rgba(255,255,255,0.18)' }}>
                {m.role === 'user' ? <PersonIcon fontSize="small" /> : <SmartToyIcon fontSize="small" />}
              </Avatar>
              <Box sx={bubbleStyles(m.role)}>
                <Typography variant="body2">{m.text}</Typography>
              </Box>
            </Box>
          ))}
          {isTyping && (
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Avatar sx={{ width: 28, height: 28, bgcolor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)' }}>
                <SmartToyIcon fontSize="small" />
              </Avatar>
              <Box sx={{ ...bubbleStyles('bot'), display: 'inline-flex', gap: 1 }}>
                <Dot /> <Dot delay={120} /> <Dot delay={240} />
              </Box>
            </Box>
          )}
        </Box>
        <Divider />
        {/* Composer */}
        <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            variant="standard"
            fullWidth
            InputProps={{ disableUnderline: true }}
            sx={{
              mx: 1,
              px: 1.5,
              py: 1,
              borderRadius: 1,
              border: '1px solid',
              borderColor: borderColor,
              background: mode === 'dark' ? alpha('#ffffff', 0.04) : alpha('#000000', 0.03)
            }}
          />
          <IconButton color="primary" onClick={handleSend} aria-label="send">
            <SendIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}

function Dot({ delay = 0 }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setOn((v) => !v), 350);
    return () => clearInterval(id);
  }, []);
  return (
    <Box component="span" sx={{
      width: 6, height: 6, borderRadius: 1,
      display: 'inline-block',
      background: on ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.35)',
      transition: 'opacity 200ms ease',
    }} />
  );
}
