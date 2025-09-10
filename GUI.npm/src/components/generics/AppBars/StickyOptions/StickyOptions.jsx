import { useEffect, useMemo, useRef, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
/**
 * StickyOptions (this.GUI)
 * A reusable sticky CTA menu that hangs below the navbar.
 *
 * Props shape (all optional unless noted):
 *  - items: Array<{ icon: ReactNode|string, label?: string, to?: string, href?: string, variant?: 'primary'|'neutral', trackId?: string, ariaLabel?: string }>
 *  - positioning: { topOffset?: number|string, align?: 'center'|'right', maxWidth?: number|string, mode?: 'sticky'|'fixed', navVar?: string, navFallback?: string, reserveSpace?: boolean }
 *  - behavior: { hideOnScrollDown?: boolean, collapseToFabOnMobile?: boolean, mobileBreakpoint?: number, respectRightDrawer?: boolean, rightDrawerWidthVar?: string }
 *  - theme: { elevation?: number, blur?: number, contrastMode?: 'auto'|'light'|'dark' }
 *  - visibility: { enabled?: boolean, includeRoutes?: string[]|null, excludeRoutes?: string[]|null }
 *  - i18n: { useI18n?: boolean }
 */

const StickyOptions = ({
  items = [],
  positioning = {},
  behavior = {
    hideOnScrollDown: false,      // never hide on scroll
    iconOnlyOnMobile: false,      // keep text visible on mobile
    mobileBreakpoint: 768,
    respectRightDrawer: true      // offset for right drawer
  },
  theme: themeOpts = {},
  visibility = {},
  i18n: i18nOpts = {}
}) => {
  const muiTheme = useTheme?.() || {};
  const location = useLocation();
  // ---- Defaults
  const {
    topOffset = '1.68rem',   // default separation from navbar
    align = 'center',
    maxWidth = 800,
    mode = 'sticky',         // 'sticky' | 'fixed'
    navVar = '--nav-height', // CSS var name to use
    navFallback = '42px',    // fallback if CSS var is not set
    reserveSpace = false     // when true, push content down by menu height + offset
  } = positioning;

  const {
    hideOnScrollDown = false,
    collapseToFabOnMobile = false, // backward-compat
    iconOnlyOnMobile = false,
    mobileBreakpoint = 768,
    respectRightDrawer = false,
    rightDrawerWidthVar = '--right-drawer-width',
    hideThreshold = 36,   // px scrolled down before hiding
    showThreshold = 12,   // px scrolled up before showing again
    topGuard = 20         // do not hide near top of page
  } = behavior;

  const iconsOnly = (typeof iconOnlyOnMobile === 'boolean') ? iconOnlyOnMobile : collapseToFabOnMobile;

  const {
    elevation = 28,
    blur = 9,
    contrastMode = 'auto'
  } = themeOpts;

  const {
    enabled = true,
    includeRoutes = null,
    excludeRoutes = null
  } = visibility;

  const { useI18n = false, t: tFn } = i18nOpts;

  // ---- Translate helper
  const translate = (useI18n && typeof tFn === 'function') ? tFn : (s) => s;

  // ---- Spacer measurement (optional content push)
  const groupElRef = useRef(null);
  const [groupHeight, setGroupHeight] = useState(0);

  useEffect(() => {
    if (!reserveSpace) return;
    const el = groupElRef.current;
    if (!el) return;
    const update = () => {
      try { setGroupHeight(el.getBoundingClientRect().height || 0); } catch {}
    };
    update();
    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => update());
      ro.observe(el);
    }
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
      if (ro) try { ro.disconnect(); } catch {}
    };
  }, [reserveSpace]);

  const topOffsetCSS = typeof topOffset === 'number' ? `${topOffset}px` : String(topOffset);
  const topCSS = `calc(var(${navVar}, ${navFallback}) + ${topOffsetCSS})`;
  const spacerStyle = reserveSpace ? { height: `calc(${topOffsetCSS} + ${groupHeight}px)` } : null;

  // ---- Route-based visibility
  const isRouteIncluded = useMemo(() => {
    if (!enabled) return false;
    const path = location?.pathname || '';
    if (excludeRoutes && excludeRoutes.some((r) => path.startsWith(r))) return false;
    if (includeRoutes && includeRoutes.length > 0) return includeRoutes.some((r) => path.startsWith(r));
    return true;
  }, [enabled, includeRoutes, excludeRoutes, location?.pathname]);

  // ---- Scroll hide behavior (with hysteresis)
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const acc = useRef(0);
  const raf = useRef(null);

  useEffect(() => {
    if (!hideOnScrollDown) return;

    const onScroll = () => {
      if (raf.current) return; // throttle to rAF
      raf.current = requestAnimationFrame(() => {
        const y = window.scrollY;
        const dy = y - lastY.current;
        lastY.current = y;

        // Guard: don't hide near very top
        if (y <= topGuard) {
          acc.current = 0;
          setHidden(false);
          raf.current = null;
          return;
        }

        // Accumulate deltas; reset when direction changes
        if ((dy > 0 && acc.current < 0) || (dy < 0 && acc.current > 0)) acc.current = 0;
        acc.current += dy;

        if (acc.current > hideThreshold && !hidden) {
          setHidden(true);
          acc.current = 0; // reset after state change
        } else if (acc.current < -showThreshold && hidden) {
          setHidden(false);
          acc.current = 0; // reset after state change
        }
        raf.current = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [hideOnScrollDown, hideThreshold, showThreshold, topGuard, hidden]);

  // ---- Right drawer inset (CSS var)
  const rightInset = useMemo(() => {
    if (!respectRightDrawer || typeof window === 'undefined') return 0;
    const v = getComputedStyle(document.documentElement).getPropertyValue(rightDrawerWidthVar).trim();
    const num = parseInt(v || '0', 10);
    return Number.isNaN(num) ? 0 : num;
  }, [respectRightDrawer, rightDrawerWidthVar]);

  // ---- Colors from MUI theme with safe fallbacks
  const colors = useMemo(() => {
    const mode = muiTheme?.palette?.mode || 'dark';
    const linkMain = muiTheme?.palette?.link?.main || 'rgb(0, 170, 150)';
    const bgPaper = muiTheme?.palette?.background?.paper || (mode === 'dark' ? 'rgb(24,26,28)' : '#ffffff');
    const bg = mode === 'dark' ? 'rgba(24,26,28,0.65)' : 'rgba(255,255,255,0.8)';
    const border = muiTheme?.custom?.border || (mode === 'dark' ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.1)');
    const neutralBg = mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)';
    const neutralBorder = mode === 'dark' ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.08)';
    const text = muiTheme?.palette?.text?.primary || (mode === 'dark' ? '#fff' : '#111');
    return { linkMain, bgPaper, bg, border, neutralBg, neutralBorder, text, mode };
  }, [muiTheme]);

  // ---- Collapse to FAB on mobile
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < mobileBreakpoint : false));
  useEffect(() => {
    if (!iconsOnly) return;
    const onResize = () => setIsMobile(window.innerWidth < mobileBreakpoint);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [iconsOnly, mobileBreakpoint]);

  // ---- Tracking helper
  const trackClick = (trackId, label) => {
    try {
      window.dispatchEvent(new CustomEvent('stickyoptions:click', { detail: { trackId, label } }));
    } catch {/* no-op */}
  };

  if (!isRouteIncluded) return null;

  // ---- Render item (Link or anchor)
  const renderItem = (item, i) => {
    const { icon, label, to, href, variant = 'neutral', trackId, ariaLabel } = item || {};
    const isPrimary = variant === 'primary';
    const commonStyle = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 12px',
      borderRadius: 999,
      minWidth: 160,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      justifyContent: 'center',
      fontWeight: 800,
      textDecoration: 'none',
      border: isPrimary ? '1px solid transparent' : `1px solid ${colors.neutralBorder}`,
      background: isPrimary ? 'rgba(0, 170, 150, 0.12)' : colors.neutralBg,
      color: isPrimary ? colors.linkMain : colors.text
    };

    const content = (
      <>
        {icon ? <span style={{ display: 'inline-flex', marginRight: 6 }}>{icon}</span> : null}
        {useI18n ? translate(label || '') : (label || '')}
      </>
    );

    if (to) {
      return (
        <RouterLink
          key={i}
          to={to}
          aria-label={ariaLabel || label}
          onClick={() => trackClick(trackId, label)}
          style={commonStyle}
        >
          {content}
        </RouterLink>
      );
    }
    if (href) {
      const external = /^https?:\/\//i.test(href);
      return (
        <a
          key={i}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={ariaLabel || label}
          onClick={() => trackClick(trackId, label)}
          style={commonStyle}
        >
          {content}
        </a>
      );
    }
    return (
      <span key={i} aria-label={ariaLabel || label} style={commonStyle}>
        {content}
      </span>
    );
  };

  // ---- Layout wrappers
  const wrapperStyle = {
    position: mode === 'fixed' ? 'fixed' : 'sticky',
    top: topCSS,
    left: mode === 'fixed' ? 0 : undefined,
    right: mode === 'fixed' ? 0 : undefined,
    zIndex: 1300,
    transition: 'transform 180ms ease, opacity 180ms ease',
    transform: hidden ? 'translateY(-8px)' : 'translateY(0)',
    opacity: hidden ? 0 : 1,
    pointerEvents: 'none',
    width: '100%',
    marginBottom: '56px'
  };

  const innerWrapStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '100%'
  };

  const groupBase = {
    display: 'inline-flex',
    gap: 10,
    padding: '6px 10px',
    borderRadius: 999,
    background: colors.bg,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    border: `1px solid ${colors.border}`,
    boxShadow: `0 ${Math.round(elevation/3)}px ${elevation}px rgba(0,0,0,0.35)`,
    whiteSpace: 'nowrap',
    pointerEvents: 'auto'
  };

  // Position group: center or right (with optional right drawer inset)
  const groupStyle = align === 'right'
    ? {
        ...groupBase,
        position: 'absolute',
        right: (rightInset || 0) + 16,
        maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth
      }
    : {
        ...groupBase,
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth
      };

  // Collapse: icon-only FABs on mobile
  if (iconsOnly && isMobile) {
    const fabWrapStyle = align === 'right'
      ? { position: 'absolute', right: (rightInset || 0) + 16, display: 'flex', gap: 8 }
      : { position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8 };

    return (
      <>
        {reserveSpace && <div style={spacerStyle} />}
        <div style={wrapperStyle}>
          <div style={innerWrapStyle}>
            <div style={fabWrapStyle} ref={groupElRef}>
              {items.slice(0, 3).map((item, i) => {
                const isPrimary = (item?.variant || 'neutral') === 'primary';
                const style = {
                  width: 42,
                  height: 42,
                  borderRadius: 999,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  border: isPrimary ? '1px solid transparent' : `1px solid ${colors.neutralBorder}`,
                  background: isPrimary ? 'rgba(0, 170, 150, 0.12)' : colors.neutralBg,
                  color: isPrimary ? colors.linkMain : colors.text
                };
                const aria = item?.ariaLabel || item?.label;
                if (item?.to) {
                  return (
                    <RouterLink key={i} to={item.to} aria-label={aria} onClick={() => trackClick(item?.trackId, item?.label)} style={style}>
                      {item?.icon}
                    </RouterLink>
                  );
                }
                if (item?.href) {
                  const external = /^https?:\/\//i.test(item.href);
                  return (
                    <a key={i} href={item.href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} aria-label={aria} onClick={() => trackClick(item?.trackId, item?.label)} style={style}>
                      {item?.icon}
                    </a>
                  );
                }
                return <span key={i} aria-label={aria} style={style}>{item?.icon}</span>;
              })}
            </div>
          </div>
        </div>
      </>
    );
  }

  // Default full pill rendering
  return (
    <>
      {reserveSpace && <div style={spacerStyle} />}
      <div style={wrapperStyle}>
        <div style={innerWrapStyle}>
          <div style={groupStyle} ref={groupElRef}>
            {items.map((item, i) => renderItem(item, i))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyOptions;
