var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function a(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function c(t){return document.createTextNode(t)}function i(){return c(" ")}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function d(t){return""===t?null:+t}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function p(t,e){t.value=null==e?"":e}let $;function m(t){$=t}const v=[],g=[],w=[],_=[],b=Promise.resolve();let y=!1;function x(t){w.push(t)}let k=!1;const E=new Set;function C(){if(!k){k=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];m(e),T(e.$$)}for(m(null),v.length=0;g.length;)g.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];E.has(e)||(E.add(e),e())}w.length=0}while(v.length);for(;_.length;)_.pop()();y=!1,k=!1,E.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const A=new Set;function M(t,e){-1===t.$$.dirty[0]&&(v.push(t),y||(y=!0,b.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(u,s,l,c,i,f,d,h=[-1]){const p=$;m(u);const v=u.$$={fragment:null,ctx:null,props:f,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:s.context||[]),callbacks:n(),dirty:h,skip_bound:!1,root:s.target||p.$$.root};d&&d(v.root);let g=!1;if(v.ctx=l?l(u,s.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return v.ctx&&i(v.ctx[t],v.ctx[t]=o)&&(!v.skip_bound&&v.bound[t]&&v.bound[t](o),g&&M(u,t)),e})):[],v.update(),g=!0,o(v.before_update),v.fragment=!!c&&c(v.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);v.fragment&&v.fragment.l(t),t.forEach(a)}else v.fragment&&v.fragment.c();s.intro&&((w=u.$$.fragment)&&w.i&&(A.delete(w),w.i(_))),function(t,n,u,s){const{fragment:a,on_mount:l,on_destroy:c,after_update:i}=t.$$;a&&a.m(n,u),s||x((()=>{const n=l.map(e).filter(r);c?c.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(x)}(u,s.target,s.anchor,s.customElement),C()}var w,_;m(p)}function N(e){let n,o,r,u,$,m,v,g,w,_,b,y,x,k,E,C,T,A,M,j,N,O,L,P;return{c(){n=l("main"),o=l("div"),r=l("h1"),r.textContent="Tailwind calculator",u=i(),$=l("p"),$.textContent="Input your pixels, and get the number on your Tailwind classes (if you use the default sizing)",m=i(),v=l("div"),g=l("label"),g.textContent="Pixels:",w=i(),_=l("input"),b=i(),y=l("div"),x=l("span"),x.textContent="REM:",k=i(),E=l("span"),C=c(e[2]),T=i(),A=l("div"),M=l("span"),M.textContent="Tailwind:",j=i(),N=l("span"),O=c(e[1]),f(r,"class","svelte-u0hwao"),f($,"class","svelte-u0hwao"),f(g,"class","row__label svelte-u0hwao"),f(g,"for","px"),f(_,"class","row__value svelte-u0hwao"),f(_,"type","number"),f(v,"class","row svelte-u0hwao"),f(x,"class","row__label svelte-u0hwao"),f(E,"class","row__value svelte-u0hwao"),f(y,"class","row svelte-u0hwao"),f(M,"class","row__label svelte-u0hwao"),f(N,"class","row__value svelte-u0hwao"),f(A,"class","row svelte-u0hwao"),f(o,"class","block svelte-u0hwao"),f(n,"class","svelte-u0hwao")},m(t,a){var l,c,i,f;!function(t,e,n){t.insertBefore(e,n||null)}(t,n,a),s(n,o),s(o,r),s(o,u),s(o,$),s(o,m),s(o,v),s(v,g),s(v,w),s(v,_),p(_,e[0]),s(o,b),s(o,y),s(y,x),s(y,k),s(y,E),s(E,C),s(o,T),s(o,A),s(A,M),s(A,j),s(A,N),s(N,O),L||(l=_,c="input",i=e[3],l.addEventListener(c,i,f),P=()=>l.removeEventListener(c,i,f),L=!0)},p(t,[e]){1&e&&d(_.value)!==t[0]&&p(_,t[0]),4&e&&h(C,t[2]),2&e&&h(O,t[1])},i:t,o:t,d(t){t&&a(n),L=!1,P()}}}function O(t,e,n){let o,r=10;function u(){if(r<1)return r}return t.$$.update=()=>{1&t.$$.dirty&&n(2,o=r/16),1&t.$$.dirty&&n(1,u=function(t){if(t<1)return t;const e=4*o,n=[.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40,44,48,52,56,60,64,72,80,96];return n.includes(e)?e:`${n.sort(((t,n)=>Math.abs(e-t)-Math.abs(e-n)))[0]} (approx)`}(r))},[r,u,o,function(){r=d(this.value),n(0,r)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,O,N,u,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
