(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){o(e,n),function(){const e=document.getElementById("container");e.innerHTML="",e.appendChild(r("UNDERLYING FEELINGS")),e.appendChild(u(["sad","resentful","hurt","triggered","frustrated","defensive"],"underlyingFeeling")),e.appendChild(r("NEEDS")),e.appendChild(u(["to be seen","resonance","engagement","to matter","inclusion","mutuality"],"need"))}()}function n(){s('"I\'m feeling..."'),l(["abandoned","abused","attacked","belittled","betrayed","blamed","bullied","cheated","coerced","criticized","discounted","diminished","disliked","harrassed","ignored","insulted","interrupted","invalidated","invisible","isolated","left out","let down","manipulated","neglected","overworked","patronized","pressured","provoked","put down","rejected","ripped off","smothered","threatened","trampled","tricked","unappreciated","unheard","unloved","unseen","unsupported","unwanted","used","victimized","violated","wronged"],"feeling",t)}function d(e){o(e,i),function(){const e=document.getElementById("container");e.innerHTML="",e.appendChild(r("INITIAL FEELINGS")),e.appendChild(m(["belittled","unseen","discounted","disliked","diminished","trampled"],"initialFeeling")),e.appendChild(r("UNDERLYING FEELINGS")),e.appendChild(m(["sad","resentful","hurt","triggered","frustrated","defensive"],"underlyingFeeling")),e.appendChild(r("NEEDS")),e.appendChild(m(["to be seen","resonance","engagement","to matter","inclusion","mutuality"],"need"));const t=document.createElement("button");t.innerText="I'm complete",e.appendChild(t)}()}function i(){s('"They\'re being..."'),l(["aggressive","arrogant","cheap","clueless","condescending","confrontational","controlling","defensive","flaky","hypersensitive","incompetent","inconsiderate","long-winded","overreacting","self-absorbed"],"complaint",d)}function c(){!function(){const e=document.getElementById("navhead");e.innerHTML="",e.classList.remove("subsection");const t=document.createElement("div");t.classList.add("sectionTitle"),t.innerText="self-empathy",e.appendChild(t);const n=document.createElement("img");n.src="./icons/info-circle.svg",n.addEventListener("click",a),e.appendChild(n)}(),function(){const e=document.getElementById("container");e.innerHTML="";const t=document.createElement("div");t.classList.add("introText"),t.innerText="Observe what you\nare experiencing.\n\nGet in touch with your\nunderlying needs.",e.appendChild(t);const d=document.createElement("div");d.classList.add("sectionButton");const c=document.createElement("div");c.classList.add("startWith"),c.innerText="start with a complaint";const a=document.createElement("div");a.classList.add("exampleQuote"),a.innerText='"They\'re being..."',d.appendChild(c),d.appendChild(a),d.addEventListener("click",i),e.appendChild(d);const s=document.createElement("div");s.classList.add("sectionButton");const l=document.createElement("div");l.classList.add("startWith"),l.innerText="start with a feeling";const o=document.createElement("div");o.classList.add("exampleQuote"),o.innerText='"I\'m feeling..."',s.appendChild(l),s.appendChild(o),s.addEventListener("click",n),e.appendChild(s)}()}function a(){alert("An online guide to support the self-empathy process.")}function s(e){const t=document.getElementById("navhead");t.innerHTML="",t.classList.add("subsection");let n=document.createElement("img");n.src="./icons/search.svg";const d=document.createElement("div");d.classList.add("sectionTitle"),d.innerText=e;let i=document.createElement("img");return i.src="./icons/house.svg",i.addEventListener("click",c),t.appendChild(n),t.appendChild(d),t.appendChild(i),t}function l(e,t,n){const d=document.getElementById("container");d.innerHTML="";const i=e=>{n(e.target.innerText)};for(let n=0;n<e.length;n++){let c=document.createElement("div");c.classList.add("rectangle",t),c.innerText=e[n],c.addEventListener("click",i),d.appendChild(c)}return d}function o(e,t){const n=document.getElementById("navhead");n.innerHTML="",n.classList.add("subsection");let d=document.createElement("img");d.src="./icons/arrow-left-short.svg",d.addEventListener("click",t);const i=document.createElement("div");i.classList.add("sectionTitle"),i.innerText=e;let a=document.createElement("img");return a.src="./icons/house.svg",a.addEventListener("click",c),n.appendChild(d),n.appendChild(i),n.appendChild(a),n}function r(e){const t=document.createElement("div");return t.classList.add("empathySectionHeader"),t.innerText=e,t}function u(e,t){const n=document.createElement("div");n.classList.add("empathySectionDivGrid");for(let d=0;d<e.length;d++){const i=document.createElement("div");i.classList.add("empathyGuessDiv"),i.classList.add(`${t}`),i.addEventListener("click",(()=>{i.classList.toggle("selected")})),i.innerText=e[d],n.appendChild(i)}return n}function m(e,t){const n=document.createElement("div");return n.classList.add("empathySectionDivCarousel"),function d(){n.innerHTML="";for(let d=0;d<e.length;d++){const i=document.createElement("div");i.classList.add("empathyGuessDivCarousel"),i.classList.add(`${t}`),i.innerText=e[d],n.appendChild(i)}const i=document.createElement("div");i.classList.add("empathyGuessDivCarousel"),i.classList.add(`${t}`),i.innerText="+",i.addEventListener("click",(t=>{let n=prompt("Use another term: ");e.push(n),d()})),n.appendChild(i)}(),n}e.d({},{W5:()=>m,FP:()=>u,Hi:()=>r,OI:()=>o,rE:()=>l,m2:()=>s}),function(){const e=document.getElementById("content"),t=document.createElement("header"),n=document.createElement("nav");n.setAttribute("id","navhead");const d=document.createElement("div");d.setAttribute("id","container"),d.classList.add("container"),e.appendChild(t),t.appendChild(n),e.appendChild(d)}(),c()})();