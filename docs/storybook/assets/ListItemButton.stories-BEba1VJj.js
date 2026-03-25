import{r as u,e as q,c as K,j as t,f as O,g as Q,s as X,a_ as Y,m as Z,h as x}from"./iframe-BNfi7WN_.js";import{L as P}from"./ListContext-BimDmIg0.js";import{g as ee,l as c,L as te}from"./ListItem-BaQTvk_T.js";import{u as se}from"./useForkRef-BCDK4QT4.js";import{B as oe}from"./ButtonBase-DUhu_tYS.js";import{L}from"./ListItemIcon-CPx-vxOK.js";import{L as v}from"./ListItemText-tY7cVnbs.js";import{I as l}from"./Icon-NdOwP1f0.js";import{L as re}from"./List-CsND9B0i.js";import"./preload-helper-Dp1pzeXC.js";import"./isMuiElement-CLwg_Cy-.js";import"./TransitionGroupContext-C503Ao5U.js";import"./useEventCallback-BjQzoJu9.js";import"./listItemIconClasses-CllGdsld.js";import"./listItemTextClasses-NtgOdK8W.js";import"./useSlot-DUQFKJhm.js";import"./createSvgIcon-BHDq88zH.js";const ne=(e,s)=>{const{ownerState:o}=e;return[s.root,o.dense&&s.dense,o.alignItems==="flex-start"&&s.alignItemsFlexStart,o.divider&&s.divider,!o.disableGutters&&s.gutters]},ae=e=>{const{alignItems:s,classes:o,dense:d,disabled:n,disableGutters:m,divider:p,selected:h}=e,a=Q({root:["root",d&&"dense",!m&&"gutters",p&&"divider",n&&"disabled",s==="flex-start"&&"alignItemsFlexStart",h&&"selected"]},ee,o);return{...o,...a}},ie=X(oe,{shouldForwardProp:e=>Y(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:ne})(Z(({theme:e})=>({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:x(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${c.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:x(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${c.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:x(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:x(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${c.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${c.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},variants:[{props:({ownerState:s})=>s.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:s})=>!s.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:s})=>s.dense,style:{paddingTop:4,paddingBottom:4}}]}))),ce=u.forwardRef(function(s,o){const d=q({props:s,name:"MuiListItemButton"}),{alignItems:n="center",autoFocus:m=!1,component:p="div",children:h,dense:j=!1,disableGutters:a=!1,divider:_=!1,focusVisibleClassName:U,selected:z=!1,className:H,...i}=d,S=u.useContext(P),k=u.useMemo(()=>({dense:j||S.dense||!1,alignItems:n,disableGutters:a}),[n,S.dense,j,a]),B=u.useRef(null);K(()=>{m&&B.current&&B.current.focus()},[m]);const $={...d,alignItems:n,dense:k.dense,disableGutters:a,divider:_,selected:z},C=ae($),J=se(B,o);return t.jsx(P.Provider,{value:k,children:t.jsx(ie,{ref:J,href:i.href||i.to,component:(i.href||i.to)&&p==="div"?"button":p,focusVisibleClassName:O(C.focusVisible,U),ownerState:$,className:O(C.root,H),...i,classes:C,children:h})})}),r=ce;r.displayName="Gui.ListItemButton";const Se={title:"Molecules/List/ListItemButton",component:r,tags:["autodocs"],decorators:[e=>t.jsx("div",{style:{padding:16,minHeight:260,maxWidth:560},children:t.jsx(e,{})})],parameters:{docs:{description:{component:`
The **ListItemButton** atom is a thin wrapper around MUI's \`MuiListItemButton\`, staying faithful to its API and polymorphism.

In **declarative** mode, the resolver adds sugar:
- \`startIcon\` / \`endIcon\`: token (e.g., \`"lucide:mail"\`, \`"mui:settings"\`) or ReactNode — rendered via the icon registry
- \`label\` / \`secondary\` → mapped to \`<ListItemText primary/secondary />\`
- Granular styling:
  - \`sx\` (root), \`iconSx\` (leading \`ListItemIcon\`), \`textSx\` (text), \`endIconSx\` (trailing icon container)

---
## React usage
~~~jsx
<List>
  <ListItem disablePadding>
    <ListItemButton selected>
      <ListItemIcon>
        <Icon name="lucide:mail" />
      </ListItemIcon>
      <ListItemText primary="Inbox" secondary="Messages" />
    </ListItemButton>
  </ListItem>
</List>
~~~

## Declarative JSON / Resolver
~~~json
{
  "type": "ListItemButton",
  "props": {
    "startIcon": "lucide:mail",
    "label": "Inbox",
    "secondary": "Messages",
    "sx": { "py": 1 },
    "iconSx": { "minWidth": 36 },
    "textSx": { "my": 0 }
  }
}
~~~
        `}},controls:{exclude:["component","children"]}},argTypes:{selected:{control:"boolean"},disabled:{control:"boolean"},dense:{control:"boolean"},divider:{control:"boolean"},alignItems:{control:{type:"radio"},options:["center","flex-start"]},sx:{control:"object"}},args:{selected:!1,disabled:!1,dense:!1,divider:!1,alignItems:"center",sx:{},children:void 0}},b=({children:e})=>t.jsx(re,{dense:!0,sx:{bgcolor:"background.paper",borderRadius:1,overflow:"hidden",border:"1px solid",borderColor:"divider"},children:t.jsx(te,{disablePadding:!0,children:e})}),I={render:e=>t.jsx(b,{children:t.jsxs(r,{...e,children:[t.jsx(L,{children:t.jsx(l,{name:"mail"})}),t.jsx(v,{primary:"Inbox",secondary:"Messages"})]})})},g={render:()=>t.jsx(b,{children:t.jsxs(r,{children:[t.jsx(L,{children:t.jsx(l,{name:"settings"})}),t.jsx(v,{primary:"Settings",secondary:"Preferences"}),t.jsx("span",{style:{marginLeft:"auto",display:"inline-flex"},children:t.jsx(l,{name:"chevron_right"})})]})})},y={render:()=>t.jsx(b,{children:t.jsxs(r,{component:"a",href:"https://neurons.me",children:[t.jsx(L,{children:t.jsx(l,{name:"link"})}),t.jsx(v,{primary:"neurons.me",secondary:"External link"})]})})},f={render:()=>t.jsx(b,{children:t.jsxs(r,{sx:{py:1.25},children:[t.jsx(L,{sx:{minWidth:40},children:t.jsx(l,{name:"person"})}),t.jsx(v,{primary:"Profile",secondary:"Account",slotProps:{secondary:{sx:{color:"text.secondary"}}}})]})})};var R,T,D;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <DemoList>
      <ListItemButton {...args}>
        <ListItemIcon>
          <Icon name="mail" />
        </ListItemIcon>
        <ListItemText primary="Inbox" secondary="Messages" />
      </ListItemButton>
    </DemoList>
}`,...(D=(T=I.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var M,W,w;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <DemoList>
      <ListItemButton>
        <ListItemIcon>
          <Icon name="settings" />
        </ListItemIcon>
        <ListItemText primary="Settings" secondary="Preferences" />
        <span style={{
        marginLeft: 'auto',
        display: 'inline-flex'
      }}>
          <Icon name="chevron_right" />
        </span>
      </ListItemButton>
    </DemoList>
}`,...(w=(W=g.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var A,E,G;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <DemoList>
      <ListItemButton component="a" href="https://neurons.me">
        <ListItemIcon>
          <Icon name="link" />
        </ListItemIcon>
        <ListItemText primary="neurons.me" secondary="External link" />
      </ListItemButton>
    </DemoList>
}`,...(G=(E=y.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var N,F,V;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <DemoList>
      <ListItemButton sx={{
      py: 1.25
    }}>
        <ListItemIcon sx={{
        minWidth: 40
      }}>
          <Icon name="person" />
        </ListItemIcon>
        <ListItemText primary="Profile" secondary="Account" slotProps={{
        secondary: {
          sx: {
            color: 'text.secondary'
          }
        }
      }} />
      </ListItemButton>
    </DemoList>
}`,...(V=(F=f.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};const ke=["Playground","WithTrailingIcon","AsAnchorLink","WithSx"];export{y as AsAnchorLink,I as Playground,f as WithSx,g as WithTrailingIcon,ke as __namedExportsOrder,Se as default};
