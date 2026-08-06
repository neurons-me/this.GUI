import{j as e,r as n,B as t,a}from"./iframe-CmZ_q1z4.js";import"./Button-DafFbri_.js";import"./Chip-BTVbmgxv.js";import"./Paper-CcJJK4hI.js";import{L}from"./Layout-DqPtaDcr.js";import{L as R}from"./LeftSidebarContext-BWEWDi7U.js";import{P as B}from"./Tooltip-DhJnZuOk.js";import{C}from"./ClickAwayListener-DOSdxDhI.js";import{S as I}from"./SurfaceAccessTable-C_Ecip-e.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-DEE50VaB.js";import"./Button-C2KQi9R3.js";import"./ButtonBase-C2QUU_ac.js";import"./TransitionGroupContext-Da1OtQvn.js";import"./useForkRef-DyhjSSpi.js";import"./CircularProgress-75u6lE4k.js";import"./createSvgIcon-BJr67T_I.js";import"./Paper-BMIc8Tnd.js";import"./RightSidebarContext-Dxzwle-C.js";import"./TopBar-BiQcn028.js";import"./Menu-CiCo38cc.js";import"./useSlot-CYyWfB0N.js";import"./resolveComponentProps-BFxV9aVJ.js";import"./useSlotProps-Bq_gEvkk.js";import"./isHostComponent-DVu5iVWx.js";import"./Modal-CKg48mq6.js";import"./Grow-BQB6nH-T.js";import"./List-CbH5NTpH.js";import"./ListContext-BEs30NJZ.js";import"./MenuItem-CFaTzU02.js";import"./listItemIconClasses-BsISWJWE.js";import"./listItemTextClasses-DYQe4eT0.js";import"./dividerClasses-C8HhPn6k.js";import"./index-zQzJPhhA.js";import"./useGuiMediaQuery-B66w6CnP.js";import"./getThemeProps-bbO_j9Wi.js";import"./useInsets--uu22R7N.js";import"./Avatar-C57Mvq3V.js";import"./AppBar-m3rf8i8k.js";import"./Toolbar-DjCZRGvk.js";import"./InspectorToggle-BvOKIHof.js";import"./Drawer-BLsbzvLs.js";import"./renderer-DgQvvU-7.js";import"./runtimeContext-btbdyu3b.js";import"./IconButton-jR5QBnBC.js";import"./IconButton-CREQMvOl.js";import"./ListItemIcon-CglfnlWt.js";import"./ListItemText-Dhm13hmh.js";import"./Collapse-DnMNKN6x.js";import"./AppBar-DHUUPHuN.js";import"./Avatar-BqQ7x005.js";import"./StickyOptionsTop-hngbHzvI.js";import"./useControlled-DFkCDk-L.js";function j({color:r="currentColor",size:i=32,spinning:d=!1}){return e.jsx("span",{style:{width:i,height:i,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:i,lineHeight:1,color:r,animation:d?"ng-spin 2s linear infinite":void 0,userSelect:"none"},children:"𓆣"})}j.__docgenInfo={description:"",methods:[],displayName:"BeetleSVG",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}},bgColor:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}},spinning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const G="http://local.netget";async function W(r){try{return await fetch(r+"/apps",{cache:"no-store",signal:AbortSignal.timeout(3e3)}),!0}catch{return!1}}function h({endpoint:r=G,pollMs:i=8e3,sx:d}){const[o,S]=n.useState("checking"),[T,m]=n.useState(!1),x=n.useRef(null),u=n.useRef(null),f=n.useContext(R),s=(f==null?void 0:f.view)==="rail";n.useEffect(()=>{let l=!1;async function b(){const k=await W(r);l||S(k?"online":"offline"),!l&&i>0&&(u.current=setTimeout(b,i))}return b(),()=>{l=!0,u.current&&clearTimeout(u.current)}},[r,i]);const p=o==="online"?"#66bb6a":"#555e66",g=o==="online"?"On":o==="offline"?"Off":"…";return e.jsxs(t,{sx:{width:"100%",minWidth:0,...d},onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:[e.jsxs(t,{component:o==="online"?"a":"div",href:o==="online"?r:void 0,target:"_blank",rel:"noopener noreferrer",sx:{position:"relative",width:s?44:"100%",height:44,mx:s?"auto":0,display:"flex",alignItems:"center",justifyContent:s?"center":"flex-start",gap:1,cursor:o==="online"?"pointer":"default",textDecoration:"none",color:"inherit",background:"transparent",border:"none",boxSizing:"border-box"},children:[e.jsxs(t,{ref:x,sx:{position:"relative",width:44,height:44,flexShrink:0},children:[e.jsx(t,{sx:{width:44,height:44,border:"1px solid",borderColor:"divider",borderRadius:"999px",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",transition:"border-color 120ms ease, transform 120ms ease","&:hover":o==="online"?{transform:"translateY(-1px)"}:{}},children:e.jsx(j,{size:24})}),e.jsx(t,{sx:{position:"absolute",bottom:0,right:0,width:12,height:12,borderRadius:"999px",bgcolor:p,border:"2px solid",borderColor:"background.paper",transition:"background-color 0.3s ease",opacity:o==="checking"?.4:1}})]}),!s&&e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:.75,minWidth:0,flex:1},children:[e.jsx(a,{variant:"body2",sx:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:"local.netget"}),e.jsx(a,{variant:"caption",sx:{color:p,fontWeight:700,flexShrink:0,transition:"color 0.3s ease"},children:g})]})]}),e.jsx(B,{open:s&&T,anchorEl:x.current,placement:"right-start",sx:{zIndex:l=>l.zIndex.drawer+3},children:e.jsx(C,{onClickAway:()=>m(!1),children:e.jsxs(t,{sx:{ml:1,px:1.5,py:1,borderRadius:1.5,border:"1px solid",borderColor:"divider",bgcolor:"background.paper",boxShadow:4,display:"flex",alignItems:"center",gap:1,whiteSpace:"nowrap"},children:[e.jsx(t,{sx:{width:8,height:8,borderRadius:"50%",bgcolor:p,flexShrink:0}}),e.jsx(a,{variant:"body2",sx:{fontWeight:600},children:"local.netget"}),e.jsx(a,{variant:"caption",sx:{color:p,fontWeight:700},children:g})]})})})]})}h.__docgenInfo={description:"",methods:[],displayName:"LocalNetGet",props:{endpoint:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'http://local.netget'",computed:!1}},pollMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8000",computed:!1}},sx:{required:!1,tsType:{name:"any"},description:""}}};const We={title:"All.This/netget/local.netget",component:h,parameters:{layout:"fullscreen"}},c={render:()=>e.jsx(L,{TopBar:{title:"local.netget widget"},LeftBar:{elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard"}},{type:"link",props:{label:"Domains",icon:"language"}},{type:"link",props:{label:"Logs",icon:"article"}}],footerElements:[{type:"action",props:{label:"Gateway",element:e.jsx(h,{})}}]},RightBar:!1,Footer:!1,children:e.jsxs(t,{sx:{p:4,maxWidth:720,display:"flex",flexDirection:"column",gap:3},children:[e.jsxs(t,{children:[e.jsx(a,{variant:"h5",sx:{fontWeight:700,mb:.5},children:"NetGet"}),e.jsx(a,{variant:"body2",color:"text.secondary",children:"Gateway to the web. Routes hostnames to monads via OpenResty."})]}),e.jsx(I,{})]})})};var y,v,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Layout TopBar={{
    title: 'local.netget widget'
  }} LeftBar={{
    elements: [{
      type: 'link',
      props: {
        label: 'Dashboard',
        icon: 'dashboard'
      }
    }, {
      type: 'link',
      props: {
        label: 'Domains',
        icon: 'language'
      }
    }, {
      type: 'link',
      props: {
        label: 'Logs',
        icon: 'article'
      }
    }],
    footerElements: [{
      type: 'action',
      props: {
        label: 'Gateway',
        element: <LocalNetGet />
      }
    }]
  }} RightBar={false} Footer={false}>
      <Box sx={{
      p: 4,
      maxWidth: 720,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }}>
        <Box>
          <Typography variant="h5" sx={{
          fontWeight: 700,
          mb: 0.5
        }}>
            NetGet
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gateway to the web. Routes hostnames to monads via OpenResty.
          </Typography>
        </Box>
        <SurfaceAccessTable />
      </Box>
    </Layout>
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const Ee=["InSidebar"];export{c as InSidebar,Ee as __namedExportsOrder,We as default};
