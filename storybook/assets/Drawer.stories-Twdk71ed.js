import{j as e,a as r,r as i,B as a}from"./iframe-qDzYtKtC.js";import{B as s}from"./Button-CaMPQpml.js";import"./Chip-BhZmaw5o.js";import"./Paper-BoMk_9oZ.js";import"./Hero-xUkqWjvJ.js";import"./InspectorToggle-wekSOhB1.js";import"./ListItemIcon-BK2mjwHL.js";import"./ListItemText-CQf6APCW.js";import{D as o}from"./Drawer-BRutmAaT.js";import{S as x}from"./Stack-Bgfe39cu.js";import"./Tooltip-RJy_MXxX.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-DBfkoY2g.js";import"./Button-DbTl9v6C.js";import"./ButtonBase-6Hh-LNYc.js";import"./TransitionGroupContext-g77QK0i_.js";import"./useForkRef-C06S7OTc.js";import"./CircularProgress-DRiOEmDI.js";import"./createSvgIcon-CxPBGeLD.js";import"./Paper-a2hOlvY3.js";import"./renderer-BktiHyjW.js";import"./runtimeContext-CJX842xe.js";import"./Toolbar-CiCFUf6x.js";import"./IconButton-CTnmFHac.js";import"./IconButton-CFRNv4nR.js";import"./listItemIconClasses-BgBXAK3n.js";import"./ListContext-8BNTkPz4.js";import"./listItemTextClasses-B6v0OomC.js";import"./useSlot-nWJhJTt3.js";import"./resolveComponentProps-sFAkRM5K.js";import"./dividerClasses-Cv8iZShu.js";import"./Grow-CCQ7YCjt.js";import"./Modal-DDOvNC-a.js";import"./useSlotProps-Y_wwP6Cs.js";import"./getThemeProps-DrpwWpCX.js";import"./useControlled-gGju5nux.js";const ie={title:"Molecules/Drawer",component:o,tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{padding:16,minHeight:320},children:e.jsx(t,{})})],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{variant:{control:{type:"radio"},options:["temporary","persistent","permanent"]},anchor:{control:{type:"radio"},options:["left","right","top","bottom"]},open:{control:{type:"boolean"},description:"Only relevant for temporary/persistent variants."},container:{table:{disable:!0}}},args:{variant:"temporary",anchor:"left",open:!1}},n=({label:t="Menu"})=>e.jsxs(a,{sx:{width:260,p:2},children:[e.jsx(r,{variant:"subtitle1",sx:{mb:1.5},children:t}),e.jsxs("ul",{style:{margin:0,paddingLeft:16,lineHeight:1.9},children:[e.jsx("li",{children:e.jsx("a",{href:"#",children:"Item one"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"Item two"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"Item three"})})]})]}),p={name:"Playground",render:t=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"body1",sx:{mb:1},children:"Use controls to test props. Note: `open` only affects `temporary` or `persistent` variants."}),e.jsx(o,{...t,children:e.jsx(n,{})})]}),args:{children:e.jsx(n,{})}},l={name:"Variants Showcase",render:()=>{const[t,d]=i.useState(!1),[b,h]=i.useState(!1),[j,m]=i.useState(!1),[D,c]=i.useState(!1);return e.jsxs(x,{spacing:4,sx:{width:"100%"},children:[e.jsx(r,{variant:"h6",children:"Temporary Drawers"}),e.jsxs(x,{direction:"row",spacing:2,sx:{flexWrap:"wrap"},children:[e.jsx(s,{variant:"contained",color:"primary",onClick:()=>d(!0),children:"Open Left"}),e.jsx(s,{variant:"outlined",onClick:()=>h(!0),children:"Open Right"}),e.jsx(s,{variant:"outlined",onClick:()=>m(!0),children:"Open top"}),e.jsx(s,{variant:"outlined",onClick:()=>c(!0),children:"Open bottom"})]}),e.jsx(r,{variant:"h6",children:"Permanent Drawer"}),e.jsxs(a,{sx:{display:"flex",height:240,border:"1px solid",borderColor:"divider",borderRadius:1,overflow:"hidden"},children:[e.jsx(o,{anchor:"left",variant:"permanent",PaperProps:{sx:{width:240,position:"relative",borderRight:"1px solid",borderColor:"divider"}},children:e.jsx(n,{label:"Permanent"})}),e.jsxs(a,{sx:{flex:1,p:2},children:[e.jsx(r,{variant:"h6",sx:{mb:1},children:"Content Area"}),e.jsx(r,{variant:"body2",children:"A permanent drawer remains visible within its container."})]})]}),e.jsx(o,{anchor:"left",variant:"temporary",open:t,onClose:()=>d(!1),ModalProps:{keepMounted:!0},children:e.jsx(n,{label:"Left Drawer"})}),e.jsx(o,{anchor:"right",variant:"temporary",open:b,onClose:()=>h(!1),PaperProps:{sx:{width:300}},children:e.jsx(n,{label:"Right Drawer"})}),e.jsx(o,{anchor:"top",variant:"temporary",open:j,onClose:()=>m(!1),PaperProps:{sx:{height:"auto"}},children:e.jsx(a,{sx:{p:2},children:e.jsx(r,{variant:"subtitle1",children:"Top drawer"})})}),e.jsx(o,{anchor:"bottom",variant:"temporary",open:D,onClose:()=>c(!1),PaperProps:{sx:{height:"auto"}},children:e.jsx(a,{sx:{p:2},children:e.jsx(r,{variant:"subtitle1",children:"Bottom drawer"})})})]})}};var y,u,v;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <>
      <Typography variant="body1" sx={{
      mb: 1
    }}>
        Use controls to test props. Note: \`open\` only affects \`temporary\` or \`persistent\` variants.
      </Typography>
      <Drawer {...args}>
        <DemoList />
      </Drawer>
    </>,
  args: {
    children: <DemoList />
  }
}`,...(v=(u=p.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,w,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Variants Showcase',
  render: () => {
    const [openLeft, setOpenLeft] = React.useState(false);
    const [openRight, setOpenRight] = React.useState(false);
    const [openTop, setOpenTop] = React.useState(false);
    const [openBottom, setOpenBottom] = React.useState(false);
    return <Stack spacing={4} sx={{
      width: '100%'
    }}>
        <Typography variant="h6">Temporary Drawers</Typography>
        <Stack direction="row" spacing={2} sx={{
        flexWrap: 'wrap'
      }}>
          <Button variant="contained" color="primary" onClick={() => setOpenLeft(true)}>
            Open Left
          </Button>
          <Button variant="outlined" onClick={() => setOpenRight(true)}>
            Open Right
          </Button>
          <Button variant="outlined" onClick={() => setOpenTop(true)}>Open top</Button>
          <Button variant="outlined" onClick={() => setOpenBottom(true)}>Open bottom</Button>
        </Stack>

        <Typography variant="h6">Permanent Drawer</Typography>
        <Box sx={{
        display: 'flex',
        height: 240,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        overflow: 'hidden'
      }}>
          <Drawer anchor="left" variant="permanent" PaperProps={{
          sx: {
            width: 240,
            position: 'relative',
            borderRight: '1px solid',
            borderColor: 'divider'
          }
        }}>
            <DemoList label="Permanent" />
          </Drawer>
          <Box sx={{
          flex: 1,
          p: 2
        }}>
            <Typography variant="h6" sx={{
            mb: 1
          }}>Content Area</Typography>
            <Typography variant="body2">
              A permanent drawer remains visible within its container.
            </Typography>
          </Box>
        </Box>

        {/* Drawer instances for temporary examples */}
        <Drawer anchor="left" variant="temporary" open={openLeft} onClose={() => setOpenLeft(false)} ModalProps={{
        keepMounted: true
      }}>
          <DemoList label="Left Drawer" />
        </Drawer>
        <Drawer anchor="right" variant="temporary" open={openRight} onClose={() => setOpenRight(false)} PaperProps={{
        sx: {
          width: 300
        }
      }}>
          <DemoList label="Right Drawer" />
        </Drawer>
        <Drawer anchor="top" variant="temporary" open={openTop} onClose={() => setOpenTop(false)} PaperProps={{
        sx: {
          height: 'auto'
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
          height: 'auto'
        }
      }}>
          <Box sx={{
          p: 2
        }}>
            <Typography variant="subtitle1">Bottom drawer</Typography>
          </Box>
        </Drawer>
      </Stack>;
  }
}`,...(f=(w=l.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const se=["Playground","Variants"];export{p as Playground,l as Variants,se as __namedExportsOrder,ie as default};
