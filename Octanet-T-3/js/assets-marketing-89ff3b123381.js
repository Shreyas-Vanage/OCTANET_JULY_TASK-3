(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["marketing"],{11310:(t,e,i)=>{"use strict";var s=i(28738),n=i(44319),r=i(88888),a=i(36071);let o=new IntersectionObserver(function(t){for(let e of t)if(e.isIntersecting)for(let t of document.querySelectorAll(".js-scrollnav-item"))t.classList.toggle("selected",t.getAttribute("href")===`#${e.target.id}`)},{root:null,rootMargin:"0px",threshold:.1});(0,a.N7)(".js-section",t=>o.observe(t));var l=i(59753),c=i(24601),u=i(95253);let d="data-analytics-event",h=`a:not([${d}]), button:not([${d}]), [${d}]`;function m(t){return{...g(t,"a")&&f(t),...g(t,"button")&&b(t),...p(t),...y(t.getAttribute(d))}}function g(t,e){return t.tagName.toLowerCase()===e}function f(t){return{text:t.innerText||t.getAttribute("aria-label")||"",target:t.href}}function b(t){let e=t.closest("form");return{text:t.innerText||t.getAttribute("aria-label")||"",role:t.getAttribute("type")||t.getAttribute("role")||"button",...t.value&&{value:t.value},...e&&{formAction:e.getAttribute("action")||""}}}function p(t){let{top:e,left:i}=t.getBoundingClientRect(),s=document.body,n=document.documentElement,r=Math.max(s.scrollHeight,s.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight),a=Math.max(s.scrollWidth,s.offsetWidth,n.clientWidth,n.scrollWidth,n.offsetWidth),o=((e+window.pageYOffset)/r).toFixed(3),l=((i+window.pageXOffset)/a).toFixed(3);return{ref_loc:JSON.stringify({top:o,left:l})}}function y(t){if(!t)return{};let e=JSON.parse(t),{category:i,action:s,label:n}=e;return{category:i,action:s,...v(n)}}function v(t){if(!t)return{};let e={},i=t.split(";").map(t=>t.trim());for(let t of i){let[i,s]=t.split(":");i&&(e[i.trim()]=s?.trim()||i.trim())}return e}(0,l.on)("click",h,t=>{if(t&&t.currentTarget)try{(0,u.q)("analytics.click",m(t.currentTarget))}catch(t){(0,c.eK)(t)}});let w=class SlideShow extends HTMLElement{onTouchStart(t){this.touchStartX=t.changedTouches[0].screenX}onTouchEnd(t){this.touchEndX=t.changedTouches[0].screenX,this.touchEndX<this.touchStartX-this.swipeLengthMod&&(this.pause(),this.nextSlide()),this.touchEndX>this.touchStartX+this.swipeLengthMod&&(this.pause(),this.prevSlide())}pause(){this.interval&&window.clearInterval(this.interval)}play(){this.pause(),this.interval=window.setInterval(this.nextSlide.bind(this),this.intervalTime)}nextSlide(){this.current++,this.current>this.slideIds.length-1&&(this.current=0),this.goToSlide(this.slideIds[this.current])}prevSlide(){this.current--,this.current<0&&(this.current=this.slideIds.length-1),this.goToSlide(this.slideIds[this.current])}bulletOnClick(t){t.preventDefault();let e=t.target,i=e?.getAttribute("aria-controls");i&&this.goToSlide(i),this.pause()}goToSlide(t){let e=this.querySelector(`.js-slide-show-slide[id="${t}"]`),i=this.querySelector(`.js-slide-show-bullet[aria-controls="${t}"]`),s=this.querySelectorAll(`.js-slide-show-goto[aria-controls="${t}"]`),n=this.querySelector('.js-slide-show-slide:not([aria-hidden="true"])'),r=this.querySelector('.js-slide-show-bullet[aria-selected="true"]'),a=this.querySelectorAll('.js-slide-show-goto[aria-selected="true"]');n?.setAttribute("aria-hidden","true"),r?.setAttribute("aria-selected","false");for(let t=0;t<a.length;t++){let e=a[t];e.setAttribute("aria-selected","false")}e?.removeAttribute("aria-hidden"),i?.setAttribute("aria-selected","true");for(let t=0;t<s.length;t++){let e=s[t];e.setAttribute("aria-selected","true")}}constructor(){super();let t=this.getAttribute("data-slide-show-autoplay"),e=this.getAttribute("data-threshold")||"0.2";if(this.intervalTime=6e3,this.bullets=this.querySelectorAll(".js-slide-show-bullet[aria-controls]"),this.gotos=this.querySelectorAll(".js-slide-show-goto[aria-controls]"),this.slideIds=[],this.interval=null,this.current=0,this.currentSlideId=null,this.swipeArea=this.querySelector(".js-slide-show-swipe-area"),this.touchStartX=0,this.touchEndX=0,this.swipeLengthMod=20,t&&!(0,n.Gx)(this)){let i=parseInt(t,10);isNaN(i)||(this.intervalTime=i);let s=new IntersectionObserver(t=>{for(let e of t){let t=e.target;e.isIntersecting?t.play():t.pause()}},{threshold:Number(e)});s.observe(this)}for(let t=0;t<this.bullets.length;t++){let e=this.bullets[t],i=e.getAttribute("aria-controls"),s=e.getAttribute("aria-selected");i&&this.slideIds.push(i),s&&(this.current=t,this.currentSlideId=i),e.addEventListener("click",this.bulletOnClick.bind(this))}for(let t=0;t<this.gotos.length;t++){let e=this.gotos[t],i=e.getAttribute("aria-controls");this.currentSlideId===i&&e.setAttribute("aria-selected","true"),e.addEventListener("click",this.bulletOnClick.bind(this))}this.swipeArea&&(this.swipeArea.addEventListener("touchstart",this.onTouchStart.bind(this),{passive:!0}),this.swipeArea.addEventListener("touchend",this.onTouchEnd.bind(this)))}};window&&"customElements"in window&&!window.customElements.get("slide-show")&&window.customElements.define("slide-show",w);var _=i(44289);function S(t,e=0){let i=t.getBoundingClientRect(),s=i.top-e,n=i.bottom-window.innerHeight+e;s<0?window.scrollBy(0,s):n>0&&window.scrollBy(0,n)}(0,l.on)("click",".sub-nav-mktg.on",t=>{let e=t.currentTarget,i=e.querySelector(".sub-nav-mktg-wrapper");i.contains(t.target)||e.classList.remove("on")}),(0,l.on)("click",".sub-nav-mktg.scrollnav.on .sub-nav-mktg-link",t=>{t.currentTarget.closest(".sub-nav-mktg").classList.remove("on")}),(0,l.on)("click",".sub-nav-mktg:not(.on) .sub-nav-mktg-link",t=>{window.innerWidth>=1280||(t.preventDefault(),t.currentTarget.closest(".sub-nav-mktg").classList.add("on"))}),(0,l.on)("click",".js-video-play, .js-video-close",function(t){let e=t.currentTarget,i=e.closest(".js-video-container"),s=i.querySelector(".js-video");"details"===i.tagName.toLowerCase()&&i.addEventListener("details-dialog-close",function(){s instanceof HTMLIFrameElement&&s.removeAttribute("src"),s instanceof HTMLMediaElement&&s.pause(),window.setTimeout(function(){i.classList.remove("is-expanded")},10)}),i.classList.contains("is-expanded")?(s instanceof HTMLIFrameElement&&s.removeAttribute("src"),i.classList.remove("is-expanded"),s instanceof HTMLMediaElement&&s.pause()):(s instanceof HTMLIFrameElement&&(s.src=s.getAttribute("data-src")||""),s instanceof HTMLMediaElement&&s.play(),i.classList.add("is-expanded")),S(s,20)});var L=i(76006);(0,L.nW)("audio-player",()=>i.e("app_assets_modules_marketing_audio-player_ts").then(i.bind(i,97789))),(0,L.nW)("before-after",()=>i.e("app_assets_modules_marketing_before-after_ts").then(i.bind(i,48385))),(0,L.nW)("card-skew",()=>i.e("app_assets_modules_marketing_card-skew_ts").then(i.bind(i,82561))),(0,L.nW)("confetti-container",()=>i.e("app_assets_modules_marketing_confetti-on-scroll_ts-_5eac1").then(i.bind(i,45322))),(0,L.nW)("segmented-nav",()=>i.e("app_assets_modules_marketing_segmented-nav_ts").then(i.bind(i,28274))),(0,L.nW)("story-body",()=>i.e("app_assets_modules_marketing_story-body-element_ts").then(i.bind(i,88622))),(0,L.nW)("testimonials-carousel",()=>i.e("app_assets_modules_marketing_testimonials-carousel-element_ts").then(i.bind(i,86824))),(0,L.nW)("unveil-container",()=>i.e("app_assets_modules_marketing_unveil_ts").then(i.bind(i,66351))),(0,L.nW)("video-player",()=>i.e("app_assets_modules_marketing_video-player_ts").then(i.bind(i,42830)))},44319:(t,e,i)=>{"use strict";i.d(e,{$M:()=>n,Al:()=>o,B2:()=>a,Gx:()=>d,L:()=>h,jG:()=>m,t6:()=>l});var s=i(36071);let n="build-in-animate",r="build-in-reduced",a=30,o=0,l=0;(0,s.N7)(".js-build-in-trigger[data-build-in-stagger], .js-build-in-group[data-build-in-stagger]",t=>{let e=parseInt(t.getAttribute("data-build-in-stagger")),i=t.querySelectorAll(".js-build-in-item");for(let t=0;t<i.length;t++)i[t].style.transitionDelay=`${t*e}ms`});let c=new IntersectionObserver(u,{rootMargin:`-${o}% 0% -${a}% 0%`,threshold:l});function u(t){for(let e of t)if(e.target.classList.toggle(n,e.isIntersecting),e.target.classList.contains("js-build-in-trigger"))for(let t of e.target.querySelectorAll(".js-build-in-item"))t.classList.toggle(n,e.isIntersecting)}function d(t){let e=window.matchMedia("(prefers-reduced-motion: reduce)"),i=t.getAttribute("data-build-non-decorative")||"false";return e.matches&&"false"===i}function h(t){for(let e of(t.classList.add(r),t.classList.add(n),t.querySelectorAll(".js-build-in-item, .js-type-in-item")))e.classList.add(r),e.classList.add(n)}function m(t){let e=Number(t.getAttribute("data-build-margin-bottom")||a),i=Number(t.getAttribute("data-build-margin-top")||o),s=Number(t.getAttribute("data-build-threshold")||l);return{marginBottom:e,marginTop:i,threshold:s,isDefault:e===a&&i===o&&s===l}}(0,s.N7)(".js-build-in-item[data-build-delay]",t=>{let e=Number(t.getAttribute("data-build-delay")||0);t instanceof HTMLElement&&(t.style.transitionDelay=`${e}ms`)}),(0,s.N7)(".js-build-in, .js-build-in-trigger",t=>{if(d(t)){h(t);return}let e=m(t);if(e.isDefault)return c.observe(t);let i=new IntersectionObserver(u,{rootMargin:`-${e.marginTop}% 0% -${e.marginBottom}% 0%`,threshold:e.threshold});i.observe(t)}),(0,s.N7)(".js-viewport-aware-video",{constructor:HTMLMediaElement,add(t){if(t.addEventListener("click",()=>{t.classList.toggle("looping-paused-mktg",!t.paused),t.paused?t.play():t.pause()}),d(t)){t.pause(),t.classList.add("looping-paused-mktg");return}let e=t.getAttribute("data-threshold")||l,i=t.getAttribute("data-build-margin-bottom")||20,s=new IntersectionObserver(e=>{for(let i of e)i.isIntersecting?t.play():t.pause()},{rootMargin:`-${o}% 0% -${i}% 0%`,threshold:Number(e)});s.observe(t)}})},88888:(t,e,i)=>{"use strict";i.d(e,{s:()=>d});var s=i(44319),n=i(36071),r=i(59753);let a="row-is-visible";(0,n.N7)(".js-type-in, .js-type-in-item",t=>{(0,s.Gx)(t)||u(t)});let o=new IntersectionObserver(l,{rootMargin:`-${s.Al}% 0% -${s.B2}% 0%`,threshold:s.t6});function l(t){for(let e of t)if(e.isIntersecting?d(e.target):u(e.target),e.target.classList.contains("js-type-in-trigger"))for(let t of e.target.querySelectorAll(".js-type-in-item, .js-build-number"))e.isIntersecting?d(t):u(t)}function c(t){let e=t.childNodes;for(let t of e)if("#text"===t.nodeName){let e=document.createElement("span");e.textContent=t.textContent,t.replaceWith(e)}let i=t.querySelectorAll("*");for(let t of i)t.classList.add("js-type-letters"),t.style.visibility="hidden";t.classList.remove("js-type-letters")}function u(t){if(!t.classList.contains("js-type-in")&&!t.classList.contains("js-type-in-trigger"))return;let e=t.querySelectorAll(".js-type-row, .js-type-letters");for(let t of e)t.classList.contains("js-type-letters")&&t.children.length>0?c(t):(t.style.visibility="hidden",t.classList.remove(a));t.classList.remove(s.$M)}function d(t){if(t.classList.contains(s.$M)||!t.classList.contains("js-type-in")&&!t.classList.contains("js-type-in-trigger"))return;t.classList.add(s.$M);let e=t.querySelectorAll(".js-type-row, .js-type-letters"),i=Number(t.getAttribute("data-type-delay")||20),n=Number(t.getAttribute("data-type-row-delay")||200);t.classList.contains("js-build-number")?setTimeout(()=>g(t,0,Number(t.textContent)),i):setTimeout(()=>m(t,e,0,"",n),i)}function h(t){u(t),d(t)}function m(t,e,i,n,r){if(i>=e.length)return;let o=e[i];if(!t.classList.contains(s.$M)){""!==n&&(o.textContent=n);return}if(o.classList.contains("js-type-row")){let s=Number(o.getAttribute("data-type-row-delay")||r);o.style.visibility="visible",o.classList.add(a),i++,setTimeout(()=>m(t,e,i,"",s),s);return}"hidden"===o.style.visibility&&null!=o.textContent&&(n=o.textContent,o.textContent="",o.style.visibility="visible",o.classList.add("animation-is-typing")),null!=o.textContent&&n.length>o.textContent.length?o.textContent=n.substr(0,o.textContent.length+1):++i<e.length&&o.classList.remove("animation-is-typing"),setTimeout(()=>m(t,e,i,n,r),20)}function g(t,e,i){if(i%1!=0?(e+=Math.max(.1,i/20),e=Number(e.toFixed(1))):(e+=Math.max(1,Number(i/35)),e=Number(e.toFixed(0))),e>i&&(e=i),t.textContent=e.toString(),e>=i)return;let s=Number(t.getAttribute("data-increment-speed")||75);setTimeout(()=>g(t,e,i),s)}(0,n.N7)(".js-type-in, .js-type-in-trigger",t=>{if((0,s.Gx)(t)){(0,s.L)(t);return}let e=(0,s.jG)(t);if(e.isDefault)return o.observe(t);let i=new IntersectionObserver(l,{rootMargin:`-${e.marginTop}% 0% -${e.marginBottom}% 0%`,threshold:e.threshold});i.observe(t)}),(0,r.on)("click",".js-type-restart",t=>{let e=t.currentTarget.closest(".js-type-in");h(e)})},44289:()=>{if(window.location.hash){let t=document.querySelector(`.faq-mktg-item${window.location.hash} details`);t&&(t.open=!0)}},28738:()=>{new class QueryParamOverrider{collectParams(){for(let t of this.paramsToOverride){let e=RegExp(`${t}=([^=&]*)`,"i"),i=e.exec(this.queryString);e.lastIndex=0,i&&i[1]&&(this.collectedParamsMap[t]=i[1],this.collectedParams.push(`${t}=${i[1]}`))}}overrideParams(t){let e=t.getAttribute("href"),i="";if(!(!e||/^javascript:|^mailto:|^tel:|^#/.test(e))){if(-1!==e.indexOf("#")){let t=e.split("#");if(2!==t.length)return;t[0]&&(e=t[0]),t[1]&&(i=`#${t[1]}`)}if(-1===e.indexOf("?"))e+=`?${this.collectedParams.join("&")}`;else for(let t of this.paramsToOverride){if(!this.collectedParamsMap.hasOwnProperty(t))continue;let i=RegExp(`${t}=([^=&]*)`,"i"),s=i.exec(e);if(i.lastIndex=0,!s){this.collectedParamsMap.hasOwnProperty(t)&&(e+=`&${t}=${this.collectedParamsMap[t]}`);continue}e=e.replace(i,`${t}=${this.collectedParamsMap[t]}`)}e+=i,t.setAttribute("data-override-applied","true"),t.setAttribute("href",e)}}eventReaction(t){let e=t.target;!e||"A"!==e.tagName||e.hasAttribute("data-override-applied")||this.overrideParams(e)}bindEvents(){document.body.addEventListener("mouseenter",this.eventReaction.bind(this),!0),document.body.addEventListener("touchstart",this.eventReaction.bind(this),{passive:!0,capture:!0})}constructor(){if(this.paramsToOverride=["utm_campaign","utm_medium","utm_source","ocid"],this.queryString=document.location.search,this.collectedParamsMap={},this.collectedParams=[],this.queryRe=RegExp(`(${this.paramsToOverride.join("|")})=([^=&]*)`,"gi"),!this.queryString||!this.queryRe.test(this.queryString))return;this.collectParams(),this.bindEvents()}}},89359:(t,e,i)=>{"use strict";function s(t){let e=document.querySelectorAll(t);if(e.length>0)return e[e.length-1]}function n(){let t=s("meta[name=analytics-location]");return t?t.content:window.location.pathname}function r(){let t=s("meta[name=analytics-location-query-strip]"),e="";t||(e=window.location.search);let i=s("meta[name=analytics-location-params]");for(let t of(i&&(e+=(e?"&":"?")+i.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let i=t.content.split(":",2);e=e.replace(RegExp(`(^|[?&])${i[0]}($|=)`,"g"),`$1${i[1]}$2`)}return e}function a(){return`${window.location.protocol}//${window.location.host}${n()+r()}`}i.d(e,{S:()=>a})},24601:(t,e,i)=>{"use strict";i.d(e,{aJ:()=>j,cI:()=>S,eK:()=>y});var s=i(82918),n=i(83314),r=i(28382),a=i(89359),o=i(68202),l=i(53729),c=i(86283),u=i(46426);let d=!1,h=0,m=Date.now(),g=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function f(t){return t instanceof Error||"object"==typeof t&&null!==t&&"name"in t&&"string"==typeof t.name&&"message"in t&&"string"==typeof t.message}function b(t){try{return JSON.stringify(t)}catch{return"Unserializable"}}function p(t){return!!("AbortError"===t.name||"TypeError"===t.name&&g.has(t.message)||t.name.startsWith("ApiError")&&g.has(t.message))}function y(t,e={}){if((0,u.c)("FAILBOT_HANDLE_NON_ERRORS")){if(!f(t)){let i=Error(),s=b(t),n={type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof t}, with value ${s}`,stacktrace:S(i)};v(_(n,e));return}p(t)||v(_(w(t),e))}else p(t)||v(_(w(t),e))}async function v(t){if(!k())return;let e=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(e){if(A(t.error.stacktrace)){d=!0;return}h++;try{await fetch(e,{method:"post",body:JSON.stringify(t)})}catch{}}}function w(t){return{type:t.name,value:t.message,stacktrace:S(t)}}function _(t,e={}){return Object.assign({error:t,sanitizedUrl:(0,a.S)()||window.location.href,readyState:document.readyState,referrer:(0,o.wP)(),timeSinceLoad:Math.round(Date.now()-m),user:j()||void 0,bundler:l.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},e)}function S(t){return(0,r.Q)(t.stack||"").map(t=>({filename:t.file||"",function:String(t.methodName),lineno:(t.lineNumber||0).toString(),colno:(t.column||0).toString()}))}let L=/(chrome|moz|safari)-extension:\/\//;function A(t){return t.some(t=>L.test(t.filename)||L.test(t.function))}function j(){let t=document.head?.querySelector('meta[name="user-login"]')?.content;if(t)return t;let e=(0,s.b)();return`anonymous-${e}`}let x=!1;function k(){return!x&&!d&&h<10&&(0,n.Gb)()}if(c.iG?.addEventListener("pageshow",()=>x=!1),c.iG?.addEventListener("pagehide",()=>x=!0),"function"==typeof BroadcastChannel){let t=new BroadcastChannel("shared-worker-error");t.addEventListener("message",t=>{y(t.data.error)})}},95253:(t,e,i)=>{"use strict";let s;i.d(e,{Y:()=>h,q:()=>m});var n=i(88149),r=i(86058),a=i(44544),o=i(71643);let{getItem:l}=(0,a.Z)("localStorage"),c="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let t=(0,n.n)("octolytics");delete t.baseContext,s=new r.R(t)}catch(t){}function d(t){let e=(0,n.n)("octolytics").baseContext||{};if(e)for(let[t,i]of(delete e.app_id,delete e.event_url,delete e.host,Object.entries(e)))t.startsWith(c)&&(e[t.replace(c,"")]=i,delete e[t]);let i=document.querySelector("meta[name=visitor-payload]");if(i){let t=JSON.parse(atob(i.content));Object.assign(e,t)}let s=new URLSearchParams(window.location.search);for(let[t,i]of s)u.includes(t.toLowerCase())&&(e[t]=i);return e.staff=(0,o.B)().toString(),Object.assign(e,t)}function h(t){s?.sendPageView(d(t))}function m(t,e={}){let i=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,n=i?{service:i}:{};for(let[t,i]of Object.entries(e))null!=i&&(n[t]=`${i}`);s&&(d(n),s.sendEvent(t||"unknown",d(n)))}}},t=>{var e=e=>t(t.s=e);t.O(0,["vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183","vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-b4a243","ui_packages_soft-nav_soft-nav_ts"],()=>e(11310));var i=t.O()}]);
//# sourceMappingURL=marketing-aeea672c6f3c.js.map