import{j as e,r as m}from"./iframe-pzPFiMX_.js";import{D as o}from"./Drawer-DPRanx5Q.js";import{T as a}from"./Typography-DFbRSFHa.js";import{B as d}from"./Button-hT6KsEdO.js";import{B as c}from"./Box-C7rrQtJx.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./styled-Ddslrojq.js";import"./useTheme-BHTe8Tsy.js";import"./memoTheme-D6Kqj5GO.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./useSlot-DCtCaxkB.js";import"./useForkRef-XcfTKrEz.js";import"./mergeSlotProps-By6iUkp4.js";import"./utils-CKyw0omJ.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BTo24QG4.js";import"./index-D_PkDxA-.js";import"./index-2UIM6VAJ.js";import"./Portal-Dox09LX0.js";import"./Modal-CaFxHdAt.js";import"./useEventCallback-IANQAffG.js";import"./Paper-DYSFjcuz.js";import"./Typography-DdAUbr75.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Icon-63DgR07G.js";import"./Button-mBPI-F0q.js";import"./ButtonBase-CRYnpWlO.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CDK3cCwJ.js";import"./Box-DiPDGrGZ.js";const pe={title:"Atoms/Containers/Drawer",component:o,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{padding:16,minHeight:320},children:e.jsx(r,{})})],parameters:{docs:{description:{component:`
The **Drawer** primitive is a thin wrapper over MUI's \`MuiDrawer\`. It preserves all of MUI's props and behavior, while keeping the import surface stable via \`@/gui/primitives\`.

---
## Features
- Variants: \`temporary\`, \`persistent\`, \`permanent\`.
- Anchors: \`left\`, \`right\`, \`top\`, \`bottom\`.
- Works with This.GUI theme (via the \`Theme\` provider).
- Accepts \`sx\` and \`PaperProps\` for styling the surface.

> Note: For \`temporary\` drawers, you control visibility with the \`open\` prop and \`onClose\`.  
> For \`permanent\` drawers, \`open\` is ignored by MUI; the drawer is always visible.

---
## Basic usage
~~~tsx
import { Drawer } from '@/gui/primitives';

<Drawer anchor="left" variant="temporary" open={open} onClose={() => setOpen(false)}>
  <div style={{ width: 260, padding: 16 }}>Content</div>
</Drawer>
~~~

## Permanent sidebar
~~~tsx
<Drawer anchor="left" variant="permanent" PaperProps={{ sx: { width: 260 } }}>
  <div style={{ width: 260, padding: 16 }}>Navigation</div>
</Drawer>
~~~

## Declarative JSON / Config
~~~json
{
  "type": "Drawer",
  "props": {
    "variant": "temporary",
    "anchor": "right",
    "PaperProps": { "sx": { "width": 300 } },
    "children": "<YourMenu />"
  }
}
~~~

When used via your registry/resolver, the object above is resolved into a live Drawer with the provided props.
        `}}},argTypes:{variant:{control:{type:"radio"},options:["temporary","persistent","permanent"]},anchor:{control:{type:"radio"},options:["left","right","top","bottom"]},open:{control:{type:"boolean"},description:"Only relevant for temporary/persistent variants."},container:{table:{disable:!0}}},args:{variant:"temporary",anchor:"left",open:!1}},h=({label:r="Menu"})=>e.jsxs(c,{sx:{width:260,p:2},children:[e.jsx(a,{variant:"subtitle1",sx:{mb:1.5},children:r}),e.jsxs("ul",{style:{margin:0,paddingLeft:16,lineHeight:1.9},children:[e.jsx("li",{children:e.jsx("a",{href:"#",children:"Item one"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"Item two"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"Item three"})})]})]}),n={render:r=>e.jsxs(e.Fragment,{children:[e.jsxs(a,{variant:"body1",sx:{mb:1},children:["Toggle ",e.jsx("strong",{children:"open"})," in controls (temporary/persistent)."]}),e.jsx(o,{...r,children:e.jsx(h,{})})]})},s={name:"Temporary (with toggle button)",render:()=>{const[r,t]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"contained",color:"primary",onClick:()=>t(!0),children:"Open drawer"}),e.jsx(o,{anchor:"left",variant:"temporary",open:r,onClose:()=>t(!1),ModalProps:{keepMounted:!0},children:e.jsx(h,{label:"Temporary drawer"})})]})}},i={name:"Permanent (left)",render:()=>e.jsxs("div",{style:{display:"flex",minHeight:320},children:[e.jsx(o,{anchor:"left",variant:"permanent",PaperProps:{sx:{width:240,position:"relative"}},children:e.jsx(h,{label:"Permanent left"})}),e.jsxs(c,{sx:{flex:1,p:2},children:[e.jsx(a,{variant:"h6",sx:{mb:1},children:"Content area"}),e.jsxs(a,{variant:"body2",children:["The permanent drawer is always visible and does not use the ",e.jsx("code",{children:"open"})," prop."]})]})]})},p={name:"Temporary (right anchor)",render:()=>{const[r,t]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"outlined",onClick:()=>t(!0),children:"Open right drawer"}),e.jsx(o,{anchor:"right",variant:"temporary",open:r,onClose:()=>t(!1),PaperProps:{sx:{width:300}},children:e.jsx(h,{label:"Right side"})})]})}},l={name:"Top & bottom anchors",render:()=>{const[r,t]=m.useState(!1),[k,u]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[e.jsx(d,{variant:"outlined",onClick:()=>t(!0),children:"Open top"}),e.jsx(d,{variant:"outlined",onClick:()=>u(!0),children:"Open bottom"})]}),e.jsx(o,{anchor:"top",variant:"temporary",open:r,onClose:()=>t(!1),PaperProps:{sx:{height:200}},children:e.jsx(c,{sx:{p:2},children:e.jsx(a,{variant:"subtitle1",children:"Top drawer"})})}),e.jsx(o,{anchor:"bottom",variant:"temporary",open:k,onClose:()=>u(!1),PaperProps:{sx:{height:200}},children:e.jsx(c,{sx:{p:2},children:e.jsx(a,{variant:"subtitle1",children:"Bottom drawer"})})})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <>
      <Typography variant="body1" sx={{
      mb: 1
    }}>
        Toggle <strong>open</strong> in controls (temporary/persistent).
      </Typography>
      <Drawer {...args}>
        <DemoList />
      </Drawer>
    </>
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,w,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Temporary (with toggle button)',
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Open drawer
        </Button>
        <Drawer anchor="left" variant="temporary" open={open} onClose={() => setOpen(false)} ModalProps={{
        keepMounted: true
      }}>
          <DemoList label="Temporary drawer" />
        </Drawer>
      </>;
  }
}`,...(f=(w=s.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var j,T,b;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Permanent (left)',
  render: () => <div style={{
    display: 'flex',
    minHeight: 320
  }}>
      <Drawer anchor="left" variant="permanent" PaperProps={{
      sx: {
        width: 240,
        position: 'relative'
      }
    }}>
        <DemoList label="Permanent left" />
      </Drawer>
      <Box sx={{
      flex: 1,
      p: 2
    }}>
        <Typography variant="h6" sx={{
        mb: 1
      }}>Content area</Typography>
        <Typography variant="body2">
          The permanent drawer is always visible and does not use the <code>open</code> prop.
        </Typography>
      </Box>
    </div>
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var P,B,D;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Temporary (right anchor)',
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open right drawer
        </Button>
        <Drawer anchor="right" variant="temporary" open={open} onClose={() => setOpen(false)} PaperProps={{
        sx: {
          width: 300
        }
      }}>
          <DemoList label="Right side" />
        </Drawer>
      </>;
  }
}`,...(D=(B=p.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var O,C,S;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Top & bottom anchors',
  render: () => {
    const [openTop, setOpenTop] = React.useState(false);
    const [openBottom, setOpenBottom] = React.useState(false);
    return <>
        <div style={{
        display: 'flex',
        gap: 12,
        marginBottom: 12
      }}>
          <Button variant="outlined" onClick={() => setOpenTop(true)}>Open top</Button>
          <Button variant="outlined" onClick={() => setOpenBottom(true)}>Open bottom</Button>
        </div>
        <Drawer anchor="top" variant="temporary" open={openTop} onClose={() => setOpenTop(false)} PaperProps={{
        sx: {
          height: 200
        }
      }}>
          <Box sx={{
          p: 2
        }}>
            <Typography variant="subtitle1">Top drawer</Typography>
          </Box>
        </Drawer>
        <Drawer anchor="bottom" variant="temporary" open={openBottom} onClose={() => setOpenBottom(false)} PaperProps={{
        sx: {
          height: 200
        }
      }}>
          <Box sx={{
          p: 2
        }}>
            <Typography variant="subtitle1">Bottom drawer</Typography>
          </Box>
        </Drawer>
      </>;
  }
}`,...(S=(C=l.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const le=["Playground","TemporaryWithToggle","PermanentLeft","RightAnchorTemporary","TopAndBottom"];export{i as PermanentLeft,n as Playground,p as RightAnchorTemporary,s as TemporaryWithToggle,l as TopAndBottom,le as __namedExportsOrder,pe as default};
