// src/themes/catalog/GhostShell/dark.tokens.ts
const darkTokens = {
  "id": "ghostShell-dark",
  "$description": "Ghost Shell Dark Theme Tokens — overrides applied on top of global.tokens.json",
  "color": {
    "primary": {
      "$type": "color",
      "$value": "#a43dff"
    },
    "secondary": {
      "$type": "color",
      "$value": "#00e8c6"
    },
    "icon": {
      "$type": "color",
      "$value": "#c2c2c2"
    },
    "background": {
      "default": { "$type": "color", "$value": "#0d0d0f" },
      "paper": { "$type": "color", "$value": "#1b1b1f" },
      "nav": { "$type": "color", "$value": "rgba(25,25,35,0.95)" }
    },
    "textPrimary": {
      "$type": "color",
      "$value": "#f0f0f0"
    },
    "textSecondary": {
      "$type": "color",
      "$value": "rgba(255,255,255,0.6)"
    },
    "link": {
      "$type": "color",
      "$value": "#3af2e0"
    },
    "linkVisited": {
      "$type": "color",
      "$value": "#aa66ff"
    },
    "border": {
      "$type": "color",
      "$value": "#2c2c3a"
    },
    "focus": {
      "$type": "color",
      "$value": "#ff0080"
    }
  },
  "font": {
    "family": {
      "$type": "fontFamily",
      "$value": "'Share Tech Mono', monospace"
    }
  }
};

export default darkTokens;