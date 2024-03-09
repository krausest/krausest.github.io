import{r as d,j as s,S as x}from"./index-JJelX5Ew.js";import{C as m,B as u}from"./chartjs-66wzXgKf.js";m.register(u);const b=["hsl(0 80% 50%)","hsl(40 80% 50%)","hsl(80 80% 50%)","hsl(120 80% 50%)","hsl(160 80% 50%)","hsl(200 80% 50%)","hsl(240 80% 50%)","hsl(280 80% 50%)","hsl(320 80% 50%)"],f=({traces:e})=>{const t=d.useRef(null);return d.useEffect(()=>{const r=[],l=[];for(const a of e)r.push(a.framework),l.push(a.values);const n={type:"boxplot",data:{labels:r,datasets:[{backgroundColor:b,data:l}]},options:{animation:!1,scales:{x:{type:"category",grid:{display:!1}},y:{type:"linear",beginAtZero:!1}}}},o=new u(t.current,n);return()=>{o.destroy()}},[e]),s.jsx("div",{style:{height:"28rem"},children:s.jsx("canvas",{style:{maxHeight:"100%"},ref:t})})},p=({frameworks:e,benchmark:t,results:r,currentSortKey:l,sortBy:n,cpuDurationMode:o})=>{const a=c=>{var h;return((h=r(t,c))==null?void 0:h.results[o].values)??[]},i=c=>{c.preventDefault(),n(t.id)},j=e.map(c=>({framework:c.name,values:a(c)}));return s.jsxs("tr",{style:{height:400},children:[s.jsxs("th",{className:"benchname",children:[s.jsx("button",{className:`button button__text ${l===t.id?"sort-key":""}`,onClick:i,"aria-label":"Sort by benchmark results (from best to worst)",children:t.label}),s.jsx("div",{className:"rowCount",children:t.description})]}),s.jsx("td",{children:s.jsx(f,{traces:j})})]},t.id)},y=({frameworks:e,benchmarks:t,results:r,currentSortKey:l,sortBy:n,cpuDurationMode:o})=>s.jsx(s.Fragment,{children:t.map(a=>s.jsx(p,{frameworks:e,benchmark:a,results:r,currentSortKey:l,sortBy:n,cpuDurationMode:o},a.id))}),v=({frameworks:e,benchmarks:t,results:r,currentSortKey:l,sortBy:n,cpuDurationMode:o})=>{const a=i=>{i.preventDefault(),n(x)};return s.jsxs("div",{className:"results",children:[s.jsx("h3",{children:"Duration in milliseconds"}),s.jsx("div",{className:"results__table-container",children:s.jsxs("table",{className:"results__table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{className:"benchname",children:s.jsx("button",{className:`button button__text ${l===x?"sort-key":""}`,"aria-label":"Sort frameworks in ascending order (asc)",onClick:a,children:"Name"})}),s.jsx("th",{style:{width:e.length*70+100}})]})}),s.jsx("tbody",{children:s.jsx(y,{results:r,frameworks:e,benchmarks:t,currentSortKey:l,sortBy:n,cpuDurationMode:o})})]})})]})};export{v as default};
