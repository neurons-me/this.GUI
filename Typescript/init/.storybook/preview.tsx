import React from "react";
import type { Preview } from "@storybook/react";
import { Theme } from "this.gui";
import { MeRuntimeProvider } from "this.gui/react";
import { createAppMe } from "../src/app/me";
import "../src/index.css";

const preview: Preview = {
  decorators: [
    (Story) => {
      const me = React.useMemo(() => createAppMe(), []);

      return (
        <Theme initialThemeId="neurons.me" initialMode="light">
          <MeRuntimeProvider me={me}>
            <Story />
          </MeRuntimeProvider>
        </Theme>
      );
    },
  ],
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disabled: true },
  },
};

export default preview;

