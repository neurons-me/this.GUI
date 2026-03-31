import{j as M,r}from"./iframe-AZWHUjJ8.js";import{D as g}from"./DOM.module-R7MEA0Sn.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-uTOZCza3.js";import"./Icon-FCByiR2v.js";import"./Button-Bqrqa9nG.js";import"./ButtonBase-CMUhGetK.js";import"./TransitionGroupContext-L3XM6ARG.js";import"./useForkRef-BwxLbw6V.js";import"./CircularProgress-C8t4-L2z.js";import"./TextField-CO_I4G0d.js";import"./TextField-CklmxgxI.js";import"./useSlot-BWVERl7C.js";import"./useFormControl-PBqmVLMw.js";import"./formControlState-Dq1zat_P.js";import"./List-BgYGWYt3.js";import"./ListContext-DVr4rWCd.js";import"./Modal-Dfp-k0CT.js";import"./Grow-0zMj_HpA.js";import"./Menu-B1btoBVS.js";import"./Paper-WNsmHt7k.js";import"./useControlled-mDa5gGP0.js";import"./createSvgIcon-Bkyompvq.js";import"./isMuiElement-B5SBT5rZ.js";import"./Toolbar-BSvLwMcQ.js";import"./Toolbar-CufKEqsg.js";import"./ListItemIcon-D0PToHmB.js";import"./listItemIconClasses-Bkwn0ot7.js";import"./ListItemText-BXA55UDd.js";import"./listItemTextClasses-CDjfeEGl.js";import"./Drawer-e1dj-DAL.js";import"./MenuItem-BM-8vAtZ.js";import"./MenuItem-Dd7Uwesr.js";import"./dividerClasses-C-NMVYSz.js";import"./Stack-vReHNowo.js";import"./getThemeProps-DicCSZg3.js";import"./Tooltip-BoFE-j7F.js";import"./ModuleCard-DhKUL9GM.js";import"./Paper-BKwTjQvE.js";const l=`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>this.DOM sample</title>
  </head>
  <body>
    <h1>Hello this.DOM</h1>
    <p class="note">Sample HTML for parsing.</p>
    <div class="card">
      <strong>Device:</strong> Suis-MacBook-Air.local
    </div>
  </body>
</html>`;function d(t){var s;if(typeof DOMParser>"u")return JSON.stringify({error:"DOMParser unavailable"},null,2);const o=new DOMParser().parseFromString(t,"text/html"),m=Array.from(o.querySelectorAll("h1, h2, h3")).map(e=>String(e.textContent||"").trim()),a=Array.from(o.querySelectorAll("p")).map(e=>String(e.textContent||"").trim()),u=Array.from(o.querySelectorAll("a[href]")).map(e=>({href:e.getAttribute("href"),text:String(e.textContent||"").trim()}));return JSON.stringify({title:o.title||null,headings:m,paragraphs:a,links:u,bodyText:String(((s=o.body)==null?void 0:s.textContent)||"").trim()},null,2)}function D(t){const[o,m]=r.useState(t.source),[a,u]=r.useState(t.fetchUrl||"https://example.com"),[s,e]=r.useState(t.htmlValue||""),[y,p]=r.useState(t.jsonValue||"{}"),[x,i]=r.useState(t.statusMessage||"Ready.");r.useEffect(()=>{m(t.source)},[t.source]);const O=r.useCallback(()=>{e(l),p(d(l)),i("Sample loaded.")},[]),b=r.useCallback(()=>{const n=String(s||"").trim();if(!n){p(JSON.stringify({error:"HTML input is empty."},null,2)),i("HTML input is empty.");return}p(d(n)),i("Parsed HTML.")},[s]),A=r.useCallback(()=>{const n=String(a||"").trim();if(!n){i("URL is empty.");return}e(l),p(JSON.stringify({source:n,parsed:JSON.parse(d(l))},null,2)),i(`Fetched and parsed ${n}.`)},[a]);return M.jsx(g,{...t,source:o,onSourceChange:m,fetchUrl:a,onFetchUrlChange:u,htmlValue:s,onHtmlChange:e,jsonValue:y,statusMessage:x,onLoadSample:O,onParseHtml:b,onFetchAndParse:A})}const lt={title:"All.This/DOM/Workbench",component:g,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"DOM package interface example based on the runtime page: source control, URL input, HTML input, and JSON output."}}},render:t=>M.jsx(D,{...t})},c={args:{source:"local",state:"on",assetUrl:"./npm/dist/dom.umd.js",version:"1.0.98",fetchUrl:"https://example.com",statusMessage:"Ready."}};var h,S,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    source: 'local',
    state: 'on',
    assetUrl: './npm/dist/dom.umd.js',
    version: '1.0.98',
    fetchUrl: 'https://example.com',
    statusMessage: 'Ready.'
  }
}`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const ct=["RuntimeWorkbench"];export{c as RuntimeWorkbench,ct as __namedExportsOrder,lt as default};
