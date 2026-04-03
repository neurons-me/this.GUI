import { navigateToGuiRoute } from "./navigation.js";

export function buildGuiMainMenu() {
  return {
    initialView: "rail",
    elements: [
      {
        type: "action",
        props: {
          label: "Exports",
          icon: "schema",
          onClick: function () {
            return navigateToGuiRoute("/exports");
          },
        },
      },
      {
        type: "action",
        props: {
          label: "Storybook",
          icon: "auto_stories",
          onClick: function () {
            window.location.href = "https://neurons-me.github.io/GUI/docs/storybook/index.html";
          },
        },
      },
      {
        type: "action",
        props: {
          label: "GitHub",
          icon: "code",
          onClick: function () {
            window.location.href = "https://github.com/neurons-me/this.GUI";
          },
        },
      },
      {
        type: "action",
        props: {
          label: "npm",
          icon: "package_2",
          onClick: function () {
            window.location.href = "https://www.npmjs.com/package/this.gui";
          },
        },
      },
    ],
  };
}
