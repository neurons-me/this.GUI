import React from 'react';
import { Box } from '@mui/material';

interface VerbsProps {
  verbs: string[];
  visible?: boolean;   // controls show/hide
  radius?: number;     // distance from center (default 60)
}

const orbit = `
  @keyframes orbit {
    0% {
      transform: rotate(0deg) translateX(var(--radius)) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg);
    }
  }
`;

const pulse = `
  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 0 8px 2px rgba(0, 150, 255, 0.7);
      transform: scale(1);
    }
    50% {
      box-shadow: 0 0 12px 4px rgba(0, 150, 255, 1);
      transform: scale(1.1);
    }
  }
`;

const styleSheet = `
  ${orbit}
  ${pulse}
`;

const VerbsBubbles: React.FC<VerbsProps> = ({ verbs, visible = false, radius = 60 }) => {
  console.log("🧠 Verbs active:", verbs);
  if (!visible) return null;

  const bubbleCount = verbs.length;
  const angleStep = (2 * Math.PI) / bubbleCount;

  return (
    <>
      <style>{styleSheet}</style>
      {verbs.map((verb, i) => {
        const angle = i * angleStep;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const emojiMap: Record<string, string> = {
          be: "💫",
          have: "📦",
          do: "⚙️",
          relate: "🔗",
          communicate: "💬",
          react: "⚡",
          at: "📍",
        };
        const emoji = emojiMap[verb] || "⬤";

        return (
          <Box
            key={verb}
            sx={{
              position: "absolute",
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
              width: 20,
              height: 20,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,150,255,0.15)",
              border: "1px solid rgba(0,150,255,0.4)",
              color: "#9ff6ff",
              fontSize: 12,
              animation: "orbit 10s linear infinite, pulse 3s ease-in-out infinite",
              transformOrigin: "center",
              "--radius": `${radius}px`,
            }}
          >
            {emoji}
          </Box>
        );
      })}
    </>
  );
};

export default VerbsBubbles;
