import{j as e,r as n,B as t,a}from"./iframe-CP9CNxx8.js";import"./Button-DXB5L6yH.js";import"./Chip-C6-sHy1n.js";import"./Paper-H4VYbcNq.js";import{L}from"./Layout-DPvsfICX.js";import{L as R}from"./LeftSidebarContext-BOpBW9Bk.js";import{P as B}from"./Tooltip-DQd5pZ-T.js";import{C}from"./ClickAwayListener-BtP3eSGd.js";import{S as I}from"./SurfaceAccessTable-Bivz1pbR.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-BnIUx9th.js";import"./Button-BXZoRsTR.js";import"./ButtonBase-3VpcqpZw.js";import"./TransitionGroupContext-Ck5bRGCF.js";import"./useForkRef-DbsbHXzv.js";import"./CircularProgress-_EZIbAZb.js";import"./createSvgIcon-CULnpTNi.js";import"./Paper-Dej_UP1C.js";import"./RightSidebarContext-CPWRa5qv.js";import"./TopBar-NeU6Jmrc.js";import"./Menu-CxnaEBrZ.js";import"./useSlot-Mh1rGqki.js";import"./resolveComponentProps-ClcYrv8r.js";import"./useSlotProps-prOgqQUI.js";import"./isHostComponent-DVu5iVWx.js";import"./Modal-C378D8Mh.js";import"./Grow-CIgwTQ5t.js";import"./List-dcxI-oUi.js";import"./ListContext-BdVLFpgb.js";import"./MenuItem-CdAcOgof.js";import"./listItemIconClasses-t_-ds97q.js";import"./listItemTextClasses-DLUOdunC.js";import"./dividerClasses-BFmk34HT.js";import"./index-BaMcS7Yy.js";import"./useGuiMediaQuery-ByBF8RQx.js";import"./getThemeProps-DgA4-TRf.js";import"./useInsets-BR-u-XBz.js";import"./Avatar-cinzEPDc.js";import"./AppBar-C27ajw5s.js";import"./Toolbar-C8qlW-S0.js";import"./InspectorToggle-BFlA6Z6-.js";import"./Drawer-D8k4iXFm.js";import"./renderer-AB4KhwIg.js";import"./runtimeContext-DMLQNDdw.js";import"./IconButton-BrPyFgEk.js";import"./IconButton-CCIAIfSL.js";import"./ListItemIcon-1zpiHevt.js";import"./ListItemText-CddPeRgJ.js";import"./Collapse-Lfy74YwS.js";import"./AppBar-sUqBlSTR.js";import"./Avatar-9qaPeoNo.js";import"./StickyOptionsTop-DcARegNH.js";import"./useControlled-BLlI_aPv.js";function j({color:r="currentColor",size:i=32,spinning:d=!1}){return e.jsx("span",{style:{width:i,height:i,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:i,lineHeight:1,color:r,animation:d?"ng-spin 2s linear infinite":void 0,userSelect:"none"},children:"𓆣"})}j.__docgenInfo={description:"",methods:[],displayName:"BeetleSVG",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}},bgColor:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}},spinning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const G="http://local.netget";async function W(r){try{return await fetch(r+"/apps",{cache:"no-store",signal:AbortSignal.timeout(3e3)}),!0}catch{return!1}}function h({endpoint:r=G,pollMs:i=8e3,sx:d}){const[o,S]=n.useState("checking"),[T,m]=n.useState(!1),x=n.useRef(null),u=n.useRef(null),f=n.useContext(R),s=(f==null?void 0:f.view)==="rail";n.useEffect(()=>{let l=!1;async function b(){const k=await W(r);l||S(k?"online":"offline"),!l&&i>0&&(u.current=setTimeout(b,i))}return b(),()=>{l=!0,u.current&&clearTimeout(u.current)}},[r,i]);const p=o==="online"?"#66bb6a":"#555e66",g=o==="online"?"On":o==="offline"?"Off":"…";return e.jsxs(t,{sx:{width:"100%",minWidth:0,...d},onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:[e.jsxs(t,{component:o==="online"?"a":"div",href:o==="online"?r:void 0,target:"_blank",rel:"noopener noreferrer",sx:{position:"relative",width:s?44:"100%",height:44,mx:s?"auto":0,display:"flex",alignItems:"center",justifyContent:s?"center":"flex-start",gap:1,cursor:o==="online"?"pointer":"default",textDecoration:"none",color:"inherit",background:"transparent",border:"none",boxSizing:"border-box"},children:[e.jsxs(t,{ref:x,sx:{position:"relative",width:44,height:44,flexShrink:0},children:[e.jsx(t,{sx:{width:44,height:44,border:"1px solid",borderColor:"divider",borderRadius:"999px",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",transition:"border-color 120ms ease, transform 120ms ease","&:hover":o==="online"?{transform:"translateY(-1px)"}:{}},children:e.jsx(j,{size:24})}),e.jsx(t,{sx:{position:"absolute",bottom:0,right:0,width:12,height:12,borderRadius:"999px",bgcolor:p,border:"2px solid",borderColor:"background.paper",transition:"background-color 0.3s ease",opacity:o==="checking"?.4:1}})]}),!s&&e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:.75,minWidth:0,flex:1},children:[e.jsx(a,{variant:"body2",sx:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:"local.netget"}),e.jsx(a,{variant:"caption",sx:{color:p,fontWeight:700,flexShrink:0,transition:"color 0.3s ease"},children:g})]})]}),e.jsx(B,{open:s&&T,anchorEl:x.current,placement:"right-start",sx:{zIndex:l=>l.zIndex.drawer+3},children:e.jsx(C,{onClickAway:()=>m(!1),children:e.jsxs(t,{sx:{ml:1,px:1.5,py:1,borderRadius:1.5,border:"1px solid",borderColor:"divider",bgcolor:"background.paper",boxShadow:4,display:"flex",alignItems:"center",gap:1,whiteSpace:"nowrap"},children:[e.jsx(t,{sx:{width:8,height:8,borderRadius:"50%",bgcolor:p,flexShrink:0}}),e.jsx(a,{variant:"body2",sx:{fontWeight:600},children:"local.netget"}),e.jsx(a,{variant:"caption",sx:{color:p,fontWeight:700},children:g})]})})})]})}h.__docgenInfo={description:"",methods:[],displayName:"LocalNetGet",props:{endpoint:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'http://local.netget'",computed:!1}},pollMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8000",computed:!1}},sx:{required:!1,tsType:{name:"any"},description:""}}};const We={title:"All.This/netget/local.netget",component:h,parameters:{layout:"fullscreen"}},c={render:()=>e.jsx(L,{TopBar:{title:"local.netget widget"},LeftBar:{elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard"}},{type:"link",props:{label:"Domains",icon:"language"}},{type:"link",props:{label:"Logs",icon:"article"}}],footerElements:[{type:"action",props:{label:"Gateway",element:e.jsx(h,{})}}]},RightBar:!1,Footer:!1,children:e.jsxs(t,{sx:{p:4,maxWidth:720,display:"flex",flexDirection:"column",gap:3},children:[e.jsxs(t,{children:[e.jsx(a,{variant:"h5",sx:{fontWeight:700,mb:.5},children:"NetGet"}),e.jsx(a,{variant:"body2",color:"text.secondary",children:"Gateway to the web. Routes hostnames to monads via OpenResty."})]}),e.jsx(I,{})]})})};var y,v,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
