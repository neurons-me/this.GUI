import React, { useEffect, useMemo, useState } from "react";
import Layout from "@/gui/Layout/Layout";
import { Box, IconButton, Typography } from "@/gui/Atoms";
import Modal from "@/gui/Molecules/Modal/Modal";
import Icon from "@/gui/Atoms/Icon/Icon";
import { ThemesCatalog } from "@/gui/Theme";
import Cleaker from "./Cleaker";
import Blockchain from "./Blockchain/blockchain";
import CleakerGroup from "./Group/CleakerGroup";
import CleakerUser from "./User/CleakerUser";
import {
  buildSemanticTarget,
  createCleakerKernelContext,
  readKernelBranch,
  resolveSemanticBranch,
  type CleakerKernelContext,
} from "./cleakerKernel";
import { readCleakerBootstrap, SESSION_CREDENTIALS_EVENT } from "./runtimeUsername";
import { resolveSemanticRootName } from "./surfaceModel";
import {
  applyThemeScope,
  compactNamespaceDisplay,
  getThemeScope,
  normalizeEndpoint,
  readCleakerNamespacePreview,
  readRouteFromHash,
  readScopedThemeSelection,
  readSessionUsername,
  resolveRoute,
  writeRouteHash,
  type CleakerResolvedRoute,
  type CleakerNamespacePreview,
} from "./cleakerBridge";

export interface CleakerComposerProps {
  endpoint?: string;
  namespaceExpression?: string;
}

type SemanticPageBranch = {
  route?: string;
  title?: string;
  component?: string;
  sections?: string[];
};

type SemanticSectionBranch = {
  title?: string;
  view?: string;
  source?: string;
  order?: number;
};

type SemanticSlotItem = {
  label?: string;
  icon?: string;
  route?: string;
  order?: number;
};

type SemanticSlotBranch = {
  sticky?: boolean;
  collapsed?: boolean;
  nav?: Record<string, SemanticSlotItem>;
  context?: Record<string, SemanticSlotItem>;
  action?: Record<string, SemanticSlotItem>;
};

type LoadedGuiState = {
  left: SemanticSlotBranch | null;
  right: SemanticSlotBranch | null;
  footer: SemanticSlotBranch | null;
  page: SemanticPageBranch | null;
  sections: Record<string, SemanticSectionBranch>;
};

type GuiSemanticHealth = {
  left: boolean;
  right: boolean;
  footer: boolean;
  page: boolean;
  sectionsCount: number;
};

function describeGuiHealth(health: GuiSemanticHealth): string {
  const missing: string[] = [];
  if (!health.left) missing.push("gui.left");
  if (!health.right) missing.push("gui.right");
  if (!health.footer) missing.push("gui.footer");
  if (!health.page) missing.push("gui.page.*");
  if (health.sectionsCount === 0) missing.push("gui.section");

  if (missing.length === 0) {
    return "All core gui.* branches resolved inside the current runtime.";
  }

  return `Current observation: missing ${missing.join(", ")} inside the current runtime.`;
}

function toSortedEntries<T extends { order?: number }>(
  value: Record<string, T> | null | undefined,
): Array<[string, T]> {
  return Object.entries(value || {}).sort((a, b) => {
    const orderA = Number(a[1]?.order ?? Number.MAX_SAFE_INTEGER);
    const orderB = Number(b[1]?.order ?? Number.MAX_SAFE_INTEGER);
    if (orderA !== orderB) return orderA - orderB;
    return a[0].localeCompare(b[0]);
  });
}

function getRouteSubjectHandle(route: CleakerResolvedRoute, rootNamespace: string): string {
  if (!route.username || !rootNamespace) return "";
  return `${route.username}.${rootNamespace}`;
}

function scrollToSection(sectionKey: string): void {
  if (typeof document === "undefined") return;
  const id = `cleaker-section-${sectionKey}`;
  const node = document.getElementById(id);
  if (!node || typeof node.scrollIntoView !== "function") return;
  node.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildFooterThemeAction(label: string, icon: string) {
  function FooterThemeCatalogAction() {
    const [open, setOpen] = useState(false);
    const [version, setVersion] = useState(0);

    useEffect(() => {
      const rerender = () => setVersion((value) => value + 1);
      window.addEventListener("this.gui:themeId:changed", rerender);
      window.addEventListener("this.gui:themeMode:changed", rerender);
      window.addEventListener("this.gui:themeScope:changed", rerender);
      window.addEventListener(SESSION_CREDENTIALS_EVENT, rerender);
      window.addEventListener("storage", rerender);
      return () => {
        window.removeEventListener("this.gui:themeId:changed", rerender);
        window.removeEventListener("this.gui:themeMode:changed", rerender);
        window.removeEventListener("this.gui:themeScope:changed", rerender);
        window.removeEventListener(SESSION_CREDENTIALS_EVENT, rerender);
        window.removeEventListener("storage", rerender);
      };
    }, []);

    const themeSelection = readScopedThemeSelection();
    const scopeLabel = themeSelection.scopeId.startsWith("user:")
      ? "User Theme"
      : "Root Theme";

    return (
      <>
        <IconButton
          key={`footer-theme-trigger-${version}`}
          aria-label={`${label} · ${themeSelection.themeId}`}
          title={`${scopeLabel} · ${themeSelection.themeId} · ${themeSelection.mode}`}
          onClick={() => setOpen(true)}
          size="small"
          sx={{
            color: "primary.main",
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
            "&:hover": {
              bgcolor: "background.nav",
              borderColor: "primary.main",
            },
          }}
        >
          <Icon name={icon || "palette"} fontSize={18} />
        </IconButton>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={label || "Theme Catalog"}
          width={920}
          height="auto"
          blurBackground
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.35, pb: 0.5 }}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {scopeLabel}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "monospace", color: "text.primary" }}
              >
                {`${themeSelection.themeId} · ${themeSelection.mode}`}
              </Typography>
            </Box>
            <Box sx={{ maxHeight: "72vh", overflowY: "auto", pr: 0.5 }}>
              <ThemesCatalog variant="grid" compact />
            </Box>
          </Box>
        </Modal>
      </>
    );
  }

  return <FooterThemeCatalogAction />;
}

export default function CleakerComposer({
  endpoint = "",
  namespaceExpression = "",
}: CleakerComposerProps) {
  const [preview, setPreview] = useState<CleakerNamespacePreview>(() =>
    readCleakerNamespacePreview(namespaceExpression, endpoint),
  );
  const [route, setRoute] = useState<CleakerResolvedRoute>(() =>
    resolveRoute(readRouteFromHash()),
  );
  const [bootstrap, setBootstrap] = useState<Awaited<ReturnType<typeof readCleakerBootstrap>>>(null);
  const [kernelContext, setKernelContext] = useState<CleakerKernelContext | null>(null);
  const [guiState, setGuiState] = useState<LoadedGuiState>({
    left: null,
    right: null,
    footer: null,
    page: null,
    sections: {},
  });
  const [guiHealth, setGuiHealth] = useState<GuiSemanticHealth>({
    left: false,
    right: false,
    footer: false,
    page: false,
    sectionsCount: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const syncPreview = () => {
      setPreview(readCleakerNamespacePreview(namespaceExpression, endpoint));
    };

    const syncRouteState = () => {
      setRoute(resolveRoute(readRouteFromHash()));
    };

    syncPreview();
    syncRouteState();

    const handleStorage = (event: Event) => {
      const maybeStorage = event as StorageEvent;
      const key = String(maybeStorage?.key || "");
      if (!key || key === "cleaker.namespace.v1" || key === "cleaker.session.username.v1") {
        syncPreview();
      }
    };

    window.addEventListener("hashchange", syncRouteState);
    window.addEventListener("storage", handleStorage as EventListener);
    window.addEventListener(SESSION_CREDENTIALS_EVENT, syncPreview);

    return () => {
      window.removeEventListener("hashchange", syncRouteState);
      window.removeEventListener("storage", handleStorage as EventListener);
      window.removeEventListener(SESSION_CREDENTIALS_EVENT, syncPreview);
    };
  }, [endpoint, namespaceExpression]);

  const safeEndpoint = useMemo(
    () => normalizeEndpoint(preview.endpoint || endpoint),
    [endpoint, preview.endpoint],
  );

  useEffect(() => {
    if (!safeEndpoint) {
      setBootstrap(null);
      return;
    }

    let cancelled = false;
    const controller = typeof AbortController !== "undefined" ? new AbortController() : null;

    (async () => {
      const payload = await readCleakerBootstrap(safeEndpoint, controller?.signal);
      if (!cancelled) {
        setBootstrap(payload);
      }
    })();

    return () => {
      cancelled = true;
      controller?.abort();
    };
  }, [safeEndpoint]);

  const rootNamespace = useMemo(() => {
    return (
      resolveSemanticRootName({
        namespaceHandle: preview.namespaceHandle,
        resolverHostName: bootstrap?.resolverHostName || "",
        rootHostNamespace: bootstrap?.surfaceEntry?.rootName || "",
      }) ||
      compactNamespaceDisplay(preview.namespaceHandle || "cleaker.me") ||
      "cleaker.me"
    );
  }, [bootstrap?.resolverHostName, bootstrap?.surfaceEntry?.rootName, preview.namespaceHandle]);

  const subjectHandle = useMemo(() => {
    return (
      getRouteSubjectHandle(route, rootNamespace) ||
      getRouteSubjectHandle(
        {
          ...route,
          username: readSessionUsername(),
        },
        rootNamespace,
      )
    );
  }, [rootNamespace, route]);

  useEffect(() => {
    applyThemeScope(
      getThemeScope({
        rootNamespace,
        subjectHandle,
      }),
    );
  }, [rootNamespace, subjectHandle]);

  useEffect(() => {
    if (!safeEndpoint || !rootNamespace) {
      setKernelContext(null);
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        const nextKernel = await createCleakerKernelContext({
          endpoint: safeEndpoint,
          rootNamespace,
        });
        if (!cancelled) {
          setKernelContext(nextKernel);
        }
      } catch (kernelError: unknown) {
        if (!cancelled) {
          const message =
            kernelError instanceof Error
              ? kernelError.message
              : "Failed to initialize .me kernel";
          setKernelContext(null);
          setError(message);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [rootNamespace, safeEndpoint]);

  useEffect(() => {
    if (!kernelContext || !rootNamespace) {
      setGuiState({
        left: null,
        right: null,
        footer: null,
        page: null,
        sections: {},
      });
      setGuiHealth({
        left: false,
        right: false,
        footer: false,
        page: false,
        sectionsCount: 0,
      });
      return;
    }

    let cancelled = false;
    const activeKernel = kernelContext;

    async function load(): Promise<void> {
      setLoading(true);
      setError(null);

      try {
        await Promise.all([
          resolveSemanticBranch(
            activeKernel,
            buildSemanticTarget(rootNamespace, "gui.left"),
          ),
          resolveSemanticBranch(
            activeKernel,
            buildSemanticTarget(rootNamespace, "gui.right"),
          ),
          resolveSemanticBranch(
            activeKernel,
            buildSemanticTarget(rootNamespace, "gui.footer"),
          ),
          resolveSemanticBranch(
            activeKernel,
            buildSemanticTarget(rootNamespace, `gui.page.${route.pageKey}`),
          ),
          resolveSemanticBranch(
            activeKernel,
            buildSemanticTarget(rootNamespace, "gui.section"),
          ),
        ]);

        if (cancelled) return;
        const leftValue = readKernelBranch(activeKernel.runtime, "gui.left");
        const rightValue = readKernelBranch(activeKernel.runtime, "gui.right");
        const footerValue = readKernelBranch(activeKernel.runtime, "gui.footer");
        const pageValue = readKernelBranch(activeKernel.runtime, `gui.page.${route.pageKey}`);
        const sectionsValue = readKernelBranch(activeKernel.runtime, "gui.section");
        const nextHealth = {
          left: !!leftValue && typeof leftValue === "object",
          right: !!rightValue && typeof rightValue === "object",
          footer: !!footerValue && typeof footerValue === "object",
          page: !!pageValue && typeof pageValue === "object",
          sectionsCount:
            sectionsValue && typeof sectionsValue === "object"
              ? Object.keys(sectionsValue as Record<string, unknown>).length
              : 0,
        } satisfies GuiSemanticHealth;

        setGuiHealth(nextHealth);
        setGuiState({
          left: leftValue && typeof leftValue === "object" ? (leftValue as SemanticSlotBranch) : null,
          right:
            rightValue && typeof rightValue === "object" ? (rightValue as SemanticSlotBranch) : null,
          footer:
            footerValue && typeof footerValue === "object"
              ? (footerValue as SemanticSlotBranch)
              : null,
          page:
            pageValue && typeof pageValue === "object" ? (pageValue as SemanticPageBranch) : null,
          sections:
            sectionsValue && typeof sectionsValue === "object"
              ? (sectionsValue as Record<string, SemanticSectionBranch>)
              : {},
        });

        if (!nextHealth.page || !nextHealth.left || !nextHealth.footer) {
          setError(
            `GUI semantic mismatch in ${rootNamespace}: left=${nextHealth.left} right=${nextHealth.right} footer=${nextHealth.footer} page=${nextHealth.page} sections=${nextHealth.sectionsCount}`,
          );
          return;
        }
      } catch (loadError: unknown) {
        if (cancelled) return;
        const message =
          loadError instanceof Error ? loadError.message : "Failed to load gui.* semantics";
        setError(message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, [kernelContext, rootNamespace, route.pageKey]);

  const leftBar = useMemo(() => {
    const navEntries = toSortedEntries(guiState.left?.nav);
    return {
      initialView: guiState.left?.collapsed ? "rail" : "expanded",
      elements: navEntries.map(([key, item]) => {
        const targetRoute = String(item.route || "").trim() || "/";
        const active =
          route.path === targetRoute ||
          (key === "groups" && route.pageKey === "group") ||
          (key === "home" && route.pageKey === "home") ||
          (key === "chain" && route.pageKey === "blockchain");
        return {
          type: "action" as const,
          props: {
            label: item.label || key,
            icon: item.icon || "chevron_right",
            active,
            onClick: () => writeRouteHash(targetRoute),
          },
        };
      }),
      footerElements: [],
    };
  }, [guiState.left?.collapsed, guiState.left?.nav, route.pageKey, route.path]);

  const availableSectionKeys = useMemo(() => {
    const pageSections = Array.isArray(guiState.page?.sections)
      ? guiState.page?.sections || []
      : [];
    return pageSections.filter((key) => guiState.sections[key]);
  }, [guiState.page?.sections, guiState.sections]);

  const rightBar = useMemo(() => {
    const contextEntries = toSortedEntries(guiState.right?.context).filter(([key]) =>
      availableSectionKeys.includes(key),
    );
    return {
      initialView: guiState.right?.collapsed ? "rail" : "expanded",
      elements: contextEntries.map(([key, item]) => ({
        type: "action" as const,
        props: {
          label: item.label || key,
          icon: item.icon || "chevron_right",
          active: false,
          onClick: () => scrollToSection(key),
        },
      })),
    };
  }, [availableSectionKeys, guiState.right?.collapsed, guiState.right?.context]);

  const footer = useMemo(() => {
    const footerContext = guiState.footer?.context || {};
    const footerAction = guiState.footer?.action || {};
    const centerElements: Array<{
      type: "link";
      props: { label: string; icon?: string; href?: string };
    }> = [];

    if (footerContext.namespace) {
      centerElements.push({
        type: "link",
        props: {
          label: compactNamespaceDisplay(rootNamespace) || rootNamespace,
          icon: footerContext.namespace.icon || "language",
          href: "#/",
        },
      });
    }

    if (footerContext.group && route.groupKey) {
      centerElements.push({
        type: "link",
        props: {
          label: `groups.${route.groupKey}`,
          icon: footerContext.group.icon || "groups",
          href: `#/groups/${route.groupKey}`,
        },
      });
    }

    if (footerContext.user && route.username) {
      centerElements.push({
        type: "link",
        props: {
          label: `@${route.username}`,
          icon: footerContext.user.icon || "alternate_email",
          href: `#/@${route.username}`,
        },
      });
    }

    const rightElements = toSortedEntries(footerAction).map(([key, item]) => {
      if (key === "theme") {
        return {
          type: "action" as const,
          props: {
            label: item.label || "Theme Catalog",
            element: buildFooterThemeAction(
              item.label || "Theme Catalog",
              item.icon || "palette",
            ),
          },
        };
      }

      return {
        type: "action" as const,
        props: {
          label: item.label || key,
          icon: item.icon || "chevron_right",
        },
      };
    });

    return {
      brandLabel: compactNamespaceDisplay(rootNamespace) || rootNamespace,
      brandHref: "#/",
      centerElements,
      rightElements,
      position: "static" as const,
    };
  }, [guiState.footer?.action, guiState.footer?.context, rootNamespace, route.groupKey, route.username]);

  const missingCoreGuiSemantics =
    !loading &&
    !!kernelContext &&
    (!guiHealth.left || !guiHealth.footer || !guiHealth.page);

  const content = useMemo(() => {
    const commonNamespaceProps = {
      endpoint: safeEndpoint,
      namespaceExpression: preview.namespaceExpression,
      namespaceHandle: rootNamespace,
      rootHostNamespace: rootNamespace,
      resolverHostName: bootstrap?.resolverHostName || rootNamespace,
      namespaceUrl: preview.namespaceUrl,
    };

    switch (guiState.page?.component) {
      case "Blockchain":
        return (
          <Blockchain
            {...commonNamespaceProps}
            defaultTab="details"
          />
        );
      case "CleakerGroup":
        return (
          <CleakerGroup
            {...commonNamespaceProps}
            groupKey={route.groupKey}
            kernel={kernelContext}
          />
        );
      case "CleakerUser":
        return (
          <CleakerUser
            endpoint={safeEndpoint}
            username={route.username}
            rootNamespace={rootNamespace}
            kernel={kernelContext}
          />
        );
      case "Cleaker":
        return (
          <Cleaker
            namespace={preview.namespaceExpression}
            namespaceOrigin={safeEndpoint}
          />
        );
      default:
        if (missingCoreGuiSemantics) {
          return (
            <Box
              sx={{
                px: { xs: 2, md: 3 },
                py: 2.5,
                maxWidth: 980,
                mx: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 1.25,
              }}
            >
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "warning.main",
                  bgcolor: "background.default",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.8,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 800 }}>
                  GUI semantic mismatch
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  This panel is a temporary Cleaker diagnostic. It is not a kernel-authored
                  explanation; it only reports which `gui.*` branches resolved inside the current
                  runtime and which did not.
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: "monospace", color: "text.primary" }}>
                  {`endpoint=${safeEndpoint} root=${rootNamespace} route=${route.pageKey}`}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: "monospace", color: "text.primary" }}>
                  {`left=${guiHealth.left} right=${guiHealth.right} footer=${guiHealth.footer} page=${guiHealth.page} sections=${guiHealth.sectionsCount}`}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {describeGuiHealth(guiHealth)}
                </Typography>
              </Box>
            </Box>
          );
        }
        return (
          <Cleaker
            namespace={preview.namespaceExpression}
            namespaceOrigin={safeEndpoint}
          />
        );
    }
  }, [
    bootstrap?.resolverHostName,
    guiState.page?.component,
    preview.namespaceExpression,
    preview.namespaceUrl,
    rootNamespace,
    route.groupKey,
    route.pageKey,
    route.username,
    safeEndpoint,
    missingCoreGuiSemantics,
    guiHealth.footer,
    guiHealth.left,
    guiHealth.page,
    guiHealth.right,
    guiHealth.sectionsCount,
  ]);

  return (
    <Layout leftBar={leftBar} rightBar={rightBar} footer={footer}>
      <>
        {loading || error ? (
          <Box
            sx={{
              px: { xs: 2, md: 3 },
              pt: 2,
              pb: 0,
              display: "flex",
              gap: 1,
              alignItems: "center",
              color: "text.secondary",
            }}
          >
            {loading ? <Typography variant="body2">Loading gui.* semantics…</Typography> : null}
            {error ? (
              <Typography variant="body2" sx={{ color: "warning.main" }}>
                {error}
              </Typography>
            ) : null}
          </Box>
        ) : null}
        {content}
      </>
    </Layout>
  );
}
