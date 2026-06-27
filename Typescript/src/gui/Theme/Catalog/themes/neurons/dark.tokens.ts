// src/themes/catalog/neurons/dark.tokens.ts
// Neurons Dark Theme Tokens — overrides applied on top of global.tokens.json
const darkTokens = {
  "id": "neurons-dark",
  "$description": "Neurons Dark Theme Tokens — overrides applied on top of global.tokens.json",
  "color": {
    "primary": {
      "$type": "color",
      "$value": "#90caf9"
    },
    "secondary": {
      "$type": "color",
      "$value": "#4fd1c5"
    },
    "icon": {
      "$type": "color",
      "$value": "#98a7b3"
    },
    "background": {
      "default": { "$type": "color", "$value": "#0b1114" },
      "paper": { "$type": "color", "$value": "#111a1f" },
      "nav": { "$type": "color", "$value": "rgba(11,17,20,0.95)" }
    },
    "textPrimary": {
      "$type": "color",
      "$value": "#e8eded"
    },
    "textSecondary": {
      "$type": "color",
      "$value": "#98a7b3"
    },
    "link": {
      "$type": "color",
      "$value": "#4fd1c5"
    },
    "linkVisited": {
      "$type": "color",
      "$value": "#3aa89d"
    },
    "border": {
      "$type": "color",
      "$value": "rgba(232,237,237,0.10)"
    },
    "section": {
      "default": { "$type": "color", "$value": "#0b1114" },
      "subtle": { "$type": "color", "$value": "#111a1f" },
      "strong": { "$type": "color", "$value": "#16222a" }
    },
    "blur": {
      "light": { "$type": "color", "$value": "rgba(34, 83, 70, 0.55);" },
      "medium": { "$type": "color", "$value": "rgba(34, 83, 70, 0.69)" },
      "heavy": { "$type": "color", "$value": "rgba(21, 27, 25, 0.89);" },
      "all": { "$type": "color", "$value": "rgba(31, 38, 36, 0.98);" }
    }
  },
  "semantic": {
    "success": { "$type": "color", "$value": "#4fd1c5" },
    "error": { "$type": "color", "$value": "#ff6b6b" },
    "warning": { "$type": "color", "$value": "#f4c95d" },
    "info": { "$type": "color", "$value": "#90caf9" }
  }
};

export default darkTokens;
