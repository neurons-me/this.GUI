import{j as e,r as o,T as L,B as a,a as r,b as k,M}from"./iframe-DC1i1573.js";import{B as b}from"./Button-OznIF1P0.js";import"./Chip-DFuUJxJw.js";import{P as l}from"./Paper-CKIt3RHD.js";import{R as W}from"./Router-1XGS6e7P.js";import{P as x}from"./InspectorToggle-DJwDlegS.js";import"./ListItemIcon-ZanOEmyx.js";import"./ListItemText-B84pw0of.js";import"./Drawer-BJf2efgA.js";import{S as _}from"./Stack-6pd6mAdi.js";import"./Tooltip-BJSpTCc5.js";import{u as I}from"./useDeferredPending-Ue_xy3Ru.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-CuVJ4y2k.js";import"./Button-Cw1rExmT.js";import"./ButtonBase-BrZ6brEn.js";import"./TransitionGroupContext-BZk-WlWb.js";import"./useForkRef-hpkiJGPF.js";import"./CircularProgress-C0wTbWDO.js";import"./createSvgIcon-CArePSch.js";import"./Paper-C8sdzyzT.js";import"./index-CsCTrrmg.js";import"./renderer-BOtl_gvK.js";import"./runtimeContext-CVXgUwjX.js";import"./Toolbar-DpKn-ZL2.js";import"./IconButton-Wjc3ccB5.js";import"./IconButton-TDHo9m7u.js";import"./listItemIconClasses-BwKUXR3I.js";import"./ListContext-DNDBaubu.js";import"./listItemTextClasses-CTxYf6qB.js";import"./useSlot-D_8lZxqR.js";import"./resolveComponentProps-C5BoffGy.js";import"./dividerClasses-Bd48RbK3.js";import"./Grow-D9IP3D0G.js";import"./Modal-CLLebtp2.js";import"./useSlotProps-DIS-q9VP.js";import"./getThemeProps-BRLZPA78.js";import"./useControlled-DbmrnxXO.js";function S(i,n){return new Promise((u,s)=>{const m=window.setTimeout(()=>{h(),u()},i),c=()=>{window.clearTimeout(m),h(),s(new DOMException("Aborted","AbortError"))},h=()=>{n==null||n.removeEventListener("abort",c)};if(n!=null&&n.aborted){c();return}n==null||n.addEventListener("abort",c,{once:!0})})}const U=120,B=140;function R(){return e.jsxs(x,{padding:3,children:[e.jsx(r,{variant:"h4",children:"Dashboard"}),e.jsx(r,{variant:"body2",sx:{opacity:.78,mt:.5},children:"Fast route. Good baseline before navigating into async screens."}),e.jsxs(l,{sx:{p:2,borderRadius:2,mt:2},children:[e.jsx(r,{variant:"body1",children:"Current status"}),e.jsx(r,{variant:"body2",sx:{opacity:.8},children:"Ready"})]})]})}function $(i){return e.jsxs(x,{padding:3,children:[e.jsx(r,{variant:"h4",children:`Shop ${i}`}),e.jsx(r,{variant:"body2",sx:{opacity:.78,mt:.5},children:`Async route resolved for id=${i}`}),e.jsxs(l,{sx:{p:2,borderRadius:2,mt:2},children:[e.jsx(r,{variant:"body1",children:`Loaded record ${i}`}),e.jsx(r,{variant:"body2",sx:{opacity:.8},children:"This route simulates a delayed factory before returning the final screen."})]})]})}function H(i){return e.jsxs(x,{padding:3,children:[e.jsx(r,{variant:"h4",children:"Docs"}),e.jsx(r,{variant:"body2",sx:{opacity:.78,mt:.5},children:`Wildcard section=${i}`}),e.jsxs(l,{sx:{p:2,borderRadius:2,mt:2},children:[e.jsx(r,{variant:"body1",children:`Showing ${i}`}),e.jsx(r,{variant:"body2",sx:{opacity:.8},children:"Wildcards are useful for docs trees, explorers, and nested knowledge spaces."})]})]})}function K(i){return e.jsxs(x,{padding:3,children:[e.jsx(r,{variant:"h4",children:"Loading next route..."}),e.jsx(r,{variant:"body2",sx:{opacity:.78,mt:.5},children:`Preparing ${i}`}),e.jsxs(l,{sx:{p:2,borderRadius:2,mt:2,borderStyle:"dashed",borderWidth:1,borderColor:"divider"},children:[e.jsx(r,{variant:"body1",children:"Pending shell"}),e.jsx(r,{variant:"body2",sx:{opacity:.8},children:"Use this pattern when you want the route transition itself to communicate loading."})]})]})}function T({mode:i,title:n,subtitle:u}){const s=o.useMemo(()=>new W({useHistory:!1}),[]),[m,c]=o.useState("/dashboard"),[h,y]=o.useState(()=>R()),[j,f]=o.useState(null),{isRunning:E,showLoader:p,run:v,cancel:w}=I({threshold:180,onCancelPrevious:"abort"});o.useEffect(()=>{s.set("/dashboard",()=>R()),s.set("/shops/:id",async({ctx:t})=>$(t.params.id)),s.set("/docs/*",async({ctx:t})=>H(t.wildcard||"index"));const d=s.onChange((t,A)=>{y(t),c(A.path)});return s.navigate("/dashboard",{push:!1}),()=>{d(),w(),s.destroy()}},[w,s]),o.useEffect(()=>{i==="swap"&&p&&j&&y(K(j))},[i,j,p]);const g=o.useCallback(async d=>{f(d),await v(async({signal:t})=>(d.startsWith("/shops/")?await S(U,t):d.startsWith("/docs/")&&await S(B,t),s.navigate(d,{push:!1}))),f(null)},[s,v]);return e.jsx(L,{initialThemeId:"neurons.me",initialMode:"dark",children:e.jsxs(a,{sx:{p:3,display:"grid",gap:2},children:[e.jsxs(a,{children:[e.jsx(r,{sx:{fontSize:20,fontWeight:800},children:n}),e.jsx(r,{sx:{opacity:.8,mt:.5},children:u})]}),e.jsxs(_,{direction:{xs:"column",md:"row"},spacing:1.5,children:[e.jsx(b,{variant:"contained",onClick:()=>void g("/dashboard"),children:"Dashboard"}),e.jsx(b,{variant:"outlined",onClick:()=>void g("/shops/42"),children:"Async Param Route"}),e.jsx(b,{variant:"outlined",onClick:()=>void g("/docs/getting-started"),children:"Async Wildcard Route"})]}),e.jsxs(l,{sx:{p:2},children:[e.jsxs(r,{variant:"body2",sx:{opacity:.78},children:["Current path: ",e.jsx(a,{component:"span",sx:{fontFamily:"monospace"},children:m})]}),e.jsx(r,{variant:"body2",sx:{opacity:.78,mt:.75},children:i==="overlay"?"Recipe: keep the previous screen visible while the next route resolves.":"Recipe: replace the current screen with a pending shell before the async route finishes."}),e.jsxs(r,{variant:"body2",sx:{opacity:.68,mt:.75},children:["Transition state: ",E?p?"showing loader":"waiting below threshold":"idle"]})]}),e.jsxs(a,{sx:{position:"relative",minHeight:320,borderRadius:2,overflow:"hidden",border:"1px solid",borderColor:"divider",backgroundColor:"background.default"},children:[e.jsx(a,{sx:{minHeight:320},children:h}),p&&i==="overlay"&&e.jsx(a,{sx:{position:"absolute",inset:0,display:"grid",placeItems:"center",bgcolor:"rgba(12,14,18,0.32)",backdropFilter:"blur(6px)"},children:e.jsxs(l,{sx:{px:2,py:1.5,borderRadius:2},children:[e.jsx(r,{sx:{fontWeight:700},children:"Loading next route..."}),e.jsx(r,{variant:"body2",sx:{opacity:.78},children:"Suspense-like overlay while the previous page stays mounted."})]})})]})]})})}function C(){return e.jsx(T,{mode:"overlay",title:"Recipe 1: Keep Previous Screen Visible",subtitle:"Use this when the old screen still provides context and you want loading to feel light."})}function D(){return e.jsx(T,{mode:"swap",title:"Recipe 2: Swap To Pending Shell",subtitle:"Use this when route transitions should feel explicit, like entering a new workspace or document."})}C.__docgenInfo={description:"",methods:[],displayName:"KeepPreviousScreenVisibleDemo"};D.__docgenInfo={description:"",methods:[],displayName:"SwapToPendingShellDemo"};function P(i){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...k(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(M,{title:"Router/Examples & Recipes"}),`
`,e.jsx(n.h1,{id:"examples--recipes",children:"Examples & Recipes"}),`
`,e.jsx(n.p,{children:"This page focuses on practical combinations."}),`
`,e.jsx(n.p,{children:`Here the goal is not to explain every API from first principles, but to show
how pieces work together in patterns you can reuse.`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"router--loading-states",children:"Router + Loading States"}),`
`,e.jsxs(n.p,{children:["Async route factories are supported by ",e.jsx(n.code,{children:"Router"}),`.
That means route transitions can behave a bit like Suspense, as long as you decide
what the user should see while the next spec is resolving.`]}),`
`,e.jsx(n.p,{children:"There are two strong patterns:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Keep the previous screen visible and place a loading overlay on top"}),`
`,e.jsx(n.li,{children:"Swap immediately to a pending shell and then replace it with the final route"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"recipe-1-keep-previous-screen-visible",children:"Recipe 1: Keep Previous Screen Visible"}),`
`,e.jsx(n.p,{children:"Use this when the current screen still helps the user stay oriented."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"good for dashboards"}),`
`,e.jsx(n.li,{children:"good for detail panels"}),`
`,e.jsx(n.li,{children:"good when the next route is only a small contextual jump"}),`
`]}),`
`,e.jsx(C,{}),`
`,e.jsx(n.p,{children:"Why this works:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"the app feels responsive immediately"}),`
`,e.jsx(n.li,{children:"the user keeps context"}),`
`,e.jsx(n.li,{children:"loading becomes a lightweight state, not a hard interruption"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"recipe-2-swap-to-pending-shell",children:"Recipe 2: Swap To Pending Shell"}),`
`,e.jsx(n.p,{children:"Use this when navigation should feel explicit and staged."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"good for docs spaces"}),`
`,e.jsx(n.li,{children:"good for editors"}),`
`,e.jsx(n.li,{children:"good for routes that represent a whole new working surface"}),`
`]}),`
`,e.jsx(D,{}),`
`,e.jsx(n.p,{children:"Why this works:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"the transition feels intentional"}),`
`,e.jsx(n.li,{children:"the loading state belongs to the new route, not the old one"}),`
`,e.jsx(n.li,{children:"it communicates “we are entering a new screen”"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"minimal-wiring-pattern",children:"Minimal Wiring Pattern"}),`
`,e.jsx(n.p,{children:"Both recipes are variations of the same idea:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const router = new Router({ runtime });

router.onChange((spec, meta) => {
  GUI.mount(spec, '#root', {
    runtime,
    ctx: meta.ctx,
  });
});
`})}),`
`,e.jsxs(n.p,{children:["The only difference is what you render ",e.jsx(n.strong,{children:"before"})," the async route finishes."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"choosing-the-pattern",children:"Choosing The Pattern"}),`
`,e.jsx(a,{sx:{p:2,my:3,bgcolor:"action.hover",borderRadius:1.5,borderLeft:"4px solid",borderColor:"primary.main"},children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Rule of thumb"}),e.jsx("br",{}),`
If the previous screen still helps orientation, keep it and overlay loading.
If the next route is a full context switch, render a pending shell immediately.`]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"what-to-build-next",children:"What To Build Next"}),`
`,e.jsx(n.p,{children:"Natural follow-ups:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Add route-level error states next to loading states"}),`
`,e.jsxs(n.li,{children:["Add optimistic params-based transitions (",e.jsx(n.code,{children:"/shops/41"})," -> ",e.jsx(n.code,{children:"/shops/42"}),`)
Since `,e.jsx(n.code,{children:"this.GUI"})," is a runtime, you can render a skeleton using only ",e.jsx(n.code,{children:"ctx.params"}),`
before the full data resolves.`]}),`
`,e.jsxs(n.li,{children:["Add prefetching with ",e.jsx(n.code,{children:"resolve()"})," before calling ",e.jsx(n.code,{children:"navigate()"})]}),`
`]})]})}function ke(i={}){const{wrapper:n}={...k(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(P,{...i})}):P(i)}export{ke as default};
