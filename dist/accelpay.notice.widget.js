(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("a.accelpay-notice-container{color:inherit;text-decoration:underline;display:block}a.accelpay-notice-container span.accelpay-text{opacity:.6;cursor:pointer}a.accelpay-notice-container span.accelpay-text:hover{opacity:.7}a.accelpay-notice-container span.logo-span{opacity:.7;cursor:pointer}a.accelpay-notice-container span.logo-span:hover{opacity:1}")),document.head.appendChild(e)}}catch(c){console.error("vite-plugin-css-injected-by-js",c)}})();
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const _ of l)if(_.type==="childList")for(const c of _.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const _={};return l.integrity&&(_.integrity=l.integrity),l.referrerPolicy&&(_.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?_.credentials="include":l.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function r(l){if(l.ep)return;l.ep=!0;const _=n(l);fetch(l.href,_)}})();var U,d,Q,P,z,X,H,A={},Y=[],ie=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q=Array.isArray;function x(t,e){for(var n in e)t[n]=e[n];return t}function Z(t){var e=t.parentNode;e&&e.removeChild(t)}function ce(t,e,n){var r,l,_,c={};for(_ in e)_=="key"?r=e[_]:_=="ref"?l=e[_]:c[_]=e[_];if(arguments.length>2&&(c.children=arguments.length>3?U.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(_ in t.defaultProps)c[_]===void 0&&(c[_]=t.defaultProps[_]);return L(t,c,r,l,null)}function L(t,e,n,r,l){var _={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++Q};return l==null&&d.vnode!=null&&d.vnode(_),_}function $(t){return t.children}function O(t,e){this.props=t,this.context=e}function D(t,e){if(e==null)return t.__?D(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?D(t):null}function ee(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return ee(t)}}function j(t){(!t.__d&&(t.__d=!0)&&P.push(t)&&!I.__r++||z!==d.debounceRendering)&&((z=d.debounceRendering)||X)(I)}function I(){var t,e,n,r,l,_,c,a,s;for(P.sort(H);t=P.shift();)t.__d&&(e=P.length,r=void 0,l=void 0,_=void 0,a=(c=(n=t).__v).__e,(s=n.__P)&&(r=[],l=[],(_=x({},c)).__v=c.__v+1,B(s,c,_,n.__n,s.ownerSVGElement!==void 0,c.__h!=null?[a]:null,r,a??D(c),c.__h,l),_e(r,c,l),c.__e!=a&&ee(c)),P.length>e&&P.sort(H));I.__r=0}function te(t,e,n,r,l,_,c,a,s,m,h){var o,g,f,i,p,N,u,y,w,b=0,v=r&&r.__k||Y,T=v.length,S=T,C=e.length;for(n.__k=[],o=0;o<C;o++)(i=n.__k[o]=(i=e[o])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?L(null,i,null,null,i):q(i)?L($,{children:i},null,null,null):i.__b>0?L(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=n,i.__b=n.__b+1,(y=se(i,v,u=o+b,S))===-1?f=A:(f=v[y]||A,v[y]=void 0,S--),B(t,i,f,l,_,c,a,s,m,h),p=i.__e,(g=i.ref)&&f.ref!=g&&(f.ref&&R(f.ref,null,i),h.push(g,i.__c||p,i)),p!=null&&(N==null&&(N=p),(w=f===A||f.__v===null)?y==-1&&b--:y!==u&&(y===u+1?b++:y>u?S>C-u?b+=y-u:b--:b=y<u&&y==u-1?y-u:0),u=o+b,typeof i.type!="function"||y===u&&f.__k!==i.__k?typeof i.type=="function"||y===u&&!w?i.__d!==void 0?(s=i.__d,i.__d=void 0):s=p.nextSibling:s=oe(t,p,s):s=ne(i,s,t),typeof n.type=="function"&&(n.__d=s))):(f=v[o])&&f.key==null&&f.__e&&(f.__e==s&&(s=D(f)),F(f,f,!1),v[o]=null);for(n.__e=N,o=T;o--;)v[o]!=null&&(typeof n.type=="function"&&v[o].__e!=null&&v[o].__e==n.__d&&(n.__d=v[o].__e.nextSibling),F(v[o],v[o]))}function ne(t,e,n){for(var r,l=t.__k,_=0;l&&_<l.length;_++)(r=l[_])&&(r.__=t,e=typeof r.type=="function"?ne(r,e,n):oe(n,r.__e,e));return e}function oe(t,e,n){return n==null||n.parentNode!==t?t.insertBefore(e,null):e==n&&e.parentNode!=null||t.insertBefore(e,n),e.nextSibling}function se(t,e,n,r){var l=t.key,_=t.type,c=n-1,a=n+1,s=e[n];if(s===null||s&&l==s.key&&_===s.type)return n;if(r>(s!=null?1:0))for(;c>=0||a<e.length;){if(c>=0){if((s=e[c])&&l==s.key&&_===s.type)return c;c--}if(a<e.length){if((s=e[a])&&l==s.key&&_===s.type)return a;a++}}return-1}function ae(t,e,n,r,l){var _;for(_ in n)_==="children"||_==="key"||_ in e||M(t,_,null,n[_],r);for(_ in e)l&&typeof e[_]!="function"||_==="children"||_==="key"||_==="value"||_==="checked"||n[_]===e[_]||M(t,_,e[_],n[_],r)}function G(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||ie.test(e)?n:n+"px"}function M(t,e,n,r,l){var _;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||G(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||G(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")_=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+_]=n,n?r||t.addEventListener(e,_?J:V,_):t.removeEventListener(e,_?J:V,_);else if(e!=="dangerouslySetInnerHTML"){if(l)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function V(t){return this.l[t.type+!1](d.event?d.event(t):t)}function J(t){return this.l[t.type+!0](d.event?d.event(t):t)}function B(t,e,n,r,l,_,c,a,s,m){var h,o,g,f,i,p,N,u,y,w,b,v,T,S,C,k=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(s=n.__h,a=e.__e=n.__e,e.__h=null,_=[a]),(h=d.__b)&&h(e);e:if(typeof k=="function")try{if(u=e.props,y=(h=k.contextType)&&r[h.__c],w=h?y?y.props.value:h.__:r,n.__c?N=(o=e.__c=n.__c).__=o.__E:("prototype"in k&&k.prototype.render?e.__c=o=new k(u,w):(e.__c=o=new O(u,w),o.constructor=k,o.render=pe),y&&y.sub(o),o.props=u,o.state||(o.state={}),o.context=w,o.__n=r,g=o.__d=!0,o.__h=[],o._sb=[]),o.__s==null&&(o.__s=o.state),k.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=x({},o.__s)),x(o.__s,k.getDerivedStateFromProps(u,o.__s))),f=o.props,i=o.state,o.__v=e,g)k.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(k.getDerivedStateFromProps==null&&u!==f&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(u,w),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(u,o.__s,w)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(o.props=u,o.state=o.__s,o.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(E){E&&(E.__=e)}),b=0;b<o._sb.length;b++)o.__h.push(o._sb[b]);o._sb=[],o.__h.length&&c.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(u,o.__s,w),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(f,i,p)})}if(o.context=w,o.props=u,o.__P=t,o.__e=!1,v=d.__r,T=0,"prototype"in k&&k.prototype.render){for(o.state=o.__s,o.__d=!1,v&&v(e),h=o.render(o.props,o.state,o.context),S=0;S<o._sb.length;S++)o.__h.push(o._sb[S]);o._sb=[]}else do o.__d=!1,v&&v(e),h=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++T<25);o.state=o.__s,o.getChildContext!=null&&(r=x(x({},r),o.getChildContext())),g||o.getSnapshotBeforeUpdate==null||(p=o.getSnapshotBeforeUpdate(f,i)),te(t,q(C=h!=null&&h.type===$&&h.key==null?h.props.children:h)?C:[C],e,n,r,l,_,c,a,s,m),o.base=e.__e,e.__h=null,o.__h.length&&c.push(o),N&&(o.__E=o.__=null)}catch(E){e.__v=null,(s||_!=null)&&(e.__e=a,e.__h=!!s,_[_.indexOf(a)]=null),d.__e(E,e,n)}else _==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=fe(n.__e,e,n,r,l,_,c,s,m);(h=d.diffed)&&h(e)}function _e(t,e,n){for(var r=0;r<n.length;r++)R(n[r],n[++r],n[++r]);d.__c&&d.__c(e,t),t.some(function(l){try{t=l.__h,l.__h=[],t.some(function(_){_.call(l)})}catch(_){d.__e(_,l.__v)}})}function fe(t,e,n,r,l,_,c,a,s){var m,h,o,g=n.props,f=e.props,i=e.type,p=0;if(i==="svg"&&(l=!0),_!=null){for(;p<_.length;p++)if((m=_[p])&&"setAttribute"in m==!!i&&(i?m.localName===i:m.nodeType===3)){t=m,_[p]=null;break}}if(t==null){if(i===null)return document.createTextNode(f);t=l?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,f.is&&f),_=null,a=!1}if(i===null)g===f||a&&t.data===f||(t.data=f);else{if(_=_&&U.call(t.childNodes),h=(g=n.props||A).dangerouslySetInnerHTML,o=f.dangerouslySetInnerHTML,!a){if(_!=null)for(g={},p=0;p<t.attributes.length;p++)g[t.attributes[p].name]=t.attributes[p].value;(o||h)&&(o&&(h&&o.__html==h.__html||o.__html===t.innerHTML)||(t.innerHTML=o&&o.__html||""))}if(ae(t,f,g,l,a),o)e.__k=[];else if(te(t,q(p=e.props.children)?p:[p],e,n,r,l&&i!=="foreignObject",_,c,_?_[0]:n.__k&&D(n,0),a,s),_!=null)for(p=_.length;p--;)_[p]!=null&&Z(_[p]);a||("value"in f&&(p=f.value)!==void 0&&(p!==t.value||i==="progress"&&!p||i==="option"&&p!==g.value)&&M(t,"value",p,g.value,!1),"checked"in f&&(p=f.checked)!==void 0&&p!==t.checked&&M(t,"checked",p,g.checked,!1))}return t}function R(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){d.__e(r,n)}}function F(t,e,n){var r,l;if(d.unmount&&d.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||R(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(_){d.__e(_,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(l=0;l<r.length;l++)r[l]&&F(r[l],e,n||typeof t.type!="function");n||t.__e==null||Z(t.__e),t.__=t.__e=t.__d=void 0}function pe(t,e,n){return this.constructor(t,n)}function re(t,e,n){var r,l,_,c;d.__&&d.__(t,e),l=(r=typeof n=="function")?null:n&&n.__k||e.__k,_=[],c=[],B(e,t=(!r&&n||e).__k=ce($,null,[t]),l||A,A,e.ownerSVGElement!==void 0,!r&&n?[n]:l?null:e.firstChild?U.call(e.childNodes):null,_,!r&&n?n:l?l.__e:e.firstChild,r,c),_e(_,t,c)}U=Y.slice,d={__e:function(t,e,n,r){for(var l,_,c;e=e.__;)if((l=e.__c)&&!l.__)try{if((_=l.constructor)&&_.getDerivedStateFromError!=null&&(l.setState(_.getDerivedStateFromError(t)),c=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(t,r||{}),c=l.__d),c)return l.__E=l}catch(a){t=a}throw t}},Q=0,O.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof t=="function"&&(t=t(x({},n),this.props)),t&&x(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),j(this))},O.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),j(this))},O.prototype.render=$,P=[],X=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,H=function(t,e){return t.__v.__b-e.__v.__b},I.__r=0;var ue=0;function W(t,e,n,r,l,_){var c,a,s={};for(a in e)a=="ref"?c=e[a]:s[a]=e[a];var m={type:t,props:s,key:n,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ue,__source:l,__self:_};if(typeof t=="function"&&(c=t.defaultProps))for(a in c)s[a]===void 0&&(s[a]=c[a]);return d.vnode&&d.vnode(m),m}const de=()=>W("a",{class:"accelpay-notice-container",href:`https://accelpay.io?campaign=notice-rollout&referrer=${window.location.host}`,target:"_blank",children:W("span",{class:"accelpay-text",children:"All alcoholic beverage sales are made by licensed retailers in the AccelPay network"})});function le(){return W(de,{})}const K=t=>{if(t){for(const e of t)if(e){const n=document.querySelector(e.selector);if(n&&!n.querySelector(".accelpay-widget-container")){console.log("Accelpay Notice Rendered!");const r=document.createElement("div");r.setAttribute("class","accelpay-widget-container"),n.appendChild(r),(!n.style||typeof n.style.indexOf!="function"||!n.style.indexOf(e.extraStyle)>-1)&&(n.style=n.style+e.extraStyle),re(W(le,{}),r)}}}};try{window.accelpayNoticeWidget={};const t=document.querySelector("#AccelpayWidgetData");if(t){const e=t.textContent,n=JSON.parse(e),r=n.accelpayWidgetTargets,l=n.intervalTime||2e3;if(r){K(r);const _=setInterval(()=>K(r),l);window.accelpayNoticeWidget.clearTargetsInterval=()=>clearInterval(_)}}window.accelpayNoticeWidget.renderNoticeComponent=e=>{const n=document.querySelector(e);n&&re(W(le,{}),n)},console.log("Accelpay initialized!")}catch{console.error("AccelpayWidgetData not found. Accelpay widget will not be rendered.")}
