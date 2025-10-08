// src/themes/catalog/neurons/dark.tokens.ts
// Neurons Dark Theme Tokens — overrides applied on top of global.tokens.json
const darkTokens = {
  "id": "cherrybyte-dark",
  "$description": "CherryByte Dark Theme Tokens — overrides applied on top of global.tokens.json",
  "color": {
    "primary": {
      "$type": "color",
      "$value": "#f06292"
    },
    "secondary": {
      "$type": "color",
      "$value": "#ce93d8"
    },
    "icon": {
      "$type": "color",
      "$value": "#f48fb1"
    },
    "background": {
      "default": { "$type": "color", "$value": "#1a1a1a" },
      "paper": { "$type": "color", "$value": "#222222" },
      "nav": { "$type": "color", "$value": "rgba(26,26,26,0.95)" }
    },
    "textPrimary": {
      "$type": "color",
      "$value": "#fce4ec"
    },
    "textSecondary": {
      "$type": "color",
      "$value": "rgba(255,255,255,0.6)"
    },
    "link": {
      "$type": "color",
      "$value": "#ff4081"
    },
    "linkVisited": {
      "$type": "color",
      "$value": "#ad1457"
    },
    "border": {
      "$type": "color",
      "$value": "rgb(70, 30, 70)"
    }
  }
};

export default darkTokens;