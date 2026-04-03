function normalizeGuiRoute(route) {
  const value = String(route ?? "").trim();
  if (!value || value === "/") return "/";
  return value.startsWith("/") ? value : `/${value}`;
}

function joinBasePath(basePath, route) {
  const normalizedBase = String(basePath ?? "").trim().replace(/\/+$/, "");
  const normalizedRoute = normalizeGuiRoute(route);
  if (!normalizedBase || normalizedBase === "/") return normalizedRoute;
  return normalizedRoute === "/" ? `${normalizedBase}/` : `${normalizedBase}${normalizedRoute}`;
}

export function detectGuiBasePath() {
  if (typeof window === "undefined") return "/this/GUI";

  try {
    const segments = window.location.pathname.split("/").filter(Boolean);
    const guiIndex = segments.findIndex(function (segment, index) {
      return segment === "this" && segments[index + 1] === "GUI";
    });

    if (guiIndex >= 0) {
      return "/" + segments.slice(0, guiIndex + 2).join("/");
    }
  } catch {}

  return "/this/GUI";
}

export function hrefForGuiRoute(route) {
  const normalizedRoute = normalizeGuiRoute(route);
  const router = typeof window !== "undefined" ? window.__GUI_APP_ROUTER__ : null;
  if (router && typeof router.href === "function") {
    return router.href(normalizedRoute);
  }

  return joinBasePath(detectGuiBasePath(), normalizedRoute);
}

export function navigateToGuiRoute(route, event) {
  if (event && typeof event.preventDefault === "function") {
    event.preventDefault();
  }

  const normalizedRoute = normalizeGuiRoute(route);
  const router = typeof window !== "undefined" ? window.__GUI_APP_ROUTER__ : null;
  if (router && typeof router.go === "function") {
    return router.go(normalizedRoute);
  }

  if (typeof window !== "undefined") {
    window.location.assign(hrefForGuiRoute(normalizedRoute));
  }

  return Promise.resolve(null);
}
