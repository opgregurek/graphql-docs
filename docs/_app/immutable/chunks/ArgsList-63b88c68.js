import{S as q,i as z,s as F,e as A,b as k,F as x,h as d,q as L,r as E,u as K,J as ee,K as G,k as J,a as U,l as M,m as V,c as B,n as j,M as y,L as te,Y as C,Z as R,N as ne,O as le,P as re,Q as ge,f as _,t as g,H as be,R as ie,a2 as he,U as ke,_ as Q,v as ye,g as H,d as I,x as v,y as T,z as N,A as w,C as oe,a8 as ve,p as Te}from"./paths-76b32af6.js";import{d as W,S as Ne,e as we,f as Se,g as Le,C as Ee}from"./PreviousNextPage-22971146.js";import{y as se,x as De,w as Pe,E as Ae,l as Re}from"./model-974a85e8.js";import{L as Ce}from"./ChevronDown-e01a67e0.js";import{u as fe}from"./_commonjsHelpers-eb089990.js";function Ue(i){let e=(i[0]??"-")+"",l;return{c(){l=L(e)},l(t){l=E(t,e)},m(t,n){k(t,l,n)},p(t,n){n&1&&e!==(e=(t[0]??"-")+"")&&K(l,e)},d(t){t&&d(l)}}}function Be(i){let e=JSON.stringify(i[0],null,2)+"",l;return{c(){l=L(e)},l(t){l=E(t,e)},m(t,n){k(t,l,n)},p(t,n){n&1&&e!==(e=JSON.stringify(t[0],null,2)+"")&&K(l,e)},d(t){t&&d(l)}}}function Oe(i){let e,l,t;return{c(){e=L('"'),l=L(i[0]),t=L('"')},l(n){e=E(n,'"'),l=E(n,i[0]),t=E(n,'"')},m(n,r){k(n,e,r),k(n,l,r),k(n,t,r)},p(n,r){r&1&&K(l,n[0])},d(n){n&&d(e),n&&d(l),n&&d(t)}}}function je(i){let e;function l(r,o){return typeof r[0]=="string"?Oe:typeof r[0]=="object"?Be:Ue}let t=l(i),n=t(i);return{c(){n.c(),e=A()},l(r){n.l(r),e=A()},m(r,o){n.m(r,o),k(r,e,o)},p(r,[o]){t===(t=l(r))&&n?n.p(r,o):(n.d(1),n=t(r),n&&(n.c(),n.m(e.parentNode,e)))},i:x,o:x,d(r){n.d(r),r&&d(e)}}}function Je(i,e,l){let{value:t}=e;return i.$$set=n=>{"value"in n&&l(0,t=n.value)},[t]}class Me extends q{constructor(e){super(),z(this,e,Je,je,F,{value:0})}}const Ve=i=>({}),ae=i=>({});function qe(i){let e;return{c(){e=L(i[2])},l(l){e=E(l,i[2])},m(l,t){k(l,e,t)},p(l,t){t&4&&K(e,l[2])},d(l){l&&d(e)}}}function ze(i){let e,l,t,n,r,o,f;const u=i[10].default,c=ee(u,i,i[9],null),D=i[10].tooltip,m=ee(D,i,i[9],ae),$=m||qe(i);let S=[i[8]],P={};for(let s=0;s<S.length;s+=1)P=G(P,S[s]);return{c(){e=J("span"),l=J("button"),c&&c.c(),t=U(),n=J("div"),$&&$.c(),this.h()},l(s){e=M(s,"SPAN",{});var a=V(e);l=M(a,"BUTTON",{type:!0,"aria-describedby":!0});var p=V(l);c&&c.l(p),p.forEach(d),t=B(a),n=M(a,"DIV",{role:!0,id:!0});var h=V(n);$&&$.l(h),h.forEach(d),a.forEach(d),this.h()},h(){j(l,"type","button"),j(l,"aria-describedby",i[5]),y(l,"bx--tooltip--a11y",!0),y(l,"bx--tooltip__trigger",!0),y(l,"bx--tooltip__trigger--definition",!0),y(l,"bx--tooltip--hidden",!i[0]),y(l,"bx--tooltip--visible",i[0]),y(l,"bx--tooltip--top",i[4]==="top"),y(l,"bx--tooltip--bottom",i[4]==="bottom"),y(l,"bx--tooltip--align-start",i[3]==="start"),y(l,"bx--tooltip--align-center",i[3]==="center"),y(l,"bx--tooltip--align-end",i[3]==="end"),j(n,"role","tooltip"),j(n,"id",i[5]),y(n,"bx--assistive-text",!0),te(e,P),y(e,"bx--tooltip--definition",!0),y(e,"bx--tooltip--a11y",!0)},m(s,a){k(s,e,a),C(e,l),c&&c.m(l,null),i[17](l),C(e,t),C(e,n),$&&$.m(n,null),r=!0,o||(f=[R(window,"keydown",i[16]),R(l,"click",i[11]),R(l,"mouseover",i[12]),R(l,"mouseenter",i[13]),R(l,"mouseleave",i[14]),R(l,"focus",i[15]),R(l,"focus",i[7]),R(l,"blur",i[6]),R(e,"mouseenter",i[7]),R(e,"mouseleave",i[6])],o=!0)},p(s,[a]){c&&c.p&&(!r||a&512)&&ne(c,u,s,s[9],r?re(u,s[9],a,null):le(s[9]),null),(!r||a&32)&&j(l,"aria-describedby",s[5]),(!r||a&1)&&y(l,"bx--tooltip--hidden",!s[0]),(!r||a&1)&&y(l,"bx--tooltip--visible",s[0]),(!r||a&16)&&y(l,"bx--tooltip--top",s[4]==="top"),(!r||a&16)&&y(l,"bx--tooltip--bottom",s[4]==="bottom"),(!r||a&8)&&y(l,"bx--tooltip--align-start",s[3]==="start"),(!r||a&8)&&y(l,"bx--tooltip--align-center",s[3]==="center"),(!r||a&8)&&y(l,"bx--tooltip--align-end",s[3]==="end"),m?m.p&&(!r||a&512)&&ne(m,D,s,s[9],r?re(D,s[9],a,Ve):le(s[9]),ae):$&&$.p&&(!r||a&4)&&$.p(s,r?a:-1),(!r||a&32)&&j(n,"id",s[5]),te(e,P=ge(S,[a&256&&s[8]])),y(e,"bx--tooltip--definition",!0),y(e,"bx--tooltip--a11y",!0)},i(s){r||(_(c,s),_($,s),r=!0)},o(s){g(c,s),g($,s),r=!1},d(s){s&&d(e),c&&c.d(s),i[17](null),$&&$.d(s),o=!1,be(f)}}}function Fe(i,e,l){const t=["tooltipText","open","align","direction","id","ref"];let n=ie(e,t),{$$slots:r={},$$scope:o}=e,{tooltipText:f=""}=e,{open:u=!1}=e,{align:c="center"}=e,{direction:D="bottom"}=e,{id:m="ccs-"+Math.random().toString(36)}=e,{ref:$=null}=e;const S=he(),P=()=>l(0,u=!1),s=()=>l(0,u=!0);function a(b){Q.call(this,i,b)}function p(b){Q.call(this,i,b)}function h(b){Q.call(this,i,b)}function O(b){Q.call(this,i,b)}function Y(b){Q.call(this,i,b)}const Z=({key:b})=>{b==="Escape"&&P()};function de(b){ye[b?"unshift":"push"](()=>{$=b,l(1,$)})}return i.$$set=b=>{e=G(G({},e),ke(b)),l(8,n=ie(e,t)),"tooltipText"in b&&l(2,f=b.tooltipText),"open"in b&&l(0,u=b.open),"align"in b&&l(3,c=b.align),"direction"in b&&l(4,D=b.direction),"id"in b&&l(5,m=b.id),"ref"in b&&l(1,$=b.ref),"$$scope"in b&&l(9,o=b.$$scope)},i.$$.update=()=>{i.$$.dirty&1&&S(u?"open":"close")},[u,$,f,c,D,m,P,s,n,o,r,a,p,h,O,Y,Z,de]}class He extends q{constructor(e){super(),z(this,e,Fe,ze,F,{tooltipText:2,open:0,align:3,direction:4,id:5,ref:1})}}const Ie=He;function ue(i){let e,l;return e=new W({props:{type:"red",$$slots:{default:[Qe]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&3&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function Ke(i){let e;return{c(){e=L("Deprecated")},l(l){e=E(l,"Deprecated")},m(l,t){k(l,e,t)},d(l){l&&d(e)}}}function Qe(i){let e,l;return e=new Ie({props:{tooltipText:i[0],$$slots:{default:[Ke]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.tooltipText=t[0]),n&2&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function Ye(i){let e,l,t=i[0]&&ue(i);return{c(){t&&t.c(),e=A()},l(n){t&&t.l(n),e=A()},m(n,r){t&&t.m(n,r),k(n,e,r),l=!0},p(n,[r]){n[0]?t?(t.p(n,r),r&1&&_(t,1)):(t=ue(n),t.c(),_(t,1),t.m(e.parentNode,e)):t&&(H(),g(t,1,1,()=>{t=null}),I())},i(n){l||(_(t),l=!0)},o(n){g(t),l=!1},d(n){t&&t.d(n),n&&d(e)}}}function Ze(i,e,l){let{reason:t}=e;return i.$$set=n=>{"reason"in n&&l(0,t=n.reason)},[t]}class Ge extends q{constructor(e){super(),z(this,e,Ze,Ye,F,{reason:0})}}function ce(i){let e,l;return e=new W({props:{type:"purple",$$slots:{default:[We]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function We(i){let e;return{c(){e=L("Non-null")},l(l){e=E(l,"Non-null")},m(l,t){k(l,e,t)},d(l){l&&d(e)}}}function Xe(i){let e=!se(i[0]),l,t,n=e&&ce(i);return{c(){n&&n.c(),l=A()},l(r){n&&n.l(r),l=A()},m(r,o){n&&n.m(r,o),k(r,l,o),t=!0},p(r,[o]){o&1&&(e=!se(r[0])),e?n?o&1&&_(n,1):(n=ce(r),n.c(),_(n,1),n.m(l.parentNode,l)):n&&(H(),g(n,1,1,()=>{n=null}),I())},i(r){t||(_(n),t=!0)},o(r){g(n),t=!1},d(r){n&&n.d(r),r&&d(l)}}}function xe(i,e,l){let{type:t}=e;return i.$$set=n=>{"type"in n&&l(0,t=n.type)},[t]}class et extends q{constructor(e){super(),z(this,e,xe,Xe,F,{type:0})}}function tt(i){let e,l;return e=new Ce({props:{href:fe.joinUrlPaths(oe,`/types/${String(i[0].name)}`),$$slots:{default:[rt]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.href=fe.joinUrlPaths(oe,`/types/${String(t[0].name)}`)),n&3&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function nt(i){let e,l,t;return e=new X({props:{type:i[0].ofType}}),{c(){v(e.$$.fragment),l=L("!")},l(n){T(e.$$.fragment,n),l=E(n,"!")},m(n,r){N(e,n,r),k(n,l,r),t=!0},p(n,r){const o={};r&1&&(o.type=n[0].ofType),e.$set(o)},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){w(e,n),n&&d(l)}}}function lt(i){let e,l,t,n;return l=new X({props:{type:i[0].ofType}}),{c(){e=L("["),v(l.$$.fragment),t=L("]")},l(r){e=E(r,"["),T(l.$$.fragment,r),t=E(r,"]")},m(r,o){k(r,e,o),N(l,r,o),k(r,t,o),n=!0},p(r,o){const f={};o&1&&(f.type=r[0].ofType),l.$set(f)},i(r){n||(_(l.$$.fragment,r),n=!0)},o(r){g(l.$$.fragment,r),n=!1},d(r){r&&d(e),w(l,r),r&&d(t)}}}function rt(i){let e=i[0].name+"",l;return{c(){l=L(e)},l(t){l=E(t,e)},m(t,n){k(t,l,n)},p(t,n){n&1&&e!==(e=t[0].name+"")&&K(l,e)},d(t){t&&d(l)}}}function it(i){let e,l,t,n,r,o,f;const u=[lt,nt,tt],c=[];function D(m,$){return $&1&&(e=null),$&1&&(l=null),$&1&&(t=null),e==null&&(e=!!De(m[0])),e?0:(l==null&&(l=!!Pe(m[0])),l?1:(t==null&&(t=!!Ae(m[0])),t?2:-1))}return~(n=D(i,-1))&&(r=c[n]=u[n](i)),{c(){r&&r.c(),o=A()},l(m){r&&r.l(m),o=A()},m(m,$){~n&&c[n].m(m,$),k(m,o,$),f=!0},p(m,[$]){let S=n;n=D(m,$),n===S?~n&&c[n].p(m,$):(r&&(H(),g(c[S],1,1,()=>{c[S]=null}),I()),~n?(r=c[n],r?r.p(m,$):(r=c[n]=u[n](m),r.c()),_(r,1),r.m(o.parentNode,o)):r=null)},i(m){f||(_(r),f=!0)},o(m){g(r),f=!1},d(m){~n&&c[n].d(m),m&&d(o)}}}function ot(i,e,l){let{type:t}=e;return i.$$set=n=>{"type"in n&&l(0,t=n.type)},[t]}class X extends q{constructor(e){super(),z(this,e,ot,it,F,{type:0})}}function st(i){let e,l;return e=new X({props:{type:i[0]}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.type=t[0]),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function ft(i){let e,l;return e=new W({props:{type:"blue",$$slots:{default:[st]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,[n]){const r={};n&3&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function at(i,e,l){let{type:t}=e;return i.$$set=n=>{"type"in n&&l(0,t=n.type)},[t]}class ut extends q{constructor(e){super(),z(this,e,at,ft,F,{type:0})}}function pe(i,e,l){const t=i.slice();return t[2]=e[l],t}function _e(i){let e,l,t,n,r,o;return r=new Me({props:{value:i[2].default}}),{c(){e=J("span"),l=L("="),t=U(),n=J("span"),v(r.$$.fragment)},l(f){e=M(f,"SPAN",{});var u=V(e);l=E(u,"="),u.forEach(d),t=B(f),n=M(f,"SPAN",{});var c=V(n);T(r.$$.fragment,c),c.forEach(d)},m(f,u){k(f,e,u),C(e,l),k(f,t,u),k(f,n,u),N(r,n,null),o=!0},p(f,u){const c={};u&1&&(c.value=f[2].default),r.$set(c)},i(f){o||(_(r.$$.fragment,f),o=!0)},o(f){g(r.$$.fragment,f),o=!1},d(f){f&&d(e),f&&d(t),f&&d(n),w(r)}}}function me(i){let e,l;return e=new Ee({props:{source:i[2].description}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.source=t[2].description),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function ct(i){let e,l,t=i[2].name+"",n,r,o,f,u,c,D,m,$,S,P,s=i[2].default&&_e(i);f=new ut({props:{type:i[2].type}}),c=new Ge({props:{reason:i[2].deprecationReason}}),m=new et({props:{type:i[2].type}});let a=i[2].description&&me(i);return{c(){e=J("p"),l=J("span"),n=L(t),r=U(),s&&s.c(),o=U(),v(f.$$.fragment),u=U(),v(c.$$.fragment),D=U(),v(m.$$.fragment),$=U(),a&&a.c(),S=A(),this.h()},l(p){e=M(p,"P",{class:!0});var h=V(e);l=M(h,"SPAN",{style:!0});var O=V(l);n=E(O,t),O.forEach(d),r=B(h),s&&s.l(h),o=B(h),T(f.$$.fragment,h),u=B(h),T(c.$$.fragment,h),D=B(h),T(m.$$.fragment,h),h.forEach(d),$=B(p),a&&a.l(p),S=A(),this.h()},h(){Te(l,"font-weight","bold"),j(e,"class","arg-name-section svelte-9cf7d2")},m(p,h){k(p,e,h),C(e,l),C(l,n),C(e,r),s&&s.m(e,null),C(e,o),N(f,e,null),C(e,u),N(c,e,null),C(e,D),N(m,e,null),k(p,$,h),a&&a.m(p,h),k(p,S,h),P=!0},p(p,h){(!P||h&1)&&t!==(t=p[2].name+"")&&K(n,t),p[2].default?s?(s.p(p,h),h&1&&_(s,1)):(s=_e(p),s.c(),_(s,1),s.m(e,o)):s&&(H(),g(s,1,1,()=>{s=null}),I());const O={};h&1&&(O.type=p[2].type),f.$set(O);const Y={};h&1&&(Y.reason=p[2].deprecationReason),c.$set(Y);const Z={};h&1&&(Z.type=p[2].type),m.$set(Z),p[2].description?a?(a.p(p,h),h&1&&_(a,1)):(a=me(p),a.c(),_(a,1),a.m(S.parentNode,S)):a&&(H(),g(a,1,1,()=>{a=null}),I())},i(p){P||(_(s),_(f.$$.fragment,p),_(c.$$.fragment,p),_(m.$$.fragment,p),_(a),P=!0)},o(p){g(s),g(f.$$.fragment,p),g(c.$$.fragment,p),g(m.$$.fragment,p),g(a),P=!1},d(p){p&&d(e),s&&s.d(),w(f),w(c),w(m),p&&d($),a&&a.d(p),p&&d(S)}}}function pt(i){let e,l,t;return e=new Le({props:{$$slots:{default:[ct]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment),l=U()},l(n){T(e.$$.fragment,n),l=B(n)},m(n,r){N(e,n,r),k(n,l,r),t=!0},p(n,r){const o={};r&33&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){w(e,n),n&&d(l)}}}function $e(i){let e,l;return e=new Se({props:{$$slots:{default:[pt]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&33&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function _t(i){let e,l,t=i[0],n=[];for(let o=0;o<t.length;o+=1)n[o]=$e(pe(i,t,o));const r=o=>g(n[o],1,1,()=>{n[o]=null});return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=A()},l(o){for(let f=0;f<n.length;f+=1)n[f].l(o);e=A()},m(o,f){for(let u=0;u<n.length;u+=1)n[u].m(o,f);k(o,e,f),l=!0},p(o,f){if(f&1){t=o[0];let u;for(u=0;u<t.length;u+=1){const c=pe(o,t,u);n[u]?(n[u].p(c,f),_(n[u],1)):(n[u]=$e(c),n[u].c(),_(n[u],1),n[u].m(e.parentNode,e))}for(H(),u=t.length;u<n.length;u+=1)r(u);I()}},i(o){if(!l){for(let f=0;f<t.length;f+=1)_(n[f]);l=!0}},o(o){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)g(n[f]);l=!1},d(o){ve(n,o),o&&d(e)}}}function mt(i){let e,l;return e=new we({props:{$$slots:{default:[_t]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&33&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function $t(i){let e,l;return e=new Ne({props:{condensed:!0,$$slots:{default:[mt]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,[n]){const r={};n&33&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function dt(i,e,l){let t,{data:n}=e;return i.$$set=r=>{"data"in r&&l(1,n=r.data)},i.$$.update=()=>{i.$$.dirty&2&&l(0,t=Re.sortBy(n.map(r=>({id:r.name,deprecationReason:r.deprecationReason,name:r.name,description:r.description,default:r.defaultValue,type:r.type})),r=>r.name)||[])},[t,n]}class vt extends q{constructor(e){super(),z(this,e,dt,$t,F,{data:1})}}export{vt as A,Ge as D,et as N,X as T,ut as a,Me as b,Ie as c};