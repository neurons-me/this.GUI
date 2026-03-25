import{j as M,r}from"./iframe-CSPXPvkq.js";import{D as g}from"./DOM.module-Bz4n-Zjv.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BNlX60Ti.js";import"./Icon-BIK4291a.js";import"./Button-MPdKPbYv.js";import"./ButtonBase-BdWP8PMp.js";import"./TransitionGroupContext-9pMhmw2R.js";import"./useForkRef-DeapipiR.js";import"./useEventCallback-qbZ4_BE0.js";import"./CircularProgress-36vm5aKe.js";import"./MenuItem-CGdn8clt.js";import"./MenuItem-TcpAUkFX.js";import"./ListContext-uxNHpr-6.js";import"./listItemIconClasses-DNEroyXd.js";import"./listItemTextClasses-SNP7leTv.js";import"./dividerClasses-F3T3Yh7A.js";import"./TextField-YhY3Xw-h.js";import"./TextField-B-nqzEwf.js";import"./useSlot-Cl4W1ueF.js";import"./useFormControl-3b2VrDSt.js";import"./formControlState-Dq1zat_P.js";import"./List-DSDAuJoH.js";import"./Modal-DO4jLd0s.js";import"./Portal-9uMmV0im.js";import"./utils-vv-3YkLU.js";import"./Menu-5l2OKmjg.js";import"./Grow-C9oJF6dK.js";import"./Paper-CN1kNCfT.js";import"./mergeSlotProps-CtT-Kiwg.js";import"./useControlled-CpR5adJ0.js";import"./createSvgIcon--i9x_yOr.js";import"./isMuiElement-Dni7HaLR.js";import"./Stack-D17fNlB_.js";import"./getThemeProps-CdfxErkN.js";import"./ModuleCard-D17zv4GO.js";import"./Paper-CQ9_Ok9D.js";const p=`<!doctype html>
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
</html>`;function d(t){var s;if(typeof DOMParser>"u")return JSON.stringify({error:"DOMParser unavailable"},null,2);const o=new DOMParser().parseFromString(t,"text/html"),m=Array.from(o.querySelectorAll("h1, h2, h3")).map(e=>String(e.textContent||"").trim()),a=Array.from(o.querySelectorAll("p")).map(e=>String(e.textContent||"").trim()),u=Array.from(o.querySelectorAll("a[href]")).map(e=>({href:e.getAttribute("href"),text:String(e.textContent||"").trim()}));return JSON.stringify({title:o.title||null,headings:m,paragraphs:a,links:u,bodyText:String(((s=o.body)==null?void 0:s.textContent)||"").trim()},null,2)}function D(t){const[o,m]=r.useState(t.source),[a,u]=r.useState(t.fetchUrl||"https://example.com"),[s,e]=r.useState(t.htmlValue||""),[y,l]=r.useState(t.jsonValue||"{}"),[x,i]=r.useState(t.statusMessage||"Ready.");r.useEffect(()=>{m(t.source)},[t.source]);const O=r.useCallback(()=>{e(p),l(d(p)),i("Sample loaded.")},[]),b=r.useCallback(()=>{const n=String(s||"").trim();if(!n){l(JSON.stringify({error:"HTML input is empty."},null,2)),i("HTML input is empty.");return}l(d(n)),i("Parsed HTML.")},[s]),A=r.useCallback(()=>{const n=String(a||"").trim();if(!n){i("URL is empty.");return}e(p),l(JSON.stringify({source:n,parsed:JSON.parse(d(p))},null,2)),i(`Fetched and parsed ${n}.`)},[a]);return M.jsx(g,{...t,source:o,onSourceChange:m,fetchUrl:a,onFetchUrlChange:u,htmlValue:s,onHtmlChange:e,jsonValue:y,statusMessage:x,onLoadSample:O,onParseHtml:b,onFetchAndParse:A})}const mt={title:"All.This/DOM/Workbench",component:g,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"DOM package interface example based on the runtime page: source control, URL input, HTML input, and JSON output."}}},render:t=>M.jsx(D,{...t})},c={args:{source:"local",state:"on",assetUrl:"./npm/dist/dom.umd.js",version:"1.0.98",fetchUrl:"https://example.com",statusMessage:"Ready."}};var h,S,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    source: 'local',
    state: 'on',
    assetUrl: './npm/dist/dom.umd.js',
    version: '1.0.98',
    fetchUrl: 'https://example.com',
    statusMessage: 'Ready.'
  }
}`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const lt=["RuntimeWorkbench"];export{c as RuntimeWorkbench,lt as __namedExportsOrder,mt as default};
