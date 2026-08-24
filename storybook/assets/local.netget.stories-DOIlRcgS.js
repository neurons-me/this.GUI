import{j as e,r as n,B as t,a}from"./iframe-C_b0i3u8.js";import"./Button-mr_aWkNz.js";import"./Chip-BnLuWVgV.js";import"./Paper-p9eezbgu.js";import{L as C}from"./Layout-CAp-XTNZ.js";import{L as R}from"./LeftSidebarContext-3FXCKWFS.js";import{P as L}from"./Tooltip-Nvc_UGsj.js";import{C as B}from"./ClickAwayListener-Ciat0JcE.js";import{S as I}from"./SurfaceAccessTable-D_GpsIlD.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-Dg0Fnz52.js";import"./Button-DaKRkwMu.js";import"./ButtonBase-CBZ6tj8F.js";import"./TransitionGroupContext-DA-WNYvH.js";import"./useForkRef-qTVDMFQr.js";import"./CircularProgress-DExCAnw9.js";import"./createSvgIcon-BRYETk95.js";import"./Paper-Boii5j1w.js";import"./TopBar-DCXuAIai.js";import"./Menu-BmxRIfpd.js";import"./useSlot-G4ByF3pc.js";import"./resolveComponentProps-Drajm3zd.js";import"./useSlotProps-HAMG0RiA.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-CH6Tu7Dy.js";import"./Portal-4Utnz7R5.js";import"./Grow-D4N9GH66.js";import"./mergeSlotProps-DYU3Hg2s.js";import"./List-Cw_AV0Pi.js";import"./ListContext-CVvYdQEp.js";import"./MenuItem-Br5KfxSn.js";import"./listItemIconClasses-Cc2CuJ3o.js";import"./listItemTextClasses-Cde-U1LC.js";import"./dividerClasses-UjyL7AFI.js";import"./index-C2pm_4fX.js";import"./useGuiMediaQuery-B5yZKInx.js";import"./getThemeProps-BGG3twlu.js";import"./useInsets-DA-vR9Ji.js";import"./Avatar-6f-rd4nL.js";import"./AppBar-CpERTJpY.js";import"./Toolbar-C_-YGC8g.js";import"./Collapse-B_UpAWAu.js";import"./IconButton-D_PHND5e.js";import"./InspectorToggle-DHMJbXJf.js";import"./Drawer-DUsYWcFM.js";import"./renderer-q29RPfuI.js";import"./IconButton-BDpt7_X6.js";import"./ListItemIcon-DjjSIRtc.js";import"./ListItemText-npHmLwIa.js";import"./AppBar-DgGRurwB.js";import"./Avatar-DlJ68fP-.js";import"./StickyOptionsTop-BW1Qxo-f.js";import"./useControlled-Dv24GBNp.js";function j({color:r="currentColor",size:i=32,spinning:d=!1}){return e.jsx("span",{style:{width:i,height:i,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:i,lineHeight:1,color:r,animation:d?"ng-spin 2s linear infinite":void 0,userSelect:"none"},children:"𓆣"})}j.__docgenInfo={description:"",methods:[],displayName:"BeetleSVG",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}},bgColor:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}},spinning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const E="http://local.netget";async function G(r){try{return await fetch(r+"/apps",{cache:"no-store",signal:AbortSignal.timeout(3e3)}),!0}catch{return!1}}function h({endpoint:r=E,pollMs:i=8e3,sx:d}){const[o,k]=n.useState("checking"),[S,m]=n.useState(!1),x=n.useRef(null),u=n.useRef(null),f=n.useContext(R),s=(f==null?void 0:f.view)==="rail";n.useEffect(()=>{let l=!1;async function b(){const T=await G(r);l||k(T?"online":"offline"),!l&&i>0&&(u.current=setTimeout(b,i))}return b(),()=>{l=!0,u.current&&clearTimeout(u.current)}},[r,i]);const p=o==="online"?"#66bb6a":"#555e66",g=o==="online"?"On":o==="offline"?"Off":"…";return e.jsxs(t,{sx:{width:"100%",minWidth:0,...d},onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:[e.jsxs(t,{component:o==="online"?"a":"div",href:o==="online"?r:void 0,target:"_blank",rel:"noopener noreferrer",sx:{position:"relative",width:s?44:"100%",height:44,mx:s?"auto":0,display:"flex",alignItems:"center",justifyContent:s?"center":"flex-start",gap:1,cursor:o==="online"?"pointer":"default",textDecoration:"none",color:"inherit",background:"transparent",border:"none",boxSizing:"border-box"},children:[e.jsxs(t,{ref:x,sx:{position:"relative",width:44,height:44,flexShrink:0},children:[e.jsx(t,{sx:{width:44,height:44,border:"1px solid",borderColor:"divider",borderRadius:"999px",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",transition:"border-color 120ms ease, transform 120ms ease","&:hover":o==="online"?{transform:"translateY(-1px)"}:{}},children:e.jsx(j,{size:24})}),e.jsx(t,{sx:{position:"absolute",bottom:0,right:0,width:12,height:12,borderRadius:"999px",bgcolor:p,border:"2px solid",borderColor:"background.paper",transition:"background-color 0.3s ease",opacity:o==="checking"?.4:1}})]}),!s&&e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:.75,minWidth:0,flex:1},children:[e.jsx(a,{variant:"body2",sx:{fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:"local.netget"}),e.jsx(a,{variant:"caption",sx:{color:p,fontWeight:700,flexShrink:0,transition:"color 0.3s ease"},children:g})]})]}),e.jsx(L,{open:s&&S,anchorEl:x.current,placement:"right-start",sx:{zIndex:l=>l.zIndex.drawer+3},children:e.jsx(B,{onClickAway:()=>m(!1),children:e.jsxs(t,{sx:{ml:1,px:1.5,py:1,borderRadius:1.5,border:"1px solid",borderColor:"divider",bgcolor:"background.paper",boxShadow:4,display:"flex",alignItems:"center",gap:1,whiteSpace:"nowrap"},children:[e.jsx(t,{sx:{width:8,height:8,borderRadius:"50%",bgcolor:p,flexShrink:0}}),e.jsx(a,{variant:"body2",sx:{fontWeight:600},children:"local.netget"}),e.jsx(a,{variant:"caption",sx:{color:p,fontWeight:700},children:g})]})})})]})}h.__docgenInfo={description:"",methods:[],displayName:"LocalNetGet",props:{endpoint:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'http://local.netget'",computed:!1}},pollMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8000",computed:!1}},sx:{required:!1,tsType:{name:"any"},description:""}}};const We={title:"All.This/netget/local.netget",component:h,parameters:{layout:"fullscreen"}},O=[{namespace:"localhost",kind:"netget",online:!0},{namespace:"127.0.0.1",kind:"netget",online:!0},{namespace:"local.netget",kind:"netget",online:!0},{namespace:"suis-macbook-air.local",kind:"monad",online:!0,endpoint:"http://127.0.0.1:4021",trust:"owner"},{namespace:"jabellae.suis-macbook-air.local",kind:"monad",online:!1,endpoint:"http://127.0.0.1:4022"},{namespace:"example.com",kind:"public",online:!0,endpoint:"http://127.0.0.1:3000"},{namespace:"raw-tcp-9090",kind:"direct",online:!0,endpoint:"127.0.0.1:9090"}],c={render:()=>e.jsx(C,{TopBar:{title:"local.netget widget"},LeftBar:{elements:[{type:"link",props:{label:"Dashboard",icon:"dashboard"}},{type:"link",props:{label:"Domains",icon:"language"}},{type:"link",props:{label:"Logs",icon:"article"}}],footerElements:[{type:"action",props:{label:"Gateway",element:e.jsx(h,{})}}]},RightBar:!1,Footer:!1,children:e.jsxs(t,{sx:{p:4,maxWidth:720,display:"flex",flexDirection:"column",gap:3},children:[e.jsxs(t,{children:[e.jsx(a,{variant:"h5",sx:{fontWeight:700,mb:.5},children:"NetGet"}),e.jsx(a,{variant:"body2",color:"text.secondary",children:"Gateway to the web. Routes hostnames to monads via OpenResty."})]}),e.jsx(I,{rows:O})]})})};var y,w,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        <SurfaceAccessTable rows={MOCK_SURFACES} />
      </Box>
    </Layout>
}`,...(v=(w=c.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const Ne=["InSidebar"];export{c as InSidebar,Ne as __namedExportsOrder,We as default};
