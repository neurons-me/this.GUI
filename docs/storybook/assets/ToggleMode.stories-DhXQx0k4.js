import{j as e}from"./iframe-BzW5L-sB.js";import{T as t}from"./ToggleMode-CWgDvxVm.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-BWddFN6m.js";import"./Catalog-DqoeSxa9.js";import"./Grid-Dh_LG6L1.js";import"./Card-CC1CJW6Q.js";import"./Paper-rE9EeMCB.js";import"./CardHeader-C9jb9tbw.js";import"./useSlot-CYJL6v7h.js";import"./useForkRef-BZw98wdx.js";import"./CardContent-bBGSERp8.js";import"./CardActions-CLV64cQk.js";import"./Avatar-BsrjgPgW.js";import"./Avatar-CPUJFFaI.js";import"./createSvgIcon-gnQt3uom.js";import"./Switch-CiVIUQHI.js";import"./useFormControl-DWtZ3EhL.js";import"./useControlled-5D3yaU0Z.js";import"./ButtonBase-DEfx69p-.js";import"./TransitionGroupContext-DBebgn_y.js";import"./useEventCallback-0bk4YSZd.js";import"./mergeSlotProps-ltbmY89f.js";import"./Tooltip-CpARX0_E.js";import"./Portal-f-DU1-f2.js";import"./Grow-DFC1Fo7Y.js";import"./utils-CMGnC3nT.js";import"./IconButton-GOEZXKc9.js";import"./IconButton-D32fSpJH.js";import"./CircularProgress-CqZnmEb2.js";const O={title:"GUI/Theme/ToggleMode",component:t,tags:["autodocs"],decorators:[s=>e.jsx("div",{style:{padding:24,minHeight:160,display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(s,{})})],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{variant:{control:{type:"radio"},options:["minimal","switch"]},sx:{control:"object",description:"MUI system style overrides."},show:{control:{type:"radio"},options:["icons","label","both"],description:"Controls whether to show icons, label, or both."}},args:{variant:"minimal",sx:{}}},i={render:s=>e.jsx(t,{...s})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"minimal (icon only)"}),e.jsx(t,{variant:"minimal"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"switchMinimal (switch with icons)"}),e.jsx(t,{variant:"switchMinimal",show:"icons"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"switchWithLabel (switch with icons + label)"}),e.jsx(t,{variant:"switchWithLabel",show:"both"})]})]})};var a,r,n;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <ToggleMode {...args} />
}`,...(n=(r=i.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var l,c,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(h=(c=o.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const R=["Playground","Variants"];export{i as Playground,o as Variants,R as __namedExportsOrder,O as default};
