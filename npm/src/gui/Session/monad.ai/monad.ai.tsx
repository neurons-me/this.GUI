// Monad.tsx — Floating .me badge wrapper
// Renders the draggable animated .me orb and toggles the Session badge
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Box } from "@mui/material";
import { GlobalStyles } from "@mui/system";
import type { Theme } from "@mui/material/styles";
import { useTheme } from "@mui/material";
export type MonadProps = {
  variant?: "bubble" | "inline";
  mode?: "float" | "contained";
  children?: ReactNode;
};

export type MonadContextValue = {
  hasMe: boolean;
  me: any | null;
  meName: string | null;
};

const MonadContext = createContext<MonadContextValue>({
  hasMe: false,
  me: null,
  meName: null,
});

export function useMonadContext() {
  return useContext(MonadContext);
}

function resolveMeContext(): MonadContextValue {
  const g = globalThis as any;
  const me = g?.me ?? null;
  let meName: string | null = null;
  try {
    if (me) {
      if (typeof me === "function") {
        const value = me("name");
        if (value != null) meName = String(value);
      } else if (typeof me?.name === "function") {
        const value = me.name();
        if (value != null) meName = String(value);
      } else if (typeof me?.get === "function") {
        const value = me.get("name");
        if (value != null) meName = String(value);
      }
    }
  } catch {
    meName = null;
  }
  return { hasMe: Boolean(me), me, meName };
}

export default function Monad({ variant = "bubble", mode = "float", children }: MonadProps) {
  const [open, setOpen] = useState(false);
  const status = { active: true, error: false };
  const theme = useTheme() as any;
  const hasContent = Boolean(children);
  const [meContext, setMeContext] = useState<MonadContextValue>(() => resolveMeContext());
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState<{ w: number; h: number } | null>(null);
  const { top = 0, bottom = 0, left = 0, right = 0 } = theme.layout?.insets || {};
  const dockPos = useRef({
    x: (window.innerWidth - left - right) / 2,
    y: (window.innerHeight - top - bottom) / 2,
  });

  const [pos, setPos] = useState(dockPos.current);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const clickTimeout = useRef<number | null>(null);
  const dragMoved = useRef(false);
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
    const rawX = e.clientX - offset.x;
    const rawY = e.clientY - offset.y;
    const clampedX = Math.min(window.innerWidth - right - 120, Math.max(left, rawX));
    const clampedY = Math.min(window.innerHeight - bottom - 120, Math.max(top, rawY));
    setPos({ x: clampedX, y: clampedY });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  useEffect(() => {
    if (mode !== "contained") return;
    const node = containerRef.current;
    if (!node || !node.parentElement) return;
    const parent = node.parentElement;
    const update = () => {
      const w = parent.clientWidth || 0;
      const h = parent.clientHeight || 0;
      if (w && h) setContainerSize({ w, h });
    };

    update();
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => update());
      ro.observe(parent);
    }
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      if (ro) ro.disconnect();
    };
  }, [mode]);
  useEffect(() => {
    if (meContext.hasMe) return;
    let attempts = 0;
    const maxAttempts = 20;
    const id = window.setInterval(() => {
      attempts += 1;
      const next = resolveMeContext();
      if (next.hasMe || attempts >= maxAttempts) {
        setMeContext(next);
        window.clearInterval(id);
      }
    }, 250);
    return () => window.clearInterval(id);
  }, [meContext.hasMe]);
  const badgeSide = pos.x > window.innerWidth / 2 ? "left" : "right";
  const badgeStyle =
    mode === "contained"
      ? ({ left: "50%", transform: "translateX(-50%)" } as const)
      : badgeSide === "left"
        ? ({ right: 120 + 10 } as const)
        : ({ left: 120 + 10 } as const);
  const connectorKey = `${badgeSide}:${open ? "open" : "closed"}`;
  const connector = useMemo(() => {
    const radius = 30;
    const start = {
      x: badgeSide === "left" ? 40 - radius + 1 : 40 + radius - 1,
      y: 40 - 11,
    };
    const end = {
      x: badgeSide === "left" ? -82 : 162,
      y: 18,
    };
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const c1 = { x: start.x + dx * 0.35, y: start.y + dy * 0.15 + 10 };
    const c2 = { x: start.x + dx * 0.7, y: start.y + dy * 0.75 + 6 };
    const d = `M ${start.x} ${start.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${end.x} ${end.y}`;
    return { d, start, end };
  }, [badgeSide]);
  // Inline keeps Monad in the tree without rendering the floating orb.
  // It is present as a surface wrapper, but not in floating form.
  if (variant === "inline") {
    return (
      <Box>
        {children ?? null}
      </Box>
    );
  }

  return (
    <>
      <GlobalStyles
        styles={{
          "@keyframes float": {
            "0%,100%": { transform: "translateY(0) scale(1)", borderRadius: "50%" },
            "25%": { transform: "translateY(-6px) scale(1.05)", borderRadius: "55% 45% 60% 40% / 60% 55% 45% 40%" },
            "50%": { transform: "translateY(-8px) scale(1.1)", borderRadius: "50% 60% 40% 55% / 55% 40% 60% 45%" },
            "75%": { transform: "translateY(-6px) scale(1.05)", borderRadius: "45% 55% 40% 60% / 40% 60% 55% 50%" },
          },
          "@keyframes glow": {
            "0%,100%": { opacity: 0.3, boxShadow: "0 0 4px rgba(255,255,255,0.2), 0 0 8px rgba(173,216,230,0.1)" },
            "50%": { opacity: 0.5, boxShadow: "0 0 6px rgba(255,255,255,0.3), 0 0 10px rgba(173,216,230,0.15)" },
          },
          "@keyframes blobMove": {
            "0%,100%": { top: "15%", left: "20%", width: "65%", height: "65%", borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%", filter: "blur(14px)" },
            "33%": { top: "10%", left: "25%", width: "70%", height: "70%", borderRadius: "55% 60% 40% 45% / 45% 50% 60% 55%", filter: "blur(18px)" },
            "66%": { top: "18%", left: "15%", width: "60%", height: "60%", borderRadius: "50% 55% 45% 60% / 60% 50% 55% 40%", filter: "blur(12px)" },
          },
          "@keyframes stringWobble": {
            "0%,100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(0.6px)" },
          },
        }}
      />

      <Box
        ref={containerRef}
        sx={{
          position: mode === "contained" ? "relative" : "fixed",
          left: mode === "contained" ? 0 : pos.x - 20,
          top: mode === "contained" ? 0 : pos.y - 20,
          width: mode === "contained" ? (containerSize?.w ? `${containerSize.w}px` : "100%") : 120,
          height: mode === "contained" ? (containerSize?.h ? `${containerSize.h}px` : "100%") : 120,
          borderRadius: "12px",
          border: open ? "2px solid rgba(255,255,255,0.25)" : "2px solid transparent",
          background: open ? "rgba(0,0,0,0.1)" : "transparent",
          backdropFilter: open ? "blur(12px)" : "none",
          boxShadow: open ? "0 0 18px rgba(0,0,0,0.25)" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 1400,
        }}
        data-me-present={meContext.hasMe ? "1" : "0"}
        data-me-name={meContext.meName ?? ""}
      >
        <MonadContext.Provider value={meContext}>
          <Box
            sx={{
              position: "relative",
              width: mode === "contained" ? "100%" : 80,
              height: mode === "contained" ? "100%" : 80,
              pointerEvents: "none",
              overflow: "visible",
              display: mode === "contained" ? "flex" : "block",
              alignItems: mode === "contained" ? "center" : undefined,
              justifyContent: mode === "contained" ? "center" : undefined,
            }}
          >

          {open && mode !== "contained" ? (
            <Box
              key={connectorKey}
              sx={{
                position: "absolute",
                inset: 0,
                overflow: "visible",
                pointerEvents: "none",
                opacity: 0.55,
                animation: "stringWobble 4.2s ease-in-out infinite",
                filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.18))",
              }}
            >
              <svg width="80" height="80" viewBox="0 0 80 80" style={{ overflow: "visible" }} aria-hidden="true">
                <defs>
                  <linearGradient id="monadString" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={theme.palette.primary.main} stopOpacity="0.0" />
                    <stop offset="45%" stopColor={theme.palette.primary.main} stopOpacity="0.18" />
                    <stop offset="100%" stopColor={theme.palette.primary.main} stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d={connector.d}
                  fill="none"
                  stroke="url(#monadString)"
                  strokeWidth="1.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.85"
                />
                <circle cx={connector.end.x} cy={connector.end.y} r="1.1" fill={theme.palette.primary.main} opacity="0.45" />
              </svg>
            </Box>
          ) : null}

          {open && hasContent ? (
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.38)",
                pointerEvents: "none",
                borderRadius: mode === "contained" ? "16px" : "12px",
              }}
            />
          ) : null}

          {open && hasContent ? (
            <Box
              sx={{
                position: "absolute",
                ...(mode === "contained"
                  ? { inset: 0, width: "100%", height: "100%", borderRadius: "16px" }
                  : { top: -10, ...badgeStyle, width: 332, borderRadius: "16px" }),
                border: "1px solid rgba(255,255,255,0.18)",
                background: theme.palette?.mode === "light" ? "rgba(255,255,255,0.96)" : "rgba(6,8,12,0.96)",
                backdropFilter: "blur(6px) saturate(120%)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                overflow: "hidden",
                pointerEvents: "auto",
                zIndex: 1,
              }}
            >
              <Box
                sx={{
                  px: 1.25,
                  py: 0.9,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 1,
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <Box
                  sx={{
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: 0.6,
                    textTransform: "uppercase",
                    color: theme.palette?.mode === "light" ? "#005a7a" : "#baf3ff",
                    userSelect: "none",
                  }}
                >
                  monad.ai
                </Box>
                <Box
                  onClick={() => setOpen(false)}
                  sx={{
                    width: 26,
                    height: 26,
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: theme.palette?.mode === "light" ? "#005a7a" : "#baf3ff",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    userSelect: "none",
                    "&:hover": { background: "rgba(255,255,255,0.14)" },
                  }}
                  aria-label="Close"
                >
                  ×
                </Box>
              </Box>
              <Box sx={{ p: 1.0, height: mode === "contained" ? "calc(100% - 44px)" : "auto", overflow: "auto" }}>
                {children}
              </Box>
            </Box>
          ) : null}

          <Box
            onClick={() => {
              if (mode === "contained") {
                if (hasContent) setOpen((prev) => !prev);
                return;
              }
              if (clickTimeout.current !== null) {
                const elapsed = Date.now() - clickTimeout.current;
                if (!dragging && !dragMoved.current && elapsed < 300 && hasContent) {
                  setOpen((prev) => !prev);
                }
              }
            }}
            onMouseDown={mode === "contained" ? undefined : handleMouseDown}
            sx={(t: Theme) => {
              const primary = t.palette.primary?.main || "#29bfff";
              const lightRing = `0 0 0 3px ${primary}, 0 0 20px 5px color-mix(in srgb, ${primary} 55%, transparent)`;
              const lightBorder = `2.5px solid ${primary}`;
              return ({
              position: mode === "contained" ? "relative" : "absolute",
              top: mode === "contained" ? "auto" : 10,
              left: mode === "contained" ? "auto" : 10,
              transform: "none",
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: t.palette.mode === "light" ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.1)",
              boxShadow:
                !status.active || status.error
                  ? "0 0 0 3px #ff4d4d, 0 0 20px 6px rgba(255,0,0,0.6)"
                  : (t.palette.mode === "light" ? lightRing : "0 0 0 3px #29bfff, 0 0 22px 6px rgba(0,200,255,0.6)"),
              border: !status.active || status.error
                ? "2.5px solid #ff1a1a"
                : (t.palette.mode === "light" ? lightBorder : "2.5px solid #9ff6ff"),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              color: t.palette.mode === "light" ? primary : "#baf3ff",
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
                  t.palette.mode === "light"
                    ? "radial-gradient(circle at 50% 50%, rgba(0,102,153,0.4) 0%, rgba(0,68,102,0) 70%)"
                    : "radial-gradient(circle at 50% 50%, rgba(120,240,255,0.3) 0%, rgba(173,216,230,0) 70%)",
                filter: "blur(7px)",
                borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                animation: "blobMove 8s ease-in-out infinite",
                pointerEvents: "none",
                mixBlendMode: "screen",
              },
              "&:hover": { transform: "scale(1.08)" },
              "&:hover .monad-tooltip": { opacity: 1, transform: "translateX(-50%) translateY(-2px)" },
            });
            }}
          >
            ⊙
            <Box
              className="monad-tooltip"
              sx={{
                position: "absolute",
                bottom: "calc(100% + 8px)",
                left: "50%",
                transform: "translateX(-50%) translateY(4px)",
                opacity: 0,
                transition: "opacity 0.18s ease, transform 0.18s ease",
                pointerEvents: "none",
                whiteSpace: "nowrap",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: theme.palette?.mode === "light" ? "#005a7a" : "#baf3ff",
                background: theme.palette?.mode === "light" ? "rgba(255,255,255,0.85)" : "rgba(10,14,18,0.85)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
                borderRadius: "8px",
                px: 1,
                py: 0.4,
                boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
              }}
            >
              monad.ai
            </Box>
          </Box>
          </Box>
        </MonadContext.Provider>
      </Box>
    </>
  );
}
