// Floating .me component — draggable animated orb indicating active status
import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { GlobalStyles } from "@mui/system";
import VerbsBubbles from "./actions/verbs";

function Me() {
  const [open, setOpen] = useState(false);
  const status = { active: true, error: false };
  // Drag state
  const dockPos = useRef({ x: window.innerWidth - 80, y: window.innerHeight - 80 });
  const [pos, setPos] = useState(dockPos.current);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const clickTimeout = useRef<number | null>(null);
  const dragMoved = useRef(false);
  /** ✅ Drag */
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
    dragMoved.current = false;
    clickTimeout.current = Date.now();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return;
    if (Math.abs(e.clientX - pos.x) > 3 || Math.abs(e.clientY - pos.y) > 3) {
      dragMoved.current = true;
    }
    setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseUp = () => {
    setDragging(false);
    dragMoved.current = false;
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  });

  useEffect(() => {
    const handleResize = () => {
      if (!dragging) {
        dockPos.current = { x: window.innerWidth - 80, y: window.innerHeight - 80 };
        setPos(dockPos.current);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dragging]);

  return (
    <>
      <GlobalStyles
        styles={{
          "@keyframes float": {
            "0%,100%": { transform: "translateY(0) scale(1)", borderRadius: "50%" },
            "25%": {
              transform: "translateY(-6px) scale(1.05)",
              borderRadius: "55% 45% 60% 40% / 60% 55% 45% 40%",
            },
            "50%": {
              transform: "translateY(-8px) scale(1.1)",
              borderRadius: "50% 60% 40% 55% / 55% 40% 60% 45%",
            },
            "75%": {
              transform: "translateY(-6px) scale(1.05)",
              borderRadius: "45% 55% 40% 60% / 40% 60% 55% 50%",
            },
          },
          "@keyframes glow": {
            "0%,100%": {
              opacity: 0.3,
              boxShadow: "0 0 4px rgba(255,255,255,0.2), 0 0 8px rgba(173,216,230,0.1)",
            },
            "50%": {
              opacity: 0.5,
              boxShadow: "0 0 6px rgba(255,255,255,0.3), 0 0 10px rgba(173,216,230,0.15)",
            },
          },
          "@keyframes blobMove": {
            "0%,100%": {
              top: "15%",
              left: "20%",
              width: "65%",
              height: "65%",
              borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
              filter: "blur(14px)",
            },
            "33%": {
              top: "10%",
              left: "25%",
              width: "70%",
              height: "70%",
              borderRadius: "55% 60% 40% 45% / 45% 50% 60% 55%",
              filter: "blur(18px)",
            },
            "66%": {
              top: "18%",
              left: "15%",
              width: "60%",
              height: "60%",
              borderRadius: "50% 55% 45% 60% / 60% 50% 55% 40%",
              filter: "blur(12px)",
            },
          },
        }}
      />

      <Box
        sx={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          width: 80,
          height: 80,
          position: "relative",
          pointerEvents: "none",
        }}
      >
        <VerbsBubbles
          verbs={["be", "have", "do", "relate", "communicate", "react", "at"]}
          visible={open}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
        <Box
          onClick={() => {
            if (clickTimeout.current !== null) {
              const elapsed = Date.now() - clickTimeout.current;
              if (!dragging && !dragMoved.current && elapsed < 300) {
                setOpen((prev) => !prev);
              }
            }
          }}
          onMouseDown={handleMouseDown}
          sx={(theme) => ({
            position: "absolute",
            top: 10,
            left: 10,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background:
              theme.palette.mode === "light"
                ? "rgba(255,255,255,0.35)"
                : "rgba(255,255,255,0.1)",
            boxShadow:
              !status.active || status.error
                ? "0 0 0 3px #ff4d4d, 0 0 20px 6px rgba(255,0,0,0.6)"
                : "0 0 0 3px #29bfff, 0 0 22px 6px rgba(0,200,255,0.6)",
            border: !status.active || status.error ? "2.5px solid #ff1a1a" : "2.5px solid #9ff6ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 26,
            color: theme.palette.mode === "light" ? "#006699" : "#baf3ff",
            cursor: "pointer",
            userSelect: "none",
            animation: "float 6s ease-in-out infinite, glow 4.5s ease-in-out infinite",
            backdropFilter: "blur(10px) saturate(160%)",
            pointerEvents: "auto",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "15%",
              left: "20%",
              width: "65%",
              height: "65%",
              background:
                theme.palette.mode === "light"
                  ? "radial-gradient(circle at 50% 50%, rgba(0,102,153,0.4) 0%, rgba(0,68,102,0) 70%)"
                  : "radial-gradient(circle at 50% 50%, rgba(120,240,255,0.3) 0%, rgba(173,216,230,0) 70%)",
              filter: "blur(7px)",
              borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
              animation: "blobMove 8s ease-in-out infinite",
              pointerEvents: "none",
              mixBlendMode: "screen",
            },
            "&:hover": {
              transform: "scale(1.08)",
            },
          })}
        >
          ⊙
        </Box>
      </Box>

      {/* Removed MeState modal for now */}
    </>
  );
}

export default Me;