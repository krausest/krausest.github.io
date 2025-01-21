import{r as d,j as s,S as x}from"./index-ucvAR3hA.js";import{C as j,B as u}from"./chartjs-66wzXgKf.js";j.register(u);const b=["hsl(0 80% 50%)","hsl(40 80% 50%)","hsl(80 80% 50%)","hsl(120 80% 50%)","hsl(160 80% 50%)","hsl(200 80% 50%)","hsl(240 80% 50%)","hsl(280 80% 50%)","hsl(320 80% 50%)"],f=({traces:e})=>{const t=d.useRef(null);return d.useEffect(()=>{const n=[],a=[];for(const l of e)n.push(l.framework),a.push(l.values);const r={type:"boxplot",data:{labels:n,datasets:[{backgroundColor:b,data:a}]},options:{animation:!1,maintainAspectRatio:!1,minStats:"min",maxStats:"max",coef:0,scales:{x:{type:"category",grid:{display:!1}},y:{type:"linear",beginAtZero:!1}}}},o=new u(t.current,r);return()=>{o.destroy()}},[e]),s.jsx("div",{style:{height:"250px"},children:s.jsx("canvas",{style:{maxHeight:"100%"},ref:t})})},p=({frameworks:e,benchmark:t,results:n,currentSortKey:a,sortBy:r,cpuDurationMode:o})=>{const l=i=>{var h;return((h=n(t,i))==null?void 0:h.results[o].values)??[]},c=i=>{i.preventDefault(),r(t.id)},m=e.map(i=>({framework:i.name,values:l(i)}));return s.jsxs("tr",{style:{height:250},children:[s.jsxs("th",{className:"benchname",children:[s.jsx("button",{className:`button button__text ${a===t.id?"sort-key":""}`,onClick:c,"aria-label":"Sort by benchmark results (from best to worst)",children:t.label}),s.jsx("div",{className:"rowCount",children:t.description})]}),s.jsx("td",{children:s.jsx(f,{traces:m})})]},t.id)},y=({frameworks:e,benchmarks:t,results:n,currentSortKey:a,sortBy:r,cpuDurationMode:o})=>s.jsx(s.Fragment,{children:t.map(l=>s.jsx(p,{frameworks:e,benchmark:l,results:n,currentSortKey:a,sortBy:r,cpuDurationMode:o},l.id))}),v=({frameworks:e,benchmarks:t,results:n,currentSortKey:a,sortBy:r,cpuDurationMode:o})=>{const l=c=>{c.preventDefault(),r(x)};return s.jsxs("div",{className:"results",children:[s.jsx("h3",{children:"Duration in milliseconds"}),s.jsx("div",{className:"results__table-container",children:s.jsxs("table",{className:"results__table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{className:"benchname",children:s.jsx("button",{className:`button button__text ${a===x?"sort-key":""}`,"aria-label":"Sort frameworks in ascending order (asc)",onClick:l,children:"Name"})}),s.jsx("th",{style:{width:e.length*70+100}})]})}),s.jsx("tbody",{children:s.jsx(y,{results:n,frameworks:e,benchmarks:t,currentSortKey:a,sortBy:r,cpuDurationMode:o})})]})})]})};export{v as default};
