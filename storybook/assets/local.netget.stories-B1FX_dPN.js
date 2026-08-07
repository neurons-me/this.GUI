import{j as e,r as n,B as t,a}from"./iframe-BOpb4YIv.js";import"./Button-DLg_2bWS.js";import"./Chip-Jw9wd0Uq.js";import{L}from"./Layout-IAcM6KGn.js";import{L as R}from"./LeftSidebarContext-Bc78bTHn.js";import{P as B}from"./Tooltip-DLbppr6W.js";import{C}from"./ClickAwayListener--Ssl014F.js";import{S as I}from"./SurfaceAccessTable-mwgIOkTL.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-DzmBtpNi.js";import"./Button-BBkqSahG.js";import"./ButtonBase-wlOBdJtH.js";import"./TransitionGroupContext-BS26-g3U.js";import"./useForkRef-dhPZUXrW.js";import"./CircularProgress-DO1ae1Up.js";import"./createSvgIcon-Boif_Qzi.js";import"./RightSidebarContext-CStvAXf-.js";import"./TopBar-oUPkkUvd.js";import"./Menu-DC8cg--Q.js";import"./useSlot-HWh9e-Qv.js";import"./resolveComponentProps-CHSBRdpi.js";import"./useSlotProps-Bqtf_G4K.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CXVojHGY.js";import"./Modal-DTdlQupa.js";import"./Grow-DcgXnIYz.js";import"./List-DCx-fdb4.js";import"./ListContext-DxyJOsjJ.js";import"./MenuItem-C8wM5jql.js";import"./listItemIconClasses-CSdBHDnA.js";import"./listItemTextClasses-Bjqy9_ye.js";import"./dividerClasses-DU1eXcIB.js";import"./index-BEzWTozk.js";import"./useGuiMediaQuery-CzNeDUBy.js";import"./getThemeProps-B1DPgGZg.js";import"./useInsets-CuNsBlYE.js";import"./Avatar-YW5PkMUC.js";import"./AppBar-C6pFo9I4.js";import"./Toolbar-DMjcZbrA.js";import"./InspectorToggle-DAQxw7h1.js";import"./Drawer-CS-fZvWK.js";import"./Paper-CRwrMbzS.js";import"./renderer-BVJst6-E.js";import"./runtimeContext-CzmwpH0Y.js";import"./IconButton-BQ3BjMi8.js";import"./IconButton-Btnx6d7J.js";import"./ListItemIcon-e8U0ao5E.js";import"./ListItemText-LBsMmETJ.js";import"./Collapse-Dr-lrEEJ.js";import"./AppBar-CQXAsQbj.js";import"./Avatar-BXKuPOGJ.js";import"./StickyOptionsTop-BKG3VjDY.js";import"./useControlled-nmmvMmEZ.js";function j({color:r="currentColor",size:i=32,spinning:d=!1}){return e.jsx("span",{style:{width:i,height:i,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:i,lineHeight:1,color:r,animation:d?"ng-spin 2s linear infinite":void 0,userSelect:"none"},children:"𓆣"})}j.__docgenInfo={description:"",methods:[],displayName:"BeetleSVG",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}},bgColor:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}},spinning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const G="http://local.netget";async function W(r){try{return await fetch(r+"/apps",{cache:"no-store",signal:AbortSignal.timeout(3e3)}),!0}catch{return!1}}function h({endpoint:r=G,pollMs:i=8e3,sx:d}){const[o,S]=n.useState("checking"),[T,m]=n.useState(!1),x=n.useRef(null),u=n.useRef(null),f=n.useContext(R),s=(f==null?void 0:f.view)==="rail";n.useEffect(()=>{let l=!1;async function b(){const k=await W(r);l||S(k?"online":"offline"),!l&&i>0&&(u.current=setTimeout(b,i))}return b(),()=>{l=!0,u.current&&clearTimeout(u.current)}},[r,i]);const p=o==="online"?"#66bb6a":"#555e66",g=o==="online"?"On":o==="offline"?"Off":"…";return e.jsxs(t,{sx:{width:"100%",minWidth:0,...d},onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:[e.jsxs(t,{component:o==="online"?"a":"div",href:o==="online"?r:void 0,target:"_blank",rel:"noopener noreferrer",sx:{position:"relative",width:s?44:"100%",height:44,mx:s?"auto":0,display:"flex",alignItems:"center",justifyContent:s?"center":"flex-start",gap:1,cursor:o==="online"?"pointer":"default",textDecoration:"none",color:"inherit",background:"transparent",border:"none",boxSizing:"border-box"},children:[e.jsxs(t,{ref:x,sx:{position:"relative",width:44,height:44,flexShrink:0},children:[e.jsx(t,{sx:{width:44,height:44,border:"1px solid",borderColor:"divider",borderRadius:"999px",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",transition:"border-color 120ms ease, transform 120ms ease","&:hover":o==="online"?{transform:"translateY(-1px)"}:{}},children:e.jsx(j,{size:24})}),e.jsx(t,{sx:{position:"absolute",bottom:0,right:0,width:12,height:12,borderRadius:"999px",bgcolor:p,border:"2px solid",borderColor:"background.paper",transition:"background-color 0.3s ease",opacity:o==="checking"?.4:1}})]}),!s&&e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:.75,minWidth:0,flex:1},children:[e.jsx(a,{variant:"body2",sx:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:"local.netget"}),e.jsx(a,{variant:"caption",sx:{color:p,fontWeight:700,flexShrink:0,transition:"color 0.3s ease"},children:g})]})]}),e.jsx(B,{open:s&&T,anchorEl:x.current,placement:"right-start",sx:{zIndex:l=>l.zIndex.drawer+3},children:e.jsx(C,{onClickAway:()=>m(!1),children:e.jsxs(t,{sx:{ml:1,px:1.5,py:1,borderRadius:1.5,border:"1px solid",borderColor:"divider",bgcolor:"background.paper",boxShadow:4,display:"flex",alignItems:"center",gap:1,whiteSpace:"nowrap"},children:[e.jsx(t,{sx:{width:8,height:8,borderRadius:"50%",bgcolor:p,flexShrink:0}}),e.jsx(a,{variant:"body2",sx:{fontWeight:600},children:"local.netget"}),e.jsx(a,{variant:"caption",sx:{color:p,fontWeight:700},children:g})]})})})]})}h.__docgenInfo={description:"",methods:[],displayName:"LocalNetGet",props:{endpoint:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'http://local.netget'",computed:!1}},pollMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8000",computed:!1}},sx:{required:!1,tsType:{name:"any"},description:""}}};const We={title:"All.This/netget/local.netget",component:h,parameters:{layout:"fullscreen"}},c={render:()=>e.jsx(L,{TopBar:{title:"local.netget widget"},LeftBar:{elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard"}},{type:"link",props:{label:"Domains",icon:"language"}},{type:"link",props:{label:"Logs",icon:"article"}}],footerElements:[{type:"action",props:{label:"Gateway",element:e.jsx(h,{})}}]},RightBar:!1,Footer:!1,children:e.jsxs(t,{sx:{p:4,maxWidth:720,display:"flex",flexDirection:"column",gap:3},children:[e.jsxs(t,{children:[e.jsx(a,{variant:"h5",sx:{fontWeight:700,mb:.5},children:"NetGet"}),e.jsx(a,{variant:"body2",color:"text.secondary",children:"Gateway to the web. Routes hostnames to monads via OpenResty."})]}),e.jsx(I,{})]})})};var y,v,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
