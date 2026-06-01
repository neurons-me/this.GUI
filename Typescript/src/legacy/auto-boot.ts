import * as React from 'react';
import ReactDOM from 'react-dom/client';

type LegacyBrowserSurfaceConfig = {
  surface: Record<string, any>;
  renderLegacyApp: (spec?: any) => React.ReactElement;
};

function defineGuiAppElement(renderLegacyApp: (spec?: any) => React.ReactElement) {
  if (typeof window === 'undefined') return;
  if (typeof customElements === 'undefined') return;
  if (customElements.get('gui-app')) return;

  customElements.define(
    'gui-app',
    class extends HTMLElement {
      connectedCallback() {
        const mount = document.createElement('div');
        this.appendChild(mount);
        const raw = this.getAttribute('spec');
        let parsed: any = undefined;
        if (raw) {
          try {
            parsed = JSON.parse(raw);
          } catch {}
        }

        ReactDOM.createRoot(mount).render(renderLegacyApp(parsed));
      }
    }
  );
}

function installDefaultAutoboot(renderLegacyApp: (spec?: any) => React.ReactElement) {
  if (typeof window === 'undefined') return;

  window.addEventListener('DOMContentLoaded', () => {
    if ((window as any).__THIS_GUI_DISABLE_AUTOBOOT__) return;
    const rootTag = document.querySelector('gui-app');
    if (rootTag) return;
    const auto = document.getElementById('root');
    if (!auto) return;

    ReactDOM.createRoot(auto).render(renderLegacyApp());
    // eslint-disable-next-line no-console
    console.log('[GUI legacy] Auto-booted inside #root');
  });
}

export function installLegacyBrowserSurface({
  surface,
  renderLegacyApp,
}: LegacyBrowserSurfaceConfig) {
  if (typeof window === 'undefined') return;

  const globalSurface = ((window as any).GUI ||= {});
  Object.assign(globalSurface, surface);

  defineGuiAppElement(renderLegacyApp);
  installDefaultAutoboot(renderLegacyApp);
}
