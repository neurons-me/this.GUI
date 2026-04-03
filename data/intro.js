import { guiHeroSpec } from "./hero.js";

import { hrefForGuiRoute, navigateToGuiRoute } from "./navigation.js";

export const guiIntroRuntimeCardSpec = {
  type: "Paper",
  props: { sx: { p: 2, borderRadius: 2 } },
  children: [
    {
      type: "Typography",
      props: {
        variant: "overline",
        sx: { color: "text.secondary", letterSpacing: "0.18em" },
      },
      children: ["Module"],
    },
    {
      type: "Typography",
      props: { variant: "h6", sx: { fontWeight: 700, mt: 0.5 } },
      children: ["Runtime Controls"],
    },
    {
      type: "Typography",
      props: {
        variant: "body2",
        sx: { mt: 0.75, color: "text.secondary" },
      },
      children: ["Pure declarative surface for runtime controls."],
    },
    {
      type: "Box",
      props: {
        sx: {
          mt: 1.5,
          p: 1.5,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "action.hover",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        },
      },
      children: [
        {
          type: "Box",
          props: {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
              flexWrap: "wrap",
            },
          },
          children: [
            {
              type: "Typography",
              props: { variant: "body2", sx: { fontWeight: 700 } },
              children: ["Admin View"],
            },
            {
              type: "AdminViewToggle",
              props: {
                size: "small",
                variant: "button",
                show: "state",
                "data-gui-inspector-control": true,
                sx: { textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 },
              },
            },
          ],
        },
        {
          type: "Box",
          props: {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
              flexWrap: "wrap",
            },
          },
          children: [
            {
              type: "Typography",
              props: { variant: "body2", sx: { fontWeight: 700 } },
              children: ["Component Inspector"],
            },
            {
              type: "InspectorToggle",
              props: {
                size: "small",
                variant: "button",
                show: "state",
                "data-gui-inspector-control": true,
                sx: { textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 },
              },
            },
          ],
        },
      ],
    },
  ],
};

export const guiIntroNavigationCardSpec = {
  type: "Paper",
  props: {
    sx: {
      p: 2,
      borderRadius: 2,
    },
  },
  children: [
    {
      type: "Typography",
      props: {
        variant: "overline",
        sx: {
          color: "text.secondary",
          letterSpacing: "0.18em",
        },
      },
      children: ["Index"],
    },
    {
      type: "Typography",
      props: {
        variant: "h6",
        sx: {
          fontWeight: 700,
          mt: 0.5,
        },
      },
      children: ["Content and Navigation"],
    },
    {
      type: "Box",
      props: {
        sx: {
          mt: 1.25,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
          },
          gap: 1,
        },
      },
      children: [
        {
          type: "Box",
          props: {
            component: "a",
            href: "https://neurons-me.github.io/GUI/docs/storybook/index.html",
            sx: {
              display: "flex",
              flexDirection: "column",
              gap: 0.75,
              p: 1.25,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              textDecoration: "none",
              color: "text.primary",
              backgroundColor: "action.hover",
              transition: "transform 140ms ease, border-color 140ms ease, background-color 140ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                borderColor: "text.secondary",
                backgroundColor: "action.selected",
              },
            },
          },
          children: [
            {
              type: "Box",
              props: {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 1,
                },
              },
              children: [
                {
                  type: "Typography",
                  props: {
                    variant: "overline",
                    sx: {
                      color: "text.secondary",
                      letterSpacing: "0.12em",
                    },
                  },
                  children: ["Component"],
                },
                {
                  type: "Typography",
                  props: {
                    component: "span",
                    sx: {
                      fontSize: "2.6rem",
                      lineHeight: 1,
                    },
                  },
                  children: ["𓏞"],
                },
              ],
            },
            {
              type: "Typography",
              props: {
                variant: "subtitle1",
                sx: {
                  fontWeight: 700,
                },
              },
              children: ["Component's Storybook"],
            },
            {
              type: "Typography",
              props: {
                variant: "body2",
                sx: {
                  color: "text.secondary",
                },
              },
              children: ["Open the components catalog"],
            },
          ],
        },
        {
          type: "Box",
          props: {
            component: "a",
            href: hrefForGuiRoute("/exports"),
            onClick: function (event) {
              return navigateToGuiRoute("/exports", event);
            },
            sx: {
              display: "flex",
              flexDirection: "column",
              gap: 0.75,
              p: 1.25,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              textDecoration: "none",
              color: "text.primary",
              backgroundColor: "action.hover",
              transition: "transform 140ms ease, border-color 140ms ease, background-color 140ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                borderColor: "text.secondary",
                backgroundColor: "action.selected",
              },
            },
          },
          children: [
            {
              type: "Box",
              props: {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 1,
                },
              },
              children: [
                {
                  type: "Typography",
                  props: {
                    variant: "overline",
                    sx: {
                      color: "text.secondary",
                      letterSpacing: "0.12em",
                    },
                  },
                  children: ["Exports"],
                },
                {
                  type: "Typography",
                  props: {
                    component: "span",
                    sx: {
                      fontSize: "2.6rem",
                      lineHeight: 1,
                    },
                  },
                  children: ["𓇼"],
                },
              ],
            },
            {
              type: "Typography",
              props: {
                variant: "subtitle1",
                sx: {
                  fontWeight: 700,
                },
              },
              children: ["Shapes and Forms"],
            },
            {
              type: "Typography",
              props: {
                variant: "body2",
                sx: {
                  color: "text.secondary",
                },
              },
              children: ["atoms, molecules, components, widgets and more..."],
            },
          ],
        },
      ],
    },
  ],
};

export const guiIntroSpec = {
  type: "Page",
  props: {
    title: "this.GUI — Runtime",
  },
  children: [
    guiHeroSpec,
    {
      type: "Box",
      props: {
        sx: {
          mt: 2,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: 2,
          alignItems: "start",
        },
      },
      children: [
        guiIntroRuntimeCardSpec,
        guiIntroNavigationCardSpec,
      ],
    },
  ],
};
