// src/themes/catalog/neurons/light.tokens.ts
const lightTokens = {
  "$description": "Design tokens for neurons.light theme — part of This.GUI ecosystem",
  "id": "neurons-light",
  "extends": "global.tokens.json",
  "color": {
    "primary": {
      "$type": "color",
      "$value": "#0a3a42"
    },
    "primaryButton": {
      "$type": "color",
      "$value": "#0f6a78"
    },
    "secondary": {
      "$type": "color",
      "$value": "#e5396f"
    },
    "icon": {
      "$type": "color",
      "$value": "#5e5e5e"
    },
    "default": {
      "$type": "color",
      "$value": "#f4f7f8"
    },
    "paper": {
      "$type": "color",
      "$value": "#ffffff"
    },
    "nav": {
      "$type": "color",
      "$value": "#ffffff"
    },
    "background": {
      "default": { "$type": "color", "$value": "#f4f7f8" },
      "paper": { "$type": "color", "$value": "#ffffff" },
      "nav": { "$type": "color", "$value": "#ffffff" }
    },
    "textPrimary": {
      "$type": "color",
      "$value": "#0f1720"
    },
    "textSecondary": {
      "$type": "color",
      "$value": "#51606d"
    },
    "link": {
      "$type": "color",
      "$value": "#0f6a78"
    },
    "linkVisited": {
      "$type": "color",
      "$value": "#0a3a42"
    },
    "border": {
      "$type": "color",
      "$value": "rgba(15,23,32,0.12)"
    },
    "section": {
      "default": {
        "$type": "color",
        "$value": "#ffffff"
      },
      "subtle": {
        "$type": "color",
        "$value": "#ffffff"
      },
      "strong": {
        "$type": "color",
        "$value": "#f0f2f5"
      }
    },
    "blur": {
      "light": { "$type": "color", "$value": "rgba(34, 83, 70, 0.55);" },
      "medium": { "$type": "color", "$value": "rgba(34, 83, 70, 0.69)" },
      "heavy": { "$type": "color", "$value": "rgba(21, 27, 25, 0.89);" },
      "all": { "$type": "color", "$value": "rgba(31, 38, 36, 0.98);" }
    }
  },
  "semantic": {
    "success": { "$type": "color", "$value": "#4db6ac" },
    "error": { "$type": "color", "$value": "#d6455d" },
    "warning": { "$type": "color", "$value": "#d4a93a" },
    "info": { "$type": "color", "$value": "#5aa9e6" }
  }
};

export default lightTokens;
