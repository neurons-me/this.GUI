// src/components/Pages/CodeBlock.jsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '@mui/material/styles';

export default function CodeBlock({ children, language = "javascript" }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
<SyntaxHighlighter
  language={language}
  style={isDark ? oneDark : oneLight}
  customStyle={{
    borderRadius: "6px",
    fontSize: "0.85rem",
    padding: "1rem",
    backgroundColor: isDark ? "#1e1e1e" : "#f5f5f5",
    border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid #ddd",
    color: isDark ? "#f8f8f2" : "#2d2d2d",
    textShadow: "none",
  }}
  codeTagProps={{
    style: {
      textShadow: "none", // Fuerza remover cualquier sombra
    }
  }}
>
  {children.trim()}
</SyntaxHighlighter>
  );
}