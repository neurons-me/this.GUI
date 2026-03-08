// src/themes/catalog/MdrnChurch/dark.tokens.ts
const darkTokens = {
  "id": "mdrnchurch-dark",
  "$description": "MdrnChurch Dark — nocturnal parchment interpretation of la_iglesia_moderna/style/main.css.",
  "color": {
    "primary": { "$type": "color", "$value": "#f3dfc2" },
    "secondary": { "$type": "color", "$value": "#b8a48a" },
    "icon": { "$type": "color", "$value": "#e4d8c8" },
    "background": {
      "default": { "$type": "color", "$value": "#171310" },
      "paper": { "$type": "color", "$value": "#211b17" },
      "nav": { "$type": "color", "$value": "rgba(23,19,16,0.96)" }
    },
    "textPrimary": { "$type": "color", "$value": "#f5ede4" },
    "textSecondary": { "$type": "color", "$value": "rgba(245,237,228,0.78)" },
    "link": { "$type": "color", "$value": "#f1c98c" },
    "linkVisited": { "$type": "color", "$value": "#d6b487" },
    "border": { "$type": "color", "$value": "rgba(184,164,138,0.3)" },
    "section": {
      "default": { "$type": "color", "$value": "#1d1713" },
      "subtle": { "$type": "color", "$value": "#26201b" },
      "strong": { "$type": "color", "$value": "#120f0d" }
    },
    "blur": {
      "light": { "$type": "color", "$value": "rgba(24, 20, 17, 0.55)" },
      "medium": { "$type": "color", "$value": "rgba(22, 18, 15, 0.72)" },
      "heavy": { "$type": "color", "$value": "rgba(19, 16, 13, 0.88)" },
      "all": { "$type": "color", "$value": "rgba(17, 14, 11, 1)" }
    }
  },
  "effects": {
    "shadow": {
      "$type": "shadow",
      "$value": "0px 12px 34px rgba(0, 0, 0, 0.35)"
    }
  }
};

export default darkTokens;
