(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("a.accelpay-notice-container{color:inherit;text-decoration:none;display:block}a.accelpay-notice-container span.accelpay-text{opacity:.6;cursor:pointer}a.accelpay-notice-container span.accelpay-text:hover{opacity:.7}a.accelpay-notice-container span.logo-span{opacity:.7;cursor:pointer}a.accelpay-notice-container span.logo-span:hover{opacity:1}")),document.head.appendChild(e)}}catch(c){console.error("vite-plugin-css-injected-by-js",c)}})();
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var $,d,K,P,R,Q,I,D={},X=[],oe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B=Array.isArray;function x(t,e){for(var n in e)t[n]=e[n];return t}function Y(t){var e=t.parentNode;e&&e.removeChild(t)}function re(t,e,n){var l,r,o,c={};for(o in e)o=="key"?l=e[o]:o=="ref"?r=e[o]:c[o]=e[o];if(arguments.length>2&&(c.children=arguments.length>3?$.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)c[o]===void 0&&(c[o]=t.defaultProps[o]);return E(t,c,l,r,null)}function E(t,e,n,l,r){var o={type:t,props:e,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++K};return r==null&&d.vnode!=null&&d.vnode(o),o}function H(t){return t.children}function W(t,e){this.props=t,this.context=e}function N(t,e){if(e==null)return t.__?N(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?N(t):null}function Z(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Z(t)}}function j(t){(!t.__d&&(t.__d=!0)&&P.push(t)&&!M.__r++||R!==d.debounceRendering)&&((R=d.debounceRendering)||Q)(M)}function M(){var t,e,n,l,r,o,c,a,s;for(P.sort(I);t=P.shift();)t.__d&&(e=P.length,l=void 0,r=void 0,o=void 0,a=(c=(n=t).__v).__e,(s=n.__P)&&(l=[],r=[],(o=x({},c)).__v=c.__v+1,q(s,c,o,n.__n,s.ownerSVGElement!==void 0,c.__h!=null?[a]:null,l,a??N(c),c.__h,r),_e(l,c,r),c.__e!=a&&Z(c)),P.length>e&&P.sort(I));M.__r=0}function ee(t,e,n,l,r,o,c,a,s,m,h){var _,g,f,i,p,C,u,y,S,b=0,v=l&&l.__k||X,L=v.length,w=L,A=e.length;for(n.__k=[],_=0;_<A;_++)(i=n.__k[_]=(i=e[_])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?E(null,i,null,null,i):B(i)?E(H,{children:i},null,null,null):i.__b>0?E(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=n,i.__b=n.__b+1,(y=le(i,v,u=_+b,w))===-1?f=D:(f=v[y]||D,v[y]=void 0,w--),q(t,i,f,r,o,c,a,s,m,h),p=i.__e,(g=i.ref)&&f.ref!=g&&(f.ref&&z(f.ref,null,i),h.push(g,i.__c||p,i)),p!=null&&(C==null&&(C=p),(S=f===D||f.__v===null)?y==-1&&b--:y!==u&&(y===u+1?b++:y>u?w>A-u?b+=y-u:b--:b=y<u&&y==u-1?y-u:0),u=_+b,typeof i.type!="function"||y===u&&f.__k!==i.__k?typeof i.type=="function"||y===u&&!S?i.__d!==void 0?(s=i.__d,i.__d=void 0):s=p.nextSibling:s=ne(t,p,s):s=te(i,s,t),typeof n.type=="function"&&(n.__d=s))):(f=v[_])&&f.key==null&&f.__e&&(f.__e==s&&(s=N(f)),F(f,f,!1),v[_]=null);for(n.__e=C,_=L;_--;)v[_]!=null&&(typeof n.type=="function"&&v[_].__e!=null&&v[_].__e==n.__d&&(n.__d=v[_].__e.nextSibling),F(v[_],v[_]))}function te(t,e,n){for(var l,r=t.__k,o=0;r&&o<r.length;o++)(l=r[o])&&(l.__=t,e=typeof l.type=="function"?te(l,e,n):ne(n,l.__e,e));return e}function ne(t,e,n){return n==null||n.parentNode!==t?t.insertBefore(e,null):e==n&&e.parentNode!=null||t.insertBefore(e,n),e.nextSibling}function le(t,e,n,l){var r=t.key,o=t.type,c=n-1,a=n+1,s=e[n];if(s===null||s&&r==s.key&&o===s.type)return n;if(l>(s!=null?1:0))for(;c>=0||a<e.length;){if(c>=0){if((s=e[c])&&r==s.key&&o===s.type)return c;c--}if(a<e.length){if((s=e[a])&&r==s.key&&o===s.type)return a;a++}}return-1}function ie(t,e,n,l,r){var o;for(o in n)o==="children"||o==="key"||o in e||O(t,o,null,n[o],l);for(o in e)r&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===e[o]||O(t,o,e[o],n[o],l)}function G(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||oe.test(e)?n:n+"px"}function O(t,e,n,l,r){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof l=="string"&&(t.style.cssText=l=""),l)for(e in l)n&&e in n||G(t.style,e,"");if(n)for(e in n)l&&n[e]===l[e]||G(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?l||t.addEventListener(e,o?J:V,o):t.removeEventListener(e,o?J:V,o);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function V(t){return this.l[t.type+!1](d.event?d.event(t):t)}function J(t){return this.l[t.type+!0](d.event?d.event(t):t)}function q(t,e,n,l,r,o,c,a,s,m){var h,_,g,f,i,p,C,u,y,S,b,v,L,w,A,k=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(s=n.__h,a=e.__e=n.__e,e.__h=null,o=[a]),(h=d.__b)&&h(e);e:if(typeof k=="function")try{if(u=e.props,y=(h=k.contextType)&&l[h.__c],S=h?y?y.props.value:h.__:l,n.__c?C=(_=e.__c=n.__c).__=_.__E:("prototype"in k&&k.prototype.render?e.__c=_=new k(u,S):(e.__c=_=new W(u,S),_.constructor=k,_.render=se),y&&y.sub(_),_.props=u,_.state||(_.state={}),_.context=S,_.__n=l,g=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),k.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=x({},_.__s)),x(_.__s,k.getDerivedStateFromProps(u,_.__s))),f=_.props,i=_.state,_.__v=e,g)k.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(k.getDerivedStateFromProps==null&&u!==f&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(u,S),!_.__e&&(_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(u,_.__s,S)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(_.props=u,_.state=_.__s,_.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(T){T&&(T.__=e)}),b=0;b<_._sb.length;b++)_.__h.push(_._sb[b]);_._sb=[],_.__h.length&&c.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(u,_.__s,S),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(f,i,p)})}if(_.context=S,_.props=u,_.__P=t,_.__e=!1,v=d.__r,L=0,"prototype"in k&&k.prototype.render){for(_.state=_.__s,_.__d=!1,v&&v(e),h=_.render(_.props,_.state,_.context),w=0;w<_._sb.length;w++)_.__h.push(_._sb[w]);_._sb=[]}else do _.__d=!1,v&&v(e),h=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++L<25);_.state=_.__s,_.getChildContext!=null&&(l=x(x({},l),_.getChildContext())),g||_.getSnapshotBeforeUpdate==null||(p=_.getSnapshotBeforeUpdate(f,i)),ee(t,B(A=h!=null&&h.type===H&&h.key==null?h.props.children:h)?A:[A],e,n,l,r,o,c,a,s,m),_.base=e.__e,e.__h=null,_.__h.length&&c.push(_),C&&(_.__E=_.__=null)}catch(T){e.__v=null,(s||o!=null)&&(e.__e=a,e.__h=!!s,o[o.indexOf(a)]=null),d.__e(T,e,n)}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=ce(n.__e,e,n,l,r,o,c,s,m);(h=d.diffed)&&h(e)}function _e(t,e,n){for(var l=0;l<n.length;l++)z(n[l],n[++l],n[++l]);d.__c&&d.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(o){o.call(r)})}catch(o){d.__e(o,r.__v)}})}function ce(t,e,n,l,r,o,c,a,s){var m,h,_,g=n.props,f=e.props,i=e.type,p=0;if(i==="svg"&&(r=!0),o!=null){for(;p<o.length;p++)if((m=o[p])&&"setAttribute"in m==!!i&&(i?m.localName===i:m.nodeType===3)){t=m,o[p]=null;break}}if(t==null){if(i===null)return document.createTextNode(f);t=r?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,f.is&&f),o=null,a=!1}if(i===null)g===f||a&&t.data===f||(t.data=f);else{if(o=o&&$.call(t.childNodes),h=(g=n.props||D).dangerouslySetInnerHTML,_=f.dangerouslySetInnerHTML,!a){if(o!=null)for(g={},p=0;p<t.attributes.length;p++)g[t.attributes[p].name]=t.attributes[p].value;(_||h)&&(_&&(h&&_.__html==h.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(ie(t,f,g,r,a),_)e.__k=[];else if(ee(t,B(p=e.props.children)?p:[p],e,n,l,r&&i!=="foreignObject",o,c,o?o[0]:n.__k&&N(n,0),a,s),o!=null)for(p=o.length;p--;)o[p]!=null&&Y(o[p]);a||("value"in f&&(p=f.value)!==void 0&&(p!==t.value||i==="progress"&&!p||i==="option"&&p!==g.value)&&O(t,"value",p,g.value,!1),"checked"in f&&(p=f.checked)!==void 0&&p!==t.checked&&O(t,"checked",p,g.checked,!1))}return t}function z(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(l){d.__e(l,n)}}function F(t,e,n){var l,r;if(d.unmount&&d.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||z(l,null,e)),(l=t.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(o){d.__e(o,e)}l.base=l.__P=null,t.__c=void 0}if(l=t.__k)for(r=0;r<l.length;r++)l[r]&&F(l[r],e,n||typeof t.type!="function");n||t.__e==null||Y(t.__e),t.__=t.__e=t.__d=void 0}function se(t,e,n){return this.constructor(t,n)}function ae(t,e,n){var l,r,o,c;d.__&&d.__(t,e),r=(l=typeof n=="function")?null:n&&n.__k||e.__k,o=[],c=[],q(e,t=(!l&&n||e).__k=re(H,null,[t]),r||D,D,e.ownerSVGElement!==void 0,!l&&n?[n]:r?null:e.firstChild?$.call(e.childNodes):null,o,!l&&n?n:r?r.__e:e.firstChild,l,c),_e(o,t,c)}$=X.slice,d={__e:function(t,e,n,l){for(var r,o,c;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(t)),c=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,l||{}),c=r.__d),c)return r.__E=r}catch(a){t=a}throw t}},K=0,W.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof t=="function"&&(t=t(x({},n),this.props)),t&&x(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),j(this))},W.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),j(this))},W.prototype.render=H,P=[],Q=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,I=function(t,e){return t.__v.__b-e.__v.__b},M.__r=0;var fe=0;function U(t,e,n,l,r,o){var c,a,s={};for(a in e)a=="ref"?c=e[a]:s[a]=e[a];var m={type:t,props:s,key:n,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--fe,__source:r,__self:o};if(typeof t=="function"&&(c=t.defaultProps))for(a in c)s[a]===void 0&&(s[a]=c[a]);return d.vnode&&d.vnode(m),m}const pe=()=>U("a",{class:"accelpay-notice-container",href:`https://accelpay.io?campaign=notice-rollout&referrer=${window.location.host}`,target:"_blank",children:U("span",{class:"accelpay-text",children:"All alcoholic beverage sales are made by licensed retailers in the AccelPay network"})});function ue(){return U(pe,{})}try{const e=JSON.parse(document.querySelector("#AccelpayWidgetData").textContent).accelpayWidgetTargets;for(const n of e){const l=document.querySelector(n);if(l){const r=document.createElement("div");r.classList.add("accelpay-widget-container"),l.appendChild(r),ae(U(ue,{}),r)}}console.log("Accelpay initialized!")}catch{console.error("AccelpayWidgetData not found. Accelpay widget will not be rendered.")}