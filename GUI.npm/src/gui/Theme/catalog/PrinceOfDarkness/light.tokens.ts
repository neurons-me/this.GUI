// src/themes/PrinceOfDarkness/light.tokens.ts
const lightTokens = {
  "$description": "Prince Of Darkness Light theme — sophisticated gothic-light aesthetic with metallic undertones and structured contrast.",
  "id": "PrinceOfDarkness-light",
  "extends": "global.tokens.json",
  "color": {
    "primary": { "$type": "color", "$value": "#5e3b8a" }, // Deep metallic purple
    "secondary": { "$type": "color", "$value": "#3f51b5" }, // Cool indigo-blue
    "accent": { "$type": "color", "$value": "#009688" }, // Elegant teal accent
    "icon": { "$type": "color", "$value": "#3b3b3b" },
    "background": {
      "default": { "$type": "color", "$value": "#eae6f0" }, // Warm silver-lavender tone
      "paper": { "$type": "color", "$value": "#f2f1f6" }, // Softer neutral tone
      "nav": { "$type": "color", "$value": "#dfdce8" } // Distinct navigation area
    },
    "textPrimary": { "$type": "color", "$value": "#1a171f" },
    "textSecondary": { "$type": "color", "$value": "#4e4a56" },
    "link": { "$type": "color", "$value": "#5e3b8a" },
    "linkVisited": { "$type": "color", "$value": "#452f70" },
    "border": { "$type": "color", "$value": "rgba(60, 40, 100, 0.25)" },
    "section": {
      "default": { "$type": "color", "$value": "#e7e3ed" }, // Subtle lavender-gray
      "subtle": { "$type": "color", "$value": "#f7f6fa" }, // Pale tone for contrast
      "strong": { "$type": "color", "$value": "#d9d4e1" }, // Heavier background section
      "accent": { "$type": "color", "$value": "#d0d7e8" }, // Cold steel-blue undertone
      "highlight": { "$type": "color", "$value": "#d5cce5" } // Light metallic lilac for glow
    },
    "blur": {
      "light": { "$type": "color", "$value": "rgba(94, 59, 138, 0.2)" }, // Lavender metallic mist
      "medium": { "$type": "color", "$value": "rgba(94, 59, 138, 0.35)" }, // Soft haze
      "heavy": { "$type": "color", "$value": "rgba(94, 59, 138, 0.55)" }, // Deep mystical blur
      "all": { "$type": "color", "$value": "rgba(94, 59, 138, 0.7)" } // Full ethereal depth
    }
  },
  "effects": {
    "shadow": {
      "$type": "shadow",
      "$value": "0px 4px 14px rgba(50, 30, 80, 0.15)"
    },
    "glow": {
      "$type": "shadow",
      "$value": "0px 0px 14px rgba(94, 59, 138, 0.25)"
    }
  }
};

export default lightTokens;