function listify(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (value == null || value === false) return [];
  return [value];
}

function deriveInitials(name) {
  const tokens = String(name ?? "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);

  if (!tokens.length) return "??";
  return tokens.map(function (token) { return token[0]; }).join("").toUpperCase();
}

function normalizeStatus(status) {
  const value = String(status ?? "").trim().toLowerCase();
  if (value === "active" || value === "stable" || value === "online") {
    return { label: value || "active", color: "success" };
  }
  if (value === "experimental" || value === "building" || value === "testing") {
    return { label: value || "experimental", color: "warning" };
  }
  if (value === "offline" || value === "archived" || value === "idle") {
    return { label: value || "offline", color: "default" };
  }
  return { label: value || "prototype", color: "info" };
}

export const virtualProfileCardEntry = {
  type: "ProfileCard",
  meta: {
    id: "virtual.profile-card",
    label: "Profile Card",
    kind: "pattern",
    path: ["Virtual", "Patterns"],
    tags: ["profile", "card", "virtual", "resolve->GuiNode"],
    demoSpec: {
      type: "ProfileCard",
      props: {
        name: "Ada Lovelace",
        handle: "@ada",
        status: "active",
        bio: "Registry-born pattern resolved into atoms at runtime.",
        badges: ["virtual", "pattern", "registry"],
      },
    },
  },
  resolve(spec) {
    const props = spec?.props ?? {};
    const name = props.name ?? "Unnamed Profile";
    const handle = props.handle ?? "@virtual";
    const bio = props.bio ?? "This card was composed at runtime by a registry entry that returns GuiNode.";
    const avatarSrc = props.avatarSrc;
    const initials = props.initials ?? deriveInitials(name);
    const badges = listify(props.badges);
    const actions = listify(props.actions);
    const notes = listify(props.notes);
    const status = normalizeStatus(props.status);

    return {
      type: "Paper",
      props: {
        variant: "outlined",
        sx: {
          p: 2,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          minHeight: "100%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
          borderColor: "divider",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          ...(props.sx || {}),
        },
      },
      children: [
        {
          type: "Box",
          props: {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              gap: 1.5,
            },
          },
          children: [
            {
              type: "Avatar",
              props: {
                src: avatarSrc,
                alt: name,
                children: avatarSrc ? undefined : initials,
                sx: {
                  width: 64,
                  height: 64,
                  fontWeight: 700,
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                },
              },
            },
            {
              type: "Box",
              props: {
                sx: {
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                  flex: 1,
                },
              },
              children: [
                {
                  type: "Typography",
                  props: {
                    variant: "h6",
                    sx: {
                      fontWeight: 800,
                      lineHeight: 1.1,
                    },
                  },
                  children: [name],
                },
                {
                  type: "Typography",
                  props: {
                    variant: "body2",
                    sx: {
                      color: "text.secondary",
                    },
                  },
                  children: [handle],
                },
                {
                  type: "Chip",
                  props: {
                    label: status.label,
                    color: status.color,
                    size: "small",
                    variant: "outlined",
                    sx: {
                      alignSelf: "flex-start",
                      textTransform: "capitalize",
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          type: "Typography",
          props: {
            variant: "body2",
            sx: {
              color: "text.secondary",
              lineHeight: 1.6,
            },
          },
          children: [bio],
        },
        badges.length
          ? {
              type: "Box",
              props: {
                sx: {
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.75,
                },
              },
              children: badges.map(function (badge, index) {
                return {
                  type: "Chip",
                  props: {
                    key: `profile-badge-${index}`,
                    size: "small",
                    variant: "filled",
                    label: String(badge),
                    sx: {
                      borderRadius: 999,
                    },
                  },
                };
              }),
            }
          : null,
        notes.length
          ? {
              type: "Box",
              props: {
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                  pt: 0.5,
                  borderTop: "1px dashed",
                  borderColor: "divider",
                },
              },
              children: notes.map(function (note, index) {
                return {
                  type: "Typography",
                  props: {
                    key: `profile-note-${index}`,
                    variant: "caption",
                    sx: {
                      color: "text.secondary",
                    },
                  },
                  children: [String(note)],
                };
              }),
            }
          : null,
        actions.length
          ? {
              type: "Box",
              props: {
                sx: {
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  pt: 0.5,
                },
              },
              children: actions.map(function (action, index) {
                const actionObject =
                  action && typeof action === "object" && !Array.isArray(action)
                    ? action
                    : { label: String(action) };

                return {
                  type: "Button",
                  props: {
                    key: `profile-action-${index}`,
                    label: actionObject.label ?? `Action ${index + 1}`,
                    variant: actionObject.variant ?? (index === 0 ? "contained" : "outlined"),
                    color: actionObject.color ?? (index === 0 ? "primary" : "inherit"),
                    href: actionObject.href,
                    onClick: actionObject.onClick,
                    startIcon: actionObject.startIcon,
                    endIcon: actionObject.endIcon,
                    size: actionObject.size ?? "small",
                  },
                };
              }),
            }
          : null,
      ].filter(Boolean),
    };
  },
};

export function installVirtualPatterns(GUI) {
  if (!GUI || typeof GUI !== "object") return;
  if (GUI.__virtualPatternsInstalled) return;

  const registry =
    GUI.Registry && typeof GUI.Registry === "object"
      ? GUI.Registry
      : GUI.registry && typeof GUI.registry === "object"
        ? GUI.registry
        : null;

  if (!registry) return;

  registry.ProfileCard = virtualProfileCardEntry;

  if (GUI.registry && GUI.registry !== registry) {
    GUI.registry.ProfileCard = virtualProfileCardEntry;
  }

  GUI.__virtualPatternsInstalled = true;
}
