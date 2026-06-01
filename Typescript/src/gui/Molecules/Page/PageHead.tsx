import { useLayoutEffect, useRef } from 'react';
import type { PageHeadConfig, PageHeadLinkTag, PageHeadMetaTag } from './Page.types';

const HEAD_STATE_KEY = '__THIS_GUI_PAGE_HEAD_STATE__';

type SerializedTag = {
  tagName: 'meta' | 'link';
  attrs: Record<string, string>;
} | null;

type HeadPlan = {
  title?: string;
  metaEntries: Map<string, PageHeadMetaTag>;
  linkEntries: Map<string, PageHeadLinkTag>;
};

type HeadState = {
  baseTitle: string;
  order: string[];
  plans: Record<string, HeadPlan>;
  metaSnapshots: Record<string, SerializedTag | undefined>;
  linkSnapshots: Record<string, SerializedTag | undefined>;
  activeMetaNodes: Record<string, HTMLMetaElement | undefined>;
  activeLinkNodes: Record<string, HTMLLinkElement | undefined>;
};

function isBrowser() {
  return typeof document !== 'undefined';
}

function getHeadState(): HeadState | null {
  if (!isBrowser()) return null;
  const globalScope = globalThis as typeof globalThis & Record<string, HeadState | undefined>;
  if (!globalScope[HEAD_STATE_KEY]) {
    globalScope[HEAD_STATE_KEY] = {
      baseTitle: document.title,
      order: [],
      plans: {},
      metaSnapshots: {},
      linkSnapshots: {},
      activeMetaNodes: {},
      activeLinkNodes: {},
    };
  }
  return globalScope[HEAD_STATE_KEY] || null;
}

function cleanValue(value: unknown): string | undefined {
  if (value == null) return undefined;
  const trimmed = String(value).trim();
  return trimmed ? trimmed : undefined;
}

function hasOwn(obj: Record<string, unknown>, key: string) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function snapshotTag(node: Element | null): SerializedTag {
  if (!node) return null;
  const tagName = node.tagName.toLowerCase();
  if (tagName !== 'meta' && tagName !== 'link') return null;

  const attrs: Record<string, string> = {};
  Array.from(node.attributes).forEach((attr) => {
    attrs[attr.name] = attr.value;
  });

  return {
    tagName,
    attrs,
  };
}

function replaceAttributes(node: Element, attrs: Record<string, string>) {
  Array.from(node.attributes).forEach((attr) => {
    node.removeAttribute(attr.name);
  });
  Object.entries(attrs).forEach(([name, value]) => {
    node.setAttribute(name, value);
  });
}

function restoreTag(
  node: HTMLMetaElement | HTMLLinkElement | undefined,
  snapshot: SerializedTag,
  tagName: 'meta' | 'link'
) {
  if (!isBrowser()) return undefined;
  if (!snapshot) {
    node?.remove();
    return undefined;
  }

  const target = node || document.createElement(tagName);
  replaceAttributes(target, snapshot.attrs);
  if (!target.parentNode) {
    document.head.appendChild(target);
  }
  return target as HTMLMetaElement | HTMLLinkElement;
}

function escapeAttributeValue(value: string) {
  return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function metaIdentity(meta: PageHeadMetaTag): { key: string; selector: string } | null {
  const name = cleanValue(meta.name);
  if (name) return { key: `name:${name.toLowerCase()}`, selector: `meta[name="${escapeAttributeValue(name)}"]` };

  const property = cleanValue(meta.property);
  if (property) {
    return {
      key: `property:${property.toLowerCase()}`,
      selector: `meta[property="${escapeAttributeValue(property)}"]`,
    };
  }

  const httpEquiv = cleanValue(meta.httpEquiv);
  if (httpEquiv) {
    return {
      key: `http-equiv:${httpEquiv.toLowerCase()}`,
      selector: `meta[http-equiv="${escapeAttributeValue(httpEquiv)}"]`,
    };
  }

  const itemProp = cleanValue(meta.itemProp);
  if (itemProp) {
    return {
      key: `itemprop:${itemProp.toLowerCase()}`,
      selector: `meta[itemprop="${escapeAttributeValue(itemProp)}"]`,
    };
  }

  const charSet = cleanValue(meta.charSet);
  if (charSet) return { key: 'charset', selector: 'meta[charset]' };

  return null;
}

function linkIdentity(link: PageHeadLinkTag): { key: string; selector: string } | null {
  const rel = cleanValue(link.rel);
  const href = cleanValue(link.href);
  if (!rel || !href) return null;

  const suffix = [
    cleanValue(link.sizes) ? `sizes:${String(link.sizes).toLowerCase()}` : '',
    cleanValue(link.type) ? `type:${String(link.type).toLowerCase()}` : '',
    cleanValue(link.media) ? `media:${String(link.media).toLowerCase()}` : '',
  ]
    .filter(Boolean)
    .join('|');

  let selector = `link[rel="${escapeAttributeValue(rel)}"]`;
  if (cleanValue(link.sizes)) selector += `[sizes="${escapeAttributeValue(String(link.sizes))}"]`;
  if (cleanValue(link.type)) selector += `[type="${escapeAttributeValue(String(link.type))}"]`;
  if (cleanValue(link.media)) selector += `[media="${escapeAttributeValue(String(link.media))}"]`;

  return {
    key: suffix ? `rel:${rel.toLowerCase()}|${suffix}` : `rel:${rel.toLowerCase()}`,
    selector,
  };
}

function toMetaAttrs(meta: PageHeadMetaTag): Record<string, string> {
  const attrs: Record<string, string> = {};
  if (cleanValue(meta.name)) attrs.name = String(meta.name);
  if (cleanValue(meta.property)) attrs.property = String(meta.property);
  if (cleanValue(meta.httpEquiv)) attrs['http-equiv'] = String(meta.httpEquiv);
  if (cleanValue(meta.itemProp)) attrs.itemprop = String(meta.itemProp);
  if (cleanValue(meta.charSet)) attrs.charset = String(meta.charSet);
  if (cleanValue(meta.content)) attrs.content = String(meta.content);
  return attrs;
}

function toLinkAttrs(link: PageHeadLinkTag): Record<string, string> {
  const attrs: Record<string, string> = {
    rel: String(link.rel),
    href: String(link.href),
  };
  if (cleanValue(link.type)) attrs.type = String(link.type);
  if (cleanValue(link.sizes)) attrs.sizes = String(link.sizes);
  if (cleanValue(link.media)) attrs.media = String(link.media);
  if (cleanValue(link.color)) attrs.color = String(link.color);
  return attrs;
}

function buildHeadPlan(head?: PageHeadConfig): HeadPlan | null {
  if (!head) return null;

  const metaEntries = new Map<string, PageHeadMetaTag>();
  const linkEntries = new Map<string, PageHeadLinkTag>();

  const addMeta = (meta?: PageHeadMetaTag | null) => {
    if (!meta) return;
    const identity = metaIdentity(meta);
    const content = cleanValue(meta.content);
    if (!identity) return;
    if (!content && identity.key !== 'charset') return;
    metaEntries.set(identity.key, meta);
  };

  const addLink = (link?: PageHeadLinkTag | null) => {
    if (!link) return;
    const identity = linkIdentity(link);
    if (!identity) return;
    linkEntries.set(identity.key, link);
  };

  const title = cleanValue(head.title);
  const description = cleanValue(head.description);
  const image =
    cleanValue(head.twitterImage) ||
    cleanValue(head.ogImage) ||
    cleanValue(head.socialImage) ||
    cleanValue(head.image);
  const canonical = cleanValue(head.canonical);
  const url = cleanValue(head.url) || canonical;
  const type = cleanValue(head.type);
  const siteName = cleanValue(head.siteName);
  const themeColor = cleanValue(head.themeColor);
  const robots = cleanValue(head.robots);
  const twitterCard = cleanValue(head.twitterCard) || (image ? 'summary_large_image' : undefined);
  const twitterSite = cleanValue(head.twitterSite);
  const twitterCreator = cleanValue(head.twitterCreator);
  const favicon = cleanValue(head.favicon);

  if (title) {
    addMeta({ property: 'og:title', content: title });
    addMeta({ name: 'twitter:title', content: title });
  }

  if (description) {
    addMeta({ name: 'description', content: description });
    addMeta({ property: 'og:description', content: description });
    addMeta({ name: 'twitter:description', content: description });
  }

  if (image) {
    addMeta({ property: 'og:image', content: image });
    addMeta({ name: 'twitter:image', content: image });
  }

  if (url) addMeta({ property: 'og:url', content: url });
  if (type) addMeta({ property: 'og:type', content: type });
  if (siteName) addMeta({ property: 'og:site_name', content: siteName });
  if (themeColor) addMeta({ name: 'theme-color', content: themeColor });
  if (robots) addMeta({ name: 'robots', content: robots });
  if (twitterCard) addMeta({ name: 'twitter:card', content: twitterCard });
  if (twitterSite) addMeta({ name: 'twitter:site', content: twitterSite });
  if (twitterCreator) addMeta({ name: 'twitter:creator', content: twitterCreator });

  if (favicon) {
    addLink({ rel: 'icon', href: favicon });
    addLink({ rel: 'shortcut icon', href: favicon });
    addLink({ rel: 'apple-touch-icon', href: favicon });
  }

  if (canonical) {
    addLink({ rel: 'canonical', href: canonical });
  }

  (head.meta || []).forEach(addMeta);
  (head.links || []).forEach(addLink);

  if (!title && metaEntries.size === 0 && linkEntries.size === 0) return null;

  return {
    title,
    metaEntries,
    linkEntries,
  };
}

function getCurrentPlan(state: HeadState): HeadPlan | null {
  for (let index = state.order.length - 1; index >= 0; index -= 1) {
    const key = state.order[index];
    const plan = state.plans[key];
    if (plan) return plan;
  }
  return null;
}

function syncMetaTags(state: HeadState, plan: HeadPlan | null) {
  const nextEntries = plan?.metaEntries || new Map<string, PageHeadMetaTag>();
  const keys = new Set([
    ...Object.keys(state.activeMetaNodes),
    ...Array.from(nextEntries.keys()),
  ]);

  keys.forEach((key) => {
    const entry = nextEntries.get(key);
    if (entry) {
      const identity = metaIdentity(entry);
      if (!identity) return;

      let node = state.activeMetaNodes[key];
      if (!hasOwn(state.metaSnapshots, key)) {
        state.metaSnapshots[key] = snapshotTag(document.head.querySelector(identity.selector));
      }
      if (!node) {
        node = (document.head.querySelector(identity.selector) as HTMLMetaElement | null) || document.createElement('meta');
      }
      replaceAttributes(node, toMetaAttrs(entry));
      if (!node.parentNode) document.head.appendChild(node);
      state.activeMetaNodes[key] = node;
      return;
    }

    const restored = restoreTag(state.activeMetaNodes[key], state.metaSnapshots[key] ?? null, 'meta');
    if (restored) {
      state.activeMetaNodes[key] = restored as HTMLMetaElement;
    } else {
      delete state.activeMetaNodes[key];
    }
  });
}

function syncLinkTags(state: HeadState, plan: HeadPlan | null) {
  const nextEntries = plan?.linkEntries || new Map<string, PageHeadLinkTag>();
  const keys = new Set([
    ...Object.keys(state.activeLinkNodes),
    ...Array.from(nextEntries.keys()),
  ]);

  keys.forEach((key) => {
    const entry = nextEntries.get(key);
    if (entry) {
      const identity = linkIdentity(entry);
      if (!identity) return;

      let node = state.activeLinkNodes[key];
      if (!hasOwn(state.linkSnapshots, key)) {
        state.linkSnapshots[key] = snapshotTag(document.head.querySelector(identity.selector));
      }
      if (!node) {
        node = (document.head.querySelector(identity.selector) as HTMLLinkElement | null) || document.createElement('link');
      }
      replaceAttributes(node, toLinkAttrs(entry));
      if (!node.parentNode) document.head.appendChild(node);
      state.activeLinkNodes[key] = node;
      return;
    }

    const restored = restoreTag(state.activeLinkNodes[key], state.linkSnapshots[key] ?? null, 'link');
    if (restored) {
      state.activeLinkNodes[key] = restored as HTMLLinkElement;
    } else {
      delete state.activeLinkNodes[key];
    }
  });
}

function syncHeadState(state: HeadState) {
  const plan = getCurrentPlan(state);
  document.title = plan?.title || state.baseTitle;
  syncMetaTags(state, plan);
  syncLinkTags(state, plan);
}

export default function PageHead({ head }: { head?: PageHeadConfig }) {
  const ownerIdRef = useRef<string>('');
  if (!ownerIdRef.current) {
    ownerIdRef.current = `page-head-${Math.random().toString(36).slice(2, 10)}`;
  }

  useLayoutEffect(() => {
    const state = getHeadState();
    const plan = buildHeadPlan(head);
    if (!state || !plan) return undefined;

    state.plans[ownerIdRef.current] = plan;
    if (!state.order.includes(ownerIdRef.current)) {
      state.order.push(ownerIdRef.current);
    }
    syncHeadState(state);

    return () => {
      delete state.plans[ownerIdRef.current];
      state.order = state.order.filter((key) => key !== ownerIdRef.current);
      syncHeadState(state);
    };
  }, [head]);

  return null;
}
