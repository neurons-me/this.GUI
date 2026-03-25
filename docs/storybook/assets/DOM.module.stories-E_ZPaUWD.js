import{j as M,r}from"./iframe-C2qc3tsM.js";import{D as g}from"./DOM.module-CYGDPFkq.js";import"./preload-helper-Dp1pzeXC.js";import"./ModuleCard-D3W1IYrv.js";import"./Paper-BH8TuObZ.js";import"./Paper-WjnWTzrc.js";import"./Stack-CJpHzZFp.js";import"./getThemeProps-DGpb-X_S.js";import"./TextField-DeyitH5C.js";import"./TextField-BriDzdlY.js";import"./useSlot-BKl4lqb4.js";import"./useForkRef-DZ9CAFXo.js";import"./useFormControl-BAigJOBR.js";import"./formControlState-Dq1zat_P.js";import"./List-2dnqbVht.js";import"./ListContext-fgpz-hEu.js";import"./Modal-BHgPgx7J.js";import"./Portal-D6dhm6sE.js";import"./useEventCallback-2h9sExm_.js";import"./utils-IgnIQ_tD.js";import"./TransitionGroupContext-BNvVfOmo.js";import"./Menu-DnIPfH50.js";import"./Grow-CCaMo6px.js";import"./mergeSlotProps-DSSfby9E.js";import"./useControlled-KSDT35UP.js";import"./createSvgIcon-CktXYvY9.js";import"./isMuiElement-B5xeuKGj.js";import"./MenuItem-I9DjPrnT.js";import"./MenuItem-vVOGqkQM.js";import"./ButtonBase-kILz3eVI.js";import"./listItemIconClasses-BtlsS6X9.js";import"./listItemTextClasses-DrG8Si_u.js";import"./dividerClasses-B12j9aVk.js";import"./Button-BRGXTpG2.js";import"./Icon-CRJpytTc.js";import"./Button-C1LAATFu.js";import"./CircularProgress-BusGmrh4.js";const p=`<!doctype html>
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
