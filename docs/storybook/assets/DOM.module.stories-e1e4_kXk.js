import{j as M,r}from"./iframe-8EaQ1C0g.js";import{D as g}from"./DOM.module-BGXD1ujc.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Ck1yJXlA.js";import"./Icon-DOcDJgdS.js";import"./Button-CqN9UM-9.js";import"./ButtonBase-DnuzHV0k.js";import"./TransitionGroupContext-BDq06VYZ.js";import"./useForkRef-B_8DPUN9.js";import"./CircularProgress-CF5CFykq.js";import"./MenuItem-DbPWN7Va.js";import"./MenuItem-DnVDUEJQ.js";import"./ListContext-DG1ZmIYj.js";import"./listItemIconClasses-xTD-VZED.js";import"./listItemTextClasses-B6j24Eej.js";import"./dividerClasses-Con-zOAD.js";import"./Paper-qkABWcDk.js";import"./Paper-Cnfm5CEA.js";import"./TextField-C10Z0_3M.js";import"./TextField-CAPhV-E3.js";import"./useSlot-Bwp2wfPo.js";import"./useFormControl-BGPHKa-w.js";import"./formControlState-Dq1zat_P.js";import"./List-DYgBFzPu.js";import"./Modal-BP6cjxzt.js";import"./Portal-0QKNbDUh.js";import"./utils-qFhxFu5T.js";import"./Menu-CLR-atUe.js";import"./Grow-D96jBQxV.js";import"./mergeSlotProps-B1nxpj7w.js";import"./useControlled-ChLN6U0A.js";import"./createSvgIcon-D8rVfPRm.js";import"./isMuiElement-EdU3GLes.js";import"./Stack-w3FurTvB.js";import"./getThemeProps-Cnx6th0B.js";import"./ModuleCard-F6LLYOqZ.js";const p=`<!doctype html>
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
</html>`;function d(t){var s;if(typeof DOMParser>"u")return JSON.stringify({error:"DOMParser unavailable"},null,2);const o=new DOMParser().parseFromString(t,"text/html"),m=Array.from(o.querySelectorAll("h1, h2, h3")).map(e=>String(e.textContent||"").trim()),a=Array.from(o.querySelectorAll("p")).map(e=>String(e.textContent||"").trim()),u=Array.from(o.querySelectorAll("a[href]")).map(e=>({href:e.getAttribute("href"),text:String(e.textContent||"").trim()}));return JSON.stringify({title:o.title||null,headings:m,paragraphs:a,links:u,bodyText:String(((s=o.body)==null?void 0:s.textContent)||"").trim()},null,2)}function D(t){const[o,m]=r.useState(t.source),[a,u]=r.useState(t.fetchUrl||"https://example.com"),[s,e]=r.useState(t.htmlValue||""),[y,l]=r.useState(t.jsonValue||"{}"),[x,i]=r.useState(t.statusMessage||"Ready.");r.useEffect(()=>{m(t.source)},[t.source]);const O=r.useCallback(()=>{e(p),l(d(p)),i("Sample loaded.")},[]),b=r.useCallback(()=>{const n=String(s||"").trim();if(!n){l(JSON.stringify({error:"HTML input is empty."},null,2)),i("HTML input is empty.");return}l(d(n)),i("Parsed HTML.")},[s]),A=r.useCallback(()=>{const n=String(a||"").trim();if(!n){i("URL is empty.");return}e(p),l(JSON.stringify({source:n,parsed:JSON.parse(d(p))},null,2)),i(`Fetched and parsed ${n}.`)},[a]);return M.jsx(g,{...t,source:o,onSourceChange:m,fetchUrl:a,onFetchUrlChange:u,htmlValue:s,onHtmlChange:e,jsonValue:y,statusMessage:x,onLoadSample:O,onParseHtml:b,onFetchAndParse:A})}const it={title:"All.This/DOM/Workbench",component:g,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"DOM package interface example based on the runtime page: source control, URL input, HTML input, and JSON output."}}},render:t=>M.jsx(D,{...t})},c={args:{source:"local",state:"on",assetUrl:"./npm/dist/dom.umd.js",version:"1.0.98",fetchUrl:"https://example.com",statusMessage:"Ready."}};var h,S,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    source: 'local',
    state: 'on',
    assetUrl: './npm/dist/dom.umd.js',
    version: '1.0.98',
    fetchUrl: 'https://example.com',
    statusMessage: 'Ready.'
  }
}`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const mt=["RuntimeWorkbench"];export{c as RuntimeWorkbench,mt as __namedExportsOrder,it as default};
