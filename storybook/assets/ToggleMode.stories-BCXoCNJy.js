import{j as e}from"./iframe-CmZ_q1z4.js";import{T as t}from"./ToggleMode-DZnO_00c.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DafFbri_.js";import"./Icon-DEE50VaB.js";import"./Button-C2KQi9R3.js";import"./ButtonBase-C2QUU_ac.js";import"./TransitionGroupContext-Da1OtQvn.js";import"./useForkRef-DyhjSSpi.js";import"./CircularProgress-75u6lE4k.js";import"./Chip-BTVbmgxv.js";import"./createSvgIcon-BJr67T_I.js";import"./IconButton-jR5QBnBC.js";import"./IconButton-CREQMvOl.js";import"./Paper-CcJJK4hI.js";import"./Paper-BMIc8Tnd.js";import"./Switch-CxMv1mgq.js";import"./useFormControl-_gtsns3-.js";import"./useSlot-CYyWfB0N.js";import"./resolveComponentProps-BFxV9aVJ.js";import"./useControlled-DFkCDk-L.js";import"./Catalog-Cu4MyPD0.js";import"./Grid-CE3hA3UE.js";import"./Card-BxJ6JEmm.js";import"./CardHeader-DbT_TQWz.js";import"./CardContent-CxD8_1jp.js";import"./CardActions-BSXolM_M.js";import"./Avatar-BqQ7x005.js";import"./Avatar-C57Mvq3V.js";import"./Grow-BQB6nH-T.js";import"./Tooltip-DhJnZuOk.js";import"./useSlotProps-Bq_gEvkk.js";import"./LeftSidebarContext-BWEWDi7U.js";import"./renderer-DgQvvU-7.js";const F={title:"Getting Started/Theme/ToggleMode",component:t,tags:["autodocs"],decorators:[s=>e.jsx("div",{style:{padding:24,minHeight:160,display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(s,{})})],parameters:{docs:{description:{component:`
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
}`,...(h=(c=o.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const H=["Playground","Variants"];export{i as Playground,o as Variants,H as __namedExportsOrder,F as default};
