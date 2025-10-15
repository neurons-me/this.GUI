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
      "$value": "#f8f9fa"
    },
    "paper": {
      "$type": "color",
      "$value": "#ffffff"
    },
    "nav": {
      "$type": "color",
      "$value": "#fdfdfd"
    },
    "textPrimary": {
      "$type": "color",
      "$value": "#111111"
    },
    "textSecondary": {
      "$type": "color",
      "$value": "#444444"
    },
    "link": {
      "$type": "color",
      "$value": "#008c7d"
    },
    "linkVisited": {
      "$type": "color",
      "$value": "#006e64"
    },
    "border": {
      "$type": "color",
      "$value": "rgba(0,0,0,0.08)"
    },
    "section": {
      "default": {
        "$type": "color",
        "$value": "#f9f9fb"
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
      "light": { "$type": "color", "$value": "rgba(255, 255, 255, 0.3)" },
      "medium": { "$type": "color", "$value": "rgba(255, 255, 255, 0.45)" },
      "heavy": { "$type": "color", "$value": "rgba(240, 240, 240, 0.65)" },
      "all": { "$type": "color", "$value": "rgba(250, 250, 250, 0.8)" }
    }
  }
};

export default lightTokens;