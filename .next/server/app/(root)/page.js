(()=>{var e={};e.id=707,e.ids=[707],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d}),r(67346),r(51251),r(93045),r(35866);var o=r(23191),n=r(88716),i=r(37922),a=r.n(i),s=r(95231),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let d=["",{children:["(root)",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,67346)),"/Users/darshanpatel/Desktop/dpatel99/app/(root)/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,51251)),"/Users/darshanpatel/Desktop/dpatel99/app/(root)/layout.tsx"],template:[()=>Promise.resolve().then(r.bind(r,93045)),"/Users/darshanpatel/Desktop/dpatel99/app/(root)/template.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/darshanpatel/Desktop/dpatel99/app/(root)/page.tsx"],p="/(root)/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new o.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(root)/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},74965:(e,t,r)=>{Promise.resolve().then(r.bind(r,18115)),Promise.resolve().then(r.bind(r,47640)),Promise.resolve().then(r.bind(r,46186)),Promise.resolve().then(r.bind(r,11473)),Promise.resolve().then(r.bind(r,57932)),Promise.resolve().then(r.bind(r,71239)),Promise.resolve().then(r.bind(r,34553)),Promise.resolve().then(r.bind(r,40602)),Promise.resolve().then(r.bind(r,65011)),Promise.resolve().then(r.bind(r,959)),Promise.resolve().then(r.bind(r,2521)),Promise.resolve().then(r.bind(r,57231)),Promise.resolve().then(r.bind(r,87919)),Promise.resolve().then(r.bind(r,15586)),Promise.resolve().then(r.bind(r,26957)),Promise.resolve().then(r.bind(r,24659)),Promise.resolve().then(r.bind(r,47220)),Promise.resolve().then(r.bind(r,76010)),Promise.resolve().then(r.bind(r,6459)),Promise.resolve().then(r.bind(r,81633)),Promise.resolve().then(r.bind(r,10291)),Promise.resolve().then(r.bind(r,24877)),Promise.resolve().then(r.bind(r,33636)),Promise.resolve().then(r.bind(r,18242)),Promise.resolve().then(r.bind(r,14860)),Promise.resolve().then(r.bind(r,57692)),Promise.resolve().then(r.bind(r,59875)),Promise.resolve().then(r.bind(r,43298)),Promise.resolve().then(r.bind(r,7071)),Promise.resolve().then(r.bind(r,86105)),Promise.resolve().then(r.bind(r,42052)),Promise.resolve().then(r.bind(r,23973)),Promise.resolve().then(r.bind(r,64872)),Promise.resolve().then(r.bind(r,13523)),Promise.resolve().then(r.bind(r,45529)),Promise.resolve().then(r.bind(r,55823))},18115:(e,t,r)=>{"use strict";r.d(t,{HeroHighlight:()=>K,Highlight:()=>Q});var o=r(10326),n=r(41135);let i=/^\[(.+)\]$/;function a(e,t){let r=e;return t.split("-").forEach(e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r}let s=/\s+/;function l(){let e,t,r=0,o="";for(;r<arguments.length;)(e=arguments[r++])&&(t=function e(t){let r;if("string"==typeof t)return t;let o="";for(let n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);return o}(e))&&(o&&(o+=" "),o+=t);return o}function d(e){let t=t=>t[e]||[];return t.isThemeGetter=!0,t}let c=/^\[(?:([a-z-]+):)?(.+)\]$/i,p=/^\d+\/\d+$/,u=new Set(["px","full","screen"]),m=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,g=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,b=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,h=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,f=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function v(e){return y(e)||u.has(e)||p.test(e)}function x(e){return R(e,"length",A)}function y(e){return!!e&&!Number.isNaN(Number(e))}function w(e){return R(e,"number",y)}function k(e){return!!e&&Number.isInteger(Number(e))}function P(e){return e.endsWith("%")&&y(e.slice(0,-1))}function j(e){return c.test(e)}function C(e){return m.test(e)}let S=new Set(["length","size","percentage"]);function z(e){return R(e,S,U)}function D(e){return R(e,"position",U)}let I=new Set(["image","url"]);function M(e){return R(e,I,E)}function N(e){return R(e,"",G)}function _(){return!0}function R(e,t,r){let o=c.exec(e);return!!o&&(o[1]?"string"==typeof t?o[1]===t:t.has(o[1]):r(o[2]))}function A(e){return g.test(e)&&!b.test(e)}function U(){return!1}function G(e){return h.test(e)}function E(e){return f.test(e)}Symbol.toStringTag;let q=function(e,...t){let r,o,n;let d=function(s){var l;return o=(r={cache:function(e){if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=new Map,o=new Map;function n(n,i){r.set(n,i),++t>e&&(t=0,o=r,r=new Map)}return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(n(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):n(e,t)}}}((l=t.reduce((e,t)=>t(e),e())).cacheSize),splitModifiers:function(e){let t=e.separator,r=1===t.length,o=t[0],n=t.length;return function(e){let i;let a=[],s=0,l=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===s){if(c===o&&(r||e.slice(d,d+n)===t)){a.push(e.slice(l,d)),l=d+n;continue}if("/"===c){i=d;continue}}"["===c?s++:"]"===c&&s--}let d=0===a.length?e:e.substring(l),c=d.startsWith("!"),p=c?d.substring(1):d;return{modifiers:a,hasImportantModifier:c,baseClassName:p,maybePostfixModifierPosition:i&&i>l?i-l:void 0}}}(l),...function(e){let t=function(e){var t;let{theme:r,prefix:o}=e,n={nextPart:new Map,validators:[]};return(t=Object.entries(e.classGroups),o?t.map(([e,t])=>[e,t.map(e=>"string"==typeof e?o+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[o+e,t])):e)]):t).forEach(([e,t])=>{(function e(t,r,o,n){t.forEach(t=>{if("string"==typeof t){(""===t?r:a(r,t)).classGroupId=o;return}if("function"==typeof t){if(t.isThemeGetter){e(t(n),r,o,n);return}r.validators.push({validator:t,classGroupId:o});return}Object.entries(t).forEach(([t,i])=>{e(i,a(r,t),o,n)})})})(t,n,e,r)}),n}(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:function(e){let r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(t,r){if(0===t.length)return r.classGroupId;let o=t[0],n=r.nextPart.get(o),i=n?e(t.slice(1),n):void 0;if(i)return i;if(0===r.validators.length)return;let a=t.join("-");return r.validators.find(({validator:e})=>e(a))?.classGroupId}(r,t)||function(e){if(i.test(e)){let t=i.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}(e)},getConflictingClassGroupIds:function(e,t){let n=r[e]||[];return t&&o[e]?[...n,...o[e]]:n}}}(l)}).cache.get,n=r.cache.set,d=c,c(s)};function c(e){let t=o(e);if(t)return t;let i=function(e,t){let{splitModifiers:r,getClassGroupId:o,getConflictingClassGroupIds:n}=t,i=new Set;return e.trim().split(s).map(e=>{let{modifiers:t,hasImportantModifier:n,baseClassName:i,maybePostfixModifierPosition:a}=r(e),s=o(a?i.substring(0,a):i),l=!!a;if(!s){if(!a||!(s=o(i)))return{isTailwindClass:!1,originalClassName:e};l=!1}let d=(function(e){if(e.length<=1)return e;let t=[],r=[];return e.forEach(e=>{"["===e[0]?(t.push(...r.sort(),e),r=[]):r.push(e)}),t.push(...r.sort()),t})(t).join(":");return{isTailwindClass:!0,modifierId:n?d+"!":d,classGroupId:s,originalClassName:e,hasPostfixModifier:l}}).reverse().filter(e=>{if(!e.isTailwindClass)return!0;let{modifierId:t,classGroupId:r,hasPostfixModifier:o}=e,a=t+r;return!i.has(a)&&(i.add(a),n(r,o).forEach(e=>i.add(t+e)),!0)}).reverse().map(e=>e.originalClassName).join(" ")}(e,r);return n(e,i),i}return function(){return d(l.apply(null,arguments))}}(function(){let e=d("colors"),t=d("spacing"),r=d("blur"),o=d("brightness"),n=d("borderColor"),i=d("borderRadius"),a=d("borderSpacing"),s=d("borderWidth"),l=d("contrast"),c=d("grayscale"),p=d("hueRotate"),u=d("invert"),m=d("gap"),g=d("gradientColorStops"),b=d("gradientColorStopPositions"),h=d("inset"),f=d("margin"),S=d("opacity"),I=d("padding"),R=d("saturate"),A=d("scale"),U=d("sepia"),G=d("skew"),E=d("space"),q=d("translate"),T=()=>["auto","contain","none"],F=()=>["auto","hidden","clip","visible","scroll"],H=()=>["auto",j,t],W=()=>[j,t],B=()=>["",v,x],L=()=>["auto",y,j],$=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],J=()=>["solid","dashed","dotted","double","none"],O=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Z=()=>["start","end","center","between","around","evenly","stretch"],V=()=>["","0",j],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Q=()=>[y,w],X=()=>[y,j];return{cacheSize:500,separator:":",theme:{colors:[_],spacing:[v,x],blur:["none","",C,j],brightness:Q(),borderColor:[e],borderRadius:["none","","full",C,j],borderSpacing:W(),borderWidth:B(),contrast:Q(),grayscale:V(),hueRotate:X(),invert:V(),gap:W(),gradientColorStops:[e],gradientColorStopPositions:[P,x],inset:H(),margin:H(),opacity:Q(),padding:W(),saturate:Q(),scale:Q(),sepia:V(),skew:X(),space:W(),translate:W()},classGroups:{aspect:[{aspect:["auto","square","video",j]}],container:["container"],columns:[{columns:[C]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...$(),j]}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",k,j]}],basis:[{basis:H()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",j]}],grow:[{grow:V()}],shrink:[{shrink:V()}],order:[{order:["first","last","none",k,j]}],"grid-cols":[{"grid-cols":[_]}],"col-start-end":[{col:["auto",{span:["full",k,j]},j]}],"col-start":[{"col-start":L()}],"col-end":[{"col-end":L()}],"grid-rows":[{"grid-rows":[_]}],"row-start-end":[{row:["auto",{span:[k,j]},j]}],"row-start":[{"row-start":L()}],"row-end":[{"row-end":L()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",j]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",j]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...Z()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Z(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Z(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[I]}],px:[{px:[I]}],py:[{py:[I]}],ps:[{ps:[I]}],pe:[{pe:[I]}],pt:[{pt:[I]}],pr:[{pr:[I]}],pb:[{pb:[I]}],pl:[{pl:[I]}],m:[{m:[f]}],mx:[{mx:[f]}],my:[{my:[f]}],ms:[{ms:[f]}],me:[{me:[f]}],mt:[{mt:[f]}],mr:[{mr:[f]}],mb:[{mb:[f]}],ml:[{ml:[f]}],"space-x":[{"space-x":[E]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[E]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",j,t]}],"min-w":[{"min-w":[j,t,"min","max","fit"]}],"max-w":[{"max-w":[j,t,"none","full","min","max","fit","prose",{screen:[C]},C]}],h:[{h:[j,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[j,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[j,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[j,t,"auto","min","max","fit"]}],"font-size":[{text:["base",C,x]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",w]}],"font-family":[{font:[_]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",j]}],"line-clamp":[{"line-clamp":["none",y,w]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",v,j]}],"list-image":[{"list-image":["none",j]}],"list-style-type":[{list:["none","disc","decimal",j]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...J(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",v,x]}],"underline-offset":[{"underline-offset":["auto",v,j]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:W()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",j]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",j]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...$(),D]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",z]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},M]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[g]}],"gradient-via":[{via:[g]}],"gradient-to":[{to:[g]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[...J(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:J()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...J()]}],"outline-offset":[{"outline-offset":[v,j]}],"outline-w":[{outline:[v,x]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:B()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[v,x]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",C,N]}],"shadow-color":[{shadow:[_]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":[...O(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":O()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",C,j]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[u]}],saturate:[{saturate:[R]}],sepia:[{sepia:[U]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[R]}],"backdrop-sepia":[{"backdrop-sepia":[U]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",j]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",j]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",j]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[A]}],"scale-x":[{"scale-x":[A]}],"scale-y":[{"scale-y":[A]}],rotate:[{rotate:[k,j]}],"translate-x":[{"translate-x":[q]}],"translate-y":[{"translate-y":[q]}],"skew-x":[{"skew-x":[G]}],"skew-y":[{"skew-y":[G]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",j]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",j]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":W()}],"scroll-mx":[{"scroll-mx":W()}],"scroll-my":[{"scroll-my":W()}],"scroll-ms":[{"scroll-ms":W()}],"scroll-me":[{"scroll-me":W()}],"scroll-mt":[{"scroll-mt":W()}],"scroll-mr":[{"scroll-mr":W()}],"scroll-mb":[{"scroll-mb":W()}],"scroll-ml":[{"scroll-ml":W()}],"scroll-p":[{"scroll-p":W()}],"scroll-px":[{"scroll-px":W()}],"scroll-py":[{"scroll-py":W()}],"scroll-ps":[{"scroll-ps":W()}],"scroll-pe":[{"scroll-pe":W()}],"scroll-pt":[{"scroll-pt":W()}],"scroll-pr":[{"scroll-pr":W()}],"scroll-pb":[{"scroll-pb":W()}],"scroll-pl":[{"scroll-pl":W()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",j]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[v,x,w]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}});function T(...e){return q((0,n.W)(e))}var F=r(17577),H=r(64840),W=r(73965),B=r(74749);function L(e){let t=(0,B.h)(()=>(0,H.BX)(e)),{isStatic:r}=(0,F.useContext)(W._);if(r){let[,r]=(0,F.useState)(e);(0,F.useEffect)(()=>t.on("change",r),[])}return t}var $=r(85518),J=r(42482),O=r(95386),Z=r(21551);function V(e,...t){let r=e.length;return function(e,t){let r=L(t()),o=()=>r.set(t());return o(),(0,J.L)(()=>{let t=()=>O.Wi.preRender(o,!1,!0),r=e.map(e=>e.on("change",t));return()=>{r.forEach(e=>e()),(0,O.Pn)(o)}}),r}(t.filter(Z.i),function(){let o="";for(let n=0;n<r;n++){o+=e[n];let r=t[n];r&&(o+=(0,Z.i)(r)?r.get():r)}return o})}let K=({children:e,className:t,containerClassName:r})=>{let n=L(0),i=L(0);return(0,o.jsxs)("div",{className:T("relative h-[85vh] lg:h-[93.2vh] flex items-center bg-white dark:bg-black justify-center w-full group",r),onMouseMove:function({currentTarget:e,clientX:t,clientY:r}){if(!e)return;let{left:o,top:a}=e.getBoundingClientRect();n.set(t-o),i.set(r-a)},children:[o.jsx("div",{className:"absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800  pointer-events-none"}),o.jsx($.E.div,{className:"pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",style:{WebkitMaskImage:V`
            radial-gradient(
              200px circle at ${n}px ${i}px,
              black 0%,
              transparent 100%
            )
          `,maskImage:V`
            radial-gradient(
              200px circle at ${n}px ${i}px,
              black 0%,
              transparent 100%
            )
          `}}),o.jsx("div",{className:T("relative z-20",t),children:e})]})},Q=({children:e,className:t})=>o.jsx($.E.span,{initial:{backgroundSize:"0% 100%"},animate:{backgroundSize:"100% 100%"},transition:{duration:2,ease:"linear",delay:.5},style:{backgroundRepeat:"no-repeat",backgroundPosition:"left center",display:"inline"},className:T("relative inline-block pb-1   px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500",t),children:e})},67346:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>k,metadata:()=>w});var o=r(19510),n=r(66875),i=r(55093),a=r(65393);r(71159);let s=({emailShow:e=!0})=>(0,o.jsxs)("div",{className:"mt-4 lg:mt-0",children:[o.jsx(i.zx,{className:"underline",as:a.rU,variant:"light",target:"_blank",href:n.jZ.socials.linkedIn,children:"LinkedIn"}),o.jsx(i.zx,{className:"underline",as:a.rU,variant:"light",target:"_blank",href:n.jZ.socials.github,children:"Github"}),e&&o.jsx(i.zx,{className:"underline",as:a.rU,variant:"light",href:`mailto:${n.jZ.socials.mail}`,children:"Email"})]});var l=r(68570);let d=(0,l.createProxy)(String.raw`/Users/darshanpatel/Desktop/dpatel99/components/UI/HeroHighlight.tsx`),{__esModule:c,$$typeof:p}=d;d.default;let u=(0,l.createProxy)(String.raw`/Users/darshanpatel/Desktop/dpatel99/components/UI/HeroHighlight.tsx#HeroHighlight`),m=(0,l.createProxy)(String.raw`/Users/darshanpatel/Desktop/dpatel99/components/UI/HeroHighlight.tsx#Highlight`),g=(0,l.createProxy)(String.raw`/Users/darshanpatel/Desktop/dpatel99/node_modules/@nextui-org/image/dist/index.mjs`),{__esModule:b,$$typeof:h}=g;g.default;let f=(0,l.createProxy)(String.raw`/Users/darshanpatel/Desktop/dpatel99/node_modules/@nextui-org/image/dist/index.mjs#Image`);(0,l.createProxy)(String.raw`/Users/darshanpatel/Desktop/dpatel99/node_modules/@nextui-org/image/dist/index.mjs#useImage`);var v=r(27162);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let x=(0,v.Z)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),y=(0,v.Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),w={title:"Patel's Portfolio | Home",openGraph:{title:"Patel's Portfolio | Home",url:"https://saifhamdare-portfolio.netlify.app",images:[{url:"https://i.ibb.co/5k6rdvF/tabicon.png",alt:"portfolio-logo"}]},twitter:{title:"Patel's Portfolio | Home",images:[{url:"https://i.ibb.co/5k6rdvF/tabicon.png",alt:"portfolio-logo"}]}};function k(){return o.jsx(o.Fragment,{children:o.jsx(u,{className:"px-6",children:(0,o.jsxs)("div",{className:"grid lg:grid-cols-2 gap-8 lg:gap-0 items-center",children:[o.jsx("div",{className:"justify-self-center",children:o.jsx(f,{src:"/IMG_1671.webp",alt:n.jZ.name,className:"opacity-100 rounded bg-slate-300 dark:bg-slate-900 dark:to-purple-500 w-[300px] md:w-[400px] lg:w-[600px]"})}),(0,o.jsxs)("div",{className:"z-10 text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center lg:text-left mx-auto ",children:[(0,o.jsxs)("p",{className:"text-4xl md:text-5xl lg:text-8xl mb-4",children:["I'm ",n.jZ.name]}),o.jsx("div",{children:o.jsx(m,{className:"text-black dark:text-white block",children:n.jZ.position})}),(0,o.jsxs)(i.zx,{variant:"solid",color:"secondary",size:"sm",className:"mt-16 inline-flex md:hidden",as:a.rU,href:"/Resume.pdf",download:"Darshan_Patel_resume_2024_Vancouver",children:["Download Resume ",o.jsx(x,{size:22})]}),(0,o.jsxs)(i.zx,{variant:"solid",color:"secondary",size:"lg",className:"mt-16 hidden md:inline-flex",as:a.rU,href:"/Resume.pdf",download:"Darshan_Patel_resume_2024_Vancouver",children:["Download Resume ",o.jsx(x,{size:22})]}),(0,o.jsxs)(i.zx,{variant:"faded",color:"secondary",size:"sm",className:"mt-16 inline-flex md:hidden ml-2",as:a.rU,href:"/about",children:["Know More ",o.jsx(y,{size:18})]}),(0,o.jsxs)(i.zx,{variant:"faded",color:"secondary",size:"lg",className:"mt-16 hidden md:inline-flex ml-2",as:a.rU,href:"/about",children:["Know More ",o.jsx(y,{size:18})]}),o.jsx(s,{})]})]})})})}},66875:(e,t,r)=>{"use strict";r.d(t,{ZT:()=>i,f3:()=>n,jZ:()=>o,q:()=>a});let o={name:"Darshan Patel",position:"Full Stack Developer",bio:"Full Stack Developer & Technology Enthusiast: With over 5 years of experience, I specialize in creating high-performance web and mobile applications. I have a proven track record in various industries, from startups to large corporations. When I'm not coding, I enjoy exploring new cafes, savoring a cup of tea, and embracing life's adventures one line of code at a time!",socials:{linkedIn:"https://www.linkedin.com/in/dpatel99",mail:"darshanpatel1902@gmail.com",github:"https://github.com/dpatel999"},details:{firstname:"Darshan",lastname:"Patel",email:"darshanpatel1902@gmail.com",nationality:"Indian",degree:"Bachelor's",address:"British Columbia, Canada",interests:"Motorcycling, Learning about new things",experience:"5 Years"},skills:{frontend:["HTML","CSS","Scss","Bootstrap","Tailwind","Javascript","ES6","Typescript","jQuery","React Js","Next Js","Redux","Material UI","Ant Design","Framer Motion","Shadcn"],backend:["PHP","Node Js","Firebase","Express.js","GraphQL"],tools:["Git","Github","Postman","Jira","Confluence","Bitbucket","Slack","Figma","Asana"],soft:["Time management","Client/Stakeholders Interactions","Communication","Team Collaboration","Agile Development","Problem-Solving","Critical Thinking"]}},n=[{title:"Bachelor of Computing Science",location:"Thompson Rivers University",date:"2016 - 2020",description:"Focused on software development, data structures, algorithms, and database management. Graduated with honors."},{title:"Diploma - Mathematics",location:"Gujarat State Board of Technical Education",date:"2014 - 2016",description:"Specialized in advanced mathematics, statistics, and logical reasoning."}],i=[{title:"Shopify/Next.js Developer",location:"Sleep Country, Vancouver, BC",date:"Jun 2023 - Present",description:`- Led the transition of Sleep Country's eCommerce platform to a headless architecture using Shopify and Strapi.
       

 - Utilized AWS services for scalable hosting, serverless functions, and robust data storage solutions.
       

 - Developed and deployed new features for the headless eCommerce site, ensuring seamless integration with third-party APIs.
        

- Applied best practices for frontend performance optimization, reducing load times by 20% and enhancing user experience.
       

 - Conducted cross-browser and device testing to ensure compatibility and responsiveness.
       

 - Managed integrations with various third-party systems, including payment gateways and inventory management systems.
       

 - Implemented DevOps practices, including CI/CD pipelines and infrastructure as code (IaC) using AWS CloudFormation and Terraform.
       

 - Ensured application security through the implementation of OAuth, JWT, and adherence to OWASP standards.
       

 - Collaborated with cross-functional teams to stay abreast of industry trends and emerging technologies.
       

 - Result: Reduced page load times by 20%, increased user engagement by 25%, and improved eCommerce conversion rates by 15%.`},{title:"Full Stack Developer",location:"Understance, Vancouver, BC",date:"Mar 2021 - May 2023",description:`- Developed and maintained high-performance eCommerce sites using Shopify Liquid and the Hydrogen framework.
       

 - Led the launch of multiple Shopify Plus stores, handling everything from theme development to custom app integration.
       

 - Designed and implemented robust Canvas apps with Dataverse backend and SharePoint connectors.
       

 - Spearheaded the development of a self-returns portal using React and Microsoft Power Automate, streamlining return processes.
       

 - Created custom Shopify apps and themes, leveraging Tailwind CSS and TypeScript for efficient, scalable solutions.
       

 - Automated workflows and business processes using cloud flows, enhancing operational efficiency.
       

 - Participated actively in agile ceremonies, including sprint planning, daily standups, and retrospectives.
       

 - Result: Enhanced operational efficiency by 30% and improved customer return process efficiency by 40%.`},{title:"Business Application Developer",location:"Understance, Vancouver, BC",date:"Mar 2021 - Present",description:`- Developed and deployed business tools using the Power Platform, enhancing automation and efficiency across various departments.
       

 - Collaborated with Solution Strategists and Delivery Managers to gather requirements and provide technical suggestions.
       

 - Designed and developed end-to-end automation solutions using PowerApps, Power Automate, and RPA.
       

 - Integrated D2C tools to enhance customer experience and gather valuable data for business insights.
       

 - Built and maintained eCommerce sites using Shopify Liquid language and Admin/Storefront API.
       

 - Created a clothing brand with a Shopify Plus store from scratch, leveraging the Power Platform for backend operations.
       

 - Designed, configured, and implemented Canvas apps with Dataverse backend and SharePoint connectors.
       

 - Developed a scalable self-returns portal using React and Microsoft Power Automate, improving the returns process.
       

 - Built custom app templates and themes for a consistent look across the organization.
       

 - Developed cloud flows triggered based on schedule to automate business processes.
       

 - Created custom PCF controls using Power Platform CLI, TypeScript, and React for enhanced user interface designs.
       

 - Result: Enhanced departmental efficiency by 35%, improved data collection by 25%, and streamlined business processes.`},{title:"Web Developer",location:"Pixel Architect, Kamloops, BC",date:"Feb 2020 - Mar 2020",description:`- Developed professional websites from the ground up using WordPress, ensuring high-quality user experiences.
       

 - Implemented QA tests and documentation within an agile development workflow, guaranteeing reliable and bug-free deployments.
       

 - Collaborated with team members using online group management tools to report progress, milestones, and tasks.
       

 - Successfully deployed websites to staging for review and production, adhering to established timelines.
       

 - Contributed to product concepts by providing wireframes, mock-ups, and interactive prototypes, promoting efficient collaboration.
       

- Worked closely with Government and Non-Profit organizations, tailoring solutions to meet specific requirements.
       

 - Result: Reduced development time by 25%, improved website performance by 20%, and enhanced customer satisfaction by 30%.`},{title:"Software Developer",location:"BC Lottery Corporation, Kamloops, BC",date:"May 2019 - Jan 2020",description:`- Developed mobile and web applications using ReactJS and React Native, simplifying the lottery purchase process.
       

 - Leveraged Amazon Web Services to prototype mobile applications, ensuring optimal performance and scalability.
       

 - Implemented agile management principles, leading sprint planning, standups, and retrospectives to ensure project success.
       

 - Followed a test-driven approach to coding application components, resulting in robust and high-quality software.
       

 - Collaborated with UI/UX team from Vancouver, making design decisions that enhanced user engagement and satisfaction.
       

 - Result: Improved application performance by 30%, enhanced user satisfaction by 20%, and streamlined the lottery purchase process.`},{title:"Freelance Developer",location:"Various Clients",date:"Sep 2019 - Present",description:`- Conducted comprehensive client meetings to understand website requirements and successfully deliver tailored solutions.
       

 - Acted as a primary communication point between clients and hosting companies, ensuring smooth coordination.
       

 - Designed and developed cross-platform native apps and web apps using React, including a highly functional food delivery app for Namar Canada.
       

 - Utilized Shopify and WordPress to build custom websites, incorporating plugins and filters to meet specific business needs.
       

 - Managed the design, maintenance, and hosting of LAMP websites on AWS, ensuring optimal performance and security.
       

- Result: Delivered 20+ successful projects, improved client satisfaction by 40%, and increased website performance by 25%.`},{title:"Co-Founder",location:"CarGO Marketplace",date:"Jun 2019 - Feb 2020",description:`- Co-founded an innovative startup aimed at solving marketplace challenges.
       

 - Developed an e-commerce application using React Native Framework, enabling users to buy and sell used goods with ease.
       

- Leveraged Google Firebase to develop a robust backend for the mobile application.
       

- Participated in all aspects of business development, from market research to operations, ensuring alignment with the company's vision.
       

 - Result: Grew user base to 10,000+ within 6 months, improved transaction completion rates by 35%, and achieved a 30% increase in user retention.`}],a=[{title:"Shopify/Next.js Developer",location:"Sleep Country, Vancouver, BC",date:"Jun 2023 - Present",description:"- Engineered and transitioned the eCommerce platform to a headless architecture using Shopify and Strapi."}]}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[819,293,375],()=>r(19));module.exports=o})();