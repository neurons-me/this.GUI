import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
// Try importing CloseIcon from MUI; fallback to a local SVG if missing
let CloseIcon: any;
try {
  // @ts-ignore
  CloseIcon = require("@mui/icons-material/Close").default;
} catch {
  CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 6L18 18M6 18L18 6" stroke="#000" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

interface ModalBoxProps {
  open: boolean;
  title?: string;
  onClose: () => void;
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  blurBackground?: boolean;
  xyz?: { x?: number; y?: number; z?: number };
  insets?: { top?: number; right?: number; bottom?: number; left?: number };
}

const ModalBox: React.FC<ModalBoxProps> = ({
  open,
  title,
  onClose,
  children,
  width = 400,
  height = "auto",
  blurBackground = true,
  xyz,
  insets,
}) => {
  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: blurBackground
          ? "rgba(0,0,0,0.4)"
          : "rgba(0,0,0,0.7)",
        backdropFilter: blurBackground ? "blur(6px)" : "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      <Box
        sx={{
          width,
          height,
          background: "rgba(255,255,255,0.9)",
          borderRadius: 4,
          boxShadow: "0 0 30px rgba(0,0,0,0.3)",
          position: "absolute",
          padding: 3,
          color: "#222",
          backdropFilter: "blur(8px)",
          animation: "fadeIn 0.25s ease",
          top: insets?.top ?? "50%",
          left: insets?.left ?? "50%",
          right: insets?.right,
          bottom: insets?.bottom,
          transform: `translate(-50%, -50%) ${
            xyz ? `translate3d(${xyz.x || 0}px, ${xyz.y || 0}px, ${xyz.z || 0}px)` : ""
          }`,
          transformStyle: "preserve-3d",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            {title}
          </Typography>
        )}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "#333",
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default ModalBox;