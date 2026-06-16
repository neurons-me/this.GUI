import { useMemo } from "react";
import { Layout, Theme, ThemeModeToggle } from "this.gui";
import { MeRuntimeProvider } from "this.gui/react";
import { appConfig } from "./app/config";
import { createAppMe } from "./app/me";
import HomePage from "./pages/HomePage";

export function AppShell() {
  return (
    <Layout
      TopBar={{
        title: appConfig.title,
        elementsRight: [
          {
            type: "action",
            props: {
              element: <ThemeModeToggle variant="minimal" show="icons" iconSize="small" />,
            },
          },
          {
            type: "link",
            props: {
              label: "GUI Storybook",
              href: appConfig.guiStorybookUrl,
              icon: "menu_book",
              external: true,
            },
          },
        ],
      }}
      LeftBar={{
        initialView: "rail",
        elements: [{ type: "link", props: { label: "Home", icon: "home", href: "/" } }],
        footerElements: [
          {
            type: "link",
            props: {
              label: "GUI Docs",
              href: appConfig.guiDocsUrl,
              icon: "code",
              external: true,
            },
          },
        ],
      }}
      Footer={false}
    >
      <HomePage />
    </Layout>
  );
}

export default function App() {
  const me = useMemo(() => createAppMe(), []);

  return (
    <Theme initialThemeId="neurons.me" initialMode="light">
      <MeRuntimeProvider me={me}>
        <AppShell />
      </MeRuntimeProvider>
    </Theme>
  );
}

