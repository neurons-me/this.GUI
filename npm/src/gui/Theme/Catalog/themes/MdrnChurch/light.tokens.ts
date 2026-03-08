// src/themes/catalog/MdrnChurch/light.tokens.ts
const lightTokens = {
  "id": "mdrnchurch-light",
  "$description": "MdrnChurch Light — editorial, liturgical, and documentarian palette derived from la_iglesia_moderna/style/main.css.",
  "color": {
    "primary": { "$type": "color", "$value": "#1a1a1a" },
    "secondary": { "$type": "color", "$value": "#777777" },
    "icon": { "$type": "color", "$value": "#333333" },
    "background": {
      "default": { "$type": "color", "$value": "#fff8f0" },
      "paper": { "$type": "color", "$value": "#fffdf9" },
      "nav": { "$type": "color", "$value": "rgba(255,248,240,0.96)" }
    },
    "textPrimary": { "$type": "color", "$value": "#1a1a1a" },
    "textSecondary": { "$type": "color", "$value": "#333333" },
    "link": { "$type": "color", "$value": "#5f4b32" },
    "linkVisited": { "$type": "color", "$value": "#7a6a57" },
    "border": { "$type": "color", "$value": "rgba(119,119,119,0.45)" },
    "section": {
      "default": { "$type": "color", "$value": "#f8f0e6" },
      "subtle": { "$type": "color", "$value": "#fffdfa" },
      "strong": { "$type": "color", "$value": "#efe4d6" }
    },
    "blur": {
      "light": { "$type": "color", "$value": "rgba(255, 248, 240, 0.6)" },
      "medium": { "$type": "color", "$value": "rgba(252, 243, 232, 0.76)" },
      "heavy": { "$type": "color", "$value": "rgba(248, 239, 230, 0.9)" },
      "all": { "$type": "color", "$value": "rgba(244, 233, 220, 1)" }
    }
  },
  "effects": {
    "shadow": {
      "$type": "shadow",
      "$value": "0px 10px 30px rgba(95, 75, 50, 0.08)"
    }
  }
};

export default lightTokens;
