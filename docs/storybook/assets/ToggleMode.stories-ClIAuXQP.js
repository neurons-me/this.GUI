import{j as e}from"./iframe-pzPFiMX_.js";import{T as t}from"./ToggleMode-CymlDTwm.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-63DgR07G.js";import"./clsx-B-dksMZM.js";import"./Box-C7rrQtJx.js";import"./Box-DiPDGrGZ.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Switch-DVoYb0E2.js";import"./Switch-CYJLF2FD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./styled-Ddslrojq.js";import"./useFormControl-BNH9ZhyC.js";import"./useSlot-DCtCaxkB.js";import"./useForkRef-XcfTKrEz.js";import"./useControlled-DcEk1YEb.js";import"./ButtonBase-CRYnpWlO.js";import"./TransitionGroupContext-BTo24QG4.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useEventCallback-IANQAffG.js";import"./isFocusVisible-B8k4qzLc.js";import"./memoTheme-D6Kqj5GO.js";import"./Typography-DFbRSFHa.js";import"./Typography-DdAUbr75.js";import"./IconButton-CBxrH2fL.js";import"./IconButton-CezSl7Em.js";import"./CircularProgress-CDK3cCwJ.js";const P={title:"GUI/Theme/ToggleMode",component:t,tags:["autodocs"],decorators:[s=>e.jsx("div",{style:{padding:24,minHeight:160,display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(s,{})})],parameters:{docs:{description:{component:`
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
}`,...(h=(c=o.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const B=["Playground","Variants"];export{i as Playground,o as Variants,B as __namedExportsOrder,P as default};
