export const buildGuiLeftBar = (function () {
  const DOM_ICON_GRID = [
    "#####....####...##..#..##",
    "##..##..##..##..###.#.###",
    "##...#..#....#..##.###.##",
    "##...#..#....#..##..#..##",
    "##...#..#....#..##.....##",
    "##...#..#....#..##.....##",
    "##...#..#....#..##.....##",
    "##..##..##..##..##.....##",
    "#####....####...##.....##",
  ];

  let leftbarResizeObserver = null;
  let leftbarObserverTarget = null;

  function ensureLeftBarStyles() {
    if (document.getElementById("gui-leftbar-styles")) return;

    const style = document.createElement("style");
    style.id = "gui-leftbar-styles";
    style.textContent = [
      ".gui-leftbar-logo { display:flex; align-items:center; gap:12px; width:100%; min-height:60px; justify-content:center; padding:6px 10px; text-decoration:none; color:inherit; box-sizing:border-box; }",
      ".gui-leftbar-logo-mark { display:block; flex:0 0 auto; }",
      ".gui-leftbar-logo-label { font-size:0.85rem; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; white-space:nowrap; }",
      ".gui-leftbar-rail .gui-leftbar-logo { justify-content:center; padding:6px 6px; }",
      ".gui-leftbar-rail .gui-leftbar-logo-label { display:none; }",
      ".gui-leftbar-expanded .gui-leftbar-logo { justify-content:flex-start; }",
      ".gui-leftbar-cleaker-qr { display:flex; align-items:center; gap:12px; width:100%; min-height:72px; justify-content:center; padding:6px 10px; box-sizing:border-box; color:inherit; overflow:hidden; text-decoration:none; cursor:pointer; transition:opacity 160ms ease; }",
      ".gui-leftbar-cleaker-qr:hover { opacity:0.92; }",
      ".gui-leftbar-cleaker-qr-canvas { display:inline-flex; flex:0 0 auto; align-items:center; justify-content:center; line-height:0; min-width:0; }",
      ".gui-leftbar-cleaker-qr [data-gui-component=\"Cleaker\"] { width:auto !important; display:flex !important; justify-content:center; }",
      ".gui-leftbar-cleaker-qr [data-gui-component=\"Cleaker.Card\"] { width:auto !important; max-width:none !important; padding:0 !important; border:none !important; background:transparent !important; box-shadow:none !important; }",
      ".gui-leftbar-cleaker-qr [data-gui-component=\"Cleaker.Header\"] { gap:0 !important; margin-bottom:0 !important; justify-content:center !important; }",
      ".gui-leftbar-cleaker-qr [data-gui-component=\"Cleaker.IdentityShell\"], .gui-leftbar-cleaker-qr [data-gui-component=\"Cleaker.ClaimState\"], .gui-leftbar-cleaker-qr [data-gui-component=\"Cleaker.Controls\"] { display:none !important; }",
      ".gui-leftbar-cleaker-qr [data-gui-component=\"Cleaker.AvatarQR\"] { width:58px !important; height:58px !important; min-width:58px !important; min-height:58px !important; cursor:default !important; pointer-events:none; transition:none !important; }",
      ".gui-leftbar-cleaker-qr [data-gui-component=\"Cleaker.AvatarQR\"] svg { width:58px !important; height:58px !important; }",
      ".gui-leftbar-cleaker-qr-label { font-size:0.78rem; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; white-space:nowrap; opacity:0.88; }",
      ".gui-leftbar-rail .gui-leftbar-cleaker-qr { justify-content:center; padding:6px 4px; }",
      ".gui-leftbar-rail .gui-leftbar-cleaker-qr-label { display:none; }",
      ".gui-leftbar-expanded .gui-leftbar-cleaker-qr { justify-content:flex-start; }",
      ".gui-leftbar-footer-logo { display:flex; align-items:center; justify-content:center; width:100%; min-height:44px; text-decoration:none; color:inherit; box-sizing:border-box; opacity:0.72; transition:opacity 160ms ease; }",
      ".gui-leftbar-footer-logo:hover { opacity:1; }",
    ].join("\n");

    document.head.appendChild(style);
  }

  function setLeftbarViewClass(view) {
    const root = document.documentElement;
    const isRail = view === "rail";
    root.classList.toggle("gui-leftbar-rail", isRail);
    root.classList.toggle("gui-leftbar-expanded", !isRail);
  }

  function inferLeftbarView(sidebar) {
    if (!sidebar) return "expanded";
    const width = Math.max(0, sidebar.getBoundingClientRect().width || 0);
    return width >= 120 ? "expanded" : "rail";
  }

  function attachLeftbarObserver() {
    const sidebar = document.querySelector(".LeftSidebar");
    if (!sidebar) {
      if (leftbarResizeObserver) {
        leftbarResizeObserver.disconnect();
        leftbarResizeObserver = null;
      }
      leftbarObserverTarget = null;
      setLeftbarViewClass("expanded");
      return;
    }

    if (sidebar === leftbarObserverTarget) return;
    leftbarObserverTarget = sidebar;

    if (leftbarResizeObserver) leftbarResizeObserver.disconnect();
    if (typeof ResizeObserver === "undefined") {
      setLeftbarViewClass(inferLeftbarView(sidebar));
      return;
    }

    leftbarResizeObserver = new ResizeObserver(function () {
      setLeftbarViewClass(inferLeftbarView(sidebar));
    });
    leftbarResizeObserver.observe(sidebar);
    setLeftbarViewClass(inferLeftbarView(sidebar));
  }

  function installLeftbarViewObserver() {
    if (window.__guiLeftbarViewObserverInstalled) {
      attachLeftbarObserver();
      return;
    }

    window.__guiLeftbarViewObserverInstalled = true;
    attachLeftbarObserver();

    if (typeof MutationObserver === "undefined") return;
    const observer = new MutationObserver(function () {
      attachLeftbarObserver();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function createDomIcon(React, options) {
    if (!React || typeof React.createElement !== "function") return null;

    const opts = options || {};
    const size = opts.size || 55;
    const title = opts.title || "DOM";
    const color =
      opts.color ||
      "var(--mui-palette-primary-main, var(--mui-palette-text-primary, #7bb0ff))";
    const cellSize = 12;
    const viewBoxWidth = DOM_ICON_GRID[0].length * cellSize;
    const viewBoxHeight = DOM_ICON_GRID.length * cellSize;
    const pixelRects = [];

    DOM_ICON_GRID.forEach(function (row, y) {
      row.split("").forEach(function (cell, x) {
        if (cell !== "#") return;
        pixelRects.push(
          React.createElement("rect", {
            key: "dom-" + x + "-" + y,
            x: x * cellSize,
            y: y * cellSize,
            width: cellSize,
            height: cellSize,
            fill: "currentColor",
            stroke: "currentColor",
            strokeOpacity: 0.14,
            strokeWidth: 1,
            vectorEffect: "non-scaling-stroke",
          })
        );
      });
    });

    return React.createElement(
      "svg",
      {
        viewBox: "0 0 " + viewBoxWidth + " " + viewBoxHeight,
        width: size,
        height: (size * viewBoxHeight) / viewBoxWidth,
        role: "img",
        "aria-label": title,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        preserveAspectRatio: "xMidYMid meet",
        className: "gui-leftbar-logo-mark",
        style: {
          display: "block",
          height: "auto",
          color: color,
        },
      },
      React.createElement("title", null, title),
      React.createElement("g", { shapeRendering: "crispEdges" }, pixelRects)
    );
  }

  function buildLeftBarLogo(React) {
    if (!React || typeof React.createElement !== "function") return null;
    return React.createElement(
      "a",
      {
        href: "https://neurons-me.github.io/GUI/",
        title: "GUI",
        "aria-label": "GUI",
        className: "gui-leftbar-logo",
      },
      React.createElement("img", {
        src: "https://res.cloudinary.com/dkwnxf6gm/image/upload/v1760629119/this.gui.neurons.me_mkapde.png",
        alt: "this.GUI",
        style: {
          width: "55px",
          height: "55px",
          objectFit: "contain",
          display: "block",
        },
      }),
      React.createElement("span", { className: "gui-leftbar-logo-label" }, "GUI")
    );
  }

  function buildLeftBarFooterLogo(React) {
    if (!React || typeof React.createElement !== "function") return null;
    return React.createElement(
      "a",
      {
        href: "https://neurons.me/",
        title: "neurons.me",
        "aria-label": "neurons.me",
        className: "gui-leftbar-footer-logo",
      },
      React.createElement("img", {
        src: "https://neurons.me/media/neurons-grey.png",
        alt: "neurons.me",
        style: {
          width: "49px",
          height: "49px",
          objectFit: "contain",
          display: "block",
        },
      })
    );
  }

  function buildLeftBarThemeToggle(React, GUI) {
    if (!React || !GUI || !GUI.ThemeModeToggle || typeof React.createElement !== "function") {
      return null;
    }

    return React.createElement(GUI.ThemeModeToggle, {
      variant: "minimal",
      show: "icons",
      iconSize: "small",
    });
  }

  function buildLeftBarCleakerQR(React, GUI) {
    if (!React || !GUI || !GUI.CleakerQR || typeof React.createElement !== "function") {
      return null;
    }

    const CleakerQR = GUI.CleakerQR;
    const SESSION_CREDENTIALS_EVENT = "cleaker:session:credentials-changed";
    const SESSION_USERNAME_STORAGE_KEY = "cleaker.session.username.v1";
    const SESSION_SECRET_STORAGE_KEY = "cleaker.session.secret.v1";

    function LeftBarCleakerQR() {
      const _useState = React.useState(0);
      const version = _useState[0];
      const setVersion = _useState[1];

      React.useEffect(function () {
        const rerender = function () {
          setVersion(function (value) {
            return value + 1;
          });
        };

        const handleStorage = function (event) {
          if (!event || !event.key) {
            rerender();
            return;
          }

          if (
            event.key === SESSION_USERNAME_STORAGE_KEY ||
            event.key === SESSION_SECRET_STORAGE_KEY
          ) {
            rerender();
          }
        };

        window.addEventListener(SESSION_CREDENTIALS_EVENT, rerender);
        window.addEventListener("storage", handleStorage);

        return function () {
          window.removeEventListener(SESSION_CREDENTIALS_EVENT, rerender);
          window.removeEventListener("storage", handleStorage);
        };
      }, []);

      return React.createElement(
        "a",
        {
          className: "gui-leftbar-cleaker-qr",
          href: "https://neurons-me.github.io/Cleaker",
          title: "Cleaker",
          "aria-label": "Cleaker",
        },
        React.createElement(
          "div",
          { className: "gui-leftbar-cleaker-qr-canvas" },
          React.createElement(CleakerQR, {
            key: "leftbar-cleaker-qr-" + version,
            variant: "icon",
            "data-gui-node-id": "LeftBarCleakerQR",
            "data-gui-component": "Cleaker.QR.Icon",
          })
        ),
        React.createElement(
          "span",
          { className: "gui-leftbar-cleaker-qr-label" },
          "ME"
        )
      );
    }

    return React.createElement(LeftBarCleakerQR);
  }

  return function buildGuiLeftBar() {
    const GUI = window.GUI;
    const React = window.React;
    const adminViewEnabled =
      GUI && typeof GUI.getAdminViewEnabled === "function"
        ? Boolean(GUI.getAdminViewEnabled())
        : false;
    const inspectorEnabled =
      GUI && typeof GUI.getInspectorEnabled === "function"
        ? Boolean(GUI.getInspectorEnabled())
        : false;
    const runtimeCollapsed = Boolean(document.body.classList.contains("runtime-collapsed"));

    ensureLeftBarStyles();
    window.setTimeout(installLeftbarViewObserver, 0);

    const leftBarLogo = buildLeftBarLogo(React);
    const leftBarFooterLogo = buildLeftBarFooterLogo(React);
    const leftBarThemeToggle = buildLeftBarThemeToggle(React, GUI);
    const leftBarCleakerQR = buildLeftBarCleakerQR(React, GUI);
    const domLogo =
      React && typeof React.createElement === "function"
        ? React.createElement(
            "a",
            {
              href: "https://neurons-me.github.io/this.DOM",
              title: "DOM",
              "aria-label": "DOM",
              className: "gui-leftbar-logo",
            },
            createDomIcon(React, { size: 55, title: "DOM" })
          )
        : null;

    return {
      initialView: "rail",
      elements: [
        leftBarLogo ? { type: "action", props: { element: leftBarLogo } } : null,
        leftBarCleakerQR ? { type: "action", props: { element: leftBarCleakerQR } } : null,
        domLogo ? { type: "action", props: { element: domLogo } } : null,
      ].filter(Boolean),
      footerElements: [
        leftBarThemeToggle
          ? { type: "action", props: { label: "Theme Mode", element: leftBarThemeToggle } }
          : null,
        {
          type: "menu",
          props: {
            label: "Settings",
            icon: "settings",
            items: [
              {
                label: adminViewEnabled ? "Admin View · ON" : "Admin View · OFF",
                icon: adminViewEnabled ? "visibility" : "visibility_off",
                onClick: function () {
                  if (typeof window.__guiToggleAdminView === "function") {
                    window.__guiToggleAdminView();
                  }
                },
              },
              {
                label: "Themes",
                icon: "palette",
                onClick: function () {
                  window.location.href = "./themes.html";
                },
              },
              {
                label: inspectorEnabled ? "Inspector · ON" : "Inspector · OFF",
                icon: inspectorEnabled ? "code" : "code_off",
                onClick: function () {
                  if (GUI && typeof GUI.toggleInspector === "function") {
                    GUI.toggleInspector();
                  }
                },
              },
              {
                label: runtimeCollapsed ? "Runtime Controls · Hidden" : "Runtime Controls · Visible",
                icon: runtimeCollapsed ? "unfold_more" : "unfold_less",
                onClick: function () {
                  if (typeof window.__guiToggleRuntimeControls === "function") {
                    window.__guiToggleRuntimeControls();
                  }
                },
              },
            ],
          },
        },
        leftBarFooterLogo ? { type: "action", props: { element: leftBarFooterLogo } } : null,
      ].filter(Boolean),
    };
  };
})();
