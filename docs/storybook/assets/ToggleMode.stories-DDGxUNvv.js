import{j as t}from"./iframe-B8RbS7uw.js";import{T as e}from"./ToggleMode-BJ6lNFbS.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-DMXHGruU.js";import"./clsx-B-dksMZM.js";import"./Catalog-5Vwc1iKs.js";import"./Grid-DW54CUpj.js";import"./styled-Cw_y6cYg.js";import"./useTheme-BwQ1aHS1.js";import"./generateUtilityClasses-DGi4yQgU.js";import"./Card-DFg2aWN8.js";import"./Paper-CQFXOI4Y.js";import"./memoTheme-DOBzPGVq.js";import"./CardHeader-wmPV8OQ1.js";import"./useSlot-xNjt_Hcj.js";import"./useForkRef-BVrKvtW-.js";import"./Typography-9CeYDXau.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CardContent-CBQpGAqS.js";import"./CardActions-C6iE9om3.js";import"./Typography-VWwRmWUn.js";import"./Box-Bx62dzkA.js";import"./Box-D8YWJpHP.js";import"./Avatar-BSDU_Dzn.js";import"./Avatar-BGK3OEI1.js";import"./createSvgIcon-qKIB-W4T.js";import"./Tooltip-CD-kiCxg.js";import"./TransitionGroupContext-RnyQTLj3.js";import"./useControlled-xToZ4EFh.js";import"./useEventCallback-DGVuo8xh.js";import"./Portal-B_K3TjZx.js";import"./index-CRbWBMRp.js";import"./index-BjD9Kw0B.js";import"./Grow-CDLY8IRb.js";import"./utils-vtR6qNsB.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./isFocusVisible-B8k4qzLc.js";import"./Switch-b5ROkK6C.js";import"./useFormControl-CjO2eC51.js";import"./ButtonBase-CwHsjpic.js";import"./mergeSlotProps-By6iUkp4.js";import"./Switch-BH4Fcgik.js";import"./IconButton-BPzkkkAA.js";import"./IconButton-DCZZFgIO.js";import"./CircularProgress-Dmag3IpP.js";const it={title:"GUI/Theme/ToggleMode",component:e,tags:["autodocs"],decorators:[s=>t.jsx("div",{style:{padding:24,minHeight:160,display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(s,{})})],parameters:{docs:{description:{component:`
The **ToggleMode** is a theme control molecule that allows users to toggle between **light**, **dark**, and optionally **system** themes in a UI.

---
## What it does
ToggleMode provides a way to change the global color mode of the app via UI toggles. It connects with \`useThemeMode\` from This.GUI, so any updates reflect instantly in your theme context.

---
## Visual Variants
This component supports multiple visual representations depending on how much context or control you want to show the user:

- **minimal**: Just a clickable icon (uses IconButton).
- **switchMinimal**: Shows a switch with sun/moon icons.
- **switchWithLabel**: Shows the switch, icons, and a label that updates dynamically between "Light" and "Dark".

---
## Props
- \`variant?: 'minimal' | 'switchMinimal' | 'switchWithLabel'\`
  - Determines the UI structure.
- \`show?: 'icons' | 'label' | 'both'\`
  - For \`variant="minimal"\` only. Controls whether to show icon, label or both.
- \`switchSize?: 'small' | 'medium'\` — size of the MUI Switch.
- \`iconSize?: 'small' | 'medium' | 'large'\` — size of the icons.
- \`sx\`, \`iconSx\`, \`switchSx\`, \`labelSx\` — MUI system styling overrides.
- \`id\`, \`className\`, \`data-testid\` — standard element props.

---
## Internal Logic
- Uses \`useThemeContext()\` to read current mode (\`light\` or \`dark\`) and the \`toggleMode()\` handler.
- Dynamically determines whether current mode is \`light\` or not to drive the state of the UI (like whether switch is \`checked\` or not).
- Automatically updates \`labelText\` based on the mode.

---
## Usage Examples

### Basic usage in React:
~~~tsx
<ToggleMode variant="minimal" />
<ToggleMode variant="switchMinimal" />
<ToggleMode variant="switchWithLabel" />
~~~

### Declarative JSON usage:
~~~json
{
  "type": "ToggleMode",
  "props": {
    "variant": "switchWithLabel",
    "iconSize": "medium",
    "switchSize": "small",
    "sx": { "ml": 2 }
  }
}
~~~

---
## Design Notes
This component is designed to be:
- **Declarative-first**: usable directly from This.GUI config structures.
- **Minimal footprint**: all styling is optional and overrideable.
- **Context-integrated**: updates global theme state through context, not local component state.

Ideal for UIs where users are expected to switch theme modes or where accessible, theme-aware interfaces are critical.
        `}}},argTypes:{variant:{control:{type:"radio"},options:["minimal","switch"]},sx:{control:"object",description:"MUI system style overrides."},show:{control:{type:"radio"},options:["icons","label","both"],description:"Controls whether to show icons, label, or both."}},args:{variant:"minimal",sx:{}}},i={render:s=>t.jsx(e,{...s})},o={render:()=>t.jsxs("div",{style:{display:"flex",gap:24,flexDirection:"column"},children:[t.jsxs("div",{children:[t.jsx("h4",{children:"minimal (icon only)"}),t.jsx(e,{variant:"minimal"})]}),t.jsxs("div",{children:[t.jsx("h4",{children:"switchMinimal (switch with icons)"}),t.jsx(e,{variant:"switchMinimal",show:"icons"})]}),t.jsxs("div",{children:[t.jsx("h4",{children:"switchWithLabel (switch with icons + label)"}),t.jsx(e,{variant:"switchWithLabel",show:"both"})]})]})};var r,a,n;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <ToggleMode {...args} />
}`,...(n=(a=i.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var l,m,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexDirection: 'column'
  }}>
      <div>
        <h4>minimal (icon only)</h4>
        <ToggleMode variant="minimal" />
      </div>
      <div>
        <h4>switchMinimal (switch with icons)</h4>
        <ToggleMode variant="switchMinimal" show="icons" />
      </div>
      <div>
        <h4>switchWithLabel (switch with icons + label)</h4>
        <ToggleMode variant="switchWithLabel" show="both" />
      </div>
    </div>
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const ot=["Playground","Variants"];export{i as Playground,o as Variants,ot as __namedExportsOrder,it as default};
